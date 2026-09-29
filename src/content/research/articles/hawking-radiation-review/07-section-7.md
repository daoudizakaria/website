---
slug: hawking-radiation-review/section-7
title: "Black hole entropy and the information problem"
date: 2024-12-01
summary: "What the Bekenstein–Hawking entropy counts, the information problem and the Page curve, complementarity and the firewall paradox, and the recent derivations of the Page curve from islands and replica wormholes."
series: hawking-radiation-review
part: section-7
order: 7
kicker: "Section 7"
---
The discovery of Hawking radiation raised two deep questions. The first is what the Bekenstein–Hawking entropy counts. The second, which Hawking himself formulated a year after his original paper, is what happens to the quantum information that falls into a black hole that subsequently evaporates. In this section we take the two questions in turn, devoting most of the space to the second, which has driven a large part of the research in quantum gravity over the last five decades.

## 7.1 What does the entropy count?

In ordinary statistical mechanics the entropy is the logarithm of the number of microstates compatible with the macroscopic state. If the same holds for black holes, a black hole of mass comparable to that of the Sun must have $e^{10^{77}}$ microstates, and a complete theory of quantum gravity should account for them.

The first quantitative account was obtained in string theory by Strominger and Vafa (1996), who counted the bound states of D-branes carrying the same charges as a class of five-dimensional extremal black holes and reproduced $A/4$ exactly, including the numerical coefficient. The programme was rapidly extended to near-extremal black holes, which have a small but non-zero Hawking temperature. Callan and Maldacena (1996) showed that the emission of closed strings by excited D-brane configurations reproduces the qualitative features of Hawking radiation, Das and Mathur (1996) showed that the emission rates agree with the semiclassical Hawking rates, and Maldacena and Strominger (1997) showed that the agreement extends to the greybody factors. In these settings Hawking emission is therefore reproduced by a manifestly unitary microscopic process, although the results are restricted to black holes close to extremality and, in most cases, to supersymmetric theories.

