---
slug: hawking-radiation-review/section-9
title: "Observational searches"
date: 2024-12-01
summary: "Primordial black holes and the constraints from their evaporation, searches for final bursts, microscopic black holes at colliders, and astrophysical black holes."
series: hawking-radiation-review
part: section-9
order: 9
kicker: "Section 9"
---
Table 2 makes clear that Hawking radiation from black holes formed by stellar collapse is unobservable. Any hope of detecting the effect in a gravitational system therefore rests on black holes of much smaller mass, which could have formed only in the early universe or, in speculative scenarios, in high-energy collisions. In this section we review the corresponding searches.

## 9.1 Primordial black holes

Zel'dovich and Novikov (1967) and Hawking (1971b) proposed that sufficiently large density fluctuations in the early universe could collapse to form black holes of very low mass, and Carr and Hawking (1974) and Carr (1975) developed the theory of their formation and mass spectrum. A simple estimate fixes the typical mass. A region can collapse only if it is causally connected, so a primordial black hole (PBH) formed at cosmic time $t$ has a mass comparable to the mass within the cosmological horizon at that time,

$$
M \sim \frac{c^{3}t}{G} \sim 10^{15}\,\mathrm{g}\left(\frac{t}{10^{-23}\,\mathrm{s}}\right).
\tag{9.1}
$$

PBHs could therefore span an enormous range of masses, from the Planck mass for formation at the Planck time to about a solar mass for formation at the time of the QCD transition, and beyond for later formation. Shortly after the discovery of Hawking radiation, Page and Hawking (1976) showed that the diffuse gamma-ray background places a stringent upper limit on the present density of PBHs with masses near $10^{15}\,\mathrm{g}$, of the order of $10^{-8}$ of the critical density. Evaporating PBHs thus became, and remain, the only known astrophysical setting in which Hawking radiation could be directly observable.

## 9.2 Constraints from evaporation

The effect of evaporating PBHs on cosmological and astrophysical observables depends strongly on their initial mass, since the mass determines both the lifetime and the energy of the emitted particles. It is helpful to organise the constraints by mass, as in Table 6; comprehensive reviews are given by Carr et al. (2010), Carr et al. (2021), and Auffinger (2023).

| Initial mass | Status today | Principal probes | References |
| --- | --- | --- | --- |
| $\lesssim 10^{9}\,\mathrm{g}$ | Evaporated before nucleosynthesis | Relics: dark matter, dark radiation | Lennon et al. (2018); Hooper et al. (2019) |
| $10^{9}$–$10^{13}\,\mathrm{g}$ | Evaporated during or after nucleosynthesis | Light-element abundances | Carr et al. (2010, 2021) |
| $10^{13}$–$5\times 10^{14}\,\mathrm{g}$ | Evaporated before the present | Spectral distortions and anisotropies of the cosmic microwave background; gamma-ray background | Carr et al. (2010, 2021) |
| $\approx 5\times 10^{14}\,\mathrm{g}$ | Completing evaporation today | Final bursts; gamma-ray background | Page and Hawking (1976); Ackermann et al. (2018); Albert et al. (2020); Aharonian et al. (2023) |
| $10^{15}$–$10^{17}\,\mathrm{g}$ | Radiating at ${T_{\mathrm{H}}} \approx 0.1$–$10\,\mathrm{MeV}$ | Galactic and extragalactic gamma rays; 511 keV line; $e^{\pm}$ measured by Voyager 1; neutrinos | Boudaud and Cirelli (2019); Laha (2019); DeRocco and Graham (2019); Dasgupta et al. (2020) |
| $10^{17}$–$10^{22}\,\mathrm{g}$ | Radiating too weakly to be constrained so far | Future MeV telescopes | Montero-Camacho et al. (2019); Coogan et al. (2021) |

_Table 6: Evaporation-based probes of primordial black holes, organised by initial mass. The boundaries between the ranges are approximate._

Let us comment briefly on the different ranges. PBHs lighter than approximately $10^{9}\,\mathrm{g}$ have lifetimes shorter than about a second and evaporated before big bang nucleosynthesis, so that they are only weakly constrained. Their evaporation may nevertheless have produced dark matter (Lennon et al., 2018) or dark radiation (Hooper et al., 2019), because Hawking emission populates every particle species lighter than the Hawking temperature, irrespective of its non-gravitational couplings; this makes evaporating black holes a universal, if speculative, production mechanism for hidden-sector particles. PBHs with masses between approximately $10^{9}$ and $10^{13}\,\mathrm{g}$ evaporated during or after nucleosynthesis, and the hadrons and photons they emitted would have altered the abundances of the light elements. Heavier PBHs that evaporated after recombination would have injected energy into the intergalactic medium and distorted the spectrum and anisotropies of the cosmic microwave background.

