---
slug: hawking-radiation-review/section-1
title: "Introduction"
date: 2024-12-01
summary: "The puzzle posed by black hole thermodynamics, a first estimate of the Hawking temperature, a heuristic picture and its limitations, and the scope and conventions of the notes."
series: hawking-radiation-review
part: section-1
order: 1
kicker: "Section 1"
---
## 1.1 A puzzle from black hole thermodynamics

In classical general relativity a black hole is a perfect absorber. Its event horizon is a one-way membrane: matter and radiation may cross it inwards, but nothing can cross it outwards. By the early 1970s, however, it had become clear that black holes obey a set of laws that closely resemble the laws of thermodynamics (Bardeen et al., 1973). The surface gravity $\kappa$ of a stationary black hole is constant over its horizon, much as the temperature of a body in equilibrium is uniform; the area $A$ of the horizon never decreases, much as the entropy of an isolated system never decreases; and small changes in the mass, area, angular momentum, and charge are related by an identity of the same form as the first law of thermodynamics. Bekenstein (1972, 1973) argued that this resemblance should be taken literally, and that a black hole carries an entropy proportional to the area of its horizon.

This proposal raised an immediate difficulty. If a black hole has an entropy $S$ and an energy $M$, the first law implies that it has a temperature $T = (\partial S/\partial M)^{-1}$, and any body with a non-zero temperature should radiate. A classical black hole, by construction, does not. Either the thermodynamic analogy is merely formal, as Bardeen et al. (1973) maintained, or classical general relativity is missing an essential ingredient. The resolution, found by Hawking (1974, 1975), is that the missing ingredient is quantum mechanics: when quantum fields are taken into account, a black hole emits thermal radiation at the temperature

$$
{T_{\mathrm{H}}} = \frac{\hbar\kappa}{2\pi c\,k_{\mathrm{B}}}
\;\xrightarrow{\;\text{Schwarzschild}\;}\;
\frac{\hbar c^{3}}{8\pi G M k_{\mathrm{B}}}
\simeq 6.17\times 10^{-8}\,\mathrm{K}\left(\frac{{M_{\odot}}}{M}\right).
\tag{1.1}
$$

Combined with the first law, this fixes the black hole entropy to be the Bekenstein–Hawking entropy,

$$
{S_{\mathrm{BH}}} = \frac{k_{\mathrm{B}} c^{3} A}{4 G\hbar} = \frac{k_{\mathrm{B}} A}{4{\ell_{\mathrm{P}}}^{2}},
\qquad {\ell_{\mathrm{P}}} = \left(\frac{G\hbar}{c^{3}}\right)^{1/2}.
\tag{1.2}
$$

The aim of these notes is to explain how Eqs. (1.1) and (1.2) arise, what physical assumptions they rest upon, and what has been learned about them in the five decades since their discovery.

## 1.2 A first estimate

Before any calculation, it is instructive to ask what Eq. (1.1) could possibly look like. A Schwarzschild black hole is characterised by a single parameter, its mass $M$. From $M$, Newton's constant, and the speed of light one can form a single time scale, the light-crossing time of the horizon, $t_{M} = GM/c^{3}$. Classically there is no way to convert a time scale into a temperature. Quantum mechanics, however, supplies Planck's constant, and the combination $\hbar/t_{M}$ is an energy. The only temperature that can be built from the available quantities is therefore

$$
k_{\mathrm{B}} T \sim \frac{\hbar}{t_{M}} = \frac{\hbar c^{3}}{G M},
\tag{1.3}
$$

which agrees with Eq. (1.1) up to the numerical factor $1/8\pi$. Two lessons follow from this simple argument. First, the temperature must vanish in the classical limit $\hbar \to 0$, which is why classical general relativity could not have found it. Second, the temperature is inversely proportional to the mass, so that small black holes are hot and large black holes are cold; this has important consequences for the evaporation process (Section [5](/research/hawking-radiation-review/section-5)). The same reasoning applied to the entropy, which is dimensionless in units of $k_{\mathrm{B}}$ and must be built from the area and the fundamental constants, leads to $S \sim A/{\ell_{\mathrm{P}}}^{2}$, in agreement with Eq. (1.2).

## 1.3 A heuristic picture and its limitations