Other approaches have also produced state counts proportional to the area. In loop quantum gravity, Rovelli (1996) and Ashtekar et al. (1998) obtained an entropy proportional to the horizon area from the counting of quantum geometry states, with a coefficient that depends on the Barbero–Immirzi parameter, whose value is then fixed by requiring agreement with $A/4$. Independently of any specific theory of quantum gravity, Bombelli et al. (1986) and Srednicki (1993) showed that the entanglement entropy of a quantum field across a surface scales with the area of the surface, with a coefficient that depends on the ultraviolet cutoff. This suggests that at least part of the black hole entropy may be understood as entanglement between the interior and the exterior, a theme to which we shall return in Section [7.7](#77-holography-quantum-extremal-surfaces-and-islands); the relation between the two, including the renormalisation of Newton's constant, has been reviewed by Solodukhin (2011). Finally, for gravitational theories with higher-curvature corrections, the appropriate generalisation of ${S_{\mathrm{BH}}}$ is given by the Noether charge formula of Wald (1993).

## 7.2 Formulating the information problem

The argument of Hawking (1976) can be stated in a few lines using the results of Section [3.5](/research/hawking-radiation-review/section-3#35-the-state-of-the-radiation). Suppose that a black hole forms from matter in a pure quantum state. According to Eq. (3.8), each outgoing Hawking quantum is entangled with a partner inside the black hole, and the radiation, considered on its own, is in an exactly thermal mixed state. As long as the black hole exists, there is no contradiction: the joint state of the radiation and the black hole interior is pure. If, however, the black hole evaporates completely, the partners disappear with it, and the final state consists of thermal radiation alone. The evolution would then take a pure state to a mixed state, which is impossible under unitary quantum evolution. Hawking concluded that the $S$-matrix of quantum gravity must be replaced by a more general “superscattering” operator that maps density matrices to density matrices, with a fundamental loss of information.

It is useful to state the tension as an incompatibility between three principles, each of which is well supported on its own:

(i) the validity of semiclassical physics and of the equivalence principle near the horizon of a large black hole, where the curvature is small;

(ii) the unitarity of quantum evolution, as seen by observers who remain outside the black hole;

(iii) the locality of effective field theory, which forbids information from being in two places at once and from propagating outside the light cone.

Hawking's argument uses (i) and (iii) to derive the violation of (ii). The proposed resolutions of the problem can be classified according to which of the three principles they modify.

## 7.3 The Page curve

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

## 7.4 Why small corrections do not help

One might hope that small corrections to Hawking's calculation, arising for instance from interactions or from quantum gravitational effects, could accumulate over the long evaporation time and purify the radiation. Mathur (2009) showed that this hope is unfounded. Using the strong subadditivity of entanglement entropy, he proved that if the state of each newly created pair deviates from the Hawking state (3.8) only by a small amount $\epsilon$, the entanglement entropy of the radiation continues to increase at each step by an amount of order unity minus a correction of order $\epsilon$. Restoring unitarity therefore requires corrections of order unity to the state of the Hawking pairs, that is, a non-perturbative departure from the semiclassical description of the horizon region, or else the abandonment of one of the other principles listed in Section [7.2](#72-formulating-the-information-problem).

## 7.5 Complementarity and the firewall paradox

The principle of black hole complementarity (Susskind et al., 1993) attempts to reconcile the three principles by limiting the scope of (iii). From the perspective of an external observer, information that falls in is absorbed by a “stretched horizon” located roughly a Planck length outside the event horizon, thermalised, and eventually re-emitted in the radiation. From the perspective of an infalling observer, nothing unusual happens at the horizon, and the information passes into the interior. Each description is consistent on its own, and although the information appears to be duplicated, no single observer can verify both copies, so that the duplication is argued to be operationally harmless.

Almheiri et al. (2013) showed that complementarity, in this form, is inconsistent. Their argument is short enough to reproduce. Consider an old black hole, past its Page time, and denote by $R$ the early radiation, by $B$ a late outgoing Hawking mode just outside the horizon, and by $\tilde{B}$ its partner mode just inside. Three conditions follow from the principles of Section [7.2](#72-formulating-the-information-problem).

(a) Unitarity: since the black hole is past its Page time, emitting $B$ decreases the entropy of the radiation, so that $S(RB) < S(R)$.

(b) Smoothness of the horizon: an infalling observer sees the vacuum, which requires $B$ and $\tilde{B}$ to be in the pure entangled state (3.8), so that $S(B\tilde{B}) = 0$ and hence $S(RB\tilde{B}) = S(R)$.

(c) Thermality: the mode $B$ on its own is thermally populated, so that $S(B) > 0$.

The strong subadditivity inequality $S(RB) + S(B\tilde{B}) \geq S(B) + S(RB\tilde{B})$, combined with (b), gives $S(RB) \geq S(B) + S(R) > S(R)$ by (c), which contradicts (a). In words, the late mode $B$ cannot be maximally entangled both with its partner and with the early radiation, a property known as the monogamy of entanglement. Almheiri et al. (2013) concluded that the most conservative option is to give up (b): an infalling observer would encounter a “firewall” of high-energy quanta at the horizon of an old black hole. A closely related argument was given independently by Braunstein et al. (2013).

## 7.6 Proposed resolutions

The firewall argument stimulated a large literature, of which we can mention only the main lines. The first possibility is that information is genuinely lost, as Hawking originally proposed; this position has been defended by Unruh and Wald (2017), who argue that information loss is a natural consequence of the causal structure of an evaporating black hole spacetime rather than a paradox. The second is that the information remains inside a long-lived or stable remnant (Section [5.6](/research/hawking-radiation-review/section-5#56-backreaction-and-the-end-point)). Most of the recent literature has explored the third possibility, that the information is returned in the radiation. Within it, Maldacena and Susskind (2013) proposed that entangled systems are connected by non-traversable wormholes, so that the entanglement between the late mode and the early radiation can be understood geometrically in a way that avoids the firewall. The fuzzball proposal (Mathur, 2005) holds that in string theory the black hole interior is replaced by horizon-scale structure, so that the semiclassical geometry does not describe individual microstates. Hawking et al. (2016) proposed that the soft charges associated with asymptotic symmetries endow black holes with “soft hair” that can store information; whether this mechanism can account for the full information content of a black hole remains under debate. Comprehensive reviews of this period are given by Harlow (2016), Polchinski (2017), and Marolf (2017).

## 7.7 Holography, quantum extremal surfaces, and islands

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

## 7.8 Assessment

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
