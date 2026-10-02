---
slug: hawking-radiation-review/section-1
title: "The temperature of a black hole"
date: 2024-12-01
summary: "Bekenstein's entropy, the objection that a body with entropy must radiate, and a dimensional estimate of the answer; what the course assumes."
series: hawking-radiation-review
part: section-1
order: 1
kicker: "Lecture 1"
---
In 1972 Jacob Bekenstein, then a graduate student at Princeton, proposed that a black hole carries an entropy proportional to the area of its horizon (Bekenstein, 1972, 1973).[^1] The objection was immediate, and its most careful statement came from Bardeen et al. (1973). A body with entropy $S$ and energy $M$ has a temperature, $T^{-1} = \partial S/\partial M$. A body with a temperature radiates. A black hole in classical general relativity absorbs everything and emits nothing, so its temperature is zero, and its area cannot be a thermodynamic entropy. Within two years Hawking (1974, 1975) had shown that the objection fails, and that what defeats it is quantum mechanics. These lectures are about that result and about the problems it has raised in the half century since.

## 1.1 A puzzle from black hole thermodynamics

Classically, a black hole is a perfect absorber, its horizon a one-way membrane. Yet by 1973 it was clear that black holes obey laws of the same form as the laws of thermodynamics (Bardeen et al., 1973). The surface gravity $\kappa$ of a stationary black hole is constant over its horizon, as the temperature of a body in equilibrium is uniform. The area $A$ of the horizon never decreases, as the entropy of an isolated system never decreases. Small changes in the mass, area, angular momentum and charge are related by an identity with the form of the first law, in which $\kappa/8\pi$ stands where the temperature should be and $A$ where the entropy should be. The four laws are stated precisely in Lecture [2](/research/hawking-radiation-review/section-2).

Bekenstein took the analogy literally. Bardeen, Carter and Hawking regarded $\kappa/8\pi$ and $A$ as analogues of temperature and entropy, distinct from them. Within classical general relativity they were right: either the analogy is formal, or the theory is missing an ingredient.

The missing ingredient is quantum mechanics. When quantum fields are placed on the geometry of a black hole formed by collapse, the black hole emits thermal radiation at the temperature

$$
{T_{\mathrm{H}}} = \frac{\hbar\kappa}{2\pi c\,k_{\mathrm{B}}}
\;\xrightarrow{\;\text{Schwarzschild}\;}\;
\frac{\hbar c^{3}}{8\pi G M k_{\mathrm{B}}}
\simeq 6.17\times 10^{-8}\,\mathrm{K}\left(\frac{{M_{\odot}}}{M}\right).
\tag{1.1}
$$

Hawking had expected to find something quite different.[^2] Once the temperature is known, the first law fixes the constant that Bekenstein could not, and the entropy is the Bekenstein–Hawking entropy,

$$
{S_{\mathrm{BH}}} = \frac{k_{\mathrm{B}} c^{3} A}{4 G\hbar} = \frac{k_{\mathrm{B}} A}{4{\ell_{\mathrm{P}}}^{2}},
\qquad {\ell_{\mathrm{P}}} = \left(\frac{G\hbar}{c^{3}}\right)^{1/2}.
\tag{1.2}
$$

Both numbers are extreme. A black hole of one solar mass has a temperature of $6.2\times 10^{-8}\,\mathrm{K}$, nearly eight orders of magnitude below that of the cosmic microwave background, and an entropy of $1.0\times 10^{77}\,k_{\mathrm{B}}$.

## 1.2 A first estimate

Much of Eq. (1.1) can be guessed before any calculation. A Schwarzschild black hole has a single parameter, its mass $M$. From $M$, Newton's constant and the speed of light one can form a single time scale, the light-crossing time of the horizon, $t_{M} = GM/c^{3}$, which is $4.9\,\mu\mathrm{s}$ for a solar mass. Classical physics provides no way to convert a time into a temperature. Quantum mechanics does, since $\hbar/t_{M}$ is an energy, and the only temperature that can be built from the available quantities is therefore

$$
k_{\mathrm{B}} T \sim \frac{\hbar}{t_{M}} = \frac{\hbar c^{3}}{G M}.
\tag{1.3}
$$

For a solar mass this gives $1.6\times 10^{-6}\,\mathrm{K}$. The factor $1/8\pi$ in Eq. (1.1), which only the full calculation can supply, brings it down to $6.2\times 10^{-8}\,\mathrm{K}$.

The estimate already contains two facts that survive the full calculation. The temperature vanishes in the classical limit $\hbar \to 0$, which is why classical general relativity could not have found it. It is also inversely proportional to the mass: small black holes are hot and large ones cold, so that a radiating black hole heats up and radiates faster, a runaway examined in Lecture [5](/research/hawking-radiation-review/section-5). The same reasoning applied to the entropy, which is dimensionless in units of $k_{\mathrm{B}}$ and must be built from the area and the fundamental constants, gives $S \sim A/{\ell_{\mathrm{P}}}^{2}$, in agreement with Eq. (1.2); the factor $1/4$ again requires the calculation.

## 1.3 A heuristic picture and its limitations

