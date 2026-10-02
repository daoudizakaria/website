---
slug: hawking-radiation-review/section-9
title: "Searching for Hawking radiation"
date: 2024-12-01
summary: "Primordial black holes and the constraints from their evaporation, searches for final bursts, and black holes at colliders."
series: hawking-radiation-review
part: section-9
order: 9
kicker: "Lecture 9"
---
A black hole born with a mass of $5\times 10^{14}\,\mathrm{g}$ would be ending its life about now. In its last second it would release roughly $10^{23}\,\mathrm{J}$ in particles with energies of several TeV (Problem 2). No such event has been seen. The black holes that astronomers do observe are of no use here: Table 2 shows that a black hole of stellar mass is colder than the cosmic microwave background by more than seven orders of magnitude. Any hope of detecting the effect in a gravitational system therefore rests on black holes of much smaller mass, which could have formed only in the early universe or, in speculative scenarios, in high-energy collisions.

## 9.1 Primordial black holes

Zel'dovich and Novikov (1967) and Hawking (1971b) suggested that sufficiently large density fluctuations in the early universe could collapse to black holes of very low mass,[^1] and Carr and Hawking (1974) and Carr (1975) developed the theory of their formation and mass spectrum. The typical mass follows from causality alone. A region can collapse only if it is causally connected, so a primordial black hole (PBH) formed at cosmic time $t$ has a mass comparable to the mass within the cosmological horizon at that time,[^2]

$$
M \sim \frac{c^{3}t}{G} \sim 10^{15}\,\mathrm{g}\left(\frac{t}{10^{-23}\,\mathrm{s}}\right).
\tag{9.1}
$$

The numerical coefficient is $c^{3}/G \approx 4\times 10^{38}\,\mathrm{g\,s^{-1}}$ (Problem 1). Formation at the Planck time gives the Planck mass, formation at the QCD transition, around $10^{-5}\,\mathrm{s}$, gives about a solar mass, and later formation gives more. A black hole of $5\times 10^{14}\,\mathrm{g}$, the one completing its evaporation today, would have formed at about $10^{-24}\,\mathrm{s}$.

Within two years of Hawking's discovery, Page and Hawking (1976) showed that the diffuse gamma-ray background limits the present density of PBHs with masses near $10^{15}\,\mathrm{g}$ to the order of $10^{-8}$ of the critical density. Evaporating PBHs thus became, and remain, the only known astrophysical setting in which Hawking radiation could be directly observable.

## 9.2 Constraints from evaporation

The initial mass of a PBH sets both its lifetime and the energy of the particles it emits, so the constraints are naturally organised by mass, as in Table 6. They are reviewed in detail by Carr et al. (2010), Carr et al. (2021), and Auffinger (2023).

| Initial mass | Status today | Principal probes | References |
| --- | --- | --- | --- |
| $\lesssim 10^{9}\,\mathrm{g}$ | Evaporated before nucleosynthesis | Relics: dark matter, dark radiation | Lennon et al. (2018); Hooper et al. (2019) |
| $10^{9}$–$10^{13}\,\mathrm{g}$ | Evaporated during or after nucleosynthesis | Light-element abundances; spectral distortions of the cosmic microwave background (above about $10^{11}\,\mathrm{g}$) | Carr et al. (2010, 2021) |
| $10^{13}$–$5\times 10^{14}\,\mathrm{g}$ | Evaporated before the present | Anisotropies of the cosmic microwave background; gamma-ray background | Carr et al. (2010, 2021) |
| $\approx 5\times 10^{14}\,\mathrm{g}$ | Completing evaporation today | Final bursts; gamma-ray background | Page and Hawking (1976); Ackermann et al. (2018); Albert et al. (2020); Aharonian et al. (2023) |
| $10^{15}$–$10^{17}\,\mathrm{g}$ | Radiating at ${T_{\mathrm{H}}} \approx 0.1$–$10\,\mathrm{MeV}$ | Galactic and extragalactic gamma rays; 511 keV line; $e^{\pm}$ measured by Voyager 1; neutrinos | Boudaud and Cirelli (2019); Laha (2019); DeRocco and Graham (2019); Dasgupta et al. (2020) |
| $10^{17}$–$10^{22}\,\mathrm{g}$ | Radiating too weakly to be constrained so far | Future MeV telescopes | Montero-Camacho et al. (2019); Coogan et al. (2021) |

