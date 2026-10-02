---
slug: hawking-radiation-review/section-2
title: "Horizons and quantum fields"
date: 2024-12-01
summary: "Surface gravity as a redshifted acceleration, the laws of black hole mechanics, Bogoliubov transformations, and the Unruh effect derived by analyticity."
series: hawking-radiation-review
part: section-2
order: 2
kicker: "Lecture 2"
---
Lower a small mass on a string towards the horizon of a Schwarzschild black hole and hold it at fixed radius. The proper acceleration of the mass grows without bound as it approaches the horizon. The force per unit mass exerted by the person holding the far end of the string does not: it tends to $c^{4}/4GM$, which for a solar-mass black hole is $1.5\times 10^{13}\,\mathrm{m\,s^{-2}}$. The ratio of the second to the first is the redshift factor $\sqrt{f}$, which vanishes at the horizon, and the same redshift, written as a relation between two time coordinates, is the origin of the Hawking effect. Its quantum consequences can already be seen in flat spacetime, by an observer who accelerates uniformly through the vacuum, and that calculation is the heart of this lecture.

## 2.1 The Schwarzschild geometry and surface gravity

The Schwarzschild metric is

$$
{\mathrm{d}} s^{2} = -f(r)\,{\mathrm{d}} t^{2} + \frac{{\mathrm{d}} r^{2}}{f(r)} + r^{2}{\mathrm{d}}\Omega^{2},
\qquad f(r) = 1 - \frac{2M}{r}.
\tag{2.1}
$$

We introduce the tortoise coordinate $r_{*} = r + 2M\ln|r/2M - 1|$, which ranges over the whole real line as $r$ ranges from $2M$ to infinity, and the retarded and advanced times $u = t - r_{*}$ and $v = t + r_{*}$. The radial part of the metric is then conformally flat, ${\mathrm{d}} s^{2} = -f\,{\mathrm{d}} u\,{\mathrm{d}} v + r^{2}{\mathrm{d}}\Omega^{2}$, and outgoing and ingoing radial rays are the lines of constant $u$ and constant $v$ respectively. The coordinate $u$ diverges on the future horizon, which it therefore does not cover. A coordinate that is regular there is the Kruskal coordinate

$$
U = -\frac{1}{\kappa}\,e^{-\kappa u}, \qquad V = \frac{1}{\kappa}\,e^{\kappa v}, \qquad \kappa = \frac{1}{4M},
\tag{2.2}
$$

in terms of which ${\mathrm{d}} s^{2} = -(2M/r)\,e^{-r/2M}\,{\mathrm{d}} U\,{\mathrm{d}} V + r^{2}{\mathrm{d}}\Omega^{2}$, manifestly regular at $r = 2M$. (To check this, note that ${\mathrm{d}} U\,{\mathrm{d}} V = e^{2\kappa r_{*}}{\mathrm{d}} u\,{\mathrm{d}} v$ and that $f\,e^{-2\kappa r_{*}} = (2M/r)\,e^{-r/2M}$.) The future horizon is the surface $U = 0$.

The reader should fix in mind the exponential relation between $U$, the natural coordinate for an observer falling through the horizon, and $u$, the natural time for an observer at infinity. A wave of fixed frequency at infinity, $e^{-i\omega u} = (-\kappa U)^{i\omega/\kappa}$, performs infinitely many oscillations between any finite value of $U$ and the horizon: traced back towards $U = 0$, its wavelength in $U$ shrinks exponentially.

The constant $\kappa$ in Eq. (2.2) is the surface gravity. For a stationary black hole with horizon Killing vector $\xi^{\mu}$ (for Schwarzschild, $\xi = \partial_{t}$), it is defined on the horizon by

$$
\xi^{\nu}\nabla_{\nu}\xi^{\mu} = \kappa\,\xi^{\mu},
\tag{2.3}
$$

