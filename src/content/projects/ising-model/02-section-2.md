---
slug: ising-model/section-2
title: "Statistical mechanics of the Ising model"
date: 2026-09-27
summary: "The canonical ensemble, thermodynamic quantities and their fluctuations, spontaneous symmetry breaking, and the warm-up case of independent spins."
category: physics
series: ising-model
part: section-2
order: 2
kicker: "Section 2"
---
## 2.1 The canonical ensemble

A system in contact with a heat bath at temperature $T$ is found in configuration $\sigma$ with the Boltzmann probability

$$
P(\sigma) = \frac{e^{-\beta H(\sigma)}}{Z},
\qquad
Z = \sum_{\sigma} e^{-\beta H(\sigma)},
\qquad
\beta = \frac{1}{k_B T}.
\tag{2}
$$

The _partition function_ $Z$ contains all the thermodynamics, through the free energy $F = -k_B T \ln Z$. The average of any observable $A$ is $\left\langle A \right\rangle = \sum_\sigma A(\sigma) P(\sigma)$.

## 2.2 Thermodynamic quantities and fluctuations

The quantities we will compute are the energy and the magnetization,

$$
E = \left\langle H \right\rangle, \qquad M = \left\langle \textstyle\sum_i s_i \right\rangle,
$$

and their responses: the specific heat $C = \partial E / \partial T$ and the magnetic susceptibility $\chi = \partial M / \partial h$. They are all derivatives of $\ln Z$:

$$
E = -\frac{\partial \ln Z}{\partial \beta}, \qquad C = \frac{\partial E}{\partial T} = \frac{\left\langle H^2 \right\rangle - \left\langle H \right\rangle^2}{k_B T^2},
\tag{3}
$$

$$
M = \frac{1}{\beta}\frac{\partial \ln Z}{\partial h}, \qquad \chi = \frac{\partial M}{\partial h} = \frac{\left\langle \mathcal{M}^2 \right\rangle - \left\langle \mathcal{M} \right\rangle^2}{k_B T},
\tag{4}
$$

where $\mathcal{M} = \sum_i s_i$. These _fluctuation–dissipation relations_ are very useful in simulations: they give the responses $C$ and $\chi$ from the fluctuations of $H$ and $\mathcal{M}$ at fixed temperature and field, without having to take numerical derivatives. Since $E$, $M$, $C$ and $\chi$ are proportional to $N$, we give their values per spin: $e = E/N$, $m = M/N$, $c = C/N$ and $\chi/N$, which we still call $\chi$.

The difficulty is the number of terms in $Z$. A $10 \times 10$ lattice already has $2^{100} \approx 1.3 \times 10^{30}$ configurations: summing over all of them, even at $10^9$ configurations per second, would take $4 \times 10^{13}$ years. Exact results require mathematical tricks (Sections [3](/projects/ising-model/section-3) and [5](/projects/ising-model/section-5)); otherwise we must sample the configurations (Section [6](/projects/ising-model/section-6)).

## 2.3 Symmetry and spontaneous symmetry breaking

At $h = 0$, the energy (1) does not change when all the spins are flipped, $s_i \to -s_i$. For every configuration with magnetization $\mathcal{M}$ there is one with $-\mathcal{M}$ and the same probability, so

$$
\left\langle \mathcal{M} \right\rangle = 0 \qquad \text{for any finite system at } h = 0 .
$$

A finite system therefore never has a spontaneous magnetization in the strict sense. A phase transition can only occur in the _thermodynamic limit_ $N \to \infty$. There, the spontaneous magnetization is defined by taking the limit of a small field in the right order,

$$
m_0(T) = \lim_{h \to 0^+} \lim_{N \to \infty} \frac{M}{N} .
\tag{5}
$$

If $m_0 \neq 0$, the system has chosen one of the two directions although the energy has no preferred one: the symmetry is _spontaneously broken_. The magnetization is the _order parameter_ of the transition. Mathematically, a phase transition is a point where the free energy per spin, $f = F/N$ in the limit $N \to \infty$, is not an analytic function of $T$ and $h$. Since each finite $Z$ is a finite sum of exponentials, the non-analyticity can only appear in the limit.

In a large but finite system below the transition, the magnetization does not vanish at a given moment: it fluctuates around $+m_0$ or $-m_0$, and very rarely jumps from one to the other. This is why simulations measure $\left\langle |m| \right\rangle$ rather than $\left\langle m \right\rangle$. For the same reason, the 2D simulations at $h = 0$ measure the fluctuations of $|m|$,

$$
\chi' = \frac{N\left(\left\langle m^2 \right\rangle - \left\langle |m| \right\rangle^2\right)}{k_B T},
\tag{6}
$$

instead of Eq. (4), which in a finite system at $h = 0$ reduces to $N\left\langle m^2 \right\rangle/k_BT$ and grows like $N$ below $T_c$ because $m$ flips between $\pm m_0$. Below $T_c$, $\chi'$ measures the response within one ordered state; above $T_c$, where $m$ has Gaussian fluctuations, $\chi' = (1 - 2/\pi)\chi$. Both diverge at $T_c$ with the same exponent. All the 2D results at $h = 0$ below use $\chi'$; the 1D results, and all results in a field, use Eq. (4).

## 2.4 Warm-up: independent spins

Without interactions ($J = 0$), the spins are independent:

$$
Z = \prod_{i=1}^N \sum_{s_i = \pm 1} e^{\beta h s_i} = \left(2\cosh \beta h\right)^N,
\qquad
m = \tanh(\beta h), \qquad \chi\big|_{h=0} = \frac{1}{k_B T}.
$$

This is a _paramagnet_: the field aligns the spins against thermal agitation, and the susceptibility follows Curie's law $\chi \propto 1/T$. There is no spontaneous magnetization. Interactions are needed for order.
