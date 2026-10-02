---
slug: hawking-radiation-review/section-6
title: "The trans-Planckian problem"
date: 2024-12-01
summary: "Why the derivation seems to rely on modes beyond the Planck scale, what dispersive models show, and the two conditions on which the prediction rests."
series: hawking-radiation-review
part: section-6
order: 6
kicker: "Lecture 6"
---
Hawking's calculation treats the field as free and the geometry as fixed at every wavelength, however short. For almost all of the radiation, that assumption is applied far below the Planck length.

## 6.1 Statement of the problem

Read the exponential relation (3.2) backwards in time. A quantum of frequency $\omega \sim {T_{\mathrm{H}}}$ that reaches ${\mathscr{I}}^{+}$ at retarded time $u$ corresponds, near the horizon and in the frame of a freely falling observer, to a mode whose frequency grows as $\omega\,e^{\kappa u}$.[^1] The frequency reaches the Planck mass after a time

$$
u_{\mathrm{P}} \sim \frac{1}{\kappa}\ln\frac{{m_{\mathrm{P}}}}{{T_{\mathrm{H}}}} = 4M\ln(8\pi M),
\tag{6.1}
$$

where, in the last expression, $M$ is measured in Planck units. For a solar-mass black hole, $4M \approx 2\times 10^{-5}\,\mathrm{s}$ and $\ln(8\pi M/{m_{\mathrm{P}}}) \approx 90$, so $u_{\mathrm{P}}$ is a couple of milliseconds. The logarithm makes this short for every black hole: for one of $5\times 10^{14}\,\mathrm{g}$ it is a few times $10^{-22}\,\mathrm{s}$ (Problem 1). Essentially all the radiation therefore appears to come from modes whose wavelengths near the horizon were far below the Planck length, where a free field on a fixed background is not expected to be a good description. 't Hooft (1985) emphasised the difficulty, arguing that gravitational interactions near the horizon become strong, and Jacobson (1991) made it a sharp problem.

The logical status of the problem is often garbled. It is not an inconsistency in Hawking's derivation, which is correct for a free field on a fixed background, but the question of whether the result survives different short-distance physics. That cannot yet be settled in quantum gravity, but one can change the short-distance physics by hand in a model.

## 6.2 Dispersive models

Unruh (1995) did this in the acoustic analogue described in Lecture [8](/research/hawking-radiation-review/section-8).[^2] In a fluid flowing with velocity $v(x)$, a sound wave of laboratory frequency $\omega$ and wavenumber $k$ obeys a dispersion relation of the form

$$
(\omega - v k)^{2} = F(k)^{2}, \qquad F(k) \simeq c_{s}|k| \quad \text{for } |k| \ll k_{\mathrm{d}},
\tag{6.2}
$$

where $\omega - vk$ is the frequency in the frame comoving with the fluid, $\omega$ is conserved in a stationary flow, and $k_{\mathrm{d}}$ marks the departure from linearity. In the gravitational analogy $k_{\mathrm{d}}$ plays the part of the Planck scale, and with linear dispersion the fluid reproduces the problem exactly (Problem 2). Real fluids, however, have subluminal dispersion: $F(k)$ grows more slowly than $c_{s}|k|$ at large $|k|$. Unruh solved the wave equation numerically and found the thermal spectrum at ${T_{\mathrm{H}}} = \kappa/2\pi$ to high accuracy, although no mode ever attains an arbitrarily short wavelength.

With linear dispersion, an outgoing mode traced backwards in time hugs the horizon and is blueshifted without limit. With subluminal dispersion, short waves travel more slowly than long ones, and traced backwards the mode is eventually swept away from the horizon by the flow. Its ancestor is not a trans-Planckian mode lingering at the horizon but an ingoing short-wavelength mode that is converted near the horizon into an outgoing long-wavelength one. This mode conversion replaces the infinite blueshift. For superluminal dispersion, such as the Bogoliubov relation of a Bose–Einstein condensate, $F(k)^{2} = c_{s}^{2}k^{2} + (k^{2}/2m)^{2}$, the ancestral modes come instead from inside the horizon, but the conclusion is the same.

Jacobson (1993) imposed a short-distance cutoff on the field modes, Brout et al. (1995) analysed the problem in their review, and Corley and Jacobson (1996) computed the spectrum for both kinds of dispersion: it is thermal provided that $k_{\mathrm{d}}c_{s} \gg \kappa$.

## 6.3 Conditions for universality

A common misreading is that dispersion removes the high frequencies from the problem. It does not: the short-wavelength modes are still there, as the ingoing ancestors of the Hawking quanta, and their state matters. Unruh and Schützhold (2005) showed that, for a broad class of dispersion relations, the effect is universal under two conditions. The evolution of the relevant modes near the horizon must be adiabatic, which holds when the dispersion scale greatly exceeds $\kappa$. And the ingoing short-wavelength modes must be in their ground state.

