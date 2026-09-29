---
slug: hawking-radiation-review/section-4
title: "Other routes to the same temperature"
date: 2024-12-01
summary: "The same temperature from the choice of state, Euclidean methods, the trace anomaly, tunnelling and anomalies, and the rigorous results that establish its universality."
series: hawking-radiation-review
part: section-4
order: 4
kicker: "Section 4"
---
Hawking's derivation relies on a specific model of collapse and on the propagation of modes through the collapsing body. A natural question is which of its ingredients are essential. Over the following decades the effect was rederived in many different ways, each of which isolates a different aspect of the physics. The derivations differ considerably in their assumptions and in the physical picture they suggest, but all of them yield ${T_{\mathrm{H}}} = \kappa/2\pi$. In this section we survey the most important of them; Table 4 at the end of the section provides a summary.

## 4.1 The choice of state

On the maximally extended Schwarzschild spacetime, which describes an eternal black hole rather than one formed by collapse, there is no in-vacuum, and a state must be chosen. Three choices are of particular importance, and comparing them is the best way to understand what the collapse calculation actually selects. Their properties are summarised in Table 3.

The Boulware state (Boulware, 1975) is the vacuum defined with respect to the Killing time $t$. It contains no radiation at infinity, but its renormalised stress-energy tensor diverges on both the past and the future horizons. It is the appropriate state outside a static star whose surface lies outside $r = 2M$, and it is unphysical for a black hole. The Hartle–Hawking state (Hartle and Hawking, 1976; Israel, 1976) is regular on both horizons and describes a black hole in thermal equilibrium with a bath of radiation at ${T_{\mathrm{H}}}$; it is the gravitational analogue of the Minkowski vacuum restricted to a Rindler wedge. The Unruh state (Unruh, 1976) is regular on the future horizon, contains no radiation incoming from ${\mathscr{I}}^{-}$, and carries an outgoing thermal flux at infinity. It reproduces the late-time behaviour of the state produced by gravitational collapse, and it is therefore the state that describes an evaporating black hole. The vacuum polarisation in these states was computed by Candelas (1980).

| State | Future horizon | Past horizon | Physical situation |
| --- | --- | --- | --- |
| Boulware | Singular | Singular | Exterior of a static star; no flux at infinity |
| Unruh | Regular | Singular | Black hole formed by collapse; outgoing thermal flux at ${T_{\mathrm{H}}}$ |
| Hartle–Hawking | Regular | Regular | Black hole in equilibrium with a thermal bath at ${T_{\mathrm{H}}}$ |

_Table 3: The three standard states on the Schwarzschild spacetime._

