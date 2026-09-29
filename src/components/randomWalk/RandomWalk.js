import React, { useEffect, useRef, useState } from "react";
import "../simFigure/SimFigure.css";
import "./RandomWalk.css";

/*
 * Brownian motion with drift, x(t) = μt + σW(t), for t in [0, 1].
 *
 * Each cycle draws a fan of independent paths from one starting point
 * (Euler–Maruyama steps, exact for this process), with the mean μt and the
 * ±2σ√t band on top: the mean grows like t while the spread grows only like
 * √t, so over time the drift wins over the noise. Paths are coloured with
 * the three service accents. The regime cycles automatically and can be
 * picked with the chips.
 */
const MODES = [
  { label: "Balanced", mu: 1.5, sigma: 0.8 },
  { label: "Drift-dominated", mu: 2.6, sigma: 0.35 },
  { label: "Noise-dominated", mu: 0.4, sigma: 1.1 },
];

const STEPS = 300; // time steps per path
const SWEEP_S = 8; // seconds to draw one fan
const HOLD_S = 2.4; // pause on the finished fan
const FADE_S = 0.9; // fade-out before the next fan
const Y_MIN = -2.6; // vertical range of x(t) shown
const Y_MAX = 3.6;

function gauss() {
  const u = 1 - Math.random();
  const v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

export default function RandomWalk({ className = "" }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const selectRef = useRef(() => {});
  const [mode, setMode] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const N = window.innerWidth < 768 ? 28 : 42;
    const paths = new Float32Array(N * (STEPS + 1));
    let m = 0; // current mode index
    let phase = 0; // seconds into the current cycle
    let dpr = 1;
    let W = 0;
    let H = 0;
    let col = {};
    // Paths drawn so far (steps 0..layerK), kept between frames.
    const layer = document.createElement("canvas");
    const lctx = layer.getContext("2d");
    let layerK = 0;
    const clearLayer = () => {
      lctx.clearRect(0, 0, layer.width, layer.height);
      layerK = 0;
    };

    const generate = () => {
      clearLayer();
      const { mu, sigma } = MODES[m];
      const dt = 1 / STEPS;
      const sdt = sigma * Math.sqrt(dt);
      for (let p = 0; p < N; p++) {
        const o = p * (STEPS + 1);
        paths[o] = 0;
        for (let k = 0; k < STEPS; k++) {
          paths[o + k + 1] = paths[o + k] + mu * dt + sdt * gauss();
        }
      }
    };

    const readTheme = () => {
      const cs = getComputedStyle(wrap);
      const v = (name, fallback) =>
        cs.getPropertyValue(name).trim() || fallback;
      col = {
        walkers: [
          v("--walk-1", "#60a5fa"),
          v("--walk-2", "#2dd4bf"),
          v("--walk-3", "#a78bfa"),
        ],
        mean: v("--walk-mean", "#e2e8f0"),
        halo: v("--walk-halo", "#07111f"),
        band: v("--walk-band", "#93c5fd"),
        axis: v("--walk-axis", "rgba(148,163,184,0.35)"),
        label: v("--walk-label", "#94a3b8"),
        glow: document.documentElement.dataset.theme !== "light",
      };
      clearLayer(); // colours or blend mode changed
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = wrap.clientWidth;
      const h = Math.round(w * 0.8);
      W = Math.round(w * dpr);
      H = Math.round(h * dpr);
      canvas.width = W;
      canvas.height = H;
      layer.width = W;
      layer.height = H;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      readTheme();
    };

    // plot area
    const box = () => {
      const left = W * 0.06;
      const right = W * 0.86;
      const top = H * 0.07;
      const bottom = H * 0.93;
      return {
        X: (t) => left + t * (right - left),
        Y: (x) => top + ((Y_MAX - x) / (Y_MAX - Y_MIN)) * (bottom - top),
        left,
        right,
      };
    };

    const draw = () => {
      // Nothing to draw on while the figure has no width (hidden or not yet
      // laid out); drawImage of a 0×0 canvas would throw.
      if (!W || !H) return;
      ctx.clearRect(0, 0, W, H);
      const { X, Y, left, right } = box();
      const { mu, sigma } = MODES[m];
      const sweep = Math.min(1, phase / SWEEP_S);
      const k = Math.max(1, Math.round(sweep * STEPS));
      const tNow = k / STEPS;
      const fade =
        phase > SWEEP_S + HOLD_S
          ? Math.max(0, 1 - (phase - SWEEP_S - HOLD_S) / FADE_S)
          : 1;

      // time axis at x = 0
      ctx.globalAlpha = fade;
      ctx.strokeStyle = col.axis;
      ctx.lineWidth = 1 * dpr;
      ctx.beginPath();
      ctx.moveTo(left, Y(0));
      ctx.lineTo(right, Y(0));
      ctx.stroke();

      // ±2σ√t band
      ctx.fillStyle = col.band;
      ctx.globalAlpha = 0.1 * fade;
      ctx.beginPath();
      for (let j = 0; j <= k; j++) {
        const t = j / STEPS;
        ctx.lineTo(X(t), Y(mu * t + 2 * sigma * Math.sqrt(t)));
      }
      for (let j = k; j >= 0; j--) {
        const t = j / STEPS;
        ctx.lineTo(X(t), Y(mu * t - 2 * sigma * Math.sqrt(t)));
      }
      ctx.closePath();
      ctx.fill();
      // band edges
      ctx.globalAlpha = 0.55 * fade;
      ctx.strokeStyle = col.band;
      ctx.lineWidth = 1.2 * dpr;
      ctx.setLineDash([3 * dpr, 4 * dpr]);
      for (const sgn of [1, -1]) {
        ctx.beginPath();
        for (let j = 0; j <= k; j++) {
          const t = j / STEPS;
          ctx.lineTo(X(t), Y(mu * t + sgn * 2 * sigma * Math.sqrt(t)));
        }
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // paths: only newly reached steps are drawn, into a layer that keeps
      // the rest. Both blend modes are associative, so this equals a full
      // redraw.
      ctx.globalCompositeOperation = col.glow ? "lighter" : "source-over";
      if (k < layerK) clearLayer();
      if (k > layerK) {
        lctx.globalCompositeOperation = ctx.globalCompositeOperation;
        lctx.lineWidth = 1.2 * dpr;
        lctx.lineJoin = "round";
        lctx.globalAlpha = col.glow ? 0.2 : 0.32;
        for (let p = 0; p < N; p++) {
          const o = p * (STEPS + 1);
          lctx.strokeStyle = col.walkers[p % 3];
          lctx.beginPath();
          lctx.moveTo(X(layerK / STEPS), Y(paths[o + layerK]));
          for (let j = layerK + 1; j <= k; j++)
            lctx.lineTo(X(j / STEPS), Y(paths[o + j]));
          lctx.stroke();
        }
        layerK = k;
      }
      ctx.globalAlpha = fade;
      ctx.drawImage(layer, 0, 0);
      // path heads
      for (let p = 0; p < N; p++) {
        ctx.fillStyle = col.walkers[p % 3];
        ctx.globalAlpha = 0.9 * fade;
        ctx.beginPath();
        ctx.arc(
          X(tNow),
          Y(paths[p * (STEPS + 1) + k]),
          2.1 * dpr,
          0,
          2 * Math.PI
        );
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";

      // mean μt, with a dark halo so it reads on top of the paths
      ctx.globalAlpha = 0.6 * fade;
      ctx.strokeStyle = col.halo;
      ctx.lineWidth = 5 * dpr;
      ctx.beginPath();
      ctx.moveTo(X(0), Y(0));
      ctx.lineTo(X(tNow), Y(mu * tNow));
      ctx.stroke();
      ctx.globalAlpha = fade;
      ctx.strokeStyle = col.mean;
      ctx.lineWidth = 2 * dpr;
      ctx.setLineDash([7 * dpr, 5 * dpr]);
      ctx.beginPath();
      ctx.moveTo(X(0), Y(0));
      ctx.lineTo(X(tNow), Y(mu * tNow));
      ctx.stroke();
      ctx.setLineDash([]);

      // origin
      ctx.fillStyle = col.mean;
      ctx.beginPath();
      ctx.arc(X(0), Y(0), 3 * dpr, 0, 2 * Math.PI);
      ctx.fill();

      // labels once the fan is drawn
      if (sweep >= 1) {
        ctx.globalAlpha = fade;
        ctx.fillStyle = col.label;
        ctx.font = `italic ${15 * dpr}px Charter, Cambria, Georgia, serif`;
        ctx.textBaseline = "middle";
        const lx = right + 8 * dpr;
        ctx.fillText("μt", lx, Y(mu));
        ctx.fillText("+2σ√t", lx, Y(mu + 2 * sigma) - 2 * dpr);
        ctx.fillText("−2σ√t", lx, Y(mu - 2 * sigma) + 2 * dpr);
        ctx.fillText("t", right - 4 * dpr, Y(0) + 11 * dpr);
      }
      ctx.globalAlpha = 1;
    };

    const setMode_ = (j) => {
      m = j;
      setMode(j);
      phase = reduce ? SWEEP_S : 0;
      generate();
      draw();
    };
    selectRef.current = setMode_;

    resize();
    generate();

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

    if (reduce) {
      phase = SWEEP_S; // a finished fan, no motion
      draw();
      return () => {
        ro.disconnect();
        mo.disconnect();
      };
    }

    let raf = 0;
    let last = 0;
    let visible = true;
    const frame = (t) => {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;
      phase += dt;
      if (phase > SWEEP_S + HOLD_S + FADE_S) setMode_((m + 1) % MODES.length);
      else draw();
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

  const { mu, sigma } = MODES[mode];
  return (
    <figure className={`sim-figure random-walk ${className}`.trim()}>
      <div ref={wrapRef} className="sim-canvas-wrap random-walk-canvas-wrap">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Animated fan of random walks with drift: paths start from one point, trend upward and spread out, with their mean and expected spread drawn on top"
        />
      </div>
      <figcaption className="sim-caption">
        Brownian motion with drift{" "}
        <span className="sim-nowrap">
          · <span className="sim-name">x(t) = μt + σW(t)</span>
        </span>{" "}
        <span className="sim-nowrap">
          · <i>μ</i> = {mu}, <i>σ</i> = {sigma}
        </span>
        <span className="sim-note">
          The mean grows linearly in t and the standard deviation as √t, so at
          long times the drift dominates the fluctuations.
        </span>
      </figcaption>
      <div className="sim-picker" role="group" aria-label="Choose a regime">
        {MODES.map((md, i) => (
          <button
            key={md.label}
            type="button"
            className="sim-chip"
            aria-pressed={i === mode}
            onClick={() => selectRef.current(i)}
          >
            {md.label}
          </button>
        ))}
      </div>
    </figure>
  );
}
