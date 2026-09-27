import React, { useEffect, useRef, useState } from "react";
import "../simFigure/SimFigure.css";
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

const HOLD_S = 7; // time on each orbital
const MORPH_S = 1.6; // glide time of one point into the next orbital
const STAGGER_S = 0.7; // spread of glide start times across points
const BLOOM_S = 1.4; // opening bloom out of the nucleus
const SHIMMER = 0.05; // fraction of points re-measured per second
const SPIN = 0.2; // auto-rotation, rad/s about the z axis
const TILT = 0.38; // default camera elevation (rad)
const CAMERA = 3.4; // camera distance for the perspective (cloud radius ~ 1)

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

const easeInOut = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const n = parseInt(
    h.length === 3
      ? h
          .split("")
          .map((c) => c + c)
          .join("")
      : h,
    16
  );
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

/** A soft round glow, pre-rendered once per colour and theme. */
function makeSprite(color, px) {
  const c = document.createElement("canvas");
  c.width = c.height = px;
  const g = c.getContext("2d");
  const [r, gg, b] = hexToRgb(color);
  const grd = g.createRadialGradient(px / 2, px / 2, 0, px / 2, px / 2, px / 2);
  grd.addColorStop(0, `rgba(${r},${gg},${b},1)`);
  grd.addColorStop(0.3, `rgba(${r},${gg},${b},0.8)`);
  grd.addColorStop(1, `rgba(${r},${gg},${b},0)`);
  g.fillStyle = grd;
  g.fillRect(0, 0, px, px);
  return c;
}

