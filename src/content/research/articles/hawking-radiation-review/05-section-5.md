---
slug: hawking-radiation-review/section-5
title: "The emission spectrum and the evaporation of black holes"
date: 2024-12-01
summary: "Greybody factors, luminosity and lifetime, rotation and charge, massive particles and secondary emission, the sparseness of the flux, and backreaction at the end point."
series: hawking-radiation-review
part: section-5
order: 5
kicker: "Section 5"
---
Equation (3.6) tells us that a black hole radiates as a grey body. In this section we examine what this implies quantitatively: how the greybody factors shape the spectrum, how fast a black hole loses mass, which particles it emits, and what is known about the late stages of the process.

## 5.1 Greybody factors

The greybody factors describe the scattering of each mode by the curvature surrounding the black hole. For a massless field of spin $s = 0, 1, 2$ on the Schwarzschild background, the radial part $\psi$ of each mode obeys a one-dimensional wave equation in the tortoise coordinate,

$$
\frac{{\mathrm{d}}^{2}\psi}{{\mathrm{d}} r_{*}^{2}} + \left[\omega^{2} - V_{s\ell}(r)\right]\psi = 0,
\qquad
V_{s\ell}(r) = \left(1 - \frac{2M}{r}\right)\left[\frac{\ell(\ell+1)}{r^{2}} + \frac{2M(1 - s^{2})}{r^{3}}\right],
\tag{5.1}
$$

where for $s = 2$ this is the Regge–Wheeler equation for axial gravitational perturbations; fields of half-integer spin obey analogous equations, and the Teukolsky formalism treats all spins on the Kerr background in a unified way (Teukolsky and Press, 1974). The potential vanishes at the horizon ($r_{*} \to -\infty$) and at infinity, and has a maximum near the photon sphere $r = 3M$. The greybody factor $\Gamma_{s\ell}(\omega)$ is the transmission probability through this barrier.

Two limits are easy to understand. At high frequencies, $M\omega \gg 1$, waves pass over the barrier whenever their impact parameter is less than the critical value $3\sqrt{3}\,M$, and the total absorption cross-section approaches the geometric capture cross-section of the photon sphere, $\sigma \to 27\pi M^{2}$. At low frequencies, $M\omega \ll 1$, the barrier is nearly opaque and $\Gamma$ is strongly suppressed, the more so the higher the spin and the angular momentum: for the s-wave of a massless scalar field $\Gamma_{00} \simeq 16M^{2}\omega^{2}$, so that the low-frequency absorption cross-section equals the area of the horizon, $16\pi M^{2}$ (Das et al., 1997). As a result, the emission of higher-spin particles is suppressed relative to a pure black body, and the spectrum peaks at somewhat higher energies than a Planck spectrum at the same temperature.

## 5.2 Luminosity, mass loss, and lifetime

A rough estimate of the luminosity is obtained by treating the black hole as a black body of temperature ${T_{\mathrm{H}}}$ and effective area equal to the high-frequency cross-section $27\pi M^{2}$. For photons, with the Stefan–Boltzmann constant $\pi^{2}/60$ in natural units, this gives

$$
L_{\gamma} \approx \frac{\pi^{2}}{60}\times 27\pi M^{2}\times\left(\frac{1}{8\pi M}\right)^{4}
= \frac{27}{245760\,\pi}\,\frac{1}{M^{2}} \approx 3.5\times 10^{-5}\,\frac{1}{M^{2}}.
\tag{5.2}
$$

The dependence $L \propto M^{-2}$ is exact, since the only scale in the problem is $M$; the coefficient must be computed from the greybody factors. The first such computation was performed by Page (1976a) for massless fields on the Schwarzschild background. Assuming the particle content then believed to be massless (two species of two-component neutrinos with their antiparticles, the photon, and the graviton), Page found that approximately 81% of the power is carried by neutrinos, 17% by photons, and 2% by gravitons, and that the total mass-loss rate is

$$
\frac{{\mathrm{d}} M}{{\mathrm{d}} t} = -\frac{\alpha}{M^{2}}, \qquad \alpha \simeq 2.0\times 10^{-4}.
\tag{5.3}
$$

The photon contribution, about $3.4\times 10^{-5}/M^{2}$, happens to be close to the crude estimate (5.2). The agreement is fortuitous: the same estimate overestimates the graviton power by nearly an order of magnitude and underestimates the neutrino power, because the greybody factors depend strongly on the spin of the emitted field.

Equation (5.3) is readily integrated. If $\alpha$ were constant, the mass would evolve as

$$
M(t) = M_{0}\left(1 - \frac{t}{\tau}\right)^{1/3}, \qquad \tau = \frac{M_{0}^{3}}{3\alpha},
\tag{5.4}
$$