that is, it measures the failure of the Killing time to be an affine parameter along the horizon generators.[^1] For a static metric of the form (2.1) with a simple zero of $f$ at $r_{\mathrm{h}}$ one finds $\kappa = f'(r_{\mathrm{h}})/2$, which gives $\kappa = 1/4M$ for Schwarzschild.

The physical meaning of $\kappa$ is the one we began with. A static observer at radius $r$ must accelerate to avoid falling in, with proper acceleration $a(r) = M/(r^{2}\sqrt{f})$, which diverges at the horizon. The product $\sqrt{f}\,a$, which is the force per unit mass that an observer at infinity would have to exert to hold the static observer on a massless string, remains finite and tends to $\kappa$ at the horizon. The surface gravity is the redshifted acceleration of a static observer at the horizon. It should not be confused with the local acceleration there, which is infinite.

## 2.2 The laws of black hole mechanics

The thermodynamic reading of black holes grew out of classical results obtained between 1969 and 1973. Penrose (1969) showed that energy can be extracted from a rotating black hole by particle processes in its ergoregion, and Penrose and Floyd (1971) observed that the extraction processes they analysed were accompanied by an increase in the area of the horizon. Christodoulou (1970) showed that the mass of a Kerr black hole can be decomposed as

$$
M^{2} = M_{\mathrm{irr}}^{2} + \frac{J^{2}}{4M_{\mathrm{irr}}^{2}},
\qquad A = 16\pi M_{\mathrm{irr}}^{2},
$$

where the irreducible mass $M_{\mathrm{irr}}$ cannot be decreased by any classical process, and that the reversible transformations are precisely those that leave it unchanged. For an extremal Kerr black hole ($J = M^{2}$) the irreducible mass is $M/\sqrt{2}$, so that at most $1 - 1/\sqrt{2} \approx 29\%$ of the mass can be extracted. Hawking (1971a) then proved that, for matter satisfying the null energy condition, the total area of event horizons cannot decrease.

Bardeen et al. (1973) collected these results into four laws, which are compared with the laws of thermodynamics in Table 1. For a Kerr–Newman black hole the first law reads

$$
{\mathrm{d}} M = \frac{\kappa}{8\pi}\,{\mathrm{d}} A + \Omega_{\mathrm{H}}\,{\mathrm{d}} J + \Phi_{\mathrm{H}}\,{\mathrm{d}} Q ,
\tag{2.4}
$$

where $\Omega_{\mathrm{H}}$ and $\Phi_{\mathrm{H}}$ are the angular velocity and electrostatic potential of the horizon. The Schwarzschild case is a one-line check: $A = 16\pi M^{2}$ gives ${\mathrm{d}} A = 32\pi M\,{\mathrm{d}} M$, and with $\kappa = 1/4M$ the first term of Eq. (2.4) is exactly ${\mathrm{d}} M$. The correspondence $\kappa \leftrightarrow T$ and $A \leftrightarrow S$ is evident, up to constants that classical physics cannot fix.

| Law | Thermodynamics | Black hole mechanics |
| --- | --- | --- |
| Zeroth | The temperature $T$ is uniform in equilibrium | The surface gravity $\kappa$ is constant on the horizon of a stationary black hole |
| First | ${\mathrm{d}} E = T\,{\mathrm{d}} S + \text{work terms}$ | ${\mathrm{d}} M = (\kappa/8\pi)\,{\mathrm{d}} A + \Omega_{\mathrm{H}}\,{\mathrm{d}} J + \Phi_{\mathrm{H}}\,{\mathrm{d}} Q$ |
| Second | ${\mathrm{d}} S \geq 0$ for an isolated system | ${\mathrm{d}} A \geq 0$ in classical processes |
| Third | $T = 0$ cannot be reached in finitely many steps | $\kappa = 0$ cannot be reached in finitely many steps |

_Table 1: The four laws of black hole mechanics (Bardeen et al., 1973) and the laws of thermodynamics they resemble._

