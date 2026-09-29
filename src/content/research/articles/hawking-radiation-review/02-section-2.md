---
slug: hawking-radiation-review/section-2
title: "Preliminaries"
date: 2024-12-01
summary: "The Schwarzschild geometry and surface gravity, the laws of black hole mechanics, quantum fields in curved spacetime, the Unruh effect and superradiance."
series: hawking-radiation-review
part: section-2
order: 2
kicker: "Section 2"
---
This section collects the classical and quantum background on which the rest of the notes rely. We first recall the geometry of the Schwarzschild black hole and the notion of surface gravity, then review the laws of black hole mechanics and the puzzle that they posed. We then introduce the minimal machinery of quantum field theory in curved spacetime, namely Bogoliubov transformations, and apply it to the Unruh effect, which contains, in the simplest possible setting, almost all of the physics of the Hawking effect.

## 2.1 The Schwarzschild geometry and surface gravity

The Schwarzschild metric is

$$
{\mathrm{d}} s^{2} = -f(r)\,{\mathrm{d}} t^{2} + \frac{{\mathrm{d}} r^{2}}{f(r)} + r^{2}{\mathrm{d}}\Omega^{2},
\qquad f(r) = 1 - \frac{2M}{r}.
\tag{2.1}
$$

It is convenient to introduce the tortoise coordinate $r_{*} = r + 2M\ln|r/2M - 1|$, which ranges over the whole real line as $r$ ranges from $2M$ to infinity, and the retarded and advanced null coordinates $u = t - r_{*}$ and $v = t + r_{*}$. In these coordinates the radial part of the metric is conformally flat, ${\mathrm{d}} s^{2} = -f\,{\mathrm{d}} u\,{\mathrm{d}} v + r^{2}{\mathrm{d}}\Omega^{2}$, and outgoing and ingoing radial light rays are the lines of constant $u$ and constant $v$ respectively. The coordinate $u$ diverges on the future horizon, which it therefore does not cover. A coordinate that is regular there is the Kruskal coordinate

$$
U = -\frac{1}{\kappa}\,e^{-\kappa u}, \qquad V = \frac{1}{\kappa}\,e^{\kappa v}, \qquad \kappa = \frac{1}{4M},
\tag{2.2}
$$

in terms of which ${\mathrm{d}} s^{2} = -(2M/r)\,e^{-r/2M}\,{\mathrm{d}} U\,{\mathrm{d}} V + r^{2}{\mathrm{d}}\Omega^{2}$, which is manifestly regular at $r = 2M$. The future horizon is the surface $U = 0$. The reader should note the exponential relation between $U$, which is the natural coordinate for an observer falling through the horizon, and $u$, which is the natural time coordinate for an observer at infinity. This relation will turn out to be the origin of the Hawking effect.

The constant $\kappa$ in Eq. (2.2) is the surface gravity. For a stationary black hole with horizon Killing vector $\xi^{\mu}$ (for Schwarzschild, $\xi = \partial_{t}$), it is defined on the horizon by

$$
\xi^{\nu}\nabla_{\nu}\xi^{\mu} = \kappa\,\xi^{\mu},
\tag{2.3}
$$

that is, it measures the failure of the Killing time to be an affine parameter along the horizon generators. For a static metric of the form (2.1) with a simple zero of $f$ at $r_{\mathrm{h}}$ one finds $\kappa = f'(r_{\mathrm{h}})/2$, which gives $\kappa = 1/4M$ for Schwarzschild. A more physical interpretation is obtained by considering a static observer at radius $r$. Such an observer must accelerate to avoid falling in, with proper acceleration $a(r) = M/(r^{2}\sqrt{f})$, which diverges at the horizon. The product $\sqrt{f}\,a$, which is the force per unit mass that would have to be exerted by an observer at infinity holding the static observer on a massless string, remains finite and tends to $\kappa$ at the horizon. The surface gravity is thus the redshifted acceleration of a static observer at the horizon.

## 2.2 The laws of black hole mechanics

