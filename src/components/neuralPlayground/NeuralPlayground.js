import React, { useEffect, useRef, useState } from "react";
import "../simFigure/SimFigure.css";
import "./NeuralPlayground.css";
import { DATASETS, makeNet } from "./nn";

/*
 * A neural network learning a 2D classification task, live (see ./nn.js).
 *
 * Background: the network's predicted probability over the plane (one
 * colour per class, stronger where it is confident) and a bright line at
 * the decision boundary p = 0.5. Points: the training data; misclassified
 * ones carry a ring. Training is paced (slow at first so the boundary can
 * be seen forming, then faster) and time-boxed per frame so the page stays
 * smooth on slow devices. Tested in Node: 2-24-24-1, Adam lr 0.02 reaches
 * 99% on every dataset in every trial (spirals in 300-800 epochs).
 */
const SIZES = [2, 24, 24, 1];
const LR = 0.02;
const N_POINTS = 220;
const FIELD = 48; // prediction grid resolution
const MAX_RATE = 100; // epochs per second, once warmed up
const EXTRA_EPOCHS = 80; // keep sharpening after reaching 99.5%
const RESTART_AT = 1600; // re-initialise if ever stuck (rare)
const HOLD_S = 3; // time on the trained network
const ORDER = [0, 2, 1, 3]; // spirals, moons, circles, XOR

const rate = (epoch) => Math.min(MAX_RATE, 12 + 0.3 * epoch);

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