export default function OrbitalCloud({ className = "" }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const selectRef = useRef(() => {});
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const orbitals = ORBITALS.map(prepare);
    const N = window.innerWidth < 768 ? 3000 : 4800;
    // current position, glide start and glide target of every point
    const x = new Float32Array(N);
    const y = new Float32Array(N);
    const z = new Float32Array(N);
    const ax = new Float32Array(N);
    const ay = new Float32Array(N);
    const az = new Float32Array(N);
    const bx = new Float32Array(N);
    const by = new Float32Array(N);
    const bz = new Float32Array(N);
    const prog = new Float32Array(N); // glide progress (<0: waiting, >=1: done)
    const fade = new Float32Array(N); // alpha multiplier (shimmer fade-in)
    const sgn = new Int8Array(N);
    const nsgn = new Int8Array(N);

    let idx = 0;
    let tHold = 0;
    let bloom = true;
    let yaw = 0.6;
    let pitch = TILT;
    let vYaw = 0;
    let vPitch = 0;
    let dragging = false;
    let size = 0;
    let dpr = 1;
    let glow = true;
    let sprites = [];
    let spritePx = 16;

    const target = (i, o) => {
      const [sx, sy, sz, s] = sample(o);
      bx[i] = sx;
      by[i] = sy;
      bz[i] = sz;
      nsgn[i] = s;
    };

    /** Glide every point from where it is to a fresh sample of orbital j. */
    const morphTo = (j, instant) => {
      idx = j;
      tHold = 0;
      for (let i = 0; i < N; i++) {
        ax[i] = x[i];
        ay[i] = y[i];
        az[i] = z[i];
        target(i, orbitals[j]);
        if (instant) {
          x[i] = bx[i];
          y[i] = by[i];
          z[i] = bz[i];
          sgn[i] = nsgn[i];
          prog[i] = 1;
          fade[i] = 1;
        } else {
          prog[i] = -Math.random() * (STAGGER_S / MORPH_S);
        }
      }
    };

    const readTheme = () => {
      const cs = getComputedStyle(wrap);
      const pos = cs.getPropertyValue("--orbital-pos").trim() || "#60a5fa";
      const neg = cs.getPropertyValue("--orbital-neg").trim() || "#fbbf24";
      glow = document.documentElement.dataset.theme !== "light";
      spritePx = Math.round(12 * dpr);
      sprites = [makeSprite(neg, spritePx), makeSprite(pos, spritePx)];
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      size = wrap.clientWidth;
      canvas.width = Math.round(size * dpr);
      canvas.height = Math.round(size * dpr);
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      readTheme();
    };

    const draw = () => {
      const W = canvas.width;
      ctx.clearRect(0, 0, W, W);
      ctx.globalCompositeOperation = glow ? "lighter" : "source-over";
      const c = W / 2;
      const scale = W * 0.36;
      const cyw = Math.cos(yaw);
      const syw = Math.sin(yaw);
      const cp = Math.cos(pitch);
      const sp = Math.sin(pitch);
      const base = (glow ? 5.2 : 4.6) * dpr;
      const alphaBase = glow ? 0.55 : 0.7;
      for (let i = 0; i < N; i++) {
        let a = fade[i];
        if (bloom) a *= Math.min(1, Math.max(0, prog[i]) * 2.5);
        if (a <= 0.01) continue;
        const xr = x[i] * cyw - y[i] * syw;
        const yr = x[i] * syw + y[i] * cyw;
        const depth = yr * cp + z[i] * sp; // toward the viewer: > 0
        const up = z[i] * cp - yr * sp;
        const f = CAMERA / (CAMERA - depth);
        const s = base * f * (0.7 + 0.3 * f);
        ctx.globalAlpha = Math.min(
          1,
          alphaBase * a * (0.45 + 0.55 * Math.min(1, (depth + 1.1) / 2.2))
        );
        ctx.drawImage(
          sprites[sgn[i] > 0 ? 1 : 0],
          c + xr * scale * f - s / 2,
          c - up * scale * f - s / 2,
          s,
          s
        );
      }
      // The proton: a small glowing point at the origin.
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
      const g = ctx.createRadialGradient(c, c, 0, c, c, 8 * dpr);
      g.addColorStop(
        0,
        glow ? "rgba(255,255,255,0.95)" : "rgba(15,23,42,0.85)"
      );
      g.addColorStop(1, glow ? "rgba(255,255,255,0)" : "rgba(15,23,42,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(c, c, 8 * dpr, 0, 2 * Math.PI);
      ctx.fill();
    };

    resize();

    // Start every point at the nucleus, gliding out to the first orbital.
    for (let i = 0; i < N; i++) {
      fade[i] = 1;
      target(i, orbitals[0]);
      ax[i] = bx[i] * 0.04;
      ay[i] = by[i] * 0.04;
      az[i] = bz[i] * 0.04;
      x[i] = ax[i];
      y[i] = ay[i];
      z[i] = az[i];
      sgn[i] = nsgn[i];
      prog[i] = -Math.random() * (STAGGER_S / BLOOM_S);
    }

    const step = (dt) => {
      if (!dragging) {
        yaw += (SPIN + vYaw) * dt;
        pitch += vPitch * dt;
        vYaw *= Math.exp(-2.5 * dt);
        vPitch *= Math.exp(-2.5 * dt);
        pitch += (TILT - pitch) * Math.min(1, 0.6 * dt); // drift back
      }
      const rate = dt / (bloom ? BLOOM_S : MORPH_S);
      let gliding = false;
      for (let i = 0; i < N; i++) {
        if (prog[i] < 1) {
          gliding = true;
          prog[i] = Math.min(1, prog[i] + rate);
          const t = easeInOut(Math.max(0, prog[i]));
          x[i] = ax[i] + (bx[i] - ax[i]) * t;
          y[i] = ay[i] + (by[i] - ay[i]) * t;
          z[i] = az[i] + (bz[i] - az[i]) * t;
          if (t > 0.5) sgn[i] = nsgn[i];
        } else if (fade[i] < 1) {
          fade[i] = Math.min(1, fade[i] + dt / 0.6);
        }
      }
      if (!gliding) {
        bloom = false;
        tHold += dt;
        // Quantum shimmer: re-measure a few points at a time.
        const k = Math.random() < (N * SHIMMER * dt) % 1 ? 1 : 0;
        const n = Math.floor(N * SHIMMER * dt) + k;
        for (let j = 0; j < n; j++) {
          const i = (Math.random() * N) | 0;
          target(i, orbitals[idx]);
          x[i] = bx[i];
          y[i] = by[i];
          z[i] = bz[i];
          sgn[i] = nsgn[i];
          fade[i] = 0;
        }
        if (tHold > HOLD_S) {
          const next = (idx + 1) % orbitals.length;
          setCurrent(next);
          morphTo(next, false);
        }
      }
    };

    selectRef.current = (j) => {
      if (j === idx && !bloom) return;
      bloom = false;
      setCurrent(j);
      morphTo(j, reduce);
      if (reduce) draw();
    };

    if (reduce) {
      morphTo(0, true);
      bloom = false;
      draw();
      const ro = new ResizeObserver(() => {
        resize();
        draw();
      });
      ro.observe(wrap);
      const mo = new MutationObserver(() => {
        readTheme();
        draw();
      });
      mo.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });
      return () => {
        ro.disconnect();
        mo.disconnect();
      };
    }

    // Drag to rotate (mouse and pen; touch keeps scrolling the page).
    let lastX = 0;
    let lastY = 0;
    let lastT = 0;
    const onDown = (e) => {
      if (e.pointerType === "touch") return;
      e.preventDefault(); // no text selection or drag-scroll while rotating
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      lastT = performance.now();
      vYaw = 0;
      vPitch = 0;
      canvas.setPointerCapture(e.pointerId);
      wrap.classList.add("is-dragging");
    };
    const onMove = (e) => {
      if (!dragging) return;
      const now = performance.now();
      const dts = Math.max((now - lastT) / 1000, 1e-3);
      const dYaw = ((e.clientX - lastX) / size) * 3;
      const dPitch = ((e.clientY - lastY) / size) * 3;
      yaw += dYaw;
      pitch = Math.max(-1.2, Math.min(1.2, pitch + dPitch));
      vYaw = dYaw / dts;
      vPitch = dPitch / dts;
      lastX = e.clientX;
      lastY = e.clientY;
      lastT = now;
      if (!raf) draw();
    };
    const onUp = () => {
      dragging = false;
      wrap.classList.remove("is-dragging");
      vYaw = Math.max(-6, Math.min(6, vYaw));
      vPitch = Math.max(-3, Math.min(3, vPitch));
    };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointercancel", onUp);

    let raf = 0;
    let last = 0;
    let visible = true;

    const frame = (t) => {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;
      step(dt);
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
    const mo = new MutationObserver(() => {
      readTheme();
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
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const o = ORBITALS[current];
  return (
    <figure className={`sim-figure orbital-cloud ${className}`.trim()}>
      <div ref={wrapRef} className="sim-canvas-wrap orbital-cloud-canvas-wrap">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Animated electron cloud of a hydrogen atom, built from random samples of the wavefunction and cycling through several orbitals"
        />
      </div>
      <figcaption className="sim-caption">
        Hydrogen{" "}
        <span className="sim-name">
          {o.name}
          <sub>{o.sub}</sub>
        </span>{" "}
        orbital{" "}
        <span className="sim-nowrap">
          · <i>n</i> = {o.n}, <i>l</i> = {o.l}, <i>m</i> = {o.m}
        </span>
        <span className="sim-note">
          Monte Carlo samples of |ψ|², coloured by the sign of ψ
        </span>
      </figcaption>
      <div className="sim-picker" role="group" aria-label="Choose an orbital">
        {ORBITALS.map((orb, i) => (
          <button
            key={orb.name + orb.sub}
            type="button"
            className="sim-chip"
            aria-pressed={i === current}
            aria-label={`Show the ${orb.name}${orb.sub} orbital`}
            onClick={() => selectRef.current(i)}
          >
            {orb.name}
            <sub>{orb.sub}</sub>
          </button>
        ))}
      </div>
    </figure>
  );
}
