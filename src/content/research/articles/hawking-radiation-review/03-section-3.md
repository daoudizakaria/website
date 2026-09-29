---
slug: hawking-radiation-review/section-3
title: "Hawking's calculation"
date: 2024-12-01
summary: "Hawking's argument step by step: the exponential redshift near a forming horizon, the Bogoliubov coefficients, the state of the radiation, and the entropy that it implies."
series: hawking-radiation-review
part: section-3
order: 3
kicker: "Section 3"
---
We are now in a position to follow the argument of Hawking (1974, 1975). We present it in a simplified form that isolates the essential steps; a careful treatment may be found in Hawking (1975), Birrell and Davies (1982), and Jacobson (2005).

## 3.1 Set-up

We consider a star that undergoes spherically symmetric gravitational collapse to form a Schwarzschild black hole, and a free massless scalar field propagating on the resulting spacetime, whose Penrose diagram is shown in Fig. 1. We make the following assumptions.

(i) Before the collapse, the field is in its vacuum state with respect to the natural time coordinate at past null infinity ${\mathscr{I}}^{-}$; there is no incoming radiation.

(ii) The field propagates freely through the collapsing matter, which is taken to be transparent; nothing essential depends on this assumption.

(iii) The backreaction of the field on the geometry is neglected.

The question is what an observer at future null infinity ${\mathscr{I}}^{+}$ detects at late times. In the language of Section [2.3](/research/hawking-radiation-review/section-2#23-quantum-fields-in-curved-spacetime), the in-modes are the modes that are positive frequency with respect to the advanced time $v$ on ${\mathscr{I}}^{-}$, the out-modes are those that are positive frequency with respect to the retarded time $u$ on ${\mathscr{I}}^{+}$, and the task is to compute the Bogoliubov coefficients relating the two.

![Penrose diagram of a black hole formed by the collapse of a star (shaded). Ingoing rays from ℐ⁻ pass through the centre r = 0 and emerge as outgoing rays. The ray that leaves ℐ⁻ at the advanced time v₀ generates the event horizon (dashed). A ray that leaves ℐ⁻ slightly before v₀ (thick) remains close to the horizon for a long time and reaches ℐ⁺ at a late retarded time u; an earlier ray (grey) escapes promptly.](/uploads/research/hawking-penrose-collapse.png "Figure 1: Penrose diagram of a black hole formed by the collapse of a star (shaded). Ingoing rays from ℐ⁻ pass through the centre r = 0 and emerge as outgoing rays. The ray that leaves ℐ⁻ at the advanced time v₀ generates the event horizon (dashed). A ray that leaves ℐ⁻ slightly before v₀ (thick) remains close to the horizon for a long time and reaches ℐ⁺ at a late retarded time u; an earlier ray (grey) escapes promptly.")

## 3.2 The exponential redshift

The whole calculation rests on a single geometrical fact, which we now derive. Consider an ingoing radial light ray that leaves ${\mathscr{I}}^{-}$ at advanced time $v$. It travels inwards, passes through the centre of the star, and emerges as an outgoing ray. Let $v_{0}$ denote the last ray that escapes to infinity; this ray generates the event horizon. A ray with $v$ slightly less than $v_{0}$ emerges just outside the horizon, lingers near it for a long time, and eventually reaches ${\mathscr{I}}^{+}$ at a late retarded time $u$ (Fig. 1).

To find the relation between $v$ and $u$, it is convenient to label the outgoing rays near the horizon by the Kruskal coordinate $U$ of Eq. (2.2), which is regular across the horizon, with $U = 0$ on the horizon itself. The map $v \mapsto U(v)$ is determined by the propagation of the ray through the smooth interior of the star. It is therefore a smooth, monotonic function, with $U(v_{0}) = 0$, and near $v_{0}$ it may be approximated by the first term of its Taylor expansion,

$$
U \simeq -c\,(v_{0} - v), \qquad c > 0 .
\tag{3.1}
$$

Outside the star, on the other hand, the relation between $U$ and $u$ is fixed by the Schwarzschild geometry, $U = -\kappa^{-1}e^{-\kappa u}$. Combining the two relations gives

$$
v_{0} - v \simeq C\,e^{-\kappa u}, \qquad u \to \infty,
\tag{3.2}
$$

with $C = (c\kappa)^{-1}$. This is the exponential relation announced in Section [2.1](/research/hawking-radiation-review/section-2#21-the-schwarzschild-geometry-and-surface-gravity): equal intervals of retarded time at late times correspond to exponentially shrinking intervals of advanced time. Equivalently, a wave that reaches ${\mathscr{I}}^{+}$ with frequency $\omega$ at retarded time $u$ left ${\mathscr{I}}^{-}$ with frequency of order $\omega\,e^{\kappa u}$; the gravitational redshift between ${\mathscr{I}}^{-}$ and ${\mathscr{I}}^{+}$ grows exponentially with time.

> **Remark 3.1.**
>
> The details of the collapse enter Eq. (3.2) only through the constant $C$, whereas the exponent is fixed by the surface gravity of the final black hole. We should therefore expect the late-time radiation to be independent of how the black hole was formed, in accordance with the no-hair property. We should also expect the argument to apply to any horizon, gravitational or not, across which the relation between the natural coordinates of the two sides is exponential. Both expectations are borne out (Sections [4.5](/research/hawking-radiation-review/section-4#45-rigorous-results-and-universality) and [8](/research/hawking-radiation-review/section-8)).

## 3.3 The Bogoliubov coefficients

Consider an out-mode with frequency $\omega$ and angular momentum quantum numbers $(\ell, m)$, which near ${\mathscr{I}}^{+}$ has the form $p_{\omega} \propto r^{-1}e^{-i\omega u}Y_{\ell m}$. We trace this mode backwards in time. Part of it is scattered by the curvature potential outside the star and reaches ${\mathscr{I}}^{-}$ at late advanced times; this part is of the form $e^{-i\omega v}$, is positive frequency with respect to $v$, and contributes nothing to the $\beta$ coefficients. The remaining part, with a probability that we denote by $\Gamma_{\omega\ell}$, passes through the collapsing star and reaches ${\mathscr{I}}^{-}$ just before $v_{0}$. Using Eq. (3.2), this part has the form

$$
p_{\omega}\big|_{{\mathscr{I}}^{-}} \propto
\begin{cases}
\exp\!\left[\dfrac{i\omega}{\kappa}\ln\dfrac{v_{0} - v}{C}\right], & v < v_{0},\\[1ex]
0, & v > v_{0},
\end{cases}
\tag{3.3}
$$

which oscillates infinitely rapidly as $v \to v_{0}$. This function is clearly not positive frequency with respect to $v$. To extract its negative-frequency content we can repeat, almost word for word, the analyticity argument of Section [2.4](/research/hawking-radiation-review/section-2#24-a-warm-up-the-unruh-effect). The in-modes $e^{-i\omega' v}$ with $\omega' > 0$ are analytic and bounded in the lower half of the complex $v$-plane. Continuing $(v_{0} - v)^{i\omega/\kappa}$ from $v < v_{0}$ to $v > v_{0}$ through the lower half-plane produces the factor $e^{-\pi\omega/\kappa}$, exactly as in Eq. (2.13). The upshot is that the Bogoliubov coefficients of the transmitted part satisfy

$$
|\beta_{\omega\omega'}|^{2} = e^{-2\pi\omega/\kappa}\,|\alpha_{\omega\omega'}|^{2}.
\tag{3.4}
$$

Hawking (1975) obtained the same relation by evaluating the Fourier integrals explicitly, which yields expressions involving $\Gamma(1 - i\omega/\kappa)$ whose ratio is precisely the factor in Eq. (3.4).

The normalisation condition of Section [2.3](/research/hawking-radiation-review/section-2#23-quantum-fields-in-curved-spacetime), applied to the transmitted part of the mode, gives $\sum_{\omega'}(|\alpha_{\omega\omega'}|^{2} - |\beta_{\omega\omega'}|^{2}) = \Gamma_{\omega\ell}$. Combining this with Eq. (3.4) yields

$$
\langle N_{\omega\ell m}\rangle = \sum_{\omega'}|\beta_{\omega\omega'}|^{2} = \frac{\Gamma_{\omega\ell}}{e^{2\pi\omega/\kappa} - 1}.
\tag{3.5}
$$

For modes of definite frequency this expression contains a divergent factor, which reflects the fact that the emission continues for an infinite time. When the calculation is done with normalised wave packets, the divergence is replaced by the duration of the emission, and one obtains a steady emission rate. For a Kerr–Newman black hole the general result reads

$$
\frac{{\mathrm{d}} N}{{\mathrm{d}} t\,{\mathrm{d}}\omega} = \frac{1}{2\pi}\sum_{\ell, m}
\frac{\Gamma_{\omega\ell m}}
{\exp\!\left[(\omega - m\Omega_{\mathrm{H}} - q\Phi_{\mathrm{H}})/{T_{\mathrm{H}}}\right] \mp 1},
\qquad {T_{\mathrm{H}}} = \frac{\kappa}{2\pi},
\tag{3.6}
$$

where $q$ is the charge of the emitted particle, the upper sign applies to bosons, and the lower sign to fermions. For a Kerr–Newman black hole with outer and inner horizons $r_{\pm}$ and $a = J/M$, the surface gravity and the angular velocity of the horizon are $\kappa = (r_{+} - r_{-})/[2(r_{+}^{2} + a^{2})]$ and $\Omega_{\mathrm{H}} = a/(r_{+}^{2} + a^{2})$. Note that the superradiant condition (2.18) appears naturally in Eq. (3.6): the Planck factor changes sign when $\omega < m\Omega_{\mathrm{H}}$.

Equation (3.6) is the central result. It states that a black hole emits particles of all species as a black body at the temperature ${T_{\mathrm{H}}}$, except that the Planck spectrum is multiplied by the greybody factor $\Gamma_{\omega\ell m}$. The latter is the probability that a wave emerging from the vicinity of the horizon traverses the curvature potential and reaches infinity; by time-reversal symmetry, it equals the probability that a wave sent in from infinity is absorbed by the black hole. It is discussed further in Section [5.1](/research/hawking-radiation-review/section-5#51-greybody-factors).

## 3.4 A heuristic derivation from the Unruh effect

The close similarity between Section [2.4](/research/hawking-radiation-review/section-2#24-a-warm-up-the-unruh-effect) and Section [3.3](#33-the-bogoliubov-coefficients) suggests a shortcut, which is worth presenting because it makes the physical origin of the temperature transparent. Close to the horizon, and over distances small compared with $M$, the Schwarzschild geometry is indistinguishable from flat spacetime in Rindler coordinates: a static observer at radius $r$ is simply an accelerated observer with proper acceleration $a(r) = M/(r^{2}\sqrt{f})$. If the state of the field near the horizon looks like the vacuum to freely falling observers, as it should if nothing singular happens at the horizon, then the static observer detects a thermal bath at the local Unruh temperature $a(r)/2\pi$. Thermal radiation climbing out of a gravitational potential is redshifted, and its temperature measured at infinity is reduced by the factor $\sqrt{f}$ (the Tolman relation; see Wald, 1994). The temperature measured at infinity is therefore

$$
T_{\infty} = \sqrt{f(r)}\,\frac{a(r)}{2\pi} = \frac{M}{2\pi r^{2}} \;\xrightarrow{\;r\,\to\,2M\;}\; \frac{1}{8\pi M} = \frac{\kappa}{2\pi},
\tag{3.7}
$$

in agreement with Eq. (3.6). The argument makes clear that the Hawking temperature is the Unruh temperature associated with the surface gravity, and it isolates the key assumption: the state must be regular, in the sense of looking locally like the vacuum, across the horizon. The virtue of Hawking's calculation is that it derives this regularity from the collapse, rather than assuming it.

## 3.5 The state of the radiation

What is the quantum state of the field at late times? The analyticity argument of Section [3.3](#33-the-bogoliubov-coefficients) shows that the relevant positive-frequency combinations mix out-modes with modes that propagate into the black hole, which we shall call partner modes. Exactly as in Eq. (2.17), the in-vacuum can then be written, for each late-time mode, as

$$
{\lvert 0_{\mathrm{in}} \rangle} \propto \sum_{n=0}^{\infty} e^{-\pi n\omega/\kappa}\,{\lvert n_{\omega} \rangle}_{\mathrm{out}}\otimes{\lvert n_{\omega} \rangle}_{\mathrm{partner}}.
\tag{3.8}
$$

The state is pure, but each outgoing quantum is entangled with a partner quantum behind the horizon. An observer outside the black hole has no access to the partners, and must describe the radiation by the reduced density matrix obtained by tracing them out, which is exactly thermal. This was shown rigorously by Wald (1975) and, independently, by Parker (1975), who established that the emitted radiation is described by a thermal density matrix with no correlations between different out-modes. Equation (3.8) is the precise version of the pair picture of Section [1.3](/research/hawking-radiation-review/section-1#13-a-heuristic-picture-and-its-limitations), and it contains the seed of the information problem: if the black hole eventually disappears, the partners disappear with it, and the radiation left behind is in a mixed state (Section [7](/research/hawking-radiation-review/section-7)).

## 3.6 Energy, area, and entropy

The emission of positive energy to infinity must be balanced by a loss of mass. At the level of the renormalised stress-energy tensor, the outgoing flux at infinity is accompanied by a flux of negative energy across the horizon (Section [4.3](/research/hawking-radiation-review/section-4#43-the-stress-energy-tensor-and-the-trace-anomaly)), and the area of the horizon decreases. This does not contradict the area theorem of Hawking (1971a), since the renormalised stress-energy tensor of the quantum field violates the null energy condition near the horizon. It does, however, imply that the area theorem cannot be the fundamental statement; its role is taken over by the generalised second law, which remains valid because the entropy of the emitted radiation more than compensates the decrease of the black hole entropy (Bekenstein, 1974; Wald, 2001).

With the temperature identified, the first law (2.4) fixes the entropy. For a Schwarzschild black hole, ${\mathrm{d}} S = {\mathrm{d}} M/{T_{\mathrm{H}}} = 8\pi M\,{\mathrm{d}} M$, which integrates to $S = 4\pi M^{2} = A/4$, the Bekenstein–Hawking entropy (1.2). The resulting thermodynamics has a peculiar feature. Since ${T_{\mathrm{H}}} \propto 1/M$, the heat capacity

$$
C = \frac{{\mathrm{d}} M}{{\mathrm{d}}{T_{\mathrm{H}}}} = -8\pi M^{2}
\tag{3.9}
$$

is negative. A black hole that loses energy by radiation becomes hotter and radiates faster, and a black hole in contact with an infinite heat bath cannot be in stable equilibrium: if it is slightly hotter than the bath it evaporates, and if it is slightly colder it grows. This instability will reappear in the Euclidean approach (Section [4.2](/research/hawking-radiation-review/section-4#42-euclidean-methods)).

## 3.7 Orders of magnitude

It is useful to restore physical units and put in numbers. The Hawking temperature may be written either as ${T_{\mathrm{H}}} \simeq 6.17\times 10^{-8}\,\mathrm{K}\,({M_{\odot}}/M)$ or, in energy units, as $k_{\mathrm{B}}{T_{\mathrm{H}}} \simeq 1.06\,\mathrm{GeV}\,(10^{13}\,\mathrm{g}/M)$. Table 2 lists the temperature, Schwarzschild radius, and approximate lifetime for a range of masses; the lifetimes are derived in Section [5](/research/hawking-radiation-review/section-5). Two conclusions are immediate. First, astrophysical black holes are far colder than the cosmic microwave background, whose temperature is $2.725\,\mathrm{K}$: a black hole is hotter than the background only if its mass is below approximately $4.5\times 10^{22}\,\mathrm{kg}$, somewhat less than the mass of the Moon. Black holes formed by stellar collapse therefore currently absorb more radiation than they emit. Second, black holes with masses below approximately $10^{16}\,\mathrm{g}$ radiate at energies relevant to nuclear and particle physics, and those with masses near $5\times 10^{14}\,\mathrm{g}$ would be completing their evaporation today. Only black holes formed in the early universe could have such masses, which is why the observational search for Hawking radiation is a search for primordial black holes (Section [9](/research/hawking-radiation-review/section-9)).

| Mass | Example | $r_{\mathrm{s}} = 2GM/c^{2}$ | ${T_{\mathrm{H}}}$ | Lifetime |
| --- | --- | --- | --- | --- |
| $10\,{M_{\odot}}$ | Stellar black hole | $30\,\mathrm{km}$ | $6\times 10^{-9}\,\mathrm{K}$ | $\sim 10^{70}\,\mathrm{yr}$ |
| ${M_{\odot}}$ | | $3\,\mathrm{km}$ | $6\times 10^{-8}\,\mathrm{K}$ | $\sim 10^{67}\,\mathrm{yr}$ |
| $4.5\times 10^{25}\,\mathrm{g}$ | ${T_{\mathrm{H}}} = T_{\mathrm{CMB}}$ | $0.07\,\mathrm{mm}$ | $2.7\,\mathrm{K}$ | $\sim 10^{44}\,\mathrm{yr}$ |
| $10^{20}\,\mathrm{g}$ | Asteroid mass | $1.5\times 10^{-10}\,\mathrm{m}$ | $\approx 100\,\mathrm{eV}$ | $\sim 10^{26}\,\mathrm{yr}$ |
| $5\times 10^{14}\,\mathrm{g}$ | Evaporating today | $7\times 10^{-16}\,\mathrm{m}$ | $\approx 20\,\mathrm{MeV}$ | $\approx 1.4\times 10^{10}\,\mathrm{yr}$ |
| $10^{9}\,\mathrm{g}$ | | $1.5\times 10^{-21}\,\mathrm{m}$ | $\approx 10\,\mathrm{TeV}$ | $\sim 0.4\,\mathrm{s}$ |

_Table 2: Characteristic scales of Schwarzschild black holes. The lifetimes are order-of-magnitude estimates that depend on the particle species emitted (Section [5.2](/research/hawking-radiation-review/section-5#52-luminosity-mass-loss-and-lifetime)); they neglect accretion, including the absorption of the cosmic microwave background._

> **Summary of the section**
>
> - The Hawking effect follows from the exponential relation $v_{0} - v \simeq C\,e^{-\kappa u}$ between the advanced time at which a ray leaves ${\mathscr{I}}^{-}$ and the retarded time at which it reaches ${\mathscr{I}}^{+}$.
>
> - Analyticity then implies $|\beta|^{2} = e^{-2\pi\omega/\kappa}|\alpha|^{2}$, and hence a Planck spectrum at ${T_{\mathrm{H}}} = \kappa/2\pi$, multiplied by greybody factors.
>
> - The same temperature follows from the Unruh effect near the horizon combined with the Tolman redshift, provided the state is regular across the horizon.
>
> - The outgoing radiation is entangled with partner modes inside the black hole; its reduced state is exactly thermal.
>
> - The first law then fixes ${S_{\mathrm{BH}}} = A/4$. The heat capacity of a Schwarzschild black hole is negative, and astrophysical black holes are far colder than the cosmic microwave background.
