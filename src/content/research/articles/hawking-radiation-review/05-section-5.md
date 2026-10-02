---
slug: hawking-radiation-review/section-5
title: "Evaporation"
date: 2024-12-01
summary: "Greybody factors and Page's emission rates, lifetimes from a solar mass down to the primordial black holes ending their lives today, and what is known about the end point."
series: hawking-radiation-review
part: section-5
order: 5
kicker: "Lecture 5"
---
A black hole of one solar mass radiates some $10^{-28}\,\mathrm{W}$ and, left alone in empty space, would need about $10^{67}$ years to evaporate. A black hole of $5\times 10^{14}\,\mathrm{g}$, roughly the mass of a block of rock 600 m on a side, has a temperature of about $20\,\mathrm{MeV}$; if one formed in the early universe, it is finishing its evaporation now. Both statements follow from Eq. (3.6); the second also needs some particle physics.

## 5.1 Greybody factors

The greybody factor is the answer to a one-dimensional scattering problem. For a massless field of spin $s = 0, 1, 2$ on the Schwarzschild background, separation of variables leaves a radial function $\psi$ that obeys a wave equation in the tortoise coordinate,

$$
\frac{{\mathrm{d}}^{2}\psi}{{\mathrm{d}} r_{*}^{2}} + \left[\omega^{2} - V_{s\ell}(r)\right]\psi = 0,
\qquad
V_{s\ell}(r) = \left(1 - \frac{2M}{r}\right)\left[\frac{\ell(\ell+1)}{r^{2}} + \frac{2M(1 - s^{2})}{r^{3}}\right].
\tag{5.1}
$$

For $s = 2$ this is the Regge–Wheeler equation for axial gravitational perturbations. Fields of half-integer spin obey analogous equations, and the Teukolsky formalism treats all spins on the Kerr background at once (Teukolsky and Press, 1974). The potential vanishes at the horizon ($r_{*} \to -\infty$) and at infinity, with a maximum near the photon sphere $r = 3M$. The greybody factor $\Gamma_{s\ell}(\omega)$ is the probability of transmission through this barrier. By time reversal it is also the probability that a wave sent in from infinity is absorbed, which is how it is computed in practice.

Two limits fix the shape of $\Gamma$. They are best stated through the absorption cross-section per polarisation,

$$
\sigma(\omega) = \frac{\pi}{\omega^{2}}\sum_{\ell \geq s}(2\ell + 1)\,\Gamma_{s\ell}(\omega).
$$

At high frequencies, $M\omega \gg 1$, geometrical optics applies. A partial wave of angular momentum $\ell$ has impact parameter $b \approx (\ell + \tfrac{1}{2})/\omega$, and it passes over the barrier when $b$ is below the critical value $3\sqrt{3}\,M$ set by the photon sphere. Then $\Gamma_{s\ell} \approx 1$ for $\ell \lesssim 3\sqrt{3}\,M\omega$ and $\Gamma_{s\ell} \approx 0$ above, the sum is $(3\sqrt{3}\,M\omega)^{2}$, and $\sigma \to 27\pi M^{2}$, the geometric capture cross-section of the photon sphere. At low frequencies, $M\omega \ll 1$, the barrier is nearly opaque, the more so the higher the spin and the angular momentum. For the s-wave of a massless scalar field $\Gamma_{00} \simeq 16M^{2}\omega^{2}$, and the low-frequency cross-section is $16\pi M^{2}$, which is exactly the area of the horizon (Das et al., 1997).[^1] Fields of higher spin start at $\ell = s$, and their lowest partial wave is transmitted with a higher power of $\omega$. Their emission is therefore suppressed relative to a black body, and the spectrum peaks at somewhat higher energies than a Planck spectrum at the same temperature.

## 5.2 Luminosity, mass loss, and lifetime

