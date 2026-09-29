---
slug: ising-model/section-6
title: "Monte Carlo simulation"
date: 2026-09-27
summary: "Importance sampling and detailed balance, the Metropolis, heat-bath and Wolff algorithms, equilibration and statistical errors, and the checks of the code against exact results."
category: physics
series: ising-model
part: section-6
order: 6
kicker: "Section 6"
---
## 6.1 Importance sampling

Since we cannot sum over all configurations, we sample them. Choosing configurations uniformly at random would be useless: almost all of them have $\mathcal{M} \approx 0$ and an energy close to zero, and they have an exponentially small weight at low temperature. The idea of _importance sampling_ is to generate configurations $\sigma_1, \sigma_2, \dots, \sigma_n$ directly with the Boltzmann probability (2). Averages are then simple arithmetic means,

$$
\left\langle A \right\rangle \approx \frac{1}{n}\sum_{k=1}^n A(\sigma_k),
$$

with a statistical error that decreases like $1/\sqrt{n}$.

## 6.2 Markov chains and detailed balance

We cannot draw configurations from $P(\sigma)$ directly, since we do not know $Z$. Instead we build a _Markov chain_: starting from any configuration, we go from $\sigma$ to $\sigma'$ with a transition probability $W(\sigma \to \sigma')$. If

1. every configuration can be reached from every other one, and the chain does not cycle periodically (_ergodicity_), and

2. the transition probabilities satisfy _detailed balance_,

   $$
   P(\sigma)\, W(\sigma \to \sigma') = P(\sigma')\, W(\sigma' \to \sigma),
   \tag{21}
   $$

then after many steps the chain visits the configurations with the probability $P(\sigma)$, whatever the starting point. Detailed balance ensures that $P$ is stationary: the probability flow from $\sigma$ to $\sigma'$ equals the reverse flow. For the Boltzmann distribution it only involves the ratio $P(\sigma')/P(\sigma) = e^{-\beta \Delta E}$, where $\Delta E = H(\sigma') - H(\sigma)$, so $Z$ is not needed.

## 6.3 The Metropolis algorithm

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

## 6.4 The heat-bath algorithm on a checkerboard

In the heat-bath algorithm, spin $i$ is not flipped but drawn anew from its conditional probability given its neighbours: it is set to $+1$ with probability

$$
p_+ = \frac{1}{1 + e^{-2\beta(J\sum_j s_j + h)}} ,
$$

whatever its current value. This also satisfies detailed balance. The lattice can be coloured like a chessboard: the neighbours of a black site are all white. All the black spins can therefore be updated at the same time, then all the white spins. This _checkerboard_ update is well suited to vectorized computing; the program implements it with NumPy.

> **A pitfall**
>
> One might be tempted to apply the Metropolis rule (23) to all the black spins at the same time. Each sub-lattice update does leave the Boltzmann distribution invariant, but the resulting Markov chain is _not ergodic_. A spin with $\Delta E = 0$ is flipped with probability exactly 1, and the dynamics becomes partly deterministic. For a ring of 6 spins, the transition matrix of this update has three eigenvalues of modulus 1 instead of one: the chain is trapped in subsets of configurations. The simulations then converge to wrong averages. For a chain of 8 spins at $T = 1$, starting with all spins up, the energy per spin comes out as $-0.880$ instead of the exact $-0.818$; the wrong value even depends on the starting configuration. The heat-bath rule, whose probabilities are never exactly 0 or 1, does not have this problem. Checking against exact results is the only way to catch such errors.

## 6.5 Equilibration and measurements

A simulation starts from an arbitrary configuration, either random (“hot start”) or fully ordered (“cold start”). The first sweeps are discarded until the chain has forgotten its starting point (_thermalization_). The energy and magnetization are then measured after every sweep. Figure 12a shows typical time series of $|m|$.

## 6.6 Statistical errors

Successive configurations of a Markov chain are correlated, so the $n$ measurements are not independent. The _autocorrelation function_ of an observable $A$,

$$
C_A(t) = \frac{\left\langle A_k A_{k+t} \right\rangle - \left\langle A \right\rangle^2}{\left\langle A^2 \right\rangle - \left\langle A \right\rangle^2},
$$

decays over a time of order the _integrated autocorrelation time_ $\tau = \frac12 + \sum_{t \ge 1} C_A(t)$. The effective number of independent measurements is $n/(2\tau)$, and the error on $\left\langle A \right\rangle$ is $\sqrt{2\tau}$ times larger than the naive $\sigma_A/\sqrt{n}$.

In practice the program uses _binning_: the series is cut into 32 blocks, much longer than $\tau$, whose averages are independent. For quantities that are non-linear functions of averages, such as $c \propto \left\langle e^2 \right\rangle - \left\langle e \right\rangle^2$, the error is estimated with the _jackknife_: the quantity is recomputed 32 times, each time leaving out one block, and the spread of these values gives the error.

## 6.7 Critical slowing down and the Wolff algorithm

Near $T_c$, the system is made of correlated domains of all sizes up to $\xi$. Single-spin flips change them only at their edges, and the autocorrelation time grows like $\tau \sim \xi^z$, where $z$ is the _dynamic exponent_. At $T_c$ on a finite lattice, $\xi \sim L$ and $\tau \sim L^z$. For local algorithms, $z \approx 2.17$ [14]: simulations of large lattices near $T_c$ become very slow. This is _critical slowing down_.

Cluster algorithms solve this problem by flipping whole domains at once. In the Wolff algorithm [12], based on ideas of Swendsen and Wang [11]:

1. choose a random seed spin;

2. add each neighbour that is parallel to a spin of the cluster with probability $p = 1 - e^{-2\beta J}$, and repeat from the newly added spins until the cluster stops growing;

3. flip the whole cluster.

The move is always accepted. Detailed balance holds because the probability of building the same cluster in the forward and backward moves differs only by the bonds on its boundary that were not added. Their ratio, $(1 - p)^{n_1}/(1 - p)^{n_2} = e^{-2\beta J (n_1 - n_2)}$, where $n_1$ and $n_2$ are the numbers of parallel boundary bonds before and after the flip, is exactly $e^{-\beta \Delta E}$ (Exercise 11). Near $T_c$ the clusters have the size of the correlated domains, and the autocorrelation time barely grows with $L$ (Section [8.6](/projects/ising-model/sections-7-8#86-critical-slowing-down)). At high temperature, clusters are single spins; at low temperature, they fill the lattice.

> **A pitfall**
>
> Clusters have random sizes, so a Wolff “sweep” must be defined with care. It is tempting to flip clusters until $N$ spins have been flipped, then measure. But the moment of the measurement then depends on the size of the last cluster, and the measured configurations are biased. We made this mistake while writing the code, and the energy of a $4\times4$ lattice came out more than 100 standard deviations away from the exact value. The correct procedure is to flip a _fixed_ number of clusters between measurements. The program determines this number during thermalization from the average cluster size.

## 6.8 Checking the code against exact results

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
