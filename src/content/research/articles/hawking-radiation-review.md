---
slug: hawking-radiation-review
title: "Hawking Radiation: A Pedagogical Review"
date: 2024-02-10
summary: >-
  A self-contained introduction to Hawking radiation and a guide to the
  literature around it: black hole thermodynamics and quantum fields in curved
  spacetime, Hawking's calculation and its alternative derivations,
  evaporation and the trans-Planckian problem, the information paradox from
  the Page curve to replica wormholes, laboratory analogues, and the
  astrophysical searches for black hole evaporation.
tags:
  - black-holes
  - quantum-field-theory
  - general-relativity
  - information-paradox
resume: "/uploads/research/hawking-radiation-review.pdf"
---

## Abstract

These notes provide a self-contained introduction to Hawking radiation and a guide to the research literature that has grown around it. We begin with the classical laws of black hole mechanics and the puzzle that they posed, and we develop the elements of quantum field theory in curved spacetime that are needed to resolve it, using the Unruh effect as a warm-up. Hawking's calculation is then presented step by step, with emphasis on the single geometrical fact on which it rests, namely the exponential redshift of outgoing rays near a forming horizon. We next examine the alternative derivations of the effect and ask what each of them teaches about its physical origin, before turning to the emission spectrum, the evaporation process, and the trans-Planckian problem. A substantial part of the notes is devoted to the black hole information problem, from Hawking's original argument to the Page curve, the firewall paradox, and the recent calculations based on quantum extremal surfaces and replica wormholes. The final sections review laboratory analogues of black holes and the astrophysical, cosmological, and collider searches for Hawking emission. Throughout, derivations are accompanied by order-of-magnitude estimates and by pointers to the original papers and to more specialised reviews.

## 1 Introduction

### 1.1 A puzzle from black hole thermodynamics

In classical general relativity a black hole is a perfect absorber. Its event horizon is a one-way membrane: matter and radiation may cross it inwards, but nothing can cross it outwards. By the early 1970s, however, it had become clear that black holes obey a set of laws that closely resemble the laws of thermodynamics (Bardeen et al., 1973). The surface gravity $\kappa$ of a stationary black hole is constant over its horizon, much as the temperature of a body in equilibrium is uniform; the area $A$ of the horizon never decreases, much as the entropy of an isolated system never decreases; and small changes in the mass, area, angular momentum, and charge are related by an identity of the same form as the first law of thermodynamics. Bekenstein (1972, 1973) argued that this resemblance should be taken literally, and that a black hole carries an entropy proportional to the area of its horizon.

This proposal raised an immediate difficulty. If a black hole has an entropy $S$ and an energy $M$, the first law implies that it has a temperature $T = (\partial S/\partial M)^{-1}$, and any body with a non-zero temperature should radiate. A classical black hole, by construction, does not. Either the thermodynamic analogy is merely formal, as Bardeen et al. (1973) maintained, or classical general relativity is missing an essential ingredient. The resolution, found by Hawking (1974, 1975), is that the missing ingredient is quantum mechanics: when quantum fields are taken into account, a black hole emits thermal radiation at the temperature

$$
{T_{\mathrm{H}}} = \frac{\hbar\kappa}{2\pi c\,k_{\mathrm{B}}}
\;\xrightarrow{\;\text{Schwarzschild}\;}\;
\frac{\hbar c^{3}}{8\pi G M k_{\mathrm{B}}}
\simeq 6.17\times 10^{-8}\,\mathrm{K}\left(\frac{{M_{\odot}}}{M}\right).
\tag{1.1}
$$

Combined with the first law, this fixes the black hole entropy to be the Bekenstein–Hawking entropy,

$$
{S_{\mathrm{BH}}} = \frac{k_{\mathrm{B}} c^{3} A}{4 G\hbar} = \frac{k_{\mathrm{B}} A}{4{\ell_{\mathrm{P}}}^{2}},
\qquad {\ell_{\mathrm{P}}} = \left(\frac{G\hbar}{c^{3}}\right)^{1/2}.
\tag{1.2}
$$

The aim of these notes is to explain how Eqs. (1.1) and (1.2) arise, what physical assumptions they rest upon, and what has been learned about them in the five decades since their discovery.

### 1.2 A first estimate

Before any calculation, it is instructive to ask what Eq. (1.1) could possibly look like. A Schwarzschild black hole is characterised by a single parameter, its mass $M$. From $M$, Newton's constant, and the speed of light one can form a single time scale, the light-crossing time of the horizon, $t_{M} = GM/c^{3}$. Classically there is no way to convert a time scale into a temperature. Quantum mechanics, however, supplies Planck's constant, and the combination $\hbar/t_{M}$ is an energy. The only temperature that can be built from the available quantities is therefore

$$
k_{\mathrm{B}} T \sim \frac{\hbar}{t_{M}} = \frac{\hbar c^{3}}{G M},
\tag{1.3}
$$

which agrees with Eq. (1.1) up to the numerical factor $1/8\pi$. Two lessons follow from this simple argument. First, the temperature must vanish in the classical limit $\hbar \to 0$, which is why classical general relativity could not have found it. Second, the temperature is inversely proportional to the mass, so that small black holes are hot and large black holes are cold; this has important consequences for the evaporation process (Section 5). The same reasoning applied to the entropy, which is dimensionless in units of $k_{\mathrm{B}}$ and must be built from the area and the fundamental constants, leads to $S \sim A/{\ell_{\mathrm{P}}}^{2}$, in agreement with Eq. (1.2).

### 1.3 A heuristic picture and its limitations

A picture that is frequently used to convey the origin of the radiation, and that goes back to Hawking himself, runs as follows. The quantum vacuum contains fluctuations that may be described as virtual particle–antiparticle pairs, which in flat spacetime annihilate within a time allowed by the energy–time uncertainty relation. Near a horizon, one member of such a pair may cross the horizon before annihilation takes place, while the other escapes to infinity as a real particle. Energy conservation then requires that the member which falls in carry negative energy as measured from infinity, so that the black hole loses mass. The picture even reproduces the scale of Eq. (1.3): a pair can be separated by the horizon only if it survives for a time of order $t_{M}$, which requires an energy of order $\hbar/t_{M}$.

The picture is useful, but it should not be taken too literally. It does not explain why the spectrum is thermal, and it suggests that the radiation is created in a thin layer just outside the horizon, whereas the wavelength of a typical emitted quantum is comparable to, or larger than, the size of the black hole itself (Section 5.6). The correct statement, which we develop in Section 3, is that the state of a quantum field that is regular across a forming horizon necessarily contains correlations between modes inside and outside the horizon, and that the outside modes, considered on their own, are thermally populated. The pair picture is best regarded as a mnemonic for this entanglement.

### 1.4 Scope, prerequisites, and conventions

These notes are addressed to readers with a working knowledge of general relativity at the level of a graduate course, including the Schwarzschild and Kerr solutions, Kruskal coordinates, and Penrose diagrams, and of the canonical quantisation of free fields. No prior knowledge of quantum field theory in curved spacetime is assumed; the elements that are needed are introduced in Section 2.3. We use the metric signature $(-,+,+,+)$ and, except in numerical estimates, units in which $\hbar = c = G = k_{\mathrm{B}} = 1$. In these units the Planck mass and the Planck length are both equal to unity, and the Schwarzschild radius is $r_{\mathrm{s}} = 2M$.

We do not attempt to reproduce every technical derivation in full. The standard monographs are those of Birrell and Davies (1982) and Wald (1994). Excellent pedagogical introductions to the Hawking effect are provided by the lecture notes of Jacobson (2005) and by the reviews of Brout et al. (1995), Wald (2001), Page (2005), and Carlip (2014). A critical examination of the assumptions underlying the standard derivations has been given by Helfer (2003). More specialised reviews are cited in the relevant sections, and a short guide to further reading is given in Section 10.4.

### 1.5 Organisation of the notes

Section 2 reviews the classical laws of black hole mechanics and introduces the elements of quantum field theory in curved spacetime, including Bogoliubov transformations and the Unruh effect. Section 3 presents Hawking's calculation. Section 4 surveys the alternative derivations of the effect and the role of the quantum state. Section 5 discusses the emission spectrum and the evaporation process, and Section 6 is devoted to the trans-Planckian problem. Section 7 treats black hole entropy and the information problem. Section 8 reviews laboratory analogues, and Section 9 reviews observational searches. Section 10 summarises the open problems.

The sections need not be read in order. A reader interested principally in the derivation of the effect may read Sections 2 to 4. A reader interested in the information problem needs Sections 2 and 3 and may then proceed directly to Section 7. Sections 8 and 9, on experiments and observations, can be read after Sections 3 and 5.

## 2 Preliminaries

This section collects the classical and quantum background on which the rest of the notes rely. We first recall the geometry of the Schwarzschild black hole and the notion of surface gravity, then review the laws of black hole mechanics and the puzzle that they posed. We then introduce the minimal machinery of quantum field theory in curved spacetime, namely Bogoliubov transformations, and apply it to the Unruh effect, which contains, in the simplest possible setting, almost all of the physics of the Hawking effect.

### 2.1 The Schwarzschild geometry and surface gravity

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

### 2.2 The laws of black hole mechanics

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

The difficulty, already stated in Section 1.1, is that an object with entropy and energy must have a temperature, and Bardeen et al. (1973) emphasised that the effective temperature of a classical black hole is zero, since it absorbs but never emits. The analogy therefore appeared to be purely formal. To see why it is not, we need quantum field theory.

### 2.3 Quantum fields in curved spacetime

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

### 2.4 A warm-up: the Unruh effect

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

satisfies Eq. (2.14). The Minkowski vacuum is therefore a pure, entangled state of the two wedges. An observer confined to the right wedge has no access to the left one, and describes the field by the reduced density matrix obtained by tracing over the left wedge, $\rho_{\mathrm{R}} = \prod_{\omega}(1 - e^{-\omega/T_{\mathrm{U}}})\sum_{n}e^{-n\omega/T_{\mathrm{U}}}{\lvert n_{\omega} \rangle}{\langle n_{\omega} \rvert}$, which is exactly thermal. The thermality is thus a consequence of entanglement across the horizon, a point that will be central to the discussion of the information problem in Section 7. States of the form (2.17) are known as thermofield-double states.

The observation that a uniformly accelerated detector responds thermally in the Minkowski vacuum is due to Unruh (1976), following the work of Fulling (1973) on the non-uniqueness of the vacuum and of Davies (1975) on the analogy between Rindler and Schwarzschild particle production. The same paper introduced the model particle detector that now bears Unruh's name. The extensive literature on the Unruh effect has been reviewed by Crispino et al. (2008).

### 2.5 Superradiance

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

## 3 Hawking's calculation

We are now in a position to follow the argument of Hawking (1974, 1975). We present it in a simplified form that isolates the essential steps; a careful treatment may be found in Hawking (1975), Birrell and Davies (1982), and Jacobson (2005).

### 3.1 Set-up

We consider a star that undergoes spherically symmetric gravitational collapse to form a Schwarzschild black hole, and a free massless scalar field propagating on the resulting spacetime, whose Penrose diagram is shown in Fig. 1. We make the following assumptions.

(i) Before the collapse, the field is in its vacuum state with respect to the natural time coordinate at past null infinity ${\mathscr{I}}^{-}$; there is no incoming radiation.

(ii) The field propagates freely through the collapsing matter, which is taken to be transparent; nothing essential depends on this assumption.

(iii) The backreaction of the field on the geometry is neglected.

The question is what an observer at future null infinity ${\mathscr{I}}^{+}$ detects at late times. In the language of Section 2.3, the in-modes are the modes that are positive frequency with respect to the advanced time $v$ on ${\mathscr{I}}^{-}$, the out-modes are those that are positive frequency with respect to the retarded time $u$ on ${\mathscr{I}}^{+}$, and the task is to compute the Bogoliubov coefficients relating the two.

![Penrose diagram of a black hole formed by the collapse of a star (shaded). Ingoing rays from ℐ⁻ pass through the centre r = 0 and emerge as outgoing rays. The ray that leaves ℐ⁻ at the advanced time v₀ generates the event horizon (dashed). A ray that leaves ℐ⁻ slightly before v₀ (thick) remains close to the horizon for a long time and reaches ℐ⁺ at a late retarded time u; an earlier ray (grey) escapes promptly.](/uploads/research/hawking-penrose-collapse.png "Figure 1: Penrose diagram of a black hole formed by the collapse of a star (shaded). Ingoing rays from ℐ⁻ pass through the centre r = 0 and emerge as outgoing rays. The ray that leaves ℐ⁻ at the advanced time v₀ generates the event horizon (dashed). A ray that leaves ℐ⁻ slightly before v₀ (thick) remains close to the horizon for a long time and reaches ℐ⁺ at a late retarded time u; an earlier ray (grey) escapes promptly.")

### 3.2 The exponential redshift

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

with $C = (c\kappa)^{-1}$. This is the exponential relation announced in Section 2.1: equal intervals of retarded time at late times correspond to exponentially shrinking intervals of advanced time. Equivalently, a wave that reaches ${\mathscr{I}}^{+}$ with frequency $\omega$ at retarded time $u$ left ${\mathscr{I}}^{-}$ with frequency of order $\omega\,e^{\kappa u}$; the gravitational redshift between ${\mathscr{I}}^{-}$ and ${\mathscr{I}}^{+}$ grows exponentially with time.

> **Remark 3.1.**
>
> The details of the collapse enter Eq. (3.2) only through the constant $C$, whereas the exponent is fixed by the surface gravity of the final black hole. We should therefore expect the late-time radiation to be independent of how the black hole was formed, in accordance with the no-hair property. We should also expect the argument to apply to any horizon, gravitational or not, across which the relation between the natural coordinates of the two sides is exponential. Both expectations are borne out (Sections 4.5 and 8).

### 3.3 The Bogoliubov coefficients

Consider an out-mode with frequency $\omega$ and angular momentum quantum numbers $(\ell, m)$, which near ${\mathscr{I}}^{+}$ has the form $p_{\omega} \propto r^{-1}e^{-i\omega u}Y_{\ell m}$. We trace this mode backwards in time. Part of it is scattered by the curvature potential outside the star and reaches ${\mathscr{I}}^{-}$ at late advanced times; this part is of the form $e^{-i\omega v}$, is positive frequency with respect to $v$, and contributes nothing to the $\beta$ coefficients. The remaining part, with a probability that we denote by $\Gamma_{\omega\ell}$, passes through the collapsing star and reaches ${\mathscr{I}}^{-}$ just before $v_{0}$. Using Eq. (3.2), this part has the form

$$
p_{\omega}\big|_{{\mathscr{I}}^{-}} \propto
\begin{cases}
\exp\!\left[\dfrac{i\omega}{\kappa}\ln\dfrac{v_{0} - v}{C}\right], & v < v_{0},\\[1ex]
0, & v > v_{0},
\end{cases}
\tag{3.3}
$$