so that the black hole evaporates completely in a finite time $\tau$, with most of the time spent at masses close to $M_{0}$ and a runaway at the end. In physical units, Page's value of $\alpha$ gives $\tau \simeq 8.7\times 10^{-27}\,(M_{0}/1\,\mathrm{g})^{3}\,\mathrm{s}$. For a solar-mass black hole, whose temperature is far below the neutrino masses, only photons and gravitons are emitted in appreciable numbers, the effective $\alpha$ is correspondingly smaller, and the lifetime is of the order of $10^{67}$ years. In reality $\alpha$ is not constant: as the black hole shrinks and its temperature rises, more particle species become available, and $\alpha$ increases (Section [5.4](#54-massive-particles-and-secondary-emission)).

## 5.3 Rotation and charge

Rotation and charge modify the emission in characteristic ways. Page (1976b) showed that a Kerr black hole loses angular momentum considerably faster than it loses mass. The reason is visible in Eq. (3.6): the factor $\omega - m\Omega_{\mathrm{H}}$ favours the emission of quanta with large $m$, which carry away angular momentum efficiently, and the effect is stronger for fields of higher spin. The final spin of an evaporating black hole therefore depends on the species emitted: Chambers et al. (1997) found that for a black hole emitting only scalar quanta the dimensionless spin $a/M$ does not decrease to zero but tends to an asymptotic value of approximately 0.555. Charged black holes lose their charge through the preferential emission of particles with the same sign of charge, and, when the electric field near the horizon exceeds the Schwinger critical value, through vacuum pair production (Gibbons, 1975; Damour and Ruffini, 1976). The emission of charged leptons from a non-rotating black hole was computed by Page (1977). As a consequence of these processes, black holes that are small enough to evaporate on cosmological time scales are expected to be very nearly neutral and to have lost most of their initial spin long before their final evaporation.

## 5.4 Massive particles and secondary emission

A particle species of mass $m$ is emitted in appreciable numbers only when ${T_{\mathrm{H}}} \gtrsim m$, since its emission is otherwise suppressed by the Boltzmann factor. As a black hole evaporates, its temperature rises through the mass thresholds of the Standard Model, and the number of effective degrees of freedom contributing to $\alpha$ in Eq. (5.3) increases. Once ${T_{\mathrm{H}}}$ exceeds the QCD confinement scale, quarks and gluons are emitted as elementary particles, which then fragment and hadronise at distances large compared with the size of the black hole. MacGibbon and Webber (1990) and MacGibbon (1991) showed that the resulting secondary particles, in particular photons from the decay of neutral pions, dominate the photon spectrum at high temperatures, and they computed the emission integrated over the lifetime of the black hole. When the full Standard Model is included, a black hole with an initial mass of approximately $5\times 10^{14}\,\mathrm{g}$ has a lifetime equal to the present age of the universe (MacGibbon et al., 2008; Carr et al., 2010). The public code \textsc{BlackHawk} (Arbey and Auffinger, 2019, 2021) computes the primary and secondary spectra for arbitrary distributions of masses and spins, and it has become a standard tool in the analyses of Section [9](/research/hawking-radiation-review/section-9).

Whether the emitted particles interact with one another sufficiently to modify the spectrum has been debated. Heckler (1997) argued that bremsstrahlung and pair production would lead to the formation of a photosphere, and of a corresponding QCD “chromosphere”, around sufficiently hot black holes, degrading the spectrum to lower energies. MacGibbon et al. (2008) argued that causal and kinematical considerations prevent the emitted particles from interacting sufficiently for such a photosphere to form, so that the particles stream freely and the standard secondary spectra remain valid. The latter view is widely adopted in current analyses.

## 5.5 A sparse flux

A striking feature of Hawking radiation, which distinguishes it from the radiation of an ordinary hot body, is how sparse it is. A rough estimate conveys the point. With the photon luminosity (5.2) and a mean photon energy of about $2.7\,{T_{\mathrm{H}}} \approx 0.11/M$, the photon emission rate is of order $3\times 10^{-4}/M$, so that successive photons are separated on average by a time of order $3\times 10^{3}M$. The period of a typical photon, $2\pi/\langle\omega\rangle$, is only of order $60M$. Successive quanta are therefore separated by many wave periods, in stark contrast to blackbody cavity radiation, in which quanta overlap strongly. Gray et al. (2016) made this observation precise, and it had been emphasised earlier by Page (2005). The Hawking flux is better pictured as a slow sequence of individual quanta than as a continuous thermal fluid.

## 5.6 Backreaction and the end point

