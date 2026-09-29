---
slug: ising-model/section-4
title: "Mean-field theory"
date: 2026-09-27
summary: "The Weiss molecular field, the critical behaviour that it predicts, Landau theory, and where the approximation succeeds and where it fails."
category: physics
series: ising-model
part: section-4
order: 4
kicker: "Section 4"
---
## 4.1 The Weiss molecular field

In most cases, the model cannot be solved exactly. The simplest approximation, due to Pierre Weiss (1907), replaces the neighbours of each spin by their average value. Spin $i$ then feels an effective field

$$
h_{\text{eff}} = h + J \sum_{j \text{ neighbour of } i} \left\langle s_j \right\rangle = h + qJm ,
$$

and behaves like an independent spin in this field (Section [2.4](/projects/ising-model/section-2#24-warm-up-independent-spins)). Its average must equal $m$, which gives the _self-consistency equation_

$$
m = \tanh\!\big(\beta (qJm + h)\big).
\tag{12}
$$

At $h = 0$, $m = 0$ is always a solution. The graphical solution (Figure 4a) shows that two other solutions $\pm m_0$ appear when the slope of $\tanh(\beta qJm)$ at the origin exceeds 1, that is, below the mean-field critical temperature

$$
k_B T_c^{\text{MF}} = qJ .
\tag{13}
$$

## 4.2 Critical behaviour

Near $T_c^{\text{MF}}$, $m$ is small and we can expand $\tanh x \simeq x - x^3/3$. With $h = 0$, Eq. (12) gives

$$
m \simeq \sqrt{3}\left(1 - \frac{T}{T_c^{\text{MF}}}\right)^{1/2} .
$$

Above $T_c^{\text{MF}}$, a small field gives $m \simeq \beta(qJm + h)$, so that $\chi = m/h = 1/[k_B(T - T_c^{\text{MF}})]$: the Curie–Weiss law. At $T = T_c^{\text{MF}}$, $m \simeq (3h/qJ)^{1/3}$. These power laws define _critical exponents_ (Section [5.4](/projects/ising-model/section-5#54-critical-exponents-scaling-and-universality)); mean-field theory predicts the exponents $\beta = 1/2$, $\gamma = 1$ and $\delta = 3$. (By tradition, the exponent $\beta$ has the same name as the inverse temperature $\beta = 1/k_BT$; the context always makes clear which one is meant.)

## 4.3 Landau theory

The same results follow from the mean-field free energy per spin,

$$
f(m) = \tfrac12 qJ m^2 - k_B T \ln\!\big[2\cosh\big(\beta(qJm + h)\big)\big],
$$

whose minimum is given by Eq. (12). Expanding at $h = 0$ in powers of $m$,

$$
f(m) \simeq -k_B T \ln 2 + \frac{qJ}{2}\left(1 - \frac{T_c^{\text{MF}}}{T}\right) m^2 + \frac{k_B (T_c^{\text{MF}})^4}{12\,T^3}\, m^4 .
\tag{14}
$$

Above $T_c^{\text{MF}}$ the coefficient of $m^2$ is positive and the minimum is at $m = 0$. Below $T_c^{\text{MF}}$ it is negative and $f$ has two symmetric minima at $\pm m_0$: this is spontaneous symmetry breaking. Lev Landau showed that the form (14) follows from symmetry alone, whatever the microscopic details, which explains why mean-field theory gives the same exponents for all systems.

## 4.4 Successes and failures

Mean-field theory describes the existence of the transition and the shape of the phase diagram qualitatively, but it neglects fluctuations, which are essential near $T_c$:

- in one dimension it predicts a transition at $k_BT_c = 2J$, whereas there is none;

- in two dimensions it predicts $k_BT_c = 4J$, whereas the exact value is $2.269\,J$ (Figure 4b);

- its critical exponents are wrong in two and three dimensions.

Above four dimensions, the _upper critical dimension_ of the Ising model, the mean-field critical exponents become exact, although the critical temperature itself remains below $qJ/k_B$. Mean-field theory is fully exact when each spin interacts equally with all the others.

![(a) Graphical solution of the mean-field equation (12) on the square lattice (q = 4) at h = 0: non-zero solutions exist for T < 4. (b) Mean-field spontaneous magnetization compared with the exact result of Onsager and Yang, Eq. (20).](/uploads/projects/ising-mean-field.png "Figure 4: (a) Graphical solution of the mean-field equation (12) on the square lattice (q = 4) at h = 0: non-zero solutions exist for T < 4. (b) Mean-field spontaneous magnetization compared with the exact result of Onsager and Yang, Eq. (20).")
