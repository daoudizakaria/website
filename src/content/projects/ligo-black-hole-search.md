---
slug: ligo-black-hole-search
title: "A Deep-Learning Search for Binary Black-Hole Mergers in Real LIGO Data"
date: 2026-09-29
summary: >-
  A convolutional-network search for binary black-hole mergers in two-detector
  LIGO data, evaluated with the official code of the MLGWSC-1 benchmark. In
  real O3a noise it is statistically indistinguishable from the PyCBC matched-filter
  search at one false alarm per month and 40% beyond the best network of the
  challenge; both results are confirmed on pre-registered blind data.
category: ml
repo: "https://github.com/daoudizakaria/ml-gw-bbh-search"
paper: "/uploads/projects/ligo-black-hole-search-report.pdf"
featured: true
tags:
  - gravitational-waves
  - deep-learning
  - signal-detection
  - time-series
  - pytorch
year: "2026"
type: research
rank: 2
image: "/uploads/projects/thumbs/ligo-black-hole-search.webp"
glance:
  problem: "Can a neural network find binary black-hole mergers in real LIGO noise as reliably as matched filtering, at the false-alarm rates that matter for a detection claim?"
  approach: "A one-dimensional residual network on whitened H1 and L1 data, trained with glitch-centred negative examples, scored with the official MLGWSC-1 evaluation code, and confirmed on two pre-registered blind datasets."
  result: "1,532 ± 11 Mpc at one false alarm per month in real O3a noise, statistically indistinguishable from PyCBC (1,544 ± 10 Mpc) and 40% beyond the best challenge network. Applied to the O3a catalogue, 26 of 38 confident events rank above all 14.8 days of background."
  tools: "Python, PyTorch, PyCBC, GWpy, LALSuite, NumPy; GWOSC open data"
metrics:
  - value: "1,532 ± 11"
    unit: "Mpc"
    label: "Sensitive distance in real O3a noise at one false alarm per month"
    note: "PyCBC matched filtering: 1,544 ± 10 Mpc"
  - value: "+40%"
    label: "Over the best machine-learning search of the challenge, at the same rate"
    note: "Virgo-AUTh: 1,092 Mpc"
  - value: "2 of 2"
    label: "Pre-registered blind confirmations passed"
    note: "Within 1% and 3% of the test-set values"
  - value: "26 / 38"
    label: "Confident O3a events louder than all 14.8 days of background"
    note: "False-alarm rate below 25 per year"
---

## About this project

Gravitational-wave searches for merging compact binaries are conventionally performed by matched filtering: the data are correlated with a bank of theoretical waveforms, and candidate signals are ranked after signal-consistency and coincidence tests. Deep neural networks have been proposed as a cheaper alternative, but early claims that they match matched filtering were mostly established on simulated Gaussian noise and at false-alarm rates far above those relevant for a detection. In real detector noise, which contains non-Gaussian transients ("glitches"), the best network of the first machine-learning gravitational-wave search mock data challenge (MLGWSC-1) reached about 70% of the sensitive distance of the PyCBC reference search at one false alarm per month [Schäfer et al. 2023].

This project develops a network search for binary black-hole mergers and evaluates it exactly as the challenge did: on the official test sets, regenerated from the published seeds, and with the challenge's own scoring code. The emphasis is on what can be claimed with confidence. Every design decision that was informed by test data is disclosed, and the central results are confirmed on two blind datasets whose configuration and success criterion were registered before the data were generated. The full [technical report](/uploads/projects/ligo-black-hole-search-report.pdf) documents every step, including all tables, hyperparameters and an internal review.

## The benchmark

MLGWSC-1 provides four datasets of increasing realism. Each consists of a foreground month of two-detector (H1, L1) data at 2,048 Hz, in which a simulated merger is injected every 24–30 s, and a background month of the same noise without injections. Two of them are analysed here:

- **Dataset 1**: simulated Gaussian noise with the design sensitivity of Advanced LIGO; non-spinning binaries with component masses of 10–50 M⊙.
- **Dataset 4**: real strain from the third observing run (O3a), with known events removed and the two detectors shifted by up to 240 s; precessing binaries with component masses of 7–50 M⊙ and higher-order modes.

