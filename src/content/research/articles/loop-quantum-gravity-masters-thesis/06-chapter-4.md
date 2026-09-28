---
slug: loop-quantum-gravity-masters-thesis/chapter-4
title: "Black-Hole Entropy"
date: 2020-09-03
summary: "The local first law of Frodden, Ghosh and Perez and the counting of horizon punctures, which recover the Bekenstein–Hawking law for γ₀ ≈ 0.274."
series: loop-quantum-gravity-masters-thesis
part: chapter-4
order: 6
kicker: "Chapter 4"
---

Black-hole entropy is one of the few results in theoretical physics that simultaneously involve Newton's constant $G$, Planck's constant $\hbar$, the speed of light $c$, and Boltzmann's constant $k_{\mathrm B}$. Any theory of quantum gravity must account for it by identifying the corresponding microstates. We first review the classical and semiclassical thermodynamics of black holes, and we then present a heuristic argument suggesting that the Bekenstein–Hawking law is a manifestation of the discreteness of geometry. We next establish the local first law of Frodden, Ghosh, and Perez, which relates the energy measured near the horizon to its area, and we use it to derive the entropy from the quantum geometry of Chapter 3. This chapter is based mainly on [2, 34, 66].

## 4.1 Black-Hole Thermodynamics

### 4.1.1 Stationary Black Holes

According to the uniqueness theorems, a stationary black hole that solves the Einstein–Maxwell equations is completely characterized by three parameters: its mass $M$, its angular momentum $J$, and its electric charge $Q$. The corresponding solution is the Kerr–Newman metric [67, 68], which, in Boyer–Lindquist coordinates $(t,r,\theta,\phi)$ and in geometrized units ($G = c = 1$), reads

$$
{\mathrm{d}} s^2 = -\frac{\Delta}{\rho^2}\big( {\mathrm{d}} t - a\sin^2\theta\,{\mathrm{d}}\phi \big)^2
+ \frac{\sin^2\theta}{\rho^2}\big( (r^2+a^2)\,{\mathrm{d}}\phi - a\,{\mathrm{d}} t \big)^2
+ \frac{\rho^2}{\Delta}\,{\mathrm{d}} r^2 + \rho^2\,{\mathrm{d}}\theta^2 ,
\tag{4.1}
$$

with

$$
a = \frac{J}{M}, \qquad \rho^2 = r^2 + a^2\cos^2\theta, \qquad \Delta = r^2 - 2Mr + a^2 + Q^2 .
\tag{4.2}
$$

The usual units are restored by the substitutions $M\to GM/c^2$, $a\to J/(Mc)$, and $Q^2\to GQ^2/(4\pi\varepsilon_0c^4)$. The event horizon is located at the largest root of $\Delta$, $r_+ = M + \sqrt{M^2 - a^2 - Q^2}$, and its area is $A = 4\pi(r_+^2 + a^2)$. For the Schwarzschild black hole ($a = Q = 0$), we recover $r_+ = 2M$ and $A = 16\pi M^2$.

### 4.1.2 The Four Laws of Black-Hole Mechanics

In 1971, Hawking proved that the area of a black-hole horizon cannot decrease in any classical process satisfying the null energy condition [69]. Christodoulou and Ruffini had previously identified an _irreducible mass_ $M_{\mathrm{irr}}$, which cannot be extracted from a black hole by classical processes [70, 71]; it is related to the area by $A = 16\pi M_{\mathrm{irr}}^2$ and to the total mass by

$$
M^2 = \Big( M_{\mathrm{irr}} + \frac{Q^2}{4M_{\mathrm{irr}}} \Big)^2 + \frac{J^2}{4M_{\mathrm{irr}}^2}
\qquad (G = c = 1).
\tag{4.3}
$$

Bardeen, Carter, and Hawking subsequently established four laws of black-hole mechanics [72], whose resemblance to the laws of thermodynamics is striking. Denoting by $\kappa$ the surface gravity of the horizon (in this chapter, $\kappa$ therefore does not denote the constant $8\pi G$), by $\Omega_H$ its angular velocity, and by $\Phi_H$ its electric potential, these laws read as follows:

