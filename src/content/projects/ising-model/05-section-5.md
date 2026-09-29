---
slug: ising-model/section-5
title: "The two-dimensional Ising model"
date: 2026-09-27
summary: "The Peierls argument, Kramers–Wannier duality and the critical temperature, Onsager's solution, critical exponents and universality, and finite lattices."
category: physics
series: ising-model
part: section-5
order: 5
kicker: "Section 5"
---
## 5.1 The Peierls argument: order at low temperature

In two dimensions, a domain of reversed spins is bounded by a closed wall. A wall of length $\ell$ (in lattice spacings) breaks $\ell$ bonds, and costs an energy $2J\ell$. The number of closed walls of length $\ell$ through a given bond grows roughly like $3^\ell$, since at each step the wall can continue in 3 directions. The free energy of such walls is therefore

$$
\Delta F(\ell) \approx \ell\,(2J - k_B T \ln 3),
$$

which is positive and grows with $\ell$ when $k_B T < 2J/\ln 3 = 1.82\,J$. Large reversed domains are then suppressed, and the system keeps a spontaneous magnetization. Peierls proposed this argument in 1936 [3]; a fully rigorous version, which proves that the 2D model is ordered at low temperature, was completed in the 1960s by Griffiths and Dobrushin. The estimate $2J/\ln 3$ is crude: the exact value $k_BT_c = 2.269\,J$ is higher, since counting all walls as independent overestimates their entropy. The contrast with one dimension is essential: there, a wall is a point whose energy does not grow with the size of the domain.

## 5.2 Kramers–Wannier duality: the critical temperature

The exact critical temperature can be found from a hidden symmetry. There are two ways to write the partition function.

**High-temperature expansion.** Since $s_i s_j = \pm 1$, $e^{K s_i s_j} = \cosh K\,(1 + u\, s_i s_j)$ with $u = \tanh K$. Expanding the product over the $2N$ bonds of the square lattice gives a sum over sets of bonds, each weighted by $u^{\text{number of bonds}}$. The sum over each spin vanishes unless the spin appears an even number of times, so only sets of bonds forming _closed graphs_ survive:

$$
Z = 2^N (\cosh K)^{2N} \sum_{\text{closed graphs } G} u^{|G|} .
$$

**Low-temperature expansion.** A configuration is described by its domain walls, which are closed graphs on the _dual lattice_, whose sites are the centres of the squares. Each wall bond costs $2J$, so

$$
Z = 2\, e^{2NK} \sum_{\text{closed graphs } G^*} e^{-2K|G^*|} .
$$

The dual of the square lattice is again a square lattice, so both sums are the same function $\Phi(x) = \sum_G x^{|G|}$, evaluated at $x = \tanh K$ and at $x = e^{-2K}$. The partition function at a high temperature (small $K$) is therefore related to that at a low temperature $K^*$ such that

$$
\tanh K = e^{-2K^*} \qquad\Longleftrightarrow\qquad \sinh 2K \, \sinh 2K^* = 1 .
$$

If there is a single phase transition, it must occur at the self-dual point $K = K^*$:

$$
\sinh\frac{2J}{k_B T_c} = 1,
\qquad
k_B T_c = \frac{2J}{\ln(1 + \sqrt{2})} = 2.269185\ldots J .
\tag{15}
$$

## 5.3 Onsager's solution

In 1944, Onsager computed the free energy of the infinite square lattice at $h = 0$ exactly [5]. With $K = \beta J$ and $\kappa = 2\sinh 2K/\cosh^2 2K$, his result can be written

$$
-\beta f = \ln(2\cosh 2K) + \frac{1}{\pi}\int_0^{\pi/2} \ln\frac{1 + \sqrt{1 - \kappa^2 \sin^2\phi}}{2}\, d\phi .
\tag{16}
$$

Derivatives give the energy and the specific heat, in terms of the complete elliptic integrals $K_1(\kappa) = \int_0^{\pi/2} d\phi/\sqrt{1 - \kappa^2\sin^2\phi}$ and $E_1(\kappa) = \int_0^{\pi/2} \sqrt{1 - \kappa^2\sin^2\phi}\, d\phi$:

$$
e = -J \coth 2K \left[ 1 + \frac{2}{\pi}\left(2\tanh^2 2K - 1\right) K_1(\kappa) \right],
\tag{17}
$$

$$
\frac{c}{k_B} = \frac{4}{\pi} (K \coth 2K)^2 \left\{ K_1 - E_1 - \left(1 - \tanh^2 2K\right)\left[\frac{\pi}{2} + \left(2\tanh^2 2K - 1\right) K_1\right] \right\}.
\tag{18}
$$

At $T_c$, $\kappa = 1$ and $K_1$ diverges logarithmically. The energy is continuous, $e(T_c) = -\sqrt{2}\,J$, but the specific heat diverges logarithmically:

