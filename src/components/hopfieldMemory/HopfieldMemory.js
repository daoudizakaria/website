import React, { useEffect, useRef, useState } from "react";
import "../simFigure/SimFigure.css";
import "./HopfieldMemory.css";
import { makeMemories, makeNetwork, noisyCue } from "./hopfield";

/*
 * Associative memory in a Hopfield network (see ./hopfield.js).
 *
 * Each cycle cues one stored memory with 28% of its neurons flipped, then
 * lets the network relax by asynchronous updates in random order; neurons
 * that flip flash briefly. When a full pass changes nothing, the memory has
 * been recalled (tested: exact recall in every trial up to 30% noise).
 */
const G = 24;
const CUE_NOISE = 0.28;
const CUE_S = 0.45; // time for the grid to show the noisy cue
const PASS_S = 1.5; // time for one pass over all neurons
const HOLD_S = 2.6; // time on the recalled memory

export default function HopfieldMemory({ className = "" }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const selectRef = useRef(() => {});
  const memories = useRef(makeMemories(G)).current;
  const [current, setCurrent] = useState(0);
  const [overlap, setOverlap] = useState(1);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const net = makeNetwork(memories);
    const N = net.N;
    const shown = new Float32Array(N); // displayed brightness 0..1
    const flash = new Float32Array(N); // flip highlight 0..1
    let order = [];
    let cursor = 0;
    let flipsThisPass = 0;
    let mu = 0;
    let phase = "hold";
    let tPhase = 0;
    let lastOverlap = -1;
    let dpr = 1;
    let W = 0;
    let col = {};

    const shuffle = () => {
      order = Array.from({ length: N }, (_, i) => i);
      for (let i = N - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [order[i], order[j]] = [order[j], order[i]];
      }
      cursor = 0;
      flipsThisPass = 0;
    };

    const reportOverlap = () => {
      const m = Math.round(net.overlap(mu) * 100) / 100;
      if (m !== lastOverlap) {
        lastOverlap = m;
        setOverlap(m);
      }
    };

    const cue = (j) => {
      mu = j;
      setCurrent(j);
      if (reduce) {
        net.setState(memories[j].bits);
        for (let i = 0; i < N; i++) shown[i] = (net.s[i] + 1) / 2;
        phase = "hold";
      } else {
        net.setState(noisyCue(memories[j].bits, CUE_NOISE));
        phase = "cue";
      }
      tPhase = 0;
      shuffle();
      reportOverlap();
    };
    selectRef.current = (j) => {
      cue(j);
      if (reduce) draw();
    };

    const readTheme = () => {
      const cs = getComputedStyle(wrap);
      const v = (name, fallback) =>
        cs.getPropertyValue(name).trim() || fallback;
      col = {
        on: v("--hop-on", "#60a5fa"),
        off: v("--hop-off", "rgba(148,163,184,0.14)"),
        flash: v("--hop-flash", "#fbbf24"),
      };
      drawGrid();
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = wrap.clientWidth;
      W = Math.round(w * dpr);
      canvas.width = W;
      canvas.height = W;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${w}px`;
      readTheme();
    };

    // Cell geometry, the resting grid (drawn once per size or theme) and
    // brightness levels: the active cells of one level are filled together,
    // ~12 fills per frame instead of ~900 (≈100 ms a frame on a slow phone).
    const LEVELS = 12;
    const grid = document.createElement("canvas");
    const gctx = grid.getContext("2d");
    let geo = null;
    const addCell = (c, i) => {
      const x = geo.pad + (i % G) * geo.pitch + geo.off;
      const y = geo.pad + ((i / G) | 0) * geo.pitch + geo.off;
      if (c.roundRect) {
        c.moveTo(x + geo.size, y);
        c.roundRect(x, y, geo.size, geo.size, geo.r);
      } else c.rect(x, y, geo.size, geo.size);
    };
    const drawGrid = () => {
      const pad = W * 0.04;
      const pitch = (W - 2 * pad) / G;
      const size = pitch * 0.8;
      geo = { pad, pitch, size, off: (pitch - size) / 2, r: size * 0.22 };
      grid.width = W;
      grid.height = W;
      gctx.fillStyle = col.off;
      gctx.beginPath();
      for (let i = 0; i < N; i++) addCell(gctx, i);
      gctx.fill();
    };
    const fillLevels = (values, color, scale) => {
      ctx.fillStyle = color;
      for (let lv = 1; lv <= LEVELS; lv++) {
        const lo = (lv - 0.5) / LEVELS;
        const hi = (lv + 0.5) / LEVELS;
        let any = false;
        ctx.beginPath();
        for (let i = 0; i < N; i++) {
          const v = values[i];
          if (v >= 0.02 && v >= lo && (v < hi || lv === LEVELS)) {
            addCell(ctx, i);
            any = true;
          }
        }
        if (any) {
          ctx.globalAlpha = (lv / LEVELS) * scale;
          ctx.fill();
        }
      }
    };

    const draw = () => {
      // Nothing to draw on while the figure has no width (hidden or not yet
      // laid out); drawImage of a 0×0 canvas would throw.
      if (!W) return;
      ctx.clearRect(0, 0, W, W);
      ctx.globalAlpha = 1;
      ctx.drawImage(grid, 0, 0); // resting grid
      fillLevels(shown, col.on, 1); // active neurons
      fillLevels(flash, col.flash, 0.9); // neurons that just flipped
      ctx.globalAlpha = 1;
    };

    const step = (dt) => {
      tPhase += dt;
      // ease the display toward the network state; faster while cueing
      const k = 1 - Math.exp(-dt * (phase === "cue" ? 18 : 10));
      for (let i = 0; i < N; i++) {
        shown[i] += ((net.s[i] + 1) / 2 - shown[i]) * k;
        flash[i] *= Math.exp(-dt * 3.2);
      }
      if (phase === "cue" && tPhase > CUE_S) {
        phase = "recall";
        tPhase = 0;
      } else if (phase === "recall") {
        let n = Math.ceil((N * dt) / PASS_S);
        while (n-- > 0) {
          const i = order[cursor++];
          if (net.update(i)) {
            flash[i] = 1;
            flipsThisPass++;
          }
          if (cursor >= N) {
            if (flipsThisPass === 0) {
              phase = "hold";
              tPhase = 0;
              break;
            }
            shuffle();
          }
        }
        reportOverlap();
      } else if (phase === "hold" && tPhase > HOLD_S) {
        cue((mu + 1) % memories.length);
      }
    };

    resize();
    net.setState(memories[0].bits);
    for (let i = 0; i < N; i++) shown[i] = (net.s[i] + 1) / 2;
    reportOverlap();

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
      draw();
      return () => {
        ro.disconnect();
        mo.disconnect();
      };
    }

    // Open on a noisy cue of the first memory, so the page starts with a recall.
    cue(0);

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

    draw();
    start();
    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [memories]);

  return (
    <figure className={`sim-figure hopfield-memory ${className}`.trim()}>
      <div ref={wrapRef} className="sim-canvas-wrap hopfield-canvas-wrap">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Animated grid of neurons recalling a stored image from a noisy version of it"
        />
      </div>
      <figcaption className="sim-caption">
        Hopfield network{" "}
        <span className="sim-nowrap">· 576 neurons, 5 memories</span>{" "}
        <span className="sim-nowrap">
          · overlap <i>m</i> ={" "}
          <span className="hopfield-overlap">{overlap.toFixed(2)}</span>
        </span>
        <span className="sim-note">
          Recalling a memory from a noisy cue, the autoassociative principle
          behind the hippocampal CA3 network. Stored with the projection rule.
        </span>
      </figcaption>
      <div className="sim-picker" role="group" aria-label="Choose a memory">
        {memories.map((m, i) => (
          <button
            key={m.name}
            type="button"
            className="sim-chip"
            aria-pressed={i === current}
            aria-label={`Recall the ${m.name} memory`}
            onClick={() => selectRef.current(i)}
          >
            {m.name}
          </button>
        ))}
      </div>
    </figure>
  );
}