The thermodynamic interpretation of black holes emerged from a sequence of classical results obtained between 1969 and 1973. Penrose (1969) showed that energy can be extracted from a rotating black hole by particle processes in its ergoregion, and Penrose and Floyd (1971) observed that the extraction processes they analysed were accompanied by an increase in the area of the horizon. Christodoulou (1970) showed that the mass of a Kerr black hole can be decomposed into an “irreducible mass”, which cannot be decreased by any classical process, and a rotational contribution that can be extracted, with reversible transformations being precisely those that leave the irreducible mass unchanged. Hawking (1971a) then proved that, for matter satisfying the null energy condition, the total area of event horizons cannot decrease.

Bardeen et al. (1973) collected these results into four laws, which are compared with the laws of thermodynamics in Table 1. For a Kerr–Newman black hole the first law reads

$$
{\mathrm{d}} M = \frac{\kappa}{8\pi}\,{\mathrm{d}} A + \Omega_{\mathrm{H}}\,{\mathrm{d}} J + \Phi_{\mathrm{H}}\,{\mathrm{d}} Q ,
\tag{2.4}
$$

where $\Omega_{\mathrm{H}}$ and $\Phi_{\mathrm{H}}$ are the angular velocity and electrostatic potential of the horizon. The correspondence $\kappa \leftrightarrow T$ and $A \leftrightarrow S$ is evident, up to constants that classical physics cannot fix.

| Law | Thermodynamics | Black hole mechanics |
| --- | --- | --- |
| Zeroth | The temperature $T$ is uniform in equilibrium | The surface gravity $\kappa$ is constant on the horizon of a stationary black hole |
| First | ${\mathrm{d}} E = T\,{\mathrm{d}} S + \text{work terms}$ | ${\mathrm{d}} M = (\kappa/8\pi)\,{\mathrm{d}} A + \Omega_{\mathrm{H}}\,{\mathrm{d}} J + \Phi_{\mathrm{H}}\,{\mathrm{d}} Q$ |
| Second | ${\mathrm{d}} S \geq 0$ for an isolated system | ${\mathrm{d}} A \geq 0$ in classical processes |
| Third | $T = 0$ cannot be reached in finitely many steps | $\kappa = 0$ cannot be reached in finitely many steps |

_Table 1: The laws of black hole mechanics (Bardeen et al., 1973) compared with the laws of thermodynamics._

Bekenstein (1972, 1973) argued that the analogy reflects a genuine physical identity. The argument is simple and worth reproducing. Suppose a box containing some entropy is dropped into a black hole. From the point of view of an external observer the entropy disappears from the accessible universe, and the second law of thermodynamics would be violated unless the black hole itself carries entropy and this entropy increases by at least the amount lost. Since the area is the only quantity associated with the black hole that never decreases, Bekenstein proposed that the black hole entropy is proportional to the area, and conjectured the generalised second law: the sum of the black hole entropy and the ordinary entropy outside black holes never decreases (Bekenstein, 1974). Using information-theoretic arguments, he estimated the proportionality constant to be of order unity in Planck units, but he could not fix it.