(0) the surface gravity $\kappa$ is constant over the horizon of a stationary black hole;

(1) in a transition between two neighboring stationary black holes,

$$
\delta M = \frac{\kappa}{8\pi G}\,\delta A + \Omega_H\,\delta J + \Phi_H\,\delta Q ;
\tag{4.4}
$$

(2) the horizon area does not decrease, $\delta A \ge 0$;

(3) it is impossible to reach $\kappa = 0$ by a finite sequence of processes.

The analogy suggests identifying the temperature with a multiple of $\kappa$ and the entropy with a multiple of $A$. Bekenstein proposed taking this analogy seriously and assigning to black holes an entropy proportional to the area of their horizon [4], this being the only way to preserve the second law when matter carrying entropy falls into a black hole.

### 4.1.3 Hawking Radiation and the Bekenstein–Hawking Entropy

The difficulty with the analogy was that a classical black hole, which absorbs everything and emits nothing, has zero temperature. In 1974, Hawking showed that quantum field theory on the spacetime of a collapsing black hole predicts thermal emission [5, 73]: a quantum field initially in its vacuum state evolves, for a distant observer, into a stationary state of thermal radiation at the temperature

$$
T_H = \frac{\hbar\,\kappa}{2\pi\,k_{\mathrm B}\,c}, \qquad\text{i.e.}\qquad
T_H = \frac{\hbar c^3}{8\pi G M k_{\mathrm B}} \quad\text{(Schwarzschild, } \kappa = c^4/4GM\text{)}.
\tag{4.5}
$$

The first law (4.4), read as $\delta M = T_H\,\delta S$, then fixes the proportionality coefficient between entropy and area:

$$
\boxed{\;S_{\mathrm{BH}} = \frac{k_{\mathrm B}\,c^3}{4\,G\hbar}\,A = k_{\mathrm B}\,\frac{A}{4{\ell_{\mathrm{P}}}^2}\;}
\tag{4.6}
$$

where ${\ell_{\mathrm{P}}}^2 = \hbar G/c^3$. For a black hole of one solar mass, $T_H \simeq 6\times10^{-8}\ \mathrm K$ and $S_{\mathrm{BH}} \simeq 10^{77}\,k_{\mathrm B}$, an entropy far larger than that of the star from which the black hole formed. If this entropy has, like any entropy, a statistical origin, it measures the logarithm of the number of microstates of the black hole. Identifying these microstates is a task that falls within the scope of quantum gravity. In the remainder of this chapter, we revert to units in which $c = k_{\mathrm B} = 1$.

## 4.2 A Heuristic Argument: The Black-Body Analogy

The form of (4.6) already contains a hint about the nature of the microstates [2]. Planck's constant appears in the denominator: in the classical limit $\hbar\to0$, the entropy diverges. This situation is reminiscent of black-body radiation. The entropy of thermal radiation of energy $E$ contained in a volume $L^3$ is

$$
S = \frac43\,k_{\mathrm B} \left( \frac{\pi^2 L^3E^3}{15\,\hbar^3c^3} \right)^{1/4} ,
\tag{4.7}
$$

which also diverges as $\hbar\to0$: this is the manifestation, at the level of the entropy, of the ultraviolet catastrophe of the classical theory of radiation. The constant $\hbar$, introduced by Planck in 1900 [74], renders the entropy finite by fixing the size of the elementary cells of phase space; the entropy is of order $k_{\mathrm B}$ when $LE/c\sim\hbar$, that is, for an energy of the order of that of a single quantum $\hbar\omega$ of frequency $\omega\sim c/L$. It was by analyzing the entropy of radiation that Einstein was led, in 1905, to the hypothesis of light quanta [75].

By analogy, the appearance of $\hbar$ in the denominator of (4.6) suggests that area is itself quantized, with quanta of order

$$
A \sim \hbar G = {\ell_{\mathrm{P}}}^2 ,
\tag{4.8}
$$

