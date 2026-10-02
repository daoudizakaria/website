---
slug: hawking-radiation-review/section-10
title: "What remains open"
date: 2024-12-01
summary: "Open questions in theory and observation, problems within reach of a first research project, and a guide to the literature."
series: hawking-radiation-review
part: section-10
order: 10
kicker: "Lecture 10"
---
Hawking's first announcement of the effect was a two-page letter to _Nature_, published in March 1974 under the title “Black hole explosions?” (Hawking, 1974).[^1] Half a century later, no black hole has been seen to explode, or even to radiate. A black hole of one solar mass emits about $10^{-28}\,\mathrm{W}$. The theory is in much better shape.

The temperature ${T_{\mathrm{H}}} = \kappa/2\pi$ has been obtained from mode calculations, from the Euclidean path integral, from the renormalised stress tensor, from tunnelling and anomaly arguments, and in algebraic quantum field theory (Lectures [3](/research/hawking-radiation-review/section-3) and [4](/research/hawking-radiation-review/section-4)). All of these agree, and all rest on the same two assumptions: the evolution near the horizon is adiabatic, and the short-wavelength modes are in their ground state. With the temperature fixed, the first law gives ${S_{\mathrm{BH}}} = A/4$, and for certain extremal and near-extremal black holes in string theory this entropy has been reproduced by counting microstates. The emission spectrum is known well enough to be used as input to astrophysical searches, and the kinematics of the effect has been reproduced in fluids and condensates.

## 10.1 Open theoretical questions

The universality results of Section [4.5](/research/hawking-radiation-review/section-4#45-rigorous-results-and-universality) and Lecture [6](/research/hawking-radiation-review/section-6) show that the prediction is insensitive to short-distance physics, provided the short-wavelength modes are unexcited. Whether a quantum theory of gravity guarantees this has not been established. The trans-Planckian problem has therefore been reduced to a well-defined assumption rather than solved. Closely related is the question of where the quanta originate, at the horizon or in an extended quantum atmosphere (Remark 5.1); every proposal that modifies the near-horizon region depends on the answer.

The end point of evaporation is open in a different way. The semiclassical treatment is well controlled while the black hole is much heavier than the Planck mass, but the final stages require quantum gravity, and complete evaporation, remnants and non-standard late-time behaviour have not been decisively distinguished. The memory-burden proposal (Dvali et al., 2020) shows that departures from the semiclassical picture could in principle set in long before the Planck scale, with direct consequences for primordial black holes. Whether such an effect follows from a controlled calculation is unknown.

On the information problem, the calculations of Section [7.8](/research/hawking-radiation-review/section-7#78-holography-and-quantum-extremal-surfaces) show that the gravitational path integral, with replica wormholes included, reproduces the Page curve; in the models studied, this identifies what Hawking's calculation missed.[^2] What these calculations do not yet tell us is how the result extends to asymptotically flat black holes in four dimensions, by what mechanism the radiation carries the information, what an infalling observer meets at the horizon of an old black hole, and how wormhole contributions are to be understood in theories that are not ensemble averages (Almheiri et al., 2021; Raju, 2022). Their relation to complementarity, fuzzballs and soft hair is also unclear.

## 10.2 Open experimental and observational questions

Analogue experiments have gone, in little more than a decade, from classical demonstrations of mode conversion to reported spontaneous, correlated emission with a thermal spectrum in Bose–Einstein condensates (Steinhauer, 2016; Mu\ noz de Nova et al., 2019; Kolobov et al., 2021). What is needed now is replication on other platforms, a demonstration of entanglement between Hawking and partner excitations that does not depend on modelling assumptions, and experiments beyond the fixed-background approximation, such as measurements of the backreaction of the emission on the flow.

In gravity, detection depends on primordial black holes that are light enough to be evaporating today or, in the asteroid-mass window, to radiate at observable levels. Future MeV gamma-ray observatories could detect the emission of asteroid-mass PBHs if these make up a substantial fraction of the dark matter (Coogan et al., 2021), and continued searches for TeV bursts will tighten the limits on the local burst rate (Albert et al., 2020; Aharonian et al., 2023). A detection in either channel would be the first direct evidence of Hawking radiation from a gravitational black hole.

## 10.3 Where a newcomer might start

Several of these questions are within reach of a first research project. The backreaction of Hawking emission on a condensate is a well-posed problem in a system with a known microscopic theory, and can be studied numerically with the methods of Carusotto et al. (2008). The entanglement criterion of Section [8.4](/research/hawking-radiation-review/section-8#84-spontaneous-emission-in-boseeinstein-condensates) is easily degraded by thermal phonons in the initial state, and better witnesses would be directly useful to experiments. On the observational side, the limits on final bursts depend on how quarks and gluons emitted at temperatures above the electroweak scale fragment, and quantifying that dependence is a concrete problem in particle phenomenology. The harder questions, the four-dimensional Page curve and the end point of evaporation, are better approached after working through the two-dimensional models of Sections [5.6](/research/hawking-radiation-review/section-5#56-backreaction-and-the-end-point) and [7.8](/research/hawking-radiation-review/section-7#78-holography-and-quantum-extremal-surfaces) in detail; most of what is understood about them was first understood there.

The reader who has worked through these lectures can derive the Hawking temperature in several independent ways, estimate when it matters, and follow the current literature on the information problem.

## 10.4 Guide to further reading

We list starting points in roughly increasing order of specialisation. For quantum field theory in curved spacetime, the lecture notes of Jacobson (2005) should be read first; they are concise and physically transparent. Birrell and Davies (1982) remains the reference for explicit calculations, including renormalisation of the stress tensor and the two-dimensional models, and Wald (1994) gives the careful algebraic treatment on which the rigorous results rest. For black hole thermodynamics, Wald (2001) is the standard review, Page (2005) is best on the emission rates and evaporation, and Carlip (2014) surveys the attempts to count microstates. The Unruh effect is reviewed by Crispino et al. (2008), and Brout et al. (1995) remains the most detailed treatment of the trans-Planckian problem and of the role of dispersion.

On the information problem, we recommend Harlow (2016) as the first review, followed by Polchinski (2017) and Marolf (2017). Unruh and Wald (2017) argue that information loss is acceptable, and Raju (2022) gives a critical assessment of the recent developments; both are useful for seeing which parts of the current consensus rest on assumptions. The calculations based on islands and replica wormholes are reviewed by Almheiri et al. (2021). Analogue gravity is reviewed by Barceló et al. (2011b), superradiance by Brito et al. (2020), and the observational constraints on primordial black holes by Carr et al. (2021) and Auffinger (2023).

[^1]: The full calculation appeared the following year (Hawking, 1975).

[^2]: Page's argument for the shape of the curve predates these calculations by a quarter of a century.