The usual picture of the origin of the radiation goes back to Hawking himself. The quantum vacuum contains fluctuations that may be described as virtual particle–antiparticle pairs, which in flat spacetime annihilate within the time allowed by the energy–time uncertainty relation. Near a horizon, one member of a pair may cross the horizon before annihilation takes place, while the other escapes to infinity as a real particle. Energy conservation then requires the member that falls in to carry negative energy as measured from infinity,[^3] and the black hole loses mass. The picture even reproduces the scale of Eq. (1.3): a pair can be separated by the horizon only if it survives for a time of order $t_{M}$, which requires an energy of order $\hbar/t_{M}$.

It should not be taken further than that. A quantum of energy $\hbar\omega = x\,k_{\mathrm{B}}{T_{\mathrm{H}}}$ has wavelength

$$
\lambda = \frac{2\pi c}{\omega} = \frac{8\pi^{2}}{x}\,r_{\mathrm{s}},
\qquad r_{\mathrm{s}} = \frac{2GM}{c^{2}},
$$

so that at the peak of the energy spectrum of a black body, $x \approx 2.8$, the wavelength is about $28$ Schwarzschild radii. A particle of this wavelength cannot be localised in a thin layer just outside the horizon, which is what the picture suggests (Remark 5.1). Nor does the picture explain why the spectrum is thermal. The correct statement, which we develop in Lecture [3](/research/hawking-radiation-review/section-3), is that the state of a quantum field that is regular across a forming horizon necessarily contains correlations between modes inside and outside the horizon, and that the outside modes, considered on their own, are thermally populated. The pair picture is best regarded as a mnemonic for this entanglement. We shall not use it for anything else.

## 1.4 How the course is organised

Lectures [2](/research/hawking-radiation-review/section-2) and [3](/research/hawking-radiation-review/section-3) are the core of the course: the classical laws of black hole mechanics, the small amount of quantum field theory in curved spacetime that we need, the Unruh effect, and then Hawking's calculation. The remaining lectures branch from there, to other derivations of the temperature (Lecture [4](/research/hawking-radiation-review/section-4)), the spectrum and the evaporation (Lecture [5](/research/hawking-radiation-review/section-5)), the trans-Planckian problem (Lecture [6](/research/hawking-radiation-review/section-6)), entropy and information (Lecture [7](/research/hawking-radiation-review/section-7), the longest), laboratory analogues (Lecture [8](/research/hawking-radiation-review/section-8)), observational searches (Lecture [9](/research/hawking-radiation-review/section-9)) and open problems (Lecture [10](/research/hawking-radiation-review/section-10)). A student interested mainly in the information problem may go from Lecture [3](/research/hawking-radiation-review/section-3) directly to Lecture [7](/research/hawking-radiation-review/section-7); the lectures on experiment and observation need only Lectures [3](/research/hawking-radiation-review/section-3) and [5](/research/hawking-radiation-review/section-5).

We assume general relativity at the level of a first graduate course, including the Schwarzschild and Kerr solutions, Kruskal coordinates and Penrose diagrams, and the canonical quantisation of a free field. No quantum field theory in curved spacetime is assumed. A student who is at ease with Kruskal coordinates and with the harmonic oscillator in the number basis has all that the first three lectures require. For technical detail we defer to the standard monographs, Birrell and Davies (1982) and Wald (1994).

## 1.5 Conventions

We use the metric signature $(-,+,+,+)$ and, except in numerical estimates, units in which $\hbar = c = G = k_{\mathrm{B}} = 1$. In these units the Planck mass and the Planck length are both equal to unity, the Schwarzschild radius is $r_{\mathrm{s}} = 2M$, and Eqs. (1.1) and (1.2) become ${T_{\mathrm{H}}} = \kappa/2\pi = 1/8\pi M$ and ${S_{\mathrm{BH}}} = A/4$.

## Notes and further reading

The reader who wants a single companion to the first half of this course should take the lecture notes of Jacobson (2005), which develop quantum field theory in curved spacetime from the beginning and reach the Hawking effect by a route close to ours. Wald (2001) is the standard review of black hole thermodynamics, and the place to see which of the four laws have been proved and under what assumptions; the short review of Carlip (2014) covers similar ground with more attention to microscopic proposals for the entropy. Page (2005) is strongest on the numbers: emission rates, lifetimes, and the entropy of the radiation.

Two longer works repay reading once the basic calculation is familiar. The report of Brout et al. (1995) treats the derivation in great detail, including backreaction and the role of very high frequencies, and is a good source for the physical interpretation of the partner modes. Helfer (2003) asks, critically and with care, which assumptions of the standard derivation are actually justified; we recommend it to anyone inclined to regard the matter as closed.

[^1]: The question came from his adviser, John Wheeler, who put it as a joke about a crime: mixing a cup of hot tea with a cup of cold tea increases the entropy of the world, and dropping both into a black hole would seem to hide the evidence. Bekenstein's answer was that the black hole itself must carry the entropy.

[^2]: He was led to the problem partly by Zel'dovich and Starobinsky, who argued during his visit to Moscow in 1973 that a rotating black hole should emit in its superradiant modes (Section [2.5](/research/hawking-radiation-review/section-2#25-superradiance)). Improving their calculation, he found to his surprise that a non-rotating black hole emits as well.

[^3]: This is possible because the Killing vector $\partial_{t}$, which defines energy at infinity, is spacelike inside the horizon. The Penrose process of Section [2.2](/research/hawking-radiation-review/section-2#22-the-laws-of-black-hole-mechanics) exploits the same freedom in the ergoregion of a Kerr black hole.
