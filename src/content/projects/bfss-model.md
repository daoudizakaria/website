---
slug: bfss-model
title: "The BFSS Matrix Model: Theory and Simulation"
date: 2026-09-27
summary: >-
  A Hybrid Monte Carlo simulation of the bosonic BFSS matrix model at finite
  temperature, written in Fortran 90 and validated against exact identities.
  A temperature scan reproduces the confinement/deconfinement transition near
  T ≈ 0.89 and the confined-phase benchmarks from the literature, with
  pedagogical notes that derive every step.
category: physics
repo: "https://github.com/daoudizakaria/BFSS_model"
paper: "/uploads/projects/bfss-model-notes.pdf"
featured: true
tags:
  - matrix-models
  - lattice-monte-carlo
  - hybrid-monte-carlo
  - string-theory
  - fortran
---

## 1 The Question

The BFSS model, proposed by Banks, Fischler, Shenker, and Susskind, is a conjectured non-perturbative formulation of M-theory as the quantum mechanics of $N\times N$ matrices [1]. The matrices describe D0-branes: when they commute, their eigenvalues are the positions of $N$ point-like branes in nine dimensions; when they do not, the off-diagonal elements are strings stretched between the branes and the notion of a definite position is lost. At finite temperature and strong coupling, the supersymmetric model is dual to a black hole made of D0-branes, which makes it one of the few settings where gauge/gravity duality can be tested directly on a computer [2–4].

This project simulates the **bosonic part** of the model at finite temperature. The bosonic model is a different theory from the supersymmetric one, not an approximation to it, but it has a rich phase structure of its own — a confinement/deconfinement transition with well-studied benchmarks — and it is the natural first step towards simulating the full model. The deliverables are a short, self-contained Fortran 90 code, a temperature scan that reproduces the known transition, and a set of pedagogical notes (linked above) that derive every ingredient of the algorithm.

## 2 The Model

The bosonic BFSS Hamiltonian, with the coupling absorbed into the fields, is

$$
H_B = \frac{1}{2}\,\mathrm{Tr}\left(P_i P_i\right) - \frac{1}{4}\,\mathrm{Tr}\left([X_i, X_j][X_i, X_j]\right), \qquad i,j = 1,\dots,9 .
$$

The commutator term is non-negative and vanishes exactly when all nine matrices commute, so the classical theory has flat directions: branes placed anywhere cost no energy. In the bosonic model, the zero-point energy of the stretched strings lifts these directions and binds the branes together; with supersymmetry, bosonic and fermionic contributions cancel and the flat directions survive.

At temperature $T = 1/\beta$ the Euclidean action, with 't Hooft coupling $\lambda = g_{\mathrm{YM}}^2 N$, is

$$
S_E = \frac{N}{\lambda}\int_0^\beta dt\; \mathrm{Tr}\left(\frac{1}{2}(D_t X_i)^2 - \frac{1}{4}[X_i, X_j]^2\right), \qquad D_t X_i = \partial_t X_i - i[A, X_i] .
$$

A scaling argument shows that physics depends only on the dimensionless coupling $\lambda_{\mathrm{eff}} = \lambda/T^3$: the model is weakly coupled at high temperature and strongly coupled at low temperature. Throughout, $\lambda = 1$.

## 3 Lattice Formulation

Euclidean time is discretized into $L$ sites with spacing $a = \beta/L$ and periodic boundary conditions. The trace of each $X_i$ (the centre of mass) decouples as a free particle, so the matrices are taken traceless — $SU(N)$ rather than $U(N)$.

**Static diagonal gauge.** Gauge transformations reduce the link variables to a single diagonal holonomy, spread evenly over the lattice: $U = \mathrm{diag}(e^{i\alpha_1/L}, \dots, e^{i\alpha_N/L})$. The change of variables to the $N$ angles $\alpha_k$ produces a Faddeev–Popov term

$$
S_{\mathrm{FP}} = -\sum_{k<l} \ln \sin^2\left(\frac{\alpha_k - \alpha_l}{2}\right),
$$

which repels the angles from one another and spreads them uniformly in the confined phase. The gauge-fixed lattice action is

$$
S = \frac{N}{a}\sum_{t,i}\left[\mathrm{Tr}\,X_i(t)^2 - \mathrm{Tr}\left(U X_i(t+1) U^\dagger X_i(t)\right)\right] - \frac{Na}{4}\sum_{t}\sum_{i,j}\mathrm{Tr}\,[X_i(t), X_j(t)]^2 + S_{\mathrm{FP}}[\alpha],
$$

the same discretization used in the reference studies [5, 6]. Since the angles are defined modulo $2\pi$ and the action depends only on their differences, the simulation lets them translate freely and imposes $\max_k \alpha_k - \min_k \alpha_k < 2\pi$, rejecting any proposal that violates it.

## 4 Hybrid Monte Carlo

A configuration at $N = 8$, $L = 12$ has about 6,800 real degrees of freedom, all coupled through the commutator term, so local updates are hopeless. Hybrid Monte Carlo [7] updates everything at once:

