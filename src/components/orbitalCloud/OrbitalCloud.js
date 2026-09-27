import React, { useEffect, useRef, useState } from "react";
import "./OrbitalCloud.css";

/*
 * Hydrogen orbitals as Monte Carlo point clouds.
 *
 * Each point is an independent sample of |ψ_nlm|² = R_nl(r)² · Y(θ,φ)²,
 * drawn exactly: r from the radial distribution r²R² (inverse CDF on a
 * grid) and the direction by rejection against the real spherical
 * harmonic. Points are coloured by the sign of ψ. The cloud builds up,
 * rotates slowly about the z axis, and morphs into the next orbital by
 * resampling a fraction of its points every frame.
 *
 * Radial functions are unnormalised (atomic units, a0 = 1): only their
 * shape matters for sampling. Angular parts are the real harmonics written
 * in terms of the unit vector (x, y, z).
 */
const ORBITALS = [
  {
    name: "2p",
    sub: "z",
    n: 2,
    l: 1,
    m: "0",
    R: (r) => r * Math.exp(-r / 2),
    Y: (x, y, z) => z,
  },
  {
    name: "3d",
    sub: "z²",
    n: 3,
    l: 2,
    m: "0",
    R: (r) => r * r * Math.exp(-r / 3),
    Y: (x, y, z) => 3 * z * z - 1,
  },
  {
    name: "3d",
    sub: "xz",
    n: 3,
    l: 2,
    m: "±1",
    R: (r) => r * r * Math.exp(-r / 3),
    Y: (x, y, z) => x * z,
  },
  {
    name: "3p",
    sub: "z",
    n: 3,
    l: 1,
    m: "0",
    R: (r) => r * (6 - r) * Math.exp(-r / 3),
    Y: (x, y, z) => z,
  },
  {
    name: "4f",
    sub: "z³",
    n: 4,
    l: 3,
    m: "0",
    R: (r) => r * r * r * Math.exp(-r / 4),
    Y: (x, y, z) => z * (5 * z * z - 3),
  },
  {
    name: "4f",
    sub: "xyz",
    n: 4,
    l: 3,
    m: "±2",
    R: (r) => r * r * r * Math.exp(-r / 4),
    Y: (x, y, z) => x * y * z,
  },
];

const HOLD_S = 6.5; // time on each orbital
const MORPH_S = 1.8; // time to resample the whole cloud into the next one
const BUILD_S = 2.6; // initial build-up
const SPIN = 0.22; // rad/s about the z axis
const TILT = 0.38; // camera elevation (rad)

/** Precompute an inverse-CDF sampler for r²R(r)² and the angular maximum. */
function prepare(orb) {
  const rMax = 7 * orb.n * orb.n + 12;
  const G = 3000;
  const cdf = new Float64Array(G + 1);
  for (let i = 1; i <= G; i++) {
    const r = (i / G) * rMax;
    const Rv = orb.R(r);
    cdf[i] = cdf[i - 1] + r * r * Rv * Rv;
  }
  const total = cdf[G];
  for (let i = 0; i <= G; i++) cdf[i] /= total;
  // Radius holding 98.5% of the probability sets the on-screen scale.
  let k = 0;
  while (cdf[k] < 0.985) k++;
  const rScale = (k / G) * rMax;

  let yMax = 0;
  for (let i = 0; i < 4000; i++) {
    const [x, y, z] = randomDirection();
    yMax = Math.max(yMax, Math.abs(orb.Y(x, y, z)));
  }
  return { ...orb, cdf, G, rMax, rScale, yMax2: yMax * yMax * 1.05 };
}

function gauss() {
  const u = 1 - Math.random();
  const v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function randomDirection() {
  const x = gauss();
  const y = gauss();
  const z = gauss();
  const n = Math.hypot(x, y, z) || 1;
  return [x / n, y / n, z / n];
}

/** One exact sample of |ψ|²: returns [x, y, z, sign] in units of rScale. */
function sample(o) {
  // radius: invert the tabulated CDF (binary search + linear interpolation)
  const u = Math.random();
  let lo = 0;
  let hi = o.G;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (o.cdf[mid] < u) lo = mid;
    else hi = mid;
  }
  const f = (u - o.cdf[lo]) / (o.cdf[hi] - o.cdf[lo] || 1);
  const r = ((lo + f) / o.G) * o.rMax;
  // direction: rejection against Y²
  let x;
  let y;
  let z;
  let Yv;
  do {
    [x, y, z] = randomDirection();
    Yv = o.Y(x, y, z);
  } while (Math.random() * o.yMax2 > Yv * Yv);
  const s = r / o.rScale;
  return [x * s, y * s, z * s, Math.sign(o.R(r) * Yv) || 1];
}

