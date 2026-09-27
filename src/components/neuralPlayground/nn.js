/*
 * A small multilayer perceptron trained live with backpropagation and Adam
 * (full batch, binary cross-entropy), plus the 2D toy datasets it learns.
 * Plain JavaScript, no dependencies; small enough to train in real time.
 */

function gauss() {
  const u = 1 - Math.random();
  const v = Math.random();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

// ---- datasets (points in [-1, 1]², labels 0/1) --------------------------------

export const DATASETS = [
  {
    name: "Spirals",
    make(n) {
      const pts = [];
      const half = n >> 1;
      for (let c = 0; c < 2; c++) {
        for (let i = 0; i < half; i++) {
          const f = i / half;
          const r = 0.08 + 0.84 * f;
          const t = 3.4 * Math.PI * f + c * Math.PI;
          pts.push([
            r * Math.sin(t) + 0.025 * gauss(),
            r * Math.cos(t) + 0.025 * gauss(),
            c,
          ]);
        }
      }
      return pts;
    },
  },
  {
    name: "Circles",
    make(n) {
      const pts = [];
      for (let i = 0; i < n; i++) {
        const c = i % 2;
        const r =
          c === 0
            ? 0.42 * Math.sqrt(Math.random())
            : 0.62 + 0.3 * Math.random();
        const t = 2 * Math.PI * Math.random();
        pts.push([r * Math.cos(t), r * Math.sin(t), c]);
      }
      return pts;
    },
  },
  {
    name: "Moons",
    make(n) {
      const pts = [];
      for (let i = 0; i < n; i++) {
        const c = i % 2;
        const t = Math.PI * Math.random();
        const x = c === 0 ? Math.cos(t) : 1 - Math.cos(t);
        const y = c === 0 ? Math.sin(t) : 0.5 - Math.sin(t);
        pts.push([
          (x - 0.5) * 0.6 + 0.035 * gauss(),
          (y - 0.25) * 0.9 + 0.045 * gauss(),
          c,
        ]);
      }
      return pts;
    },
  },
  {
    name: "XOR",
    make(n) {
      const pts = [];
      for (let i = 0; i < n; i++) {
        let x;
        let y;
        do {
          x = 1.9 * Math.random() - 0.95;
          y = 1.9 * Math.random() - 0.95;
        } while (Math.abs(x) < 0.1 || Math.abs(y) < 0.1);
        pts.push([x, y, x * y > 0 ? 0 : 1]);
      }
      return pts;
    },
  },
];

// ---- network ----------------------------------------------------------------

/** MLP with tanh hidden layers and a sigmoid output; sizes e.g. [2, 16, 16, 1]. */
export function makeNet(sizes) {
  const L = sizes.length - 1;
  const W = [];
  const b = [];
  for (let l = 0; l < L; l++) {
    const fanIn = sizes[l];
    const fanOut = sizes[l + 1];
    const scale = Math.sqrt(2 / (fanIn + fanOut)); // Xavier/Glorot
    W.push(
      Float64Array.from({ length: fanIn * fanOut }, () => gauss() * scale)
    );
    b.push(new Float64Array(fanOut));
  }
  // Adam moments
  const mW = W.map((w) => new Float64Array(w.length));
  const vW = W.map((w) => new Float64Array(w.length));
  const mb = b.map((x) => new Float64Array(x.length));
  const vb = b.map((x) => new Float64Array(x.length));
  const acts = sizes.map((s) => new Float64Array(s)); // per-sample activations
  const deltas = sizes.map((s) => new Float64Array(s));
  const gW = W.map((w) => new Float64Array(w.length));
  const gb = b.map((x) => new Float64Array(x.length));
  let t = 0;

  const forward = (x, y) => {
    acts[0][0] = x;
    acts[0][1] = y;
    for (let l = 0; l < L; l++) {
      const inp = acts[l];
      const out = acts[l + 1];
      const nIn = sizes[l];
      const w = W[l];
      for (let j = 0; j < sizes[l + 1]; j++) {
        let z = b[l][j];
        for (let i = 0; i < nIn; i++) z += w[j * nIn + i] * inp[i];
        out[j] = l === L - 1 ? 1 / (1 + Math.exp(-z)) : Math.tanh(z);
      }
    }
    return acts[L][0];
  };

  /** One full-batch Adam step; returns mean cross-entropy loss and accuracy. */
  const train = (data, lr = 0.02, beta1 = 0.9, beta2 = 0.999, eps = 1e-8) => {
    for (let l = 0; l < L; l++) {
      gW[l].fill(0);
      gb[l].fill(0);
    }
    let loss = 0;
    let correct = 0;
    for (const [x, y, label] of data) {
      const p = forward(x, y);
      loss -= label ? Math.log(p + 1e-12) : Math.log(1 - p + 1e-12);
      if ((p > 0.5 ? 1 : 0) === label) correct++;
      deltas[L][0] = p - label; // dL/dz for sigmoid + cross-entropy
      for (let l = L - 1; l >= 0; l--) {
        const nIn = sizes[l];
        const nOut = sizes[l + 1];
        const w = W[l];
        for (let j = 0; j < nOut; j++) {
          const d = deltas[l + 1][j];
          gb[l][j] += d;
          for (let i = 0; i < nIn; i++) gW[l][j * nIn + i] += d * acts[l][i];
        }
        if (l > 0) {
          for (let i = 0; i < nIn; i++) {
            let s = 0;
            for (let j = 0; j < nOut; j++)
              s += w[j * nIn + i] * deltas[l + 1][j];
            deltas[l][i] = s * (1 - acts[l][i] * acts[l][i]); // tanh'
          }
        }
      }
    }
    t++;
    const n = data.length;
    const c1 = 1 - Math.pow(beta1, t);
    const c2 = 1 - Math.pow(beta2, t);
    const adam = (p, g, m, v) => {
      for (let k = 0; k < p.length; k++) {
        const gk = g[k] / n;
        m[k] = beta1 * m[k] + (1 - beta1) * gk;
        v[k] = beta2 * v[k] + (1 - beta2) * gk * gk;
        p[k] -= (lr * (m[k] / c1)) / (Math.sqrt(v[k] / c2) + eps);
      }
    };
    for (let l = 0; l < L; l++) {
      adam(W[l], gW[l], mW[l], vW[l]);
      adam(b[l], gb[l], mb[l], vb[l]);
    }
    return { loss: loss / n, accuracy: correct / n, epoch: t };
  };

  return { forward, train, epoch: () => t };
}