export default function NeuralPlayground({ className = "" }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const selectRef = useRef(() => {});
  const [dataset, setDataset] = useState(ORDER[0]);
  const [stats, setStats] = useState({ epoch: 0, loss: 0.69, accuracy: 0.5 });

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const field = document.createElement("canvas");
    field.width = field.height = FIELD;
    const fctx = field.getContext("2d");
    const img = fctx.createImageData(FIELD, FIELD);

    let ds = ORDER[0];
    let data = [];
    let net = null;
    let phase = "train"; // train | hold
    let tHold = 0;
    let due = 0; // epochs owed to the pacing schedule
    let doneAt = null; // epoch at which 99.5% was reached
    let last = { epoch: 0, loss: 0.69, accuracy: 0.5 };
    let lastReport = 0;
    let dirty = true;
    let dpr = 1;
    let W = 0;
    let col = {};
    let bgTimer = 0;

    const report = (force) => {
      const now = performance.now();
      if (force || now - lastReport > 120) {
        lastReport = now;
        setStats({ ...last });
      }
    };

    const reset = (j) => {
      ds = j;
      setDataset(j);
      data = DATASETS[j].make(N_POINTS);
      net = makeNet(SIZES);
      phase = "train";
      tHold = 0;
      due = 0;
      doneAt = null;
      last = { epoch: 0, loss: 0.69, accuracy: 0.5 };
      dirty = true;
      report(true);
    };

    const trainOne = () => {
      last = net.train(data, LR);
      if (doneAt === null && last.accuracy >= 0.995) doneAt = last.epoch;
      if (doneAt === null && last.epoch >= RESTART_AT) {
        net = makeNet(SIZES); // stuck in a poor minimum: start over
        last = { epoch: 0, loss: 0.69, accuracy: 0.5 };
      }
      dirty = true;
      return doneAt !== null && last.epoch >= doneAt + EXTRA_EPOCHS;
    };

    const readTheme = () => {
      const cs = getComputedStyle(wrap);
      const v = (name, fallback) =>
        cs.getPropertyValue(name).trim() || fallback;
      col = {
        a: hexToRgb(v("--nn-a", "#60a5fa")),
        b: hexToRgb(v("--nn-b", "#fbbf24")),
        aHex: v("--nn-a", "#60a5fa"),
        bHex: v("--nn-b", "#fbbf24"),
        edge: hexToRgb(v("--nn-edge", "#ffffff")),
        ring: v("--nn-ring", "#ffffff"),
        dot: v("--nn-dot-stroke", "rgba(7,17,31,0.85)"),
        frame: v("--nn-frame", "rgba(148,163,184,0.25)"),
        light: document.documentElement.dataset.theme === "light",
      };
      dirty = true;
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

    const paintField = () => {
      const d = img.data;
      const maxA = col.light ? 140 : 100;
      for (let r = 0; r < FIELD; r++) {
        const y = 1 - ((r + 0.5) / FIELD) * 2;
        for (let c = 0; c < FIELD; c++) {
          const x = ((c + 0.5) / FIELD) * 2 - 1;
          const p = net.forward(x, y);
          const conf = Math.abs(p - 0.5) * 2; // 0 at the boundary, 1 when sure
          const base = p < 0.5 ? col.a : col.b;
          const edge = Math.exp(-(((p - 0.5) / 0.035) ** 2)); // glow at p = 0.5
          const k = (r * FIELD + c) * 4;
          d[k] = base[0] + (col.edge[0] - base[0]) * edge;
          d[k + 1] = base[1] + (col.edge[1] - base[1]) * edge;
          d[k + 2] = base[2] + (col.edge[2] - base[2]) * edge;
          d[k + 3] = 18 + maxA * conf * conf + 110 * edge;
        }
      }
      fctx.putImageData(img, 0, 0);
    };

    const draw = () => {
      const pad = W * 0.03;
      const size = W - 2 * pad;
      const radius = 18 * dpr;
      ctx.clearRect(0, 0, W, W);
      ctx.save();
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(pad, pad, size, size, radius);
      else ctx.rect(pad, pad, size, size);
      ctx.clip();
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(field, pad, pad, size, size);
      ctx.restore();
      // frame
      ctx.strokeStyle = col.frame;
      ctx.lineWidth = 1 * dpr;
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(pad, pad, size, size, radius);
      else ctx.rect(pad, pad, size, size);
      ctx.stroke();
      // data points; misclassified ones get a ring
      const R = 3.3 * dpr;
      for (const [x, y, label] of data) {
        const px = pad + ((x + 1) / 2) * size;
        const py = pad + ((1 - y) / 2) * size;
        const wrong = (net.forward(x, y) > 0.5 ? 1 : 0) !== label;
        ctx.beginPath();
        ctx.arc(px, py, R, 0, 2 * Math.PI);
        ctx.fillStyle = label ? col.bHex : col.aHex;
        ctx.fill();
        ctx.lineWidth = 1.2 * dpr;
        ctx.strokeStyle = col.dot;
        ctx.stroke();
        if (wrong) {
          ctx.beginPath();
          ctx.arc(px, py, R + 2.6 * dpr, 0, 2 * Math.PI);
          ctx.lineWidth = 1.4 * dpr;
          ctx.strokeStyle = col.ring;
          ctx.stroke();
        }
      }
    };

    const render = () => {
      if (!dirty) return;
      paintField();
      draw();
      dirty = false;
    };

    // Reduced motion: train in background chunks, show only the result.
    const trainInBackground = () => {
      clearTimeout(bgTimer);
      const chunk = () => {
        for (let k = 0; k < 25; k++) {
          if (trainOne()) {
            report(true);
            render();
            return;
          }
        }
        bgTimer = setTimeout(chunk, 0);
      };
      chunk();
    };

    selectRef.current = (j) => {
      reset(j);
      if (reduce) trainInBackground();
      else render();
    };

    resize();
    reset(ORDER[0]);

    const ro = new ResizeObserver(() => {
      resize();
      render();
    });
    ro.observe(wrap);
    const mo = new MutationObserver(() => {
      readTheme();
      render();
    });
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    if (reduce) {
      trainInBackground();
      return () => {
        clearTimeout(bgTimer);
        ro.disconnect();
        mo.disconnect();
      };
    }

    let raf = 0;
    let lastT = 0;
    let visible = true;
    let frameNo = 0;
    const frame = (t) => {
      const dt = lastT ? Math.min((t - lastT) / 1000, 0.05) : 0;
      lastT = t;
      frameNo++;
      if (phase === "train") {
        due += rate(last.epoch) * dt;
        const t0 = performance.now();
        while (due >= 1 && performance.now() - t0 < 4) {
          due -= 1;
          if (trainOne()) {
            phase = "hold";
            tHold = 0;
            due = 0;
            break;
          }
        }
        report(phase === "hold");
      } else {
        tHold += dt;
        if (tHold > HOLD_S) {
          const k = ORDER.indexOf(ds);
          reset(ORDER[(k + 1) % ORDER.length]);
        }
      }
      if (frameNo % 2 === 0 || phase === "hold") render();
      raf = requestAnimationFrame(frame);
    };
    const start = () => {
      if (!raf && visible && document.visibilityState === "visible") {
        lastT = 0;
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

    render();
    start();
    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      mo.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <figure className={`sim-figure neural-playground ${className}`.trim()}>
      <div ref={wrapRef} className="sim-canvas-wrap neural-canvas-wrap">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="A small neural network learning, live, to separate two classes of points; the coloured background is its prediction and the bright line its decision boundary"
        />
      </div>
      <figcaption className="sim-caption">
        Neural network{" "}
        <span className="sim-nowrap">· 2 → 24 → 24 → 1, tanh, Adam</span>
        <span className="neural-stats">
          epoch <b>{stats.epoch}</b> · loss <b>{stats.loss.toFixed(3)}</b> ·
          accuracy <b>{(stats.accuracy * 100).toFixed(1)}%</b>
        </span>
        <span className="sim-note">
          Trained live in your browser by backpropagation. The background is its
          prediction; the bright line, its decision boundary.
        </span>
      </figcaption>
      <div className="sim-picker" role="group" aria-label="Choose a dataset">
        {ORDER.map((i) => (
          <button
            key={DATASETS[i].name}
            type="button"
            className="sim-chip"
            aria-pressed={i === dataset}
            onClick={() => selectRef.current(i)}
          >
            {DATASETS[i].name}
          </button>
        ))}
      </div>
    </figure>
  );
}