and that the entropy counts, up to a factor of order one, the number of these quanta: $S_{\mathrm{BH}} \sim k_{\mathrm B}A/{\ell_{\mathrm{P}}}^2$. This is precisely what the spectrum of the area operator (3.29) predicts. It remains to make this argument quantitative, which requires relating the area to an energy and specifying the temperature at which the system is in equilibrium.

## 4.3 The Local First Law of Frodden, Ghosh, and Perez

The laws of Bardeen, Carter, and Hawking are formulated in terms of quantities defined at infinity: the ADM mass $M$ and the surface gravity $\kappa$, normalized with respect to the timelike Killing vector at infinity. For a statistical description of the horizon in quantum gravity, it is more natural to consider quantities measured locally, by an observer located near the horizon. Frodden, Ghosh, and Perez [34] showed that these quantities satisfy a remarkably simple local first law.

### 4.3.1 Near-Horizon Geometry

Consider a Schwarzschild black hole, for which the Kerr parameter vanishes; in all that follows, the letter $a$ denotes a proper acceleration. Let a stationary observer maintain a fixed position at a proper distance $d \ll 2GM$ from the horizon. The four-velocity of this observer is $u^\mu = \xi^\mu/N$, where $\xi = \partial_t$ is the timelike Killing vector and $N = \sqrt{-\xi^\mu\xi_\mu} = \sqrt{1 - 2GM/r}$ is the redshift factor. The proper distance to the horizon is

$$
d = \int_{2GM}^{r} \frac{{\mathrm{d}} r'}{\sqrt{1 - 2GM/r'}} \simeq 2\sqrt{2GM\,(r - 2GM)} ,
\qquad\text{hence}\qquad N \simeq \frac{d}{4GM} = \kappa\, d ,
\tag{4.9}
$$

with $\kappa = 1/(4GM)$. Near the horizon, the metric takes the form ${\mathrm{d}} s^2 \simeq -\kappa^2d^2\,{\mathrm{d}} t^2 + {\mathrm{d}} d^2 + (2GM)^2\,{\mathrm{d}}\Omega^2$: its $(t,d)$ part is Rindler spacetime, that is, the region of Minkowski space accessible to a uniformly accelerated observer (Fig. 4.1). The proper acceleration of our observer is therefore

$$
a = \frac{\kappa}{N} \simeq \frac1d ,
\tag{4.10}
$$

and the black-hole horizon is, locally, the Rindler horizon associated with this acceleration.

![Near-horizon geometry. In the coordinates (X,T), the horizon consists of the two null half-lines H^ emanating from the bifurcation sphere. A stationary observer at proper distance d follows the hyperbola X² - T² = d² and undergoes the proper acceleration a = 1/d. The hyperbolas are the orbits of the boost Killing vector.](/uploads/research/lqg-rindler.png "Figure 4.1: Near-horizon geometry. In the coordinates (X,T), the horizon consists of the two null half-lines H^ emanating from the bifurcation sphere. A stationary observer at proper distance d follows the hyperbola X² - T² = d² and undergoes the proper acceleration a = 1/d. The hyperbolas are the orbits of the boost Killing vector.")

### 4.3.2 Local Energy and the Local First Law

The energy measured by the stationary observer is the conserved charge associated with the Killing field $\chi = \xi/N_0$, where $N_0$ is the value of $N$ at the position of the observer; on the observer's worldline, this field coincides with the observer's four-velocity. For a perturbation of the black hole—for instance, the infall of a small body—the variation of the local energy is related to that of the Killing energy, that is, of the mass $M$, by the Tolman factor: $\delta E = \delta M/N$. Using the first law (4.4) with $J = Q = 0$, and then (4.10), we obtain

$$
\delta E = \frac{\delta M}{N} = \frac{\kappa}{N}\,\frac{\delta A}{8\pi G}
\qquad\Longrightarrow\qquad
\boxed{\;\delta E = \frac{a}{8\pi G}\,\delta A\;}
\tag{4.11}
$$