The scaling of the luminosity is known in advance: an area of order $M^{2}$ radiating at a temperature of order $1/M$ gives $L \propto M^{-2}$, and since $M$ is the only scale in the problem this is exact. A first guess treats the black hole as a black body at temperature ${T_{\mathrm{H}}}$ whose emitting area is the high-frequency cross-section $27\pi M^{2}$. For photons, with the Stefan–Boltzmann constant $\pi^{2}/60$ in natural units, this gives

$$
L_{\gamma} \approx \frac{\pi^{2}}{60}\times 27\pi M^{2}\times\left(\frac{1}{8\pi M}\right)^{4}
= \frac{27}{245760\,\pi}\,\frac{1}{M^{2}} \approx 3.5\times 10^{-5}\,\frac{1}{M^{2}}.
\tag{5.2}
$$

The coefficient was first computed by Page (1976a) from the greybody factors of all massless fields on the Schwarzschild background. He assumed the particle content then believed to be massless: two species of two-component neutrinos with their antiparticles, the photon, and the graviton. Approximately 81% of the power is then carried by neutrinos, 17% by photons and 2% by gravitons, and the total mass-loss rate is

$$
\frac{{\mathrm{d}} M}{{\mathrm{d}} t} = -\frac{\alpha}{M^{2}}, \qquad \alpha \simeq 2.0\times 10^{-4}.
\tag{5.3}
$$

The photon share, about $3.4\times 10^{-5}/M^{2}$, is close to (5.2). Students sometimes take this as evidence that the estimate is sound; the agreement is fortuitous. The same estimate overestimates the graviton power, which Page found to be about $3.8\times 10^{-6}/M^{2}$, by nearly an order of magnitude. Applied to Page's four neutrino states, each of a single helicity and with the fermionic factor $7/8$, it gives about $6\times 10^{-5}/M^{2}$, well below Page's $1.6\times 10^{-4}/M^{2}$. The greybody factors depend strongly on spin, and no single effective area describes all species.[^2]

Equation (5.3) is readily integrated. If $\alpha$ were constant, $M^{3}$ would decrease linearly in time, and

$$
M(t) = M_{0}\left(1 - \frac{t}{\tau}\right)^{1/3}, \qquad \tau = \frac{M_{0}^{3}}{3\alpha}.
\tag{5.4}
$$

The black hole evaporates completely in a finite time $\tau$. Most of that time is spent near the initial mass: the mass reaches $M_{0}/2$ only at $t = 7\tau/8$, and the end is a runaway, with the luminosity diverging as $(\tau - t)^{-2/3}$. Restoring units, $\tau = G^{2}M_{0}^{3}/(3\alpha\hbar c^{4})$, and Page's value of $\alpha$ gives $\tau \simeq 8.7\times 10^{-27}\,(M_{0}/1\,\mathrm{g})^{3}\,\mathrm{s}$.