$$
\frac{c}{k_B} \simeq -\frac{8 K_c^2}{\pi} \ln\left|1 - \frac{T}{T_c}\right| = -0.4945 \ln\left|1 - \frac{T}{T_c}\right| .
\tag{19}
$$

The spontaneous magnetization, announced by Onsager in 1948–49 and derived by Yang in 1952 [7], is

> **Key result**
>
> $$
> m_0 = \left(1 - \frac{1}{\sinh^4 2K}\right)^{1/8} \quad (T < T_c), \qquad m_0 = 0 \quad (T > T_c).
> \tag{20}
> $$
>
> Near $T_c$, $m_0 \simeq 1.222\,(1 - T/T_c)^{1/8}$: the magnetization vanishes with the exponent $\beta = 1/8$.

These results are the black curves in Figure 7. The program computes them in the module `exact.py`, and the tests check that Eqs. (17) and (18) are indeed the derivatives of Eq. (16).

## 5.4 Critical exponents, scaling and universality

Near the critical point, the thermodynamic quantities behave as power laws of the reduced temperature $t = (T - T_c)/T_c$, which define the _critical exponents_:

$$
\begin{gathered}
c \sim |t|^{-\alpha}, \qquad m_0 \sim (-t)^{\beta}, \qquad \chi \sim |t|^{-\gamma}, \qquad \xi \sim |t|^{-\nu},\\
m \sim h^{1/\delta} \ \text{ at } t = 0, \qquad G(r) \sim r^{-(d - 2 + \eta)} \ \text{ at } t = 0.
\end{gathered}
$$

Table 1 compares their values for the 2D and 3D Ising models and for mean-field theory.

| | $\alpha$ | $\beta$ | $\gamma$ | $\delta$ | $\nu$ | $\eta$ |
| --- | --- | --- | --- | --- | --- | --- |
| 2D Ising (exact) | $0$ (log) | $1/8$ | $7/4$ | $15$ | $1$ | $1/4$ |
| 3D Ising [15] | $0.110$ | $0.326$ | $1.237$ | $4.79$ | $0.630$ | $0.036$ |
| Mean field | $0$ (jump) | $1/2$ | $1$ | $3$ | $1/2$ | $0$ |

_Table 1: Critical exponents of the Ising model. The 3D values are numerical estimates._

The exponents are not independent. The _scaling hypothesis_, according to which the only relevant length near $T_c$ is $\xi$, implies the relations

$$
\alpha + 2\beta + \gamma = 2, \qquad \gamma = \beta(\delta - 1), \qquad \gamma = \nu(2 - \eta), \qquad d\nu = 2 - \alpha,
$$

which the exact 2D exponents satisfy (Exercise 8).

The exponents do not depend on the lattice (square, triangular, honeycomb), nor on the details of the interactions, nor even on the nature of the system: they depend only on the dimension and on the symmetry of the order parameter. This _universality_ explains why the liquid–gas critical points of real fluids have the exponents of the 3D Ising model. It is explained by the _renormalization group_ of Kadanoff and Wilson: near $T_c$, the physics at scales much larger than the lattice spacing forgets the microscopic details.

## 5.5 Finite lattices

A finite lattice has no true phase transition: $\xi$ cannot exceed the linear size $L$. The singularities are rounded: the specific heat and the susceptibility have finite peaks, whose heights grow with $L$ and whose positions tend to $T_c$. Kaufman's solution [6] gives the partition function of a finite periodic $L \times L$ lattice exactly. With $K = \beta J$,

$$
Z = \tfrac12 (2\sinh 2K)^{L^2/2} \sum_{i=1}^{4} Z_i,
\qquad
Z_{1,2} = \prod_{k=0}^{L-1} 2\left\{\begin{matrix}\cosh\\ \sinh\end{matrix}\right\}\!\left(\tfrac{L}{2}\gamma_{2k+1}\right),
\quad
Z_{3,4} = \prod_{k=0}^{L-1} 2\left\{\begin{matrix}\cosh\\ \sinh\end{matrix}\right\}\!\left(\tfrac{L}{2}\gamma_{2k}\right),
$$

where $\cosh\gamma_k = \cosh 2K \coth 2K - \cos(\pi k/L)$ for $k > 0$ and $\gamma_0 = 2K + \ln\tanh K$. The program uses this formula (checked against the direct enumeration of all $2^{16}$ states of a $4\times 4$ lattice) to give exact finite-size curves for the energy and specific heat: the dashed lines of Figure 7. How the peaks grow with $L$ is itself governed by the critical exponents; this _finite-size scaling_ is the main tool to extract exponents from simulations (Section [8.4](/projects/ising-model/sections-7-8#84-finite-size-scaling-and-the-binder-cumulant)).