This is the _local first law_. Frodden, Ghosh, and Perez showed that it holds for the entire Kerr–Newman family, in which case the stationary observers corotate with the horizon [34]. For a fixed acceleration, it integrates to

$$
E = \frac{a\,A}{8\pi G} .
\tag{4.12}
$$

> **Remark 4.1.**
>
> The integrated expression (4.12) does not coincide with the redshifted mass $M/N$. Using (4.9), we find $M/N \simeq 4GM^2/d$, whereas $aA/(8\pi G) \simeq 2GM^2/d$: the two expressions differ by a factor of two, because $M$ scales as $\sqrt A$ rather than as $A$. Only variations enter the thermodynamic argument that follows, and these are given unambiguously by (4.11).

The local first law admits a direct interpretation in terms of the canonical structure of Chapter 1. The uniformly accelerated observer measures the flow of its proper time $\tau$, which is related to the boost parameter $\eta$ by $\eta = a\tau$; the Hamiltonian that generates its evolution is therefore $a$ times the boost generator. According to the linear simplicity constraint and relation (2.36), the norm of the boost generator associated with a surface is $A/(8\pi G)$. We thus recover

$$
E = a\,{\left|{{\vec{{K}}}}\right|} = \frac{a\,A}{8\pi G} ,
\tag{4.13}
$$

independently of $\gamma$. The local energy of a horizon is proportional to its area, which reduces the thermodynamic problem to that of the area spectrum.

### 4.3.3 Unruh Temperature and Entropy

Unruh showed that a uniformly accelerated observer with proper acceleration $a$ perceives the Minkowski vacuum of a quantum field as a thermal bath at the temperature [76]

$$
T_U = \frac{\hbar\, a}{2\pi} .
\tag{4.14}
$$

The quantum state of the fields near the horizon, which is regular for freely falling observers, is thus perceived by the stationary observer as a thermal state at the temperature $T_U$. The Clausius definition of entropy, $\delta S = \delta E/T$, then gives

$$
\delta S = \frac{\delta E}{T_U} = \frac{2\pi}{\hbar a}\,\frac{a\,\delta A}{8\pi G} = \frac{\delta A}{4\hbar G} = \frac{\delta A}{4{\ell_{\mathrm{P}}}^2} ,
\tag{4.15}
$$

which is precisely the variation of the Bekenstein–Hawking entropy. The acceleration $a$ drops out of the result, which is therefore the same for all stationary observers close to the horizon. The relations $\delta E = T_U\,\delta S$ and $\delta M = T_H\,\delta S$ are, moreover, equivalent: they are related to each other by the Tolman factor, $T_H = N\,T_U = \hbar\kappa/2\pi$.

## 4.4 Statistical Derivation in Loop Quantum Gravity

### 4.4.1 The Horizon as a Punctured Surface

In loop quantum gravity, the horizon is a surface whose quantum geometry is described by the links of the spin network that cross it (Fig. 4.2). According to (3.29), a state in which the horizon is crossed by $\mathcal N$ links with spins $j_1,\dots,j_{\mathcal N}$ has the area

$$
A = 8\pi\gamma{\ell_{\mathrm{P}}}^2 \sum_{p=1}^{\mathcal N} \sqrt{j_p(j_p+1)} .
\tag{4.16}
$$

Each crossing point, or _puncture_, contributes to the area independently of the others. From the point of view of the horizon, a puncture of spin $j$ is described by the spin-$j$ representation space, of dimension $2j+1$, whose basis states correspond to the eigenvalues $m$ of the normal component of the flux. The horizon geometry fixes only the spins: for a given area, these $2j+1$ states cannot be distinguished by macroscopic observables. In the approach presented here, it is these states that constitute the microstates of the black hole [2, 30, 31].

![The horizon H of a black hole, crossed by the links of a spin network. Each puncture of spin j contributes the quantum a_j = 8πγℓ_P²j(j+1) to the horizon area and carries 2j+1 internal states.](/uploads/research/lqg-horizon-punctures.png "Figure 4.2: The horizon H of a black hole, crossed by the links of a spin network. Each puncture of spin j contributes the quantum a_j = 8πγℓ_P²j(j+1) to the horizon area and carries 2j+1 internal states.")

