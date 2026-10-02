---
slug: hawking-radiation-review/section-8
title: "Analogue black holes"
date: 2024-12-01
summary: "Sound in a moving fluid as a field on a curved spacetime, what analogue horizons can test, and the condensate experiments that report spontaneous emission."
series: hawking-radiation-review
part: section-8
order: 8
kicker: "Lecture 8"
---
Let a fluid in which sound travels at speed $c_{s}$ flow through a constriction, and suppose that somewhere downstream its velocity rises past $c_{s}$. Sound emitted beyond that point is swept downstream and never returns. The point at which the flow becomes supersonic is a horizon for sound. If the velocity gradient there is $1\,\mathrm{s^{-1}}$, the theory of Lecture [3](/research/hawking-radiation-review/section-3) assigns it a temperature of $1.2\times 10^{-12}\,\mathrm{K}$.

That this number exists at all follows from Section [4.5](/research/hawking-radiation-review/section-4#45-rigorous-results-and-universality): the Hawking effect is kinematical. It needs a quantum field on an effective Lorentzian geometry with a horizon, and nothing in the derivation uses the Einstein equations. Any system whose small perturbations see such a geometry should therefore radiate, and experiments built on this idea are the only tests of the Hawking mechanism that we have.

## 8.1 Acoustic spacetimes

The idea is due to Unruh (1981).[^1] Consider an inviscid, barotropic fluid in irrotational flow, with density $\rho$, pressure $p(\rho)$, speed of sound $c_{s}^{2} = {\mathrm{d}} p/{\mathrm{d}}\rho$, and velocity $\mathbf{v} = \nabla\psi$. The equations of motion are the continuity equation and the Bernoulli equation,

$$
\partial_{t}\rho + \nabla\cdot(\rho\nabla\psi) = 0,
\qquad
\partial_{t}\psi + \tfrac{1}{2}(\nabla\psi)^{2} + h(\rho) = 0,
\tag{8.1}
$$

where $h$ is the specific enthalpy, ${\mathrm{d}} h = {\mathrm{d}} p/\rho$, and external forces have been omitted.

We linearise around a background flow, $\rho = \rho_{0} + \rho_{1}$ and $\psi = \psi_{0} + \psi_{1}$, with $\mathbf{v}_{0} = \nabla\psi_{0}$. Since $h$ changes by $(c_{s}^{2}/\rho_{0})\rho_{1}$, the linearised Bernoulli equation gives $\rho_{1} = -(\rho_{0}/c_{s}^{2})(\partial_{t}\psi_{1} + \mathbf{v}_{0}\cdot\nabla\psi_{1})$, the bracket being the time derivative along the background flow. Substituting this into the linearised continuity equation leaves a single second-order equation for $\psi_{1}$, which is the wave equation $\partial_{\mu}(\sqrt{-g}\,g^{\mu\nu}\partial_{\nu}\psi_{1}) = 0$ of a massless scalar field on the effective metric

$$
{\mathrm{d}} s^{2} = \frac{\rho_{0}}{c_{s}}\left[-\left(c_{s}^{2} - v_{0}^{2}\right){\mathrm{d}} t^{2} - 2\,\mathbf{v}_{0}\cdot{\mathrm{d}}\mathbf{x}\,{\mathrm{d}} t + {\mathrm{d}}\mathbf{x}\cdot{\mathrm{d}}\mathbf{x}\right].
\tag{8.2}
$$

Problem 1 asks for the verification; its only non-mechanical step is finding the inverse metric.

Sound in a moving fluid thus propagates exactly like a massless field on a curved spacetime. The prefactor $\rho_{0}/c_{s}$ is a conformal factor and does not affect the sound cones. The bracket is familiar: with $c_{s} = 1$ and an inflow $\mathbf{v}_{0} = -(2M/r)^{1/2}\,\hat{\mathbf{r}}$ it is the Schwarzschild metric in Painlevé–Gullstrand coordinates.

Where the flow becomes supersonic, sound can no longer propagate upstream, and the surface on which the normal component of the flow velocity equals $c_{s}$ is a sonic horizon. For a one-dimensional flow along $x$,[^2] the surface gravity is the velocity gradient at the horizon, and the Hawking temperature of the emitted phonons is

$$
T = \frac{\hbar\,\kappa}{2\pi k_{\mathrm{B}}}, \qquad
\kappa = \left.\frac{\partial\,(|v_{0}| - c_{s})}{\partial x}\right|_{\mathrm{horizon}}.
\tag{8.3}
$$

The general theory of acoustic horizons was developed by Visser (1998), and the literature on analogue spacetimes has been reviewed by Barceló et al. (2011b).

Equation (8.3) tells us at once which experiments are feasible. Since $\hbar/2\pi k_{\mathrm{B}} \approx 1.2\times 10^{-12}\,\mathrm{K\,s}$, the velocity gradients of $1$–$10\,\mathrm{s^{-1}}$ typical of water flows give temperatures of order $10^{-12}\,\mathrm{K}$, hopelessly below room temperature. In such systems only the classical, stimulated counterpart of the effect can be studied (Problem 2). In an atomic Bose–Einstein condensate (BEC), with sound speeds of order $1\,\mathrm{mm\,s^{-1}}$ varying over a few micrometres, $\kappa$ may reach $10^{2}$–$10^{3}\,\mathrm{s^{-1}}$ and the Hawking temperature is of the order of a nanokelvin or less. That is comparable to, or below, the temperature of the condensate itself. The quantum effect is accessible in principle but hard to isolate.

## 8.2 What analogues can and cannot test

The acoustic metric is a long-wavelength description. At wavelengths comparable to the depth of a water channel, or to the healing length of a condensate, the dispersion relation ceases to be linear, so analogue systems realise the modified dispersion relations of Lecture [6](/research/hawking-radiation-review/section-6): subluminal for surface waves in water, superluminal for the Bogoliubov relation of a BEC.[^3] What was a hypothesis about unknown short-distance physics becomes, in a fluid, known microscopic physics.

Garay et al. (2000) proposed that sonic black holes could be realised in BECs. Because the thermal spectrum is hard to separate from the finite temperature of the condensate, Balbinot et al. (2008) and Carusotto et al. (2008) proposed to look instead at correlations between density fluctuations on either side of the horizon. According to Eq. (3.8) the Hawking phonons and their partners are created in pairs, so the correlation appears along a line in the $(x, x')$ plane whose slope is fixed by the group velocities of the two phonons. Uncorrelated thermal noise produces no such feature.

We should be clear about the scope of these experiments. An analogue reproduces the kinematics of a quantum field on a curved background and nothing more. The metric (8.2) obeys the equations of fluid dynamics, not the Einstein equations, and the backreaction of the emitted phonons on the flow need not resemble its gravitational counterpart. Analogues can test whether the mechanism survives a known modification of short-distance physics, how it depends on the state of the incoming modes, and whether the emitted pairs are entangled. They cannot test the thermodynamic interpretation of black hole entropy, which in gravity relies on the first law (2.4) and hence on the Einstein equations, and they cannot address the information problem as it arises in gravity. These are experiments on the Hawking mechanism, not on black holes.

## 8.3 Classical and stimulated emission

A classical experiment can say something about a quantum effect because the Bogoliubov coefficients belong to the linear wave equation, not to the state. A classical wave scattered at an analogue horizon is converted into modes of positive and negative norm with relative amplitudes fixed by the same coefficients that govern spontaneous emission, so measuring them tests Eq. (3.4) directly. What such an experiment cannot test is that the incoming short-wavelength modes are in their ground state, since the experimenter chooses the input.

In water a white hole is easier to make than a black hole: waves sent against the current over an obstacle are blocked where the flow speed equals their group velocity, and a white hole is the time reverse of a black hole (Problem 5). Rousseaux et al. (2008) observed the generation of negative-frequency waves at such an obstacle, and Weinfurtner et al. (2011) measured the ratio of the amplitudes of the converted waves, finding a Boltzmann-like dependence on frequency consistent with the Hawking prediction for the corresponding effective temperature. Euvé et al. (2016) subsequently observed correlations between the converted modes in the noise of a water-tank experiment.

In optics the horizon moves and the medium is at rest. Philbin et al. (2008) showed that an intense light pulse in an optical fibre creates, through the Kerr nonlinearity, a moving refractive-index front that acts as a horizon for probe light, and Drori et al. (2019) observed stimulated Hawking emission, including the conversion to negative-frequency light, in an optical analogue of this type. Belgiorno et al. (2010) reported radiation from ultrashort laser pulse filaments, which they interpreted as spontaneous Hawking emission; the interpretation has been debated. Torres et al. (2017) observed rotational superradiance in a vortex flow of water, an analogue of the Zel'dovich–Starobinsky effect of Section [2.5](/research/hawking-radiation-review/section-2#25-superradiance), and acoustic horizons have also been realised in fluids of microcavity polaritons (Nguyen et al., 2015).

## 8.4 Spontaneous emission in Bose–Einstein condensates

Spontaneous emission has been pursued mainly in atomic BECs, and mainly in one laboratory. Lahav et al. (2010) realised a sonic black hole by accelerating a condensate over a potential step. Steinhauer (2014) observed self-amplifying emission in a configuration with both a black hole and a white hole horizon, which he interpreted as the black hole laser of Remark 6.1. Steinhauer (2016) reported spontaneous Hawking radiation through the density correlations proposed by Balbinot et al. (2008), together with evidence that the Hawking and partner phonons are entangled. Mu\ noz de Nova et al. (2019) found the spectrum of the correlated phonons consistent with a thermal distribution at the temperature predicted by Eq. (8.3), and Kolobov et al. (2021) showed that the emission is stationary over the duration of the experiment, before instabilities set in.

Correlation alone does not prove entanglement. In the state (3.8) the Hawking mode $b$ and its partner $b_{\mathrm{p}}$ each have occupation $n = (e^{2\pi\omega/\kappa} - 1)^{-1}$, and $|\langle b\,b_{\mathrm{p}}\rangle|^{2} = n(n+1)$ exceeds the bound $n^{2}$ obeyed by every separable state with the same occupations. Thermal phonons present initially can erase the violation (Problem 4).

These experiments are the strongest evidence to date that the Hawking mechanism operates as predicted in a quantum system with a horizon. They have also been questioned: Leonhardt (2018) disputed aspects of the analysis behind the entanglement claim, and later work has examined how far the observed correlations can be attributed unambiguously to spontaneous emission. Independent replication, on other platforms and in other laboratories, is what the subject most needs. Table 5 summarises the principal experiments.

| Platform | Reference | Regime | Principal result |
| --- | --- | --- | --- |
| Surface waves in water | Rousseaux et al. (2008) | Classical | Negative-frequency waves at an analogue white hole horizon |
| | Weinfurtner et al. (2011) | Stimulated | Boltzmann-like ratio of converted mode amplitudes |
| | Euvé et al. (2016) | Stimulated (noise) | Correlations between converted modes |
| | Torres et al. (2017) | Classical | Rotational superradiance in a vortex flow |
| Optical fibres and filaments | Philbin et al. (2008) | Classical | Frequency shifting of probe light at a moving horizon |
| | Belgiorno et al. (2010) | Spontaneous (claimed) | Emission from laser filaments; interpretation debated |
| | Drori et al. (2019) | Stimulated | Conversion to negative-frequency light |
| Polariton fluids | Nguyen et al. (2015) | Classical | Stationary acoustic horizon in a polariton flow |
| Atomic BEC | Lahav et al. (2010) | – | Realisation of a sonic black hole |
| | Steinhauer (2014) | Self-amplified | Black hole laser |
| | Steinhauer (2016) | Spontaneous | Density correlations; reported entanglement |
| | Mu\ noz de Nova et al. (2019) | Spontaneous | Thermal spectrum at the predicted temperature |
| | Kolobov et al. (2021) | Spontaneous | Stationary emission and its time evolution |

_Table 5: Selected analogue-gravity experiments relevant to the Hawking effect._

## Problems

1. Show that the inverse of the metric (8.2) is $g^{\mu\nu} = (\rho_{0}c_{s})^{-1}\left(\begin{smallmatrix} -1 & -v_{0}^{j} \\ -v_{0}^{i} & c_{s}^{2}\delta^{ij} - v_{0}^{i}v_{0}^{j}\end{smallmatrix}\right)$ and that, in three spatial dimensions, $\sqrt{-g} = \rho_{0}^{2}/c_{s}$. Hence show that $\partial_{\mu}(\sqrt{-g}\,g^{\mu\nu}\partial_{\nu}\psi_{1}) = 0$ is identical to the linearised continuity equation with $\rho_{1}$ eliminated as in the text. (Hint: for a block matrix, $\det\left(\begin{smallmatrix} a & \mathbf{b}^{T} \\ \mathbf{b} & I_{3}\end{smallmatrix}\right) = a - |\mathbf{b}|^{2}$.)

2. A water channel has a velocity gradient $\kappa = 5\,\mathrm{s^{-1}}$ at its horizon. Show that the corresponding Hawking temperature is about $6\times 10^{-12}\,\mathrm{K}$. For a surface wave of frequency $f = 1\,\mathrm{Hz}$, show that the thermal occupation number at $293\,\mathrm{K}$, $k_{\mathrm{B}}T/hf$, is about $6\times 10^{12}$, whereas the Hawking occupation number $(e^{2\pi\omega/\kappa} - 1)^{-1}$ at the same frequency is about $4\times 10^{-4}$. What does this imply for the design of water-wave experiments?

3. In a condensate the Bogoliubov dispersion relation, with $\hbar$ restored, is $(\omega - v k)^{2} = c_{s}^{2}k^{2} + (\hbar k^{2}/2m)^{2}$. Define $k_{\mathrm{d}}$ as the wavenumber at which the two terms on the right are equal, and show that $k_{\mathrm{d}} = 2mc_{s}/\hbar$. For atoms of mass $m = 1.44\times 10^{-25}\,\mathrm{kg}$ (rubidium-87), $c_{s} = 1\,\mathrm{mm\,s^{-1}}$ and $\kappa = 500\,\mathrm{s^{-1}}$, show that $T \approx 0.6\,\mathrm{nK}$ and $k_{\mathrm{d}}c_{s}/\kappa \approx 5$. Comment on the adiabaticity condition $k_{\mathrm{d}}c_{s} \gg \kappa$ of Lecture [6](/research/hawking-radiation-review/section-6).

4. Let $b = a\cosh r + a_{\mathrm{p}}^{\dagger}\sinh r$ and $b_{\mathrm{p}} = a_{\mathrm{p}}\cosh r + a^{\dagger}\sinh r$, with $\tanh r = e^{-\pi\omega/\kappa}$, where $a$ and $a_{\mathrm{p}}$ are independent input modes. (a) For inputs in their vacuum, show that $\langle b^{\dagger}b\rangle = \langle b_{\mathrm{p}}^{\dagger}b_{\mathrm{p}}\rangle = n = (e^{2\pi\omega/\kappa} - 1)^{-1}$ and $|\langle b\,b_{\mathrm{p}}\rangle|^{2} = n(n+1)$, in agreement with Eq. (3.8). (b) Show that every separable state, $\varrho = \sum_{i} p_{i}\,\varrho_{i}\otimes\varrho_{i}'$, satisfies $|\langle b\,b_{\mathrm{p}}\rangle|^{2} \le \langle b^{\dagger}b\rangle\langle b_{\mathrm{p}}^{\dagger}b_{\mathrm{p}}\rangle$. (Use the Cauchy–Schwarz inequality twice.) (c) If both inputs are thermal with occupation $n_{T}$, show that $\langle b^{\dagger}b\rangle\langle b_{\mathrm{p}}^{\dagger}b_{\mathrm{p}}\rangle - |\langle b\,b_{\mathrm{p}}\rangle|^{2} = n_{T}^{2} - n(2n_{T} + 1)$, and deduce that the inequality of (b) is violated only for $n_{T} < n + (n^{2} + n)^{1/2}$.

5. Show that the substitution $t \to -t$ in (8.2) is equivalent to reversing the background flow, $\mathbf{v}_{0} \to -\mathbf{v}_{0}$. Deduce that the time reverse of a flow that accelerates through $c_{s}$ is a flow that decelerates through $c_{s}$, that is, a white hole. Explain why, for a non-dissipative wave equation, a measurement of $|\beta_{\omega\omega'}|^{2}/|\alpha_{\omega\omega'}|^{2}$ at a white hole horizon is a test of Eq. (3.4).

## Notes and further reading

Unruh (1981) is three pages long and should be read first; the acoustic metric, the sonic horizon and the temperature estimate are all there. Visser (1998) develops the geometry carefully, including the distinction between horizons and ergoregions in flows that are not one-dimensional. The standard review is Barceló et al. (2011b), whose treatment of condensates is the natural next step for a student who wants to work in the field.

For the quantum experiments, Balbinot et al. (2008) and Carusotto et al. (2008) should be read together: the first gives the analytic argument for the correlation signal, the second the numerical simulations that made it convincing. We recommend reading Steinhauer (2016) alongside the critique of Leonhardt (2018). Between them they show, better than any review, what has to be established before an analogue measurement can be said to have observed spontaneous emission.

[^1]: The paper attracted little attention until Jacobson (1991) saw in it a concrete setting for the trans-Planckian problem of Lecture [6](/research/hawking-radiation-review/section-6).

[^2]: We orient $x$ along the flow, so that a flow accelerating through $c_{s}$ (a black hole) has $\kappa > 0$. A decelerating flow is a white hole, with temperature set by $|\kappa|$.

[^3]: The Bogoliubov dispersion relation and the Bogoliubov coefficients of Section [2.3](/research/hawking-radiation-review/section-2#23-quantum-fields-in-curved-spacetime) carry the name of the same physicist but are unrelated objects.
