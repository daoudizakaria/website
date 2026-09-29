---
slug: ising-model/section-11
title: "Exercises"
date: 2026-09-27
summary: "Exercises on the whole of the notes, with answers."
category: physics
series: ising-model
part: section-11
order: 9
kicker: "Section 11"
---
1. **Counting.** How many configurations does a $10 \times 10$ Ising lattice have? How long would it take to enumerate them at $10^9$ configurations per second? Compare with the age of the Universe, $1.4 \times 10^{10}$ years.

2. **Fluctuations.** Derive Eqs. (3) and (4) from $Z$.

3. **Independent spins.** For $J = 0$, compute $Z$, $m$, the energy and the specific heat per spin. Show that $\chi = 1/k_BT$ at $h = 0$.

4. **Specific heat of the chain.** Show that the specific heat (7) is maximum when $K \tanh K = 1$, and find the corresponding temperature.

5. **Transfer matrix.** Check the eigenvalues $\lambda_\pm$ of $\mathcal{T}$, and derive the magnetization (10) from $m = \partial \ln\lambda_+ / \partial(\beta h)$. What are its limits for $T \to 0$ and $T \to \infty$?

6. **Mean field.** (a) Derive $m \simeq \sqrt{3}(1 - T/T_c)^{1/2}$ and the Curie–Weiss law from Eq. (12). (b) Show that the mean-field specific heat jumps from $\frac32 k_B$ to 0 at $T_c$.

7. **Duality.** Solve $\tanh K = e^{-2K}$ and check Eq. (15).

8. **Scaling relations.** Check that the exact 2D exponents and the mean-field exponents (in $d = 4$) satisfy the four scaling relations of Section [5.4](/projects/ising-model/section-5#54-critical-exponents-scaling-and-universality).

9. **Detailed balance.** Show that the Metropolis acceptance (23) satisfies detailed balance (21). Do the same for the heat-bath probability.

10. **Acceptance rates.** On the square lattice at $h = 0$, list the possible values of $\Delta E$ and the corresponding Metropolis acceptance probabilities at $T = 1$ and $T = 3$.

11. **Wolff algorithm.** Consider a cluster $C$ with $n_1$ parallel bonds on its boundary before the flip and $n_2$ after. Show that the energy changes by $\Delta E = 2J(n_1 - n_2)$, and that the ratio of the probabilities to build $C$ in the forward and backward moves is $(1-p)^{n_1-n_2}$. Deduce that the choice $p = 1 - e^{-2\beta J}$ satisfies detailed balance with an acceptance of 1.

12. **Lattice gas.** With $s_i = 2n_i - 1$, show that the Ising Hamiltonian becomes $H = -4J\sum_{\langle ij\rangle} n_i n_j - \mu \sum_i n_i + \text{const}$, and express $\mu$ in terms of $h$ and $J$ (on the square lattice).

13. **With the code.** (a) Using `ising_2D.py`, option 3, measure the height of the specific heat peak for $L = 8$, 16, 32 and 64, and show that it grows like $\ln L$. (b) Using option 5, estimate $T_c$ from the crossings of the Binder cumulant.

## Answers

1. $2^{100} \approx 1.3 \times 10^{30}$; $1.3 \times 10^{21}$ s $= 4 \times 10^{13}$ years, three thousand times the age of the Universe.

2. $\partial_\beta \ln Z = -\left\langle H \right\rangle$ and $\partial_\beta^2 \ln Z = \left\langle H^2 \right\rangle - \left\langle H \right\rangle^2$; with $\partial_T = -k_B\beta^2 \partial_\beta$, $C = k_B \beta^2 (\left\langle H^2 \right\rangle - \left\langle H \right\rangle^2)$. Similarly with derivatives with respect to $\beta h$.

3. $Z = (2\cosh\beta h)^N$, $m = \tanh\beta h$, $e = -h \tanh \beta h$, $c = k_B (\beta h)^2 / \cosh^2 \beta h$.

4. $dc/dK = 0$ gives $K\tanh K = 1$, $K = 1.200$, $k_B T = 0.834\,J$, $c = 0.439\,k_B$.

5. $\det(\mathcal{T} - \lambda) = 0$ gives $\lambda^2 - 2\lambda e^K \cosh \beta h + 2\sinh 2K = 0$. For $T \to 0$, $m \to \operatorname{sign}(h)$; for $T \to \infty$, $m \simeq \tanh(\beta h)$, free spins.

6. (a) See Section [4](/projects/ising-model/section-4). (b) Below $T_c$, $e = -\frac{q J}{2} m^2 \simeq -\frac{3qJ}{2}(1 - T/T_c)$, so $c = \frac{3qJ}{2T_c} = \frac32 k_B$ just below $T_c$, and $c = 0$ above.

7. With $x = e^{-2K}$, $(1 - x)/(1 + x) = x$ gives $x^2 + 2x - 1 = 0$, $x = \sqrt{2} - 1$, $K_c = \frac12 \ln(1 + \sqrt 2) = 0.4407$.

8. 2D: $0 + \frac14 + \frac74 = 2$; $\frac18 \times 14 = \frac74$; $1 \times (2 - \frac14) = \frac74$; $2 \times 1 = 2 - 0$. Mean field in $d = 4$: $0 + 1 + 1 = 2$; $\frac12 \times 2 = 1$; $\frac12 \times 2 = 1$; $4 \times \frac12 = 2$.

9. If $\Delta E > 0$, $W(\sigma\to\sigma') = e^{-\beta\Delta E}$ and $W(\sigma'\to\sigma) = 1$, whose ratio is $P(\sigma')/P(\sigma)$. Heat bath: the ratio of $p_+$ and $p_-$ is $e^{2\beta(J\sum s_j + h)}$, the ratio of the Boltzmann weights.

10. $\Delta E = -8, -4, 0$: always accepted. $\Delta E = 4$: $e^{-4} = 0.018$ at $T = 1$, $e^{-4/3} = 0.26$ at $T = 3$. $\Delta E = 8$: $3.4\times10^{-4}$ and $0.069$.

11. Bonds inside the cluster are unchanged; boundary bonds switch between parallel and antiparallel. The boundary bonds that are parallel must all have been rejected: $(1 - p)^{n_1}$ forward and $(1-p)^{n_2}$ backward. With $1 - p = e^{-2\beta J}$ the ratio is $e^{-2\beta J(n_1-n_2)} = e^{-\beta\Delta E}$.

12. $H = -4J\sum n_i n_j - (2h - 8J)\sum n_i + \text{const}$ (each site has 4 neighbours), so $\mu = 2h - 8J$.

13. (a) Kaufman's exact values of the maximum of $c$ are $1.19$, $1.55$, $1.90$ and $2.25$ for $L = 8$, 16, 32 and 64: each doubling of $L$ adds about $0.35$, close to $(8K_c^2/\pi)\ln 2 = 0.343$, so $c_{\max} \simeq 0.49 \ln L + \text{const}$. The simulated points agree with these exact curves (Figure 7c). The positions of the maxima, $2.362$, $2.318$, $2.294$ and $2.282$, approach $T_c$ like $1/L$, as expected for $\nu = 1$. (b) The crossings are within about $0.01$ of $T_c = 2.269$.
