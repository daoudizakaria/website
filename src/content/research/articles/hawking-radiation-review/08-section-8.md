---
slug: hawking-radiation-review/section-8
title: "Analogue gravity and laboratory experiments"
date: 2024-12-01
summary: "Acoustic spacetimes, what laboratory analogues can and cannot test, classical and stimulated emission, and spontaneous emission in Bose–Einstein condensates."
series: hawking-radiation-review
part: section-8
order: 8
kicker: "Section 8"
---
We saw in Section [4.5](/research/hawking-radiation-review/section-4#45-rigorous-results-and-universality) that the Hawking effect is kinematical: it requires a quantum field propagating on an effective Lorentzian geometry with a horizon, but not the Einstein equations. This observation opens the possibility of reproducing the effect in the laboratory, using systems in which the propagation of small perturbations is governed by an effective metric. In this section we explain how such effective metrics arise, what they can and cannot teach us, and what has been observed.

## 8.1 Acoustic spacetimes

The idea goes back to Unruh (1981). Consider an inviscid, barotropic fluid in irrotational flow, with density $\rho$, pressure $p(\rho)$, speed of sound $c_{s}^{2} = {\mathrm{d}} p/{\mathrm{d}}\rho$, and velocity $\mathbf{v} = \nabla\psi$. The equations of motion are the continuity equation and the Bernoulli equation,

$$
\partial_{t}\rho + \nabla\cdot(\rho\nabla\psi) = 0,
\qquad
\partial_{t}\psi + \tfrac{1}{2}(\nabla\psi)^{2} + h(\rho) = 0,
\tag{8.1}
$$

where $h$ is the specific enthalpy, ${\mathrm{d}} h = {\mathrm{d}} p/\rho$, and external forces have been omitted for simplicity. Let us linearise around a background flow, $\rho = \rho_{0} + \rho_{1}$ and $\psi = \psi_{0} + \psi_{1}$, with $\mathbf{v}_{0} = \nabla\psi_{0}$. The linearised Bernoulli equation gives $\rho_{1} = -(\rho_{0}/c_{s}^{2})(\partial_{t}\psi_{1} + \mathbf{v}_{0}\cdot\nabla\psi_{1})$, and substituting this into the linearised continuity equation yields a single second-order equation for $\psi_{1}$. A short calculation shows that this equation can be written as the wave equation $\partial_{\mu}(\sqrt{-g}\,g^{\mu\nu}\partial_{\nu}\psi_{1}) = 0$ of a massless scalar field on the effective metric

$$
{\mathrm{d}} s^{2} = \frac{\rho_{0}}{c_{s}}\left[-\left(c_{s}^{2} - v_{0}^{2}\right){\mathrm{d}} t^{2} - 2\,\mathbf{v}_{0}\cdot{\mathrm{d}}\mathbf{x}\,{\mathrm{d}} t + {\mathrm{d}}\mathbf{x}\cdot{\mathrm{d}}\mathbf{x}\right].
\tag{8.2}
$$

Sound in a moving fluid thus propagates exactly like a massless field on a curved spacetime. Where the flow becomes supersonic, sound waves can no longer propagate upstream, and the surface on which the normal component of the flow velocity equals $c_{s}$ is a sonic horizon. For a one-dimensional flow along $x$, the surface gravity is the velocity gradient at the horizon, and the Hawking temperature of the emitted phonons is

$$
T = \frac{\hbar\,\kappa}{2\pi k_{\mathrm{B}}}, \qquad
\kappa = \left.\frac{\partial\,(|v_{0}| - c_{s})}{\partial x}\right|_{\mathrm{horizon}}.
\tag{8.3}
$$

The general theory of acoustic horizons was developed by Visser (1998), and the extensive literature on analogue spacetimes has been reviewed by Barceló et al. (2011b).

Equation (8.3) immediately explains which experiments are feasible. Since $\hbar/2\pi k_{\mathrm{B}} \approx 1.2\times 10^{-12}\,\mathrm{K\,s}$, a velocity gradient of order $1$–$10\,\mathrm{s^{-1}}$, typical of water flows, gives a temperature of order $10^{-12}\,\mathrm{K}$, hopelessly below room temperature. In such systems only the classical, stimulated counterpart of the effect can be studied. In an atomic Bose–Einstein condensate (BEC), with sound speeds of order $1\,\mathrm{mm\,s^{-1}}$ varying over a few micrometres, $\kappa$ may reach $10^{2}$–$10^{3}\,\mathrm{s^{-1}}$, and the Hawking temperature is of the order of a nanokelvin or less. This is comparable to, or below, the temperature of the condensate itself, which makes the quantum effect accessible in principle but difficult to isolate.

## 8.2 What analogues can and cannot test

Analogue systems naturally realise the modified dispersion relations of Section [6](/research/hawking-radiation-review/section-6). Surface waves in water have subluminal dispersion, whereas the Bogoliubov dispersion relation of a BEC is superluminal. Garay et al. (2000) proposed that sonic black holes could be realised in BECs, and, since a direct measurement of the thermal spectrum is hampered by the finite temperature of the condensate, Balbinot et al. (2008) and Carusotto et al. (2008) proposed that the effect be detected instead through the correlations between density fluctuations on either side of the horizon. These correlations arise from the pairwise creation of Hawking phonons and their partners, in accordance with Eq. (3.8), and they provide a signature that is distinct from thermal noise.

It is important to be clear about the scope of these experiments. Analogue systems reproduce the kinematics of quantum fields on a curved background, but not the dynamics of gravity: the effective metric (8.2) is not governed by the Einstein equations, and the backreaction of the emitted radiation on the flow differs from its gravitational counterpart. Analogue experiments can therefore test the robustness of the Hawking mechanism against modifications of short-distance physics, the role of the quantum state, and the entanglement structure of the emitted pairs. They cannot test the thermodynamic interpretation of black hole entropy, nor can they address the information problem as it arises in gravity.

## 8.3 Classical and stimulated emission

The first experiments studied the classical, stimulated counterpart of the effect. An incident wave scattered at an analogue horizon is converted into modes of positive and negative norm, with relative amplitudes governed by the same Bogoliubov coefficients that determine the spontaneous emission; measuring these amplitudes therefore tests Eq. (3.4) directly. In water channels, Rousseaux et al. (2008) observed the generation of negative-frequency waves at an obstacle acting as an analogue white hole horizon, and Weinfurtner et al. (2011) measured the ratio of the amplitudes of the converted waves, finding a Boltzmann-like dependence on frequency consistent with the Hawking prediction for the corresponding effective temperature. Euvé et al. (2016) subsequently observed correlations between the converted modes in the noise of a water-tank experiment. In optics, Philbin et al. (2008) demonstrated that an intense light pulse propagating in an optical fibre creates, through the Kerr nonlinearity, a moving refractive-index front that acts as a horizon for probe light, and Drori et al. (2019) observed stimulated Hawking emission, including the conversion to negative-frequency light, in an optical analogue of this type. Belgiorno et al. (2010) reported the observation of radiation from ultrashort laser pulse filaments, which they interpreted as spontaneous Hawking emission; the interpretation of this experiment has been debated. Torres et al. (2017) observed rotational superradiance in a vortex flow of water, an analogue of the Zel'dovich–Starobinsky effect of Section [2.5](/research/hawking-radiation-review/section-2#25-superradiance), and acoustic horizons have also been realised in fluids of microcavity polaritons (Nguyen et al., 2015), which offer optical access to the correlations of the emitted excitations.

## 8.4 Spontaneous emission in Bose–Einstein condensates

The observation of spontaneous, quantum Hawking emission has been pursued principally in atomic BECs. Lahav et al. (2010) realised a sonic black hole in a BEC by accelerating the condensate over a potential step. Steinhauer (2014) observed self-amplifying emission in a configuration with both a black hole and a white hole horizon, which he interpreted as a realisation of the black hole laser of Remark 6.1. Steinhauer (2016) reported the observation of spontaneous Hawking radiation through the density–density correlations proposed by Balbinot et al. (2008), together with evidence that the Hawking and partner phonons are entangled. Mu\ noz de Nova et al. (2019) measured the spectrum of the correlated phonons and found it to be consistent with a thermal distribution at the temperature predicted by Eq. (8.3), and Kolobov et al. (2021) studied the time evolution of the emission, showing that the spontaneous emission is stationary over the duration of the experiment before the onset of instabilities.

These experiments constitute the strongest evidence to date that the Hawking mechanism operates as predicted in a quantum system with a horizon. Their interpretation has nevertheless been discussed critically. Leonhardt (2018), in particular, questioned aspects of the analysis supporting the claim of entanglement in the earlier experiment, and the extent to which the observed correlations can be attributed unambiguously to spontaneous emission has been examined in the subsequent literature. Independent replication on other platforms and in other laboratories would considerably strengthen the conclusions. Table 5 summarises the principal experiments.

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

> **Summary of the section**
>
> - Sound in a moving fluid propagates on an effective acoustic metric; a supersonic flow region is bounded by a sonic horizon with $T = \hbar\kappa/2\pi k_{\mathrm{B}}$, where $\kappa$ is the velocity gradient.
>
> - In water the temperature is of order $10^{-12}\,\mathrm{K}$, so that only stimulated emission is observable; in BECs it reaches the nanokelvin range.
>
> - Analogues test the kinematics of the effect (robustness to dispersion, quantum state, pair correlations), but not gravitational dynamics or the information problem.
>
> - Stimulated emission has been observed in water and optics; spontaneous emission with a thermal spectrum and pair correlations has been reported in BECs, and independent replication is desirable.
