---
slug: ising-model
title: "The Ising Model in One and Two Dimensions: Exact Results and Monte Carlo Simulations"
date: 2026-09-27
summary: >-
  Self-contained notes on the Ising model, from the exact solution of the
  chain to Onsager's solution of the square lattice, paired with a tested
  Python package for Metropolis, heat-bath and Wolff simulations. Every
  simulated result is checked against exact solutions, and finite-size
  scaling recovers the 2D critical exponents.
category: physics
repo: "https://github.com/daoudizakaria/Ising-Model"
paper: "/uploads/projects/ising-model-notes.pdf"
featured: false
tags:
  - statistical-physics
  - phase-transitions
  - monte-carlo
  - critical-phenomena
  - python
---

## About this project

The Ising model is the simplest system in which interacting particles collectively undergo a phase transition, and the standard test bench for Monte Carlo methods. This project pairs a Python package that simulates the model in one and two dimensions with the complete set of notes below. The notes explain the physics, from the exact solution of the chain to Onsager's solution of the square lattice, then the simulation methods and their statistical analysis. Every simulated result is checked against an exact solution: the transfer matrix for chains, exact enumeration and Kaufman's formula for finite lattices, and Onsager's and Yang's results for the infinite lattice. The notes are written for undergraduate students who have followed a first course in statistical physics. The code is [on GitHub](https://github.com/daoudizakaria/Ising-Model), and the notes can also be [downloaded as a PDF](/uploads/projects/ising-model-notes.pdf).

## Abstract

The Ising model is the simplest model of a system in which many interacting particles collectively undergo a phase transition. These notes give a self-contained introduction to the model in one and two dimensions. After a reminder of the statistical mechanics needed, we solve the one-dimensional chain exactly with the transfer matrix and show that it has no phase transition. We then introduce mean-field theory, and turn to the two-dimensional square lattice: the Peierls argument, Kramers–Wannier duality, Onsager's exact solution, critical exponents and universality. The second half of the notes is devoted to Monte Carlo simulations: importance sampling, the Metropolis, heat-bath and Wolff algorithms, the statistical analysis of the data, and finite-size scaling. Every numerical result is produced by the accompanying Python code, and checked against the exact solutions. The notes are aimed at undergraduate students who have followed a first course in statistical physics. Exercises with answers are given at the end.

## 1 Introduction

### 1.1 Ferromagnetism

A piece of iron can be a permanent magnet: its atomic magnetic moments, carried by the spins of electrons, point on average in the same direction, even without any external field. This _spontaneous magnetization_ disappears when the iron is heated above its _Curie temperature_, $1043$ K. Above this temperature the moments point in random directions, and the magnetization vanishes. The transition between the two behaviours is sharp: the spontaneous magnetization goes continuously to zero at the Curie temperature, but its derivative, the magnetic susceptibility and the specific heat behave singularly there.

The alignment is caused by the _exchange interaction_, a quantum-mechanical effect that makes neighbouring spins prefer to be parallel. Thermal agitation opposes this order. The phase transition results from the competition between energy, which favours order, and entropy, which favours disorder. The Ising model is the simplest model that captures this competition.

### 1.2 The model

Consider a lattice of $N$ sites. On each site $i$ sits a “spin” $s_i$ that can only take two values, $s_i = +1$ (up) or $s_i = -1$ (down). A _configuration_ of the system is the list $\sigma = (s_1, \dots, s_N)$; there are $2^N$ of them. The energy of a configuration is

$$
H(\sigma) = -J \sum_{\langle ij \rangle} s_i s_j \;-\; h \sum_{i=1}^N s_i ,
\tag{1}
$$

where $\sum_{\langle ij \rangle}$ runs over all pairs of nearest neighbours, each pair counted once.

- The coupling $J$ measures the interaction between neighbours. For $J > 0$ the energy is lowest when neighbouring spins are parallel: the model describes a _ferromagnet_. For $J < 0$ it describes an antiferromagnet. We take $J > 0$.

- The field $h$ measures the coupling to an external magnetic field. It is the product of the magnetic moment of a spin and the magnetic field. A positive $h$ favours $s_i = +1$.

We study the chain ($d = 1$, each spin has $q = 2$ neighbours) and the square lattice ($d = 2$, $q = 4$), with periodic boundary conditions (except for the open chain of Section 3.1). We measure energies in units of $J$ and temperatures in units of $J/k_B$, that is, we set $J = k_B = 1$ in all numerical results.

The Ising model is a drastic simplification of a real magnet: the spins are classical, they can point in only two directions, and they only interact with their nearest neighbours. It is nonetheless far from trivial, and, as we shall see, its behaviour near the transition is _exactly_ the same as that of many real systems.

### 1.3 A short history

The model was proposed in 1920 by Wilhelm Lenz [1], and solved in one dimension by his student Ernst Ising in his 1924 thesis [2]. Ising found that the chain has no phase transition, and wrongly suggested that the same was true in any dimension. In 1936, Rudolf Peierls showed that the two-dimensional model does have spontaneous magnetization at low temperature [3]. In 1941, Hendrik Kramers and Gregory Wannier located the critical temperature exactly, using a symmetry of the model called duality [4]. In 1944, Lars Onsager obtained the exact free energy of the two-dimensional model [5], a landmark of theoretical physics. Bruria Kaufman simplified the solution and extended it to finite lattices [6], and Chen Ning Yang computed the spontaneous magnetization [7]. The three-dimensional model has never been solved exactly. For the history of the model, see [9].

At the same time, the Ising model became the test bench of computer simulations. The Metropolis algorithm, invented in 1953 [10], is still the starting point of most Monte Carlo methods, and the cluster algorithms of Swendsen, Wang [11] and Wolff [12] were first developed and tested on the Ising model and its generalizations.

### 1.4 Why the Ising model matters

The importance of the model goes far beyond magnetism:

- **Lattice gas.** Writing $s_i = 2n_i - 1$, where $n_i = 1$ if site $i$ is occupied by an atom and $0$ if it is empty, maps the Ising model onto a model of a gas of atoms that attract each other [8]. The ferromagnetic transition becomes the liquid–gas critical point.

- **Binary alloys.** With $s_i = \pm 1$ for two kinds of atoms, the model describes the unmixing of alloys ($J > 0$) and, with an antiferromagnetic coupling ($J < 0$), the order–disorder transitions of alloys such as $\beta$-brass.

- **Universality.** Near a critical point, the details of the interactions do not matter. The three-dimensional Ising model has _exactly_ the same critical exponents as the liquid–gas critical point of carbon dioxide or water, or as uniaxial magnets (Section 5.4).

- **Beyond physics.** Ising-like models describe neural networks (the Hopfield model [17] and Boltzmann machines), image restoration, and opinion dynamics in social systems.

## 2 Statistical mechanics of the Ising model

### 2.1 The canonical ensemble

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

### 2.2 Thermodynamic quantities and fluctuations

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

The difficulty is the number of terms in $Z$. A $10 \times 10$ lattice already has $2^{100} \approx 1.3 \times 10^{30}$ configurations: summing over all of them, even at $10^9$ configurations per second, would take $4 \times 10^{13}$ years. Exact results require mathematical tricks (Sections 3 and 5); otherwise we must sample the configurations (Section 6).

### 2.3 Symmetry and spontaneous symmetry breaking

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

### 2.4 Warm-up: independent spins

Without interactions ($J = 0$), the spins are independent:

$$
Z = \prod_{i=1}^N \sum_{s_i = \pm 1} e^{\beta h s_i} = \left(2\cosh \beta h\right)^N,
\qquad
m = \tanh(\beta h), \qquad \chi\big|_{h=0} = \frac{1}{k_B T}.
$$

This is a _paramagnet_: the field aligns the spins against thermal agitation, and the susceptibility follows Curie's law $\chi \propto 1/T$. There is no spontaneous magnetization. Interactions are needed for order.

## 3 The Ising chain: an exact solution

### 3.1 The open chain at zero field

Consider first an open chain of $N$ spins at $h = 0$, $H = -J\sum_{i=1}^{N-1} s_i s_{i+1}$. Introduce the _bond variables_ $\tau_i = s_i s_{i+1} = \pm 1$, which say whether bond $i$ is satisfied ($+1$) or broken ($-1$). A configuration is fully described by $s_1$ and $\tau_1, \dots, \tau_{N-1}$, and these variables are independent:

$$
Z = \sum_{s_1} \prod_{i=1}^{N-1} \sum_{\tau_i = \pm1} e^{K \tau_i} = 2\,(2\cosh K)^{N-1},
\qquad K = \beta J .
$$

For large $N$ the free energy, energy and specific heat per spin are

$$
f = -k_B T \ln(2\cosh K), \qquad
e = -J \tanh K, \qquad
c = k_B\,\frac{K^2}{\cosh^2 K} .
\tag{7}
$$

These are smooth functions of $T$ for all $T > 0$: there is no phase transition. The specific heat has a broad maximum, $c = 0.439\,k_B$ at $T = 0.834\,J/k_B$, which signals that the spins order gradually as $T$ decreases (Figure 5).

### 3.2 The transfer matrix

With a field, the bond variables are no longer independent, and we use a more powerful method. For a periodic chain ($s_{N+1} = s_1$) we write the Boltzmann weight as a product of factors that each involve two neighbouring spins:

$$
e^{-\beta H} = \prod_{i=1}^N \mathcal{T}_{s_i s_{i+1}},
\qquad
\mathcal{T}_{s s'} = \exp\!\left[ K s s' + \tfrac{\beta h}{2}(s + s') \right].
$$

$\mathcal{T}$ is a $2 \times 2$ matrix, the _transfer matrix_:

$$
\mathcal{T} = \begin{pmatrix} e^{K + \beta h} & e^{-K} \\ e^{-K} & e^{K - \beta h} \end{pmatrix}.
$$

The sum over all configurations is a product of matrices:

$$
Z = \sum_{s_1, \dots, s_N} \mathcal{T}_{s_1 s_2} \mathcal{T}_{s_2 s_3} \cdots \mathcal{T}_{s_N s_1} = \operatorname{Tr}\, \mathcal{T}^N = \lambda_+^N + \lambda_-^N ,
\tag{8}
$$

where $\lambda_\pm$ are the eigenvalues of $\mathcal{T}$:

$$
\lambda_\pm = e^K \cosh \beta h \pm \sqrt{e^{2K}\sinh^2 \beta h + e^{-2K}} .
\tag{9}
$$

Since $\lambda_+ > |\lambda_-|$, for large $N$ only the largest eigenvalue survives: $Z \simeq \lambda_+^N$ and $f = -k_B T \ln \lambda_+$. Equation (8) is exact for any $N$, which gives exact results for finite chains as well; the program uses it to check the simulations.

> **Key result**
>
> The Ising chain in a field has the magnetization and zero-field susceptibility
>
> $$
> m = \frac{\sinh \beta h}{\sqrt{\sinh^2 \beta h + e^{-4K}}},
> \qquad
> \chi\big|_{h=0} = \frac{e^{2J/k_B T}}{k_B T}.
> \tag{10}
> $$
>
> At $h = 0$, $m = 0$ at every temperature $T > 0$: the chain has no spontaneous magnetization.

Compared with free spins, the interaction makes the chain much more responsive: the susceptibility is enhanced by the factor $e^{2J/k_BT}$, which grows without bound as $T \to 0$ (Figure 1). But it only diverges at $T = 0$.

![Magnetization of the Ising chain in a field, Eq. (10) (solid lines), compared with independent spins, m = tanh(h/T) (dotted). At low temperature the chain responds to a very small field, because the spins are aligned over long distances, but m = 0 at h = 0.](/uploads/projects/ising-chain-field.png "Figure 1: Magnetization of the Ising chain in a field, Eq. (10) (solid lines), compared with independent spins, m = tanh(h/T) (dotted). At low temperature the chain responds to a very small field, because the spins are aligned over long distances, but m = 0 at h = 0.")

### 3.3 Correlations and the correlation length

How far does the order extend? The _spin–spin correlation function_ $G(r) = \left\langle s_i s_{i+r} \right\rangle$ measures how much the spin at site $i + r$ “knows” about the spin at site $i$. With bond variables, $s_i s_{i+r} = \tau_i \tau_{i+1} \cdots \tau_{i+r-1}$, and since the $\tau$ are independent with $\left\langle \tau \right\rangle = \tanh K$,

$$
G(r) = (\tanh K)^r = e^{-r/\xi}, \qquad
\xi = -\frac{1}{\ln \tanh K} \;\underset{T \to 0}{\simeq}\; \frac{1}{2} e^{2J/k_B T} .
\tag{11}
$$

The correlations decay exponentially over the _correlation length_ $\xi$, the typical size of the ordered domains. As $T \to 0$, $\xi$ grows exponentially, but it is finite at every $T > 0$ (Figure 2).

The susceptibility is related to the correlations. From Eq. (4) at $h = 0$,

$$
k_B T \chi = \frac{1}{N}\sum_{i,j} \left\langle s_i s_j \right\rangle = \sum_r G(r) = 1 + 2\sum_{r=1}^\infty (\tanh K)^r = \frac{1 + \tanh K}{1 - \tanh K} = e^{2K},
$$

which is Eq. (10) again. This relation is general: _a large susceptibility means long-range correlations_. At a critical point, where $\chi$ diverges, the correlation length diverges too.

![(a) Correlation function of the chain, measured in simulations of 400 spins (points), compared with the exact result (tanh K)^r (lines). (b) The correlation length (11) and its low-temperature approximation.](/uploads/projects/ising-chain-correlation.png "Figure 2: (a) Correlation function of the chain, measured in simulations of 400 spins (points), compared with the exact result (tanh K)^r (lines). (b) The correlation length (11) and its low-temperature approximation.")

### 3.4 Why there is no phase transition in one dimension

A simple argument, due to Landau, explains the absence of order. Start from the fully ordered chain of $N$ spins and flip all the spins to the right of some bond. This creates a _domain wall_, which costs an energy $2J$. The wall can be placed on any of the $N - 1$ bonds, which gives an entropy $k_B \ln (N-1) \simeq k_B \ln N$. The free energy changes by

$$
\Delta F = 2J - k_B T \ln N ,
$$

which is negative for any $T > 0$ when $N$ is large enough. Domain walls are therefore always created, and they destroy the long-range order. Their density is $1/(1 + e^{2K}) \simeq e^{-2J/k_B T}$ per bond, about one wall every two correlation lengths. Figure 3 shows the domains appearing, moving and annihilating in a simulation. In two dimensions, the argument fails, as we will see: a wall is a line whose energy grows with its length.

![Space–time picture of a chain of 256 spins in a Metropolis simulation, starting from random spins (white: up, black: down). Each row is the chain after one sweep. At T = 0.6 (ξ ≈ 14), domains with a mean length of about 29 spins form and slowly diffuse; at T = 1.5 (ξ ≈ 1.9), the mean domain length is about 5.](/uploads/projects/ising-chain-spacetime-lattice.webp "Figure 3: Space–time picture of a chain of 256 spins in a Metropolis simulation, starting from random spins (white: up, black: down). Each row is the chain after one sweep. At T = 0.6 (ξ ≈ 14), domains with a mean length of about 29 spins form and slowly diffuse; at T = 1.5 (ξ ≈ 1.9), the mean domain length is about 5.")

## 4 Mean-field theory

### 4.1 The Weiss molecular field

In most cases, the model cannot be solved exactly. The simplest approximation, due to Pierre Weiss (1907), replaces the neighbours of each spin by their average value. Spin $i$ then feels an effective field

$$
h_{\text{eff}} = h + J \sum_{j \text{ neighbour of } i} \left\langle s_j \right\rangle = h + qJm ,
$$

and behaves like an independent spin in this field (Section 2.4). Its average must equal $m$, which gives the _self-consistency equation_

$$
m = \tanh\!\big(\beta (qJm + h)\big).
\tag{12}
$$

At $h = 0$, $m = 0$ is always a solution. The graphical solution (Figure 4a) shows that two other solutions $\pm m_0$ appear when the slope of $\tanh(\beta qJm)$ at the origin exceeds 1, that is, below the mean-field critical temperature

$$
k_B T_c^{\text{MF}} = qJ .
\tag{13}
$$

### 4.2 Critical behaviour

Near $T_c^{\text{MF}}$, $m$ is small and we can expand $\tanh x \simeq x - x^3/3$. With $h = 0$, Eq. (12) gives

$$
m \simeq \sqrt{3}\left(1 - \frac{T}{T_c^{\text{MF}}}\right)^{1/2} .
$$

Above $T_c^{\text{MF}}$, a small field gives $m \simeq \beta(qJm + h)$, so that $\chi = m/h = 1/[k_B(T - T_c^{\text{MF}})]$: the Curie–Weiss law. At $T = T_c^{\text{MF}}$, $m \simeq (3h/qJ)^{1/3}$. These power laws define _critical exponents_ (Section 5.4); mean-field theory predicts the exponents $\beta = 1/2$, $\gamma = 1$ and $\delta = 3$. (By tradition, the exponent $\beta$ has the same name as the inverse temperature $\beta = 1/k_BT$; the context always makes clear which one is meant.)

### 4.3 Landau theory

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

### 4.4 Successes and failures

Mean-field theory describes the existence of the transition and the shape of the phase diagram qualitatively, but it neglects fluctuations, which are essential near $T_c$:

- in one dimension it predicts a transition at $k_BT_c = 2J$, whereas there is none;

- in two dimensions it predicts $k_BT_c = 4J$, whereas the exact value is $2.269\,J$ (Figure 4b);

- its critical exponents are wrong in two and three dimensions.

Above four dimensions, the _upper critical dimension_ of the Ising model, the mean-field critical exponents become exact, although the critical temperature itself remains below $qJ/k_B$. Mean-field theory is fully exact when each spin interacts equally with all the others.

![(a) Graphical solution of the mean-field equation (12) on the square lattice (q = 4) at h = 0: non-zero solutions exist for T < 4. (b) Mean-field spontaneous magnetization compared with the exact result of Onsager and Yang, Eq. (20).](/uploads/projects/ising-mean-field.png "Figure 4: (a) Graphical solution of the mean-field equation (12) on the square lattice (q = 4) at h = 0: non-zero solutions exist for T < 4. (b) Mean-field spontaneous magnetization compared with the exact result of Onsager and Yang, Eq. (20).")

## 5 The two-dimensional Ising model

### 5.1 The Peierls argument: order at low temperature

In two dimensions, a domain of reversed spins is bounded by a closed wall. A wall of length $\ell$ (in lattice spacings) breaks $\ell$ bonds, and costs an energy $2J\ell$. The number of closed walls of length $\ell$ through a given bond grows roughly like $3^\ell$, since at each step the wall can continue in 3 directions. The free energy of such walls is therefore

$$
\Delta F(\ell) \approx \ell\,(2J - k_B T \ln 3),
$$

which is positive and grows with $\ell$ when $k_B T < 2J/\ln 3 = 1.82\,J$. Large reversed domains are then suppressed, and the system keeps a spontaneous magnetization. Peierls proposed this argument in 1936 [3]; a fully rigorous version, which proves that the 2D model is ordered at low temperature, was completed in the 1960s by Griffiths and Dobrushin. The estimate $2J/\ln 3$ is crude: the exact value $k_BT_c = 2.269\,J$ is higher, since counting all walls as independent overestimates their entropy. The contrast with one dimension is essential: there, a wall is a point whose energy does not grow with the size of the domain.

### 5.2 Kramers–Wannier duality: the critical temperature

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

### 5.3 Onsager's solution

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

### 5.4 Critical exponents, scaling and universality

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

### 5.5 Finite lattices

A finite lattice has no true phase transition: $\xi$ cannot exceed the linear size $L$. The singularities are rounded: the specific heat and the susceptibility have finite peaks, whose heights grow with $L$ and whose positions tend to $T_c$. Kaufman's solution [6] gives the partition function of a finite periodic $L \times L$ lattice exactly. With $K = \beta J$,

$$
Z = \tfrac12 (2\sinh 2K)^{L^2/2} \sum_{i=1}^{4} Z_i,
\qquad
Z_{1,2} = \prod_{k=0}^{L-1} 2\left\{\begin{matrix}\cosh\\ \sinh\end{matrix}\right\}\!\left(\tfrac{L}{2}\gamma_{2k+1}\right),
\quad
Z_{3,4} = \prod_{k=0}^{L-1} 2\left\{\begin{matrix}\cosh\\ \sinh\end{matrix}\right\}\!\left(\tfrac{L}{2}\gamma_{2k}\right),
$$

where $\cosh\gamma_k = \cosh 2K \coth 2K - \cos(\pi k/L)$ for $k > 0$ and $\gamma_0 = 2K + \ln\tanh K$. The program uses this formula (checked against the direct enumeration of all $2^{16}$ states of a $4\times 4$ lattice) to give exact finite-size curves for the energy and specific heat: the dashed lines of Figure 7. How the peaks grow with $L$ is itself governed by the critical exponents; this _finite-size scaling_ is the main tool to extract exponents from simulations (Section 8.4).

## 6 Monte Carlo simulation

### 6.1 Importance sampling

Since we cannot sum over all configurations, we sample them. Choosing configurations uniformly at random would be useless: almost all of them have $\mathcal{M} \approx 0$ and an energy close to zero, and they have an exponentially small weight at low temperature. The idea of _importance sampling_ is to generate configurations $\sigma_1, \sigma_2, \dots, \sigma_n$ directly with the Boltzmann probability (2). Averages are then simple arithmetic means,

$$
\left\langle A \right\rangle \approx \frac{1}{n}\sum_{k=1}^n A(\sigma_k),
$$

with a statistical error that decreases like $1/\sqrt{n}$.

### 6.2 Markov chains and detailed balance

We cannot draw configurations from $P(\sigma)$ directly, since we do not know $Z$. Instead we build a _Markov chain_: starting from any configuration, we go from $\sigma$ to $\sigma'$ with a transition probability $W(\sigma \to \sigma')$. If

1. every configuration can be reached from every other one, and the chain does not cycle periodically (_ergodicity_), and

2. the transition probabilities satisfy _detailed balance_,

   $$
   P(\sigma)\, W(\sigma \to \sigma') = P(\sigma')\, W(\sigma' \to \sigma),
   \tag{21}
   $$

then after many steps the chain visits the configurations with the probability $P(\sigma)$, whatever the starting point. Detailed balance ensures that $P$ is stationary: the probability flow from $\sigma$ to $\sigma'$ equals the reverse flow. For the Boltzmann distribution it only involves the ratio $P(\sigma')/P(\sigma) = e^{-\beta \Delta E}$, where $\Delta E = H(\sigma') - H(\sigma)$, so $Z$ is not needed.

### 6.3 The Metropolis algorithm

The Metropolis algorithm [10] proposes to flip one spin at a time. Flipping spin $i$ changes the energy by

$$
\Delta E = 2 s_i \Big( J \sum_{j \text{ nb of } i} s_j + h \Big),
\tag{22}
$$

which only involves its neighbours. The flip is accepted with probability

$$
A = \min\left(1, e^{-\beta \Delta E}\right).
\tag{23}
$$

A flip that lowers the energy is always accepted; one that raises it is accepted with the Boltzmann factor. The ratio of the forward and backward probabilities is $e^{-\beta\Delta E}$, so detailed balance holds (Exercise 9).

_Algorithm 1: One Metropolis sweep_

```
repeat N times:
    choose a site i at random
    ΔE ← 2 s_i (J Σ_{j ∈ nb(i)} s_j + h)
    if ΔE ≤ 0 or random() < exp(−β ΔE):
        s_i ← −s_i                  # accept the flip
```

One _sweep_, $N$ attempted flips, gives every spin on average one chance to flip; time in Monte Carlo simulations is measured in sweeps. On the square lattice at $h = 0$, $\Delta E$ only takes the values $-8J, -4J, 0, 4J, 8J$.

### 6.4 The heat-bath algorithm on a checkerboard

In the heat-bath algorithm, spin $i$ is not flipped but drawn anew from its conditional probability given its neighbours: it is set to $+1$ with probability

$$
p_+ = \frac{1}{1 + e^{-2\beta(J\sum_j s_j + h)}} ,
$$

whatever its current value. This also satisfies detailed balance. The lattice can be coloured like a chessboard: the neighbours of a black site are all white. All the black spins can therefore be updated at the same time, then all the white spins. This _checkerboard_ update is well suited to vectorized computing; the program implements it with NumPy.

> **A pitfall**
>
> One might be tempted to apply the Metropolis rule (23) to all the black spins at the same time. Each sub-lattice update does leave the Boltzmann distribution invariant, but the resulting Markov chain is _not ergodic_. A spin with $\Delta E = 0$ is flipped with probability exactly 1, and the dynamics becomes partly deterministic. For a ring of 6 spins, the transition matrix of this update has three eigenvalues of modulus 1 instead of one: the chain is trapped in subsets of configurations. The simulations then converge to wrong averages. For a chain of 8 spins at $T = 1$, starting with all spins up, the energy per spin comes out as $-0.880$ instead of the exact $-0.818$; the wrong value even depends on the starting configuration. The heat-bath rule, whose probabilities are never exactly 0 or 1, does not have this problem. Checking against exact results is the only way to catch such errors.

### 6.5 Equilibration and measurements

A simulation starts from an arbitrary configuration, either random (“hot start”) or fully ordered (“cold start”). The first sweeps are discarded until the chain has forgotten its starting point (_thermalization_). The energy and magnetization are then measured after every sweep. Figure 12a shows typical time series of $|m|$.

### 6.6 Statistical errors

Successive configurations of a Markov chain are correlated, so the $n$ measurements are not independent. The _autocorrelation function_ of an observable $A$,

$$
C_A(t) = \frac{\left\langle A_k A_{k+t} \right\rangle - \left\langle A \right\rangle^2}{\left\langle A^2 \right\rangle - \left\langle A \right\rangle^2},
$$

decays over a time of order the _integrated autocorrelation time_ $\tau = \frac12 + \sum_{t \ge 1} C_A(t)$. The effective number of independent measurements is $n/(2\tau)$, and the error on $\left\langle A \right\rangle$ is $\sqrt{2\tau}$ times larger than the naive $\sigma_A/\sqrt{n}$.

In practice the program uses _binning_: the series is cut into 32 blocks, much longer than $\tau$, whose averages are independent. For quantities that are non-linear functions of averages, such as $c \propto \left\langle e^2 \right\rangle - \left\langle e \right\rangle^2$, the error is estimated with the _jackknife_: the quantity is recomputed 32 times, each time leaving out one block, and the spread of these values gives the error.

### 6.7 Critical slowing down and the Wolff algorithm

Near $T_c$, the system is made of correlated domains of all sizes up to $\xi$. Single-spin flips change them only at their edges, and the autocorrelation time grows like $\tau \sim \xi^z$, where $z$ is the _dynamic exponent_. At $T_c$ on a finite lattice, $\xi \sim L$ and $\tau \sim L^z$. For local algorithms, $z \approx 2.17$ [14]: simulations of large lattices near $T_c$ become very slow. This is _critical slowing down_.

Cluster algorithms solve this problem by flipping whole domains at once. In the Wolff algorithm [12], based on ideas of Swendsen and Wang [11]:

1. choose a random seed spin;

2. add each neighbour that is parallel to a spin of the cluster with probability $p = 1 - e^{-2\beta J}$, and repeat from the newly added spins until the cluster stops growing;

3. flip the whole cluster.

The move is always accepted. Detailed balance holds because the probability of building the same cluster in the forward and backward moves differs only by the bonds on its boundary that were not added. Their ratio, $(1 - p)^{n_1}/(1 - p)^{n_2} = e^{-2\beta J (n_1 - n_2)}$, where $n_1$ and $n_2$ are the numbers of parallel boundary bonds before and after the flip, is exactly $e^{-\beta \Delta E}$ (Exercise 11). Near $T_c$ the clusters have the size of the correlated domains, and the autocorrelation time barely grows with $L$ (Section 8.6). At high temperature, clusters are single spins; at low temperature, they fill the lattice.

> **A pitfall**
>
> Clusters have random sizes, so a Wolff “sweep” must be defined with care. It is tempting to flip clusters until $N$ spins have been flipped, then measure. But the moment of the measurement then depends on the size of the last cluster, and the measured configurations are biased. We made this mistake while writing the code, and the energy of a $4\times4$ lattice came out more than 100 standard deviations away from the exact value. The correct procedure is to flip a _fixed_ number of clusters between measurements. The program determines this number during thermalization from the average cluster size.

### 6.8 Checking the code against exact results

Table 2 compares the three algorithms with the exact results of a $4 \times 4$ lattice, obtained by enumerating its $2^{16} = 65\,536$ configurations. The results agree with the exact values: $34$ of the 36 deviations are below two standard deviations, and the largest is $2.6$ standard deviations. Repeating the runs with 16 different random seeds confirms that the deviations are statistical fluctuations: they average to zero, with a spread of one error bar to within 10–20%, which is the accuracy of the error estimates themselves. The test suite of the program performs such checks automatically, also for rings of spins, where the transfer matrix gives exact results.

| $T$ | | $e$ | $\langle\vert m\vert \rangle$ | $c$ | $\chi$ |
| --- | --- | --- | --- | --- | --- |
| 1.500 | Exact | −1.95064 | 0.98617 | 0.20035 | 0.02949 |
| | Metropolis | −1.9507(6) | 0.98620(19) | 0.200(3) | 0.0294(9) |
| | Heat bath | −1.9509(4) | 0.98628(15) | 0.199(2) | 0.0291(7) |
| | Wolff | −1.9510(3) | 0.98629(9) | 0.1990(15) | 0.0290(5) |
| 2.269 | Exact | −1.56562 | 0.84386 | 0.78327 | 0.34732 |
| | Metropolis | −1.5697(15) | 0.8454(7) | 0.778(3) | 0.345(2) |
| | Heat bath | −1.5684(19) | 0.8450(9) | 0.780(4) | 0.345(3) |
| | Wolff | −1.5663(11) | 0.8441(5) | 0.780(2) | 0.3462(14) |
| 3.000 | Exact | −1.01707 | 0.60129 | 0.60313 | 0.47700 |
| | Metropolis | −1.016(2) | 0.6004(11) | 0.6042(13) | 0.4788(9) |
| | Heat bath | −1.0184(19) | 0.6024(10) | 0.6043(11) | 0.4763(10) |
| | Wolff | −1.0166(12) | 0.6013(6) | 0.6023(11) | 0.4764(8) |

_Table 2: Monte Carlo results for a $4\times 4$ lattice ($4 \times 10^5$ sweeps) compared with exact enumeration. The number in parentheses is the statistical error on the last digits._

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

## 11 Exercises

1. **Counting.** How many configurations does a $10 \times 10$ Ising lattice have? How long would it take to enumerate them at $10^9$ configurations per second? Compare with the age of the Universe, $1.4 \times 10^{10}$ years.

2. **Fluctuations.** Derive Eqs. (3) and (4) from $Z$.

3. **Independent spins.** For $J = 0$, compute $Z$, $m$, the energy and the specific heat per spin. Show that $\chi = 1/k_BT$ at $h = 0$.

4. **Specific heat of the chain.** Show that the specific heat (7) is maximum when $K \tanh K = 1$, and find the corresponding temperature.

5. **Transfer matrix.** Check the eigenvalues $\lambda_\pm$ of $\mathcal{T}$, and derive the magnetization (10) from $m = \partial \ln\lambda_+ / \partial(\beta h)$. What are its limits for $T \to 0$ and $T \to \infty$?

6. **Mean field.** (a) Derive $m \simeq \sqrt{3}(1 - T/T_c)^{1/2}$ and the Curie–Weiss law from Eq. (12). (b) Show that the mean-field specific heat jumps from $\frac32 k_B$ to 0 at $T_c$.

7. **Duality.** Solve $\tanh K = e^{-2K}$ and check Eq. (15).

8. **Scaling relations.** Check that the exact 2D exponents and the mean-field exponents (in $d = 4$) satisfy the four scaling relations of Section 5.4.

9. **Detailed balance.** Show that the Metropolis acceptance (23) satisfies detailed balance (21). Do the same for the heat-bath probability.

10. **Acceptance rates.** On the square lattice at $h = 0$, list the possible values of $\Delta E$ and the corresponding Metropolis acceptance probabilities at $T = 1$ and $T = 3$.

11. **Wolff algorithm.** Consider a cluster $C$ with $n_1$ parallel bonds on its boundary before the flip and $n_2$ after. Show that the energy changes by $\Delta E = 2J(n_1 - n_2)$, and that the ratio of the probabilities to build $C$ in the forward and backward moves is $(1-p)^{n_1-n_2}$. Deduce that the choice $p = 1 - e^{-2\beta J}$ satisfies detailed balance with an acceptance of 1.

12. **Lattice gas.** With $s_i = 2n_i - 1$, show that the Ising Hamiltonian becomes $H = -4J\sum_{\langle ij\rangle} n_i n_j - \mu \sum_i n_i + \text{const}$, and express $\mu$ in terms of $h$ and $J$ (on the square lattice).

13. **With the code.** (a) Using `ising_2D.py`, option 3, measure the height of the specific heat peak for $L = 8$, 16, 32 and 64, and show that it grows like $\ln L$. (b) Using option 5, estimate $T_c$ from the crossings of the Binder cumulant.

### Answers

1. $2^{100} \approx 1.3 \times 10^{30}$; $1.3 \times 10^{21}$ s $= 4 \times 10^{13}$ years, three thousand times the age of the Universe.

2. $\partial_\beta \ln Z = -\left\langle H \right\rangle$ and $\partial_\beta^2 \ln Z = \left\langle H^2 \right\rangle - \left\langle H \right\rangle^2$; with $\partial_T = -k_B\beta^2 \partial_\beta$, $C = k_B \beta^2 (\left\langle H^2 \right\rangle - \left\langle H \right\rangle^2)$. Similarly with derivatives with respect to $\beta h$.

3. $Z = (2\cosh\beta h)^N$, $m = \tanh\beta h$, $e = -h \tanh \beta h$, $c = k_B (\beta h)^2 / \cosh^2 \beta h$.

4. $dc/dK = 0$ gives $K\tanh K = 1$, $K = 1.200$, $k_B T = 0.834\,J$, $c = 0.439\,k_B$.

5. $\det(\mathcal{T} - \lambda) = 0$ gives $\lambda^2 - 2\lambda e^K \cosh \beta h + 2\sinh 2K = 0$. For $T \to 0$, $m \to \operatorname{sign}(h)$; for $T \to \infty$, $m \simeq \tanh(\beta h)$, free spins.

6. (a) See Section 4. (b) Below $T_c$, $e = -\frac{q J}{2} m^2 \simeq -\frac{3qJ}{2}(1 - T/T_c)$, so $c = \frac{3qJ}{2T_c} = \frac32 k_B$ just below $T_c$, and $c = 0$ above.

7. With $x = e^{-2K}$, $(1 - x)/(1 + x) = x$ gives $x^2 + 2x - 1 = 0$, $x = \sqrt{2} - 1$, $K_c = \frac12 \ln(1 + \sqrt 2) = 0.4407$.

8. 2D: $0 + \frac14 + \frac74 = 2$; $\frac18 \times 14 = \frac74$; $1 \times (2 - \frac14) = \frac74$; $2 \times 1 = 2 - 0$. Mean field in $d = 4$: $0 + 1 + 1 = 2$; $\frac12 \times 2 = 1$; $\frac12 \times 2 = 1$; $4 \times \frac12 = 2$.

9. If $\Delta E > 0$, $W(\sigma\to\sigma') = e^{-\beta\Delta E}$ and $W(\sigma'\to\sigma) = 1$, whose ratio is $P(\sigma')/P(\sigma)$. Heat bath: the ratio of $p_+$ and $p_-$ is $e^{2\beta(J\sum s_j + h)}$, the ratio of the Boltzmann weights.

10. $\Delta E = -8, -4, 0$: always accepted. $\Delta E = 4$: $e^{-4} = 0.018$ at $T = 1$, $e^{-4/3} = 0.26$ at $T = 3$. $\Delta E = 8$: $3.4\times10^{-4}$ and $0.069$.

11. Bonds inside the cluster are unchanged; boundary bonds switch between parallel and antiparallel. The boundary bonds that are parallel must all have been rejected: $(1 - p)^{n_1}$ forward and $(1-p)^{n_2}$ backward. With $1 - p = e^{-2\beta J}$ the ratio is $e^{-2\beta J(n_1-n_2)} = e^{-\beta\Delta E}$.

12. $H = -4J\sum n_i n_j - (2h - 8J)\sum n_i + \text{const}$ (each site has 4 neighbours), so $\mu = 2h - 8J$.

13. (a) Kaufman's exact values of the maximum of $c$ are $1.19$, $1.55$, $1.90$ and $2.25$ for $L = 8$, 16, 32 and 64: each doubling of $L$ adds about $0.35$, close to $(8K_c^2/\pi)\ln 2 = 0.343$, so $c_{\max} \simeq 0.49 \ln L + \text{const}$. The simulated points agree with these exact curves (Figure 7c). The positions of the maxima, $2.362$, $2.318$, $2.294$ and $2.282$, approach $T_c$ like $1/L$, as expected for $\nu = 1$. (b) The crossings are within about $0.01$ of $T_c = 2.269$.

## References

1. W. Lenz, “Beitrag zum Verständnis der magnetischen Erscheinungen in festen Körpern,” _Physikalische Zeitschrift_ **21**, 613 (1920).
2. E. Ising, “Beitrag zur Theorie des Ferromagnetismus,” _Zeitschrift für Physik_ **31**, 253 (1925).
3. R. Peierls, “On Ising's model of ferromagnetism,” _Proceedings of the Cambridge Philosophical Society_ **32**, 477 (1936).
4. H. A. Kramers and G. H. Wannier, “Statistics of the two-dimensional ferromagnet. Part I,” _Physical Review_ **60**, 252 (1941).
5. L. Onsager, “Crystal statistics. I. A two-dimensional model with an order-disorder transition,” _Physical Review_ **65**, 117 (1944).
6. B. Kaufman, “Crystal statistics. II. Partition function evaluated by spinor analysis,” _Physical Review_ **76**, 1232 (1949).
7. C. N. Yang, “The spontaneous magnetization of a two-dimensional Ising model,” _Physical Review_ **85**, 808 (1952).
8. T. D. Lee and C. N. Yang, “Statistical theory of equations of state and phase transitions. II. Lattice gas and Ising model,” _Physical Review_ **87**, 410 (1952).
9. S. G. Brush, “History of the Lenz–Ising model,” _Reviews of Modern Physics_ **39**, 883 (1967).
10. N. Metropolis, A. W. Rosenbluth, M. N. Rosenbluth, A. H. Teller, and E. Teller, “Equation of state calculations by fast computing machines,” _Journal of Chemical Physics_ **21**, 1087 (1953).
11. R. H. Swendsen and J.-S. Wang, “Nonuniversal critical dynamics in Monte Carlo simulations,” _Physical Review Letters_ **58**, 86 (1987).
12. U. Wolff, “Collective Monte Carlo updating for spin systems,” _Physical Review Letters_ **62**, 361 (1989).
13. K. Binder, “Finite size scaling analysis of Ising model block distribution functions,” _Zeitschrift für Physik B_ **43**, 119 (1981).
14. M. P. Nightingale and H. W. J. Blöte, “Dynamic exponent of the two-dimensional Ising model and Monte Carlo computation of the subdominant eigenvalue of the stochastic matrix,” _Physical Review Letters_ **76**, 4548 (1996).
15. A. Pelissetto and E. Vicari, “Critical phenomena and renormalization-group theory,” _Physics Reports_ **368**, 549 (2002).
16. A. M. Ferrenberg, J. Xu, and D. P. Landau, “Pushing the limits of Monte Carlo simulations for the three-dimensional Ising model,” _Physical Review E_ **97**, 043301 (2018).
17. J. J. Hopfield, “Neural networks and physical systems with emergent collective computational abilities,” _Proceedings of the National Academy of Sciences_ **79**, 2554 (1982).
18. J. M. Yeomans, _Statistical Mechanics of Phase Transitions_, Oxford University Press (1992).
19. M. Kardar, _Statistical Physics of Fields_, Cambridge University Press (2007).
20. R. J. Baxter, _Exactly Solved Models in Statistical Mechanics_, Academic Press (1982).
21. M. E. J. Newman and G. T. Barkema, _Monte Carlo Methods in Statistical Physics_, Oxford University Press (1999).
22. D. P. Landau and K. Binder, _A Guide to Monte Carlo Simulations in Statistical Physics_, 5th ed., Cambridge University Press (2021).