The first condition is kinematical and easily met. For a solar-mass black hole $\kappa$ is about $3\times 10^{-39}$ in Planck units, so Planck-scale dispersion is adiabatic by an enormous margin. The second is different in kind: in gravity it is an assumption about the ultraviolet completion of the theory. The problem is therefore not so much resolved as relocated: the prediction is insensitive to short-distance physics provided that those degrees of freedom are unexcited. This is the content of the Hadamard condition of Fredenhagen and Haag (1990) (Section [4.5](/research/hawking-radiation-review/section-4#45-rigorous-results-and-universality)).

> **Remark 6.1.**
>
> Dispersion also produces effects with no counterpart in the linear theory. With superluminal dispersion, in a flow with both a black hole horizon and an inner, white hole, horizon, modes bounce between the two and are amplified at each passage. The resulting exponential instability is what Corley and Jacobson (1999) called a black hole laser; it has been reported in a Bose–Einstein condensate (Steinhauer, 2014) (Section [8.4](/research/hawking-radiation-review/section-8#84-spontaneous-emission-in-boseeinstein-condensates)).

## 6.4 What remains open

It helps to separate what has been shown from what has been assumed. For linear field theories with modified dispersion on stationary backgrounds, it is established that adiabaticity and a ground state for the ingoing short-wavelength modes are enough to give a thermal flux at $\kappa/2\pi$, with corrections that vanish as $\kappa/k_{\mathrm{d}}c_{s} \to 0$. The experiments of Lecture [8](/research/hawking-radiation-review/section-8) probe the same mechanism in real media.

Carrying these results over to gravity requires two assumptions. One is that the ultraviolet behaves like a dispersive medium. That needs a preferred frame, hence a violation of local Lorentz invariance at high energies, which nothing obliges quantum gravity to supply. The other is the ground-state condition, which no model can derive without knowing the high-energy theory. There is also a gap: the models are free field theories, whereas the concern of 't Hooft (1985) was the gravitational interaction between ingoing and outgoing quanta.

A different argument avoids the preferred frame. The relevant modes need never be Planckian in the frame of an infalling observer at the moment the Hawking quanta separate from the vacuum, because this happens only once their wavelength is comparable to the size of the black hole (Jacobson, 2005; Polchinski, 2017). This fits the extended emission region of Remark 5.1. For gravity we find it the more convincing argument, but it concerns where the physics happens; it is not a calculation in quantum gravity, which a complete resolution presumably requires. Still, no modification of short-distance physics that preserves both conditions has been found to eliminate the effect, and that is the real basis for confidence in the prediction.

## Problems

1. Derive Eq. (6.1) by setting ${T_{\mathrm{H}}}\,e^{\kappa u}$ equal to the Planck mass. Evaluate $u_{\mathrm{P}}$ for a solar-mass black hole (about $2\,\mathrm{ms}$) and for a black hole of $5\times 10^{14}\,\mathrm{g}$ (about $2\times 10^{-22}\,\mathrm{s}$), and compare the second with that black hole's lifetime.

2. Model the flow near a sonic horizon by a constant $c_{s}$ and $v(x) = -c_{s} + \kappa x$, so that the horizon is at $x = 0$. With linear dispersion, show that an outgoing ray outside the horizon obeys $x(t) = x_{0}e^{\kappa t}$, and, using conservation of $\omega$ on the branch $\omega - vk = c_{s}k$, that its wavenumber is $k(t) = (\omega/\kappa x_{0})\,e^{-\kappa t}$. Find the time $t_{\mathrm{d}} < 0$ at which $k$ reached $k_{\mathrm{d}}$ and show that it has the logarithmic form of Eq. (6.1).

3. For the Bogoliubov relation $F(k)^{2} = c_{s}^{2}k^{2} + (k^{2}/2m)^{2}$ (with $\hbar = 1$), show that the group velocity ${\mathrm{d}} F/{\mathrm{d}} k$ exceeds $c_{s}$ for every $k > 0$. Identify the dispersion scale as the wavenumber at which the two terms are equal, $k_{\mathrm{d}} = 2mc_{s}$, and express the condition of Corley and Jacobson (1996) as a condition on $mc_{s}^{2}$ and $\kappa$. Explain why superluminal propagation allows the ancestral modes to come from inside the horizon.

4. A colleague argues that, because the Hawking quanta of a solar-mass black hole descend from trans-Planckian modes, the prediction ${T_{\mathrm{H}}} = \kappa/2\pi$ cannot be trusted. Write a half-page reply stating what the dispersive models establish, which of the two conditions of Section [6.3](#63-conditions-for-universality) carries the weight in gravity and why, and one piece of physics that the models leave out.

## Notes and further reading

Jacobson (1991) is short and states the problem clearly; read it first. Unruh (1995) is the paper that changed the discussion, and Corley and Jacobson (1996) is the analytical treatment to work through with a pencil. The conditions for universality are set out in Unruh and Schützhold (2005). The lecture notes of Jacobson (2005) give a balanced account of the whole question, including the argument from the infalling frame.

For a sceptical view of the standard derivations, which takes the trans-Planckian problem more seriously than most authors do, see Helfer (2003). We recommend it precisely because it disagrees with the consensus presented here.

[^1]: Frequency is not a Lorentz invariant; the statement refers to a fixed family of free-fall frames, for example observers dropped from rest far away at successive times (see Section [6.4](#64-what-remains-open)).

[^2]: The analogy itself was introduced by Unruh (1981); the 1995 paper added the dispersion.
