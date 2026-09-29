---
slug: ising-model/section-3
title: "The Ising chain: an exact solution"
date: 2026-09-27
summary: "The open chain, the transfer matrix, correlations and the correlation length, and why there is no phase transition in one dimension."
category: physics
series: ising-model
part: section-3
order: 3
kicker: "Section 3"
---
## 3.1 The open chain at zero field

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

## 3.2 The transfer matrix

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

## 3.3 Correlations and the correlation length

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

## 3.4 Why there is no phase transition in one dimension

A simple argument, due to Landau, explains the absence of order. Start from the fully ordered chain of $N$ spins and flip all the spins to the right of some bond. This creates a _domain wall_, which costs an energy $2J$. The wall can be placed on any of the $N - 1$ bonds, which gives an entropy $k_B \ln (N-1) \simeq k_B \ln N$. The free energy changes by

$$
\Delta F = 2J - k_B T \ln N ,
$$

which is negative for any $T > 0$ when $N$ is large enough. Domain walls are therefore always created, and they destroy the long-range order. Their density is $1/(1 + e^{2K}) \simeq e^{-2J/k_B T}$ per bond, about one wall every two correlation lengths. Figure 3 shows the domains appearing, moving and annihilating in a simulation. In two dimensions, the argument fails, as we will see: a wall is a line whose energy grows with its length.

![Space–time picture of a chain of 256 spins in a Metropolis simulation, starting from random spins (white: up, black: down). Each row is the chain after one sweep. At T = 0.6 (ξ ≈ 14), domains with a mean length of about 29 spins form and slowly diffuse; at T = 1.5 (ξ ≈ 1.9), the mean domain length is about 5.](/uploads/projects/ising-chain-spacetime-lattice.webp "Figure 3: Space–time picture of a chain of 256 spins in a Metropolis simulation, starting from random spins (white: up, black: down). Each row is the chain after one sweep. At T = 0.6 (ξ ≈ 14), domains with a mean length of about 29 spins form and slowly diffuse; at T = 1.5 (ξ ≈ 1.9), the mean domain length is about 5.")