The difficulty, already stated in Section [1.1](/research/hawking-radiation-review/section-1#11-a-puzzle-from-black-hole-thermodynamics), is that an object with entropy and energy must have a temperature, and Bardeen et al. (1973) emphasised that the effective temperature of a classical black hole is zero, since it absorbs but never emits. The analogy therefore appeared to be purely formal. To see why it is not, we need quantum field theory.

## 2.3 Quantum fields in curved spacetime

We consider a free, real, massless scalar field $\phi$ obeying $\Box\phi = 0$ on a globally hyperbolic spacetime. Most of the essential physics is already present in this simplest example. The space of classical solutions carries the Klein–Gordon inner product

$$
(f, g) = i\int_{\Sigma}{\mathrm{d}}\Sigma\, n^{\mu}\left(f^{*}\partial_{\mu}g - g\,\partial_{\mu}f^{*}\right),
\tag{2.5}
$$

evaluated on any Cauchy surface $\Sigma$ with future-directed unit normal $n^{\mu}$, and independent of the choice of $\Sigma$. This inner product is not positive definite: if $(f,f) > 0$ then $(f^{*}, f^{*}) < 0$. To quantise the field we choose a complete set of solutions $\{f_{i}\}$ with positive norm, $(f_{i}, f_{j}) = \delta_{ij}$, such that $\{f_{i}, f_{i}^{*}\}$ spans the space of solutions, and we expand

$$
\phi = \sum_{i}\left(a_{i}f_{i} + a_{i}^{\dagger}f_{i}^{*}\right),
\qquad [a_{i}, a_{j}^{\dagger}] = \delta_{ij}.
\tag{2.6}
$$

The vacuum associated with this choice is the state ${\lvert 0_{f} \rangle}$ annihilated by all the $a_{i}$, and the $a_{i}^{\dagger}$ create particles. In Minkowski spacetime there is a preferred choice: the modes that are positive frequency with respect to inertial time, $f \propto e^{-i\omega t}$ with $\omega > 0$, and this choice is the same for all inertial observers. In a general curved spacetime there is no preferred time coordinate, and different choices of positive-frequency modes lead to inequivalent notions of particle and of vacuum (Fulling, 1973). This ambiguity is not a technical nuisance but the central feature of the subject.

Suppose now that a second complete set of positive-norm modes $\{p_{j}\}$ is given. Since both sets span the space of solutions, the new modes can be expanded in terms of the old ones,

$$
p_{j} = \sum_{i}\left(\alpha_{ji}f_{i} + \beta_{ji}f_{i}^{*}\right),
\tag{2.7}
$$

and the corresponding annihilation operators are related by

$$
b_{j} = (p_{j}, \phi) = \sum_{i}\left(\alpha_{ji}^{*}a_{i} - \beta_{ji}^{*}a_{i}^{\dagger}\right).
\tag{2.8}
$$

The coefficients $\alpha_{ji}$ and $\beta_{ji}$ are called Bogoliubov coefficients, and the requirement that the $p_{j}$ be orthonormal implies $\sum_{i}(\alpha_{ji}\alpha_{ki}^{*} - \beta_{ji}\beta_{ki}^{*}) = \delta_{jk}$. The key point is that, whenever the $\beta_{ji}$ are non-zero, the vacuum of one set of modes is not the vacuum of the other. Indeed, the expected number of $p$-particles in the $f$-vacuum is

$$
\langle N_{j}\rangle = {\langle 0_{f} \rvert}b_{j}^{\dagger}b_{j}{\lvert 0_{f} \rangle} = \sum_{i}|\beta_{ji}|^{2}.
\tag{2.9}
$$

In a spacetime that is asymptotically static in the past and in the future, one can define “in” modes that are positive frequency in the past and “out” modes that are positive frequency in the future. If the field starts in the in-vacuum, Eq. (2.9) gives the number of particles observed at late times. The whole of the Hawking calculation consists in evaluating the $\beta$ coefficients for a black hole formed by collapse. Before doing so, we consider a simpler problem in which the same mechanism operates in flat spacetime.

## 2.4 A warm-up: the Unruh effect

Consider two-dimensional Minkowski spacetime, ${\mathrm{d}} s^{2} = -{\mathrm{d}} T^{2} + {\mathrm{d}} X^{2}$, and the right Rindler wedge $X > |T|$. We introduce coordinates $(\eta, \xi)$ by

$$
T = \frac{1}{a}\,e^{a\xi}\sinh(a\eta), \qquad X = \frac{1}{a}\,e^{a\xi}\cosh(a\eta),
\tag{2.10}
$$

in terms of which ${\mathrm{d}} s^{2} = e^{2a\xi}(-{\mathrm{d}}\eta^{2} + {\mathrm{d}}\xi^{2})$. The worldline $\xi = 0$ is that of an observer with constant proper acceleration $a$ and proper time $\eta$, and the boost Killing vector $\partial_{\eta}$ generates the observer's time translations. The lines $T = \pm X$ are horizons for this observer: signals from beyond $T = X$ can never reach it. In terms of the null coordinates $U = T - X$ and $u = \eta - \xi$, and $V = T + X$ and $v = \eta + \xi$, the transformation (2.10) becomes

$$
U = -\frac{1}{a}\,e^{-a u}, \qquad V = \frac{1}{a}\,e^{a v}.
\tag{2.11}
$$

The reader will recognise the structure of the Kruskal coordinates (2.2), with $a$ playing the role of $\kappa$. The accelerated observer uses $u$ as a time coordinate; the inertial observer uses $U$.

A massless field in two dimensions splits into right-moving and left-moving parts, and it suffices to consider the right-moving part, which depends only on $U$. A mode that is positive frequency for the accelerated observer is $e^{-i\omega u}$ with $\omega > 0$, which by Eq. (2.11) can be written as

$$
e^{-i\omega u} = (-aU)^{i\omega/a}, \qquad U < 0 .
\tag{2.12}
$$

Is this mode positive frequency for inertial observers? To answer the question we use an elegant argument due to Unruh (1976). A function of $U$ is a superposition of inertial positive-frequency modes $e^{-i\Omega U}$, $\Omega > 0$, if and only if it is analytic and bounded in the lower half of the complex $U$-plane, since each $e^{-i\Omega U}$ decays there. The function (2.12) is defined only for $U < 0$. Let us continue it to $U > 0$ through the lower half-plane. Writing $U = R\,e^{i\varphi}$ with $\varphi$ running from $-\pi$ to $0$, we find that $-U = R\,e^{i(\varphi + \pi)}$ acquires the phase $e^{i\pi}$ when $U$ reaches the positive real axis, so that

$$
(-aU)^{i\omega/a} \;\longrightarrow\; e^{i\pi\cdot i\omega/a}\,(aU)^{i\omega/a} = e^{-\pi\omega/a}\,(aU)^{i\omega/a},
\qquad U > 0 .
\tag{2.13}
$$

The function equal to $(-aU)^{i\omega/a}$ for $U<0$ and to $e^{-\pi\omega/a}(aU)^{i\omega/a}$ for $U>0$ is therefore purely positive frequency with respect to inertial time. For $U > 0$, that is in the left Rindler wedge, the function $(aU)^{i\omega/a}$ is the complex conjugate of a mode that is positive frequency with respect to the future-directed boost time of that wedge. Translated into operators, this means that the Minkowski vacuum ${\lvert 0_{\mathrm{M}} \rangle}$ is annihilated by the combinations

$$
\left(b^{\mathrm{R}}_{\omega} - e^{-\pi\omega/a}\,b^{\mathrm{L}\dagger}_{\omega}\right){\lvert 0_{\mathrm{M}} \rangle} = 0,
\qquad
\left(b^{\mathrm{L}}_{\omega} - e^{-\pi\omega/a}\,b^{\mathrm{R}\dagger}_{\omega}\right){\lvert 0_{\mathrm{M}} \rangle} = 0,
\tag{2.14}
$$

where $b^{\mathrm{R}}_{\omega}$ and $b^{\mathrm{L}}_{\omega}$ annihilate Rindler quanta in the right and left wedges. It is now a two-line exercise to compute the number of Rindler quanta seen by the accelerated observer. Writing $x = e^{-\pi\omega/a}$ and $N = {\langle 0_{\mathrm{M}} \rvert}b^{\mathrm{R}\dagger}_{\omega}b^{\mathrm{R}}_{\omega}{\lvert 0_{\mathrm{M}} \rangle}$, Eq. (2.14) gives $N = x^{2}{\langle 0_{\mathrm{M}} \rvert}b^{\mathrm{L}}_{\omega}b^{\mathrm{L}\dagger}_{\omega}{\lvert 0_{\mathrm{M}} \rangle} = x^{2}(1 + N)$, where we have used the symmetry between the two wedges. Hence

$$
N = \frac{x^{2}}{1 - x^{2}} = \frac{1}{e^{2\pi\omega/a} - 1},
\tag{2.15}
$$

which is a Planck distribution at the Unruh temperature

$$
T_{\mathrm{U}} = \frac{a}{2\pi} = \frac{\hbar a}{2\pi c\,k_{\mathrm{B}}}.
\tag{2.16}
$$

An accelerated observer in the Minkowski vacuum thus perceives a thermal bath. The effect is extremely small for accelerations of everyday magnitude: for $a = 9.8\,\mathrm{m\,s^{-2}}$ one finds $T_{\mathrm{U}} \approx 4\times 10^{-20}\,\mathrm{K}$.

It is illuminating to write the Minkowski vacuum explicitly in terms of Rindler states. One may verify directly that the state

$$
{\lvert 0_{\mathrm{M}} \rangle} = \prod_{\omega}\sqrt{1 - e^{-2\pi\omega/a}}\;\sum_{n=0}^{\infty} e^{-\pi n\omega/a}\,{\lvert n_{\omega} \rangle}_{\mathrm{L}}\otimes{\lvert n_{\omega} \rangle}_{\mathrm{R}}
\tag{2.17}
$$

satisfies Eq. (2.14). The Minkowski vacuum is therefore a pure, entangled state of the two wedges. An observer confined to the right wedge has no access to the left one, and describes the field by the reduced density matrix obtained by tracing over the left wedge, $\rho_{\mathrm{R}} = \prod_{\omega}(1 - e^{-\omega/T_{\mathrm{U}}})\sum_{n}e^{-n\omega/T_{\mathrm{U}}}{\lvert n_{\omega} \rangle}{\langle n_{\omega} \rvert}$, which is exactly thermal. The thermality is thus a consequence of entanglement across the horizon, a point that will be central to the discussion of the information problem in Section [7](/research/hawking-radiation-review/section-7). States of the form (2.17) are known as thermofield-double states.

The observation that a uniformly accelerated detector responds thermally in the Minkowski vacuum is due to Unruh (1976), following the work of Fulling (1973) on the non-uniqueness of the vacuum and of Davies (1975) on the analogy between Rindler and Schwarzschild particle production. The same paper introduced the model particle detector that now bears Unruh's name. The extensive literature on the Unruh effect has been reviewed by Crispino et al. (2008).

## 2.5 Superradiance

A second precursor of Hawking's result came from the study of wave scattering by rotating bodies. Zel'dovich (1971) showed that a rotating absorbing cylinder amplifies incident waves of frequency $\omega$ and azimuthal number $m$ whenever

$$
0 < \omega < m\,\Omega,
\tag{2.18}
$$

where $\Omega$ is the angular velocity of the body. The origin of the effect is easily understood: in the frame co-rotating with the body, the wave has frequency $\omega - m\Omega$, which is negative when Eq. (2.18) holds, so that absorption in the co-rotating frame corresponds to emission in the frame of the observer. Zel'dovich argued that in quantum theory the same body should also emit spontaneously in these “superradiant” modes. Starobinsky (1973) computed the corresponding amplification for a Kerr black hole, for which $\Omega$ is replaced by the angular velocity of the horizon $\Omega_{\mathrm{H}}$, Teukolsky and Press (1974) extended the analysis to electromagnetic and gravitational waves, and Unruh (1974) confirmed by quantising the field on the Kerr background that a rotating black hole emits spontaneously in the superradiant modes. The reasoning of Zel'dovich and Starobinsky was an important motivation for Hawking's investigation, which revealed, unexpectedly, that emission takes place in all modes and persists even when the black hole does not rotate. The physics of superradiance, which has since found applications ranging from black hole instabilities to searches for ultralight bosons, has been reviewed by Brito et al. (2020).

> **Summary of the section**
>
> - Near the horizon, the Kruskal coordinate $U$ used by infalling observers and the retarded time $u$ used by distant observers are related exponentially, $U = -\kappa^{-1}e^{-\kappa u}$, where $\kappa$ is the surface gravity.
>
> - Classically, black holes obey four laws analogous to those of thermodynamics, with $\kappa \leftrightarrow T$ and $A \leftrightarrow S$, but have zero temperature.
>
> - In curved spacetime the notion of particle depends on the choice of positive-frequency modes. Two choices related by Bogoliubov coefficients with $\beta \neq 0$ have different vacua, and $\langle N\rangle = \sum|\beta|^{2}$.
>
> - The Minkowski vacuum, restricted to a Rindler wedge, is a thermal state at $T_{\mathrm{U}} = a/2\pi$. The thermality follows from analyticity and reflects entanglement across the horizon.