Bekenstein (1972, 1973) argued that the analogy reflects a genuine physical identity, and his argument is short enough to give in full. Drop a box containing some entropy into a black hole. For an external observer the entropy has left the accessible universe, and the second law of thermodynamics is violated unless the black hole itself carries entropy that increases by at least the amount lost. The area is the only quantity associated with the black hole that never decreases, so Bekenstein proposed that the black hole entropy is proportional to the area, and conjectured the generalised second law: the sum of the black hole entropy and the ordinary entropy outside black holes never decreases (Bekenstein, 1974). Information-theoretic arguments gave him an estimate of the proportionality constant in Planck units, but not a derivation of it.

This is where matters stood in 1973, with the objection of Section [1.1](/research/hawking-radiation-review/section-1#11-a-puzzle-from-black-hole-thermodynamics) unanswered: Bardeen et al. (1973) emphasised that a classical black hole, which absorbs but never emits, has zero temperature. To see why the analogy is more than formal, we need quantum field theory.

## 2.3 Quantum fields in curved spacetime

We work with a free, real, massless scalar field $\phi$ obeying $\Box\phi = 0$ on a globally hyperbolic spacetime. Almost all of the essential physics is already present in this simplest case. The space of classical solutions carries the Klein–Gordon inner product

$$
(f, g) = i\int_{\Sigma}{\mathrm{d}}\Sigma\, n^{\mu}\left(f^{*}\partial_{\mu}g - g\,\partial_{\mu}f^{*}\right),
\tag{2.5}
$$

evaluated on any Cauchy surface $\Sigma$ with future-directed unit normal $n^{\mu}$, and independent of the choice of $\Sigma$.[^2] This inner product is not positive definite: if $(f,f) > 0$ then $(f^{*}, f^{*}) < 0$. To quantise the field we choose a complete set of solutions $\{f_{i}\}$ with positive norm, $(f_{i}, f_{j}) = \delta_{ij}$, such that $\{f_{i}, f_{i}^{*}\}$ spans the space of solutions, and we expand

$$
\phi = \sum_{i}\left(a_{i}f_{i} + a_{i}^{\dagger}f_{i}^{*}\right),
\qquad [a_{i}, a_{j}^{\dagger}] = \delta_{ij}.
\tag{2.6}
$$

The vacuum associated with this choice is the state ${\lvert 0_{f} \rangle}$ annihilated by all the $a_{i}$, and the $a_{i}^{\dagger}$ create particles. In Minkowski spacetime there is a preferred choice: the modes that are positive frequency with respect to inertial time, $f \propto e^{-i\omega t}$ with $\omega > 0$, and this choice is the same for all inertial observers. A general curved spacetime has no preferred time coordinate, and different choices of positive-frequency modes lead to inequivalent notions of particle and of vacuum (Fulling, 1973). This ambiguity is not a technical nuisance. It is the central feature of the subject.

The tool for comparing two choices is the Bogoliubov transformation. The single-mode case already contains everything that follows: if $b = a\cosh r + a^{\dagger}\sinh r$, then $\alpha = \cosh r$, $\beta = \sinh r$, and the vacuum of $a$ contains on average $\sinh^{2}r$ quanta of $b$. Suppose that a second complete set of positive-norm modes $\{p_{j}\}$ is given. Since both sets span the space of solutions, the new modes can be expanded in terms of the old ones,

$$
p_{j} = \sum_{i}\left(\alpha_{ji}f_{i} + \beta_{ji}f_{i}^{*}\right),
\tag{2.7}
$$

and the corresponding annihilation operators are related by

$$
b_{j} = (p_{j}, \phi) = \sum_{i}\left(\alpha_{ji}^{*}a_{i} - \beta_{ji}^{*}a_{i}^{\dagger}\right).
\tag{2.8}
$$

The minus sign comes from the negative norm of $f_{i}^{*}$, and it is easy to lose. The coefficients $\alpha_{ji}$ and $\beta_{ji}$ are the Bogoliubov coefficients, and orthonormality of the $p_{j}$ requires $\sum_{i}(\alpha_{ji}\alpha_{ki}^{*} - \beta_{ji}\beta_{ki}^{*}) = \delta_{jk}$. Whenever the $\beta_{ji}$ are non-zero, the vacuum of one set of modes is not the vacuum of the other. Acting with $b_{j}$ on ${\lvert 0_{f} \rangle}$ leaves only the $a_{i}^{\dagger}$ terms, so the expected number of $p$-particles in the $f$-vacuum is

$$
\langle N_{j}\rangle = {\langle 0_{f} \rvert}b_{j}^{\dagger}b_{j}{\lvert 0_{f} \rangle} = \sum_{i}|\beta_{ji}|^{2}.
\tag{2.9}
$$

In a spacetime that is asymptotically static in the past and in the future, one can define “in” modes that are positive frequency in the past and “out” modes that are positive frequency in the future. If the field starts in the in-vacuum, Eq. (2.9) gives the number of particles observed at late times. The whole of the Hawking calculation consists in evaluating the $\beta$ coefficients for a black hole formed by collapse. We first evaluate them for a simpler problem in which the same mechanism operates in flat spacetime.

## 2.4 A warm-up: the Unruh effect

Take two-dimensional Minkowski spacetime, ${\mathrm{d}} s^{2} = -{\mathrm{d}} T^{2} + {\mathrm{d}} X^{2}$, and the right Rindler wedge $X > |T|$. We introduce coordinates $(\eta, \xi)$ by

$$
T = \frac{1}{a}\,e^{a\xi}\sinh(a\eta), \qquad X = \frac{1}{a}\,e^{a\xi}\cosh(a\eta),
\tag{2.10}
$$

in terms of which ${\mathrm{d}} s^{2} = e^{2a\xi}(-{\mathrm{d}}\eta^{2} + {\mathrm{d}}\xi^{2})$. The worldline $\xi = 0$ is that of an observer with constant proper acceleration $a$ and proper time $\eta$, and the boost Killing vector $\partial_{\eta}$ generates the observer's time translations. The lines $T = \pm X$ are horizons for this observer: signals from beyond $T = X$ can never reach it. In terms of the null coordinates $U = T - X$ and $u = \eta - \xi$, and $V = T + X$ and $v = \eta + \xi$, the transformation (2.10) becomes

$$
U = -\frac{1}{a}\,e^{-a u}, \qquad V = \frac{1}{a}\,e^{a v}.
\tag{2.11}
$$

This is Eq. (2.2) with $a$ in place of $\kappa$. The accelerated observer uses $u$ as a time coordinate; the inertial observer uses $U$.

A massless field in two dimensions splits into right-moving and left-moving parts, and it suffices to consider the right-moving part, which depends only on $U$. A mode that is positive frequency for the accelerated observer is $e^{-i\omega u}$ with $\omega > 0$, which by Eq. (2.11) can be written as

$$
e^{-i\omega u} = (-aU)^{i\omega/a}, \qquad U < 0 .
\tag{2.12}
$$

We want to know how much of this mode is positive frequency for inertial observers. The direct route is a Fourier transform in $U$, which leads to Gamma functions; a shorter one, due to Unruh (1976), uses analyticity. A function of $U$ is a superposition of inertial positive-frequency modes $e^{-i\Omega U}$, $\Omega > 0$, if and only if it is analytic and bounded in the lower half of the complex $U$-plane, since each $e^{-i\Omega U}$ decays there. The function (2.12) is defined only for $U < 0$, and we continue it to $U > 0$ through the lower half-plane. Writing $U = R\,e^{i\varphi}$ with $\varphi$ running from $-\pi$ to $0$, we see that $-U = R\,e^{i(\varphi + \pi)}$ acquires the phase $e^{i\pi}$ when $U$ reaches the positive real axis, so that

$$
(-aU)^{i\omega/a} \;\longrightarrow\; e^{i\pi\cdot i\omega/a}\,(aU)^{i\omega/a} = e^{-\pi\omega/a}\,(aU)^{i\omega/a},
\qquad U > 0 .
\tag{2.13}
$$

The function equal to $(-aU)^{i\omega/a}$ for $U<0$ and to $e^{-\pi\omega/a}(aU)^{i\omega/a}$ for $U>0$ is therefore purely positive frequency with respect to inertial time. This is the cleanest derivation of thermality that we know, and the one we recommend remembering: Lecture [3](/research/hawking-radiation-review/section-3) repeats it with $\kappa$ in place of $a$.

> **Remark 2.1.**
>
> A common error is to continue through the upper half-plane. That gives the factor $e^{+\pi\omega/a}$, a purely negative-frequency function, and in the end a negative “occupation number”. The choice of half-plane is fixed by the convention $e^{-i\Omega U}$ for positive frequency.

For $U > 0$, that is in the left Rindler wedge, the function $(aU)^{i\omega/a}$ is the complex conjugate of a mode that is positive frequency with respect to the future-directed boost time of that wedge. Translated into operators, this means that the Minkowski vacuum ${\lvert 0_{\mathrm{M}} \rangle}$ is annihilated by the combinations

$$
\left(b^{\mathrm{R}}_{\omega} - e^{-\pi\omega/a}\,b^{\mathrm{L}\dagger}_{\omega}\right){\lvert 0_{\mathrm{M}} \rangle} = 0,
\qquad
\left(b^{\mathrm{L}}_{\omega} - e^{-\pi\omega/a}\,b^{\mathrm{R}\dagger}_{\omega}\right){\lvert 0_{\mathrm{M}} \rangle} = 0,
\tag{2.14}
$$

where $b^{\mathrm{R}}_{\omega}$ and $b^{\mathrm{L}}_{\omega}$ annihilate Rindler quanta in the right and left wedges. The number of Rindler quanta seen by the accelerated observer now takes two lines. Write $x = e^{-\pi\omega/a}$ and $N = {\langle 0_{\mathrm{M}} \rvert}b^{\mathrm{R}\dagger}_{\omega}b^{\mathrm{R}}_{\omega}{\lvert 0_{\mathrm{M}} \rangle}$. By Eq. (2.14), $N = x^{2}{\langle 0_{\mathrm{M}} \rvert}b^{\mathrm{L}}_{\omega}b^{\mathrm{L}\dagger}_{\omega}{\lvert 0_{\mathrm{M}} \rangle} = x^{2}(1 + N)$, where we have used the symmetry between the two wedges. Hence

$$
N = \frac{x^{2}}{1 - x^{2}} = \frac{1}{e^{2\pi\omega/a} - 1},
\tag{2.15}
$$

which is a Planck distribution at the Unruh temperature

$$
T_{\mathrm{U}} = \frac{a}{2\pi} = \frac{\hbar a}{2\pi c\,k_{\mathrm{B}}}.
\tag{2.16}
$$

An accelerated observer in the Minkowski vacuum perceives a thermal bath. For accelerations of everyday magnitude the effect is absurdly small: $a = 9.8\,\mathrm{m\,s^{-2}}$ gives $T_{\mathrm{U}} \approx 4\times 10^{-20}\,\mathrm{K}$, and a temperature of $1\,\mathrm{K}$ requires $a \approx 2.5\times 10^{20}\,\mathrm{m\,s^{-2}}$.

The Minkowski vacuum can be written explicitly in terms of Rindler states. One verifies directly that the state

$$
{\lvert 0_{\mathrm{M}} \rangle} = \prod_{\omega}\sqrt{1 - e^{-2\pi\omega/a}}\;\sum_{n=0}^{\infty} e^{-\pi n\omega/a}\,{\lvert n_{\omega} \rangle}_{\mathrm{L}}\otimes{\lvert n_{\omega} \rangle}_{\mathrm{R}}
\tag{2.17}
$$

satisfies Eq. (2.14). The Minkowski vacuum is therefore a pure, entangled state of the two wedges. An observer confined to the right wedge has no access to the left one, and describes the field by the reduced density matrix obtained by tracing over the left wedge, $\rho_{\mathrm{R}} = \prod_{\omega}(1 - e^{-\omega/T_{\mathrm{U}}})\sum_{n}e^{-n\omega/T_{\mathrm{U}}}{\lvert n_{\omega} \rangle}{\langle n_{\omega} \rvert}$, which is exactly thermal. States of the form (2.17) are known as thermofield-double states. The thermality is a consequence of entanglement across the horizon, and this point will be central to the information problem in Lecture [7](/research/hawking-radiation-review/section-7).

The thermal response of a uniformly accelerated detector in the Minkowski vacuum was found by Unruh (1976), following the work of Fulling (1973) on the non-uniqueness of the vacuum and of Davies (1975) on the analogy between Rindler and Schwarzschild particle production.[^3] The same paper introduced the model particle detector that now bears Unruh's name. The large literature on the Unruh effect has been reviewed by Crispino et al. (2008).

## 2.5 Superradiance

A second precursor of Hawking's result came from the scattering of waves by rotating bodies. Zel'dovich (1971) showed that a rotating absorbing cylinder amplifies incident waves of frequency $\omega$ and azimuthal number $m$ whenever

$$
0 < \omega < m\,\Omega,
\tag{2.18}
$$

where $\Omega$ is the angular velocity of the body. The origin of the effect is simple. In the frame co-rotating with the body the wave has frequency $\omega - m\Omega$, which is negative when Eq. (2.18) holds, so absorption in the co-rotating frame is emission in the frame of the observer. Zel'dovich argued that in quantum theory the same body should also emit spontaneously in these “superradiant” modes. Starobinsky (1973) computed the corresponding amplification for a Kerr black hole, for which $\Omega$ is replaced by the angular velocity of the horizon $\Omega_{\mathrm{H}}$; Teukolsky and Press (1974) extended the analysis to electromagnetic and gravitational waves, and Unruh (1974) confirmed, by quantising the field on the Kerr background, that a rotating black hole emits spontaneously in the superradiant modes. For a black hole the condition (2.18) also follows from the first and second laws alone.

The reasoning of Zel'dovich and Starobinsky was an important motivation for Hawking's investigation. What it did not prepare anyone for was the answer: emission in all modes, persisting when the black hole does not rotate at all. Its later applications, from black hole instabilities to searches for ultralight bosons, are reviewed by Brito et al. (2020).

## Notes and further reading

For the field theory of this lecture, Birrell and Davies (1982) remains the standard reference on mode sums, Bogoliubov transformations and particle detectors; it is the book to consult when a factor of $2\pi$ goes missing. Wald (1994) is more careful about what a quantum state on a curved spacetime is, and its treatment of the Unruh effect does not rely on the formal infinite product of Eq. (2.17), which does not define a vector in the Fock space of Rindler quanta. Students meeting the subject for the first time will find the gentlest route in the lecture notes of Jacobson (2005), which are close in spirit to the treatment given here. The laws of black hole mechanics, with an account of which have been proved and in what generality, are reviewed by Wald (2001).

Two reviews cover the precursors in depth. Crispino et al. (2008) discuss the Unruh effect from the points of view of detectors and of field theory, together with its applications and the proposals for observing it. Brito et al. (2020) is the standard modern account of superradiance, from Zel'dovich's cylinder to the bounds on ultralight bosons from the spins of astrophysical black holes.

[^1]: Since $\xi$ may be rescaled by a constant, so may $\kappa$; the normalisation is fixed by $\xi^{\mu}\xi_{\mu} \to -1$ at infinity. An equivalent definition, often more convenient in calculations, is $\kappa^{2} = -\tfrac{1}{2}(\nabla^{\mu}\xi^{\nu})(\nabla_{\mu}\xi_{\nu})$ evaluated on the horizon.

[^2]: With this sign convention a mode proportional to $e^{-i\omega t}$ with $\omega > 0$ has positive norm in Minkowski spacetime. Some texts use the opposite overall sign.

[^3]: For this reason the effect is sometimes called the Fulling–Davies–Unruh effect.
