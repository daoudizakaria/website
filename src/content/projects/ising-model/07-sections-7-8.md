---
slug: ising-model/sections-7-8
title: "Results in one and two dimensions"
date: 2026-09-27
summary: "Simulations of the chain compared with the exact solution, then the square lattice: configurations, thermodynamics, critical correlations, finite-size scaling, hysteresis and critical slowing down."
category: physics
series: ising-model
part: sections-7-8
order: 7
kicker: "Sections 7–8"
---
## 7 Results in one dimension


Figure 5 shows the energy, specific heat and susceptibility of a chain of 100 spins, simulated with the Wolff algorithm, compared with the exact transfer-matrix results. The agreement is perfect within the error bars. The finite size only matters at low temperature, where the correlation length becomes comparable to the length of the chain: the susceptibility then saturates at $\chi \simeq N/T$, the value for a fully aligned chain, instead of growing like $e^{2J/T}/T$. The correlation function (Figure 2) decays exponentially at every temperature, as expected in the absence of a phase transition.

![Energy, specific heat and susceptibility per spin of the Ising chain. Points: Monte Carlo simulations of 100 spins with the Wolff algorithm (10⁵ sweeps per temperature). Lines: exact transfer-matrix results for 100 spins and for the infinite chain.](/uploads/projects/ising-chain-thermo.png "Figure 5: Energy, specific heat and susceptibility per spin of the Ising chain. Points: Monte Carlo simulations of 100 spins with the Wolff algorithm (10⁵ sweeps per temperature). Lines: exact transfer-matrix results for 100 spins and for the infinite chain.")

> **Try it with the code**
>
> `python3 ising_1D.py` reproduces these results (options 1 and 3), shows the magnetization in a field (option 2) and the space–time picture of Figure 3 (option 4). Try increasing the number of spins at low temperature: how does the susceptibility change?

## 8 Results in two dimensions


### 8.1 Configurations

Figure 6 shows typical configurations of a $256\times256$ lattice. Below $T_c$, the lattice is almost fully magnetized, with small islands of reversed spins. Above $T_c$, the spins form small domains of typical size $\xi$, with no net magnetization. At $T_c$, domains of all sizes coexist, nested within each other: the configuration looks the same at all scales. This _scale invariance_ is the hallmark of a critical point.

![Equilibrium configurations of a 256×256 lattice (white: up, black: down), below, at and above the critical temperature.](/uploads/projects/ising-snapshots-lattice.webp "Figure 6: Equilibrium configurations of a 256×256 lattice (white: up, black: down), below, at and above the critical temperature.")

### 8.2 Thermodynamics

Figure 7 shows the energy, magnetization, specific heat and susceptibility for $L = 8$ to $64$. The simulated energy and specific heat agree with Kaufman's exact results for the same lattices, and approach Onsager's infinite-lattice curves as $L$ grows. Over all sizes and temperatures, the deviations from Kaufman's values have a spread of about one error bar, the largest being about three error bars, as expected for more than a hundred comparisons. The magnetization $\left\langle |m| \right\rangle$ follows Yang's formula below $T_c$, but does not vanish above it: in a finite lattice, $\left\langle |m| \right\rangle \sim 1/\sqrt{N}$ at high temperature. The specific heat and the susceptibility have peaks that grow with $L$ and approach $T_c$.

