---
slug: radioactive-decay
title: "Radioactive Decay: Nuclear Physics Notes and Simulations"
date: 2026-09-27
summary: >-
  Twenty pages of teaching notes on nuclear physics, from the structure of
  the nucleus to fission and fusion, paired with Python programs that
  simulate radioactive decay and compute nuclear energies from the
  international AME2020 and NUBASE2020 data. Written for high-school and
  first-year university students, and tested against exact results.
category: physics
repo: "https://github.com/daoudizakaria/Radioactive_Decay"
paper: "/uploads/projects/nuclear-physics-notes.pdf"
featured: false
tags:
  - nuclear-physics
  - monte-carlo
  - numerical-methods
  - physics-education
  - python
---

## 1 The Idea

Nuclear physics is often taught as a list of formulas to memorise: the decay law, half-lives, binding energies. This project started in the classroom, with a simpler goal: let students *see* radioactivity happen. It pairs a set of Python programs that simulate radioactive decay with twenty pages of notes that explain the physics behind them, from what a nucleus is made of to why the Sun shines.

The notes are written for the last years of high school and the first year of university. The main text needs only algebra, exponentials and logarithms; boxes marked *Going further* add derivatives and differential equations for readers who want them, and boxes marked *Try it with the code* turn each idea into an experiment to run. Every mass and half-life comes from the international evaluations AME2020 [1] and NUBASE2020 [2], so students work with the same numbers as professional nuclear physicists.

## 2 The Nucleus in Numbers

A nucleus with $Z$ protons and $N$ neutrons weighs *less* than its separate nucleons; the missing mass is the binding energy,

$$
B = \left[ Z\, m(^{1}\mathrm{H}) + N\, m_n - m(\text{atom}) \right] c^2 .
$$

The program computes it for every nucleus whose mass has been measured (2,550 in AME2020). Plotted per nucleon, it gives the curve that explains all of nuclear energy: $B/A$ climbs steeply for light nuclei, peaks near iron and nickel ($^{62}$Ni holds the record at 8.795 MeV), and slowly falls for heavy ones. Moving towards the peak releases energy, by fusing light nuclei or splitting heavy ones.

![Binding energy per nucleon against mass number for all measured nuclei, rising steeply for light nuclei to a maximum near iron-56 and slowly decreasing towards uranium-238, with the fitted liquid-drop curve on top and arrows showing that fusion and fission both move towards the maximum](/uploads/projects/decay-binding-energy.png "Binding energy per nucleon of every nucleus with a measured mass (AME2020), with the liquid drop model fitted to the data.")

The same data are fitted with the **liquid drop model**, the semi-empirical mass formula of Bethe and von Weizsäcker:

$$
B(Z,A) = a_V A - a_S A^{2/3} - a_C \frac{Z(Z-1)}{A^{1/3}} - a_A \frac{(N-Z)^2}{A} + \delta(Z,A).
$$

A least-squares fit to the 2,455 measured nuclei with $A \geq 20$ gives $a_V = 15.46$, $a_S = 17.02$, $a_C = 0.699$, $a_A = 22.62$ and $a_P = 12.17$ MeV. With five parameters, the formula reproduces binding energies of up to 2,000 MeV with an rms error of 3.2 MeV.

Placing the more than 3,000 known nuclides on a map, coloured by how they decay, shows the narrow **valley of stability** and why nuclei on either side are radioactive:

![Chart of nuclides with neutron number on the horizontal axis and proton number on the vertical axis: a narrow band of black stable nuclei bending away from the N = Z line, beta-minus emitters below it, beta-plus and electron-capture emitters above it, and alpha emitters and spontaneous fission among the heaviest nuclei](/uploads/projects/decay-chart.png "Chart of nuclides: every ground state in NUBASE2020, coloured by its main decay mode. Black squares are stable.")

## 3 The Law of Decay