1. **Momenta.** Draw Gaussian momenta $P_i(t)$ (Hermitian, traceless) and $p_k$ conjugate to $X_i(t)$ and $\alpha_k$, using the Box–Muller transform on top of the `ran2` generator from _Numerical Recipes_.
2. **Molecular dynamics.** Evolve the fictitious Hamiltonian $\mathcal{H} = \frac{1}{2}\sum \mathrm{Tr}\,P^2 + \frac{1}{2}\sum p^2 + S$ for $n_\tau$ leapfrog steps of size $\Delta\tau$, with analytic forces for both the matrices and the angles. The leapfrog integrator is time-reversible and preserves phase-space volume, and its energy error scales as $\Delta\tau^2$ at fixed trajectory length.
3. **Metropolis test.** Accept the new configuration with probability $\min(1, e^{-\Delta\mathcal{H}})$. This corrects the integration error exactly: the only cost of a large step is a lower acceptance rate.

The step size is set by the stiffest mode of the kinetic term, whose frequency is of order $2\sqrt{N/a}$, and it is fixed during thermalization — adapting it on the fly along the Markov chain would break detailed balance. Separate step sizes for the matrices and the angles are allowed, since each update remains a reversible, volume-preserving shear.

## 5 Validation

An HMC code can run, accept most proposals, and still sample the wrong distribution. The code therefore checks the exact identities the algorithm relies on (run with `test_force=.true.`):

- **Forces.** The analytic forces on $X_i$ and $\alpha_k$ agree with symmetric finite differences of the action to seven or eight significant digits.
- **Reversibility.** Integrating a trajectory forward, flipping the momenta, and integrating again returns to the starting configuration to $10^{-16}$.
- **Integrator order.** At fixed trajectory length $n_\tau\Delta\tau = 0.2$, halving the step size reduces $\Delta\mathcal{H}$ by a factor approaching 4, as expected for a second-order integrator ($N = 6$, $L = 8$, $T = 1$):

| $\Delta\tau$ | $n_\tau$ | $\Delta\mathcal{H}$ | Ratio |
| --- | --- | --- | --- |
| 0.02 | 10 | $2.17\times10^{-1}$ | — |
| 0.01 | 20 | $4.13\times10^{-2}$ | 5.2 |
| 0.005 | 40 | $9.51\times10^{-3}$ | 4.3 |
| 0.0025 | 80 | $2.33\times10^{-3}$ | 4.1 |

- **Equilibrium identity.** In production runs, $\langle e^{-\Delta\mathcal{H}}\rangle$ — which must equal 1 by reversibility and volume preservation alone — stays within about 1% of 1 at every temperature up to $T = 1.25$ and within 2% at $T = 1.5$.

## 6 Results

A temperature scan at $N = 8$, $L = 12$ covers ten temperatures between $T = 0.6$ and $T = 1.5$, with 500 thermalization and 3,000 measured trajectories each ($n_\tau = 40$, $\Delta\tau = 0.01$, acceptance 79–94%). Three gauge-invariant observables are measured on every trajectory: the Polyakov loop $|P| = \frac{1}{N}\left|\sum_k e^{i\alpha_k}\right|$, the order parameter of the transition; the energy $E/N^2$, computed from the commutator term via the virial theorem ($E = 3\langle V\rangle$), which avoids the divergent lattice kinetic term; and the extent of the bound state, $R^2 = \frac{1}{NL}\sum_{t,i}\mathrm{Tr}\,X_i(t)^2$. Errors come from 20 bins, to account for autocorrelations.

![Three panels against temperature T from 0.6 to 1.5: the Polyakov loop rises steeply from about 0.2 to 0.7 between T = 0.85 and T = 0.95 and approaches 0.9 at T = 1.5; the energy per N squared and the extent R squared are nearly flat below the transition, close to dashed reference lines from the N = 32 study, and grow linearly above it. A shaded band marks the critical region 0.876 to 0.905.](/uploads/projects/bfss-temperature-scan.png "Polyakov loop, energy, and extent of space for N = 8, L = 12. The shaded band is the critical region 0.876 ≤ T ≤ 0.905 of Ref. [5]; the dashed lines are the confined-phase values at N = 32 from the same study.")

| $T$ | $\langle\lvert P\rvert\rangle$ | $E/N^2$ | $R^2$ | Acceptance |
| --- | --- | --- | --- | --- |
| 0.60 | 0.135(2) | 6.501(9) | 2.245(2) | 0.93 |
| 0.70 | 0.155(4) | 6.534(11) | 2.251(2) | 0.94 |
| 0.80 | 0.227(10) | 6.610(14) | 2.265(3) | 0.90 |
| 0.85 | 0.286(17) | 6.701(24) | 2.281(4) | 0.88 |
| 0.90 | 0.475(23) | 7.018(45) | 2.339(8) | 0.86 |
| 0.95 | 0.627(16) | 7.385(36) | 2.406(7) | 0.85 |
| 1.00 | 0.705(6) | 7.704(25) | 2.463(5) | 0.84 |
| 1.10 | 0.789(3) | 8.268(21) | 2.561(4) | 0.80 |
| 1.25 | 0.850(1) | 9.078(30) | 2.696(5) | 0.79 |
| 1.50 | 0.900(1) | 10.407(41) | 2.905(7) | 0.82 |

