---
slug: ising-model/section-1
title: "Introduction"
date: 2026-09-27
summary: "Ferromagnetism and the Curie temperature, the definition of the model, a short history, and why the Ising model matters."
category: physics
series: ising-model
part: section-1
order: 1
kicker: "Section 1"
---
## 1.1 Ferromagnetism

A piece of iron can be a permanent magnet: its atomic magnetic moments, carried by the spins of electrons, point on average in the same direction, even without any external field. This _spontaneous magnetization_ disappears when the iron is heated above its _Curie temperature_, $1043$ K. Above this temperature the moments point in random directions, and the magnetization vanishes. The transition between the two behaviours is sharp: the spontaneous magnetization goes continuously to zero at the Curie temperature, but its derivative, the magnetic susceptibility and the specific heat behave singularly there.

The alignment is caused by the _exchange interaction_, a quantum-mechanical effect that makes neighbouring spins prefer to be parallel. Thermal agitation opposes this order. The phase transition results from the competition between energy, which favours order, and entropy, which favours disorder. The Ising model is the simplest model that captures this competition.

## 1.2 The model

Consider a lattice of $N$ sites. On each site $i$ sits a “spin” $s_i$ that can only take two values, $s_i = +1$ (up) or $s_i = -1$ (down). A _configuration_ of the system is the list $\sigma = (s_1, \dots, s_N)$; there are $2^N$ of them. The energy of a configuration is

$$
H(\sigma) = -J \sum_{\langle ij \rangle} s_i s_j \;-\; h \sum_{i=1}^N s_i ,
\tag{1}
$$

where $\sum_{\langle ij \rangle}$ runs over all pairs of nearest neighbours, each pair counted once.

- The coupling $J$ measures the interaction between neighbours. For $J > 0$ the energy is lowest when neighbouring spins are parallel: the model describes a _ferromagnet_. For $J < 0$ it describes an antiferromagnet. We take $J > 0$.

- The field $h$ measures the coupling to an external magnetic field. It is the product of the magnetic moment of a spin and the magnetic field. A positive $h$ favours $s_i = +1$.

We study the chain ($d = 1$, each spin has $q = 2$ neighbours) and the square lattice ($d = 2$, $q = 4$), with periodic boundary conditions (except for the open chain of Section [3.1](/projects/ising-model/section-3#31-the-open-chain-at-zero-field)). We measure energies in units of $J$ and temperatures in units of $J/k_B$, that is, we set $J = k_B = 1$ in all numerical results.

The Ising model is a drastic simplification of a real magnet: the spins are classical, they can point in only two directions, and they only interact with their nearest neighbours. It is nonetheless far from trivial, and, as we shall see, its behaviour near the transition is _exactly_ the same as that of many real systems.

## 1.3 A short history

The model was proposed in 1920 by Wilhelm Lenz [1], and solved in one dimension by his student Ernst Ising in his 1924 thesis [2]. Ising found that the chain has no phase transition, and wrongly suggested that the same was true in any dimension. In 1936, Rudolf Peierls showed that the two-dimensional model does have spontaneous magnetization at low temperature [3]. In 1941, Hendrik Kramers and Gregory Wannier located the critical temperature exactly, using a symmetry of the model called duality [4]. In 1944, Lars Onsager obtained the exact free energy of the two-dimensional model [5], a landmark of theoretical physics. Bruria Kaufman simplified the solution and extended it to finite lattices [6], and Chen Ning Yang computed the spontaneous magnetization [7]. The three-dimensional model has never been solved exactly. For the history of the model, see [9].

At the same time, the Ising model became the test bench of computer simulations. The Metropolis algorithm, invented in 1953 [10], is still the starting point of most Monte Carlo methods, and the cluster algorithms of Swendsen, Wang [11] and Wolff [12] were first developed and tested on the Ising model and its generalizations.

## 1.4 Why the Ising model matters

The importance of the model goes far beyond magnetism:

- **Lattice gas.** Writing $s_i = 2n_i - 1$, where $n_i = 1$ if site $i$ is occupied by an atom and $0$ if it is empty, maps the Ising model onto a model of a gas of atoms that attract each other [8]. The ferromagnetic transition becomes the liquid–gas critical point.

- **Binary alloys.** With $s_i = \pm 1$ for two kinds of atoms, the model describes the unmixing of alloys ($J > 0$) and, with an antiferromagnetic coupling ($J < 0$), the order–disorder transitions of alloys such as $\beta$-brass.

- **Universality.** Near a critical point, the details of the interactions do not matter. The three-dimensional Ising model has _exactly_ the same critical exponents as the liquid–gas critical point of carbon dioxide or water, or as uniaxial magnets (Section [5.4](/projects/ising-model/section-5#54-critical-exponents-scaling-and-universality)).

- **Beyond physics.** Ising-like models describe neural networks (the Hopfield model [17] and Boltzmann machines), image restoration, and opinion dynamics in social systems.