So far we have treated the black hole as a fixed background. The evolution of an evaporating black hole is usually described in the semiclassical approximation, in which the metric is classical and sourced by the expectation value of the renormalised stress-energy tensor, $G_{\mu\nu} = 8\pi\langle T_{\mu\nu}\rangle$. Is this approximation consistent? The relevant criterion is adiabaticity: the surface gravity should change little over the time scale $\kappa^{-1}$ on which the emission is established. Using Eq. (5.3),

$$
\frac{1}{\kappa^{2}}\left|\frac{{\mathrm{d}}\kappa}{{\mathrm{d}} t}\right| = 4\left|\frac{{\mathrm{d}} M}{{\mathrm{d}} t}\right| = \frac{4\alpha}{M^{2}} \ll 1,
\tag{5.5}
$$

which is satisfied with an enormous margin for any black hole much heavier than the Planck mass. Bardeen (1981) argued that, when backreaction is included in this approximation, the evaporation proceeds quasi-statically and the emission remains thermal at the instantaneous Hawking temperature until the black hole approaches the Planck scale, and York (1983) constructed a quantum-corrected geometry describing the dynamical origin of the radiation near the horizon.

Two-dimensional dilaton gravity provides solvable models in which backreaction can be treated more completely. Callan et al. (1992) introduced a model in which the formation and evaporation of a black hole can be described with one-loop quantum effects included, and Russo et al. (1992) found a modification in which the end point of evaporation is described by an exact solution. These models confirmed that the semiclassical evaporation proceeds in a controlled manner down to the scale at which quantum gravitational effects become strong, but they cannot tell us what happens at that scale in four dimensions.

The end point of evaporation therefore lies beyond the reach of the semiclassical approximation. The possibilities discussed in the literature include complete evaporation, leaving only radiation, the formation of a stable or long-lived Planck-scale remnant (Aharonov et al., 1987), and a transition to some other object whose description requires quantum gravity. A remnant would have to carry an arbitrarily large amount of information within a Planck-scale region, which leads to difficulties associated with an unbounded number of internal states; the arguments for and against remnants have been reviewed by Chen et al. (2015). More recently, Dvali et al. (2020) proposed that the information stored in a black hole exerts a “memory burden” that resists further evaporation, so that the emission rate would be strongly suppressed after the black hole has lost a substantial fraction of its initial mass. This proposal lies outside the standard semiclassical framework and remains speculative, but, if correct, it would substantially modify the constraints on primordial black holes discussed in Section [9](/research/hawking-radiation-review/section-9) (Alexandre et al., 2024; Thoss et al., 2024).

> **Remark 5.1.**
>
> Where does the radiation originate? The pair picture of Section [1.3](/research/hawking-radiation-review/section-1#13-a-heuristic-picture-and-its-limitations) suggests a thin layer at the horizon. However, the typical wavelength of the emitted quanta, of order $2\pi/{T_{\mathrm{H}}} = 16\pi^{2}M$, is much larger than the size of the black hole, and the stress-tensor analyses of Section [4.3](/research/hawking-radiation-review/section-4#43-the-stress-energy-tensor-and-the-trace-anomaly) show that the outgoing positive energy flux builds up over a region extending well outside the horizon. Giddings (2016) argued, on the basis of the Stefan–Boltzmann law and the effective radius of emission, that the radiation originates from a “quantum atmosphere” extending to a distance of order the horizon radius beyond the horizon. Dey et al. (2017) examined this proposal using the renormalised stress-energy tensor and the correlations between Hawking quanta and their partners and reached a broadly compatible conclusion. The location of the emission region matters both for the trans-Planckian problem of Section [6](/research/hawking-radiation-review/section-6) and for proposals in which the near-horizon region is modified (Section [7](/research/hawking-radiation-review/section-7)).

> **Summary of the section**
>
> - Greybody factors suppress low-frequency and higher-spin emission; at high frequency the cross-section approaches $27\pi M^{2}$.
>
> - The mass-loss rate is ${\mathrm{d}} M/{\mathrm{d}} t = -\alpha/M^{2}$, giving a lifetime $\tau = M_{0}^{3}/3\alpha$, of order $10^{67}$ years for a solar-mass black hole; a black hole of $5\times 10^{14}\,\mathrm{g}$ evaporates in the age of the universe.
>
> - Rotating and charged black holes shed their spin and charge faster than their mass.
>
> - Hot black holes emit all Standard Model species; quarks and gluons hadronise, producing secondary photons, and the flux is sparse.
>
> - The semiclassical description is adiabatic until the Planck scale; the end point, including remnants or a memory-burden phase, requires physics beyond it.
