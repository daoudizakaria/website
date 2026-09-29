---
slug: ising-model/sections-9-10
title: "Further directions, and using the code"
date: 2026-09-27
summary: "The three-dimensional model and other spin models, and a guide to the programs of the repository."
category: physics
series: ising-model
part: sections-9-10
order: 8
kicker: "Sections 9–10"
---
## 9 Beyond


- **Three dimensions.** The 3D Ising model has never been solved exactly. On the simple cubic lattice, the most precise simulations give $k_BT_c = 4.5115\,J$ [16], and the exponents of Table 1. The methods of these notes (Wolff clusters, Binder cumulant, finite-size scaling) are exactly those used to obtain these numbers.

- **Other spin models.** Spins with more than two states give the Potts model, and spins that can point in any direction of a plane or of space give the XY and Heisenberg models, each with its own universality class.

- **Quantum Ising model.** Spins in a transverse magnetic field undergo a phase transition at zero temperature, driven by quantum fluctuations. The quantum chain is equivalent to the classical 2D model.

- **Renormalization group.** Grouping spins into blocks and looking at how the effective couplings change with the block size explains universality and gives a way to compute the exponents.

For more, see the textbooks of Yeomans [18] and Kardar [19] on phase transitions, Baxter [20] on exact solutions, and Newman and Barkema [21] and Landau and Binder [22] on Monte Carlo methods.

## 10 Using the code


The programs are in the repository [daoudizakaria/Ising-Model](https://github.com/daoudizakaria/Ising-Model). They require Python 3 with `numpy`, `scipy` and `matplotlib`; installing `numba` compiles the Metropolis and Wolff algorithms and makes them much faster.

- **`ising_1D.py`**: Interactive program for the chain: thermodynamics, magnetization in a field, correlation function, space–time picture.

- **`ising_2D.py`**: Interactive program for the square lattice: snapshots, animation, thermodynamics compared with Onsager and Kaufman, hysteresis, Binder cumulant, critical slowing down.

- **`ising/`**: The package: the lattices and algorithms (`lattice.py`), exact results (`exact.py`), statistical analysis (`analysis.py`) and simulation drivers (`simulate.py`).

- **`make_figures.py`**: Produces all the figures of these notes.

- **`tests/`**: Tests of the code against exact results (`python3 -m unittest discover tests`).

For example, a simulation of a $32 \times 32$ lattice at $T = 2$ takes three lines:

```
from ising import run, exact
r = run(dim=2, size=32, T=2.0, n_therm=2000, n_meas=20000, algorithm="wolff")
print(r["abs_m"], exact.onsager_magnetization(2.0))   # (value, error), exact
```
