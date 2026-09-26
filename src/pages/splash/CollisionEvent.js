import React, { useEffect, useRef } from "react";

/*
 * Collision event display: charged tracks emerging from a primary vertex
 * inside a solenoidal magnetic field.
 *
 * A charged particle in a uniform field along the beam axis follows a helix,
 * which projects onto the transverse plane as a circle of radius
 * R = p_T / (0.3 q B). So the bending radius is proportional to transverse
 * momentum and its direction is set by the sign of the charge: soft tracks
 * curl tightly, stiff tracks run almost straight, and opposite charges bend
 * opposite ways — the picture every detector event display shows.
 *
 * Momenta are drawn from a steeply falling spectrum and most tracks are
 * clustered into two back-to-back jets, as in a real hadronic event.
 */

const N_CHARGED = 38;
const N_NEUTRAL = 7;
const B_SCALE = 34; // px per GeV of p_T

/* Tracks are coloured by transverse momentum, as event displays colour-code
   energy: soft violet/blue through cyan and green to amber and red for the
   stiffest tracks. The colour therefore carries information — it is the same
   quantity that sets the bending radius. */
const PT_BANDS = [
  [0.5, "#a78bfa"],
  [1.0, "#60a5fa"],
  [1.8, "#22d3ee"],
  [3.0, "#34d399"],
  [5.0, "#fbbf24"],
  [Infinity, "#fb7185"],
];

function ptColor(pt) {
  for (let i = 0; i < PT_BANDS.length; i++) {
    if (pt < PT_BANDS[i][0]) return PT_BANDS[i][1];
  }
  return PT_BANDS[PT_BANDS.length - 1][1];
}

function polar(cx, cy, r, a) {
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

function makeTracks(radius) {
  const jets = [Math.random() * Math.PI * 2];
  jets.push(jets[0] + Math.PI + (Math.random() - 0.5) * 0.7);
  const tracks = [];

  for (let i = 0; i < N_CHARGED; i++) {
    // Falling p_T spectrum: many soft tracks, a few stiff ones.
    const pt = 0.22 + Math.pow(Math.random(), 2.4) * 7;
    const inJet = Math.random() < 0.62;
    const phi = inJet
      ? jets[i % 2] + (Math.random() - 0.5) * 0.55
      : Math.random() * Math.PI * 2;
    const q = Math.random() < 0.5 ? 1 : -1;
    const R = Math.max(26, pt * B_SCALE);
    // Arc length capped by the detector, and by a full curl for soft tracks.
    const maxSweep = Math.min(radius / R + 0.9, Math.PI * 1.65);
    tracks.push({ q, R, phi, sweep: maxSweep, pt, color: ptColor(pt) });
  }

  for (let i = 0; i < N_NEUTRAL; i++) {
    tracks.push({
      neutral: true,
      phi: Math.random() * Math.PI * 2,
      len: radius * (0.55 + Math.random() * 0.4),
    });
  }
  return tracks;
}

export default function CollisionEvent({ theme, durationMs = 2600, still }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) * 0.38;
    const tracks = makeTracks(radius);

    const faint = theme.secondaryText || "#94A3B8";
    const photon = "#fde68a";

    const drawFrame = (p) => {
      ctx.clearRect(0, 0, w, h);

      // Detector barrel: a few concentric layers.
      ctx.globalAlpha = 0.18;
      ctx.strokeStyle = faint;
      ctx.lineWidth = 1;
      [0.42, 0.66, 0.88, 1].forEach((f) => {
        ctx.beginPath();
        ctx.arc(cx, cy, radius * f, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;

      tracks.forEach((t, i) => {
        // Stagger so tracks appear to stream out of the vertex together.
        const local = Math.max(0, Math.min(1, (p - (i % 7) * 0.012) / 0.85));
        if (local <= 0) return;

        if (t.neutral) {
          const [x, y] = polar(cx, cy, t.len * local, t.phi);
          ctx.save();
          ctx.setLineDash([4, 5]);
          ctx.globalAlpha = 0.65;
          ctx.strokeStyle = photon;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(x, y);
          ctx.stroke();
          ctx.restore();
          return;
        }

        // Centre of the circular path sits a distance R perpendicular to p.
        const perp = t.phi + (t.q > 0 ? Math.PI / 2 : -Math.PI / 2);
        const ox = cx + t.R * Math.cos(perp);
        const oy = cy + t.R * Math.sin(perp);
        const a0 = Math.atan2(cy - oy, cx - ox);
        const sweep = t.sweep * local;

        ctx.strokeStyle = t.color;
        ctx.globalAlpha = 0.9;
        ctx.lineWidth = Math.min(2.1, 0.7 + t.pt * 0.22);
        ctx.beginPath();
        ctx.arc(ox, oy, t.R, a0, a0 + (t.q > 0 ? -sweep : sweep), t.q > 0);
        ctx.stroke();
      });

      // Calorimeter: energy deposited where each track leaves the tracker.
      if (p > 0.45) {
        const fade = Math.min(1, (p - 0.45) / 0.35);
        tracks.forEach((t) => {
          if (t.neutral) return;
          const perp = t.phi + (t.q > 0 ? Math.PI / 2 : -Math.PI / 2);
          const ox = cx + t.R * Math.cos(perp);
          const oy = cy + t.R * Math.sin(perp);
          const a0 = Math.atan2(cy - oy, cx - ox);
          const a = a0 + (t.q > 0 ? -t.sweep : t.sweep);
          const ex = ox + t.R * Math.cos(a);
          const ey = oy + t.R * Math.sin(a);
          const ang = Math.atan2(ey - cy, ex - cx);
          const h = Math.min(26, 5 + t.pt * 3.4) * fade;
          ctx.globalAlpha = 0.85 * fade;
          ctx.strokeStyle = t.color;
          ctx.lineWidth = 4;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(
            cx + radius * 1.02 * Math.cos(ang),
            cy + radius * 1.02 * Math.sin(ang)
          );
          ctx.lineTo(
            cx + (radius * 1.02 + h) * Math.cos(ang),
            cy + (radius * 1.02 + h) * Math.sin(ang)
          );
          ctx.stroke();
        });
        ctx.lineCap = "butt";
      }

      // Primary vertex.
      ctx.globalAlpha = 1;
      ctx.fillStyle = "#f8fafc";
      ctx.beginPath();
      ctx.arc(cx, cy, 3.2, 0, Math.PI * 2);
      ctx.fill();
    };

    if (still) {
      drawFrame(1);
      return undefined;
    }

    drawFrame(0.04); // paint immediately; rAF is paused in background tabs
    let raf = 0;
    const t0 = performance.now();
    const loop = (now) => {
      const p = Math.min(1, (now - t0) / durationMs);
      drawFrame(p);
      if (p < 1) raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [theme, durationMs, still]);

  return (
    <canvas ref={canvasRef} className="splash-canvas" aria-hidden="true" />
  );
}