Radioactive decay is random: no one can predict when a given nucleus will decay, and a nucleus does not age. All that is known is the probability of decay per unit time, the decay constant $\lambda$. From it follow the law of radioactive decay, the half-life and the activity measured by a Geiger counter:

$$
N(t) = N_0\, e^{-\lambda t}, \qquad T_{1/2} = \frac{\ln 2}{\lambda}, \qquad A(t) = \lambda N(t).
$$

The exponential law is only the *average*. The **Monte Carlo** simulation follows every nucleus individually: in each time step $\Delta t$, each surviving nucleus decays with probability $1 - e^{-\lambda \Delta t}$. The number of survivors then follows a binomial distribution, with a standard deviation $\sigma = \sqrt{N_0 e^{-\lambda t}(1 - e^{-\lambda t})}$ around the mean. With 100 nuclei the randomness is plain to see; with 10,000 it all but disappears, and with the $10^{20}$ nuclei of a real sample, the exponential law is exact for all practical purposes.

![Two panels of simulated decay curves against time in half-lives. With 100 nuclei, five random simulations wander visibly around the exponential law and its one-standard-deviation band; with 10,000 nuclei, the five simulations lie on top of the exponential curve](/uploads/projects/decay-monte-carlo.png "Monte Carlo simulations of radioactive decay. Each coloured line is one simulation; the grey band is the exponential law ± one standard deviation.")

## 4 Solving It on a Computer

To show how a computer solves equations that have no exact solution, the simplest program integrates the decay law step by step with **Euler's method**, $N_{i+1} = N_i - \lambda N_i\,\Delta t$, and compares the result with the exact exponential. Students can watch the numerical solution converge as the step shrinks, and measure that the error at a fixed time is proportional to $\Delta t$: Euler's method is first order.

![Two panels: on the left, Euler solutions with 8, 25 and 100 steps approaching the exact exponential curve; on the right, the relative error at five half-lives falling on a straight line proportional to the time step on logarithmic axes](/uploads/projects/decay-euler.png "(a) Euler's method against the exact solution. (b) The error at t = 5 half-lives is proportional to the time step.")

The same analysis shows where the method breaks. Since $N_{i+1} = (1 - \lambda\Delta t)\,N_i$, the solution oscillates in sign when $\lambda \Delta t > 1$ and blows up when $\lambda \Delta t > 2$. This matters in practice for decay chains, as the next section shows.

## 5 Decay Chains

The daughter of a decay is often radioactive itself. For a parent P decaying into a radioactive daughter D, the daughter population follows Bateman's exact solution [3]:

$$
N_D(t) = N_0\, \frac{\lambda_P}{\lambda_D - \lambda_P} \left( e^{-\lambda_P t} - e^{-\lambda_D t} \right).
$$

It captures the two kinds of radioactive equilibrium. When the parent lives far longer than the daughter, their activities become equal: **secular equilibrium**, as for thorium-232 and radium-228. When the parent lives only somewhat longer, the daughter's activity overtakes the parent's and then decays in step with it: **transient equilibrium**, as for barium-140 and lanthanum-140, where the ratio of activities settles at 1.15.

![Two panels of activity against time: on the left, the activity of radium-228 rising to equal the constant activity of its long-lived parent thorium-232; on the right, on a logarithmic scale, the activity of lanthanum-140 overtaking that of its parent barium-140 and then decaying parallel to it](/uploads/projects/decay-chains.png "Activities in two decay chains, from the exact Bateman solution: (a) secular and (b) transient equilibrium.")

The chains are computed with the exact solution rather than Euler's method on purpose. In the uranium-238 → thorium-234 chain, a time step suited to uranium (millions of years) is tens of millions of times longer than thorium's 24-day half-life, so $\lambda\Delta t$ would be enormous and Euler's method would blow up. The code also handles **branching**, where a nucleus decays in two ways, each daughter receiving its branching ratio of the parent's decays.

## 6 Nuclear Energy

