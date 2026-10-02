---
slug: hawking-radiation-review/section-4
title: "Other routes to the same temperature"
date: 2024-12-01
summary: "The choice of state, the Euclidean section, the trace anomaly, tunnelling and anomalies, and what each derivation does and does not establish."
series: hawking-radiation-review
part: section-4
order: 4
kicker: "Lecture 4"
---
Hawking's calculation uses a collapsing star, geometric optics through its interior, and a vacuum imposed on ${\mathscr{I}}^{-}$ long before the black hole exists. None of these appears in the answer, ${T_{\mathrm{H}}} = \kappa/2\pi$, which depends on the final black hole alone. Over the following decades the effect was rederived in many ways that never mention the star. All give $\kappa/2\pi$. They differ in what they assume and in what they establish, and as a rule the more economical a derivation is, the more it assumes.

## 4.1 The choice of state

On the maximally extended Schwarzschild spacetime, an eternal black hole, nothing fixes the state: initial data must be given on the past horizon as well as on ${\mathscr{I}}^{-}$. Comparing the three standard choices (Table 3) is the best way to see what the collapse selects.

The Boulware state (Boulware, 1975) is the vacuum defined with respect to the Killing time $t$. It has no radiation at infinity, but its stress-energy tensor diverges on both horizons, as that of the Rindler vacuum of Section [2.4](/research/hawking-radiation-review/section-2#24-a-warm-up-the-unruh-effect) does on the Rindler horizons. It is the right state outside a static star larger than $2M$, and unphysical for a black hole. The Hartle–Hawking state (Hartle and Hawking, 1976; Israel, 1976) is regular on both horizons and describes a black hole in thermal equilibrium with a bath of radiation at ${T_{\mathrm{H}}}$. It is the gravitational analogue of the Minkowski vacuum restricted to a Rindler wedge. The Unruh state (Unruh, 1976) is regular on the future horizon, has nothing coming in from ${\mathscr{I}}^{-}$, and carries an outgoing thermal flux at infinity. It reproduces the late-time state produced by collapse, and so describes an evaporating black hole. Candelas (1980) computed the vacuum polarisation in all three.

| State | Future horizon | Past horizon | Physical situation |
| --- | --- | --- | --- |
| Boulware | Singular | Singular | Exterior of a static star; no flux at infinity |
| Unruh | Regular | Singular | Black hole formed by collapse; outgoing thermal flux at ${T_{\mathrm{H}}}$ |
| Hartle–Hawking | Regular | Regular | Black hole in equilibrium with a thermal bath at ${T_{\mathrm{H}}}$ |

_Table 3: The three standard states on the Schwarzschild spacetime._

The table makes the lesson of Section [3.4](/research/hawking-radiation-review/section-3#34-a-heuristic-derivation-from-the-unruh-effect) precise. Regularity on the future horizon goes with outgoing thermal radiation at ${T_{\mathrm{H}}}$; regularity on the past horizon adds an incoming bath that balances it. A collapsing star has no past horizon, so the singularity of the Unruh state there costs nothing.

Kay and Wald (1991) turned this into a theorem. For spacetimes with a bifurcate Killing horizon they proved that there is at most one stationary state that is invariant under the isometries and satisfies the Hadamard condition (its two-point function has the short-distance singularity of the Minkowski vacuum). When such a state exists, it is a Kubo–Martin–Schwinger (KMS) state, that is, a state of thermal equilibrium, at temperature $\kappa/2\pi$ with respect to the Killing time.[^1] Thermality is therefore not an extra assumption: it follows from requiring that the state look like the vacuum at short distances across the horizon. This is, in our view, the cleanest statement of why the answer is thermal. The theorem concerns a stationary state on the eternal black hole; the link with collapse is supplied by Fredenhagen and Haag (1990) (Section [4.5](#45-rigorous-results-and-universality)). Kay and Wald (1991) also showed that no such state exists on the Kerr spacetime, a result related to the presence of superradiant modes.

## 4.2 Euclidean methods

The quickest route to the temperature is to continue to imaginary time. Set $t = -i\tau$ in the Schwarzschild metric and look at the resulting Riemannian metric near $r = 2M$. With the proper distance from the horizon introduced through $r = 2M + \rho^{2}/8M$, one finds $f \simeq \rho^{2}/16M^{2}$ and ${\mathrm{d}} r^{2}/f \simeq {\mathrm{d}}\rho^{2}$, so that

$$
{\mathrm{d}} s^{2}_{\mathrm{E}} \simeq \rho^{2}\,{\mathrm{d}}(\kappa\tau)^{2} + {\mathrm{d}}\rho^{2} + 4M^{2}{\mathrm{d}}\Omega^{2}.
\tag{4.1}
$$

The first two terms are the flat metric in polar coordinates, with $\kappa\tau$ as the polar angle. The geometry is smooth at $\rho = 0$ only if this angle has period $2\pi$; otherwise there is a conical singularity. The imaginary time must therefore be periodic, $\tau \sim \tau + 2\pi/\kappa$. Since a thermal state at temperature $T$ corresponds to imaginary time of period $1/T$, the black hole comes with the temperature $T = \kappa/2\pi$. Note that $\tau$ is normalised at infinity, so the period gives the temperature measured there.

The periodicity is not a new piece of physics. The factor $e^{-\pi\omega/\kappa}$ of Eq. (2.13), with $a$ replaced by $\kappa$, is exactly what a positive-frequency mode $e^{-i\omega t}$ acquires when $t$ is shifted by $-i\pi/\kappa$, half the Euclidean period. The analyticity argument of Lectures [2](/research/hawking-radiation-review/section-2) and [3](/research/hawking-radiation-review/section-3) and the absence of a conical singularity are the same statement.

Gibbons and Hawking (1977a) went further and read the Euclidean gravitational path integral, with period $\beta = 8\pi M$, as a thermal partition function, $Z = \int\mathcal{D}g\,e^{-I_{\mathrm{E}}[g]}$. In the saddle-point approximation $Z \simeq e^{-I_{\mathrm{E}}}$, where $I_{\mathrm{E}} = \beta^{2}/16\pi$ is the on-shell action of the Euclidean Schwarzschild solution.[^2] The standard thermodynamic relations give

$$
E = -\frac{\partial\ln Z}{\partial\beta} = \frac{\beta}{8\pi} = M,
\qquad
S = \beta E + \ln Z = \frac{\beta^{2}}{16\pi} = 4\pi M^{2} = \frac{A}{4},
\tag{4.2}
$$

so a purely geometrical calculation returns both the mass and the Bekenstein–Hawking entropy. The same method gives the cosmological horizon of de Sitter space the temperature $H/2\pi$, where $H$ is the Hubble rate (Gibbons and Hawking, 1977b). Earlier, Hartle and Hawking (1976) had obtained the flux by continuing the Feynman propagator in the complexified Schwarzschild geometry, finding that the probabilities of emission and absorption of a particle differ by the factor $e^{-\omega/{T_{\mathrm{H}}}}$. Israel (1976) observed that the Hartle–Hawking state is a thermofield double of the two exterior regions of the extended geometry, in exact analogy with Eq. (2.17).[^3]

What does the Euclidean argument establish? It gives the temperature in three lines and the entropy in five, and no other derivation is as economical. It describes equilibrium, however, not a process, and says nothing about collapse, the direction of the flux or greybody factors. The entropy calculation is the more striking and the less secure of its two results, because the saddle is not a minimum of the action.

> **Remark 4.1.**
>
> The negative heat capacity (3.9) implies that the canonical ensemble of asymptotically flat black holes is unstable, and the Euclidean path integral reflects this through a negative mode in the fluctuations around the saddle. Anti-de Sitter (AdS) space acts as a confining box. Hawking and Page (1983) showed that sufficiently large AdS black holes have positive heat capacity and can be in stable equilibrium with their own radiation, and that a first-order phase transition separates thermal AdS space from the black hole phase. This result became central to the interpretation of black holes in the AdS/CFT correspondence (Section [7.8](/research/hawking-radiation-review/section-7#78-holography-and-quantum-extremal-surfaces)).

## 4.3 The stress-energy tensor and the trace anomaly

Particles describe the radiation well only far from the black hole. Near the horizon the right object is the renormalised stress-energy tensor $\langle T_{\mu\nu}\rangle$, which also sources the semiclassical Einstein equations. In two spacetime dimensions, conservation and the trace anomaly determine $\langle T_{\mu\nu}\rangle$ almost completely once the state is specified. Davies et al. (1976) used this to show that, in the Unruh state, the outgoing energy flux at infinity is

$$
\langle T_{uu}\rangle\big|_{{\mathscr{I}}^{+}} = \frac{\kappa^{2}}{48\pi} = \frac{\pi}{12}\,{T_{\mathrm{H}}}^{2}.
\tag{4.3}
$$

The right-hand side is easy to check. A single right-moving massless boson at temperature $T$ carries the energy flux $\int_{0}^{\infty}({\mathrm{d}}\omega/2\pi)\,\omega/(e^{\omega/T} - 1) = (T^{2}/2\pi)(\pi^{2}/6) = \pi T^{2}/12$, the energy flux of a one-dimensional black body. For Schwarzschild, $\kappa = 1/4M$ and the flux is $1/(768\pi M^{2})$. At the horizon there is instead an ingoing flux of negative energy, $\langle T_{vv}\rangle = -\kappa^{2}/48\pi$, which is what reduces the mass of the black hole. Christensen and Fulling (1977) extended the analysis to four dimensions by combining the trace anomaly with conservation and regularity conditions.

This derivation establishes what the particle derivations do not: where the energy goes. Near the horizon the dominant effect is the influx of negative energy, and the Hawking flux is not carried by particles that exist, as such, there; the particle interpretation emerges only a few Schwarzschild radii out. Every discussion of backreaction starts from this picture (Section [5.6](/research/hawking-radiation-review/section-5#56-backreaction-and-the-end-point)).

Moving mirrors in two-dimensional flat spacetime provide a closely related model. Fulling and Davies (1976) showed that a perfectly reflecting mirror whose trajectory approaches a null line exponentially, in the manner of Eq. (3.2), produces a thermal flux (Problem 4). The mirror reproduces the kinematics of collapse without any curvature. Carlitz and Willey (1987) later used mirror trajectories to study how correlations in the radiation can restore the purity of the final state, and moving mirrors remain a useful laboratory for questions about information.

## 4.4 Tunnelling and anomalies

Two further derivations are shorter and less fundamental. In the tunnelling picture the emission rate is set by the imaginary part of the action of a particle crossing the horizon along a classically forbidden path. Srinivasan and Padmanabhan (1999) obtained the temperature from a complex-path analysis of the Hamilton–Jacobi equation. Parikh and Wilczek (2000) used coordinates regular across the horizon and imposed energy conservation on an outgoing s-wave shell of energy $\omega$, so that the mass falls from $M$ to $M - \omega$. They found

$$
\Gamma \sim e^{-2\,\mathrm{Im}\,S} = \exp\!\left[-8\pi\omega\left(M - \frac{\omega}{2}\right)\right] = e^{\Delta{S_{\mathrm{BH}}}},
\tag{4.4}
$$

where $\Delta{S_{\mathrm{BH}}} = 4\pi[(M-\omega)^{2} - M^{2}]$ is the change in the Bekenstein–Hawking entropy. To leading order in $\omega/M$ this is the Boltzmann factor $e^{-\omega/{T_{\mathrm{H}}}}$; the correction is the backreaction of the emitted quantum on the black hole. Writing the rate as $e^{\Delta{S_{\mathrm{BH}}}}$ suggests a reading in terms of the number of black hole microstates.

> **Remark 4.2.**
>
> The tunnelling picture is suggestive but, as usually presented, not a derivation. Done naively in Schwarzschild coordinates, with only the spatial part of the action, it gives twice the Hawking temperature (Problem 3). The correct value is recovered by normalising to the absorption probability, by adding a contribution from the time coordinate, or by using coordinates regular at the horizon. In every version the $i\epsilon$ prescription is a choice of how to continue across the horizon, and that is where regularity of the state enters, unannounced. Even then the method yields a Boltzmann factor for a single quantum, not a spectrum or a state.

Robinson and Wilczek (2005) proposed a derivation based on gravitational anomalies. Near the horizon a field theory on the black hole background reduces to an infinite collection of two-dimensional fields. If the ingoing modes, which classically cannot affect the exterior, are integrated out, the effective theory of the outgoing modes becomes chiral and has a gravitational anomaly. Requiring that general covariance be restored in the full theory fixes the outgoing energy flux to be exactly Eq. (4.3). Iso et al. (2006) extended the argument to charged black holes, where the gauge anomaly fixes the charge flux in the same way. The link with anomaly cancellation is neat, but regularity at the future horizon again enters as a boundary condition, and what comes out is the energy flux, not the spectrum.

## 4.5 Rigorous results and universality

Hawking's result was placed on a rigorous footing soon after its publication by Wald (1975) and Parker (1975), who showed that the late-time radiation is described by an exactly thermal density matrix (Section [3.5](/research/hawking-radiation-review/section-3#35-the-state-of-the-radiation)). Fredenhagen and Haag (1990) derived the effect within algebraic quantum field theory. They showed that the late-time flux follows from the assumption that the state is of Hadamard form near the horizon during the collapse, whatever the further details of the initial state.

A related programme asks for the minimal geometrical conditions, following the hint of Remark 3.1. Visser (2003) argued that Hawking radiation is fundamentally kinematical: it requires a Lorentzian geometry with an (apparent) horizon and a well-defined surface gravity, together with a quantum field in a suitable state, but not the Einstein equations, nor a global event horizon, nor the identification of entropy with area. Unruh and Schützhold (2005) showed that the effect survives modifications of the dispersion relation at short wavelengths, under conditions discussed in Lecture [6](/research/hawking-radiation-review/section-6). Barceló et al. (2011a) identified the essential ingredient as the exponential “peeling” of outgoing null rays, Eq. (3.2), maintained for a sufficiently long time. Objects that approach but never form a horizon can then emit Hawking-like radiation for a while, whereas a horizon that forms without adiabatic peeling need not radiate thermally.

The derivations of Table 4 have two inputs in common: exponential peeling at the rate $\kappa$, and a state that looks like the vacuum at short distances across the horizon. Three of them are worth carrying around: Hawking's calculation, because it derives the regularity instead of assuming it; the Unruh–Tolman argument of Section [3.4](/research/hawking-radiation-review/section-3#34-a-heuristic-derivation-from-the-unruh-effect), because it shows in one line where the temperature comes from; and the Euclidean argument, because it is the fastest. The rest are best read as checks, or as tools for particular questions.

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

## Problems

1. _Euclidean temperature of a static horizon._ For ${\mathrm{d}} s^{2} = -f(r)\,{\mathrm{d}} t^{2} + {\mathrm{d}} r^{2}/f(r) + r^{2}{\mathrm{d}}\Omega^{2}$ with a simple zero of $f$ at $r_{\mathrm{h}}$, show that regularity of the Euclidean section at $r = r_{\mathrm{h}}$ requires $\tau \sim \tau + 4\pi/|f'(r_{\mathrm{h}})|$, so that $T = |f'(r_{\mathrm{h}})|/4\pi$. (Hint: set $r - r_{\mathrm{h}} = f'(r_{\mathrm{h}})\rho^{2}/4$.) Apply the result to the static patch of de Sitter space, $f = 1 - H^{2}r^{2}$, and show that $T = H/2\pi$.

2. _One-dimensional black bodies._ Show that a single right-moving massless boson at temperature $T$ carries the energy flux $\pi T^{2}/12$, and that a single right-moving massless fermion carries $\pi T^{2}/24$. (Use $\int_{0}^{\infty}x\,{\mathrm{d}} x/(e^{x} - 1) = \pi^{2}/6$ and $\int_{0}^{\infty}x\,{\mathrm{d}} x/(e^{x} + 1) = \pi^{2}/12$.) Verify that the first, with $T = \kappa/2\pi$, reproduces Eq. (4.3).

3. _The factor of two in tunnelling._ An outgoing massless s-wave in Schwarzschild coordinates has $S = -\omega t + W(r)$ with ${\mathrm{d}} W/{\mathrm{d}} r = \omega/f$. Passing the pole at $r = 2M$ with the prescription $r - 2M \to r - 2M - i\epsilon$, show that $\mathrm{Im}\,W_{\mathrm{out}} = 2\pi M\omega$, and that identifying the emission probability with $e^{-2\,\mathrm{Im}\,W_{\mathrm{out}}}$ would give the temperature $2{T_{\mathrm{H}}}$. With the same prescription an ingoing wave, ${\mathrm{d}} W/{\mathrm{d}} r = -\omega/f$, has $\mathrm{Im}\,W_{\mathrm{in}} = -2\pi M\omega$. Show that the ratio of emission and absorption probabilities, $e^{-2\,\mathrm{Im}\,W_{\mathrm{out}}}/e^{-2\,\mathrm{Im}\,W_{\mathrm{in}}}$, is the Boltzmann factor at ${T_{\mathrm{H}}}$.

4. _A thermal mirror._ For a mirror in two-dimensional Minkowski spacetime, an incoming ray at advanced time $v$ is reflected into the outgoing ray at retarded time $u$ with $v = p(u)$, and in the in-vacuum the reflected flux is $\langle T_{uu}\rangle = (1/24\pi)\left[\tfrac{3}{2}(p''/p')^{2} - p'''/p'\right]$. Show that the trajectory $p(u) = v_{0} - C\,e^{-\kappa u}$, the analogue of Eq. (3.2), gives exactly $\kappa^{2}/48\pi$ at all $u$. Show also that a mirror moving with constant velocity, for which $p$ is linear in $u$, radiates nothing.

5. _Which state is unique?_ Identify the state of Table 3 to which the theorem of Kay and Wald (1991) applies on the extended Schwarzschild spacetime. Explain why the Unruh state, which is stationary and regular on the future horizon, does not contradict the uniqueness, and why its failure on the past horizon is harmless for a black hole formed by collapse.

## Notes and further reading

The short paper of Gibbons and Hawking (1977a) is the one to read first: the Euclidean argument and the entropy calculation take a few pages and have hardly been improved on. Kay and Wald (1991) is long and mathematically demanding, but the statements of its main theorems can be understood without the proofs, and the reader who wants to know exactly what “thermal” means for the states of Table 3 should study at least those. Birrell and Davies (1982) treat the stress-energy tensor in two dimensions, including the moving-mirror formula of Problem 4, in more detail than we have done; the original computation of Davies et al. (1976) is brief and still readable.

For the question of what is essential, Visser (2003) is a clear statement of the kinematical view and Barceló et al. (2011a) sharpens it into precise conditions on the peeling of null rays. Both are good preparation for the discussion of analogue systems in Lecture [8](/research/hawking-radiation-review/section-8).

[^1]: The condition, due to Kubo and to Martin and Schwinger in the late 1950s, characterises equilibrium by an analyticity property of correlation functions in complex time. It makes sense even when no Gibbs density matrix exists.

[^2]: The solution is Ricci-flat, so the Einstein–Hilbert term vanishes and the whole action comes from the boundary term at large radius, after subtraction of the flat-space value.

[^3]: The observation acquired new importance with the holographic description of the eternal AdS black hole (Section [7.8](/research/hawking-radiation-review/section-7#78-holography-and-quantum-extremal-surfaces)).