PBHs with initial masses close to $5\times 10^{14}\,\mathrm{g}$ are completing their evaporation at the present epoch (Section [5.4](/research/hawking-radiation-review/section-5#54-massive-particles-and-secondary-emission)), and slightly heavier ones are still radiating. For masses between approximately $10^{15}$ and $10^{17}\,\mathrm{g}$, the extragalactic and Galactic gamma-ray backgrounds (Carr et al., 2010, 2021), the cosmic-ray electrons and positrons measured by Voyager 1 outside the heliosphere (Boudaud and Cirelli, 2019), the Galactic 511 keV line produced by the annihilation of emitted positrons (Laha, 2019; DeRocco and Graham, 2019), and neutrino and positron fluxes (Dasgupta et al., 2020) constrain the fraction of dark matter in PBHs to be well below unity. These constraints depend on the spin of the black holes and on their assumed mass distribution, and the computation of the relevant spectra has been standardised to a considerable extent by tools such as \textsc{BlackHawk} (Arbey and Auffinger, 2019, 2021).

For masses above approximately $10^{17}\,\mathrm{g}$ the Hawking flux becomes too weak to be constraining, and the resulting “asteroid-mass window”, which extends to approximately $10^{22}\,\mathrm{g}$, is one of the few ranges in which PBHs could still constitute all of the dark matter (Montero-Camacho et al., 2019; Carr et al., 2021). Its lower boundary is set by Hawking radiation, and Coogan et al. (2021) have shown that proposed MeV gamma-ray telescopes could detect the Hawking emission of PBHs in this window if they make up a substantial fraction of the dark matter. Finally, if the memory-burden suppression of evaporation discussed in Section [5.6](/research/hawking-radiation-review/section-5#56-backreaction-and-the-end-point) were realised, PBHs lighter than $5\times 10^{14}\,\mathrm{g}$ could have survived to the present, opening a new mass window for PBH dark matter (Alexandre et al., 2024; Thoss et al., 2024).

## 9.3 Searches for final bursts

According to Eq. (5.4), the temperature of an evaporating black hole diverges at the end of its life, and in its final seconds it emits a burst of particles with energies extending to the TeV scale and beyond. The detection of such a burst would constitute direct evidence of Hawking radiation. Searches for the gamma-ray signal of the final stages of PBH evaporation have been carried out with the Fermi Large Area Telescope (Ackermann et al., 2018), the HAWC water-Cherenkov observatory (Albert et al., 2020), and the H.E.S.S. imaging atmospheric Cherenkov telescopes (Aharonian et al., 2023). No bursts have been detected, and these searches have placed upper limits on the local rate density of PBH bursts of the order of $10^{3}$–$10^{4}\,\mathrm{pc}^{-3}\,\mathrm{yr}^{-1}$. The limits depend on the particle-physics model adopted for the last stages of evaporation, and in particular on the treatment of the emission of quarks and gluons at very high temperatures (Section [5.4](/research/hawking-radiation-review/section-5#54-massive-particles-and-secondary-emission)).

## 9.4 Microscopic black holes at colliders

In models with large extra dimensions (Arkani-Hamed et al., 1998), the fundamental scale of gravity could be as low as a few TeV. Black holes could then be produced in particle collisions at centre-of-mass energies above this scale (Dimopoulos and Landsberg, 2001; Giddings and Thomas, 2002), and they would decay rapidly through Hawking emission into a high-multiplicity final state of Standard Model particles. Emparan et al. (2000) showed that such black holes radiate predominantly into the fields confined to the brane rather than into the bulk, so that most of the emitted energy would be visible to detectors, and the greybody factors and emission rates in higher dimensions have been reviewed by Kanti (2004). Searches at the Large Hadron Collider (e.g. Sirunyan et al., 2018) have found no evidence of black hole production, and exclude semiclassical black holes with masses below approximately $10\,\mathrm{TeV}$ in the models considered. It should be noted that black holes produced near the fundamental scale of gravity would lie far from the semiclassical regime, so that these searches test models of TeV-scale gravity rather than the Hawking effect as such.

## 9.5 Astrophysical black holes

For black holes of stellar or larger mass, the Hawking temperature is far below that of the cosmic microwave background (Table 2); these black holes currently absorb more radiation than they emit, and no realistic prospect exists for detecting their Hawking emission. Gravitational-wave observations of binary black hole mergers have been used to test the classical area theorem (Isi et al., 2021), which is the classical limit of the generalised second law, but such tests are insensitive to the quantum emission itself.

> **Summary of the section**
>
> - Only primordial black holes, with masses set roughly by the horizon mass at formation, could be light enough to exhibit observable Hawking emission.
>
> - Evaporation constrains PBHs over a wide mass range, from nucleosynthesis ($10^{9}$–$10^{13}\,\mathrm{g}$) to gamma rays, positrons, and neutrinos ($10^{15}$–$10^{17}\,\mathrm{g}$); the asteroid-mass window above $10^{17}\,\mathrm{g}$ remains open.
>
> - Searches for final bursts have found none and bound the local burst rate; collider searches bound TeV-scale gravity rather than the Hawking effect itself.
