---
slug: hawking-radiation-review/section-6
title: "The trans-Planckian problem"
date: 2024-12-01
summary: "Why the derivation appears to involve modes beyond the Planck scale, what dispersive models show, the conditions for universality, and what remains open."
series: hawking-radiation-review
part: section-6
order: 6
kicker: "Section 6"
---
## 6.1 Statement of the problem

The exponential relation (3.2), which is the source of the Hawking effect, has a disconcerting consequence when it is read backwards in time. A quantum of frequency $\omega \sim {T_{\mathrm{H}}}$ that reaches ${\mathscr{I}}^{+}$ at retarded time $u$ corresponds, near the horizon and in the frame of a freely falling observer, to a mode whose frequency grows as $\omega\,e^{\kappa u}$. The frequency exceeds the Planck scale after a time

$$
u_{\mathrm{P}} \sim \frac{1}{\kappa}\ln\frac{{m_{\mathrm{P}}}}{{T_{\mathrm{H}}}} = 4M\ln(8\pi M),
\tag{6.1}
$$

where, in the last expression, $M$ is measured in Planck units. For a solar-mass black hole, $4M \approx 2\times 10^{-5}\,\mathrm{s}$ and $\ln(8\pi M/{m_{\mathrm{P}}}) \approx 90$, so that $u_{\mathrm{P}}$ is of the order of a couple of milliseconds. The radiation emitted after this time, which is to say essentially all of it, appears to originate from modes whose wavelengths near the horizon were far shorter than the Planck length. At such scales the assumption of a free field propagating on a fixed classical background is not expected to hold. The difficulty was emphasised by 't Hooft (1985), who argued that gravitational interactions between ingoing and outgoing quanta near the horizon should become strong, and it was formulated as a sharp problem by Jacobson (1991).

Does the Hawking effect then depend on unknown physics at the Planck scale? The most instructive answers have come from models in which the short-distance physics is modified explicitly.

## 6.2 Dispersive models

Unruh (1995) addressed the question in the acoustic analogue that will be described in Section [8](/research/hawking-radiation-review/section-8). In a fluid flowing with velocity $v(x)$, a sound wave with laboratory frequency $\omega$ and wavenumber $k$ obeys a dispersion relation of the form

$$
(\omega - v k)^{2} = F(k)^{2}, \qquad F(k) \simeq c_{s}|k| \quad \text{for } |k| \ll k_{\mathrm{d}},
\tag{6.2}
$$

where $\omega - vk$ is the frequency measured in the frame comoving with the fluid, $\omega$ is conserved in a stationary flow, and $k_{\mathrm{d}}$ is the wavenumber at which the dispersion relation departs from linearity. In the gravitational analogy $k_{\mathrm{d}}$ plays the role of the Planck scale. For real fluids the dispersion is subluminal: $F(k)$ grows more slowly than $c_{s}|k|$ at large $|k|$. Unruh (1995) solved the resulting wave equation numerically and found that the thermal spectrum at ${T_{\mathrm{H}}} = \kappa/2\pi$ is recovered to high accuracy, even though no mode ever attains an arbitrarily short wavelength.

The mechanism is instructive. With linear dispersion, an outgoing mode traced backwards in time hugs the horizon and is blueshifted without limit. With subluminal dispersion, a short-wavelength wave travels more slowly than long-wavelength sound, and when traced backwards in time it is eventually swept away from the horizon by the flow. The ancestor of an outgoing Hawking quantum is then not a trans-Planckian mode lingering at the horizon, but an ingoing short-wavelength mode that approaches the horizon, is converted into an outgoing long-wavelength mode, and escapes. This process, known as mode conversion, replaces the infinite blueshift of the linear theory. For superluminal dispersion, such as the Bogoliubov dispersion relation of a Bose–Einstein condensate, $F(k)^{2} = c_{s}^{2}k^{2} + (k^{2}/2m)^{2}$, the ancestral modes instead come from inside the horizon, but the conclusion is the same.

These numerical results were followed by analytical treatments. Jacobson (1993) examined the consequences of imposing a short-distance cutoff on the field modes, Brout et al. (1995) analysed the problem in detail within their review, and Corley and Jacobson (1996) computed the Hawking spectrum analytically for both subluminal and superluminal dispersion, confirming that the thermal spectrum is recovered provided that the dispersion scale is large compared with the surface gravity, $k_{\mathrm{d}}c_{s} \gg \kappa$.

## 6.3 Conditions for universality

Unruh and Schützhold (2005) subsequently identified, for a broad class of dispersion relations, two conditions under which the Hawking effect is universal.

(i) The evolution of the relevant modes near the horizon must be adiabatic, which is the case when the dispersion scale greatly exceeds $\kappa$.

(ii) The ingoing short-wavelength modes, from which the outgoing quanta originate, must be in their ground state.

The first condition is kinematical and is easily satisfied. The second is an assumption about the state of the high-frequency degrees of freedom, and in the gravitational case it is effectively an assumption about the ultraviolet completion of the theory. The trans-Planckian problem is therefore not so much resolved as relocated: the prediction is insensitive to the details of short-distance physics, provided that the short-distance degrees of freedom are unexcited. This is precisely the content of the Hadamard condition in the formulation of Fredenhagen and Haag (1990) (Section [4.5](/research/hawking-radiation-review/section-4#45-rigorous-results-and-universality)).

> **Remark 6.1.**
>
> Modified dispersion also produces phenomena with no counterpart in the linear theory. If the dispersion is superluminal and the flow possesses both a black hole horizon and an inner, white hole, horizon, modes can bounce back and forth between the two horizons and be amplified at each passage. The result is an exponential instability, which Corley and Jacobson (1999) termed a black hole laser. This phenomenon was later observed in a Bose–Einstein condensate (Steinhauer, 2014), as discussed in Section [8.4](/research/hawking-radiation-review/section-8#84-spontaneous-emission-in-boseeinstein-condensates).

## 6.4 What remains open

The relevance of these results to gravity itself remains a matter of discussion. The dispersive models require a preferred frame, which in the gravitational context corresponds to a violation of local Lorentz invariance at high energies. An alternative line of argument holds that the relevant modes need never be Planckian in the frame of an infalling observer at the moment when the Hawking quanta separate from the vacuum, since this separation occurs only when their wavelength has become comparable to the size of the black hole (Jacobson, 2005; Polchinski, 2017); this is consistent with the extended emission region discussed in Remark 5.1. A complete resolution presumably requires a quantum theory of gravity. It is nonetheless significant that no proposed modification of short-distance physics that preserves adiabaticity and the vacuum character of the short-wavelength modes has been found to eliminate the effect, and it is this robustness that underlies the confidence with which the prediction is generally regarded.

> **Summary of the section**
>
> - Read backwards in time, the exponential redshift implies that the Hawking quanta emitted after a few milliseconds (for a solar-mass black hole) originate from trans-Planckian modes.
>
> - In models with modified dispersion, these modes are replaced by mode conversion of ingoing short-wavelength modes, and the thermal spectrum survives.
>
> - Universality requires adiabaticity and a ground state for the short-wavelength modes; the latter is an assumption about ultraviolet physics.