which oscillates infinitely rapidly as $v \to v_{0}$. This function is clearly not positive frequency with respect to $v$. To extract its negative-frequency content we can repeat, almost word for word, the analyticity argument of Section 2.4. The in-modes $e^{-i\omega' v}$ with $\omega' > 0$ are analytic and bounded in the lower half of the complex $v$-plane. Continuing $(v_{0} - v)^{i\omega/\kappa}$ from $v < v_{0}$ to $v > v_{0}$ through the lower half-plane produces the factor $e^{-\pi\omega/\kappa}$, exactly as in Eq. (2.13). The upshot is that the Bogoliubov coefficients of the transmitted part satisfy

$$
|\beta_{\omega\omega'}|^{2} = e^{-2\pi\omega/\kappa}\,|\alpha_{\omega\omega'}|^{2}.
\tag{3.4}
$$

Hawking (1975) obtained the same relation by evaluating the Fourier integrals explicitly, which yields expressions involving $\Gamma(1 - i\omega/\kappa)$ whose ratio is precisely the factor in Eq. (3.4).

The normalisation condition of Section 2.3, applied to the transmitted part of the mode, gives $\sum_{\omega'}(|\alpha_{\omega\omega'}|^{2} - |\beta_{\omega\omega'}|^{2}) = \Gamma_{\omega\ell}$. Combining this with Eq. (3.4) yields

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

Equation (3.6) is the central result. It states that a black hole emits particles of all species as a black body at the temperature ${T_{\mathrm{H}}}$, except that the Planck spectrum is multiplied by the greybody factor $\Gamma_{\omega\ell m}$. The latter is the probability that a wave emerging from the vicinity of the horizon traverses the curvature potential and reaches infinity; by time-reversal symmetry, it equals the probability that a wave sent in from infinity is absorbed by the black hole. It is discussed further in Section 5.1.

### 3.4 A heuristic derivation from the Unruh effect

The close similarity between Section 2.4 and Section 3.3 suggests a shortcut, which is worth presenting because it makes the physical origin of the temperature transparent. Close to the horizon, and over distances small compared with $M$, the Schwarzschild geometry is indistinguishable from flat spacetime in Rindler coordinates: a static observer at radius $r$ is simply an accelerated observer with proper acceleration $a(r) = M/(r^{2}\sqrt{f})$. If the state of the field near the horizon looks like the vacuum to freely falling observers, as it should if nothing singular happens at the horizon, then the static observer detects a thermal bath at the local Unruh temperature $a(r)/2\pi$. Thermal radiation climbing out of a gravitational potential is redshifted, and its temperature measured at infinity is reduced by the factor $\sqrt{f}$ (the Tolman relation; see Wald, 1994). The temperature measured at infinity is therefore

$$
T_{\infty} = \sqrt{f(r)}\,\frac{a(r)}{2\pi} = \frac{M}{2\pi r^{2}} \;\xrightarrow{\;r\,\to\,2M\;}\; \frac{1}{8\pi M} = \frac{\kappa}{2\pi},
\tag{3.7}
$$

in agreement with Eq. (3.6). The argument makes clear that the Hawking temperature is the Unruh temperature associated with the surface gravity, and it isolates the key assumption: the state must be regular, in the sense of looking locally like the vacuum, across the horizon. The virtue of Hawking's calculation is that it derives this regularity from the collapse, rather than assuming it.

### 3.5 The state of the radiation

What is the quantum state of the field at late times? The analyticity argument of Section 3.3 shows that the relevant positive-frequency combinations mix out-modes with modes that propagate into the black hole, which we shall call partner modes. Exactly as in Eq. (2.17), the in-vacuum can then be written, for each late-time mode, as

$$
{\lvert 0_{\mathrm{in}} \rangle} \propto \sum_{n=0}^{\infty} e^{-\pi n\omega/\kappa}\,{\lvert n_{\omega} \rangle}_{\mathrm{out}}\otimes{\lvert n_{\omega} \rangle}_{\mathrm{partner}}.
\tag{3.8}
$$

The state is pure, but each outgoing quantum is entangled with a partner quantum behind the horizon. An observer outside the black hole has no access to the partners, and must describe the radiation by the reduced density matrix obtained by tracing them out, which is exactly thermal. This was shown rigorously by Wald (1975) and, independently, by Parker (1975), who established that the emitted radiation is described by a thermal density matrix with no correlations between different out-modes. Equation (3.8) is the precise version of the pair picture of Section 1.3, and it contains the seed of the information problem: if the black hole eventually disappears, the partners disappear with it, and the radiation left behind is in a mixed state (Section 7).

### 3.6 Energy, area, and entropy

The emission of positive energy to infinity must be balanced by a loss of mass. At the level of the renormalised stress-energy tensor, the outgoing flux at infinity is accompanied by a flux of negative energy across the horizon (Section 4.3), and the area of the horizon decreases. This does not contradict the area theorem of Hawking (1971a), since the renormalised stress-energy tensor of the quantum field violates the null energy condition near the horizon. It does, however, imply that the area theorem cannot be the fundamental statement; its role is taken over by the generalised second law, which remains valid because the entropy of the emitted radiation more than compensates the decrease of the black hole entropy (Bekenstein, 1974; Wald, 2001).

With the temperature identified, the first law (2.4) fixes the entropy. For a Schwarzschild black hole, ${\mathrm{d}} S = {\mathrm{d}} M/{T_{\mathrm{H}}} = 8\pi M\,{\mathrm{d}} M$, which integrates to $S = 4\pi M^{2} = A/4$, the Bekenstein–Hawking entropy (1.2). The resulting thermodynamics has a peculiar feature. Since ${T_{\mathrm{H}}} \propto 1/M$, the heat capacity

$$
C = \frac{{\mathrm{d}} M}{{\mathrm{d}}{T_{\mathrm{H}}}} = -8\pi M^{2}
\tag{3.9}
$$

is negative. A black hole that loses energy by radiation becomes hotter and radiates faster, and a black hole in contact with an infinite heat bath cannot be in stable equilibrium: if it is slightly hotter than the bath it evaporates, and if it is slightly colder it grows. This instability will reappear in the Euclidean approach (Section 4.2).

### 3.7 Orders of magnitude

It is useful to restore physical units and put in numbers. The Hawking temperature may be written either as ${T_{\mathrm{H}}} \simeq 6.17\times 10^{-8}\,\mathrm{K}\,({M_{\odot}}/M)$ or, in energy units, as $k_{\mathrm{B}}{T_{\mathrm{H}}} \simeq 1.06\,\mathrm{GeV}\,(10^{13}\,\mathrm{g}/M)$. Table 2 lists the temperature, Schwarzschild radius, and approximate lifetime for a range of masses; the lifetimes are derived in Section 5. Two conclusions are immediate. First, astrophysical black holes are far colder than the cosmic microwave background, whose temperature is $2.725\,\mathrm{K}$: a black hole is hotter than the background only if its mass is below approximately $4.5\times 10^{22}\,\mathrm{kg}$, somewhat less than the mass of the Moon. Black holes formed by stellar collapse therefore currently absorb more radiation than they emit. Second, black holes with masses below approximately $10^{16}\,\mathrm{g}$ radiate at energies relevant to nuclear and particle physics, and those with masses near $5\times 10^{14}\,\mathrm{g}$ would be completing their evaporation today. Only black holes formed in the early universe could have such masses, which is why the observational search for Hawking radiation is a search for primordial black holes (Section 9).

| Mass | Example | $r_{\mathrm{s}} = 2GM/c^{2}$ | ${T_{\mathrm{H}}}$ | Lifetime |
| --- | --- | --- | --- | --- |
| $10\,{M_{\odot}}$ | Stellar black hole | $30\,\mathrm{km}$ | $6\times 10^{-9}\,\mathrm{K}$ | $\sim 10^{70}\,\mathrm{yr}$ |
| ${M_{\odot}}$ | | $3\,\mathrm{km}$ | $6\times 10^{-8}\,\mathrm{K}$ | $\sim 10^{67}\,\mathrm{yr}$ |
| $4.5\times 10^{25}\,\mathrm{g}$ | ${T_{\mathrm{H}}} = T_{\mathrm{CMB}}$ | $0.07\,\mathrm{mm}$ | $2.7\,\mathrm{K}$ | $\sim 10^{44}\,\mathrm{yr}$ |
| $10^{20}\,\mathrm{g}$ | Asteroid mass | $1.5\times 10^{-10}\,\mathrm{m}$ | $\approx 100\,\mathrm{eV}$ | $\sim 10^{26}\,\mathrm{yr}$ |
| $5\times 10^{14}\,\mathrm{g}$ | Evaporating today | $7\times 10^{-16}\,\mathrm{m}$ | $\approx 20\,\mathrm{MeV}$ | $\approx 1.4\times 10^{10}\,\mathrm{yr}$ |
| $10^{9}\,\mathrm{g}$ | | $1.5\times 10^{-21}\,\mathrm{m}$ | $\approx 10\,\mathrm{TeV}$ | $\sim 0.4\,\mathrm{s}$ |

_Table 2: Characteristic scales of Schwarzschild black holes. The lifetimes are order-of-magnitude estimates that depend on the particle species emitted (Section 5.2); they neglect accretion, including the absorption of the cosmic microwave background._

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

## 4 Other routes to the same temperature

Hawking's derivation relies on a specific model of collapse and on the propagation of modes through the collapsing body. A natural question is which of its ingredients are essential. Over the following decades the effect was rederived in many different ways, each of which isolates a different aspect of the physics. The derivations differ considerably in their assumptions and in the physical picture they suggest, but all of them yield ${T_{\mathrm{H}}} = \kappa/2\pi$. In this section we survey the most important of them; Table 4 at the end of the section provides a summary.

### 4.1 The choice of state

On the maximally extended Schwarzschild spacetime, which describes an eternal black hole rather than one formed by collapse, there is no in-vacuum, and a state must be chosen. Three choices are of particular importance, and comparing them is the best way to understand what the collapse calculation actually selects. Their properties are summarised in Table 3.

The Boulware state (Boulware, 1975) is the vacuum defined with respect to the Killing time $t$. It contains no radiation at infinity, but its renormalised stress-energy tensor diverges on both the past and the future horizons. It is the appropriate state outside a static star whose surface lies outside $r = 2M$, and it is unphysical for a black hole. The Hartle–Hawking state (Hartle and Hawking, 1976; Israel, 1976) is regular on both horizons and describes a black hole in thermal equilibrium with a bath of radiation at ${T_{\mathrm{H}}}$; it is the gravitational analogue of the Minkowski vacuum restricted to a Rindler wedge. The Unruh state (Unruh, 1976) is regular on the future horizon, contains no radiation incoming from ${\mathscr{I}}^{-}$, and carries an outgoing thermal flux at infinity. It reproduces the late-time behaviour of the state produced by gravitational collapse, and it is therefore the state that describes an evaporating black hole. The vacuum polarisation in these states was computed by Candelas (1980).

| State | Future horizon | Past horizon | Physical situation |
| --- | --- | --- | --- |
| Boulware | Singular | Singular | Exterior of a static star; no flux at infinity |
| Unruh | Regular | Singular | Black hole formed by collapse; outgoing thermal flux at ${T_{\mathrm{H}}}$ |
| Hartle–Hawking | Regular | Regular | Black hole in equilibrium with a thermal bath at ${T_{\mathrm{H}}}$ |

_Table 3: The three standard states on the Schwarzschild spacetime._

The comparison makes the lesson of Section 3.4 precise: the thermal flux is tied to regularity on the future horizon. This connection was made rigorous by Kay and Wald (1991). For spacetimes with a bifurcate Killing horizon they proved that there is at most one stationary state that is invariant under the isometries and satisfies the Hadamard condition, which requires the short-distance singularity structure of the two-point function to be that of the Minkowski vacuum. When such a state exists, it is a Kubo–Martin–Schwinger (KMS) state, that is, a thermal equilibrium state, at temperature $\kappa/2\pi$ with respect to the Killing time. Thermality is therefore not an additional assumption but a consequence of requiring that the state look like the vacuum at short distances across the horizon. Kay and Wald (1991) also showed that no such state exists on the Kerr spacetime, a result related to the presence of superradiant modes.

### 4.2 Euclidean methods

A strikingly economical derivation of the temperature is obtained by continuing to imaginary time. Let us set $t = -i\tau$ in the Schwarzschild metric and examine the resulting Riemannian metric near $r = 2M$. Introducing the proper distance from the horizon through $r = 2M + \rho^{2}/8M$, one finds $f \simeq \rho^{2}/16M^{2}$ and ${\mathrm{d}} r^{2}/f \simeq {\mathrm{d}}\rho^{2}$, so that

$$
{\mathrm{d}} s^{2}_{\mathrm{E}} \simeq \rho^{2}\,{\mathrm{d}}(\kappa\tau)^{2} + {\mathrm{d}}\rho^{2} + 4M^{2}{\mathrm{d}}\Omega^{2}.
\tag{4.1}
$$

The first two terms are the flat metric in polar coordinates, with $\kappa\tau$ playing the role of the polar angle. The geometry is smooth at $\rho = 0$ only if the angle has period $2\pi$; otherwise there is a conical singularity. The imaginary time must therefore be periodic, $\tau \sim \tau + 2\pi/\kappa$. Since a quantum field theory at temperature $T$ is described by a Euclidean path integral with imaginary time periodic with period $1/T$, the black hole is naturally associated with the temperature $T = \kappa/2\pi$.

Gibbons and Hawking (1977a) pushed the argument further by interpreting the Euclidean gravitational path integral, with period $\beta = 8\pi M$, as a thermal partition function, $Z = \int\mathcal{D}g\,e^{-I_{\mathrm{E}}[g]}$. In the saddle-point approximation $Z \simeq e^{-I_{\mathrm{E}}}$, where $I_{\mathrm{E}} = \beta^{2}/16\pi$ is the on-shell action of the Euclidean Schwarzschild solution. Standard thermodynamic relations then give

$$
E = -\frac{\partial\ln Z}{\partial\beta} = \frac{\beta}{8\pi} = M,
\qquad
S = \beta E + \ln Z = \frac{\beta^{2}}{16\pi} = 4\pi M^{2} = \frac{A}{4},
\tag{4.2}
$$

which reproduces both the mass and the Bekenstein–Hawking entropy from a purely geometrical calculation. The same method shows that the cosmological horizon of de Sitter space has temperature $H/2\pi$, where $H$ is the Hubble rate (Gibbons and Hawking, 1977b). Earlier, Hartle and Hawking (1976) had obtained the Hawking flux by analytically continuing the Feynman propagator in the complexified Schwarzschild geometry, finding that the probability of emission of a particle is related to the probability of absorption by the factor $e^{-\omega/{T_{\mathrm{H}}}}$. Israel (1976) observed that the Hartle–Hawking state can be regarded as a thermofield double of the two exterior regions of the extended geometry, in exact analogy with Eq. (2.17), an observation that anticipated later developments in holography.

> **Remark 4.1.**
>
> The negative heat capacity (3.9) implies that the canonical ensemble of asymptotically flat black holes is unstable, and the Euclidean path integral reflects this through a negative mode in the fluctuations around the saddle. The situation is different in anti-de Sitter (AdS) space, which acts as a confining box. Hawking and Page (1983) showed that sufficiently large AdS black holes have positive heat capacity and can be in stable equilibrium with their own radiation, and that a first-order phase transition separates thermal AdS space from the black hole phase. This result became central to the interpretation of black holes in the AdS/CFT correspondence (Section 7.7).

### 4.3 The stress-energy tensor and the trace anomaly

The particle description of the radiation is meaningful only far from the black hole. Near the horizon a local description in terms of the expectation value of the renormalised stress-energy tensor $\langle T_{\mu\nu}\rangle$ is more appropriate, and it is also the quantity that sources the semiclassical Einstein equations. In two spacetime dimensions, conservation and the trace anomaly determine $\langle T_{\mu\nu}\rangle$ almost completely once the state is specified. Davies et al. (1976) used this fact to show that, in the Unruh state, the outgoing energy flux at infinity is

$$
\langle T_{uu}\rangle\big|_{{\mathscr{I}}^{+}} = \frac{\kappa^{2}}{48\pi} = \frac{\pi}{12}\,{T_{\mathrm{H}}}^{2},
\tag{4.3}
$$

which is the energy flux of a one-dimensional black body at temperature ${T_{\mathrm{H}}}$, while at the horizon there is an ingoing flux of negative energy, $\langle T_{vv}\rangle = -\kappa^{2}/48\pi$, which reduces the mass of the black hole. Christensen and Fulling (1977) extended the analysis to four dimensions by combining the trace anomaly with conservation and regularity conditions. The lesson of these calculations is that the energy of the Hawking flux is not carried by particles that exist, as such, near the horizon: close to the horizon the dominant effect is the influx of negative energy, and the particle interpretation emerges only at distances of a few Schwarzschild radii. We return to the question of where the radiation originates in Section 5.6.

A closely related line of work employs moving mirrors in two-dimensional flat spacetime. Fulling and Davies (1976) showed that a perfectly reflecting mirror whose trajectory approaches a null line exponentially, in the manner of Eq. (3.2), produces a thermal flux. The mirror thus reproduces the essential kinematics of the collapse problem without any curvature, which illustrates again that the effect is kinematical. Carlitz and Willey (1987) subsequently used mirror trajectories to study how correlations in the emitted radiation can restore the purity of the final state, and moving-mirror models remain a useful laboratory for questions about the information content of the radiation.

### 4.4 Tunnelling and anomalies

Two further derivations are shorter but less fundamental, and they are best regarded as heuristics that are consistent with, rather than independent of, the field-theoretic derivations. In the tunnelling picture, the radiation arises from the classically forbidden crossing of the horizon, and the emission rate is determined by the imaginary part of the action of the tunnelling particle. Srinivasan and Padmanabhan (1999) obtained the temperature from a complex-path analysis of the Hamilton–Jacobi equation. Parikh and Wilczek (2000) considered an s-wave shell of energy $\omega$ tunnelling across the horizon while imposing energy conservation, so that the mass of the black hole decreases from $M$ to $M - \omega$. They found

$$
\Gamma \sim e^{-2\,\mathrm{Im}\,S} = \exp\!\left[-8\pi\omega\left(M - \frac{\omega}{2}\right)\right] = e^{\Delta{S_{\mathrm{BH}}}},
\tag{4.4}
$$

where $\Delta{S_{\mathrm{BH}}} = 4\pi[(M-\omega)^{2} - M^{2}]$ is the change in the Bekenstein–Hawking entropy. To leading order in $\omega/M$ this is the Boltzmann factor $e^{-\omega/{T_{\mathrm{H}}}}$, and the correction reflects the backreaction of the emitted quantum on the black hole. The identification of the emission probability with $e^{\Delta{S_{\mathrm{BH}}}}$ suggests an interpretation in terms of the number of black hole microstates. Several subtleties concerning the choice of coordinates, the contribution of the time coordinate to the imaginary part of the action, and the interpretation of the non-thermal corrections have been discussed in the subsequent literature.

Robinson and Wilczek (2005) proposed a derivation based on gravitational anomalies. Near the horizon a field theory on the black hole background can be reduced to an infinite collection of two-dimensional fields. If the ingoing modes, which cannot affect the exterior classically, are integrated out, the effective theory of the outgoing modes becomes chiral and exhibits a gravitational anomaly. Requiring that general covariance be restored in the full theory fixes the outgoing energy flux to be precisely Eq. (4.3). Iso et al. (2006) extended the argument to charged black holes, where the gauge anomaly fixes the charge flux in a similar way. As with the tunnelling approach, regularity of the state at the future horizon enters as an input.

### 4.5 Rigorous results and universality

Hawking's result was placed on a rigorous footing shortly after its publication by Wald (1975) and Parker (1975), who showed that the late-time radiation is described by an exactly thermal density matrix (Section 3.5). Fredenhagen and Haag (1990) derived the effect within algebraic quantum field theory, showing that the late-time flux follows from the assumption that the state is of Hadamard form near the horizon during the collapse, independently of further details of the initial state.

A related programme has sought to identify the minimal geometrical conditions for the effect, following the hint of Remark 3.1. Visser (2003) argued that Hawking radiation is fundamentally kinematical: it requires a Lorentzian geometry with an (apparent) horizon and a well-defined surface gravity, together with a quantum field in a suitable state, but it does not depend on the Einstein equations, on the existence of a global event horizon, or on the identification of entropy with area. Unruh and Schützhold (2005) established that the effect is robust against modifications of the dispersion relation at short wavelengths, under conditions discussed in Section 6. Barceló et al. (2011a) showed that the essential ingredient is the exponential “peeling” of outgoing null rays, Eq. (3.2), maintained for a sufficiently long time. Objects that approach but never form a horizon can therefore emit Hawking-like radiation transiently, whereas a horizon that forms without adiabatic peeling need not radiate thermally.

| Approach | Representative references | Key input | Principal output |
| --- | --- | --- | --- |
| Bogoliubov transformation in collapse | Hawking (1975); Wald (1975); Parker (1975) | Vacuum at ${\mathscr{I}}^{-}$; geometric optics through the collapsing body | Thermal flux with greybody factors; exactly thermal density matrix |
| Detector response and choice of state | Unruh (1976) | State regular on the future horizon | Thermal response of static detectors; relation to the Unruh effect |
| Euclidean methods | Hartle and Hawking (1976); Gibbons and Hawking (1977a) | Regularity of the Euclidean section at the horizon | Temperature from periodicity; entropy $A/4$ from the on-shell action |
| Stress tensor and trace anomaly | Davies et al. (1976); Christensen and Fulling (1977) | Conformal anomaly, conservation, regularity | Energy flux at infinity; negative energy influx at the horizon |
| Tunnelling | Srinivasan and Padmanabhan (1999); Parikh and Wilczek (2000) | WKB amplitude across the horizon; energy conservation | Boltzmann factor, with corrections from backreaction |
| Gravitational anomalies | Robinson and Wilczek (2005); Iso et al. (2006) | General covariance of the near-horizon effective theory | Two-dimensional blackbody flux at ${T_{\mathrm{H}}}$ |
| Algebraic quantum field theory | Kay and Wald (1991); Fredenhagen and Haag (1990) | Hadamard condition on the state | Uniqueness and thermality (KMS property) of the stationary state |

_Table 4: Principal derivations of the Hawking effect. All reproduce ${T_{\mathrm{H}}} = \kappa/2\pi$; they differ in which assumption they make explicit._

> **Summary of the section**
>
> - Of the three standard states on an eternal black hole, only the Unruh state, which is regular on the future horizon and has no incoming flux, describes an evaporating black hole.
>
> - Regularity across a Killing horizon implies thermality at $\kappa/2\pi$ (Kay and Wald, 1991); in the Euclidean language, it is the absence of a conical singularity.
>
> - Near the horizon the Hawking flux is carried by an influx of negative energy; the particle description applies only far away.
>
> - The effect is kinematical: it requires exponential peeling of null rays and a state that is regular at short distances, but not the Einstein equations.

## 5 The emission spectrum and the evaporation of black holes

Equation (3.6) tells us that a black hole radiates as a grey body. In this section we examine what this implies quantitatively: how the greybody factors shape the spectrum, how fast a black hole loses mass, which particles it emits, and what is known about the late stages of the process.

### 5.1 Greybody factors

The greybody factors describe the scattering of each mode by the curvature surrounding the black hole. For a massless field of spin $s = 0, 1, 2$ on the Schwarzschild background, the radial part $\psi$ of each mode obeys a one-dimensional wave equation in the tortoise coordinate,

$$
\frac{{\mathrm{d}}^{2}\psi}{{\mathrm{d}} r_{*}^{2}} + \left[\omega^{2} - V_{s\ell}(r)\right]\psi = 0,
\qquad
V_{s\ell}(r) = \left(1 - \frac{2M}{r}\right)\left[\frac{\ell(\ell+1)}{r^{2}} + \frac{2M(1 - s^{2})}{r^{3}}\right],
\tag{5.1}
$$

where for $s = 2$ this is the Regge–Wheeler equation for axial gravitational perturbations; fields of half-integer spin obey analogous equations, and the Teukolsky formalism treats all spins on the Kerr background in a unified way (Teukolsky and Press, 1974). The potential vanishes at the horizon ($r_{*} \to -\infty$) and at infinity, and has a maximum near the photon sphere $r = 3M$. The greybody factor $\Gamma_{s\ell}(\omega)$ is the transmission probability through this barrier.

Two limits are easy to understand. At high frequencies, $M\omega \gg 1$, waves pass over the barrier whenever their impact parameter is less than the critical value $3\sqrt{3}\,M$, and the total absorption cross-section approaches the geometric capture cross-section of the photon sphere, $\sigma \to 27\pi M^{2}$. At low frequencies, $M\omega \ll 1$, the barrier is nearly opaque and $\Gamma$ is strongly suppressed, the more so the higher the spin and the angular momentum: for the s-wave of a massless scalar field $\Gamma_{00} \simeq 16M^{2}\omega^{2}$, so that the low-frequency absorption cross-section equals the area of the horizon, $16\pi M^{2}$ (Das et al., 1997). As a result, the emission of higher-spin particles is suppressed relative to a pure black body, and the spectrum peaks at somewhat higher energies than a Planck spectrum at the same temperature.

### 5.2 Luminosity, mass loss, and lifetime

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

so that the black hole evaporates completely in a finite time $\tau$, with most of the time spent at masses close to $M_{0}$ and a runaway at the end. In physical units, Page's value of $\alpha$ gives $\tau \simeq 8.7\times 10^{-27}\,(M_{0}/1\,\mathrm{g})^{3}\,\mathrm{s}$. For a solar-mass black hole, whose temperature is far below the neutrino masses, only photons and gravitons are emitted in appreciable numbers, the effective $\alpha$ is correspondingly smaller, and the lifetime is of the order of $10^{67}$ years. In reality $\alpha$ is not constant: as the black hole shrinks and its temperature rises, more particle species become available, and $\alpha$ increases (Section 5.4).

### 5.3 Rotation and charge

Rotation and charge modify the emission in characteristic ways. Page (1976b) showed that a Kerr black hole loses angular momentum considerably faster than it loses mass. The reason is visible in Eq. (3.6): the factor $\omega - m\Omega_{\mathrm{H}}$ favours the emission of quanta with large $m$, which carry away angular momentum efficiently, and the effect is stronger for fields of higher spin. The final spin of an evaporating black hole therefore depends on the species emitted: Chambers et al. (1997) found that for a black hole emitting only scalar quanta the dimensionless spin $a/M$ does not decrease to zero but tends to an asymptotic value of approximately 0.555. Charged black holes lose their charge through the preferential emission of particles with the same sign of charge, and, when the electric field near the horizon exceeds the Schwinger critical value, through vacuum pair production (Gibbons, 1975; Damour and Ruffini, 1976). The emission of charged leptons from a non-rotating black hole was computed by Page (1977). As a consequence of these processes, black holes that are small enough to evaporate on cosmological time scales are expected to be very nearly neutral and to have lost most of their initial spin long before their final evaporation.

### 5.4 Massive particles and secondary emission

A particle species of mass $m$ is emitted in appreciable numbers only when ${T_{\mathrm{H}}} \gtrsim m$, since its emission is otherwise suppressed by the Boltzmann factor. As a black hole evaporates, its temperature rises through the mass thresholds of the Standard Model, and the number of effective degrees of freedom contributing to $\alpha$ in Eq. (5.3) increases. Once ${T_{\mathrm{H}}}$ exceeds the QCD confinement scale, quarks and gluons are emitted as elementary particles, which then fragment and hadronise at distances large compared with the size of the black hole. MacGibbon and Webber (1990) and MacGibbon (1991) showed that the resulting secondary particles, in particular photons from the decay of neutral pions, dominate the photon spectrum at high temperatures, and they computed the emission integrated over the lifetime of the black hole. When the full Standard Model is included, a black hole with an initial mass of approximately $5\times 10^{14}\,\mathrm{g}$ has a lifetime equal to the present age of the universe (MacGibbon et al., 2008; Carr et al., 2010). The public code \textsc{BlackHawk} (Arbey and Auffinger, 2019, 2021) computes the primary and secondary spectra for arbitrary distributions of masses and spins, and it has become a standard tool in the analyses of Section 9.

Whether the emitted particles interact with one another sufficiently to modify the spectrum has been debated. Heckler (1997) argued that bremsstrahlung and pair production would lead to the formation of a photosphere, and of a corresponding QCD “chromosphere”, around sufficiently hot black holes, degrading the spectrum to lower energies. MacGibbon et al. (2008) argued that causal and kinematical considerations prevent the emitted particles from interacting sufficiently for such a photosphere to form, so that the particles stream freely and the standard secondary spectra remain valid. The latter view is widely adopted in current analyses.

### 5.5 A sparse flux

A striking feature of Hawking radiation, which distinguishes it from the radiation of an ordinary hot body, is how sparse it is. A rough estimate conveys the point. With the photon luminosity (5.2) and a mean photon energy of about $2.7\,{T_{\mathrm{H}}} \approx 0.11/M$, the photon emission rate is of order $3\times 10^{-4}/M$, so that successive photons are separated on average by a time of order $3\times 10^{3}M$. The period of a typical photon, $2\pi/\langle\omega\rangle$, is only of order $60M$. Successive quanta are therefore separated by many wave periods, in stark contrast to blackbody cavity radiation, in which quanta overlap strongly. Gray et al. (2016) made this observation precise, and it had been emphasised earlier by Page (2005). The Hawking flux is better pictured as a slow sequence of individual quanta than as a continuous thermal fluid.

### 5.6 Backreaction and the end point

So far we have treated the black hole as a fixed background. The evolution of an evaporating black hole is usually described in the semiclassical approximation, in which the metric is classical and sourced by the expectation value of the renormalised stress-energy tensor, $G_{\mu\nu} = 8\pi\langle T_{\mu\nu}\rangle$. Is this approximation consistent? The relevant criterion is adiabaticity: the surface gravity should change little over the time scale $\kappa^{-1}$ on which the emission is established. Using Eq. (5.3),

$$
\frac{1}{\kappa^{2}}\left|\frac{{\mathrm{d}}\kappa}{{\mathrm{d}} t}\right| = 4\left|\frac{{\mathrm{d}} M}{{\mathrm{d}} t}\right| = \frac{4\alpha}{M^{2}} \ll 1,
\tag{5.5}
$$

which is satisfied with an enormous margin for any black hole much heavier than the Planck mass. Bardeen (1981) argued that, when backreaction is included in this approximation, the evaporation proceeds quasi-statically and the emission remains thermal at the instantaneous Hawking temperature until the black hole approaches the Planck scale, and York (1983) constructed a quantum-corrected geometry describing the dynamical origin of the radiation near the horizon.

Two-dimensional dilaton gravity provides solvable models in which backreaction can be treated more completely. Callan et al. (1992) introduced a model in which the formation and evaporation of a black hole can be described with one-loop quantum effects included, and Russo et al. (1992) found a modification in which the end point of evaporation is described by an exact solution. These models confirmed that the semiclassical evaporation proceeds in a controlled manner down to the scale at which quantum gravitational effects become strong, but they cannot tell us what happens at that scale in four dimensions.

The end point of evaporation therefore lies beyond the reach of the semiclassical approximation. The possibilities discussed in the literature include complete evaporation, leaving only radiation, the formation of a stable or long-lived Planck-scale remnant (Aharonov et al., 1987), and a transition to some other object whose description requires quantum gravity. A remnant would have to carry an arbitrarily large amount of information within a Planck-scale region, which leads to difficulties associated with an unbounded number of internal states; the arguments for and against remnants have been reviewed by Chen et al. (2015). More recently, Dvali et al. (2020) proposed that the information stored in a black hole exerts a “memory burden” that resists further evaporation, so that the emission rate would be strongly suppressed after the black hole has lost a substantial fraction of its initial mass. This proposal lies outside the standard semiclassical framework and remains speculative, but, if correct, it would substantially modify the constraints on primordial black holes discussed in Section 9 (Alexandre et al., 2024; Thoss et al., 2024).

> **Remark 5.1.**
>
> Where does the radiation originate? The pair picture of Section 1.3 suggests a thin layer at the horizon. However, the typical wavelength of the emitted quanta, of order $2\pi/{T_{\mathrm{H}}} = 16\pi^{2}M$, is much larger than the size of the black hole, and the stress-tensor analyses of Section 4.3 show that the outgoing positive energy flux builds up over a region extending well outside the horizon. Giddings (2016) argued, on the basis of the Stefan–Boltzmann law and the effective radius of emission, that the radiation originates from a “quantum atmosphere” extending to a distance of order the horizon radius beyond the horizon. Dey et al. (2017) examined this proposal using the renormalised stress-energy tensor and the correlations between Hawking quanta and their partners and reached a broadly compatible conclusion. The location of the emission region matters both for the trans-Planckian problem of Section 6 and for proposals in which the near-horizon region is modified (Section 7).

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

## 6 The trans-Planckian problem

### 6.1 Statement of the problem

The exponential relation (3.2), which is the source of the Hawking effect, has a disconcerting consequence when it is read backwards in time. A quantum of frequency $\omega \sim {T_{\mathrm{H}}}$ that reaches ${\mathscr{I}}^{+}$ at retarded time $u$ corresponds, near the horizon and in the frame of a freely falling observer, to a mode whose frequency grows as $\omega\,e^{\kappa u}$. The frequency exceeds the Planck scale after a time

$$
u_{\mathrm{P}} \sim \frac{1}{\kappa}\ln\frac{{m_{\mathrm{P}}}}{{T_{\mathrm{H}}}} = 4M\ln(8\pi M),
\tag{6.1}
$$

where, in the last expression, $M$ is measured in Planck units. For a solar-mass black hole, $4M \approx 2\times 10^{-5}\,\mathrm{s}$ and $\ln(8\pi M/{m_{\mathrm{P}}}) \approx 90$, so that $u_{\mathrm{P}}$ is of the order of a couple of milliseconds. The radiation emitted after this time, which is to say essentially all of it, appears to originate from modes whose wavelengths near the horizon were far shorter than the Planck length. At such scales the assumption of a free field propagating on a fixed classical background is not expected to hold. The difficulty was emphasised by 't Hooft (1985), who argued that gravitational interactions between ingoing and outgoing quanta near the horizon should become strong, and it was formulated as a sharp problem by Jacobson (1991).

Does the Hawking effect then depend on unknown physics at the Planck scale? The most instructive answers have come from models in which the short-distance physics is modified explicitly.

### 6.2 Dispersive models

Unruh (1995) addressed the question in the acoustic analogue that will be described in Section 8. In a fluid flowing with velocity $v(x)$, a sound wave with laboratory frequency $\omega$ and wavenumber $k$ obeys a dispersion relation of the form

$$
(\omega - v k)^{2} = F(k)^{2}, \qquad F(k) \simeq c_{s}|k| \quad \text{for } |k| \ll k_{\mathrm{d}},
\tag{6.2}
$$

where $\omega - vk$ is the frequency measured in the frame comoving with the fluid, $\omega$ is conserved in a stationary flow, and $k_{\mathrm{d}}$ is the wavenumber at which the dispersion relation departs from linearity. In the gravitational analogy $k_{\mathrm{d}}$ plays the role of the Planck scale. For real fluids the dispersion is subluminal: $F(k)$ grows more slowly than $c_{s}|k|$ at large $|k|$. Unruh (1995) solved the resulting wave equation numerically and found that the thermal spectrum at ${T_{\mathrm{H}}} = \kappa/2\pi$ is recovered to high accuracy, even though no mode ever attains an arbitrarily short wavelength.

The mechanism is instructive. With linear dispersion, an outgoing mode traced backwards in time hugs the horizon and is blueshifted without limit. With subluminal dispersion, a short-wavelength wave travels more slowly than long-wavelength sound, and when traced backwards in time it is eventually swept away from the horizon by the flow. The ancestor of an outgoing Hawking quantum is then not a trans-Planckian mode lingering at the horizon, but an ingoing short-wavelength mode that approaches the horizon, is converted into an outgoing long-wavelength mode, and escapes. This process, known as mode conversion, replaces the infinite blueshift of the linear theory. For superluminal dispersion, such as the Bogoliubov dispersion relation of a Bose–Einstein condensate, $F(k)^{2} = c_{s}^{2}k^{2} + (k^{2}/2m)^{2}$, the ancestral modes instead come from inside the horizon, but the conclusion is the same.

These numerical results were followed by analytical treatments. Jacobson (1993) examined the consequences of imposing a short-distance cutoff on the field modes, Brout et al. (1995) analysed the problem in detail within their review, and Corley and Jacobson (1996) computed the Hawking spectrum analytically for both subluminal and superluminal dispersion, confirming that the thermal spectrum is recovered provided that the dispersion scale is large compared with the surface gravity, $k_{\mathrm{d}}c_{s} \gg \kappa$.

### 6.3 Conditions for universality

Unruh and Schützhold (2005) subsequently identified, for a broad class of dispersion relations, two conditions under which the Hawking effect is universal.

(i) The evolution of the relevant modes near the horizon must be adiabatic, which is the case when the dispersion scale greatly exceeds $\kappa$.

(ii) The ingoing short-wavelength modes, from which the outgoing quanta originate, must be in their ground state.

The first condition is kinematical and is easily satisfied. The second is an assumption about the state of the high-frequency degrees of freedom, and in the gravitational case it is effectively an assumption about the ultraviolet completion of the theory. The trans-Planckian problem is therefore not so much resolved as relocated: the prediction is insensitive to the details of short-distance physics, provided that the short-distance degrees of freedom are unexcited. This is precisely the content of the Hadamard condition in the formulation of Fredenhagen and Haag (1990) (Section 4.5).

> **Remark 6.1.**
>
> Modified dispersion also produces phenomena with no counterpart in the linear theory. If the dispersion is superluminal and the flow possesses both a black hole horizon and an inner, white hole, horizon, modes can bounce back and forth between the two horizons and be amplified at each passage. The result is an exponential instability, which Corley and Jacobson (1999) termed a black hole laser. This phenomenon was later observed in a Bose–Einstein condensate (Steinhauer, 2014), as discussed in Section 8.4.

### 6.4 What remains open

The relevance of these results to gravity itself remains a matter of discussion. The dispersive models require a preferred frame, which in the gravitational context corresponds to a violation of local Lorentz invariance at high energies. An alternative line of argument holds that the relevant modes need never be Planckian in the frame of an infalling observer at the moment when the Hawking quanta separate from the vacuum, since this separation occurs only when their wavelength has become comparable to the size of the black hole (Jacobson, 2005; Polchinski, 2017); this is consistent with the extended emission region discussed in Remark 5.1. A complete resolution presumably requires a quantum theory of gravity. It is nonetheless significant that no proposed modification of short-distance physics that preserves adiabaticity and the vacuum character of the short-wavelength modes has been found to eliminate the effect, and it is this robustness that underlies the confidence with which the prediction is generally regarded.

> **Summary of the section**
>
> - Read backwards in time, the exponential redshift implies that the Hawking quanta emitted after a few milliseconds (for a solar-mass black hole) originate from trans-Planckian modes.
>
> - In models with modified dispersion, these modes are replaced by mode conversion of ingoing short-wavelength modes, and the thermal spectrum survives.
>
> - Universality requires adiabaticity and a ground state for the short-wavelength modes; the latter is an assumption about ultraviolet physics.

## 7 Black hole entropy and the information problem

The discovery of Hawking radiation raised two deep questions. The first is what the Bekenstein–Hawking entropy counts. The second, which Hawking himself formulated a year after his original paper, is what happens to the quantum information that falls into a black hole that subsequently evaporates. In this section we take the two questions in turn, devoting most of the space to the second, which has driven a large part of the research in quantum gravity over the last five decades.

### 7.1 What does the entropy count?

In ordinary statistical mechanics the entropy is the logarithm of the number of microstates compatible with the macroscopic state. If the same holds for black holes, a black hole of mass comparable to that of the Sun must have $e^{10^{77}}$ microstates, and a complete theory of quantum gravity should account for them.

The first quantitative account was obtained in string theory by Strominger and Vafa (1996), who counted the bound states of D-branes carrying the same charges as a class of five-dimensional extremal black holes and reproduced $A/4$ exactly, including the numerical coefficient. The programme was rapidly extended to near-extremal black holes, which have a small but non-zero Hawking temperature. Callan and Maldacena (1996) showed that the emission of closed strings by excited D-brane configurations reproduces the qualitative features of Hawking radiation, Das and Mathur (1996) showed that the emission rates agree with the semiclassical Hawking rates, and Maldacena and Strominger (1997) showed that the agreement extends to the greybody factors. In these settings Hawking emission is therefore reproduced by a manifestly unitary microscopic process, although the results are restricted to black holes close to extremality and, in most cases, to supersymmetric theories.

Other approaches have also produced state counts proportional to the area. In loop quantum gravity, Rovelli (1996) and Ashtekar et al. (1998) obtained an entropy proportional to the horizon area from the counting of quantum geometry states, with a coefficient that depends on the Barbero–Immirzi parameter, whose value is then fixed by requiring agreement with $A/4$. Independently of any specific theory of quantum gravity, Bombelli et al. (1986) and Srednicki (1993) showed that the entanglement entropy of a quantum field across a surface scales with the area of the surface, with a coefficient that depends on the ultraviolet cutoff. This suggests that at least part of the black hole entropy may be understood as entanglement between the interior and the exterior, a theme to which we shall return in Section 7.7; the relation between the two, including the renormalisation of Newton's constant, has been reviewed by Solodukhin (2011). Finally, for gravitational theories with higher-curvature corrections, the appropriate generalisation of ${S_{\mathrm{BH}}}$ is given by the Noether charge formula of Wald (1993).

### 7.2 Formulating the information problem

The argument of Hawking (1976) can be stated in a few lines using the results of Section 3.5. Suppose that a black hole forms from matter in a pure quantum state. According to Eq. (3.8), each outgoing Hawking quantum is entangled with a partner inside the black hole, and the radiation, considered on its own, is in an exactly thermal mixed state. As long as the black hole exists, there is no contradiction: the joint state of the radiation and the black hole interior is pure. If, however, the black hole evaporates completely, the partners disappear with it, and the final state consists of thermal radiation alone. The evolution would then take a pure state to a mixed state, which is impossible under unitary quantum evolution. Hawking concluded that the $S$-matrix of quantum gravity must be replaced by a more general “superscattering” operator that maps density matrices to density matrices, with a fundamental loss of information.

It is useful to state the tension as an incompatibility between three principles, each of which is well supported on its own:

(i) the validity of semiclassical physics and of the equivalence principle near the horizon of a large black hole, where the curvature is small;

(ii) the unitarity of quantum evolution, as seen by observers who remain outside the black hole;

(iii) the locality of effective field theory, which forbids information from being in two places at once and from propagating outside the light cone.

Hawking's argument uses (i) and (iii) to derive the violation of (ii). The proposed resolutions of the problem can be classified according to which of the three principles they modify.

### 7.3 The Page curve

A decisive step towards a quantitative formulation was taken by Page (1993a, 1993b). Page first proved a theorem about random pure states. Consider a pure state chosen at random on a Hilbert space $\mathcal{H}_{A}\otimes\mathcal{H}_{B}$ of dimensions $m \leq n$. The average entanglement entropy of the smaller subsystem is

$$
\langle S_{A}\rangle \simeq \ln m - \frac{m}{2n},
\tag{7.1}
$$

which is within half a unit of its maximum value $\ln m$. A small subsystem of a typical pure state is therefore very nearly maximally mixed, and it carries almost no information about the state of the whole.

Now suppose that black hole evaporation is unitary, and that the joint state of the black hole and the radiation behaves like a typical pure state. Early in the evaporation the radiation is the smaller subsystem, and its entropy grows as more quanta are emitted, just as in Hawking's calculation. Once more than half of the degrees of freedom have been emitted, the black hole becomes the smaller subsystem, and the entropy of the radiation must equal that of the black hole, which decreases. The entanglement entropy of the radiation therefore rises and then falls back to zero when the evaporation is complete. This behaviour is described by the Page curve, and the time at which the entropy reaches its maximum is the Page time. In Hawking's calculation, by contrast, the entropy of the radiation grows monotonically until the end. The information problem can thus be stated sharply: a unitary theory must reproduce the Page curve, whereas the semiclassical calculation does not.

The Page curve can be estimated quantitatively. Using Eq. (5.4), the Bekenstein–Hawking entropy decreases as ${S_{\mathrm{BH}}}(t) = S_{0}(1 - t/\tau)^{2/3}$. Because the emission is irreversible, the coarse-grained entropy of the emitted radiation exceeds the decrease of ${S_{\mathrm{BH}}}$ by a factor $\beta > 1$, which Page (2013) estimated to be approximately 1.5 for a black hole emitting photons and gravitons. In Hawking's calculation the entropy of the radiation is its coarse-grained entropy, $S_{\mathrm{Hawking}}(t) = \beta[S_{0} - {S_{\mathrm{BH}}}(t)]$, whereas unitarity requires the fine-grained entropy of the radiation to be bounded by that of the black hole. The Page curve is therefore approximately

$$
S_{\mathrm{Page}}(t) \simeq \min\left\{\beta\left[S_{0} - {S_{\mathrm{BH}}}(t)\right],\; {S_{\mathrm{BH}}}(t)\right\}.
\tag{7.2}
$$

The two branches cross when ${S_{\mathrm{BH}}}/S_{0} = \beta/(1 + \beta) \approx 0.6$, that is, at $t_{\mathrm{Page}} \approx 0.54\,\tau$, a little more than half of the lifetime of the black hole, when it has lost only about a quarter of its initial mass. The three curves are shown in Fig. 2.

![Entropy of the Hawking radiation as a function of time for a black hole of lifetime τ and initial entropy S₀, following Eq. (7.2) with β = 1.48. In Hawking's calculation (dashed) the entropy of the radiation grows until the end of the evaporation. Unitarity requires the fine-grained entropy to follow the Page curve (solid), which turns over at the Page time and returns to zero.](/uploads/research/hawking-page-curve.png "Figure 2: Entropy of the Hawking radiation as a function of time for a black hole of lifetime τ and initial entropy S₀, following Eq. (7.2) with β = 1.48. In Hawking's calculation (dashed) the entropy of the radiation grows until the end of the evaporation. Unitarity requires the fine-grained entropy to follow the Page curve (solid), which turns over at the Page time and returns to zero.")

An important implication of Page's analysis is that information can be hidden very effectively. Before the Page time, the radiation is nearly maximally mixed, and essentially no information about the initial state can be extracted from it, even if evaporation is unitary. The information emerges only after the Page time, and it is encoded in subtle correlations among many quanta. Hayden and Preskill (2007) added a surprising twist. Modelling the black hole dynamics as a fast random unitary transformation, they showed that information thrown into a black hole that has already passed its Page time is returned in the radiation after a time of order $M\ln M$, the scrambling time. An old black hole thus behaves as an information mirror.

### 7.4 Why small corrections do not help

One might hope that small corrections to Hawking's calculation, arising for instance from interactions or from quantum gravitational effects, could accumulate over the long evaporation time and purify the radiation. Mathur (2009) showed that this hope is unfounded. Using the strong subadditivity of entanglement entropy, he proved that if the state of each newly created pair deviates from the Hawking state (3.8) only by a small amount $\epsilon$, the entanglement entropy of the radiation continues to increase at each step by an amount of order unity minus a correction of order $\epsilon$. Restoring unitarity therefore requires corrections of order unity to the state of the Hawking pairs, that is, a non-perturbative departure from the semiclassical description of the horizon region, or else the abandonment of one of the other principles listed in Section 7.2.

### 7.5 Complementarity and the firewall paradox

The principle of black hole complementarity (Susskind et al., 1993) attempts to reconcile the three principles by limiting the scope of (iii). From the perspective of an external observer, information that falls in is absorbed by a “stretched horizon” located roughly a Planck length outside the event horizon, thermalised, and eventually re-emitted in the radiation. From the perspective of an infalling observer, nothing unusual happens at the horizon, and the information passes into the interior. Each description is consistent on its own, and although the information appears to be duplicated, no single observer can verify both copies, so that the duplication is argued to be operationally harmless.

Almheiri et al. (2013) showed that complementarity, in this form, is inconsistent. Their argument is short enough to reproduce. Consider an old black hole, past its Page time, and denote by $R$ the early radiation, by $B$ a late outgoing Hawking mode just outside the horizon, and by $\tilde{B}$ its partner mode just inside. Three conditions follow from the principles of Section 7.2.

(a) Unitarity: since the black hole is past its Page time, emitting $B$ decreases the entropy of the radiation, so that $S(RB) < S(R)$.

(b) Smoothness of the horizon: an infalling observer sees the vacuum, which requires $B$ and $\tilde{B}$ to be in the pure entangled state (3.8), so that $S(B\tilde{B}) = 0$ and hence $S(RB\tilde{B}) = S(R)$.

(c) Thermality: the mode $B$ on its own is thermally populated, so that $S(B) > 0$.

The strong subadditivity inequality $S(RB) + S(B\tilde{B}) \geq S(B) + S(RB\tilde{B})$, combined with (b), gives $S(RB) \geq S(B) + S(R) > S(R)$ by (c), which contradicts (a). In words, the late mode $B$ cannot be maximally entangled both with its partner and with the early radiation, a property known as the monogamy of entanglement. Almheiri et al. (2013) concluded that the most conservative option is to give up (b): an infalling observer would encounter a “firewall” of high-energy quanta at the horizon of an old black hole. A closely related argument was given independently by Braunstein et al. (2013).

### 7.6 Proposed resolutions

The firewall argument stimulated a large literature, of which we can mention only the main lines. The first possibility is that information is genuinely lost, as Hawking originally proposed; this position has been defended by Unruh and Wald (2017), who argue that information loss is a natural consequence of the causal structure of an evaporating black hole spacetime rather than a paradox. The second is that the information remains inside a long-lived or stable remnant (Section 5.6). Most of the recent literature has explored the third possibility, that the information is returned in the radiation. Within it, Maldacena and Susskind (2013) proposed that entangled systems are connected by non-traversable wormholes, so that the entanglement between the late mode and the early radiation can be understood geometrically in a way that avoids the firewall. The fuzzball proposal (Mathur, 2005) holds that in string theory the black hole interior is replaced by horizon-scale structure, so that the semiclassical geometry does not describe individual microstates. Hawking et al. (2016) proposed that the soft charges associated with asymptotic symmetries endow black holes with “soft hair” that can store information; whether this mechanism can account for the full information content of a black hole remains under debate. Comprehensive reviews of this period are given by Harlow (2016), Polchinski (2017), and Marolf (2017).

### 7.7 Holography, quantum extremal surfaces, and islands

The AdS/CFT correspondence (Maldacena, 1998) provides a non-perturbative definition of quantum gravity in asymptotically AdS spacetimes in terms of a conformal field theory on the boundary, whose evolution is manifestly unitary. The formation and evaporation of a black hole in the bulk is dual to unitary evolution in the boundary theory, so the correspondence implies that information is not lost. Hawking (2005) himself later accepted that information is preserved, on the basis of a Euclidean path-integral argument in which the late-time amplitudes are dominated by topologically trivial geometries, whose contribution is unitary, while the contributions of non-trivial topologies decay. For many years, however, it remained unclear where Hawking's semiclassical calculation goes wrong. The developments that clarified this question grew out of the study of holographic entanglement entropy.

**Generalised entropy and quantum extremal surfaces.** Ryu and Takayanagi (2006) proposed that the entanglement entropy of a region of the boundary theory is given by the area, in units of $4G$, of the minimal surface in the bulk that is anchored on the boundary of the region. Hubeny et al. (2007) extended the proposal to time-dependent geometries, and Faulkner et al. (2013) computed the first quantum correction, which is the entropy of the bulk quantum fields in the region bounded by the surface. Engelhardt and Wall (2015) then proposed that the correct prescription to all orders is obtained by extremising the generalised entropy,

$$
S(R) = \min_{X}\,\operatorname*{ext}_{X}\left[\frac{A(X)}{4G} + S_{\mathrm{bulk}}(\Sigma_{X})\right],
\tag{7.3}
$$

where $X$ is a codimension-two surface homologous to the boundary region $R$ and $\Sigma_{X}$ is the bulk region between $X$ and $R$. The surface that extremises the generalised entropy is called the quantum extremal surface; if there are several, the one giving the smallest value is chosen.

**The Page curve from quantum extremal surfaces.** Penington (2020) and Almheiri et al. (2019) applied Eq. (7.3) to a black hole in AdS that is made to evaporate by coupling the boundary theory to an external, non-gravitating bath that absorbs the radiation. The mechanism by which the Page curve emerges is simple to describe. There are two candidate quantum extremal surfaces. The first is the empty surface, for which the area term vanishes and the generalised entropy is the entropy of the bulk fields, which grows as the Hawking radiation accumulates, reproducing Hawking's result. The second is a non-trivial surface located just inside the event horizon, for which the area term is approximately the Bekenstein–Hawking entropy, while the bulk term is small because the surface encloses most of the partners of the emitted quanta. The first candidate gives the smaller value at early times and the second at late times, and the minimisation in Eq. (7.3) switches from one to the other at the Page time. The result is the Page curve. A further consequence, via entanglement wedge reconstruction, is that after the Page time the black hole interior is encoded in the radiation rather than in the black hole, and the Hayden–Preskill recovery time emerges naturally.

**Islands.** Almheiri et al. (2020b) reformulated the result as a rule for the entropy of the radiation itself,

$$
S(\mathrm{Rad}) = \min_{I}\,\operatorname*{ext}_{I}\left[\frac{A(\partial I)}{4G} + S_{\mathrm{bulk}}(\mathrm{Rad}\cup I)\right],
\tag{7.4}
$$

in which the region $I$, called an island, lies in the gravitating region and, after the Page time, contains most of the black hole interior. The formula states that, when computing the entropy of the radiation, one must include the island together with the radiation: the interior partners of the Hawking quanta are, in a precise sense, part of the radiation. Almheiri et al. (2020b) computed the resulting Page curve explicitly in two-dimensional Jackiw–Teitelboim gravity coupled to conformal matter.

**Replica wormholes.** Where does Eq. (7.4) come from? The entropy of the radiation may be computed with the replica trick, $S = -\partial_{n}\,\mathrm{tr}\,\rho^{n}\big|_{n=1}$, in which $\mathrm{tr}\,\rho^{n}$ is evaluated by a gravitational path integral over $n$ copies of the geometry. Almheiri et al. (2020a) and Penington et al. (2022) showed that this path integral admits saddle points in which the different replicas are connected through the black hole interior. These “replica wormholes” are negligible before the Page time but dominate afterwards, and they produce the island contribution. Hawking's original calculation corresponds to the disconnected saddle alone. Penington et al. (2022) also showed, in a simple model, how the interior can be reconstructed from the radiation. The resulting picture, reviewed by Almheiri et al. (2021), is that the semiclassical gravitational path integral, suitably interpreted, already contains the information needed to reproduce the Page curve.

### 7.8 Assessment

These results are widely regarded as the most significant advance on the information problem since its formulation, but several limitations should be kept in mind. First, the explicit calculations have been performed largely in low-dimensional models or in AdS spacetimes coupled to a non-gravitating bath, and Geng and Karch (2020) have argued that, in higher-dimensional constructions of this type, the graviton acquires a mass, which raises questions about how far the conclusions carry over to standard gravity; the extension to asymptotically flat black holes in four dimensions is less well established. Second, the replica-wormhole calculation determines the fine-grained entropy of the radiation, but it does not by itself describe the dynamical mechanism by which information is transferred to the Hawking quanta. Third, the role of spacetime wormholes raises the question of whether the gravitational path integral computes quantities for a single quantum system or for an ensemble of systems, a question closely tied to the interpretation of Jackiw–Teitelboim gravity as dual to a random matrix ensemble (Saad et al., 2019). Raju (2022) has reviewed these issues critically and argued that, in theories of gravity, information is available at infinity at all times by virtue of the gravitational Gauss law, which offers a complementary perspective on how the Page curve arises.

> **Summary of the section**
>
> - The Bekenstein–Hawking entropy has been reproduced by microscopic state counting in string theory for near-extremal black holes, where Hawking emission is also reproduced by a unitary process.
>
> - If a black hole evaporates completely, Hawking's calculation implies that a pure state evolves into a mixed one. Unitarity instead requires the entropy of the radiation to follow the Page curve, which turns over at $t_{\mathrm{Page}} \approx 0.54\,\tau$.
>
> - Small corrections cannot restore unitarity. The firewall argument shows that unitarity, a smooth horizon, and local effective field theory cannot all hold for an old black hole.
>
> - Quantum extremal surfaces, islands, and replica wormholes reproduce the Page curve from the gravitational path integral, at least in the models studied, and identify the contribution missing from Hawking's calculation.

## 8 Analogue gravity and laboratory experiments

We saw in Section 4.5 that the Hawking effect is kinematical: it requires a quantum field propagating on an effective Lorentzian geometry with a horizon, but not the Einstein equations. This observation opens the possibility of reproducing the effect in the laboratory, using systems in which the propagation of small perturbations is governed by an effective metric. In this section we explain how such effective metrics arise, what they can and cannot teach us, and what has been observed.

### 8.1 Acoustic spacetimes

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

### 8.2 What analogues can and cannot test

Analogue systems naturally realise the modified dispersion relations of Section 6. Surface waves in water have subluminal dispersion, whereas the Bogoliubov dispersion relation of a BEC is superluminal. Garay et al. (2000) proposed that sonic black holes could be realised in BECs, and, since a direct measurement of the thermal spectrum is hampered by the finite temperature of the condensate, Balbinot et al. (2008) and Carusotto et al. (2008) proposed that the effect be detected instead through the correlations between density fluctuations on either side of the horizon. These correlations arise from the pairwise creation of Hawking phonons and their partners, in accordance with Eq. (3.8), and they provide a signature that is distinct from thermal noise.

It is important to be clear about the scope of these experiments. Analogue systems reproduce the kinematics of quantum fields on a curved background, but not the dynamics of gravity: the effective metric (8.2) is not governed by the Einstein equations, and the backreaction of the emitted radiation on the flow differs from its gravitational counterpart. Analogue experiments can therefore test the robustness of the Hawking mechanism against modifications of short-distance physics, the role of the quantum state, and the entanglement structure of the emitted pairs. They cannot test the thermodynamic interpretation of black hole entropy, nor can they address the information problem as it arises in gravity.

### 8.3 Classical and stimulated emission

The first experiments studied the classical, stimulated counterpart of the effect. An incident wave scattered at an analogue horizon is converted into modes of positive and negative norm, with relative amplitudes governed by the same Bogoliubov coefficients that determine the spontaneous emission; measuring these amplitudes therefore tests Eq. (3.4) directly. In water channels, Rousseaux et al. (2008) observed the generation of negative-frequency waves at an obstacle acting as an analogue white hole horizon, and Weinfurtner et al. (2011) measured the ratio of the amplitudes of the converted waves, finding a Boltzmann-like dependence on frequency consistent with the Hawking prediction for the corresponding effective temperature. Euvé et al. (2016) subsequently observed correlations between the converted modes in the noise of a water-tank experiment. In optics, Philbin et al. (2008) demonstrated that an intense light pulse propagating in an optical fibre creates, through the Kerr nonlinearity, a moving refractive-index front that acts as a horizon for probe light, and Drori et al. (2019) observed stimulated Hawking emission, including the conversion to negative-frequency light, in an optical analogue of this type. Belgiorno et al. (2010) reported the observation of radiation from ultrashort laser pulse filaments, which they interpreted as spontaneous Hawking emission; the interpretation of this experiment has been debated. Torres et al. (2017) observed rotational superradiance in a vortex flow of water, an analogue of the Zel'dovich–Starobinsky effect of Section 2.5, and acoustic horizons have also been realised in fluids of microcavity polaritons (Nguyen et al., 2015), which offer optical access to the correlations of the emitted excitations.

### 8.4 Spontaneous emission in Bose–Einstein condensates

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

## 9 Observational searches

Table 2 makes clear that Hawking radiation from black holes formed by stellar collapse is unobservable. Any hope of detecting the effect in a gravitational system therefore rests on black holes of much smaller mass, which could have formed only in the early universe or, in speculative scenarios, in high-energy collisions. In this section we review the corresponding searches.

### 9.1 Primordial black holes

Zel'dovich and Novikov (1967) and Hawking (1971b) proposed that sufficiently large density fluctuations in the early universe could collapse to form black holes of very low mass, and Carr and Hawking (1974) and Carr (1975) developed the theory of their formation and mass spectrum. A simple estimate fixes the typical mass. A region can collapse only if it is causally connected, so a primordial black hole (PBH) formed at cosmic time $t$ has a mass comparable to the mass within the cosmological horizon at that time,

$$
M \sim \frac{c^{3}t}{G} \sim 10^{15}\,\mathrm{g}\left(\frac{t}{10^{-23}\,\mathrm{s}}\right).
\tag{9.1}
$$

PBHs could therefore span an enormous range of masses, from the Planck mass for formation at the Planck time to about a solar mass for formation at the time of the QCD transition, and beyond for later formation. Shortly after the discovery of Hawking radiation, Page and Hawking (1976) showed that the diffuse gamma-ray background places a stringent upper limit on the present density of PBHs with masses near $10^{15}\,\mathrm{g}$, of the order of $10^{-8}$ of the critical density. Evaporating PBHs thus became, and remain, the only known astrophysical setting in which Hawking radiation could be directly observable.

### 9.2 Constraints from evaporation

The effect of evaporating PBHs on cosmological and astrophysical observables depends strongly on their initial mass, since the mass determines both the lifetime and the energy of the emitted particles. It is helpful to organise the constraints by mass, as in Table 6; comprehensive reviews are given by Carr et al. (2010), Carr et al. (2021), and Auffinger (2023).

| Initial mass | Status today | Principal probes | References |
| --- | --- | --- | --- |
| $\lesssim 10^{9}\,\mathrm{g}$ | Evaporated before nucleosynthesis | Relics: dark matter, dark radiation | Lennon et al. (2018); Hooper et al. (2019) |
| $10^{9}$–$10^{13}\,\mathrm{g}$ | Evaporated during or after nucleosynthesis | Light-element abundances | Carr et al. (2010, 2021) |
| $10^{13}$–$5\times 10^{14}\,\mathrm{g}$ | Evaporated before the present | Spectral distortions and anisotropies of the cosmic microwave background; gamma-ray background | Carr et al. (2010, 2021) |
| $\approx 5\times 10^{14}\,\mathrm{g}$ | Completing evaporation today | Final bursts; gamma-ray background | Page and Hawking (1976); Ackermann et al. (2018); Albert et al. (2020); Aharonian et al. (2023) |
| $10^{15}$–$10^{17}\,\mathrm{g}$ | Radiating at ${T_{\mathrm{H}}} \approx 0.1$–$10\,\mathrm{MeV}$ | Galactic and extragalactic gamma rays; 511 keV line; $e^{\pm}$ measured by Voyager 1; neutrinos | Boudaud and Cirelli (2019); Laha (2019); DeRocco and Graham (2019); Dasgupta et al. (2020) |
| $10^{17}$–$10^{22}\,\mathrm{g}$ | Radiating too weakly to be constrained so far | Future MeV telescopes | Montero-Camacho et al. (2019); Coogan et al. (2021) |

_Table 6: Evaporation-based probes of primordial black holes, organised by initial mass. The boundaries between the ranges are approximate._

Let us comment briefly on the different ranges. PBHs lighter than approximately $10^{9}\,\mathrm{g}$ have lifetimes shorter than about a second and evaporated before big bang nucleosynthesis, so that they are only weakly constrained. Their evaporation may nevertheless have produced dark matter (Lennon et al., 2018) or dark radiation (Hooper et al., 2019), because Hawking emission populates every particle species lighter than the Hawking temperature, irrespective of its non-gravitational couplings; this makes evaporating black holes a universal, if speculative, production mechanism for hidden-sector particles. PBHs with masses between approximately $10^{9}$ and $10^{13}\,\mathrm{g}$ evaporated during or after nucleosynthesis, and the hadrons and photons they emitted would have altered the abundances of the light elements. Heavier PBHs that evaporated after recombination would have injected energy into the intergalactic medium and distorted the spectrum and anisotropies of the cosmic microwave background.

PBHs with initial masses close to $5\times 10^{14}\,\mathrm{g}$ are completing their evaporation at the present epoch (Section 5.4), and slightly heavier ones are still radiating. For masses between approximately $10^{15}$ and $10^{17}\,\mathrm{g}$, the extragalactic and Galactic gamma-ray backgrounds (Carr et al., 2010, 2021), the cosmic-ray electrons and positrons measured by Voyager 1 outside the heliosphere (Boudaud and Cirelli, 2019), the Galactic 511 keV line produced by the annihilation of emitted positrons (Laha, 2019; DeRocco and Graham, 2019), and neutrino and positron fluxes (Dasgupta et al., 2020) constrain the fraction of dark matter in PBHs to be well below unity. These constraints depend on the spin of the black holes and on their assumed mass distribution, and the computation of the relevant spectra has been standardised to a considerable extent by tools such as \textsc{BlackHawk} (Arbey and Auffinger, 2019, 2021).

For masses above approximately $10^{17}\,\mathrm{g}$ the Hawking flux becomes too weak to be constraining, and the resulting “asteroid-mass window”, which extends to approximately $10^{22}\,\mathrm{g}$, is one of the few ranges in which PBHs could still constitute all of the dark matter (Montero-Camacho et al., 2019; Carr et al., 2021). Its lower boundary is set by Hawking radiation, and Coogan et al. (2021) have shown that proposed MeV gamma-ray telescopes could detect the Hawking emission of PBHs in this window if they make up a substantial fraction of the dark matter. Finally, if the memory-burden suppression of evaporation discussed in Section 5.6 were realised, PBHs lighter than $5\times 10^{14}\,\mathrm{g}$ could have survived to the present, opening a new mass window for PBH dark matter (Alexandre et al., 2024; Thoss et al., 2024).

### 9.3 Searches for final bursts

According to Eq. (5.4), the temperature of an evaporating black hole diverges at the end of its life, and in its final seconds it emits a burst of particles with energies extending to the TeV scale and beyond. The detection of such a burst would constitute direct evidence of Hawking radiation. Searches for the gamma-ray signal of the final stages of PBH evaporation have been carried out with the Fermi Large Area Telescope (Ackermann et al., 2018), the HAWC water-Cherenkov observatory (Albert et al., 2020), and the H.E.S.S. imaging atmospheric Cherenkov telescopes (Aharonian et al., 2023). No bursts have been detected, and these searches have placed upper limits on the local rate density of PBH bursts of the order of $10^{3}$–$10^{4}\,\mathrm{pc}^{-3}\,\mathrm{yr}^{-1}$. The limits depend on the particle-physics model adopted for the last stages of evaporation, and in particular on the treatment of the emission of quarks and gluons at very high temperatures (Section 5.4).

### 9.4 Microscopic black holes at colliders

In models with large extra dimensions (Arkani-Hamed et al., 1998), the fundamental scale of gravity could be as low as a few TeV. Black holes could then be produced in particle collisions at centre-of-mass energies above this scale (Dimopoulos and Landsberg, 2001; Giddings and Thomas, 2002), and they would decay rapidly through Hawking emission into a high-multiplicity final state of Standard Model particles. Emparan et al. (2000) showed that such black holes radiate predominantly into the fields confined to the brane rather than into the bulk, so that most of the emitted energy would be visible to detectors, and the greybody factors and emission rates in higher dimensions have been reviewed by Kanti (2004). Searches at the Large Hadron Collider (e.g. Sirunyan et al., 2018) have found no evidence of black hole production, and exclude semiclassical black holes with masses below approximately $10\,\mathrm{TeV}$ in the models considered. It should be noted that black holes produced near the fundamental scale of gravity would lie far from the semiclassical regime, so that these searches test models of TeV-scale gravity rather than the Hawking effect as such.

### 9.5 Astrophysical black holes

For black holes of stellar or larger mass, the Hawking temperature is far below that of the cosmic microwave background (Table 2); these black holes currently absorb more radiation than they emit, and no realistic prospect exists for detecting their Hawking emission. Gravitational-wave observations of binary black hole mergers have been used to test the classical area theorem (Isi et al., 2021), which is the classical limit of the generalised second law, but such tests are insensitive to the quantum emission itself.

> **Summary of the section**
>
> - Only primordial black holes, with masses set roughly by the horizon mass at formation, could be light enough to exhibit observable Hawking emission.
>
> - Evaporation constrains PBHs over a wide mass range, from nucleosynthesis ($10^{9}$–$10^{13}\,\mathrm{g}$) to gamma rays, positrons, and neutrinos ($10^{15}$–$10^{17}\,\mathrm{g}$); the asteroid-mass window above $10^{17}\,\mathrm{g}$ remains open.
>
> - Searches for final bursts have found none and bound the local burst rate; collider searches bound TeV-scale gravity rather than the Hawking effect itself.

## 10 Open problems and outlook

We have seen that the Hawking effect is at once one of the best-understood and one of the least tested predictions of theoretical physics. We conclude by gathering the questions that, in our reading of the literature, remain open, and by offering some suggestions for further reading.

### 10.1 Theoretical questions

The first set of questions concerns the semiclassical derivation itself. The derivations of Sections 3 and 4 agree on the temperature and on the late-time spectrum, and the universality results of Sections 4.5 and 6 show that the prediction is insensitive to short-distance physics provided that the evolution near the horizon is adiabatic and the short-wavelength modes are in their ground state. Whether a quantum theory of gravity satisfies the second condition has not been established, so the trans-Planckian problem is best described as reduced to a well-defined assumption rather than resolved. The related question of where the Hawking quanta originate, at the horizon or in an extended quantum atmosphere (Remark 5.1), bears on every proposal that modifies the near-horizon region.

The second set concerns backreaction and the end point of evaporation. The semiclassical treatment is well controlled for black holes much heavier than the Planck mass, but the final stages require quantum gravity, and the alternatives of complete evaporation, remnants, and non-standard late-time behaviour have not been decisively discriminated. The memory-burden proposal (Dvali et al., 2020) illustrates that departures from the semiclassical picture could in principle occur long before the Planck scale is reached, with direct observational consequences for primordial black holes. It will be important to determine whether such an effect can be derived within a controlled framework.

The third set concerns the information problem. The quantum extremal surface and replica wormhole calculations of Section 7.7 have shown that the gravitational path integral can reproduce the Page curve, thereby identifying, at least in the models studied, the contribution missing from Hawking's calculation. Several questions nevertheless remain: how these results extend to asymptotically flat black holes in four dimensions, by what physical mechanism the information is carried by the radiation, what an infalling observer experiences at the horizon of an old black hole, and how wormhole contributions should be interpreted in theories that are not ensemble averages (Almheiri et al., 2021; Raju, 2022). The relation between these developments and the earlier proposals of complementarity, fuzzballs, and soft hair is also incompletely understood.

### 10.2 Experimental and observational questions

Analogue experiments have progressed, in little more than a decade, from classical demonstrations of mode conversion to the reported observation of spontaneous, correlated emission with a thermal spectrum in Bose–Einstein condensates (Steinhauer, 2016; Mu\ noz de Nova et al., 2019; Kolobov et al., 2021). The priorities in this area are independent replication on other platforms, a model-independent demonstration of entanglement between the Hawking and partner excitations, and the study of phenomena beyond the fixed-background approximation, such as the backreaction of the emitted radiation on the flow. Such experiments cannot address the gravitational aspects of the problem, but they provide the only currently available empirical test of the underlying quantum-field-theoretic mechanism.

In the gravitational setting, the prospects for detection rest on the existence of primordial black holes light enough to be evaporating today or, in the asteroid-mass window, radiating at observable levels. Future MeV gamma-ray observatories could detect the emission of asteroid-mass PBHs if these make up a substantial fraction of the dark matter (Coogan et al., 2021), and continued searches for TeV bursts will further constrain the local burst rate (Albert et al., 2020; Aharonian et al., 2023). A detection in either channel would provide the first direct evidence of Hawking radiation from a gravitational black hole; a non-detection constrains the abundance of PBHs rather than the Hawking effect itself.

### 10.3 Concluding remarks

Since its discovery, Hawking radiation has served as a meeting point for general relativity, quantum field theory, and statistical mechanics. It completed the thermodynamic description of black holes; through the requirement that any theory of quantum gravity reproduce the Bekenstein–Hawking entropy, it has provided the principal quantitative test of such theories; and it gave rise to the information problem, which has driven much of the development of holography and of the application of quantum information theory to gravitation. The derivation of the effect is robust, and its kinematical content has been reproduced in the laboratory. Its direct observation in a gravitational system, the end point of evaporation, and a complete account of how information escapes from a black hole remain, however, among the central open problems of fundamental physics.

### 10.4 Guide to further reading

For readers who wish to pursue the subject further, we suggest the following starting points, in roughly increasing order of specialisation. The foundations of quantum field theory in curved spacetime and of the Hawking effect are covered in the monographs of Birrell and Davies (1982) and Wald (1994) and, more concisely, in the lecture notes of Jacobson (2005); black hole thermodynamics is reviewed by Wald (2001), Page (2005), and Carlip (2014), and the Unruh effect by Crispino et al. (2008). The trans-Planckian problem and the role of dispersion are discussed in detail by Brout et al. (1995). The information problem is reviewed from complementary perspectives by Harlow (2016), Polchinski (2017), Marolf (2017), Unruh and Wald (2017), and Raju (2022), and the recent developments based on islands and replica wormholes by Almheiri et al. (2021). Analogue gravity is reviewed by Barceló et al. (2011b), superradiance by Brito et al. (2020), and the observational constraints on primordial black holes by Carr et al. (2021) and Auffinger (2023).

## References

- M. Ackermann et al. Search for gamma-ray emission from local primordial black holes with the Fermi Large Area Telescope. _Astrophys. J._, 857:49, 2018. [doi:10.3847/1538-4357/aaac7b](https://doi.org/10.3847/1538-4357/aaac7b).
- F. Aharonian et al. Search for the evaporation of primordial black holes with H.E.S.S. _J. Cosmol. Astropart. Phys._, 2023(04):040, 2023. [doi:10.1088/1475-7516/2023/04/040](https://doi.org/10.1088/1475-7516/2023/04/040).
- Y. Aharonov, A. Casher, and S. Nussinov. The unitarity puzzle and Planck mass stable particles. _Phys. Lett. B_, 191:51–55, 1987. [doi:10.1016/0370-2693(87)91320-7](https://doi.org/10.1016/0370-2693(87)91320-7).
- A. Albert et al. Constraining the local burst rate density of primordial black holes with HAWC. _J. Cosmol. Astropart. Phys._, 2020(04):026, 2020. [doi:10.1088/1475-7516/2020/04/026](https://doi.org/10.1088/1475-7516/2020/04/026).
- A. Alexandre, G. Dvali, and E. Koutsangelas. New mass window for primordial black holes as dark matter from the memory burden effect. _Phys. Rev. D_, 110:036004, 2024. [doi:10.1103/physrevd.110.036004](https://doi.org/10.1103/physrevd.110.036004).
- A. Almheiri, D. Marolf, J. Polchinski, and J. Sully. Black holes: complementarity or firewalls? _J. High Energy Phys._, 2013(02):062, 2013. [doi:10.1007/jhep02(2013)062](https://doi.org/10.1007/jhep02(2013)062).
- A. Almheiri, N. Engelhardt, D. Marolf, and H. Maxfield. The entropy of bulk quantum fields and the entanglement wedge of an evaporating black hole. _J. High Energy Phys._, 2019(12):063, 2019. [doi:10.1007/jhep12(2019)063](https://doi.org/10.1007/jhep12(2019)063).
- A. Almheiri, T. Hartman, J. Maldacena, E. Shaghoulian, and A. Tajdini. Replica wormholes and the entropy of Hawking radiation. _J. High Energy Phys._, 2020(05):013, 2020a. [doi:10.1007/jhep05(2020)013](https://doi.org/10.1007/jhep05(2020)013).
- A. Almheiri, R. Mahajan, J. Maldacena, and Y. Zhao. The Page curve of Hawking radiation from semiclassical geometry. _J. High Energy Phys._, 2020(03):149, 2020b. [doi:10.1007/jhep03(2020)149](https://doi.org/10.1007/jhep03(2020)149).
- A. Almheiri, T. Hartman, J. Maldacena, E. Shaghoulian, and A. Tajdini. The entropy of Hawking radiation. _Rev. Mod. Phys._, 93:035002, 2021. [doi:10.1103/revmodphys.93.035002](https://doi.org/10.1103/revmodphys.93.035002).
- A. Arbey and J. Auffinger. BlackHawk: a public code for calculating the Hawking evaporation spectra of any black hole distribution. _Eur. Phys. J. C_, 79:693, 2019. [doi:10.1140/epjc/s10052-019-7161-1](https://doi.org/10.1140/epjc/s10052-019-7161-1).
- A. Arbey and J. Auffinger. Physics beyond the standard model with BlackHawk v2.0. _Eur. Phys. J. C_, 81:910, 2021. [doi:10.1140/epjc/s10052-021-09702-8](https://doi.org/10.1140/epjc/s10052-021-09702-8).
- N. Arkani-Hamed, S. Dimopoulos, and G. Dvali. The hierarchy problem and new dimensions at a millimeter. _Phys. Lett. B_, 429:263–272, 1998. [doi:10.1016/s0370-2693(98)00466-3](https://doi.org/10.1016/s0370-2693(98)00466-3).
- A. Ashtekar, J. Baez, A. Corichi, and K. Krasnov. Quantum geometry and black hole entropy. _Phys. Rev. Lett._, 80:904–907, 1998. [doi:10.1103/physrevlett.80.904](https://doi.org/10.1103/physrevlett.80.904).
- J. Auffinger. Primordial black hole constraints with Hawking radiation—A review. _Prog. Part. Nucl. Phys._, 131:104040, 2023. [doi:10.1016/j.ppnp.2023.104040](https://doi.org/10.1016/j.ppnp.2023.104040).
- R. Balbinot, A. Fabbri, S. Fagnocchi, A. Recati, and I. Carusotto. Nonlocal density correlations as a signature of Hawking radiation from acoustic black holes. _Phys. Rev. A_, 78:021603, 2008. [doi:10.1103/physreva.78.021603](https://doi.org/10.1103/physreva.78.021603).
- C. Barceló, S. Liberati, S. Sonego, and M. Visser. Hawking-like radiation from evolving black holes and compact horizonless objects. _J. High Energy Phys._, 2011(02):003, 2011a. [doi:10.1007/jhep02(2011)003](https://doi.org/10.1007/jhep02(2011)003).
- C. Barceló, S. Liberati, and M. Visser. Analogue gravity. _Living Rev. Relativ._, 14:3, 2011b. [doi:10.12942/lrr-2011-3](https://doi.org/10.12942/lrr-2011-3).
- J. M. Bardeen. Black holes do evaporate thermally. _Phys. Rev. Lett._, 46:382–385, 1981. [doi:10.1103/physrevlett.46.382](https://doi.org/10.1103/physrevlett.46.382).
- J. M. Bardeen, B. Carter, and S. W. Hawking. The four laws of black hole mechanics. _Commun. Math. Phys._, 31:161–170, 1973. [doi:10.1007/BF01645742](https://doi.org/10.1007/BF01645742).
- J. D. Bekenstein. Black holes and the second law. _Lett. Nuovo Cimento_, 4:737–740, 1972. [doi:10.1007/BF02757029](https://doi.org/10.1007/BF02757029).
- J. D. Bekenstein. Black holes and entropy. _Phys. Rev. D_, 7:2333–2346, 1973. [doi:10.1103/PhysRevD.7.2333](https://doi.org/10.1103/PhysRevD.7.2333).
- J. D. Bekenstein. Generalized second law of thermodynamics in black-hole physics. _Phys. Rev. D_, 9:3292–3300, 1974. [doi:10.1103/PhysRevD.9.3292](https://doi.org/10.1103/PhysRevD.9.3292).
- F. Belgiorno, S. L. Cacciatori, M. Clerici, V. Gorini, G. Ortenzi, L. Rizzi, E. Rubino, V. G. Sala, and D. Faccio. Hawking radiation from ultrashort laser pulse filaments. _Phys. Rev. Lett._, 105:203901, 2010. [doi:10.1103/physrevlett.105.203901](https://doi.org/10.1103/physrevlett.105.203901).
- N. D. Birrell and P. C. W. Davies. _Quantum Fields in Curved Space_. Cambridge University Press, Cambridge, 1982. [doi:10.1017/cbo9780511622632](https://doi.org/10.1017/cbo9780511622632).
- L. Bombelli, R. K. Koul, J. Lee, and R. D. Sorkin. Quantum source of entropy for black holes. _Phys. Rev. D_, 34:373–383, 1986. [doi:10.1103/physrevd.34.373](https://doi.org/10.1103/physrevd.34.373).
- M. Boudaud and M. Cirelli. Voyager 1 $e^{\pm}$ further constrain primordial black holes as dark matter. _Phys. Rev. Lett._, 122:041104, 2019. [doi:10.1103/PhysRevLett.122.041104](https://doi.org/10.1103/PhysRevLett.122.041104).
- D. G. Boulware. Quantum field theory in Schwarzschild and Rindler spaces. _Phys. Rev. D_, 11:1404–1423, 1975. [doi:10.1103/physrevd.11.1404](https://doi.org/10.1103/physrevd.11.1404).
- S. L. Braunstein, S. Pirandola, and K. \.Zyczkowski. Better late than never: information retrieval from black holes. _Phys. Rev. Lett._, 110:101301, 2013. [doi:10.1103/physrevlett.110.101301](https://doi.org/10.1103/physrevlett.110.101301).
- R. Brito, V. Cardoso, and P. Pani. _Superradiance: New Frontiers in Black Hole Physics_, volume 971 of _Lecture Notes in Physics_. Springer, Cham, 2nd edition, 2020. [doi:10.1007/978-3-030-46622-0](https://doi.org/10.1007/978-3-030-46622-0).
- R. Brout, S. Massar, R. Parentani, and Ph. Spindel. A primer for black hole quantum physics. _Phys. Rep._, 260:329–446, 1995. [doi:10.1016/0370-1573(95)00008-5](https://doi.org/10.1016/0370-1573(95)00008-5).
- C. G. Callan and J. M. Maldacena. D-brane approach to black hole quantum mechanics. _Nucl. Phys. B_, 472:591–608, 1996. [doi:10.1016/0550-3213(96)00225-8](https://doi.org/10.1016/0550-3213(96)00225-8).
- C. G. Callan, S. B. Giddings, J. A. Harvey, and A. Strominger. Evanescent black holes. _Phys. Rev. D_, 45:R1005–R1009, 1992. [doi:10.1103/physrevd.45.r1005](https://doi.org/10.1103/physrevd.45.r1005).
- P. Candelas. Vacuum polarization in Schwarzschild spacetime. _Phys. Rev. D_, 21:2185–2202, 1980. [doi:10.1103/physrevd.21.2185](https://doi.org/10.1103/physrevd.21.2185).
- S. Carlip. Black hole thermodynamics. _Int. J. Mod. Phys. D_, 23:1430023, 2014. [doi:10.1142/s0218271814300237](https://doi.org/10.1142/s0218271814300237).
- R. D. Carlitz and R. S. Willey. Reflections on moving mirrors. _Phys. Rev. D_, 36:2327–2335, 1987. [doi:10.1103/physrevd.36.2327](https://doi.org/10.1103/physrevd.36.2327).
- B. Carr, K. Kohri, Y. Sendouda, and J. Yokoyama. Constraints on primordial black holes. _Rep. Prog. Phys._, 84:116902, 2021. [doi:10.1088/1361-6633/ac1e31](https://doi.org/10.1088/1361-6633/ac1e31).
- B. J. Carr. The primordial black hole mass spectrum. _Astrophys. J._, 201:1–19, 1975. [doi:10.1086/153853](https://doi.org/10.1086/153853).
- B. J. Carr and S. W. Hawking. Black holes in the early Universe. _Mon. Not. R. Astron. Soc._, 168:399–415, 1974. [doi:10.1093/mnras/168.2.399](https://doi.org/10.1093/mnras/168.2.399).
- B. J. Carr, K. Kohri, Y. Sendouda, and J. Yokoyama. New cosmological constraints on primordial black holes. _Phys. Rev. D_, 81:104019, 2010. [doi:10.1103/physrevd.81.104019](https://doi.org/10.1103/physrevd.81.104019).
- I. Carusotto, S. Fagnocchi, A. Recati, R. Balbinot, and A. Fabbri. Numerical observation of Hawking radiation from acoustic black holes in atomic Bose-Einstein condensates. _New J. Phys._, 10:103001, 2008. [doi:10.1088/1367-2630/10/10/103001](https://doi.org/10.1088/1367-2630/10/10/103001).
- C. M. Chambers, W. A. Hiscock, and B. E. Taylor. Spinning down a black hole with scalar fields. _Phys. Rev. Lett._, 78:3249–3251, 1997. [doi:10.1103/physrevlett.78.3249](https://doi.org/10.1103/physrevlett.78.3249).
- P. Chen, Y. C. Ong, and D.-h. Yeom. Black hole remnants and the information loss paradox. _Phys. Rep._, 603:1–45, 2015. [doi:10.1016/j.physrep.2015.10.007](https://doi.org/10.1016/j.physrep.2015.10.007).
- S. M. Christensen and S. A. Fulling. Trace anomalies and the Hawking effect. _Phys. Rev. D_, 15:2088–2104, 1977. [doi:10.1103/physrevd.15.2088](https://doi.org/10.1103/physrevd.15.2088).
- D. Christodoulou. Reversible and irreversible transformations in black-hole physics. _Phys. Rev. Lett._, 25:1596–1597, 1970. [doi:10.1103/physrevlett.25.1596](https://doi.org/10.1103/physrevlett.25.1596).
- A. Coogan, L. Morrison, and S. Profumo. Direct detection of Hawking radiation from asteroid-mass primordial black holes. _Phys. Rev. Lett._, 126:171101, 2021. [doi:10.1103/physrevlett.126.171101](https://doi.org/10.1103/physrevlett.126.171101).
- S. Corley and T. Jacobson. Hawking spectrum and high frequency dispersion. _Phys. Rev. D_, 54:1568–1586, 1996. [doi:10.1103/physrevd.54.1568](https://doi.org/10.1103/physrevd.54.1568).
- S. Corley and T. Jacobson. Black hole lasers. _Phys. Rev. D_, 59:124011, 1999. [doi:10.1103/physrevd.59.124011](https://doi.org/10.1103/physrevd.59.124011).
- L. C. B. Crispino, A. Higuchi, and G. E. A. Matsas. The Unruh effect and its applications. _Rev. Mod. Phys._, 80:787–838, 2008. [doi:10.1103/revmodphys.80.787](https://doi.org/10.1103/revmodphys.80.787).
- T. Damour and R. Ruffini. Black-hole evaporation in the Klein-Sauter-Heisenberg-Euler formalism. _Phys. Rev. D_, 14:332–334, 1976. [doi:10.1103/physrevd.14.332](https://doi.org/10.1103/physrevd.14.332).
- S. R. Das and S. D. Mathur. Comparing decay rates for black holes and D-branes. _Nucl. Phys. B_, 478:561–576, 1996. [doi:10.1016/0550-3213(96)00453-1](https://doi.org/10.1016/0550-3213(96)00453-1).
- S. R. Das, G. Gibbons, and S. D. Mathur. Universality of low energy absorption cross sections for black holes. _Phys. Rev. Lett._, 78:417–419, 1997. [doi:10.1103/PhysRevLett.78.417](https://doi.org/10.1103/PhysRevLett.78.417).
- B. Dasgupta, R. Laha, and A. Ray. Neutrino and positron constraints on spinning primordial black hole dark matter. _Phys. Rev. Lett._, 125:101101, 2020. [doi:10.1103/physrevlett.125.101101](https://doi.org/10.1103/physrevlett.125.101101).
- P. C. W. Davies. Scalar production in Schwarzschild and Rindler metrics. _J. Phys. A_, 8:609–616, 1975. [doi:10.1088/0305-4470/8/4/022](https://doi.org/10.1088/0305-4470/8/4/022).
- P. C. W. Davies, S. A. Fulling, and W. G. Unruh. Energy-momentum tensor near an evaporating black hole. _Phys. Rev. D_, 13:2720–2723, 1976. [doi:10.1103/physrevd.13.2720](https://doi.org/10.1103/physrevd.13.2720).
- W. DeRocco and P. W. Graham. Constraining primordial black hole abundance with the Galactic 511 keV line. _Phys. Rev. Lett._, 123:251102, 2019. [doi:10.1103/physrevlett.123.251102](https://doi.org/10.1103/physrevlett.123.251102).
- R. Dey, S. Liberati, and D. Pranzetti. The black hole quantum atmosphere. _Phys. Lett. B_, 774:308–316, 2017. [doi:10.1016/j.physletb.2017.09.076](https://doi.org/10.1016/j.physletb.2017.09.076).
- S. Dimopoulos and G. Landsberg. Black holes at the Large Hadron Collider. _Phys. Rev. Lett._, 87:161602, 2001. [doi:10.1103/physrevlett.87.161602](https://doi.org/10.1103/physrevlett.87.161602).
- J. Drori, Y. Rosenberg, D. Bermudez, Y. Silberberg, and U. Leonhardt. Observation of stimulated Hawking radiation in an optical analogue. _Phys. Rev. Lett._, 122:010404, 2019. [doi:10.1103/physrevlett.122.010404](https://doi.org/10.1103/physrevlett.122.010404).
- G. Dvali, L. Eisemann, M. Michel, and S. Zell. Black hole metamorphosis and stabilization by memory burden. _Phys. Rev. D_, 102:103523, 2020. [doi:10.1103/physrevd.102.103523](https://doi.org/10.1103/physrevd.102.103523).
- R. Emparan, G. T. Horowitz, and R. C. Myers. Black holes radiate mainly on the brane. _Phys. Rev. Lett._, 85:499–502, 2000. [doi:10.1103/PhysRevLett.85.499](https://doi.org/10.1103/PhysRevLett.85.499).
- N. Engelhardt and A. C. Wall. Quantum extremal surfaces: holographic entanglement entropy beyond the classical regime. _J. High Energy Phys._, 2015(01):073, 2015. [doi:10.1007/jhep01(2015)073](https://doi.org/10.1007/jhep01(2015)073).
- L.-P. Euvé, F. Michel, R. Parentani, T. G. Philbin, and G. Rousseaux. Observation of noise correlated by the Hawking effect in a water tank. _Phys. Rev. Lett._, 117:121301, 2016. [doi:10.1103/physrevlett.117.121301](https://doi.org/10.1103/physrevlett.117.121301).
- T. Faulkner, A. Lewkowycz, and J. Maldacena. Quantum corrections to holographic entanglement entropy. _J. High Energy Phys._, 2013(11):074, 2013. [doi:10.1007/jhep11(2013)074](https://doi.org/10.1007/jhep11(2013)074).
- K. Fredenhagen and R. Haag. On the derivation of Hawking radiation associated with the formation of a black hole. _Commun. Math. Phys._, 127:273–284, 1990. [doi:10.1007/bf02096757](https://doi.org/10.1007/bf02096757).
- S. A. Fulling. Nonuniqueness of canonical field quantization in Riemannian space-time. _Phys. Rev. D_, 7:2850–2862, 1973. [doi:10.1103/physrevd.7.2850](https://doi.org/10.1103/physrevd.7.2850).
- S. A. Fulling and P. C. W. Davies. Radiation from a moving mirror in two dimensional space-time: conformal anomaly. _Proc. R. Soc. Lond. A_, 348:393–414, 1976. [doi:10.1098/rspa.1976.0045](https://doi.org/10.1098/rspa.1976.0045).
- L. J. Garay, J. R. Anglin, J. I. Cirac, and P. Zoller. Sonic analog of gravitational black holes in Bose-Einstein condensates. _Phys. Rev. Lett._, 85:4643–4647, 2000. [doi:10.1103/physrevlett.85.4643](https://doi.org/10.1103/physrevlett.85.4643).
- H. Geng and A. Karch. Massive islands. _J. High Energy Phys._, 2020(09):121, 2020. [doi:10.1007/jhep09(2020)121](https://doi.org/10.1007/jhep09(2020)121).
- G. W. Gibbons. Vacuum polarization and the spontaneous loss of charge by black holes. _Commun. Math. Phys._, 44:245–264, 1975. [doi:10.1007/bf01609829](https://doi.org/10.1007/bf01609829).
- G. W. Gibbons and S. W. Hawking. Action integrals and partition functions in quantum gravity. _Phys. Rev. D_, 15:2752–2756, 1977a. [doi:10.1103/PhysRevD.15.2752](https://doi.org/10.1103/PhysRevD.15.2752).
- G. W. Gibbons and S. W. Hawking. Cosmological event horizons, thermodynamics, and particle creation. _Phys. Rev. D_, 15:2738–2751, 1977b. [doi:10.1103/PhysRevD.15.2738](https://doi.org/10.1103/PhysRevD.15.2738).
- S. B. Giddings. Hawking radiation, the Stefan–Boltzmann law, and unitarization. _Phys. Lett. B_, 754:39–42, 2016. [doi:10.1016/j.physletb.2015.12.076](https://doi.org/10.1016/j.physletb.2015.12.076).
- S. B. Giddings and S. Thomas. High energy colliders as black hole factories: The end of short distance physics. _Phys. Rev. D_, 65:056010, 2002. [doi:10.1103/physrevd.65.056010](https://doi.org/10.1103/physrevd.65.056010).
- F. Gray, S. Schuster, A. Van-Brunt, and M. Visser. The Hawking cascade from a black hole is extremely sparse. _Class. Quantum Grav._, 33:115003, 2016. [doi:10.1088/0264-9381/33/11/115003](https://doi.org/10.1088/0264-9381/33/11/115003).
- D. Harlow. Jerusalem lectures on black holes and quantum information. _Rev. Mod. Phys._, 88:015002, 2016. [doi:10.1103/revmodphys.88.015002](https://doi.org/10.1103/revmodphys.88.015002).
- J. B. Hartle and S. W. Hawking. Path-integral derivation of black-hole radiance. _Phys. Rev. D_, 13:2188–2203, 1976. [doi:10.1103/PhysRevD.13.2188](https://doi.org/10.1103/PhysRevD.13.2188).
- S. W. Hawking. Gravitational radiation from colliding black holes. _Phys. Rev. Lett._, 26:1344–1346, 1971a. [doi:10.1103/physrevlett.26.1344](https://doi.org/10.1103/physrevlett.26.1344).
- S. W. Hawking. Gravitationally collapsed objects of very low mass. _Mon. Not. R. Astron. Soc._, 152:75–78, 1971b. [doi:10.1093/mnras/152.1.75](https://doi.org/10.1093/mnras/152.1.75).
- S. W. Hawking. Black hole explosions? _Nature_, 248:30–31, 1974. [doi:10.1038/248030a0](https://doi.org/10.1038/248030a0).
- S. W. Hawking. Particle creation by black holes. _Commun. Math. Phys._, 43:199–220, 1975. [doi:10.1007/BF02345020](https://doi.org/10.1007/BF02345020).
- S. W. Hawking. Breakdown of predictability in gravitational collapse. _Phys. Rev. D_, 14:2460–2473, 1976. [doi:10.1103/physrevd.14.2460](https://doi.org/10.1103/physrevd.14.2460).
- S. W. Hawking. Information loss in black holes. _Phys. Rev. D_, 72:084013, 2005. [doi:10.1103/physrevd.72.084013](https://doi.org/10.1103/physrevd.72.084013).
- S. W. Hawking and D. N. Page. Thermodynamics of black holes in anti-de Sitter space. _Commun. Math. Phys._, 87:577–588, 1983. [doi:10.1007/bf01208266](https://doi.org/10.1007/bf01208266).
- S. W. Hawking, M. J. Perry, and A. Strominger. Soft hair on black holes. _Phys. Rev. Lett._, 116:231301, 2016. [doi:10.1103/physrevlett.116.231301](https://doi.org/10.1103/physrevlett.116.231301).
- P. Hayden and J. Preskill. Black holes as mirrors: quantum information in random subsystems. _J. High Energy Phys._, 2007(09):120, 2007. [doi:10.1088/1126-6708/2007/09/120](https://doi.org/10.1088/1126-6708/2007/09/120).
- A. F. Heckler. Formation of a Hawking-radiation photosphere around microscopic black holes. _Phys. Rev. D_, 55:480–488, 1997. [doi:10.1103/physrevd.55.480](https://doi.org/10.1103/physrevd.55.480).
- A. D. Helfer. Do black holes radiate? _Rep. Prog. Phys._, 66:943–1008, 2003. [doi:10.1088/0034-4885/66/6/202](https://doi.org/10.1088/0034-4885/66/6/202).
- D. Hooper, G. Krnjaic, and S. D. McDermott. Dark radiation and superheavy dark matter from black hole domination. _J. High Energy Phys._, 2019(08):001, 2019. [doi:10.1007/jhep08(2019)001](https://doi.org/10.1007/jhep08(2019)001).
- V. E. Hubeny, M. Rangamani, and T. Takayanagi. A covariant holographic entanglement entropy proposal. _J. High Energy Phys._, 2007(07):062, 2007. [doi:10.1088/1126-6708/2007/07/062](https://doi.org/10.1088/1126-6708/2007/07/062).
- M. Isi, W. M. Farr, M. Giesler, M. A. Scheel, and S. A. Teukolsky. Testing the black-hole area law with GW150914. _Phys. Rev. Lett._, 127:011103, 2021. [doi:10.1103/PhysRevLett.127.011103](https://doi.org/10.1103/PhysRevLett.127.011103).
- S. Iso, H. Umetsu, and F. Wilczek. Hawking radiation from charged black holes via gauge and gravitational anomalies. _Phys. Rev. Lett._, 96:151302, 2006. [doi:10.1103/physrevlett.96.151302](https://doi.org/10.1103/physrevlett.96.151302).
- W. Israel. Thermo-field dynamics of black holes. _Phys. Lett. A_, 57:107–110, 1976. [doi:10.1016/0375-9601(76)90178-x](https://doi.org/10.1016/0375-9601(76)90178-x).
- T. Jacobson. Black-hole evaporation and ultrashort distances. _Phys. Rev. D_, 44:1731–1739, 1991. [doi:10.1103/physrevd.44.1731](https://doi.org/10.1103/physrevd.44.1731).
- T. Jacobson. Black hole radiation in the presence of a short distance cutoff. _Phys. Rev. D_, 48:728–741, 1993. [doi:10.1103/physrevd.48.728](https://doi.org/10.1103/physrevd.48.728).
- T. Jacobson. Introduction to quantum fields in curved spacetime and the Hawking effect. In A. Gomberoff and D. Marolf, editors, _Lectures on Quantum Gravity_, pages 39–89. Springer, Boston, MA, 2005. [doi:10.1007/0-387-24992-3_2](https://doi.org/10.1007/0-387-24992-3_2).
- P. Kanti. Black holes in theories with large extra dimensions: a review. _Int. J. Mod. Phys. A_, 19:4899–4951, 2004. [doi:10.1142/s0217751x04018324](https://doi.org/10.1142/s0217751x04018324).
- B. S. Kay and R. M. Wald. Theorems on the uniqueness and thermal properties of stationary, nonsingular, quasifree states on spacetimes with a bifurcate Killing horizon. _Phys. Rep._, 207:49–136, 1991. [doi:10.1016/0370-1573(91)90015-e](https://doi.org/10.1016/0370-1573(91)90015-e).
- V. I. Kolobov, K. Golubkov, J. R. Mu noz de Nova, and J. Steinhauer. Observation of stationary spontaneous Hawking radiation and the time evolution of an analogue black hole. _Nat. Phys._, 17:362–367, 2021. [doi:10.1038/s41567-020-01076-0](https://doi.org/10.1038/s41567-020-01076-0).
- R. Laha. Primordial black holes as a dark matter candidate are severely constrained by the Galactic Center 511 keV $\gamma$-ray line. _Phys. Rev. Lett._, 123:251101, 2019. [doi:10.1103/PhysRevLett.123.251101](https://doi.org/10.1103/PhysRevLett.123.251101).
- O. Lahav, A. Itah, A. Blumkin, C. Gordon, S. Rinott, A. Zayats, and J. Steinhauer. Realization of a sonic black hole analog in a Bose-Einstein condensate. _Phys. Rev. Lett._, 105:240401, 2010. [doi:10.1103/physrevlett.105.240401](https://doi.org/10.1103/physrevlett.105.240401).
- O. Lennon, J. March-Russell, R. Petrossian-Byrne, and H. Tillim. Black hole genesis of dark matter. _J. Cosmol. Astropart. Phys._, 2018(04):009, 2018. [doi:10.1088/1475-7516/2018/04/009](https://doi.org/10.1088/1475-7516/2018/04/009).
- U. Leonhardt. Questioning the recent observation of quantum Hawking radiation. _Ann. Phys. (Berlin)_, 530:1700114, 2018. [doi:10.1002/andp.201700114](https://doi.org/10.1002/andp.201700114).
- J. H. MacGibbon. Quark- and gluon-jet emission from primordial black holes. II. The emission over the black-hole lifetime. _Phys. Rev. D_, 44:376–392, 1991. [doi:10.1103/physrevd.44.376](https://doi.org/10.1103/physrevd.44.376).
- J. H. MacGibbon and B. R. Webber. Quark- and gluon-jet emission from primordial black holes: The instantaneous spectra. _Phys. Rev. D_, 41:3052–3079, 1990. [doi:10.1103/physrevd.41.3052](https://doi.org/10.1103/physrevd.41.3052).
- J. H. MacGibbon, B. J. Carr, and D. N. Page. Do evaporating black holes form photospheres? _Phys. Rev. D_, 78:064043, 2008. [doi:10.1103/physrevd.78.064043](https://doi.org/10.1103/physrevd.78.064043).
- J. Maldacena. The large N limit of superconformal field theories and supergravity. _Adv. Theor. Math. Phys._, 2:231–252, 1998. [doi:10.4310/ATMP.1998.v2.n2.a1](https://doi.org/10.4310/ATMP.1998.v2.n2.a1).
- J. Maldacena and A. Strominger. Black hole greybody factors and D-brane spectroscopy. _Phys. Rev. D_, 55:861–870, 1997. [doi:10.1103/physrevd.55.861](https://doi.org/10.1103/physrevd.55.861).
- J. Maldacena and L. Susskind. Cool horizons for entangled black holes. _Fortschr. Phys._, 61:781–811, 2013. [doi:10.1002/prop.201300020](https://doi.org/10.1002/prop.201300020).
- D. Marolf. The black hole information problem: past, present, and future. _Rep. Prog. Phys._, 80:092001, 2017. [doi:10.1088/1361-6633/aa77cc](https://doi.org/10.1088/1361-6633/aa77cc).
- S. D. Mathur. The fuzzball proposal for black holes: an elementary review. _Fortschr. Phys._, 53:793–827, 2005. [doi:10.1002/prop.200410203](https://doi.org/10.1002/prop.200410203).
- S. D. Mathur. The information paradox: a pedagogical introduction. _Class. Quantum Grav._, 26:224001, 2009. [doi:10.1088/0264-9381/26/22/224001](https://doi.org/10.1088/0264-9381/26/22/224001).
- P. Montero-Camacho, X. Fang, G. Vasquez, M. Silva, and C. M. Hirata. Revisiting constraints on asteroid-mass primordial black holes as dark matter candidates. _J. Cosmol. Astropart. Phys._, 2019(08):031, 2019. [doi:10.1088/1475-7516/2019/08/031](https://doi.org/10.1088/1475-7516/2019/08/031).
- J. R. Mu noz de Nova, K. Golubkov, V. I. Kolobov, and J. Steinhauer. Observation of thermal Hawking radiation and its temperature in an analogue black hole. _Nature_, 569:688–691, 2019. [doi:10.1038/s41586-019-1241-0](https://doi.org/10.1038/s41586-019-1241-0).
- H. S. Nguyen, D. Gerace, I. Carusotto, D. Sanvitto, E. Galopin, A. Lemaître, I. Sagnes, J. Bloch, and A. Amo. Acoustic black hole in a stationary hydrodynamic flow of microcavity polaritons. _Phys. Rev. Lett._, 114:036402, 2015. [doi:10.1103/physrevlett.114.036402](https://doi.org/10.1103/physrevlett.114.036402).
- D. N. Page. Particle emission rates from a black hole: Massless particles from an uncharged, nonrotating hole. _Phys. Rev. D_, 13:198–206, 1976a. [doi:10.1103/physrevd.13.198](https://doi.org/10.1103/physrevd.13.198).
- D. N. Page. Particle emission rates from a black hole. II. Massless particles from a rotating hole. _Phys. Rev. D_, 14:3260–3273, 1976b. [doi:10.1103/physrevd.14.3260](https://doi.org/10.1103/physrevd.14.3260).
- D. N. Page. Particle emission rates from a black hole. III. Charged leptons from a nonrotating hole. _Phys. Rev. D_, 16:2402–2411, 1977. [doi:10.1103/physrevd.16.2402](https://doi.org/10.1103/physrevd.16.2402).
- D. N. Page. Average entropy of a subsystem. _Phys. Rev. Lett._, 71:1291–1294, 1993a. [doi:10.1103/physrevlett.71.1291](https://doi.org/10.1103/physrevlett.71.1291).
- D. N. Page. Information in black hole radiation. _Phys. Rev. Lett._, 71:3743–3746, 1993b. [doi:10.1103/physrevlett.71.3743](https://doi.org/10.1103/physrevlett.71.3743).
- D. N. Page. Hawking radiation and black hole thermodynamics. _New J. Phys._, 7:203, 2005. [doi:10.1088/1367-2630/7/1/203](https://doi.org/10.1088/1367-2630/7/1/203).
- D. N. Page. Time dependence of Hawking radiation entropy. _J. Cosmol. Astropart. Phys._, 2013(09):028, 2013. [doi:10.1088/1475-7516/2013/09/028](https://doi.org/10.1088/1475-7516/2013/09/028).
- D. N. Page and S. W. Hawking. Gamma rays from primordial black holes. _Astrophys. J._, 206:1–7, 1976. [doi:10.1086/154350](https://doi.org/10.1086/154350).
- M. K. Parikh and F. Wilczek. Hawking radiation as tunneling. _Phys. Rev. Lett._, 85:5042–5045, 2000. [doi:10.1103/physrevlett.85.5042](https://doi.org/10.1103/physrevlett.85.5042).
- L. Parker. Probability distribution of particles created by a black hole. _Phys. Rev. D_, 12:1519–1525, 1975. [doi:10.1103/PhysRevD.12.1519](https://doi.org/10.1103/PhysRevD.12.1519).
- G. Penington. Entanglement wedge reconstruction and the information paradox. _J. High Energy Phys._, 2020(09):002, 2020. [doi:10.1007/jhep09(2020)002](https://doi.org/10.1007/jhep09(2020)002).
- G. Penington, S. H. Shenker, D. Stanford, and Z. Yang. Replica wormholes and the black hole interior. _J. High Energy Phys._, 2022(03):205, 2022. [doi:10.1007/jhep03(2022)205](https://doi.org/10.1007/jhep03(2022)205).
- R. Penrose. Gravitational collapse: the role of general relativity. _Riv. Nuovo Cimento, Numero Speciale_, 1:252–276, 1969.
- R. Penrose and R. M. Floyd. Extraction of rotational energy from a black hole. _Nature Phys. Sci._, 229:177–179, 1971. [doi:10.1038/physci229177a0](https://doi.org/10.1038/physci229177a0).
- T. G. Philbin, C. Kuklewicz, S. Robertson, S. Hill, F. König, and U. Leonhardt. Fiber-optical analog of the event horizon. _Science_, 319:1367–1370, 2008. [doi:10.1126/science.1153625](https://doi.org/10.1126/science.1153625).
- J. Polchinski. The black hole information problem. In J. Polchinski, P. Vieira, and O. DeWolfe, editors, _New Frontiers in Fields and Strings: TASI 2015_, pages 353–397. World Scientific, Singapore, 2017. [doi:10.1142/9789813149441_0006](https://doi.org/10.1142/9789813149441_0006).
- S. Raju. Lessons from the information paradox. _Phys. Rep._, 943:1–80, 2022. [doi:10.1016/j.physrep.2021.10.001](https://doi.org/10.1016/j.physrep.2021.10.001).
- S. P. Robinson and F. Wilczek. Relationship between Hawking radiation and gravitational anomalies. _Phys. Rev. Lett._, 95:011303, 2005. [doi:10.1103/physrevlett.95.011303](https://doi.org/10.1103/physrevlett.95.011303).
- G. Rousseaux, C. Mathis, P. Maïssa, T. G. Philbin, and U. Leonhardt. Observation of negative-frequency waves in a water tank: a classical analogue to the Hawking effect? _New J. Phys._, 10:053015, 2008. [doi:10.1088/1367-2630/10/5/053015](https://doi.org/10.1088/1367-2630/10/5/053015).
- C. Rovelli. Black hole entropy from loop quantum gravity. _Phys. Rev. Lett._, 77:3288–3291, 1996. [doi:10.1103/physrevlett.77.3288](https://doi.org/10.1103/physrevlett.77.3288).
- J. G. Russo, L. Susskind, and L. Thorlacius. End point of Hawking radiation. _Phys. Rev. D_, 46:3444–3449, 1992. [doi:10.1103/physrevd.46.3444](https://doi.org/10.1103/physrevd.46.3444).
- S. Ryu and T. Takayanagi. Holographic derivation of entanglement entropy from the anti-de Sitter space/conformal field theory correspondence. _Phys. Rev. Lett._, 96:181602, 2006. [doi:10.1103/physrevlett.96.181602](https://doi.org/10.1103/physrevlett.96.181602).
- P. Saad, S. H. Shenker, and D. Stanford. JT gravity as a matrix integral. arXiv:1903.11115 [hep-th], 2019.
- A. M. Sirunyan et al. Search for black holes and sphalerons in high-multiplicity final states in proton-proton collisions at $\sqrt{s} = 13$ TeV. _J. High Energy Phys._, 2018(11):042, 2018. [doi:10.1007/JHEP11(2018)042](https://doi.org/10.1007/JHEP11(2018)042).
- S. N. Solodukhin. Entanglement entropy of black holes. _Living Rev. Relativ._, 14:8, 2011. [doi:10.12942/lrr-2011-8](https://doi.org/10.12942/lrr-2011-8).
- M. Srednicki. Entropy and area. _Phys. Rev. Lett._, 71:666–669, 1993. [doi:10.1103/physrevlett.71.666](https://doi.org/10.1103/physrevlett.71.666).
- K. Srinivasan and T. Padmanabhan. Particle production and complex path analysis. _Phys. Rev. D_, 60:024007, 1999. [doi:10.1103/physrevd.60.024007](https://doi.org/10.1103/physrevd.60.024007).
- A. A. Starobinsky. Amplification of waves during reflection from a rotating “black hole”. _Sov. Phys. JETP_, 37:28–32, 1973.
- J. Steinhauer. Observation of self-amplifying Hawking radiation in an analogue black-hole laser. _Nat. Phys._, 10:864–869, 2014. [doi:10.1038/nphys3104](https://doi.org/10.1038/nphys3104).
- J. Steinhauer. Observation of quantum Hawking radiation and its entanglement in an analogue black hole. _Nat. Phys._, 12:959–965, 2016. [doi:10.1038/nphys3863](https://doi.org/10.1038/nphys3863).
- A. Strominger and C. Vafa. Microscopic origin of the Bekenstein-Hawking entropy. _Phys. Lett. B_, 379:99–104, 1996. [doi:10.1016/0370-2693(96)00345-0](https://doi.org/10.1016/0370-2693(96)00345-0).
- L. Susskind, L. Thorlacius, and J. Uglum. The stretched horizon and black hole complementarity. _Phys. Rev. D_, 48:3743–3761, 1993. [doi:10.1103/physrevd.48.3743](https://doi.org/10.1103/physrevd.48.3743).
- G. 't Hooft. On the quantum structure of a black hole. _Nucl. Phys. B_, 256:727–745, 1985. [doi:10.1016/0550-3213(85)90418-3](https://doi.org/10.1016/0550-3213(85)90418-3).
- S. A. Teukolsky and W. H. Press. Perturbations of a rotating black hole. III. Interaction of the hole with gravitational and electromagnetic radiation. _Astrophys. J._, 193:443–461, 1974. [doi:10.1086/153180](https://doi.org/10.1086/153180).
- V. Thoss, A. Burkert, and K. Kohri. Breakdown of Hawking evaporation opens new mass window for primordial black holes as dark matter candidate. _Mon. Not. R. Astron. Soc._, 532:451–459, 2024. [doi:10.1093/mnras/stae1098](https://doi.org/10.1093/mnras/stae1098).
- T. Torres, S. Patrick, A. Coutant, M. Richartz, E. W. Tedford, and S. Weinfurtner. Rotational superradiant scattering in a vortex flow. _Nat. Phys._, 13:833–836, 2017. [doi:10.1038/nphys4151](https://doi.org/10.1038/nphys4151).
- W. G. Unruh. Second quantization in the Kerr metric. _Phys. Rev. D_, 10:3194–3205, 1974. [doi:10.1103/physrevd.10.3194](https://doi.org/10.1103/physrevd.10.3194).
- W. G. Unruh. Notes on black-hole evaporation. _Phys. Rev. D_, 14:870–892, 1976. [doi:10.1103/physrevd.14.870](https://doi.org/10.1103/physrevd.14.870).
- W. G. Unruh. Experimental black-hole evaporation? _Phys. Rev. Lett._, 46:1351–1353, 1981. [doi:10.1103/PhysRevLett.46.1351](https://doi.org/10.1103/PhysRevLett.46.1351).
- W. G. Unruh. Sonic analogue of black holes and the effects of high frequencies on black hole evaporation. _Phys. Rev. D_, 51:2827–2838, 1995. [doi:10.1103/physrevd.51.2827](https://doi.org/10.1103/physrevd.51.2827).
- W. G. Unruh and R. Schützhold. Universality of the Hawking effect. _Phys. Rev. D_, 71:024028, 2005. [doi:10.1103/physrevd.71.024028](https://doi.org/10.1103/physrevd.71.024028).
- W. G. Unruh and R. M. Wald. Information loss. _Rep. Prog. Phys._, 80:092002, 2017. [doi:10.1088/1361-6633/aa778e](https://doi.org/10.1088/1361-6633/aa778e).
- M. Visser. Acoustic black holes: horizons, ergospheres and Hawking radiation. _Class. Quantum Grav._, 15:1767–1791, 1998. [doi:10.1088/0264-9381/15/6/024](https://doi.org/10.1088/0264-9381/15/6/024).
- M. Visser. Essential and inessential features of Hawking radiation. _Int. J. Mod. Phys. D_, 12:649–661, 2003. [doi:10.1142/s0218271803003190](https://doi.org/10.1142/s0218271803003190).
- R. M. Wald. On particle creation by black holes. _Commun. Math. Phys._, 45:9–34, 1975. [doi:10.1007/bf01609863](https://doi.org/10.1007/bf01609863).
- R. M. Wald. Black hole entropy is the Noether charge. _Phys. Rev. D_, 48:R3427–R3431, 1993. [doi:10.1103/physrevd.48.r3427](https://doi.org/10.1103/physrevd.48.r3427).
- R. M. Wald. _Quantum Field Theory in Curved Spacetime and Black Hole Thermodynamics_. University of Chicago Press, Chicago, 1994.
- R. M. Wald. The thermodynamics of black holes. _Living Rev. Relativ._, 4:6, 2001. [doi:10.12942/lrr-2001-6](https://doi.org/10.12942/lrr-2001-6).
- S. Weinfurtner, E. W. Tedford, M. C. J. Penrice, W. G. Unruh, and G. A. Lawrence. Measurement of stimulated Hawking emission in an analogue system. _Phys. Rev. Lett._, 106:021302, 2011. [doi:10.1103/physrevlett.106.021302](https://doi.org/10.1103/physrevlett.106.021302).
- J. W. York. Dynamical origin of black-hole radiance. _Phys. Rev. D_, 28:2929–2945, 1983. [doi:10.1103/physrevd.28.2929](https://doi.org/10.1103/physrevd.28.2929).
- Ya. B. Zel'dovich. Generation of waves by a rotating body. _JETP Lett._, 14:180–181, 1971.
- Ya. B. Zel'dovich and I. D. Novikov. The hypothesis of cores retarded during expansion and the hot cosmological model. _Sov. Astron._, 10:602–603, 1967.
