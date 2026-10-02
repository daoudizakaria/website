---
slug: hawking-radiation-review/section-3
title: "Hawking's calculation"
date: 2024-12-01
summary: "The calculation itself: exponential peeling of outgoing rays, the thermal ratio of the Bogoliubov coefficients, and the state of the radiation and its partners."
series: hawking-radiation-review
part: section-3
order: 3
kicker: "Lecture 3"
---
In 1973 Hawking set out to put the argument of Zel'dovich and Starobinsky (Section [2.5](/research/hawking-radiation-review/section-2#25-superradiance)) on a firm footing. He expected to confirm that a rotating black hole emits in its superradiant modes, and that the emission stops when the rotation does. It does not stop. A Schwarzschild black hole formed by collapse and then left alone emits a steady flux of particles with a thermal spectrum at the temperature $\kappa/2\pi$ (Hawking, 1974, 1975).[^1] We follow his argument in a stripped-down form that keeps only the steps that matter.

## 3.1 Set-up

We take a spherical star that collapses to form a Schwarzschild black hole, and on the resulting spacetime (Fig. 1) we place a free massless scalar field. We assume that before the collapse the field is in the vacuum defined by the natural time coordinate at past null infinity ${\mathscr{I}}^{-}$: nothing comes in from infinity. We assume that the collapsing matter is transparent to the field, so that an ingoing wave passes through the centre and comes out again; this is a convenience, and nothing essential depends on it. And we neglect the backreaction of the field on the geometry. The last assumption is the one that eventually fails, and we return to it in Section [5.6](/research/hawking-radiation-review/section-5#56-backreaction-and-the-end-point).

The question is what an observer at future null infinity ${\mathscr{I}}^{+}$ detects at late times. In the language of Section [2.3](/research/hawking-radiation-review/section-2#23-quantum-fields-in-curved-spacetime), the in-modes are positive frequency with respect to the advanced time $v$ on ${\mathscr{I}}^{-}$, the out-modes with respect to the retarded time $u$ on ${\mathscr{I}}^{+}$, and the number of out-quanta in the in-vacuum is $\sum|\beta|^{2}$ by Eq. (2.9). A single property of the geometry turns out to fix the $\beta$ coefficients.

![Penrose diagram of a black hole formed by the collapse of a star (shaded). Ingoing rays from ℐ⁻ pass through the centre r = 0 and emerge as outgoing rays. The ray that leaves ℐ⁻ at the advanced time v₀ generates the event horizon (dashed). A ray that leaves ℐ⁻ slightly before v₀ (thick) stays close to the horizon for a long time and reaches ℐ⁺ at a late retarded time u; an earlier ray (grey) escapes promptly.](/uploads/research/hawking-penrose-collapse.png "Figure 1: Penrose diagram of a black hole formed by the collapse of a star (shaded). Ingoing rays from ℐ⁻ pass through the centre r = 0 and emerge as outgoing rays. The ray that leaves ℐ⁻ at the advanced time v₀ generates the event horizon (dashed). A ray that leaves ℐ⁻ slightly before v₀ (thick) stays close to the horizon for a long time and reaches ℐ⁺ at a late retarded time u; an earlier ray (grey) escapes promptly.")

## 3.2 The exponential redshift

Consider an ingoing radial light ray that leaves ${\mathscr{I}}^{-}$ at advanced time $v$. It falls inwards, passes through the centre of the star and emerges as an outgoing ray. There is a last ray that escapes to infinity; we call its advanced time $v_{0}$. This ray generates the event horizon. A ray that leaves slightly before $v_{0}$ lingers just outside the horizon and reaches ${\mathscr{I}}^{+}$ at a late retarded time $u$ (the thick ray in Fig. 1). We want $u(v)$ as $v \to v_{0}$.

The trick is to label the outgoing rays near the horizon not by $u$, which is infinite on the horizon, but by the Kruskal coordinate $U$ of Eq. (2.2), which is regular there and vanishes on the horizon itself. The map $v \mapsto U(v)$ is fixed by the passage of the ray through the star. Whatever the star is made of, this passage is smooth, so $U(v)$ is smooth and monotonic with $U(v_{0}) = 0$, and near $v_{0}$ the first term of its Taylor series is enough:

$$
U \simeq -c\,(v_{0} - v), \qquad c > 0 .
\tag{3.1}
$$

Outside the star, the relation between $U$ and $u$ is pure Schwarzschild geometry, $U = -\kappa^{-1}e^{-\kappa u}$. Eliminating $U$ gives

$$
v_{0} - v \simeq C\,e^{-\kappa u}, \qquad u \to \infty,
\tag{3.2}
$$

with $C = (c\kappa)^{-1}$. This is the exponential relation promised in Section [2.1](/research/hawking-radiation-review/section-2#21-the-schwarzschild-geometry-and-surface-gravity): a wave that reaches ${\mathscr{I}}^{+}$ with frequency $\omega$ at retarded time $u$ left ${\mathscr{I}}^{-}$ with a frequency of order $\omega\,e^{\kappa u}$, a redshift that grows exponentially with time.

A common error at this point is to look for the exponential inside the star. It is not there. The interior supplies the linear map (3.1) and fixes only the constant $c$; the exponential comes from the exterior relation between $U$ and $u$, at a rate set by the surface gravity alone.

The numbers are worth seeing once. For a solar-mass black hole, $\kappa^{-1} = 4GM/c^{3} \approx 20\,\mu\mathrm{s}$. A millisecond of retarded time therefore multiplies the redshift by about $e^{50} \approx 5\times 10^{21}$. A Hawking quantum detected a couple of milliseconds after the horizon forms must be traced back to a wave on ${\mathscr{I}}^{-}$ with a frequency above the Planck scale. This is the trans-Planckian problem of Lecture [6](/research/hawking-radiation-review/section-6).

> **Remark 3.1.**
>
> The details of the collapse enter Eq. (3.2) only through the constant $C$, while the exponent is fixed by the surface gravity of the final black hole. We should therefore expect the late-time radiation not to depend on how the black hole was formed, and the argument to apply to any horizon, gravitational or not, across which the natural coordinates of the two sides are related exponentially. Both expectations are borne out (Section [4.5](/research/hawking-radiation-review/section-4#45-rigorous-results-and-universality) and Lecture [8](/research/hawking-radiation-review/section-8)).

## 3.3 The Bogoliubov coefficients

Take an out-mode of frequency $\omega$ and angular quantum numbers $(\ell, m)$, which near ${\mathscr{I}}^{+}$ has the form $p_{\omega} \propto r^{-1}e^{-i\omega u}Y_{\ell m}$, and run it backwards in time. Part of it scatters off the curvature potential outside the star and reaches ${\mathscr{I}}^{-}$ at late advanced times as $e^{-i\omega v}$, which is positive frequency and contributes nothing to $\beta$. The rest, a fraction $\Gamma_{\omega\ell}$ in probability, enters the star, passes through the centre and reaches ${\mathscr{I}}^{-}$ just before $v_{0}$. Substituting $u(v)$ from Eq. (3.2) into $e^{-i\omega u}$, we find

$$
p_{\omega}\big|_{{\mathscr{I}}^{-}} \propto
\begin{cases}
\exp\!\left[\dfrac{i\omega}{\kappa}\ln\dfrac{v_{0} - v}{C}\right], & v < v_{0},\\[1ex]
0, & v > v_{0}.
\end{cases}
\tag{3.3}
$$

This function oscillates infinitely often as $v \to v_{0}$ and vanishes beyond it. It is not positive frequency with respect to $v$, and we need to know by how much it fails to be.

Rather than compute Fourier integrals, we repeat the analyticity argument of Section [2.4](/research/hawking-radiation-review/section-2#24-a-warm-up-the-unruh-effect) with $v_{0} - v$ in place of $-U$ and $\kappa$ in place of $a$. A function of $v$ is a superposition of in-modes $e^{-i\omega' v}$, $\omega' > 0$, if and only if it is analytic and bounded in the lower half $v$-plane. Continuing $(v_{0} - v)^{i\omega/\kappa}$ to $v > v_{0}$ through that half-plane rotates $v_{0} - v$ by $e^{i\pi}$ and produces the factor $e^{-\pi\omega/\kappa}$, as in Eq. (2.13). Hence (3.3) plus $e^{-\pi\omega/\kappa}$ times its mirror image, the function $[(v - v_{0})/C]^{i\omega/\kappa}$ supported on $v > v_{0}$, is purely positive frequency. Its negative-frequency content vanishes, so the negative-frequency content of the traced mode equals $-e^{-\pi\omega/\kappa}$ times that of the mirror image; and the reflection $v - v_{0} \to v_{0} - v$ shows that the negative-frequency content of the mirror image has the modulus of the positive-frequency content of the traced mode. Together these give

$$
|\beta_{\omega\omega'}|^{2} = e^{-2\pi\omega/\kappa}\,|\alpha_{\omega\omega'}|^{2}
\tag{3.4}
$$

for the transmitted part of the mode.[^2] Hawking (1975) obtained the same relation by evaluating the integrals explicitly. Both are proportional to the same Gamma function, and their ratio comes entirely from the phase of $\pm i\omega'$ raised to a complex power.

The rest is algebra. The normalisation condition of Section [2.3](/research/hawking-radiation-review/section-2#23-quantum-fields-in-curved-spacetime), applied to the transmitted part of the mode, reads $\sum_{\omega'}(|\alpha_{\omega\omega'}|^{2} - |\beta_{\omega\omega'}|^{2}) = \Gamma_{\omega\ell}$. With Eq. (3.4) it becomes $(e^{2\pi\omega/\kappa} - 1)\sum_{\omega'}|\beta_{\omega\omega'}|^{2} = \Gamma_{\omega\ell}$, so that

$$
\langle N_{\omega\ell m}\rangle = \sum_{\omega'}|\beta_{\omega\omega'}|^{2} = \frac{\Gamma_{\omega\ell}}{e^{2\pi\omega/\kappa} - 1}.
\tag{3.5}
$$

For modes of sharp frequency this number carries a divergent factor, because such a mode lasts forever and so does the emission. With normalised wave packets the divergence becomes the duration of the emission, and one obtains a steady rate; the factor $1/2\pi$ below counts wave packets per unit time and per unit frequency. For a Kerr–Newman black hole the general result is

$$
\frac{{\mathrm{d}} N}{{\mathrm{d}} t\,{\mathrm{d}}\omega} = \frac{1}{2\pi}\sum_{\ell, m}
\frac{\Gamma_{\omega\ell m}}
{\exp\!\left[(\omega - m\Omega_{\mathrm{H}} - q\Phi_{\mathrm{H}})/{T_{\mathrm{H}}}\right] \mp 1},
\qquad {T_{\mathrm{H}}} = \frac{\kappa}{2\pi},
\tag{3.6}
$$

where $q$ is the charge of the emitted particle, the upper sign applies to bosons and the lower sign to fermions. With outer and inner horizons at $r_{\pm}$ and $a = J/M$, the surface gravity and the angular velocity of the horizon are $\kappa = (r_{+} - r_{-})/[2(r_{+}^{2} + a^{2})]$ and $\Omega_{\mathrm{H}} = a/(r_{+}^{2} + a^{2})$; for $r_{-} = a = 0$ the first reduces to $1/4M$, as it should. Superradiance (2.18) is built in: for bosons with $\omega < m\Omega_{\mathrm{H}} + q\Phi_{\mathrm{H}}$ the Planck factor is negative, and so is the greybody factor, since such waves are amplified rather than absorbed. The positive product is the spontaneous emission that Zel'dovich and Starobinsky anticipated.

Equation (3.6) is the central result of the course. A black hole emits particles of every species as a black body at temperature ${T_{\mathrm{H}}}$, except that the Planck spectrum is multiplied by the greybody factor $\Gamma_{\omega\ell m}$. This is the probability that a wave leaving the vicinity of the horizon crosses the curvature potential and reaches infinity. By time-reversal symmetry it equals the probability that a wave sent in from infinity is absorbed, and it is computed in Section [5.1](/research/hawking-radiation-review/section-5#51-greybody-factors).

## 3.4 A heuristic derivation from the Unruh effect

The similarity with the Unruh effect of Section [2.4](/research/hawking-radiation-review/section-2#24-a-warm-up-the-unruh-effect) is no accident, and it yields the temperature in a few lines. Close to the horizon, over distances small compared with $M$, the Schwarzschild geometry is indistinguishable from flat spacetime in Rindler coordinates. A static observer at radius $r$ is then simply an accelerated observer, with proper acceleration $a(r) = M/(r^{2}\sqrt{f})$. Suppose that the field near the horizon looks like the vacuum to freely falling observers, as it must if nothing singular happens there. The static observer then sees a thermal bath at the local Unruh temperature $a(r)/2\pi$. Thermal radiation that climbs out of a gravitational potential is redshifted, and the temperature measured at infinity is lower by the factor $\sqrt{f}$ (the Tolman relation; see Wald, 1994).[^3] Hence

$$
T_{\infty} = \sqrt{f(r)}\,\frac{a(r)}{2\pi} = \frac{M}{2\pi r^{2}} \;\xrightarrow{\;r\,\to\,2M\;}\; \frac{1}{8\pi M} = \frac{\kappa}{2\pi},
\tag{3.7}
$$

in agreement with Eq. (3.6). The limit $r \to 2M$ is essential: only there is the local state close to the Rindler vacuum, so only there is the local temperature the Unruh temperature.

For quick reasoning about horizons this is the most useful form of the result. It shows that the Hawking temperature is the Unruh temperature of the surface gravity, and it isolates the assumption on which everything rests: the state must look locally like the vacuum to an infalling observer at the horizon. Its limitations are as instructive. It gives no greybody factors, and it cannot tell an outgoing flux from equilibrium with an incoming bath, since both are regular on the future horizon (Section [4.1](/research/hawking-radiation-review/section-4#41-the-choice-of-state)). Hawking's calculation derives the regularity from the collapse instead of assuming it, and selects the outgoing flux.

## 3.5 The state of the radiation

We now ask for the late-time state itself, not only for the number of quanta. The analyticity argument of Section [3.3](#33-the-bogoliubov-coefficients) combined each out-mode with its mirror image on $v > v_{0}$. Followed forwards in time, the mirror image is a mode that travels into the black hole; we call it the partner mode. Exactly as in Eq. (2.17), the in-vacuum can be written, for each late-time mode, as

$$
{\lvert 0_{\mathrm{in}} \rangle} \propto \sum_{n=0}^{\infty} e^{-\pi n\omega/\kappa}\,{\lvert n_{\omega} \rangle}_{\mathrm{out}}\otimes{\lvert n_{\omega} \rangle}_{\mathrm{partner}}.
\tag{3.8}
$$

The state is pure. Each outgoing quantum, however, is entangled with a partner quantum behind the horizon. An observer outside has no access to the partners and must describe the radiation by the reduced density matrix obtained by tracing them out, $\rho_{\omega} = (1 - e^{-\omega/{T_{\mathrm{H}}}})\sum_{n}e^{-n\omega/{T_{\mathrm{H}}}}{\lvert n_{\omega} \rangle}{\langle n_{\omega} \rvert}$, which is exactly thermal. Wald (1975) and, independently, Parker (1975) proved that the radiation is described by a thermal density matrix with no correlations between different out-modes.

Equation (3.8) is the precise version of the pair picture of Section [1.3](/research/hawking-radiation-review/section-1#13-a-heuristic-picture-and-its-limitations). It also contains the seed of the information problem. If the black hole eventually disappears, the partners disappear with it, and the radiation left behind is in a mixed state (Lecture [7](/research/hawking-radiation-review/section-7)).

> **Remark 3.2.**
>
> The pair picture invites the misreading that each quantum is created at the horizon, close to its partner. The modes in Eq. (3.8) are not localised in this way: a typical Hawking quantum, with a frequency of a few ${T_{\mathrm{H}}}$, has a wavelength of some tens of Schwarzschild radii (Remark 5.1).

## 3.6 Energy, area, and entropy

Positive energy carried to infinity must be paid for by a loss of mass. The outgoing flux at infinity is accompanied by a flux of negative energy across the horizon (Section [4.3](/research/hawking-radiation-review/section-4#43-the-stress-energy-tensor-and-the-trace-anomaly)), and the area decreases. This does not contradict the area theorem of Hawking (1971a), because the renormalised stress-energy tensor violates the null energy condition near the horizon. It does mean that the area theorem is not fundamental. Its place is taken by the generalised second law, which survives because the entropy of the radiation more than compensates the loss of black hole entropy (Bekenstein, 1974; Wald, 2001).

Once the temperature is known, the first law (2.4) fixes the entropy. For a Schwarzschild black hole ${\mathrm{d}} S = {\mathrm{d}} M/{T_{\mathrm{H}}} = 8\pi M\,{\mathrm{d}} M$, which integrates to $S = 4\pi M^{2} = A/4$, the Bekenstein–Hawking entropy (1.2). The constant of integration is set to zero by requiring $S \to 0$ as $M \to 0$, an assumption that the semiclassical calculation cannot check. The resulting thermodynamics is peculiar. Since ${T_{\mathrm{H}}} \propto 1/M$, the heat capacity

$$
C = \frac{{\mathrm{d}} M}{{\mathrm{d}}{T_{\mathrm{H}}}} = -8\pi M^{2}
\tag{3.9}
$$

is negative. A black hole that radiates becomes hotter and radiates faster, and one in contact with an infinite heat bath cannot be in stable equilibrium: slightly hotter than the bath, it evaporates; slightly colder, it grows. The same instability reappears in the Euclidean approach (Section [4.2](/research/hawking-radiation-review/section-4#42-euclidean-methods)).

## 3.7 Orders of magnitude

Restoring units, the Hawking temperature reads ${T_{\mathrm{H}}} \simeq 6.17\times 10^{-8}\,\mathrm{K}\,({M_{\odot}}/M)$, or, in energy units, $k_{\mathrm{B}}{T_{\mathrm{H}}} \simeq 1.06\,\mathrm{GeV}\,(10^{13}\,\mathrm{g}/M)$. Table 2 gives representative values; the lifetimes are derived in Lecture [5](/research/hawking-radiation-review/section-5).

Two conclusions follow at once. Astrophysical black holes are far colder than the cosmic microwave background, whose temperature is $2.725\,\mathrm{K}$: setting ${T_{\mathrm{H}}} = 2.725\,\mathrm{K}$ in the first formula gives $M \simeq 2.3\times 10^{-8}\,{M_{\odot}} \simeq 4.5\times 10^{22}\,\mathrm{kg}$, somewhat less than the mass of the Moon. Every black hole formed by stellar collapse therefore absorbs more radiation today than it emits. At the other end, black holes lighter than about $10^{16}\,\mathrm{g}$ radiate at nuclear and particle-physics energies, and those near $5\times 10^{14}\,\mathrm{g}$ would be completing their evaporation today. Only the early universe could have made black holes this light, which is why the search for Hawking radiation is a search for primordial black holes (Lecture [9](/research/hawking-radiation-review/section-9)).

| Mass | Example | $r_{\mathrm{s}} = 2GM/c^{2}$ | ${T_{\mathrm{H}}}$ | Lifetime |
| --- | --- | --- | --- | --- |
| $10\,{M_{\odot}}$ | Stellar black hole | $30\,\mathrm{km}$ | $6\times 10^{-9}\,\mathrm{K}$ | $\sim 10^{70}\,\mathrm{yr}$ |
| ${M_{\odot}}$ | | $3\,\mathrm{km}$ | $6\times 10^{-8}\,\mathrm{K}$ | $\sim 10^{67}\,\mathrm{yr}$ |
| $4.5\times 10^{25}\,\mathrm{g}$ | ${T_{\mathrm{H}}} = T_{\mathrm{CMB}}$ | $0.07\,\mathrm{mm}$ | $2.7\,\mathrm{K}$ | $\sim 10^{44}\,\mathrm{yr}$ |
| $10^{20}\,\mathrm{g}$ | Asteroid mass | $1.5\times 10^{-10}\,\mathrm{m}$ | $\approx 100\,\mathrm{eV}$ | $\sim 10^{26}\,\mathrm{yr}$ |
| $5\times 10^{14}\,\mathrm{g}$ | Evaporating today | $7\times 10^{-16}\,\mathrm{m}$ | $\approx 20\,\mathrm{MeV}$ | $\approx 1.4\times 10^{10}\,\mathrm{yr}$ |
| $10^{9}\,\mathrm{g}$ | | $1.5\times 10^{-21}\,\mathrm{m}$ | $\approx 10\,\mathrm{TeV}$ | $\sim 0.4\,\mathrm{s}$ |

_Table 2: Characteristic scales of Schwarzschild black holes. The lifetimes are order-of-magnitude estimates that depend on the particle species emitted (Section [5.2](/research/hawking-radiation-review/section-5#52-luminosity-mass-loss-and-lifetime)); they neglect accretion, including the absorption of the cosmic microwave background._

## Notes and further reading

The original paper, Hawking (1975), is still worth reading in full once the argument of this lecture is familiar; its treatment of wave packets and of the scattering outside the star is more careful than ours, and the short announcement Hawking (1974) shows how quickly the main points were in place. For a first reading we recommend Jacobson (2005), which follows the same route as this lecture with more attention to the near-horizon geometry and to the trans-Planckian question. Birrell and Davies (1982) give the standard textbook account of particle creation by a collapsing body, and Wald (1994) gives the mathematically careful version, including the construction of the state that underlies Eq. (3.8).

On the thermal character of the state, the papers of Wald (1975) and Parker (1975) remain the references; both are short. Brout et al. (1995) is a long but readable primer that is especially good on the partner modes and on the physical interpretation of the pair picture.

[^1]: The announcement was a two-page letter to _Nature_ in March 1974. The detailed paper, submitted the same year, appeared in 1975.

[^2]: References differ in whether $\alpha$ and $\beta$ carry complex conjugates and in the order of their indices. Only moduli enter here, so these conventions do not affect any result of this lecture.

[^3]: Tolman's result is that $T\sqrt{-g_{tt}}$ is constant in a static spacetime in thermal equilibrium.
