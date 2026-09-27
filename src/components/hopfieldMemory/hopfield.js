/*
 * A Hopfield network with the projection (pseudo-inverse) learning rule.
 *
 * Neurons s_i = ±1 on a G×G grid. Memories ξ^μ (μ = 1..P) are drawn
 * procedurally so they are identical in every browser. Drawn shapes share a
 * lot of background, i.e. they are strongly correlated, which the plain
 * Hebbian rule J = ΣξξᵀN⁻¹ turns into mixture states; the projection rule
 * J = Xᵀ C⁻¹ X (C = X Xᵀ, the P×P overlap matrix, diagonal of J removed)
 * stores correlated patterns exactly.
 *
 * J is never formed: the local field is h_i = Σ_μ ξ_i^μ a_μ − J_ii s_i with
 * a = C⁻¹ (X s), and X s is updated incrementally, so one asynchronous
 * update costs O(P²) instead of O(N).
 */

// ---- memories ---------------------------------------------------------------

function distToSegment(px, py, x1, y1, x2, y2) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const t = Math.max(
    0,
    Math.min(1, ((px - x1) * dx + (py - y1) * dy) / (dx * dx + dy * dy || 1))
  );
  return Math.hypot(px - x1 - t * dx, py - y1 - t * dy);
}

/** Rasterise strokes (polylines in grid units, 0..G) at a given half-width. */
function raster(G, polylines, halfWidth, discs = []) {
  const out = new Int8Array(G * G).fill(-1);
  for (let r = 0; r < G; r++) {
    for (let c = 0; c < G; c++) {
      const px = c + 0.5;
      const py = r + 0.5;
      let on = discs.some(([x, y, rad]) => Math.hypot(px - x, py - y) <= rad);
      for (let k = 0; !on && k < polylines.length; k++) {
        const pl = polylines[k];
        for (let j = 0; j + 1 < pl.length && !on; j++) {
          if (
            distToSegment(
              px,
              py,
              pl[j][0],
              pl[j][1],
              pl[j + 1][0],
              pl[j + 1][1]
            ) <= halfWidth
          )
            on = true;
        }
      }
      out[r * G + c] = on ? 1 : -1;
    }
  }
  return out;
}

const curve = (f, t0, t1, n = 90) =>
  Array.from({ length: n + 1 }, (_, i) => f(t0 + ((t1 - t0) * i) / n));

/** The five memories on a G×G grid (G = 24). */
export function makeMemories(G = 24) {
  const s = G / 24; // designed on a 24 grid
  const P = (x, y) => [x * s, y * s];
  const ellipse = (cx, cy, a, b, rot) =>
    curve(
      (t) => {
        const x = a * Math.cos(t);
        const y = b * Math.sin(t);
        return P(
          cx + x * Math.cos(rot) - y * Math.sin(rot),
          cy + x * Math.sin(rot) + y * Math.cos(rot)
        );
      },
      0,
      2 * Math.PI
    );
  const w = 0.95 * s;

  const atom = raster(
    G,
    [0, Math.PI / 3, (2 * Math.PI) / 3].map((r) =>
      ellipse(12, 12, 10.4, 3.4, r)
    ),
    w * 0.72,
    [[12 * s, 12 * s, 2.1 * s]]
  );

  const psi = raster(
    G,
    [
      [P(12, 3), P(12, 21.5)], // stem
      curve(
        (t) => P(12 + 6.5 * Math.cos(t), 8.5 + 6.5 * Math.sin(t)),
        0,
        Math.PI
      ), // cup
      [P(5.5, 3.5), P(5.5, 8.5)],
      [P(18.5, 3.5), P(18.5, 8.5)],
    ],
    w
  );

  const sigma = raster(
    G,
    [[P(18.5, 4), P(5.5, 4), P(12.5, 12), P(5.5, 20), P(18.5, 20)]],
    w
  );

  const infinity = raster(
    G,
    [
      curve(
        (t) => {
          const d = 1 + Math.sin(t) ** 2;
          return P(
            12 + (10.2 * Math.cos(t)) / d,
            12 + (10.2 * Math.sin(t) * Math.cos(t)) / d
          );
        },
        0,
        2 * Math.PI,
        140
      ),
    ],
    w
  );

  const initials = raster(
    G,
    [
      [P(2.5, 6), P(10.5, 6), P(2.5, 18), P(10.5, 18)], // Z
      [P(13.5, 6), P(13.5, 18)], // D stem
      curve(
        (t) => P(13.5 + 8 * Math.cos(t), 12 + 6 * Math.sin(t)),
        -Math.PI / 2,
        Math.PI / 2
      ),
    ],
    w
  );

  return [
    { name: "Atom", bits: atom },
    { name: "ψ", bits: psi },
    { name: "Σ", bits: sigma },
    { name: "∞", bits: infinity },
    { name: "ZD", bits: initials },
  ];
}

// ---- network ----------------------------------------------------------------

function invert(A, n) {
  // Gauss–Jordan on a small dense matrix (n = number of memories).
  const M = A.map((row, i) => [
    ...row,
    ...Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)),
  ]);
  for (let c = 0; c < n; c++) {
    let p = c;
    for (let r = c + 1; r < n; r++)
      if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
    [M[c], M[p]] = [M[p], M[c]];
    const d = M[c][c];
    for (let k = 0; k < 2 * n; k++) M[c][k] /= d;
    for (let r = 0; r < n; r++) {
      if (r === c) continue;
      const f = M[r][c];
      for (let k = 0; k < 2 * n; k++) M[r][k] -= f * M[c][k];
    }
  }
  return M.map((row) => row.slice(n));
}

export function makeNetwork(memories) {
  const P = memories.length;
  const N = memories[0].bits.length;
  const X = memories.map((m) => m.bits);
  const C = X.map((a) =>
    X.map((b) => a.reduce((acc, v, i) => acc + v * b[i], 0))
  );
  const Ci = invert(C, P);
  // Diagonal of J = Xᵀ C⁻¹ X, removed from the field (no self-coupling).
  const Jii = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    let v = 0;
    for (let m = 0; m < P; m++)
      for (let n = 0; n < P; n++) v += X[m][i] * Ci[m][n] * X[n][i];
    Jii[i] = v;
  }

  const s = new Int8Array(N);
  const Xs = new Float64Array(P); // X s, kept up to date

  const setState = (bits) => {
    s.set(bits);
    for (let m = 0; m < P; m++) {
      let v = 0;
      for (let i = 0; i < N; i++) v += X[m][i] * s[i];
      Xs[m] = v;
    }
  };

  const field = (i) => {
    let h = 0;
    for (let m = 0; m < P; m++) {
      let a = 0;
      for (let n = 0; n < P; n++) a += Ci[m][n] * Xs[n];
      h += X[m][i] * a;
    }
    return h - Jii[i] * s[i];
  };

  /** Asynchronous update of neuron i; returns true if it flipped. */
  const update = (i) => {
    const next = field(i) >= 0 ? 1 : -1;
    if (next === s[i]) return false;
    s[i] = next;
    for (let m = 0; m < P; m++) Xs[m] += 2 * X[m][i] * next;
    return true;
  };

  /** Overlap m = (1/N) Σ s_i ξ_i^μ with memory μ. */
  const overlap = (mu) => Xs[mu] / N;

  return { N, P, s, setState, update, overlap };
}

/** A noisy cue: memory μ with a fraction `p` of its neurons flipped. */
export function noisyCue(bits, p) {
  const out = Int8Array.from(bits);
  for (let i = 0; i < out.length; i++) if (Math.random() < p) out[i] = -out[i];
  return out;
}
