import React, { useEffect, useRef } from "react";

/*
 * 2D Ising model on a square lattice, evolved with the Metropolis algorithm
 * and annealed from a hot, disordered start down through the critical
 * temperature (T_c = 2 / ln(1 + sqrt 2) ~ 2.269 for J = k_B = 1), so the
 * spins visibly cool out of noise into growing magnetic domains.
 *
 * Same physics as the Ising-Model project; here it is just the backdrop.
 */

const T_START = 3.6;
const T_END = 0.9;
const CELL = 9; // on-screen pixels per spin
const SWEEP_FRACTION = 0.55; // share of sites attempted per frame

function hexToRgb(hex) {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex || "");
  return m
    ? [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)]
    : [96, 165, 250];
}

export default function IsingLattice({ theme, durationMs = 2600, still }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const width = canvas.clientWidth || window.innerWidth;
    const height = canvas.clientHeight || window.innerHeight;
    const cols = Math.max(8, Math.ceil(width / CELL));
    const rows = Math.max(8, Math.ceil(height / CELL));
    canvas.width = cols;
    canvas.height = rows; // 1px per spin; CSS scales it up
    const n = cols * rows;

    // Hot start: random spins.
    const spins = new Int8Array(n);
    for (let i = 0; i < n; i++) spins[i] = Math.random() < 0.5 ? -1 : 1;

    const image = ctx.createImageData(cols, rows);
    const up = hexToRgb(theme && theme.imageHighlight);
    const down = hexToRgb(theme && theme.body);

    const paint = () => {
      const d = image.data;
      for (let i = 0; i < n; i++) {
        const c = spins[i] === 1 ? up : down;
        const o = i * 4;
        d[o] = c[0];
        d[o + 1] = c[1];
        d[o + 2] = c[2];
        d[o + 3] = spins[i] === 1 ? 235 : 90;
      }
      ctx.putImageData(image, 0, 0);
    };

    // Metropolis: flip site if it lowers energy, else with probability e^(-dE/T).
    const step = (T) => {
      const attempts = Math.floor(n * SWEEP_FRACTION);
      for (let k = 0; k < attempts; k++) {
        const x = (Math.random() * cols) | 0;
        const y = (Math.random() * rows) | 0;
        const i = y * cols + x;
        const left = spins[y * cols + ((x - 1 + cols) % cols)];
        const right = spins[y * cols + ((x + 1) % cols)];
        const upN = spins[((y - 1 + rows) % rows) * cols + x];
        const downN = spins[((y + 1) % rows) * cols + x];
        const dE = 2 * spins[i] * (left + right + upN + downN);
        if (dE <= 0 || Math.random() < Math.exp(-dE / T)) spins[i] = -spins[i];
      }
    };

    if (still) {
      // Reduced motion: settle silently, paint one cold frame.
      for (let s = 0; s < 40; s++) step(1.2);
      paint();
      return undefined;
    }

    // Paint the hot lattice immediately: requestAnimationFrame is paused in
    // a backgrounded tab, and without this the canvas would sit empty.
    paint();

    let raf = 0;
    const t0 = performance.now();
    const loop = (now) => {
      const p = Math.min(1, (now - t0) / durationMs);
      const T = T_START + (T_END - T_START) * p; // linear anneal through T_c
      step(T);
      paint();
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [theme, durationMs, still]);

  return (
    <canvas
      ref={canvasRef}
      className="splash-canvas ising-canvas"
      aria-hidden="true"
    />
  );
}