A picture that is frequently used to convey the origin of the radiation, and that goes back to Hawking himself, runs as follows. The quantum vacuum contains fluctuations that may be described as virtual particle–antiparticle pairs, which in flat spacetime annihilate within a time allowed by the energy–time uncertainty relation. Near a horizon, one member of such a pair may cross the horizon before annihilation takes place, while the other escapes to infinity as a real particle. Energy conservation then requires that the member which falls in carry negative energy as measured from infinity, so that the black hole loses mass. The picture even reproduces the scale of Eq. (1.3): a pair can be separated by the horizon only if it survives for a time of order $t_{M}$, which requires an energy of order $\hbar/t_{M}$.

The picture is useful, but it should not be taken too literally. It does not explain why the spectrum is thermal, and it suggests that the radiation is created in a thin layer just outside the horizon, whereas the wavelength of a typical emitted quantum is comparable to, or larger than, the size of the black hole itself (Section [5.6](/research/hawking-radiation-review/section-5#56-backreaction-and-the-end-point)). The correct statement, which we develop in Section [3](/research/hawking-radiation-review/section-3), is that the state of a quantum field that is regular across a forming horizon necessarily contains correlations between modes inside and outside the horizon, and that the outside modes, considered on their own, are thermally populated. The pair picture is best regarded as a mnemonic for this entanglement.

## 1.4 Scope, prerequisites, and conventions

These notes are addressed to readers with a working knowledge of general relativity at the level of a graduate course, including the Schwarzschild and Kerr solutions, Kruskal coordinates, and Penrose diagrams, and of the canonical quantisation of free fields. No prior knowledge of quantum field theory in curved spacetime is assumed; the elements that are needed are introduced in Section [2.3](/research/hawking-radiation-review/section-2#23-quantum-fields-in-curved-spacetime). We use the metric signature $(-,+,+,+)$ and, except in numerical estimates, units in which $\hbar = c = G = k_{\mathrm{B}} = 1$. In these units the Planck mass and the Planck length are both equal to unity, and the Schwarzschild radius is $r_{\mathrm{s}} = 2M$.

We do not attempt to reproduce every technical derivation in full. The standard monographs are those of Birrell and Davies (1982) and Wald (1994). Excellent pedagogical introductions to the Hawking effect are provided by the lecture notes of Jacobson (2005) and by the reviews of Brout et al. (1995), Wald (2001), Page (2005), and Carlip (2014). A critical examination of the assumptions underlying the standard derivations has been given by Helfer (2003). More specialised reviews are cited in the relevant sections, and a short guide to further reading is given in Section [10.4](/research/hawking-radiation-review/section-10#104-guide-to-further-reading).

## 1.5 Organisation of the notes

Section [2](/research/hawking-radiation-review/section-2) reviews the classical laws of black hole mechanics and introduces the elements of quantum field theory in curved spacetime, including Bogoliubov transformations and the Unruh effect. Section [3](/research/hawking-radiation-review/section-3) presents Hawking's calculation. Section [4](/research/hawking-radiation-review/section-4) surveys the alternative derivations of the effect and the role of the quantum state. Section [5](/research/hawking-radiation-review/section-5) discusses the emission spectrum and the evaporation process, and Section [6](/research/hawking-radiation-review/section-6) is devoted to the trans-Planckian problem. Section [7](/research/hawking-radiation-review/section-7) treats black hole entropy and the information problem. Section [8](/research/hawking-radiation-review/section-8) reviews laboratory analogues, and Section [9](/research/hawking-radiation-review/section-9) reviews observational searches. Section [10](/research/hawking-radiation-review/section-10) summarises the open problems.

The sections need not be read in order. A reader interested principally in the derivation of the effect may read Sections [2](/research/hawking-radiation-review/section-2) to [4](/research/hawking-radiation-review/section-4). A reader interested in the information problem needs Sections [2](/research/hawking-radiation-review/section-2) and [3](/research/hawking-radiation-review/section-3) and may then proceed directly to Section [7](/research/hawking-radiation-review/section-7). Sections [8](/research/hawking-radiation-review/section-8) and [9](/research/hawking-radiation-review/section-9), on experiments and observations, can be read after Sections [3](/research/hawking-radiation-review/section-3) and [5](/research/hawking-radiation-review/section-5).