From the same AME2020 masses, the energy module computes the energy released by decays and reactions, the $Q$-value:

| Process | Reaction | $Q$ (MeV) |
| --- | --- | --- |
| $\alpha$ decay | $^{238}$U → $^{234}$Th + $^{4}$He | 4.270 |
| $\alpha$ decay | $^{210}$Po → $^{206}$Pb + $^{4}$He | 5.408 |
| $\beta^-$ decay | $^{14}$C → $^{14}$N + e⁻ + ν̄ | 0.156 |
| $\beta^-$ decay | $^{3}$H → $^{3}$He + e⁻ + ν̄ | 0.0186 |
| $\beta^+$ decay | $^{22}$Na → $^{22}$Ne + e⁺ + ν | 1.821 |
| Fission | $^{235}$U + n → $^{141}$Ba + $^{92}$Kr + 3n | 173.3 |
| Fusion | $^{2}$H + $^{3}$H → $^{4}$He + n | 17.59 |
| Fusion | $^{2}$H + $^{2}$H → $^{3}$He + n | 3.27 |
| Proton–proton chain | 4 $^{1}$H → $^{4}$He + 2e⁺ + 2ν | 26.73 |

The contrast between the few electronvolts of a chemical reaction and the millions of electronvolts of a nuclear one is the whole story of nuclear energy: one kilogram of uranium-235 releases as much energy as about 3,000 tonnes of coal.

## 7 Validation

Teaching code has to be right. A suite of 13 unit tests checks the programs against exact results:

- **Decay:** the half-life, the first-order convergence of Euler's method, and a Monte Carlo average that follows $N_0 e^{-\lambda t}$ (with reproducible random seeds).
- **Chains:** Bateman's solution against a very fine numerical integration, the special case $\lambda_P = \lambda_D$ as the limit of the general formula, secular equilibrium for uranium-238 → thorium-234, and branching ratios.
- **Energies:** reference binding energies and $Q$-values from AME2020, and liquid-drop coefficients of the expected sizes.
- **Data:** the two half-life tables used by the programs agree with each other.

Every numerical value quoted in the notes, from the fitted coefficients to the $Q$-values above and the worked examples, is reproduced by the code.

## 8 The Code

Python 3 with NumPy, pandas and Matplotlib, organised as a small set of programs of increasing depth:

| Program | What it does |
| --- | --- |
| `radioactivity.py` | The simple version: pick a nuclide, solve the decay law with Euler's method, compare with the exact solution. |
| `nuclear.py` | Four simulations: a single decay and its activity, a parent–daughter chain, a chain with branching, and Monte Carlo decay. Results export to CSV, and a Jupyter widget offers sliders. |
| `nuclear_energy.py` | Binding energies from AME2020 masses, the liquid-drop fit, and $Q$-values of decays, fission and fusion. |
| `make_figures.py` | Regenerates every figure in the notes. |

The notes themselves (linked above) end with fourteen exercises and their answers, from reading a nucleus's composition to computing how many helium nuclei the Sun makes each second, or the share of uranium-235 in natural uranium two billion years ago, when the natural nuclear reactor of Oklo, in Gabon, was running.

## References

1. M. Wang, W. J. Huang, F. G. Kondev, G. Audi, and S. Naimi, "The AME 2020 atomic mass evaluation (II). Tables, graphs and references," _Chinese Physics C_ **45**, 030003 (2021).
2. F. G. Kondev, M. Wang, W. J. Huang, S. Naimi, and G. Audi, "The NUBASE2020 evaluation of nuclear physics properties," _Chinese Physics C_ **45**, 030001 (2021).
3. H. Bateman, "Solution of a system of differential equations occurring in the theory of radioactive transformations," _Proceedings of the Cambridge Philosophical Society_ **15**, 423 (1910).
4. K. S. Krane, _Introductory Nuclear Physics_ (Wiley, 1988).