![Thermodynamics of the 2D Ising model. Points: Wolff simulations (10⁵ sweeps per temperature) for L = 8, 16, 32 and 64. Dashed lines: Kaufman's exact results for the same lattices. Black lines: Onsager's and Yang's exact results for the infinite lattice. The dotted line marks Tc.](/uploads/projects/ising-thermo-2d.png "Figure 7: Thermodynamics of the 2D Ising model. Points: Wolff simulations (10⁵ sweeps per temperature) for L = 8, 16, 32 and 64. Dashed lines: Kaufman's exact results for the same lattices. Black lines: Onsager's and Yang's exact results for the infinite lattice. The dotted line marks Tc.")

### 8.3 Correlations at the critical point

Away from $T_c$, correlations decay exponentially. At $T_c$, the correlation length is infinite and the correlation function decays as a power law, $G(r) \sim r^{-1/4}$ ($\eta = 1/4$). Figure 8 shows both behaviours in a $256 \times 256$ lattice.

![Spin–spin correlation function of a 256×256 lattice (log–log scale). At Tc it decays as the power law r^(−1/4); above Tc it decays exponentially.](/uploads/projects/ising-correlation-2d.png "Figure 8: Spin–spin correlation function of a 256×256 lattice (log–log scale). At Tc it decays as the power law r^(−1/4); above Tc it decays exponentially.")

### 8.4 Finite-size scaling and the Binder cumulant

How do the finite-lattice quantities depend on $L$ near $T_c$? The _finite-size scaling_ hypothesis states that the only relevant lengths are $\xi \sim |t|^{-\nu}$ and $L$. For the susceptibility, for example,

$$
\chi'(T, L) = L^{\gamma/\nu}\, \tilde\chi\!\left(L^{1/\nu}\, t\right),
\tag{24}
$$

where $\tilde\chi$ is a universal function. Consequences:

- at $T_c$, $\left\langle |m| \right\rangle \sim L^{-\beta/\nu} = L^{-1/8}$ and $\chi' \sim L^{\gamma/\nu} = L^{7/4}$;

- the maximum of $\chi'$ grows like $L^{7/4}$, and its position approaches $T_c$ like $L^{-1/\nu} = L^{-1}$;

- plotting $\chi' L^{-7/4}$ against $L\, t$ makes the curves of all sizes collapse onto one.

Figure 9 shows this _data collapse_. Figure 10 shows the power laws: the fits give $\beta/\nu = 0.125$ and $\gamma/\nu = 1.770$, close to the exact $1/8 = 0.125$ and $7/4 = 1.75$. The maxima of $\chi'$ are obtained from dedicated simulations around each peak. The small excess of $\gamma/\nu$ comes from corrections to scaling at small $L$: fitting only $L = 32$, 64 and 128 gives $1.759$.

A convenient way to locate $T_c$ is the _Binder cumulant_ [13]

$$
U_L = 1 - \frac{\left\langle m^4 \right\rangle}{3\left\langle m^2 \right\rangle^2} .
\tag{25}
$$

Deep in the ordered phase, $m \simeq \pm m_0$ and $U_L \to 2/3$. In the disordered phase, $m$ has Gaussian fluctuations, for which $\left\langle m^4 \right\rangle = 3\left\langle m^2 \right\rangle^2$, and $U_L \to 0$. At $T_c$, $U_L$ takes a universal value independent of $L$, so the curves for different sizes cross at $T_c$ (Figure 9a). Here the curves for $L = 64$ and $L = 128$ cross at $T = 2.266$ and $U = 0.615$, very close to $T_c = 2.269$.

![(a) Binder cumulant for L = 8 to 128: the curves cross at the critical temperature (dotted line). (b) Finite-size scaling of the susceptibility, Eq. (24), with the exact exponents ν = 1 and γ = 7/4: the data for all sizes collapse onto a single curve.](/uploads/projects/ising-finite-size.png "Figure 9: (a) Binder cumulant for L = 8 to 128: the curves cross at the critical temperature (dotted line). (b) Finite-size scaling of the susceptibility, Eq. (24), with the exact exponents ν = 1 and γ = 7/4: the data for all sizes collapse onto a single curve.")

![(a) Magnetization at Tc and (b) maximum of the susceptibility as functions of L (log–log scale). The slopes give −β/ν and γ/ν.](/uploads/projects/ising-fss-exponents.png "Figure 10: (a) Magnetization at Tc and (b) maximum of the susceptibility as functions of L (log–log scale). The slopes give −β/ν and γ/ν.")

> **Try it with the code**
>
> Option 5 of `python3 ising_2D.py` computes the Binder cumulant for $L = 8$ to 64. With these data, estimate $T_c$ from the crossing points, and $\gamma/\nu$ from the maxima of $\chi$.

### 8.5 Hysteresis

Below $T_c$, the system has two ordered states, $m \approx \pm m_0$. If the field is swept from positive to negative values, the lattice stays magnetized up while the field is slightly negative. The up state is still stable against small fluctuations, and a reversed domain must be large enough to grow. The magnetization flips only at a finite _coercive field_. Sweeping back gives the symmetric branch, and the magnetization traces a _hysteresis loop_ (Figure 11). The loop shrinks as $T$ increases and disappears above $T_c$, where $m$ is a single-valued function of $h$: at $T = 3$ the two branches coincide within the statistical noise. Hysteresis is a non-equilibrium effect, and the width of the loop depends on how fast the field is swept. At $T = 2$, sweeping four times more slowly (160 instead of 40 sweeps per field value) reduces the coercive field from about $0.20$ to about $0.12$: the slower the sweep, the more time a reversed domain has to nucleate and grow. In true equilibrium, the magnetization of an infinite system would jump from $-m_0$ to $+m_0$ at $h = 0$.

![Magnetization of a 64×64 lattice while the field is swept from +1.5 to −1.5 and back, in steps of 0.04. At each field value, 20 Metropolis sweeps let the lattice relax and the next 20 are used to measure m.](/uploads/projects/ising-hysteresis.png "Figure 11: Magnetization of a 64×64 lattice while the field is swept from +1.5 to −1.5 and back, in steps of 0.04. At each field value, 20 Metropolis sweeps let the lattice relax and the next 20 are used to measure m.")

### 8.6 Critical slowing down

Figure 12 compares the Metropolis and Wolff algorithms at $T_c$. With Metropolis, $|m|$ wanders slowly and its autocorrelation time grows like $L^{2.09}$, close to the known dynamic exponent $z \approx 2.17$. With Wolff, the autocorrelation time, measured in sweeps, stays of order one and grows only like $L^{0.40}$. For $L = 64$, the autocorrelation time is $718$ sweeps with Metropolis and $2.0$ sweeps with Wolff, about $362$ times shorter. A Wolff sweep costs $1.1$ times more computer time, so Wolff is still about $316$ times more efficient. This is why all the scans near $T_c$ in these notes use it.

![(a) Time series of |m| for a 64×64 lattice at Tc with the Metropolis and Wolff algorithms. (b) Integrated autocorrelation time of |m| at Tc as a function of L.](/uploads/projects/ising-slowing-down.png "Figure 12: (a) Time series of |m| for a 64×64 lattice at Tc with the Metropolis and Wolff algorithms. (b) Integrated autocorrelation time of |m| at Tc as a function of L.")