- **The transition.** The Polyakov loop is small at low temperature and rises steeply between $T = 0.85$ and $T = 0.95$, exactly where the literature places the confinement/deconfinement transition: $T \approx 0.9$ in Ref. [5], and a single first-order transition at $T_c \approx 0.885$–$0.89$ in more recent large-$N$ work [8]. At $N = 8$ it appears as a smooth crossover, and the residual $\langle|P|\rangle \approx 0.14$ at $T = 0.6$ is a finite-$N$ effect.
- **The confined phase.** Below the transition, $E/N^2 \approx 6.50$–$6.61$ and $R^2 \approx 2.25$–$2.27$ depend only weakly on temperature, within 3% and 2% of the $N = 32$ benchmarks $E/N^2 = 6.695$ and $R^2 = 2.291$ [5] — differences consistent with finite-$N$ and finite-lattice-spacing corrections.
- **High temperature.** Above the transition both quantities grow with $T$. In the weak-coupling limit the model reduces to a ten-matrix Yang–Mills integral, which predicts $E/N^2 \to 6T$; the data approach this slope from above ($E/N^2 \approx 6.9\,T$ at $T = 1.5$).

These runs use a single, small $N$ and a single lattice spacing: they show that the algorithm works and reproduces the known physics, not a precision study. A careful study would repeat the scan at several $N$ and $L$ and extrapolate to $N\to\infty$ and $a\to0$.

## 7 Implementation

A single Fortran 90 source file with no external dependencies, compiled with `gfortran -O3 -march=native`. Every parameter — $N$, $L$, the number of matrices, temperature, optional mass term, step sizes, trajectory counts, seed, cold or hot start, and an ungauged mode with the angles frozen — has a default and can be overridden through a namelist:

```
&params nmat=8, nsite=12, temp=1.0, ntherm=500, nmeas=3000,
        ntau=40, dtau_x=0.01, dtau_a=0.01, seed=-1234, outfile='out.dat' /
```

Each measured trajectory writes the action, $\Delta\mathcal{H}$, the accept flag, and the three observables; the run log summarizes the acceptance rate, constraint violations, $\langle e^{-\Delta\mathcal{H}}\rangle$, and the averaged observables. A shell script runs the ten-temperature scan in parallel, and a short Python script produces the summary table and the figure above.

## 8 Outlook

The natural next step is to include the fermions. Integrating out the sixteen-component spinors produces a Pfaffian, treated with the rational HMC algorithm; with supersymmetry the flat directions survive, and the simulations must be stabilized by restricting the extent of the eigenvalues. Simulations of this kind have reproduced the supergravity prediction $E/N^2 = 7.41\,T^{14/5}$ and its $\alpha'$ corrections [3, 4]. Other directions are systematic continuum and large-$N$ extrapolations, real-time dynamics and chaos in the matrix model, and higher-order symplectic integrators or Fourier acceleration to cut the cost of each trajectory.

## References

1. T. Banks, W. Fischler, S. H. Shenker, and L. Susskind, "M theory as a matrix model: A conjecture," _Phys. Rev. D_ **55**, 5112 (1997). [arXiv:hep-th/9610043](https://arxiv.org/abs/hep-th/9610043).
2. N. Itzhaki, J. M. Maldacena, J. Sonnenschein, and S. Yankielowicz, "Supergravity and the large N limit of theories with sixteen supercharges," _Phys. Rev. D_ **58**, 046004 (1998). [arXiv:hep-th/9802042](https://arxiv.org/abs/hep-th/9802042).
3. M. Hanada, Y. Hyakutake, G. Ishiki, and J. Nishimura, "Holographic description of a quantum black hole on a computer," _Science_ **344**, 882 (2014). [arXiv:1311.5607](https://arxiv.org/abs/1311.5607).
4. E. Berkowitz, E. Rinaldi, M. Hanada, G. Ishiki, S. Shimasaki, and P. Vranas, "Precision lattice test of the gauge/gravity duality at large-N," _Phys. Rev. D_ **94**, 094501 (2016). [arXiv:1606.04951](https://arxiv.org/abs/1606.04951).
5. N. Kawahara, J. Nishimura, and S. Takeuchi, "Phase structure of matrix quantum mechanics at finite temperature," _JHEP_ **10**, 097 (2007). [arXiv:0706.3517](https://arxiv.org/abs/0706.3517).
6. V. G. Filev and D. O'Connor, "The BFSS model on the lattice," _JHEP_ **05**, 167 (2016). [arXiv:1506.01366](https://arxiv.org/abs/1506.01366).
7. S. Duane, A. D. Kennedy, B. J. Pendleton, and D. Roweth, "Hybrid Monte Carlo," _Phys. Lett. B_ **195**, 216 (1987).
8. G. Bergner, N. Bodendorfer, M. Hanada, E. Rinaldi, A. Schäfer, and P. Vranas, "Thermal phase transition in Yang-Mills matrix model," _JHEP_ **01**, 053 (2020). [arXiv:1909.04592](https://arxiv.org/abs/1909.04592).