### 4.4.2 Canonical Ensemble at the Unruh Temperature

According to (4.12) and (4.16), the local energy is the sum of the energies of the punctures,

$$
E = \sum_{p=1}^{\mathcal N} E_{j_p}, \qquad
E_j = \frac{a}{8\pi G}\, 8\pi\gamma{\ell_{\mathrm{P}}}^2\sqrt{j(j+1)} = a\,\gamma\,\hbar\,\sqrt{j(j+1)} .
\tag{4.17}
$$

We treat the punctures as independent subsystems in equilibrium with the fields near the horizon at the Unruh temperature, that is, at the inverse temperature $\beta = 2\pi/(\hbar a)$. In the Gibbs state, the probability that a puncture carries spin $j$, taking into account the degeneracy $2j+1$, is

$$
P_j = \frac{1}{z}\,(2j+1)\, {\mathrm{e}}^{-\beta E_j} = \frac{1}{z(\gamma)}\,(2j+1)\, {\mathrm{e}}^{-2\pi\gamma\sqrt{j(j+1)}} ,
\tag{4.18}
$$

where the normalization condition $\sum_j P_j = 1$ fixes the partition function of a single puncture:

$$
z(\gamma) = \sum_{j\in\mathbb N^*/2} (2j+1)\, {\mathrm{e}}^{-2\pi\gamma\sqrt{j(j+1)}} .
\tag{4.19}
$$

The acceleration $a$ has dropped out: $\beta E_j = 2\pi\gamma\sqrt{j(j+1)}$ depends only on the spin and on $\gamma$. Each microstate $(j,m)$ of a puncture has the probability $p_j = P_j/(2j+1) = {\mathrm{e}}^{-\beta E_j}/z$. For $\mathcal N$ independent punctures, the partition function is $Z = z^{\mathcal N}$, and the Gibbs entropy, computed over the microstates, is

$$
S = -\mathcal N\sum_{j}\,(2j+1)\, p_j \ln p_j = \beta\langle E\rangle + \ln Z = \beta\langle E\rangle + \mathcal N\ln z(\gamma) .
\tag{4.20}
$$

Note that it is indeed the entropy of the microstates, and not the entropy $-\sum_j P_j\ln P_j$ of the spin distribution alone, that enters here: the difference, $\sum_j P_j\ln(2j+1)$ per puncture, is precisely the contribution of the degeneracy. Using (4.12), we obtain

$$
\beta\langle E\rangle = \frac{2\pi}{\hbar a}\,\frac{a\langle A\rangle}{8\pi G} = \frac{\langle A\rangle}{4{\ell_{\mathrm{P}}}^2},
$$

and hence

$$
S = \frac{\langle A\rangle}{4{\ell_{\mathrm{P}}}^2} + \mathcal N\ln z(\gamma) .
\tag{4.21}
$$

### 4.4.3 Thermodynamic Consistency and the Value of γ

The first term of (4.21) is exactly the Bekenstein–Hawking entropy. The second term, proportional to the number of punctures, is equal to $-\beta F$, where $F = -T_U\ln Z$ is the Helmholtz free energy. The Clausius relation (4.15), a consequence of the local first law (4.11), must hold for every variation of the area, including those that change the number of punctures. For the statistical entropy to be compatible with it, this second term must vanish, that is, the free energy per puncture must be zero:

$$
z(\gamma) = \sum_{j\in\mathbb N^*/2} (2j+1)\, {\mathrm{e}}^{-2\pi\gamma\sqrt{j(j+1)}} = 1 .
\tag{4.22}
$$

The function $z$ is strictly decreasing, from $+\infty$ at $\gamma = 0$ to $0$ as $\gamma\to\infty$; Eq. (4.22) therefore admits a unique solution, which we determine numerically (Fig. 4.3):