_Table 6: Evaporation-based probes of primordial black holes, organised by initial mass. The boundaries between the ranges are approximate._

PBHs lighter than about $10^{9}\,\mathrm{g}$ live for less than a second (Table 2) and evaporated before big bang nucleosynthesis, so they are only weakly constrained. Their evaporation may nonetheless have produced dark matter (Lennon et al., 2018) or dark radiation (Hooper et al., 2019), because Hawking emission populates every particle species lighter than the Hawking temperature, whatever its non-gravitational couplings, which makes evaporating black holes a universal, if speculative, source of hidden-sector particles. Between about $10^{9}$ and $10^{13}\,\mathrm{g}$ the evaporation took place during or after nucleosynthesis, and the emitted hadrons and photons would have altered the abundances of the light elements.

The cosmic microwave background is sensitive to energy injected later. Energy released between about two months after the big bang and recombination can no longer be fully thermalised and distorts the black-body spectrum; this constrains masses of roughly $10^{11}$–$10^{13}\,\mathrm{g}$. PBHs heavier than a few times $10^{13}\,\mathrm{g}$ evaporated after recombination, and the energy they injected into the intergalactic medium would have changed the ionisation history and hence the anisotropies.

PBHs with initial masses close to $5\times 10^{14}\,\mathrm{g}$ are completing their evaporation at the present epoch (Section [5.4](/research/hawking-radiation-review/section-5#54-massive-particles-and-secondary-emission)), and slightly heavier ones are still radiating. For masses between about $10^{15}$ and $10^{17}\,\mathrm{g}$, several observables constrain the fraction of dark matter in PBHs to be well below unity: the extragalactic and Galactic gamma-ray backgrounds (Carr et al., 2010, 2021), the cosmic-ray electrons and positrons measured by Voyager 1 outside the heliosphere (Boudaud and Cirelli, 2019),[^3] the Galactic 511 keV line produced by the annihilation of emitted positrons (Laha, 2019; DeRocco and Graham, 2019), and neutrino and positron fluxes (Dasgupta et al., 2020). These constraints depend on the spin of the black holes and on their assumed mass distribution. The computation of the relevant spectra has been largely standardised by the public code \textsc{BlackHawk} (Arbey and Auffinger, 2019, 2021).

The limits weaken quickly with mass. For a fixed density of dark matter in PBHs of a single mass $M$, the number density falls as $M^{-1}$ while the luminosity of each black hole falls as $M^{-2}$, so the power per unit volume scales as $M^{-3}$ and the typical energy of the emitted quanta as $M^{-1}$ (Problem 3). Between $10^{15}$ and $10^{17}\,\mathrm{g}$ the power drops by six orders of magnitude.

Above about $10^{17}\,\mathrm{g}$ the Hawking flux is too weak to be constraining. The resulting “asteroid-mass window”, which extends to about $10^{22}\,\mathrm{g}$, is one of the few ranges in which PBHs could still make up all of the dark matter (Montero-Camacho et al., 2019; Carr et al., 2021). Its lower edge is set by Hawking radiation, and Coogan et al. (2021) have shown that proposed MeV gamma-ray telescopes could detect the Hawking emission of PBHs in this window if they make up a substantial fraction of the dark matter. If the memory-burden suppression of evaporation discussed in Section [5.6](/research/hawking-radiation-review/section-5#56-backreaction-and-the-end-point) were realised, PBHs lighter than $5\times 10^{14}\,\mathrm{g}$ could have survived to the present, opening a new mass window for PBH dark matter (Alexandre et al., 2024; Thoss et al., 2024).

## 9.3 Searches for final bursts

According to Eq. (5.4), the mass remaining a time $\Delta t$ before the end is $(3\alpha\,\Delta t)^{1/3}$, so the temperature diverges as $\Delta t^{-1/3}$. In its final seconds an evaporating black hole emits a burst of particles with energies extending to the TeV scale and beyond. Detecting such a burst would be direct evidence of Hawking radiation. Searches for the gamma-ray signal of the final stages of PBH evaporation have been made with the Fermi Large Area Telescope (Ackermann et al., 2018), the HAWC water-Cherenkov observatory (Albert et al., 2020), and the H.E.S.S. imaging atmospheric Cherenkov telescopes (Aharonian et al., 2023). None has found a burst. The resulting upper limits on the local rate density of PBH bursts are of order $10^{3}$–$10^{4}\,\mathrm{pc}^{-3}\,\mathrm{yr}^{-1}$.

These limits depend on the particle physics assumed for the last stages of evaporation, and in particular on how quarks and gluons emitted at very high temperatures fragment into photons (Section [5.4](/research/hawking-radiation-review/section-5#54-massive-particles-and-secondary-emission)). They are limits on how many black holes of about $5\times 10^{14}\,\mathrm{g}$ are finishing their lives near the Sun; a non-detection constrains the PBH abundance, not the Hawking effect.

## 9.4 Microscopic black holes at colliders

In models with large extra dimensions (Arkani-Hamed et al., 1998), the fundamental scale of gravity $M_{*}$ could be as low as a few TeV. With $n$ extra dimensions of size $R$, the four-dimensional Planck mass is ${m_{\mathrm{P}}}^{2} \sim M_{*}^{n+2}R^{n}$, so a TeV-scale $M_{*}$ requires millimetre-sized dimensions for $n = 2$ and smaller ones for larger $n$ (Problem 5). Black holes could then be produced in particle collisions at centre-of-mass energies above $M_{*}$ (Dimopoulos and Landsberg, 2001; Giddings and Thomas, 2002), and they would decay rapidly through Hawking emission into a high-multiplicity final state of Standard Model particles. Emparan et al. (2000) showed that such black holes radiate mainly into the fields confined to the brane rather than into the bulk, so that most of the emitted energy would be visible to detectors; the greybody factors and emission rates in higher dimensions have been reviewed by Kanti (2004). Searches at the Large Hadron Collider (e.g. Sirunyan et al., 2018) have found no evidence of black hole production and exclude semiclassical black holes with masses below about $10\,\mathrm{TeV}$ in the models considered.

> **Remark 9.1.**
>
> Black holes produced just above the fundamental scale of gravity would have masses of a few $M_{*}$ and would lie far from the semiclassical regime. Collider searches therefore test models of TeV-scale gravity, not the Hawking effect as such.

## 9.5 Astrophysical black holes

For black holes of stellar or larger mass the Hawking temperature is far below that of the cosmic microwave background (Table 2). Such black holes currently absorb far more radiation than they emit: for a black hole of $10\,{M_{\odot}}$ the ratio of the two powers is of order $10^{34}$ (Problem 4). There is no realistic prospect of detecting their Hawking emission. Gravitational-wave observations of binary black hole mergers have been used to test the classical area theorem (Isi et al., 2021), which is the classical limit of the generalised second law, but such tests are insensitive to the quantum emission itself.

## Problems

1. Show that $c^{3}/G \approx 4\times 10^{38}\,\mathrm{g\,s^{-1}}$, so that Eq. (9.1) reads $M \approx 4\times 10^{15}\,\mathrm{g}\,(t/10^{-23}\,\mathrm{s})$. Show that formation at the Planck time $t_{\mathrm{P}} = (\hbar G/c^{5})^{1/2}$ gives exactly the Planck mass, and that a PBH of $5\times 10^{14}\,\mathrm{g}$ formed at $t \approx 1\times 10^{-24}\,\mathrm{s}$ and one of ${M_{\odot}}$ at $t \approx 5\times 10^{-6}\,\mathrm{s}$.

2. Using Eq. (5.4) with constant $\alpha$, show that a black hole a time $\Delta t$ before the end of its life has mass $M = (3\alpha\,\Delta t)^{1/3}$, so that ${T_{\mathrm{H}}} \propto \Delta t^{-1/3}$. Fix $\alpha$ by the last row of Table 2 (a lifetime of $0.4\,\mathrm{s}$ at $10^{9}\,\mathrm{g}$). Show that one second before the end $M \approx 1.4\times 10^{9}\,\mathrm{g}$, $k_{\mathrm{B}}{T_{\mathrm{H}}} \approx 8\,\mathrm{TeV}$, and the rest energy still to be radiated is about $1\times 10^{23}\,\mathrm{J}$.

3. PBHs of a single mass $M$ make up a fixed mass density $\rho$. Show that their Hawking power per unit volume scales as $M^{-3}$ and the mean energy of their emitted quanta as $M^{-1}$, and find the factor by which the power falls between $10^{15}$ and $10^{17}\,\mathrm{g}$. For $M = 10^{17}\,\mathrm{g}$, compare $k_{\mathrm{B}}{T_{\mathrm{H}}}$ (Section [3.7](/research/hawking-radiation-review/section-3#37-orders-of-magnitude)) with $m_{e}c^{2} = 0.511\,\mathrm{MeV}$ and estimate the Boltzmann factor $e^{-m_{e}c^{2}/k_{\mathrm{B}}{T_{\mathrm{H}}}}$ that suppresses the emission of electron–positron pairs. (Answer: about $10^{-2}$.)

4. Treat a Schwarzschild black hole as a perfect absorber of photons with cross-section $27\pi M^{2}$, independent of frequency and direction, and assume by detailed balance that it emits photons as a black body of the same cross-section at temperature ${T_{\mathrm{H}}}$. Show that the ratio of the power it absorbs from the cosmic microwave background to the power it emits is $(T_{\mathrm{CMB}}/{T_{\mathrm{H}}})^{4}$. Evaluate this ratio for $10\,{M_{\odot}}$ (about $4\times 10^{34}$), and show that it equals one at $M \approx 4.5\times 10^{25}\,\mathrm{g}$, as in Table 2.

5. Ignoring factors of order unity, use ${m_{\mathrm{P}}}^{2} \sim M_{*}^{n+2}R^{n}$ with ${m_{\mathrm{P}}} \approx 1.2\times 10^{19}\,\mathrm{GeV}$, $M_{*} = 1\,\mathrm{TeV}$, and $\hbar c \approx 2\times 10^{-16}\,\mathrm{GeV\,m}$ to show that $R$ is of order a millimetre for $n = 2$ and of order $10^{13}\,\mathrm{m}$ for $n = 1$. Why is $n = 1$ excluded?

## Notes and further reading

The original estimate of Page and Hawking (1976) is short and still worth reading, because every later gamma-ray constraint refines the same argument. For the constraints themselves, Carr et al. (2010) is the place to start: it derives each limit from its physics, and its fitting formulae for the lifetime as a function of mass are used throughout the literature. Carr et al. (2021) updates the picture and covers non-evaporation constraints as well. Auffinger (2023) is restricted to Hawking-radiation constraints and discusses their uncertainties in detail, notably the dependence on spin, mass distribution and the treatment of hadronisation.

A student who wants to compute spectra rather than read about them should begin with the paper describing \textsc{BlackHawk} (Arbey and Auffinger, 2019). For the higher-dimensional black holes of Section [9.4](#94-microscopic-black-holes-at-colliders), Kanti (2004) gives a clear account of greybody factors on the brane and in the bulk.

[^1]: Zel'dovich and Novikov argued that such objects would grow catastrophically by accretion. Carr and Hawking (1974) showed that no self-similar solution exists in which a black hole grows as fast as the cosmological horizon.

[^2]: The PBH literature measures masses in grams, and we follow it in this lecture; ${M_{\odot}} \approx 2\times 10^{33}\,\mathrm{g}$.

[^3]: Inside the heliosphere the solar wind screens out low-energy charged cosmic rays, so that only a spacecraft beyond it sees the interstellar flux of $e^{\pm}$ in the MeV range.