For a solar-mass black hole the temperature is about $5\times 10^{-12}\,\mathrm{eV}$, far below the neutrino masses implied by oscillation experiments. Only photons and gravitons are emitted in appreciable numbers, the effective $\alpha$ drops to about $3.7\times 10^{-5}$, and the lifetime is of the order of $10^{67}$ years.[^3] (Today such a black hole in fact absorbs far more from the microwave background than it emits; see Problem 4.) At smaller masses $\alpha$ grows, as new species become available (Section [5.4](#54-massive-particles-and-secondary-emission)).

## 5.3 Rotation and charge

Page (1976b) showed that a Kerr black hole loses angular momentum considerably faster than it loses mass. The reason is visible in Eq. (3.6): the factor $\omega - m\Omega_{\mathrm{H}}$ favours quanta with large $m$, which carry away angular momentum efficiently, and the effect is stronger for fields of higher spin. The final spin therefore depends on what is emitted. Chambers et al. (1997) found that a black hole emitting only scalar quanta does not spin down to zero; its dimensionless spin $a/M$ tends instead to about $0.555$.

Charge is shed efficiently as well. A charged black hole preferentially emits particles with the same sign of charge, and, when the electric field near the horizon exceeds the Schwinger critical value, it also discharges by vacuum pair production (Gibbons, 1975; Damour and Ruffini, 1976).[^4] The emission of charged leptons from a non-rotating black hole was computed by Page (1977). Black holes light enough to evaporate on cosmological time scales should therefore be nearly neutral, and should have lost most of their spin long before the end.

## 5.4 Massive particles and secondary emission

A species of mass $m$ is emitted in appreciable numbers only when ${T_{\mathrm{H}}} \gtrsim m$. As a black hole evaporates, its temperature climbs through the thresholds of the Standard Model, and the number of degrees of freedom contributing to $\alpha$ increases. Electrons appear near $M \approx 2\times 10^{16}\,\mathrm{g}$, where ${T_{\mathrm{H}}} \approx m_{e}$. Once ${T_{\mathrm{H}}}$ exceeds the QCD scale, about $0.2\,\mathrm{GeV}$ (reached near $5\times 10^{13}\,\mathrm{g}$), quarks and gluons are emitted as elementary particles. They fragment and hadronise at distances of order a fermi, which is large compared with the black hole itself (Problem 5).

MacGibbon and Webber (1990) showed that secondary particles, in particular photons from neutral pion decay (centred near $m_{\pi^{0}}/2 \approx 68\,\mathrm{MeV}$), dominate the photon spectrum at high temperatures, and MacGibbon (1991) integrated the emission over the lifetime. With all Standard Model species active, $\alpha$ reaches about $4\times 10^{-3}$, some twenty times Page's value, and a black hole radiates its last $10^{9}\,\mathrm{g}$ or so in about a second (Table 2). With the full Standard Model, a black hole of initial mass approximately $5\times 10^{14}\,\mathrm{g}$ has a lifetime equal to the present age of the universe (MacGibbon et al., 2008; Carr et al., 2010); Page's value of $\alpha$ alone would give a somewhat smaller mass (Problem 1). The public code \textsc{BlackHawk} (Arbey and Auffinger, 2019, 2021) computes primary and secondary spectra for arbitrary distributions of masses and spins and is now standard in the analyses of Lecture [9](/research/hawking-radiation-review/section-9).

Whether the emitted particles interact enough to modify the spectrum has been debated. Heckler (1997) argued that bremsstrahlung and pair production would build a photosphere, and a corresponding QCD “chromosphere”, around sufficiently hot black holes, degrading the spectrum to lower energies. MacGibbon et al. (2008) replied that causal and kinematical considerations prevent such a photosphere from forming, so that the particles stream freely. Current analyses adopt the latter view, and so do we.

## 5.5 A sparse flux

Hawking radiation differs from the glow of a hot body in one respect that is easy to miss: it is extremely sparse. Take the photon luminosity (5.2) and a mean photon energy of about $2.7\,{T_{\mathrm{H}}} \approx 0.11/M$. The emission rate is then of order $3\times 10^{-4}/M$, so successive photons are separated on average by a time of order $3\times 10^{3}M$. The period of a typical photon, $2\pi/\langle\omega\rangle$, is only about $60M$. Successive quanta are therefore separated by some fifty wave periods.

The reason is geometrical. For any black body of area $A$ at temperature $T$, the number of photons emitted per period scales as $AT^{2}$, the area measured in units of the thermal wavelength squared. For a lamp filament $AT^{2}$ is enormous. For a black hole $A \sim M^{2}$ and $T \sim 1/M$, so $AT^{2}$ is a pure number, and it happens to be small (Problem 3). Gray et al. (2016) made this observation precise, and it had been emphasised earlier by Page (2005). The Hawking flux is better pictured as a slow sequence of individual quanta than as a continuous thermal fluid.

## 5.6 Backreaction and the end point

So far the black hole has been a fixed background. Its evolution is usually described in the semiclassical approximation, in which the metric is classical and sourced by the expectation value of the renormalised stress-energy tensor, $G_{\mu\nu} = 8\pi\langle T_{\mu\nu}\rangle$. Is the approximation consistent? The test is adiabaticity: the surface gravity should change little over the time $\kappa^{-1}$ on which the emission is established. With $\kappa = 1/4M$ and Eq. (5.3),

$$
\frac{1}{\kappa^{2}}\left|\frac{{\mathrm{d}}\kappa}{{\mathrm{d}} t}\right| = 4\left|\frac{{\mathrm{d}} M}{{\mathrm{d}} t}\right| = \frac{4\alpha}{M^{2}} \ll 1.
\tag{5.5}
$$

For a solar-mass black hole the left-hand side is below $10^{-79}$. It reaches unity only when $M$ is about a tenth of the Planck mass or less, where nothing here can be trusted anyway. Bardeen (1981) argued that, with backreaction included, evaporation is quasi-static and the emission remains thermal at the instantaneous temperature until the Planck scale is approached. York (1983) constructed a quantum-corrected geometry describing the dynamical origin of the radiation near the horizon.

Two-dimensional dilaton gravity provides solvable models with backreaction. Callan et al. (1992) introduced a model in which formation and evaporation can be followed with one-loop effects included, and Russo et al. (1992) found a modification in which the end point of evaporation is an exact solution. These models confirm that semiclassical evaporation is controlled down to the scale where quantum gravity becomes strong. What happens at that scale in four dimensions they cannot tell us.

The end point is therefore unknown. The possibilities discussed include complete evaporation, leaving only radiation; a stable or long-lived Planck-scale remnant (Aharonov et al., 1987); and a transition to some other object whose description requires quantum gravity. A remnant would have to store arbitrarily much information in a Planck-scale region, with an unbounded number of internal states; the arguments for and against have been reviewed by Chen et al. (2015). Dvali et al. (2020) proposed that the information stored in a black hole exerts a “memory burden” that strongly suppresses the emission once a substantial fraction of the initial mass has been lost. The proposal lies outside the semiclassical framework and remains speculative. If correct, it would substantially modify the constraints on primordial black holes discussed in Lecture [9](/research/hawking-radiation-review/section-9) (Alexandre et al., 2024; Thoss et al., 2024).

> **Remark 5.1.**
>
> Where does the radiation originate? The pair picture of Section [1.3](/research/hawking-radiation-review/section-1#13-a-heuristic-picture-and-its-limitations) suggests a thin layer at the horizon. Taken literally, the picture is wrong. The wavelength of a typical quantum, $2\pi/(2.7\,{T_{\mathrm{H}}}) \approx 60M$, is much larger than the black hole, and the stress-tensor analyses of Section [4.3](/research/hawking-radiation-review/section-4#43-the-stress-energy-tensor-and-the-trace-anomaly) show the outgoing flux building up well outside the horizon. Giddings (2016) argued, from the Stefan–Boltzmann law and the effective radius of emission, that the radiation originates in a “quantum atmosphere” extending a distance of order the horizon radius beyond the horizon. Dey et al. (2017) reached a broadly compatible conclusion from the renormalised stress-energy tensor and the correlations between quanta and partners. The location matters both for the trans-Planckian problem of Lecture [6](/research/hawking-radiation-review/section-6) and for proposals in which the near-horizon region is modified (Lecture [7](/research/hawking-radiation-review/section-7)).

## Problems

1. Restore units in Eq. (5.4) and show that $\alpha = 2.0\times 10^{-4}$ gives $\tau \simeq 8.7\times 10^{-27}\,(M_{0}/1\,\mathrm{g})^{3}\,\mathrm{s}$. Find the initial mass that evaporates in $13.8\,\mathrm{Gyr}$ with this constant $\alpha$ (about $3.7\times 10^{14}\,\mathrm{g}$). Defining an effective constant $\bar\alpha$ by $\tau = M_{0}^{3}/3\bar\alpha$, show that $M_{0} = 5\times 10^{14}\,\mathrm{g}$ requires $\bar\alpha \approx 5\times 10^{-4}$, and say which particles account for the difference.

2. Using Eq. (3.6), show that the power emitted in one polarisation state of a massless boson is $(1/2\pi^{2})\int_{0}^{\infty}\sigma(\omega)\,\omega^{3}\,{\mathrm{d}}\omega/(e^{\omega/{T_{\mathrm{H}}}} - 1)$, with $\sigma$ the absorption cross-section of Section [5.1](#51-greybody-factors). Deduce that taking $\sigma = 27\pi M^{2}$ at all frequencies gives four times (5.2) for photons, and explain the factor of four by comparing the cross-section and the surface area of a black sphere. What does the ratio of Page's photon power to this value tell you about the low-frequency greybody factors?

3. For a black body of area $A$ at temperature $T$, the photon number flux per unit area is $\zeta(3)T^{3}/2\pi^{2}$ and the mean photon energy is $\pi^{4}T/30\zeta(3) \approx 2.7\,T$. Show that the mean time between emitted photons, divided by the period $2\pi/\langle\omega\rangle$, is approximately $7/(AT^{2})$. Evaluate it for a black hole with $A = 27\pi M^{2}$ and $T = {T_{\mathrm{H}}}$ (about 50), and for a $1\,\mathrm{cm^{2}}$ surface at $300\,\mathrm{K}$ (about $4\times 10^{-6}$).

4. A solar-mass black hole sits in the cosmic microwave background at $T_{\mathrm{CMB}} = 2.725\,\mathrm{K}$. Taking the absorption cross-section to be $27\pi M^{2}$ (justify this for the relevant frequencies) and the emitted power to be $3.7\times 10^{-5}/M^{2}$, show that the absorbed power exceeds the emitted power by a factor of order $10^{30}$.

5. A black hole of $10^{13}\,\mathrm{g}$ has ${T_{\mathrm{H}}} \approx 1\,\mathrm{GeV}$. Compute its Schwarzschild radius (about $0.015\,\mathrm{fm}$) and the wavelength $2\pi/\langle\omega\rangle$ of a typical emitted quantum, with $\langle\omega\rangle \approx 2.7\,{T_{\mathrm{H}}}$ (about $0.4\,\mathrm{fm}$). Use these numbers, and the size of a hadron, to explain why such a black hole emits quarks and gluons rather than pions, and why hadronisation takes place far outside the horizon.

## Notes and further reading

The numbers in this lecture rest on the papers of Page (1976a, 1976b), which remain the place to see how greybody factors are computed and summed; the first should be consulted by anyone who wants to check a number given here. For the Standard Model era of the subject, MacGibbon and Webber (1990) explains how quark and gluon jets enter, and Carr et al. (2010) collects the lifetime and the emitted spectra in a form convenient for cosmological applications. Auffinger (2023) is the most useful recent review for a student who wants to compute spectra, and it pairs naturally with the \textsc{BlackHawk} manual (Arbey and Auffinger, 2019).

On the end point there is far less to read that is settled. Chen et al. (2015) give a fair account of the remnant debate, and Page (2005) discusses the late stages, including the sparseness of the flux, from the point of view of the information problem we take up in Lecture [7](/research/hawking-radiation-review/section-7).

[^1]: Das et al. (1997) showed that this equality holds for every spherically symmetric black hole, not only for Schwarzschild.

[^2]: With three flavours of light neutrinos instead of Page's two, the same greybody factors give $\alpha \simeq 2.8\times 10^{-4}$. The choice of $27\pi M^{2}$ as emitting area is itself rough; see Problem 2.

[^3]: Oscillations fix only mass differences, so the lightest neutrino could be nearly massless. If it were lighter than about $10^{-11}\,\mathrm{eV}$ it would still be emitted, $\alpha$ would roughly triple, and the lifetime would fall by the same factor.

[^4]: For electrons the critical field is $E_{\mathrm{c}} = m_{e}^{2}c^{3}/e\hbar \approx 1.3\times 10^{18}\,\mathrm{V\,m^{-1}}$.