$$
\boxed{\;\gamma_0 = 0.274\,067\ldots\;}
\tag{4.23}
$$

For $\gamma = \gamma_0$, the free energy vanishes and we recover the Bekenstein–Hawking law,

$$
S = \frac{A}{4{\ell_{\mathrm{P}}}^2} .
\tag{4.24}
$$

![Partition function z(γ) of a single puncture, computed numerically by summing over spins up to j = 2000. The consistency condition z(γ) = 1 fixes the value γ₀ ≃ 0.274 of the Barbero–Immirzi parameter.](/uploads/research/lqg-immirzi-z.png "Figure 4.3: Partition function z(γ) of a single puncture, computed numerically by summing over spins up to j = 2000. The consistency condition z(γ) = 1 fixes the value γ₀ ≃ 0.274 of the Barbero–Immirzi parameter.")

The distribution (4.18) is dominated by small spins: for $\gamma = \gamma_0$, we find $P_{1/2}\simeq0.45$, $P_1\simeq0.26$, $P_{3/2}\simeq0.14$, and $P_2\simeq0.07$. The mean area per puncture is $\langle a\rangle = 8\pi\gamma_0{\ell_{\mathrm{P}}}^2\langle\sqrt{j(j+1)}\rangle \simeq 10\,{\ell_{\mathrm{P}}}^2$, and the entropy per puncture is $2\pi\gamma_0\langle\sqrt{j(j+1)}\rangle \simeq 2.5$. A macroscopic black hole is thus crossed by a number of links of order $A/(10\,{\ell_{\mathrm{P}}}^2)$, that is, approximately $4\times10^{76}$ for a black hole of one solar mass.

## 4.5 Discussion

The preceding calculation shows that the quantum geometry of loop quantum gravity provides a finite number of microstates, whose logarithm is proportional to the horizon area: this is the robust result of the approach. The coefficient $1/4$, on the other hand, requires fixing the value of the Barbero–Immirzi parameter, and this value depends on the details of the counting. Several treatments have been proposed since the first calculation by Rovelli [30].

- In the isolated-horizon approach of Ashtekar, Baez, Corichi, and Krasnov [31, 77], the horizon geometry is described by a Chern–Simons theory, and the microstates are the states of this theory that are compatible with the punctures. The original counting, dominated by punctures of spin $\tfrac12$, led to $\gamma = \ln2/(\pi\sqrt3) \simeq 0.127$; an exact counting, due to Domagala and Lewandowski and to Meissner, gives $\gamma \simeq 0.2375$ [78, 79]. The counting presented above, which assigns the degeneracy $2j+1$ to each puncture, leads to $\gamma_0\simeq0.274$ [80].

- The ${\mathrm{SU}}(2)$-invariant formulation of the Chern–Simons theory of the horizon [81] makes it possible to compute the subleading corrections: the entropy receives a logarithmic correction $-\tfrac32\ln(A/{\ell_{\mathrm{P}}}^2)$ [81, 82].

- Several works have sought to obtain the coefficient $1/4$ independently of $\gamma$. Ghosh and Perez [83] showed that a nonzero chemical potential associated with the punctures makes it possible to recover (4.24) for any value of $\gamma$; Bianchi [84] obtained the coefficient $1/4$ from the entanglement between the degrees of freedom on either side of the horizon; and Ghosh, Noui, and Perez [85] showed that the analytic continuation of the degeneracy to $\gamma = \pm{\mathrm{i}}$ also leads to the Bekenstein–Hawking law.

The current situation, summarized in the review by Perez [66], is therefore as follows: loop quantum gravity provides a microscopic explanation of the proportionality between entropy and area, based on the discreteness of the area spectrum, but the determination of the coefficient still depends on choices made in the treatment of the horizon and of the punctures. If we adopt the value $\gamma_0$, the area quantum (3.31) is fixed at approximately $6\,{\ell_{\mathrm{P}}}^2$: the computation of black-hole entropy thus relates a macroscopic thermodynamic property to the scale of the granularity of space.
