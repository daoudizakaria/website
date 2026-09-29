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
year: "2023–2026"
type: notes
rank: 6
image: "/uploads/projects/thumbs/radioactive-decay.webp"
glance:
  problem: "Help high-school and first-year university students see radioactivity happen, and understand the physics of the nucleus."
  approach: "Twenty pages of notes paired with Python programs: Monte Carlo and Euler simulations of decay, Bateman decay chains, and nuclear energies from the AME2020 and NUBASE2020 data."
  result: "13 unit tests check the programs against exact results, and every number in the notes is reproduced by the code."
  tools: "Python, NumPy, Matplotlib"
---

## About this project

The project was written for teaching, so that students can observe radioactive decay in simulation. It pairs Python programs that simulate radioactive decay and compute nuclear energies from real data with the complete set of notes below, which explain the physics behind them, from what a nucleus is made of to why the Sun shines. The notes are written for the last years of high school and the first year of university; the code is [on GitHub](https://github.com/daoudizakaria/Radioactive_Decay), and the notes can also be [downloaded as a PDF](/uploads/projects/nuclear-physics-notes.pdf).

## Abstract

These notes introduce the physics of the atomic nucleus: what nuclei are made of, why some of them are stable and others radioactive, how radioactive decay proceeds in time, and where nuclear energy comes from. They are written for students in the last years of high school and in the first year of university. The main text requires only algebra, exponentials and logarithms. Boxes marked _Going further_ use derivatives and simple differential equations, and can be skipped on a first reading. The notes come with a set of Python programs that simulate radioactive decay and compute nuclear energies from real data. The _Try it with the code_ boxes suggest experiments to do with them. All the numerical values of masses and half-lives are taken from the international evaluations AME2020 [2] and NUBASE2020 [1].

## 1 The atomic nucleus

### 1.1 A very small, very dense core

Between 1909 and 1911, Hans Geiger and Ernest Marsden, working with Ernest Rutherford, sent alpha particles onto a thin gold foil. Most of them went straight through, but a few bounced back. In 1911, Rutherford concluded that almost all the mass of an atom is concentrated in a tiny, positively charged _nucleus_, surrounded by light electrons.

The sizes involved are very different:

- an atom has a radius of about $10^{-10}$ m;

- a nucleus has a radius of a few femtometres, $1~\text{fm} = 10^{-15}$ m.

The nucleus is therefore tens of thousands of times smaller than the atom. If the atom were the size of a football stadium, the nucleus would be a marble at its centre. Yet the nucleus carries more than $99.9\%$ of the mass of the atom.

### 1.2 Protons and neutrons

A nucleus is made of two kinds of particles, called _nucleons_:

- **protons**, with electric charge $+e$, where $e = 1.602 \times 10^{-19}\,\mathrm{C}$;

- **neutrons**, which have no electric charge.

Protons and neutrons have almost the same mass, about $1836$ times the mass of the electron (Table 1).

A nucleus is described by two numbers:

- the **atomic number** $Z$ is the number of protons. It fixes the chemical element: $Z=1$ is hydrogen, $Z=6$ carbon, $Z=92$ uranium;

- the **mass number** $A$ is the total number of nucleons. The number of neutrons is $N = A - Z$.

A nucleus with given $Z$ and $A$ is called a _nuclide_. It is written ${}^{A}_{Z}\mathrm{X}$, where X is the chemical symbol. For example, ${}^{12}_{6}\mathrm{C}$ is carbon 12, with 6 protons and 6 neutrons, and ${}^{238}_{92}\mathrm{U}$ is uranium 238, with 92 protons and 146 neutrons. Since the symbol already gives $Z$, we often simply write ${}^{12}\mathrm{C}$ or ${}^{238}\mathrm{U}$.

Nuclides with the same $Z$ but different $A$ are **isotopes** of the same element. They have the same chemistry, since the chemistry is decided by the electrons, and hence by $Z$. But they can have very different nuclear properties. For example, ${}^{12}\mathrm{C}$ is stable, while ${}^{14}\mathrm{C}$ is radioactive.

### 1.3 Units: electronvolts and atomic mass units

The joule is a very large unit at the scale of a nucleus. Nuclear physicists use the **electronvolt** (eV), the energy gained by an electron accelerated through a potential difference of one volt:

$$
1~\text{eV} = 1.602 \times 10^{-19}\,\mathrm{J}, \qquad 1~\text{MeV} = 10^6~\text{eV} = 1.602 \times 10^{-13}\,\mathrm{J}.
$$

Chemical reactions involve energies of a few eV per atom. Nuclear reactions involve energies of a few MeV per nucleus, a million times more. This single fact explains why nuclear energy is so concentrated.

Masses are measured in **atomic mass units** (u), defined as one twelfth of the mass of a ${}^{12}\mathrm{C}$ atom:

$$
1~\text{u} = 1.66054 \times 10^{-27}\,\mathrm{kg}.
$$

By Einstein's relation $E = mc^2$, a mass can be expressed as an energy. The mass of 1 u corresponds to $931.494$ MeV, so we write $1~\text{u} = 931.494~\text{MeV}/c^2$.

| Particle | Charge | Mass (u) | Mass (MeV$/c^2$) |
| --- | --- | --- | --- |
| Proton | $+e$ | $1.007276$ | $938.272$ |
| Neutron | $0$ | $1.008665$ | $939.565$ |
| Electron | $-e$ | $0.000549$ | $0.511$ |

_Table 1: The constituents of atoms [3]. The neutron is heavier than the proton and the electron together, which is why a free neutron is radioactive (Section 3.4)._

### 1.4 Size and density of nuclei

Experiments show that the radius of a nucleus grows with its mass number as

$$
R \approx r_0\, A^{1/3}, \qquad r_0 \approx 1.2~\text{fm}.
\tag{1}
$$

The volume $\frac{4}{3}\pi R^3 = \frac{4}{3}\pi r_0^3 A$ is therefore proportional to $A$: each nucleon occupies the same volume, as if nucleons were packed like marbles in a bag. All nuclei have the same density,

$$
\rho \approx \frac{A \times 1~\text{u}}{\frac{4}{3}\pi r_0^3 A}
= \frac{1.66 \times 10^{-27}\,\mathrm{kg}}{\frac{4}{3}\pi\,(1.2 \times 10^{-15}\,\mathrm{m})^3} \approx 2.3 \times 10^{17}\,\mathrm{kg/m^3}.
$$

A teaspoon of nuclear matter would weigh about a billion tonnes. This is the density inside neutron stars.

### 1.5 What holds the nucleus together?

Protons repel each other through the electric (Coulomb) force, and this repulsion is enormous at such small distances. Something else must hold the nucleus together: the **strong nuclear force**. Its main features are:

- it is attractive and much stronger than the electric force at distances of about 1 fm;

- it has a very short range: it becomes negligible beyond 2 to 3 fm, so a nucleon only feels its nearest neighbours;

- it acts in the same way between protons and neutrons.

Neutrons therefore act as a “glue”: they add strong attraction without adding electric repulsion.

## 2 Mass and binding energy

### 2.1 The mass defect

A remarkable fact is that a nucleus is _lighter_ than the sum of the masses of its protons and neutrons. Consider helium 4, with 2 protons and 2 neutrons. Using atomic masses, which include the electrons [2]:

$$
\begin{aligned}
2\,m({}^{1}\mathrm{H}) + 2\,m_n &= 2 \times 1.007825 + 2 \times 1.008665 = 4.032980~\text{u},\\
m({}^{4}\mathrm{He}) &= 4.002603~\text{u}.
\end{aligned}
$$

The difference, $\Delta m = 0.030377$ u, is called the **mass defect**. It corresponds to the energy

$$
B = \Delta m\, c^2 = 0.030377 \times 931.494~\text{MeV} = 28.30~\text{MeV}.
$$

This is the **binding energy** of ${}^{4}\mathrm{He}$: the energy one must supply to break the nucleus into its four nucleons. Conversely, it is the energy released when the nucleus is formed.
> **Key idea**
>
> The binding energy of a nucleus with $Z$ protons and $N$ neutrons is
>
> $$
> B = \left[ Z\, m({}^{1}\mathrm{H}) + N\, m_n - m(\text{atom}) \right] c^2 .
> \tag{2}
> $$
>
> The larger $B/A$, the binding energy per nucleon, the more tightly bound the nucleus. Nuclear reactions release energy when they lead to more tightly bound nuclei.

Using the masses of hydrogen atoms instead of protons makes the electron masses cancel. The binding energy of the electrons themselves, at most about 1 MeV in total even for the heaviest atoms, is negligible here.

### 2.2 The curve of binding energy

Figure 1 shows $B/A$ for all the nuclei whose mass has been measured. The main features are:

- $B/A$ is about $8$ MeV for most nuclei, so the total binding energy is roughly proportional to $A$;

- $B/A$ rises steeply for light nuclei. ${}^{4}\mathrm{He}$, with $7.07$ MeV per nucleon, is unusually well bound;

- $B/A$ reaches a maximum of about $8.8$ MeV near iron and nickel. ${}^{56}\mathrm{Fe}$ has $8.790$ MeV, and the record holder is ${}^{62}\mathrm{Ni}$ with $8.795$ MeV;

- $B/A$ slowly decreases for heavy nuclei, down to $7.57$ MeV for ${}^{238}\mathrm{U}$.

![Binding energy per nucleon of all nuclei with a measured mass (AME2020 (2)). Dark points are the most bound nucleus for each mass number A. The curve is the liquid drop model of Section 2.3, fitted to the data. Merging light nuclei (fusion) or splitting heavy ones (fission) moves towards the maximum and releases energy.](/uploads/projects/decay-binding-energy.png "Figure 1: Binding energy per nucleon of all nuclei with a measured mass (AME2020 [2]). Dark points are the most bound nucleus for each mass number A. The curve is the liquid drop model of Section 2.3, fitted to the data. Merging light nuclei (fusion) or splitting heavy ones (fission) moves towards the maximum and releases energy.")

This curve is the key to nuclear energy. Moving from either end towards the maximum releases energy:

- joining two light nuclei into a heavier one is **fusion**; it powers the stars;

- splitting a heavy nucleus into two medium ones is **fission**; it powers nuclear reactors.
> **Worked example**
>
> **Why does fission release about 200 MeV?** A uranium nucleus ($A \approx 236$ after absorbing a neutron) has $B/A \approx 7.6$ MeV. It splits into two fragments of $A \approx 118$, for which $B/A \approx 8.5$ MeV. The total binding energy increases by about
>
> $$
> 236 \times (8.5 - 7.6)~\text{MeV} \approx 210~\text{MeV}.
> $$
>
> This energy is released, mostly as kinetic energy of the fragments. Compare this with the burning of one carbon atom, which releases about 4 eV: the fission of one nucleus releases about 50 million times more energy.

### 2.3 The liquid drop model

Because the strong force has a short range and all nuclei have the same density, a nucleus behaves somewhat like a drop of liquid. This picture leads to the **semi-empirical mass formula** of Bethe and von Weizsäcker, which gives the binding energy as a sum of five terms:

$$
B(Z,A) = a_V A \;-\; a_S A^{2/3} \;-\; a_C \frac{Z(Z-1)}{A^{1/3}} \;-\; a_A \frac{(N-Z)^2}{A} \;+\; \delta(Z,A).
\tag{3}
$$

Each term has a simple meaning:

- **Volume term $a_V A$.** Each nucleon is bound to its neighbours, so the binding grows like the number of nucleons.

- **Surface term $-a_S A^{2/3}$.** Nucleons at the surface have fewer neighbours and are less bound. The surface area grows like $R^2 \propto A^{2/3}$.

- **Coulomb term $-a_C Z(Z-1)/A^{1/3}$.** Each of the $Z(Z-1)/2$ pairs of protons repels, with an energy that decreases with the distance, $\propto 1/R \propto A^{-1/3}$.

- **Asymmetry term $-a_A (N-Z)^2/A$.** A quantum effect (the Pauli principle): nuclei prefer equal numbers of protons and neutrons.

- **Pairing term $\delta$.** Nucleons like to form pairs: $\delta = +a_P/\sqrt{A}$ when $Z$ and $N$ are both even, $-a_P/\sqrt{A}$ when both are odd, and $0$ when $A$ is odd.

The five coefficients are found by fitting the formula to the measured binding energies. The program `nuclear_energy.py` does exactly this with the 2455 measured nuclei with $A \geq 20$ in AME2020, and finds

$$
a_V = 15.46, \quad a_S = 17.02, \quad a_C = 0.699, \quad a_A = 22.62, \quad a_P = 12.17 \quad (\text{in MeV}).
$$

With only five parameters, the formula reproduces binding energies of up to 2000 MeV with a typical error of 3 MeV, as Figure 1 shows. Its remaining deviations, in particular for some “magic” numbers of protons or neutrons (2, 8, 20, 28, 50, 82, 126) that are especially stable, are explained by the _shell model_ of the nucleus, which is beyond these notes.
> **Try it with the code**
>
> Run `python3 nuclear_energy.py`. The program prints the binding energies of a few nuclei, fits the five coefficients of Eq. (3) and plots the curve of Figure 1. You can compute the binding energy of any nucleus in a Python session:
>
> ```
> from nuclear_energy import binding_energy
> print(binding_energy("208Pb") / 208) # MeV per nucleon
> ```

### 2.4 Stable and unstable nuclei

Of the more than 3000 nuclides observed so far, only about 250 are stable. Figure 2 places the nuclides of the NUBASE2020 evaluation on a map, the **chart of nuclides**, with $N$ horizontally and $Z$ vertically. The stable nuclei form a narrow _valley of stability_:

- for light nuclei, the stable ones have $N \approx Z$ (for example ${}^{4}\mathrm{He}$, ${}^{12}\mathrm{C}$, ${}^{16}\mathrm{O}$);

- for heavy nuclei, they have more neutrons than protons (${}^{208}\mathrm{Pb}$ has 82 protons and 126 neutrons). The extra neutrons dilute the electric repulsion between the protons, which grows like $Z^2$;

- no nucleus heavier than lead ($Z = 82$) is stable. Bismuth 209 comes close: its half-life, $2 \times 10^{19}$ years, is a billion times the age of the Universe.

Nuclei away from the valley are radioactive. They move towards it by emitting particles, as we will now see.

![Chart of nuclides: all ground states in NUBASE2020, coloured by their main decay mode (NUBASE2020 (1)). Black squares are stable nuclei. Nuclei with too many neutrons (below the valley) undergo β⁻ decay, those with too many protons undergo β⁺ decay or electron capture, and the heaviest ones undergo α decay or spontaneous fission.](/uploads/projects/decay-chart.png "Figure 2: Chart of nuclides: all ground states in NUBASE2020, coloured by their main decay mode (NUBASE2020 [1]). Black squares are stable nuclei. Nuclei with too many neutrons (below the valley) undergo β⁻ decay, those with too many protons undergo β⁺ decay or electron capture, and the heaviest ones undergo α decay or spontaneous fission.")
> **Going further (first-year university)**
>
> The liquid drop formula predicts where the valley lies. For fixed $A$, the most stable $Z$ maximizes $B(Z,A)$. Setting $\partial B/\partial Z = 0$ and neglecting the small pairing term and the difference between $Z(Z-1)$ and $Z^2$ gives
>
> $$
> Z_{\text{stable}} \approx \frac{A}{2 + (a_C/2a_A)\,A^{2/3}} = \frac{A}{2 + 0.0154\,A^{2/3}}.
> $$
>
> For $A = 238$, this gives $Z \approx 91.8$, close to uranium ($Z=92$). For light nuclei the Coulomb term is negligible and $Z \approx A/2$, that is $N \approx Z$.

## 3 Radioactivity

### 3.1 A short history

In 1896, Henri Becquerel discovered that uranium salts emit a penetrating radiation, even in the dark. Marie and Pierre Curie showed that this property, which they called _radioactivity_, belongs to the atoms themselves, and discovered two new radioactive elements, polonium and radium. Rutherford then distinguished two types of radiation by their penetrating power, which he named $\alpha$ and $\beta$. A third, much more penetrating type, discovered by Paul Villard in 1900, was later named $\gamma$. The three types also behave differently in a magnetic field, which deflects $\alpha$ and $\beta$ in opposite directions and does not deflect $\gamma$.

### 3.2 Conservation laws

In every nuclear decay or reaction, the following quantities are conserved:

- the **electric charge**: the sum of the $Z$ values (counting $-1$ for an electron and $+1$ for a positron);

- the **number of nucleons**: the sum of the $A$ values;

- the **energy**, including the mass energy $mc^2$, and the **momentum**.

The first two rules, the _displacement laws_ of Soddy and Fajans, are enough to identify the nucleus produced by a decay.

A decay is only possible if it releases energy, that is, if the total mass decreases. The energy released is the **$Q$-value**:

$$
Q = \left( m_{\text{initial}} - m_{\text{final}} \right) c^2 > 0 .
\tag{4}
$$

It is shared as kinetic energy among the products.

### 3.3 Alpha decay

An $\alpha$ particle is a helium 4 nucleus, ${}^{4}_{2}\mathrm{He}$: two protons and two neutrons. Heavy nuclei can lower their energy by emitting one:

$$
{}^{A}_{Z}\mathrm{X} \;\longrightarrow\; {}^{A-4}_{Z-2}\mathrm{Y} + {}^{4}_{2}\mathrm{He}.
$$

For example, the decay of uranium 238 is

$$
{}^{238}_{92}\mathrm{U} \rightarrow {}^{234}_{90}\mathrm{Th} + {}^{4}_{2}\mathrm{He}, \qquad Q = 4.27~\text{MeV}.
$$

Because ${}^{4}\mathrm{He}$ is so tightly bound, emitting it as a whole is much more favourable than emitting separate nucleons. By momentum conservation, the light $\alpha$ particle carries most of the energy: its kinetic energy is $Q \times (A-4)/A = 4.20$ MeV, and the thorium nucleus recoils with the remaining $0.07$ MeV. For a given transition, all the $\alpha$ particles therefore have the same energy. (Some decays lead to an excited state of the daughter, which gives a second, slightly lower $\alpha$ energy.)

Alpha particles are stopped by a sheet of paper or a few centimetres of air, but they are very harmful if the radioactive substance is inhaled or swallowed.
> **Going further (first-year university)**
>
> The $\alpha$ particle is held inside the nucleus by a barrier created by the Coulomb repulsion. For ${}^{238}\mathrm{U}$, this barrier is about 30 MeV high, much more than the 4.27 MeV available. Classically the $\alpha$ particle could never escape. Quantum mechanics allows it to _tunnel_ through the barrier with a small probability at each attempt. The tunnelling probability depends extremely strongly on the energy, which explains why the half-lives of $\alpha$ emitters range from less than a microsecond to billions of years for $\alpha$ energies between about 9 and 4 MeV (the Geiger–Nuttall law). This explanation, given by George Gamow in 1928, was one of the first triumphs of quantum mechanics.

### 3.4 Beta decay

In $\beta$ decay, a neutron turns into a proton inside the nucleus, or the reverse. The number of nucleons $A$ does not change. This transformation is caused by the _weak_ interaction.

**Beta-minus decay.** A nucleus with too many neutrons turns a neutron into a proton, emitting an electron and an antineutrino:

$$
n \longrightarrow p + e^- + \bar{\nu}_e ,
\qquad
{}^{A}_{Z}\mathrm{X} \longrightarrow {}^{A}_{Z+1}\mathrm{Y} + e^- + \bar{\nu}_e .
$$

Example: ${}^{14}_{6}\mathrm{C} \rightarrow {}^{14}_{7}\mathrm{N} + \mathrm{e}^- + \bar{\nu}_e$, with $Q = 0.156$ MeV. A free neutron is itself radioactive, with a half-life of about 10 minutes, because it is heavier than a proton and an electron together.

**Beta-plus decay.** A nucleus with too many protons turns a proton into a neutron, emitting a positron (the antiparticle of the electron) and a neutrino:

$$
{}^{A}_{Z}\mathrm{X} \longrightarrow {}^{A}_{Z-1}\mathrm{Y} + e^+ + \nu_e .
$$

Example: ${}^{22}_{11}\mathrm{Na} \rightarrow {}^{22}_{10}\mathrm{Ne} + \mathrm{e}^+ + \nu_e$. The positron quickly meets an electron and both annihilate into two $\gamma$ photons of $0.511$ MeV each. This is the principle of the PET scan in medicine.

**Electron capture.** Instead of emitting a positron, the nucleus can capture one of its own atomic electrons: $p + e^- \to n + \nu_e$. It competes with $\beta^+$ decay. For example, potassium 40 decays by $\beta^-$ in $89.3\%$ of cases and by $\beta^+$ or electron capture in $10.7\%$ [1].

**The neutrino.** In $\beta$ decay, the electron does not always have the same energy: its energies form a continuous spectrum, from zero up to $Q$. In 1930, to save energy conservation, Wolfgang Pauli proposed that an invisible, neutral and very light particle carries away the missing energy. This _neutrino_ interacts so weakly with matter that it was only detected in 1956, near a nuclear reactor.

Beta particles are stopped by a few millimetres of aluminium.

### 3.5 Gamma emission

After an $\alpha$ or $\beta$ decay, the daughter nucleus is often left in an _excited state_. Just like an atom, it returns to its ground state by emitting a photon. Because nuclear energies are thousands to millions of times larger than atomic energies, these photons are **gamma rays**, with energies from tens of keV to a few MeV:

$$
{}^{A}_{Z}\mathrm{X}^* \longrightarrow {}^{A}_{Z}\mathrm{X} + \gamma .
$$

Neither $Z$ nor $A$ changes. Gamma rays are very penetrating: absorbing most of them requires several centimetres of lead or about a metre of concrete. Some excited states live long enough to be used on their own. Technetium 99m (“m” for metastable), with a half-life of 6.0 hours, is the most used radioactive tracer in medical imaging.

### 3.6 Energy of a decay from atomic masses

Mass tables give the masses of neutral _atoms_. With atomic masses, the electrons automatically balance in $\alpha$ decay, $\beta^-$ decay and electron capture, so that Eq. (4) can be used directly. In $\beta^+$ decay, the daughter atom has one electron too many and a positron is created, so the energy available is smaller by $2 m_e c^2 = 1.022$ MeV:

$$
Q_{\beta^+} = \left[ m(\text{parent atom}) - m(\text{daughter atom}) - 2 m_e \right] c^2 .
$$

Table 2 gives the $Q$-values of several decays and reactions, computed by the program from the AME2020 masses.

| Process | Equation | $Q$ (MeV) |
| --- | --- | --- |
| $\alpha$ decay | ${}^{238}\mathrm{U} \rightarrow {}^{234}\mathrm{Th} + {}^{4}\mathrm{He}$ | $4.270$ |
| $\alpha$ decay | ${}^{210}\mathrm{Po} \rightarrow {}^{206}\mathrm{Pb} + {}^{4}\mathrm{He}$ | $5.408$ |
| $\beta^-$ decay | ${}^{14}\mathrm{C} \rightarrow {}^{14}\mathrm{N} + \mathrm{e}^- + \bar{\nu}$ | $0.156$ |
| $\beta^-$ decay | ${}^{3}\mathrm{H} \rightarrow {}^{3}\mathrm{He} + \mathrm{e}^- + \bar{\nu}$ | $0.0186$ |
| $\beta^+$ decay | ${}^{22}\mathrm{Na} \rightarrow {}^{22}\mathrm{Ne} + \mathrm{e}^+ + \nu$ | $1.821$ |
| Fission | ${}^{235}\mathrm{U} + \mathrm{n} \rightarrow {}^{141}\mathrm{Ba} + {}^{92}\mathrm{Kr} + \mathrm{3n}$ | $173.3$ |
| Fusion | ${}^{2}\mathrm{H} + {}^{3}\mathrm{H} \rightarrow {}^{4}\mathrm{He} + \mathrm{n}$ | $17.59$ |
| Fusion | ${}^{2}\mathrm{H} + {}^{2}\mathrm{H} \rightarrow {}^{3}\mathrm{He} + \mathrm{n}$ | $3.27$ |
| Proton–proton chain | $4\, {}^{1}\mathrm{H} \rightarrow {}^{4}\mathrm{He} + 2\, \mathrm{e}^+ + 2\, \nu$ | $26.73$ |

_Table 2: Energy released by some decays and reactions, computed with `nuclear_energy.py` from the AME2020 atomic masses [2]. For the proton–proton chain, the value includes the annihilation of the two positrons with two electrons._
> **Worked example**
>
> **The $\alpha$ decay of ${}^{238}\mathrm{U}$.** The atomic masses are $m({}^{238}\mathrm{U}) = 238.050787$ u, $m({}^{234}\mathrm{Th}) = 234.043600$ u and $m({}^{4}\mathrm{He}) = 4.002603$ u. Then
>
> $$
> \begin{aligned}
> \Delta m &= 238.050787 - 234.043600 - 4.002603 = 0.004584~\text{u},\\
> Q &= 0.004584 \times 931.494~\text{MeV} = 4.27~\text{MeV}.
> \end{aligned}
> $$

## 4 The law of radioactive decay

### 4.1 A random process

Radioactive decay is _random_. It is impossible to predict when a given nucleus will decay. A nucleus does not age: a uranium nucleus that has existed for 4 billion years has exactly the same chance to decay in the next second as a newly formed one. The only thing we know is the probability of decay per unit time, called the **decay constant** $\lambda$, which is characteristic of each nuclide. During a short time $\Delta t$, each nucleus has a probability $\lambda\,\Delta t$ of decaying.

If we have $N$ nuclei, the average number that decay during $\Delta t$ is therefore

$$
\Delta N = -\lambda N \,\Delta t .
\tag{5}
$$

The number of decays is proportional to the number of nuclei present: the more nuclei, the more decays.

### 4.2 Exponential decay and half-life

The solution of Eq. (5) is the **law of radioactive decay**:
> **Key idea**
>
> $$
> N(t) = N_0\, e^{-\lambda t},
> \tag{6}
> $$
>
> where $N_0$ is the number of nuclei at time $t=0$. The **half-life** $T_{1/2}$ is the time after which half of the nuclei have decayed:
>
> $$
> T_{1/2} = \frac{\ln 2}{\lambda} \approx \frac{0.693}{\lambda},
> \qquad
> N(t) = N_0 \left( \frac{1}{2} \right)^{t/T_{1/2}} .
> \tag{7}
> $$

After one half-life, $N_0/2$ nuclei remain; after two, $N_0/4$; after three, $N_0/8$; and so on (Figure 3). The half-life does not depend on how many nuclei there are, nor on the temperature, the pressure or the chemical state. Half-lives range from less than $10^{-20}$ s to more than $10^{24}$ years. Table 3 gives some examples.

![Exponential decay: the number of nuclei is halved after each half-life.](/uploads/projects/decay-law.png "Figure 3: Exponential decay: the number of nuclei is halved after each half-life.")

| Nuclide | Decay | Half-life | Where you meet it |
| --- | --- | --- | --- |
| ${}^{15}\mathrm{O}$ | $\beta^+$ | $122$ s | PET scans of blood flow |
| ${}^{18}\mathrm{F}$ | $\beta^+$ | $109.7$ min | PET scans |
| ${}^{99m}\mathrm{Tc}$ | $\gamma$ | $6.01$ h | Medical imaging |
| ${}^{222}\mathrm{Rn}$ | $\alpha$ | $3.82$ days | Natural radon gas in houses |
| ${}^{131}\mathrm{I}$ | $\beta^-$ | $8.02$ days | Thyroid treatment, reactor accidents |
| ${}^{60}\mathrm{Co}$ | $\beta^-$ | $5.27$ years | Radiotherapy, sterilization |
| ${}^{3}\mathrm{H}$ (tritium) | $\beta^-$ | $12.32$ years | Fusion fuel, luminous watches |
| ${}^{137}\mathrm{Cs}$ | $\beta^-$ | $30.04$ years | Nuclear waste, fallout |
| ${}^{241}\mathrm{Am}$ | $\alpha$ | $432.6$ years | Smoke detectors |
| ${}^{226}\mathrm{Ra}$ | $\alpha$ | $1600$ years | Discovered by the Curies |
| ${}^{14}\mathrm{C}$ | $\beta^-$ | $5700$ years | Radiocarbon dating |
| ${}^{235}\mathrm{U}$ | $\alpha$ | $7.04 \times 10^8$ years | Nuclear fuel |
| ${}^{40}\mathrm{K}$ | $\beta^-$, $\beta^+$/EC | $1.248 \times 10^9$ years | Present in our body |
| ${}^{238}\mathrm{U}$ | $\alpha$ | $4.463 \times 10^9$ years | Natural uranium |

_Table 3: Half-lives of some radioactive nuclides (NUBASE2020 [1])._
> **Going further (first-year university)**
>
> When $\Delta t \to 0$, Eq. (5) becomes the differential equation
>
> $$
> \frac{dN}{dt} = -\lambda N .
> $$
>
> Separating the variables, $dN/N = -\lambda\,dt$, and integrating from $0$ to $t$ gives $\ln(N/N_0) = -\lambda t$, which is Eq. (6). Setting $N = N_0/2$ gives $e^{-\lambda T_{1/2}} = 1/2$, so $T_{1/2} = \ln 2/\lambda$.
>
> The **mean lifetime** of a nucleus is the average time it lives before decaying:
>
> $$
> \tau = \frac{1}{N_0}\int_0^\infty t \left| \frac{dN}{dt} \right| dt = \int_0^\infty \lambda t\, e^{-\lambda t}\,dt = \frac{1}{\lambda} = \frac{T_{1/2}}{\ln 2} \approx 1.44\, T_{1/2}.
> $$

### 4.3 Activity

What a Geiger counter measures is not the number of nuclei but the number of decays per second, called the **activity**:

$$
A(t) = \lambda N(t) = A_0\, e^{-\lambda t}.
\tag{8}
$$

The activity decreases with the same half-life as the number of nuclei. Its unit is the **becquerel**: $1~\text{Bq} = 1$ decay per second. An older unit is the curie, $1~\text{Ci} = 3.7 \times 10^{10}\,\mathrm{Bq}$, originally defined as the activity of one gram of radium.
> **Worked example**
>
> **Activity of one gram of radium 226.** The number of atoms is
>
> $$
> N = \frac{1~\text{g}}{226~\text{g/mol}} \times 6.022 \times 10^{23}\,\mathrm{mol^{-1}} = 2.66 \times 10^{21}.
> $$
>
> The half-life is $1600$ years $= 1600 \times 3.156 \times 10^{7}\,\mathrm{s} = 5.05 \times 10^{10}\,\mathrm{s}$, so $\lambda = 0.693/5.05 \times 10^{10}\,\mathrm{s} = 1.37 \times 10^{-11}\,\mathrm{s^{-1}}$, and
>
> $$
> A = \lambda N = 3.66 \times 10^{10}\,\mathrm{Bq} \approx 1~\text{Ci}.
> $$
> **Worked example**
>
> **We are radioactive.** A human body of 70 kg contains about 140 g of potassium, of which $0.0117\%$ is radioactive ${}^{40}\mathrm{K}$ [1]. This makes
>
> $$
> N = \frac{140}{39.1} \times 6.022 \times 10^{23} \times 1.17 \times 10^{-4} = 2.5 \times 10^{20}
> $$
>
> nuclei of ${}^{40}\mathrm{K}$. With $T_{1/2} = 1.248 \times 10^{9}$ years $= 3.94 \times 10^{16}\,\mathrm{s}$, the activity is $A = (0.693/3.94 \times 10^{16}\,\mathrm{s}) \times 2.5 \times 10^{20} \approx 4400$ Bq. About 4400 potassium nuclei decay in your body every second.

### 4.4 Randomness and fluctuations

The exponential law (6) describes the _average_ behaviour. With a small number of nuclei, the actual number fluctuates around it. Since each nucleus decays independently, the number that survive until time $t$ follows a binomial distribution, with mean $N_0 e^{-\lambda t}$ and standard deviation

$$
\sigma = \sqrt{N_0\, e^{-\lambda t}\left(1 - e^{-\lambda t}\right)} .
$$

The relative fluctuation $\sigma/N$ decreases like $1/\sqrt{N_0}$: with 100 nuclei the fluctuations are clearly visible, while with $10^{20}$ nuclei, as in any macroscopic sample, they are completely negligible (Figure 4).

![Monte Carlo simulations of radioactive decay. Each coloured line is one simulation in which every nucleus decays at random. The grey band shows the exponential law ± one standard deviation. With 100 nuclei (left) the random fluctuations are large; with 10⁴ nuclei (right) they are barely visible.](/uploads/projects/decay-monte-carlo.png "Figure 4: Monte Carlo simulations of radioactive decay. Each coloured line is one simulation in which every nucleus decays at random. The grey band shows the exponential law ± one standard deviation. With 100 nuclei (left) the random fluctuations are large; with 10⁴ nuclei (right) they are barely visible.")
> **Try it with the code**
>
> Run `python3 nuclear.py` and choose simulation 4, _Monte Carlo decay_. The program follows each nucleus: during each time step $\Delta t$, every remaining nucleus decays with probability $p = 1 - e^{-\lambda \Delta t}$. Try $N_0 = 10$, $100$ and $10\,000$ with 5 simulations each. How long does it take for the last nucleus to decay? Is it always the same?

### 4.5 Solving the decay law with a computer: Euler's method

The decay law can be solved step by step, which is how a computer solves equations that have no exact solution. Starting from $N_0$, we apply Eq. (5) repeatedly with a small time step $\Delta t$:

$$
N_{i+1} = N_i - \lambda N_i\, \Delta t, \qquad t_{i+1} = t_i + \Delta t .
$$

This is **Euler's method**. It is exact only in the limit $\Delta t \to 0$. Figure 5 compares it with the exact solution: with only 8 steps for 5 half-lives, the result is poor; with 100 steps it is already very close. The error at a given time is proportional to the step size: halving $\Delta t$ halves the error. Euler's method is said to be of _first order_.

![(a) Euler's method compared with the exact solution N₀ e⁻λ t. (b) The relative error at t = 5 T_1/2 is proportional to the time step Δ t.](/uploads/projects/decay-euler.png "Figure 5: (a) Euler's method compared with the exact solution N₀ e⁻λ t. (b) The relative error at t = 5 T_1/2 is proportional to the time step Δ t.")
> **Try it with the code**
>
> Run `python3 radioactivity.py`, choose a nuclide and compare Euler's method with the exact solution for 10, 100 and $100\,000$ steps. The program prints the final number of nuclei obtained both ways. Program `nuclear.py`, simulation 1, also shows the activity.
> **Going further (first-year university)**
>
> Euler's method can even become _unstable_. Since $N_{i+1} = (1 - \lambda \Delta t)\,N_i$, the numbers oscillate in sign if $\lambda \Delta t > 1$, and blow up if $\lambda \Delta t > 2$. This is a real danger for decay chains, where parent and daughter can have very different half-lives (Section 5). For ${}^{238}\mathrm{U}$ $\to$ ${}^{234}\mathrm{Th}$, a time step adapted to uranium (millions of years) is tens of millions of times larger than the half-life of thorium (24 days). For this reason, the programs use the exact solutions for decay chains.

## 5 Decay chains

### 5.1 Parent and daughter

The daughter of a radioactive decay is often radioactive itself. In the simplest chain, a parent P decays into a daughter D, which decays into a stable nucleus:

$$
\text{P} \xrightarrow{\;\lambda_P\;} \text{D} \xrightarrow{\;\lambda_D\;} \text{stable}.
$$

The parent follows the usual law, $N_P(t) = N_0 e^{-\lambda_P t}$. The daughter is produced by the decays of the parent and destroyed by its own decays:

$$
\Delta N_D = \left( \lambda_P N_P - \lambda_D N_D \right) \Delta t .
\tag{9}
$$

If there are no daughter nuclei at $t = 0$, the solution is

$$
N_D(t) = N_0\, \frac{\lambda_P}{\lambda_D - \lambda_P} \left( e^{-\lambda_P t} - e^{-\lambda_D t} \right).
\tag{10}
$$

Harry Bateman gave the general solution for chains of any length in 1910 [4].
> **Going further (first-year university)**
>
> Check that Eq. (10) solves $dN_D/dt = \lambda_P N_P - \lambda_D N_D$ with $N_D(0) = 0$. When $\lambda_D = \lambda_P = \lambda$, the formula has the form $0/0$. Taking the limit gives $N_D(t) = N_0\, \lambda t\, e^{-\lambda t}$.

### 5.2 Radioactive equilibrium

The behaviour of the chain depends on which of the two nuclides lives longer (Figure 6).

**Secular equilibrium ($T_P \gg T_D$).** When the parent lives much longer than the daughter, the daughter accumulates until it decays as fast as it is produced. After a few daughter half-lives, $e^{-\lambda_D t}$ becomes negligible and

$$
\lambda_D N_D = \lambda_P N_P, \qquad\text{that is,}\qquad A_D = A_P .
$$

The two activities are equal. Figure 6(a) shows this for thorium 232 ($1.40 \times 10^{10}$ years) and its daughter radium 228 ($5.75$ years). In a uranium ore that has not been disturbed for millions of years, all the members of the uranium decay series have the same activity.

**Transient equilibrium ($T_P > T_D$).** When the parent lives longer than the daughter, but not by much, the daughter activity first grows, overtakes the parent activity and then decreases with the half-life of the _parent_. The ratio of activities becomes constant:

$$
\frac{A_D}{A_P} = \frac{\lambda_D}{\lambda_D - \lambda_P} = \frac{T_P}{T_P - T_D} .
$$

Figure 6(b) shows barium 140 ($12.75$ days) and lanthanum 140 ($40.3$ hours), for which $A_D/A_P \to 1.15$. The same principle is used in hospitals: technetium 99m is “milked” from a generator containing its parent, molybdenum 99 (66 hours).

**No equilibrium ($T_P < T_D$).** If the daughter lives longer than the parent, the parent disappears first and the daughter then decays with its own half-life.

![Activities in two decay chains, computed with the exact solution (10). (a) Secular equilibrium: the activity of ²²⁸Ra grows until it equals that of its very long-lived parent ²³²Th. (b) Transient equilibrium: the activity of ¹⁴⁰La overtakes that of its parent ¹⁴⁰Ba, then both decay with the parent's half-life.](/uploads/projects/decay-chains.png "Figure 6: Activities in two decay chains, computed with the exact solution (10). (a) Secular equilibrium: the activity of ²²⁸Ra grows until it equals that of its very long-lived parent ²³²Th. (b) Transient equilibrium: the activity of ¹⁴⁰La overtakes that of its parent ¹⁴⁰Ba, then both decay with the parent's half-life.")

### 5.3 Natural decay series and branching

Uranium 238 does not become stable in one step. It goes through a chain of 14 decays, 8 $\alpha$ and 6 $\beta^-$, which ends with stable lead 206. The number of $\alpha$ decays follows from the mass numbers: each $\alpha$ decay reduces $A$ by 4 and $238 - 206 = 32 = 8 \times 4$. The $\alpha$ decays reduce $Z$ by 16, from 92 to 76, and 6 $\beta^-$ decays bring it back to 82. Radon 222, a gas produced in this series, seeps out of the ground and is the main source of natural radiation exposure in many regions.

Some nuclides can decay in two different ways; this is called **branching**. For example, bismuth 212 decays by $\beta^-$ in $64\%$ of cases and by $\alpha$ in $36\%$ [1]. Each daughter then receives the corresponding fraction, the _branching ratio_, of the parent decays.
> **Try it with the code**
>
> In `python3 nuclear.py`, simulation 2 follows a parent–daughter chain. The program suggests the daughters of ${}^{238}\mathrm{U}$, ${}^{235}\mathrm{U}$ and ${}^{232}\mathrm{Th}$, and you can enter any other half-life. Choose ${}^{232}\mathrm{Th}$ and a total time of 50 years to see the secular equilibrium building up. Simulation 3 adds a branching into two daughters.

## 6 Applications of radioactivity

### 6.1 Radiocarbon dating

Carbon 14 is continuously produced in the upper atmosphere, when neutrons from cosmic rays hit nitrogen: ${}^{14}\mathrm{N} + \mathrm{n} \rightarrow {}^{14}\mathrm{C} + \mathrm{p}$. It mixes with ordinary carbon in the carbon dioxide of the air, and is absorbed by plants and animals. As long as an organism is alive, the proportion of ${}^{14}\mathrm{C}$ in its carbon stays the same as in the atmosphere, about one atom in $10^{12}$, which gives an activity of about $0.23$ Bq per gram of carbon. When the organism dies, it stops exchanging carbon and its ${}^{14}\mathrm{C}$ decays with a half-life of 5700 years (Figure 7).

![Fraction of ¹⁴C left in a sample as a function of the time since the death of the organism.](/uploads/projects/decay-carbon14.png "Figure 7: Fraction of ¹⁴C left in a sample as a function of the time since the death of the organism.")
> **Worked example**
>
> **Dating a bone.** A piece of bone has an activity of $0.058$ Bq per gram of carbon, a quarter of the activity of living matter. Two half-lives have passed, so the animal died $2 \times 5700 = 11\,400$ years ago. In general, from $A = A_0 (1/2)^{t/T_{1/2}}$,
>
> $$
> t = T_{1/2}\, \frac{\ln(A_0/A)}{\ln 2}.
> $$
>
> The method works for ages up to about 50 000 years. Beyond that, too little ${}^{14}\mathrm{C}$ is left to be measured.

Longer-lived nuclides date older objects. The decays of ${}^{238}\mathrm{U}$ and ${}^{235}\mathrm{U}$ into lead are used to date rocks, and gave the age of the Earth: 4.5 billion years.

### 6.2 Medicine and industry

- **Medical imaging.** A radioactive tracer is injected and its $\gamma$ rays are detected from outside the body: technetium 99m for bone and heart scans, fluorine 18 attached to glucose for PET scans of tumours.

- **Radiotherapy.** The radiation of cobalt 60 or of particle accelerators is used to destroy tumours; iodine 131, which concentrates in the thyroid, treats thyroid cancers.

- **Industry and everyday life.** Sterilization of medical equipment, measurement of thicknesses, and smoke detectors, in which the $\alpha$ particles of americium 241 ionize the air.

### 6.3 Radiation and health

Radiation from radioactive decay is _ionizing_: it can tear electrons from atoms and damage living cells, in particular their DNA. The effect on the body is measured by the _effective dose_, in sieverts (Sv). We are all exposed to natural radiation, from radon, cosmic rays, the rocks and our own potassium 40: on average about $2.4$ mSv per year worldwide [5]. The three basic rules of radiation protection are _time_ (stay close to a source for as short a time as possible), _distance_ (the intensity decreases as $1/r^2$) and _shielding_ (paper for $\alpha$, aluminium for $\beta$, lead or concrete for $\gamma$).

## 7 Nuclear energy: fission and fusion

### 7.1 Fission

In 1938, Otto Hahn and Fritz Strassmann found barium among the products of uranium bombarded with neutrons. Lise Meitner and Otto Frisch understood that the uranium nucleus had split in two: this was the discovery of **fission**. A typical reaction is

$$
{}^{235}_{92}\mathrm{U} + {}^{1}_{0}\mathrm{n} \rightarrow {}^{141}_{56}\mathrm{Ba} + {}^{92}_{36}\mathrm{Kr} + 3\, {}^{1}_{0}\mathrm{n}, \qquad Q = 173~\text{MeV}.
$$

Many other pairs of fragments are possible. Including the energy released later by the radioactive decays of the fragments, each fission releases about 200 MeV.

The key point is that each fission releases 2 or 3 neutrons (about 2.4 on average), which can cause new fissions: a **chain reaction**. In a nuclear reactor, the chain reaction is controlled so that, on average, exactly one neutron per fission causes a new fission. This requires:

- a _moderator_ (water or graphite), which slows down the neutrons, since slow neutrons are much more likely to cause the fission of ${}^{235}\mathrm{U}$;

- _control rods_ made of neutron-absorbing materials such as boron or cadmium, which regulate the number of neutrons;

- fuel _enriched_ in ${}^{235}\mathrm{U}$: natural uranium contains only $0.72\%$ of it, and most reactors use 3 to 5%.

### 7.2 Fusion

Fusion joins two light nuclei. The most accessible reaction on Earth is that of deuterium and tritium, two isotopes of hydrogen:

$$
{}^{2}_{1}\mathrm{H} + {}^{3}_{1}\mathrm{H} \rightarrow {}^{4}_{2}\mathrm{He} + {}^{1}_{0}\mathrm{n}, \qquad Q = 17.6~\text{MeV}.
$$

By momentum conservation, the neutron carries $4/5$ of this energy, 14.1 MeV.

Fusion is difficult because the two nuclei repel each other. To touch, at a distance of about 3 fm, they must overcome an electric potential energy

$$
E_C = \frac{1}{4\pi\varepsilon_0}\frac{e^2}{r} = \frac{1.44~\text{MeV\,fm}}{3.2~\text{fm}} \approx 0.45~\text{MeV}.
$$

Thermal energies are of order $k_B T$, and $k_B T = 0.45$ MeV would require a temperature of 5 billion kelvin. In practice, thanks to quantum tunnelling and to the fastest particles of the thermal distribution, fusion occurs at temperatures of about 150 million kelvin in experimental reactors such as ITER, and 15 million kelvin in the core of the Sun.

**The energy of the Sun.** The Sun converts hydrogen into helium through the _proton–proton chain_, whose overall result is

$$
4\, {}^{1}\mathrm{H} \rightarrow {}^{4}\mathrm{He} + 2\, \mathrm{e}^+ + 2\, \nu_e, \qquad Q = 26.7~\text{MeV}.
$$

About $0.7\%$ of the mass of the hydrogen is converted into energy. A small part of it is carried away by the neutrinos, and the rest heats the Sun.

### 7.3 Comparing energy sources

| Fuel | Energy per reaction | Energy per kilogram of fuel |
| --- | --- | --- |
| Coal (burning) | about 4 eV | about $3 \times 10^{7}$ J |
| Uranium 235 (fission) | about 200 MeV | $8 \times 10^{13}$ J |
| Deuterium–tritium (fusion) | 17.6 MeV | $3.4 \times 10^{14}$ J |

_Table 4: Energy released per kilogram of fuel. For fission, $200~\text{MeV}$ per nucleus of 235 u; for fusion, $17.6~\text{MeV}$ per 5 u of fuel._

One kilogram of uranium 235 releases as much energy as about 3000 tonnes of coal (Table 4). This is the ratio of nuclear to chemical energies: MeV against eV.

## 8 Simulating with Python

The programs that come with these notes are in the repository [daoudizakaria/Radioactive_Decay](https://github.com/daoudizakaria/Radioactive_Decay). They require Python 3 with the `numpy`, `pandas` and `matplotlib` libraries (`pip install -r requirements.txt`).

- **`radioactivity.py`**: The simplest program. It solves the decay law with Euler's method for a nuclide of your choice and compares it with the exact solution.

- **`nuclear.py`**: The complete program, with four simulations: (1) decay of a nuclide and its activity, (2) a parent–daughter chain, (3) a chain with branching, (4) Monte Carlo decay. The results can be exported to a CSV file, for example to be analysed in a spreadsheet.

- **`nuclear_energy.py`**: Binding energies, the liquid drop model and $Q$-values, computed from the AME2020 masses.

- **`make_figures.py`**: Produces all the figures of these notes.

The half-lives are in `nuclides_data.py` and `nuclides.csv`; the masses and decay modes of all known nuclides are in the folder `data`. The tests in `tests/` check the code against exact results (`python3 -m unittest discover tests`).

## 9 Exercises

Exercises marked ★ use the _Going further_ material. Answers are given at the end.

1. **Composition.** Give the number of protons, neutrons and nucleons of ${}^{14}\mathrm{C}$, ${}^{56}\mathrm{Fe}$, ${}^{131}\mathrm{I}$ and ${}^{235}\mathrm{U}$.

2. **Size of nuclei.** Using Eq. (1), compute the radii of ${}^{4}\mathrm{He}$, ${}^{56}\mathrm{Fe}$ and ${}^{238}\mathrm{U}$. How many times larger in volume is ${}^{238}\mathrm{U}$ than ${}^{4}\mathrm{He}$?

3. **Binding energy of the deuteron.** The atomic mass of deuterium ${}^{2}\mathrm{H}$ is $2.014102$ u. Using the masses of the hydrogen atom ($1.007825$ u) and of the neutron ($1.008665$ u), compute the binding energy of the deuteron and its binding energy per nucleon. Compare with ${}^{4}\mathrm{He}$.

4. **Decay equations.** Identify the nucleus X in the following decays and name their type: (a) ${}^{226}_{88}\mathrm{Ra} \rightarrow \mathrm{X} + {}^{4}_{2}\mathrm{He}$; (b) ${}^{131}_{53}\mathrm{I} \rightarrow \mathrm{X} + \mathrm{e}^- + \bar{\nu}_e$; (c) ${}^{18}_{9}\mathrm{F} \rightarrow \mathrm{X} + \mathrm{e}^+ + \nu_e$; (d) ${}^{60}_{28}\mathrm{Ni}^* \to \mathrm{X} + \gamma$.

5. **Iodine 131.** After the Chernobyl and Fukushima accidents, iodine 131 ($T_{1/2} = 8.02$ days) was a major concern during the first weeks. What fraction of it is left after 24 days? After 80 days?

6. **Activity of a source.** A cobalt 60 source used in radiotherapy has an activity of $2 \times 10^{14}\,\mathrm{Bq}$. What is its activity after 10 years? Its half-life is 5.27 years. How many ${}^{60}\mathrm{Co}$ atoms does it contain initially?

7. **Radiocarbon.** A piece of wood from an archaeological site has an activity of $0.16$ Bq per gram of carbon, while living wood has $0.23$ Bq/g. How old is it?

8. **Chain of decays.** How many $\alpha$ and $\beta^-$ decays transform ${}^{232}\mathrm{Th}$ into stable ${}^{208}\mathrm{Pb}$?

9. **Energy of the Sun.** The Sun radiates $3.8 \times 10^{26}\,\mathrm{W}$. Using the $Q$-value of the proton–proton chain, estimate how many helium nuclei it produces per second, and the mass of hydrogen it consumes per second.

10. **A natural nuclear reactor.** Today, natural uranium contains $0.7204\%$ of ${}^{235}\mathrm{U}$ and $99.2742\%$ of ${}^{238}\mathrm{U}$. Because ${}^{235}\mathrm{U}$ decays faster, it was more abundant in the past. Compute the proportion of ${}^{235}\mathrm{U}$ two billion years ago. (About 1.7 to 2 billion years ago, natural chain reactions took place in the uranium deposit of Oklo, in Gabon.)

11. ★ **Mean life.** Show that the mean lifetime of a nucleus is $\tau = 1/\lambda$ and that, after a time $\tau$, a fraction $1/e \approx 37\%$ of the nuclei remain.

12. ★ **Most stable isobar.** Using the liquid drop formula with the coefficients of Section 2.3, find the most stable value of $Z$ for $A = 56$ and for $A = 208$. Compare with iron and lead.

13. ★ **Maximum of the daughter.** In the chain P $\to$ D, show from Eq. (10) that the number of daughter nuclei is maximum at

    $$
    t_{\max} = \frac{\ln(\lambda_D/\lambda_P)}{\lambda_D - \lambda_P}
    $$

    and compute it for ${}^{140}\mathrm{Ba}$ $\to$ ${}^{140}\mathrm{La}$. Show that at this time the activities of parent and daughter are equal.

14. ★ **Stability of Euler's method.** Show that Euler's method gives $N_i = N_0 (1 - \lambda \Delta t)^i$. For which values of $\lambda \Delta t$ does $N_i$ decrease without changing sign? Check your answer with `radioactivity.py`.

### Answers

1. ${}^{14}\mathrm{C}$: 6, 8, 14. ${}^{56}\mathrm{Fe}$: 26, 30, 56. ${}^{131}\mathrm{I}$: 53, 78, 131. ${}^{235}\mathrm{U}$: 92, 143, 235.

2. $1.9$ fm, $4.6$ fm and $7.4$ fm. The volume ratio is $238/4 \approx 60$.

3. $\Delta m = 0.002388$ u, $B = 2.22$ MeV, $B/A = 1.11$ MeV, more than six times less than ${}^{4}\mathrm{He}$ (7.07 MeV): the deuteron is very weakly bound.

4. (a) ${}^{222}\mathrm{Rn}$, $\alpha$ decay. (b) ${}^{131}\mathrm{Xe}$, $\beta^-$ decay. (c) ${}^{18}\mathrm{O}$, $\beta^+$ decay. (d) ${}^{60}\mathrm{Ni}$, $\gamma$ emission.

5. 24 days is 3 half-lives: $1/8 = 12.5\%$. After 80 days (about 10 half-lives), $(1/2)^{80/8.02} \approx 0.1\%$.

6. $A = 2 \times 10^{14}\,\mathrm{Bq} \times (1/2)^{10/5.27} = 5.4 \times 10^{13}\,\mathrm{Bq}$. $N = A/\lambda = 2 \times 10^{14}\,\mathrm{Bq} \times 1.66 \times 10^{8}\,\mathrm{s}/0.693 = 4.8 \times 10^{22}$ atoms, about 4.8 g of cobalt 60.

7. $t = 5700 \times \ln(0.23/0.16)/\ln 2 \approx 3000$ years.

8. $232 - 208 = 24 = 6 \times 4$: 6 $\alpha$ decays, which lower $Z$ from 90 to 78; 4 $\beta^-$ decays bring it to 82.

9. Each chain releases $26.7~\text{MeV} = 4.28 \times 10^{-12}\,\mathrm{J}$, so $3.8 \times 10^{26}\,\mathrm{W}/4.28 \times 10^{-12}\,\mathrm{J} = 8.9 \times 10^{37}$ helium nuclei per second. They consume $4 \times 8.9 \times 10^{37} \times 1.67 \times 10^{-27}\,\mathrm{kg} \approx 6 \times 10^{11}\,\mathrm{kg}$ of hydrogen per second, 600 million tonnes.

10. With $\lambda_{235} = \ln 2 / 7.04\times10^8~\text{y}$ and $\lambda_{238} = \ln 2 / 4.463\times10^9~\text{y}$, the ratio ${}^{235}\mathrm{U}$/${}^{238}\mathrm{U}$ was $0.007257 \times e^{(\lambda_{235}-\lambda_{238}) \times 2\times10^9~\text{y}} = 0.0381$, that is $3.7\%$ of ${}^{235}\mathrm{U}$, comparable to the fuel of modern reactors.

11. The integral is computed by parts. $N(\tau)/N_0 = e^{-1}$.

12. $Z = 56/(2 + 0.0154 \times 56^{2/3}) = 25.2$, close to iron ($Z = 26$). $Z = 208/(2 + 0.0154 \times 208^{2/3}) = 81.8$, close to lead ($Z = 82$).

13. Set $dN_D/dt = 0$. For ${}^{140}\mathrm{Ba}$ $\to$ ${}^{140}\mathrm{La}$, $t_{\max} = 5.7$ days. At $t_{\max}$, $dN_D/dt = \lambda_P N_P - \lambda_D N_D = 0$, so $A_P = A_D$ (see Figure 6b).

14. $N_i$ decreases without changing sign when $0 < \lambda \Delta t < 1$; it oscillates for $1 < \lambda\Delta t < 2$ and blows up for $\lambda\Delta t > 2$.

## Validation of the code

A suite of 13 unit tests checks the programs against exact results:

- **Decay:** the half-life, the first-order convergence of Euler's method, and a Monte Carlo average that follows $N_0 e^{-\lambda t}$ (with reproducible random seeds).
- **Chains:** Bateman's solution against a very fine numerical integration, the special case $\lambda_P = \lambda_D$ as the limit of the general formula, secular equilibrium for uranium-238 → thorium-234, and branching ratios.
- **Energies:** reference binding energies and $Q$-values from AME2020, and liquid-drop coefficients of the expected sizes.
- **Data:** the two half-life tables used by the programs agree with each other.

Every numerical value quoted in the notes, from the fitted coefficients to the $Q$-values above and the worked examples, is reproduced by the code.

## References

1. F. G. Kondev, M. Wang, W. J. Huang, S. Naimi, and G. Audi, “The NUBASE2020 evaluation of nuclear physics properties,” _Chinese Physics C_ **45**, 030001 (2021).
2. M. Wang, W. J. Huang, F. G. Kondev, G. Audi, and S. Naimi, “The AME 2020 atomic mass evaluation (II). Tables, graphs and references,” _Chinese Physics C_ **45**, 030003 (2021).
3. E. Tiesinga, P. J. Mohr, D. B. Newell, and B. N. Taylor, “CODATA recommended values of the fundamental physical constants: 2018,” _Reviews of Modern Physics_ **93**, 025010 (2021).
4. H. Bateman, “Solution of a system of differential equations occurring in the theory of radioactive transformations,” _Proceedings of the Cambridge Philosophical Society_ **15**, 423 (1910).
5. UNSCEAR, _Sources and Effects of Ionizing Radiation_, UNSCEAR 2008 Report to the General Assembly, Volume I, United Nations (2010).
6. K. S. Krane, _Introductory Nuclear Physics_, Wiley (1988).
7. J.-L. Basdevant, J. Rich, and M. Spiro, _Fundamentals in Nuclear Physics: From Nuclear Structure to Cosmology_, Springer (2005).
8. B. R. Martin and G. Shaw, _Nuclear and Particle Physics: An Introduction_, 3rd ed., Wiley (2019).

For further reading, Krane [6] is a classic undergraduate textbook; Basdevant, Rich and Spiro [7] and Martin and Shaw [8] are more modern introductions.