The comparison makes the lesson of Section [3.4](/research/hawking-radiation-review/section-3#34-a-heuristic-derivation-from-the-unruh-effect) precise: the thermal flux is tied to regularity on the future horizon. This connection was made rigorous by Kay and Wald (1991). For spacetimes with a bifurcate Killing horizon they proved that there is at most one stationary state that is invariant under the isometries and satisfies the Hadamard condition, which requires the short-distance singularity structure of the two-point function to be that of the Minkowski vacuum. When such a state exists, it is a Kubo–Martin–Schwinger (KMS) state, that is, a thermal equilibrium state, at temperature $\kappa/2\pi$ with respect to the Killing time. Thermality is therefore not an additional assumption but a consequence of requiring that the state look like the vacuum at short distances across the horizon. Kay and Wald (1991) also showed that no such state exists on the Kerr spacetime, a result related to the presence of superradiant modes.

## 4.2 Euclidean methods

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
> The negative heat capacity (3.9) implies that the canonical ensemble of asymptotically flat black holes is unstable, and the Euclidean path integral reflects this through a negative mode in the fluctuations around the saddle. The situation is different in anti-de Sitter (AdS) space, which acts as a confining box. Hawking and Page (1983) showed that sufficiently large AdS black holes have positive heat capacity and can be in stable equilibrium with their own radiation, and that a first-order phase transition separates thermal AdS space from the black hole phase. This result became central to the interpretation of black holes in the AdS/CFT correspondence (Section [7.7](/research/hawking-radiation-review/section-7#77-holography-quantum-extremal-surfaces-and-islands)).

## 4.3 The stress-energy tensor and the trace anomaly

The particle description of the radiation is meaningful only far from the black hole. Near the horizon a local description in terms of the expectation value of the renormalised stress-energy tensor $\langle T_{\mu\nu}\rangle$ is more appropriate, and it is also the quantity that sources the semiclassical Einstein equations. In two spacetime dimensions, conservation and the trace anomaly determine $\langle T_{\mu\nu}\rangle$ almost completely once the state is specified. Davies et al. (1976) used this fact to show that, in the Unruh state, the outgoing energy flux at infinity is

$$
\langle T_{uu}\rangle\big|_{{\mathscr{I}}^{+}} = \frac{\kappa^{2}}{48\pi} = \frac{\pi}{12}\,{T_{\mathrm{H}}}^{2},
\tag{4.3}
$$

which is the energy flux of a one-dimensional black body at temperature ${T_{\mathrm{H}}}$, while at the horizon there is an ingoing flux of negative energy, $\langle T_{vv}\rangle = -\kappa^{2}/48\pi$, which reduces the mass of the black hole. Christensen and Fulling (1977) extended the analysis to four dimensions by combining the trace anomaly with conservation and regularity conditions. The lesson of these calculations is that the energy of the Hawking flux is not carried by particles that exist, as such, near the horizon: close to the horizon the dominant effect is the influx of negative energy, and the particle interpretation emerges only at distances of a few Schwarzschild radii. We return to the question of where the radiation originates in Section [5.6](/research/hawking-radiation-review/section-5#56-backreaction-and-the-end-point).

A closely related line of work employs moving mirrors in two-dimensional flat spacetime. Fulling and Davies (1976) showed that a perfectly reflecting mirror whose trajectory approaches a null line exponentially, in the manner of Eq. (3.2), produces a thermal flux. The mirror thus reproduces the essential kinematics of the collapse problem without any curvature, which illustrates again that the effect is kinematical. Carlitz and Willey (1987) subsequently used mirror trajectories to study how correlations in the emitted radiation can restore the purity of the final state, and moving-mirror models remain a useful laboratory for questions about the information content of the radiation.

## 4.4 Tunnelling and anomalies

Two further derivations are shorter but less fundamental, and they are best regarded as heuristics that are consistent with, rather than independent of, the field-theoretic derivations. In the tunnelling picture, the radiation arises from the classically forbidden crossing of the horizon, and the emission rate is determined by the imaginary part of the action of the tunnelling particle. Srinivasan and Padmanabhan (1999) obtained the temperature from a complex-path analysis of the Hamilton–Jacobi equation. Parikh and Wilczek (2000) considered an s-wave shell of energy $\omega$ tunnelling across the horizon while imposing energy conservation, so that the mass of the black hole decreases from $M$ to $M - \omega$. They found

$$
\Gamma \sim e^{-2\,\mathrm{Im}\,S} = \exp\!\left[-8\pi\omega\left(M - \frac{\omega}{2}\right)\right] = e^{\Delta{S_{\mathrm{BH}}}},
\tag{4.4}
$$

where $\Delta{S_{\mathrm{BH}}} = 4\pi[(M-\omega)^{2} - M^{2}]$ is the change in the Bekenstein–Hawking entropy. To leading order in $\omega/M$ this is the Boltzmann factor $e^{-\omega/{T_{\mathrm{H}}}}$, and the correction reflects the backreaction of the emitted quantum on the black hole. The identification of the emission probability with $e^{\Delta{S_{\mathrm{BH}}}}$ suggests an interpretation in terms of the number of black hole microstates. Several subtleties concerning the choice of coordinates, the contribution of the time coordinate to the imaginary part of the action, and the interpretation of the non-thermal corrections have been discussed in the subsequent literature.

Robinson and Wilczek (2005) proposed a derivation based on gravitational anomalies. Near the horizon a field theory on the black hole background can be reduced to an infinite collection of two-dimensional fields. If the ingoing modes, which cannot affect the exterior classically, are integrated out, the effective theory of the outgoing modes becomes chiral and exhibits a gravitational anomaly. Requiring that general covariance be restored in the full theory fixes the outgoing energy flux to be precisely Eq. (4.3). Iso et al. (2006) extended the argument to charged black holes, where the gauge anomaly fixes the charge flux in a similar way. As with the tunnelling approach, regularity of the state at the future horizon enters as an input.

## 4.5 Rigorous results and universality

Hawking's result was placed on a rigorous footing shortly after its publication by Wald (1975) and Parker (1975), who showed that the late-time radiation is described by an exactly thermal density matrix (Section [3.5](/research/hawking-radiation-review/section-3#35-the-state-of-the-radiation)). Fredenhagen and Haag (1990) derived the effect within algebraic quantum field theory, showing that the late-time flux follows from the assumption that the state is of Hadamard form near the horizon during the collapse, independently of further details of the initial state.

A related programme has sought to identify the minimal geometrical conditions for the effect, following the hint of Remark 3.1. Visser (2003) argued that Hawking radiation is fundamentally kinematical: it requires a Lorentzian geometry with an (apparent) horizon and a well-defined surface gravity, together with a quantum field in a suitable state, but it does not depend on the Einstein equations, on the existence of a global event horizon, or on the identification of entropy with area. Unruh and Schützhold (2005) established that the effect is robust against modifications of the dispersion relation at short wavelengths, under conditions discussed in Section [6](/research/hawking-radiation-review/section-6). Barceló et al. (2011a) showed that the essential ingredient is the exponential “peeling” of outgoing null rays, Eq. (3.2), maintained for a sufficiently long time. Objects that approach but never form a horizon can therefore emit Hawking-like radiation transiently, whereas a horizon that forms without adiabatic peeling need not radiate thermally.

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