A search reports events, each with a time and a ranking statistic. The false-alarm rate at a threshold is the number of background events above it per month; an injection is found if an event above the threshold lies within 0.2 s of its merger time. The figure of merit is the **sensitive distance**, the radius of the sphere whose volume equals the volume in which the search finds signals, as a function of the false-alarm rate. Because injections are distributed uniformly in chirp distance, each found injection is weighted by $\mathcal{M}^{5/2}$, where $\mathcal{M}$ is its chirp mass.

The official test sets were regenerated exactly from the seeds reported in the challenge paper. For the Gaussian set, independently generated chunks reproduce the one-shot data to within $7 \times 10^{-37}$ on a strain of order $10^{-22}$. For the real-noise set, where the generator draws its time shifts from a single random sequence, the per-segment procedure was reimplemented and agrees with the official generator exactly. As a further check, the published sensitive volumes of the challenge submissions were reproduced from the regenerated injection files to a relative precision of $4 \times 10^{-16}$.

## The search

![Flow chart of the search: strain data from H1 and L1 are whitened, cut into one-second windows every 0.1 s, and scored by a residual network; windows above a background threshold become triggers, which are clustered into events and scored with the challenge's evaluation code.](/uploads/projects/ligo-pipeline.png "Figure 1: The analysis pipeline. The same whitening routine is applied to training data and to search data, so that the network sees statistically identical inputs in both.")

The strain of each detector is whitened in 512 s chunks with a median-averaged Welch estimate of the noise spectrum, which normalises the data so that the optimal matched-filter signal-to-noise ratio of a signal equals the norm of its whitened samples (verified against PyCBC to a relative precision of $10^{-5}$). The network is a one-dimensional residual network with 4.1 million parameters that takes one second of data from both detectors and returns a single number. Its raw output, rather than a probability, is used as the ranking statistic, because a bounded output saturates and cannot resolve low false-alarm rates [Schäfer et al. 2022].

The network was trained on 60,000 simulated signals drawn from the challenge population, added to noise that shares no random seed, GPS time or injection with any test set. The signal-to-noise ratio of the training signals follows a curriculum from 10–25 down to 5–20. Checkpoints were selected on held-out validation data only, by the fraction of signals at network SNR 8 detected at a false-positive probability of $10^{-4}$ per window.

## Two design choices

**Glitches.** In real O3a noise, 0.68% of one-second windows contain a whitened sample above 6σ in at least one detector; in Gaussian noise there are none. At the false-positive probabilities of interest, the detection threshold is therefore set entirely by glitches. A first model trained with glitches at their natural rate degraded within a few thousand steps and was stopped. The final model draws 40% of its noise-only examples centred on a glitch in one detector, with random data in the other, and so learns that excess power in a single detector is not a coherent signal.

![Detection fraction of SNR-10 signals against training step. Without glitch oversampling the fraction falls from 2% to almost zero; with 40% glitch-centred negatives it exceeds 80% from the first evaluation and reaches 96%.](/uploads/projects/ligo-glitch-training.png "Figure 2: Validation detection fraction for SNR-10 signals in real noise, with and without glitch-centred negative examples.")

**Event timing.** Because the network was trained with the merger anywhere in the central half of its input, a loud signal produces a plateau of consecutive windows with nearly equal scores, and the position of the highest window within that plateau is poorly defined. Timing each event by its highest window placed only 78–96% of validation signals within 0.3 s of the merger, even after the best constant offset; the others count as missed. Taking instead the centre of the plateau, with a constant offset calibrated on validation data, places 97–98% of signals at SNR 8 and all signals at SNR 12 and above within 0.3 s.

![Fraction of validation signals timed within 0.3 s of the merger, against network SNR, for the two estimators and both datasets. The plateau-centre estimator stays between 97% and 100%; the highest-window estimator stays between 78% and 96%.](/uploads/projects/ligo-event-timing.png "Figure 3: Event-time estimators on held-out validation data.")

The plateau estimator was introduced after a diagnostic of test-set events had revealed mis-timed detections. It was calibrated on validation data alone, but the calibrated test-set results are for this reason not blind. Both versions are therefore reported, and the calibrated configuration was frozen and tested on fresh data (see below). An analysis of the released evaluation files of the challenge shows that the leading published searches do not suffer from this timing loss: it arose from the training design of this search, and the published comparison curves are not understated.

## Results on the official test sets

![Sensitive distance against false-alarm rate for dataset 1 (left) and dataset 4 (right). In both panels the calibrated curve of this work lies above PyCBC at high false-alarm rates; on dataset 4 it meets PyCBC at one false alarm per month, far above the other machine-learning searches.](/uploads/projects/ligo-sensitivity.png "Figure 4: Sensitive distance against false-alarm rate on the official test months. Published curves are taken from the challenge's released evaluation files.")

**Table 1.** Sensitive distance in Mpc on the official test months. Uncertainties are one standard deviation from the finite injection set.

| Search | 100 / month | 10 / month | 1 / month |
| --- | --- | --- | --- |
| **Dataset 4, real O3a noise** | | | |
| This work, calibrated timing | **1,820 ± 10** | **1,668 ± 10** | 1,532 ± 11 |
| This work, original timing | 1,608 | 1,478 | 1,357 |
| PyCBC (matched filtering) | 1,722 ± 10 | 1,610 ± 10 | **1,544 ± 10** |
| Virgo-AUTh (best challenge network) | 1,609 ± 10 | 1,400 ± 11 | 1,092 ± 12 |
| **Dataset 1, Gaussian noise** | | | |
| This work, calibrated timing | **2,897 ± 7** | **2,772 ± 8** | **2,632 ± 8** |
| This work, original timing | 2,495 | 2,395 | 2,277 |
| PyCBC (matched filtering) | 2,687 ± 8 | 2,551 ± 8 | 2,492 ± 8 |
| TPI FSU Jena | 2,635 ± 8 | 2,472 ± 8 | 2,363 ± 8 |
| Virgo-AUTh | 2,512 | 2,318 | 2,116 |

In real noise, the difference from PyCBC at one false alarm per month, $-12 \pm 15$ Mpc, is not significant, while the gains of $+98 \pm 14$ and $+58 \pm 14$ Mpc at 100 and 10 per month are. In Gaussian noise the search exceeds PyCBC by more than ten standard deviations at every rate. At one false alarm per month, the threshold is fixed by the second-loudest background event of the month, so results at the lowest rate carry an additional uncertainty that the injection statistics do not capture.

## Blind confirmations

Because the calibrated timing was introduced after test-set inspection, the frozen configuration was applied to new data generated after it had been registered. The registration file recorded the checksums of the model and of the timing calibration, all search parameters and, for the real-noise set, a success criterion: a sensitive distance at one false alarm per month within about 5% of 1,532 Mpc and above the 1,092 Mpc of the best challenge network. The blind pipeline refuses to run if either checksum differs.

**Table 2.** Blind confirmations, sensitive distance in Mpc with the calibrated timing. The 10.4-day Gaussian set is too short to resolve one false alarm per month.

| Dataset | 100 / month | 10 / month | 1 / month |
| --- | --- | --- | --- |
| Real noise, fresh 30-day month (blind) | 1,810 ± 10 | 1,698 ± 10 | 1,576 ± 10 |
| Real noise, official month | 1,820 | 1,668 | 1,532 |
| Gaussian noise, fresh 10.4 days (blind) | 2,910 ± 13 | 2,745 ± 13 | — |
| Gaussian noise, official month | 2,897 | 2,772 | 2,632 |

Both blind sets reproduce the test-set sensitivities, to within 1% in Gaussian noise and 3% in real noise, and the registered criterion is met (1,576 Mpc, +2.9%). The blind month, taken from a later part of O3a, is slightly more sensitive than the official month, which plausibly reflects the noise conditions of that period rather than the search.

## Where the network gains, and where it loses

To locate the differences in parameter space, the set of injections found at one false alarm per month was reconstructed for each search from its evaluation output; the reconstruction reproduces every search's sensitive distance to within 0.1 Mpc.

![Detection efficiency at one false alarm per month against chirp distance (left) and detector-frame chirp mass (right), for dataset 1 (top) and dataset 4 (bottom). In real noise this work matches PyCBC at high chirp mass and finds about half as many of the lightest systems.](/uploads/projects/ligo-efficiency.png "Figure 5: Detection efficiency at one false alarm per month. Chirp-mass bins contain equal numbers of injections; error bars are binomial standard errors.")

The dependence on chirp mass is clear. In the heaviest bin, the network equals PyCBC in real noise and exceeds it in Gaussian noise (21.7% against 18.1% of injections found). In the lightest bin it finds 1.7% of injections in real noise, against 3.6% for PyCBC. A heavy system spends less than a second in the sensitive band, so the one-second input captures essentially the whole signal and the network can use both detectors jointly. A light system accumulates much of its signal-to-noise ratio during an inspiral of several seconds, which a matched filter integrates over and a one-second window cannot. Longer or multi-resolution inputs are therefore the most direct route to better sensitivity for light systems. In real noise, the search finds fewer injections than PyCBC overall (3,392 against 3,896) yet attains a comparable sensitive volume, because heavier systems, which it finds more often, carry more weight.

## The confident O3a events

The real-noise model was applied to 32 s of open data around each of the 44 confident O3a events of the GWTC-2.1 catalogue [Abbott et al. 2024], retrieved from the Gravitational Wave Open Science Center. Six events lack data from one of the two LIGO detectors. The background consisted of 60,000 excerpts of the same length drawn from test-month noise and processed identically, with the second detector time-shifted, for a total of 14.8 days.

![Search statistic against catalogue network SNR for the 38 events with data from both detectors. Most events above SNR 10 lie above the dashed line marking the loudest background event; the events below it are light, very heavy or quiet systems.](/uploads/projects/ligo-o3a-events.png "Figure 6: Search statistic of the confident O3a events against their catalogue network SNR. The dashed line marks the loudest of 14.8 days of background.")

Twenty-six of the 38 events rank above every background event, which corresponds to a false-alarm-rate upper limit of 25 per year. Of the remaining twelve, five are light systems with detector-frame chirp masses below 12 M⊙, two are very heavy (including GW190521), and five are quiet events with catalogue SNR between 7.6 and 9.7. Only 11 of the 38 events lie within the training mass range; 8 of them and 18 of the 27 others rank above all background, which indicates that the network generalises well beyond its training population. These values are upper limits from a short background taken from an earlier part of the run, not event significances.

## Standing among the challenge submissions

The challenge compared searches by their sensitive distance at 100, 10 and 1 false alarms per month. On that basis, and with the qualifications below, this search would rank first on the Gaussian dataset at every rate, and first on the real-noise dataset at 100 and 10 false alarms per month and second, statistically level with PyCBC, at one. Among the machine-learning searches it would rank first everywhere, with a margin over the best challenge network of 13%, 19% and 40% at 100, 10 and 1 false alarms per month in real noise. A month of data is scored in about 1.1 hours of network evaluation on a laptop GPU (NVIDIA RTX 3500 Ada), excluding whitening.

The comparison is retrospective: challenge participants submitted without knowledge of the test data or of the literature that followed, and this search was designed with the benefit of both. The pre-registered blind confirmations guard against adaptation to the particular test months, but not against that informational advantage. PyCBC was run with an aligned-spin template bank on a population with precession and higher-order modes, and as a production search it includes signal-consistency tests that cost sensitivity in Gaussian noise; it is a reference search, not an optimal filter. A comparable level of sensitivity has since been reported by AResGW [Nousi et al. 2023], and this search should be regarded as reaching a similar level rather than exceeding it.

## Checks against leakage and error

- **Data separation.** Training and validation data use seeds distinct from the test seeds, the real noise used for training is disjoint in GPS time from the test and blind months, and no catalogue event falls in any training, validation or test noise.
- **Model selection.** Checkpoints and the timing calibration were chosen on validation data only.
- **Independent scoring.** All sensitive distances were recomputed with a separate implementation of the challenge metric, written without reference to the official code. It agrees to within 0.00% on both test sets and the real-noise blind set, and to within 0.06% on the Gaussian blind set.
- **Internal review.** Every claim about leakage, data equivalence, normalisation, units and scoring was re-derived from the data and the code with the aim of falsifying it. The findings and the responses to them are listed in the technical report, together with a time-ordered record of every decision that could have been informed by test data.

## Limitations

- The calibrated test-set results are not blind; the blind confirmations support them, but they do not remove the fact that the timing estimator was prompted by test-set diagnostics.
- Each dataset covers one month, so false-alarm rates below one per month are not resolved, and the threshold at one per month rests on very few background events.
- Datasets 2 and 3 of the challenge were not analysed, and no statement is made about them.
- The results on the O3a events are upper limits obtained with a short background from an earlier part of the run.
- The analysis has been reviewed internally but not by external domain experts.

## References

- R. Abbott et al. (LIGO, Virgo and KAGRA Collaborations), "GWTC-2.1: Deep extended catalog of compact binary coalescences observed by LIGO and Virgo during the first half of the third observing run", _Phys. Rev. D_ **109**, 022001 (2024). [arXiv:2108.01045](https://arxiv.org/abs/2108.01045)
- R. Abbott et al. (LIGO, Virgo and KAGRA Collaborations), "Open data from the third observing run of LIGO, Virgo, KAGRA, and GEO", _Astrophys. J. Suppl._ **267**, 29 (2023). [doi:10.3847/1538-4365/acdc9f](https://doi.org/10.3847/1538-4365/acdc9f)
- H. Gabbard, M. Williams, F. Hayes and C. Messenger, "Matching matched filtering with deep networks for gravitational-wave astronomy", _Phys. Rev. Lett._ **120**, 141103 (2018). [arXiv:1712.06041](https://arxiv.org/abs/1712.06041)
- T. D. Gebhard, N. Kilbertus, I. Harry and B. Schölkopf, "Convolutional neural networks: a magic bullet for gravitational-wave detection?", _Phys. Rev. D_ **100**, 063015 (2019). [arXiv:1904.08693](https://arxiv.org/abs/1904.08693)
- D. George and E. A. Huerta, "Deep neural networks to enable real-time multimessenger astrophysics", _Phys. Rev. D_ **97**, 044039 (2018). [arXiv:1701.00008](https://arxiv.org/abs/1701.00008)
- P. Nousi, A. E. Koloniari, N. Passalis et al., "Deep residual networks for gravitational wave detection", _Phys. Rev. D_ **108**, 024022 (2023). [doi:10.1103/PhysRevD.108.024022](https://doi.org/10.1103/PhysRevD.108.024022)
- M. B. Schäfer, O. Zelenka, A. H. Nitz et al., "Training strategies for deep learning gravitational-wave searches", _Phys. Rev. D_ **105**, 043002 (2022). [doi:10.1103/PhysRevD.105.043002](https://doi.org/10.1103/PhysRevD.105.043002)
- M. B. Schäfer, O. Zelenka, A. H. Nitz, H. Wang et al., "First machine learning gravitational-wave search mock data challenge", _Phys. Rev. D_ **107**, 023021 (2023). [doi:10.1103/PhysRevD.107.023021](https://doi.org/10.1103/PhysRevD.107.023021)
- MLGWSC-1 code and released results: [github.com/gwastro/ml-mock-data-challenge-1](https://github.com/gwastro/ml-mock-data-challenge-1); [doi:10.5281/zenodo.7107410](https://doi.org/10.5281/zenodo.7107410)

This research has made use of data or software obtained from the Gravitational Wave Open Science Center ([gwosc.org](https://gwosc.org)), a service of the LIGO Scientific Collaboration, the Virgo Collaboration and KAGRA. The complete acknowledgement required under the CC BY 4.0 licence is given at [gwosc.org/acknowledgement](https://gwosc.org/acknowledgement).