export default function OrbitalCloud({ className = "" }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const orbitals = ORBITALS.map(prepare);
    const N = window.innerWidth < 768 ? 3200 : 5200;
    const px = new Float32Array(N);
    const py = new Float32Array(N);
    const pz = new Float32Array(N);
    const ps = new Int8Array(N);
    const order = Array.from({ length: N }, (_, i) => i).sort(
      () => Math.random() - 0.5
    );

    let idx = 0;
    let live = 0; // points drawn so far (build-up)
    let cursor = 0; // next point to resample during a morph
    let morphing = false;
    let tOrbital = 0;
    let angle = 0.6;
    let size = 0;
    let dpr = 1;
    let colors = { pos: "#60a5fa", neg: "#f59e0b", glow: true };

    const put = (i, o) => {
      const [x, y, z, s] = sample(o);
      px[i] = x;
      py[i] = y;
      pz[i] = z;
      ps[i] = s;
    };

    const readColors = () => {
      const cs = getComputedStyle(wrap);
      colors = {
        pos: cs.getPropertyValue("--orbital-pos").trim() || colors.pos,
        neg: cs.getPropertyValue("--orbital-neg").trim() || colors.neg,
        glow: document.documentElement.dataset.theme !== "light",
      };
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = wrap.clientWidth;
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
    };

    const draw = () => {
      const W = canvas.width;
      ctx.clearRect(0, 0, W, W);
      ctx.globalCompositeOperation = colors.glow ? "lighter" : "source-over";
      const c = W / 2;
      const scale = W * 0.44;
      const ca = Math.cos(angle);
      const sa = Math.sin(angle);
      const ce = Math.cos(TILT);
      const se = Math.sin(TILT);
      const dot = 1.9 * dpr;
      // Three depth bands per sign keep fillStyle changes to six per frame.
      for (const sign of [1, -1]) {
        ctx.fillStyle = sign > 0 ? colors.pos : colors.neg;
        for (let band = 0; band < 3; band++) {
          ctx.globalAlpha = colors.glow
            ? 0.3 + band * 0.25
            : 0.35 + band * 0.25;
          for (let k = 0; k < live; k++) {
            const i = order[k];
            if (ps[i] !== sign) continue;
            const xr = px[i] * ca - py[i] * sa;
            const yr = px[i] * sa + py[i] * ca;
            const depth = yr * ce + pz[i] * se; // toward the viewer: > 0
            const b = depth < -0.2 ? 0 : depth < 0.2 ? 1 : 2;
            if (b !== band) continue;
            const sx = c + xr * scale;
            const sy = c - (pz[i] * ce - yr * se) * scale;
            ctx.fillRect(sx - dot / 2, sy - dot / 2, dot, dot);
          }
        }
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      // The proton: a small glowing point at the origin.
      const g = ctx.createRadialGradient(c, c, 0, c, c, 7 * dpr);
      g.addColorStop(
        0,
        colors.glow ? "rgba(255,255,255,0.95)" : "rgba(15,23,42,0.9)"
      );
      g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(c, c, 7 * dpr, 0, 2 * Math.PI);
      ctx.fill();
    };

    readColors();
    resize();

    // Fill the first orbital (built up progressively when animating).
    for (let i = 0; i < N; i++) put(i, orbitals[0]);

    if (reduce) {
      live = N;
      draw();
      const ro = new ResizeObserver(() => {
        resize();
        draw();
      });
      ro.observe(wrap);
      return () => ro.disconnect();
    }

    let raf = 0;
    let last = 0;
    let visible = true;

    const frame = (t) => {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;
      angle += SPIN * dt;
      if (live < N) live = Math.min(N, live + Math.ceil((N * dt) / BUILD_S));
      else tOrbital += dt;

      if (!morphing && tOrbital > HOLD_S) {
        idx = (idx + 1) % orbitals.length;
        setCurrent(idx);
        morphing = true;
        cursor = 0;
        tOrbital = 0;
      }
      if (morphing) {
        const n = Math.ceil((N * dt) / MORPH_S);
        for (let j = 0; j < n && cursor < N; j++, cursor++) {
          put(order[cursor], orbitals[idx]);
        }
        if (cursor >= N) morphing = false;
      }
      draw();
      raf = requestAnimationFrame(frame);
    };

    const start = () => {
      if (!raf && visible && document.visibilityState === "visible") {
        last = 0;
        raf = requestAnimationFrame(frame);
      }
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    io.observe(wrap);
    const onVis = () =>
      document.visibilityState === "visible" ? start() : stop();
    document.addEventListener("visibilitychange", onVis);
    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(wrap);
    // Theme switches change the palette.
    const mo = new MutationObserver(() => {
      readColors();
      draw();
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    draw();
    start();
    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  const o = ORBITALS[current];
  return (
    <figure className={`orbital-cloud ${className}`.trim()}>
      <div ref={wrapRef} className="orbital-cloud-canvas-wrap">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Animated electron cloud of a hydrogen atom, built from random samples of the wavefunction and cycling through several orbitals"
        />
      </div>
      <figcaption className="orbital-cloud-caption" aria-live="off">
        Hydrogen{" "}
        <span className="orbital-cloud-name">
          {o.name}
          <sub>{o.sub}</sub>
        </span>{" "}
        orbital{" "}
        <span className="orbital-cloud-qn">
          · <i>n</i> = {o.n}, <i>l</i> = {o.l}, <i>m</i> = {o.m}
        </span>
        <span className="orbital-cloud-note">
          Monte Carlo samples of |ψ|², coloured by the sign of ψ
        </span>
      </figcaption>
    </figure>
  );
}
