---
slug: hawking-radiation-review/section-7
title: "Black hole entropy and information"
date: 2024-12-01
summary: "What the entropy counts, Hawking's argument for information loss, the Page curve, the firewall paradox, and the island calculations that reproduce the Page curve."
series: hawking-radiation-review
part: section-7
order: 7
kicker: "Lecture 7"
---
A black hole of one solar mass has a Bekenstein–Hawking entropy ${S_{\mathrm{BH}}} = 4\pi M^{2} \approx 10^{77}$. The Sun has a thermal entropy of roughly $10^{58}$. Collapse to a black hole would therefore raise the entropy of a star by some nineteen orders of magnitude, and if ${S_{\mathrm{BH}}}$ is a statistical entropy in the ordinary sense, the black hole has of order $e^{10^{77}}$ microstates. Hawking's calculation fixed the coefficient in $S = A/4$ and left two questions behind. The first is what those states are. The second, which Hawking himself posed a year later, is what becomes of the information carried by matter that falls into a black hole which then evaporates. The second has occupied quantum gravity for five decades, and it takes up most of this lecture.

## 7.1 What the entropy counts

The first precise count of black hole microstates came from string theory. Strominger and Vafa (1996) considered a class of extremal black holes in five dimensions carrying three charges. At weak string coupling the same charges are carried by bound states of $Q_{1}$ D1-branes and $Q_{5}$ D5-branes with $N$ units of momentum along a common circle, and the number of supersymmetric bound states grows, for large charges, as $e^{2\pi\sqrt{Q_{1}Q_{5}N}}$. At strong coupling the same system is a black hole with $A/4 = 2\pi\sqrt{Q_{1}Q_{5}N}$, numerical coefficient included. The match is possible because supersymmetry protects the number of states as the coupling is varied.

The programme was soon extended to near-extremal black holes, which have a small Hawking temperature. Callan and Maldacena (1996) showed that excited D-brane configurations emit closed strings with the qualitative features of Hawking radiation, Das and Mathur (1996) that the rates agree with the semiclassical ones, and Maldacena and Strominger (1997) that the agreement extends to the greybody factors. In these settings Hawking emission is the decay of excited open strings on the branes into closed strings, a manifestly unitary process. The results are restricted to black holes close to extremality, mostly in supersymmetric theories; none applies directly to Schwarzschild.

In loop quantum gravity, Rovelli (1996) and Ashtekar et al. (1998) counted quantum geometry states of the horizon and obtained an entropy proportional to $A$, with a coefficient that depends on the Barbero–Immirzi parameter. Fixing that parameter by demanding $A/4$ calibrates the theory rather than predicting the coefficient, although the value so fixed then serves for the whole class of non-rotating horizons treated by Ashtekar et al. (1998).

A third idea needs no theory of quantum gravity at all. Bombelli et al. (1986) and Srednicki (1993) showed that the vacuum entanglement entropy of a quantum field across a surface of area $A$ behaves as $\kappa A/\epsilon^{2}$, with $\epsilon$ an ultraviolet cutoff and $\kappa$ a non-universal number. With $\epsilon$ of order the Planck length this is of order ${S_{\mathrm{BH}}}$, which suggests that part of the black hole entropy is entanglement between interior and exterior; the dependence on $\kappa$ shows that this is not yet a derivation. The cleaner statement, reviewed by Solodukhin (2011), is that the same divergences renormalise Newton's constant, so that the entanglement of the fields and the bare term $A/4G_{\mathrm{bare}}$ combine into $A/4G$. We return to entanglement and area in Section [7.8](#78-holography-and-quantum-extremal-surfaces). With higher-curvature terms in the action, finally, $A/4$ is replaced by the Noether charge entropy of Wald (1993).

## 7.2 Hawking's argument

The argument of Hawking (1976) takes a few lines given the state (3.8) of Lecture [3](/research/hawking-radiation-review/section-3). Suppose that a black hole forms from matter in a pure quantum state. Each outgoing Hawking quantum is entangled with a partner inside, and the radiation on its own is in an exactly thermal mixed state. While the black hole exists, the joint state of radiation and interior is pure. If the black hole evaporates completely, however, the partners disappear with it and the final state consists of thermal radiation alone. The evolution would then take a pure state to a mixed one, which no unitary evolution can do. Hawking concluded that the $S$-matrix of quantum gravity must be replaced by a “superscattering” operator mapping density matrices to density matrices, with a fundamental loss of information.[^1]

It helps to state the tension as an incompatibility between three principles, each well supported on its own. Principle (i) is the validity of semiclassical physics and of the equivalence principle near the horizon of a large black hole, where the curvature is of order $1/M^{2}$ and nothing locally distinguishes the horizon from any other null surface. Principle (ii) is unitarity, as seen by observers who stay outside. Principle (iii) is the locality of effective field theory, which forbids information from being in two places at once or from travelling outside the light cone. Hawking's argument uses (i) and (iii) to derive the violation of (ii). Every proposed resolution can be classified by which of the three it modifies, and the reader should ask this of each proposal.

A student who first meets the argument often locates the difficulty at the very end of the evaporation, when the black hole reaches the Planck scale and semiclassical physics fails anyway. Page's analysis shows that this is wrong: the conflict appears when the black hole is still large.

## 7.3 Page's theorem and the Page curve

Page (1993a) began with a result about random pure states. Choose a pure state at random (with the unitarily invariant measure) on a Hilbert space $\mathcal{H}_{A}\otimes\mathcal{H}_{B}$ of dimensions $m \leq n$. The average entanglement entropy of the smaller subsystem is

$$
\langle S_{A}\rangle \simeq \ln m - \frac{m}{2n},
\tag{7.1}
$$

which lies within half a unit of its maximum value $\ln m$.[^2] For ten qubits inside a typical pure state of 110 qubits, $m = 2^{10}$ and $n = 2^{100}$, and the entropy falls short of $10\ln 2$ by $2^{-91}$. A small subsystem of a typical pure state is very nearly maximally mixed and carries almost no information about the whole. Problem 1 derives a weaker bound of the same type.

Page (1993b) then applied the theorem to evaporation. Suppose that evaporation is unitary and that the joint state of black hole and radiation behaves like a typical pure state. Early on, the radiation is the smaller subsystem and its entropy grows, as in Hawking's calculation. Once more than half of the degrees of freedom have been emitted, the black hole is the smaller subsystem, and the entropy of the radiation must equal that of the black hole, which is decreasing. The entropy of the radiation therefore rises and then falls back to zero. This is the Page curve; its maximum is at the Page time. The information problem can now be put sharply: a unitary theory must reproduce the Page curve, and the semiclassical calculation does not.

The curve is easy to estimate. Since ${S_{\mathrm{BH}}} \propto M^{2}$, Eq. (5.4) gives ${S_{\mathrm{BH}}}(t) = S_{0}(1 - t/\tau)^{2/3}$. Emission into empty space is irreversible, so the coarse-grained entropy of the emitted radiation exceeds the decrease of ${S_{\mathrm{BH}}}$ by a factor $\beta > 1$, which Page (2013) estimated to be approximately 1.5 for a black hole emitting photons and gravitons. In Hawking's calculation the entropy of the radiation is this coarse-grained entropy, $S_{\mathrm{Hawking}}(t) = \beta[S_{0} - {S_{\mathrm{BH}}}(t)]$, whereas unitarity bounds the fine-grained entropy of the radiation by that of the black hole. The Page curve is therefore approximately

$$
S_{\mathrm{Page}}(t) \simeq \min\left\{\beta\left[S_{0} - {S_{\mathrm{BH}}}(t)\right],\; {S_{\mathrm{BH}}}(t)\right\}.
\tag{7.2}
$$

The two branches cross when ${S_{\mathrm{BH}}}/S_{0} = \beta/(1 + \beta) \approx 0.6$, that is, at $t_{\mathrm{Page}} \approx 0.54\,\tau$. At that moment the black hole has lost only about a quarter of its initial mass. For a solar-mass black hole this is some $10^{67}$ years after formation, and the horizon is still kilometres across. The three curves are shown in Fig. 2.

![Entropy of the Hawking radiation against time for a black hole of lifetime τ and initial entropy S₀, from Eq. (7.2) with β = 1.48. In Hawking's calculation (dashed) the entropy of the radiation grows until the end of the evaporation. Unitarity requires the fine-grained entropy to follow the Page curve (solid), which turns over at the Page time and returns to zero.](/uploads/research/hawking-page-curve.png "Figure 2: Entropy of the Hawking radiation against time for a black hole of lifetime τ and initial entropy S₀, from Eq. (7.2) with β = 1.48. In Hawking's calculation (dashed) the entropy of the radiation grows until the end of the evaporation. Unitarity requires the fine-grained entropy to follow the Page curve (solid), which turns over at the Page time and returns to zero.")

> **Remark 7.1.**
>
> The Page curve is not derived from any dynamics: it is what unitarity plus typicality demands, and it concerns the fine-grained (von Neumann) entropy of the radiation. The coarse-grained entropy keeps growing until the end in any account. The descending branch does not mean that late radiation looks less thermal. Each quantum looks as thermal as before; correlations among many quanta purify the whole.

Page's analysis also shows how well information can be hidden. Before the Page time essentially nothing about the initial state can be extracted from the radiation, even if the evaporation is unitary, and afterwards the information sits in correlations among very many quanta. No experiment on a few Hawking quanta can test unitarity.

## 7.4 Old black holes as mirrors

Hayden and Preskill (2007) added a twist. Model the black hole dynamics as a fast random unitary transformation, and take a black hole past its Page time, maximally entangled with the earlier radiation. Throw in a diary of $k$ qubits. An observer who holds the early radiation, and knows the dynamics, can reconstruct the diary from only slightly more than $k$ qubits of subsequent radiation, after a time of order the scrambling time

$$
t_{*} \sim \frac{1}{2\pi{T_{\mathrm{H}}}}\ln{S_{\mathrm{BH}}} = 4M\ln{S_{\mathrm{BH}}},
\tag{7.3}
$$

which is of order $M\ln M$. The old black hole behaves as an information mirror. The scrambling time is short: for a solar-mass black hole it is a few milliseconds (Problem 4).

## 7.5 Why small corrections do not help

The natural first hope is that small corrections to Hawking's calculation accumulate over the $10^{77}$ or so emissions and purify the radiation. Mathur (2009) showed that this hope is unfounded, by an argument short enough to give in full.

Treat the evaporation as a sequence of steps, at each of which a new pair is created near the horizon: an outgoing quantum $b$, which joins the radiation, and its partner $c$, which remains inside. Model each by a qubit, so that at leading order the pair is in a maximally entangled state, the qubit version of Eq. (3.8): then $S(bc) = 0$ and $S(b) = \ln 2$. Let $R$ be the radiation emitted earlier. The entropy of the radiation changes from $S(R)$ to $S(Rb)$, and the Page curve requires $S(Rb) < S(R)$ after the Page time.

The tool is strong subadditivity, which holds for any state of any three systems $X$, $Y$, $Z$:[^3]

$$
S(XY) + S(YZ) \geq S(Y) + S(XYZ).
\tag{7.4}
$$

Take $X = R$, $Y = b$, $Z = c$, and allow the new pair to deviate from the Hawking state, by assuming only that $S(bc) \leq \epsilon$. The Araki–Lieb inequality gives $S(Rbc) \geq S(R) - S(bc)$, and substituting into Eq. (7.4) yields

$$
S(Rb) \geq S(R) + S(b) - 2S(bc) \geq S(R) + \ln 2 - 2\epsilon.
\tag{7.5}
$$

The entropy of the radiation grows by at least $\ln 2 - 2\epsilon$ at every step. Letting $S(b)$ shift by order $\epsilon$ changes only the coefficient of $\epsilon$; Mathur's theorem, with $\epsilon$ measuring the deviation of the pair state from the Hawking state, has the same form. For the entropy to decrease we need $S(bc) > \tfrac{1}{2}S(b)$: an order-one change in the state of each pair.

Accumulation does not help because the bound (7.5) holds at every step, whatever came before. Small corrections can make the entropy grow a little more slowly, never turn it over. Restoring unitarity requires an order-one departure from the semiclassical state of the horizon region, which abandons (i), or the abandonment of another principle of Section [7.2](#72-hawkings-argument).

## 7.6 Complementarity and the firewall paradox

Black hole complementarity (Susskind et al., 1993) tries to keep all three principles by limiting the scope of (iii). For an external observer, information that falls in is absorbed by a “stretched horizon”, roughly a Planck length outside the event horizon, thermalised there, and re-emitted in the radiation. For an infalling observer nothing happens at the horizon and the information passes into the interior. Each description is consistent on its own, and no single observer can see both copies, so the duplication is held to be harmless. Given the Hayden–Preskill time, an observer who decodes the diary and then jumps in could receive the interior copy only if it were sent to her in quanta of roughly Planckian energy. Complementarity survives, but only just.

Almheiri et al. (2013) showed that complementarity, in this form, is nonetheless inconsistent.[^4] Consider an old black hole, past its Page time. Let $R$ be the early radiation, $B$ a late outgoing Hawking mode just outside the horizon, and $\tilde{B}$ its partner just inside. Three conditions follow from the principles of Section [7.2](#72-hawkings-argument).

(a) Unitarity: since the black hole is past its Page time, emitting $B$ decreases the entropy of the radiation, so that $S(RB) < S(R)$.

(b) Smoothness of the horizon: an infalling observer sees the vacuum, which requires $B$ and $\tilde{B}$ to be in the pure entangled state (3.8), so that $S(B\tilde{B}) = 0$ and hence $S(RB\tilde{B}) = S(R)$.

(c) Thermality: the mode $B$ on its own is thermally populated, so that $S(B) > 0$.

Strong subadditivity (7.4) in the form $S(RB) + S(B\tilde{B}) \geq S(B) + S(RB\tilde{B})$, combined with (b), gives $S(RB) \geq S(B) + S(R) > S(R)$ by (c), contradicting (a). This is Eq. (7.5) with $\epsilon = 0$, read as a contradiction rather than a growth law. In words, $B$ cannot be fully entangled both with its partner and with the early radiation; entanglement is monogamous. Complementarity does not evade this, because one infalling observer could in principle check the entanglement of $B$ with $R$ before crossing the horizon and with $\tilde{B}$ after. Almheiri et al. (2013) concluded that the most conservative option is to give up (b): an infalling observer would meet a “firewall” of high-energy quanta at the horizon of an old black hole. A closely related argument was given independently by Braunstein et al. (2013).

Not everyone accepts that the check can be performed: distilling the relevant qubit from $R$ appears to take a time exponential in ${S_{\mathrm{BH}}}$ (see Harlow, 2016). Whether such computational limits save the smooth horizon is unsettled.

## 7.7 Proposed resolutions

The firewall argument stimulated a large literature, best organised by the principle each proposal gives up. The most direct option abandons (ii): information is genuinely lost, as Hawking originally proposed. Unruh and Wald (2017) defend this position, arguing that loss follows naturally from the causal structure of an evaporating black hole spacetime. Remnants (Lecture [5](/research/hawking-radiation-review/section-5)) keep unitarity at the price of an object of roughly Planck mass with of order $e^{S_{0}}$ internal states, a degeneracy that most authors consider hard to reconcile with effective field theory (Chen et al., 2015).

Most of the recent literature assumes that the information comes out in the radiation and asks what replaces (i) or (iii). Maldacena and Susskind (2013) proposed that entangled systems are connected by non-traversable wormholes, so that $\tilde{B}$ and part of $R$ are, in a sense, the same degrees of freedom; this weakens (iii) in a precise way. The fuzzball proposal (Mathur, 2005) instead gives up (i): in string theory the interior of a black hole is replaced by horizon-scale structure, and the semiclassical geometry does not describe individual microstates. Hawking et al. (2016) proposed that the soft charges of asymptotic symmetries endow black holes with “soft hair” that can store information; whether it can carry the full information content is debated. The literature of this period is reviewed by Harlow (2016), Polchinski (2017) and Marolf (2017), who agree on the logic of the problem more than on its solution.

## 7.8 Holography and quantum extremal surfaces

The AdS/CFT correspondence (Maldacena, 1998) defines quantum gravity in asymptotically AdS spacetimes non-perturbatively, in terms of a conformal field theory on the boundary whose evolution is manifestly unitary. Black hole formation and evaporation in the bulk is then unitary. Hawking (2005) himself came to accept this, arguing that late-time Euclidean amplitudes are dominated by topologically trivial geometries, whose contribution is unitary.[^5] For many years, however, nobody could say where Hawking's calculation goes wrong. The answer, in so far as we have one, came from holographic entanglement entropy.

Ryu and Takayanagi (2006) proposed that the entanglement entropy of a region of the boundary theory equals the area, in units of $4G$, of the minimal bulk surface anchored on the boundary of the region. This is the Bekenstein–Hawking formula applied to a surface that is not a horizon. Hubeny et al. (2007) extended the proposal to time-dependent geometries, and Faulkner et al. (2013) computed the first quantum correction, which is the entropy of the bulk quantum fields in the region bounded by the surface. Engelhardt and Wall (2015) then proposed that the correct prescription to all orders in $G$ is obtained by extremising the generalised entropy,

$$
S(R) = \min_{X}\,\operatorname*{ext}_{X}\left[\frac{A(X)}{4G} + S_{\mathrm{bulk}}(\Sigma_{X})\right],
\tag{7.6}
$$

where $X$ is a codimension-two surface homologous to the boundary region $R$ and $\Sigma_{X}$ is the bulk region between $X$ and $R$. The extremising surface is the quantum extremal surface. The order matters: one extremises first and, if there are several extrema, takes the smallest.

## 7.9 Islands and replica wormholes

Penington (2020) and Almheiri et al. (2019) applied Eq. (7.6) to an AdS black hole made to evaporate by coupling the boundary theory to a non-gravitating bath. The bath is essential: with reflecting boundary conditions, AdS returns the radiation to the black hole.

There are two candidate quantum extremal surfaces. The first is the empty surface. Its area term vanishes, and the generalised entropy is that of the bulk fields, which grows as radiation accumulates in the bath, as in Hawking's result. The second is a non-trivial surface just inside the event horizon. Its area term is approximately ${S_{\mathrm{BH}}}$, while its bulk term is small because the region it bounds contains most of the partners of the emitted quanta. The first candidate is smaller at early times and the second at late times, and the minimisation in Eq. (7.6) switches between them at the Page time. The result is the Page curve, now computed rather than assumed. The non-trivial surface also lags behind the current time by about one scrambling time (7.3), and through entanglement wedge reconstruction this reproduces the Hayden–Preskill recovery time: after the Page time, the interior is encoded in the radiation rather than in the black hole.

Almheiri et al. (2020b) reformulated the result as a rule for the entropy of the radiation itself,

$$
S(\mathrm{Rad}) = \min_{I}\,\operatorname*{ext}_{I}\left[\frac{A(\partial I)}{4G} + S_{\mathrm{bulk}}(\mathrm{Rad}\cup I)\right],
\tag{7.7}
$$

in which the region $I$, called an island, lies in the gravitating region and, after the Page time, contains most of the black hole interior. The interior partners of the Hawking quanta are, in this precise sense, part of the radiation. Almheiri et al. (2020b) computed the resulting Page curve explicitly in two-dimensional Jackiw–Teitelboim gravity coupled to conformal matter, where the role of the area is played by the value of the dilaton.

The formula (7.7) was first guessed. Its derivation uses the replica trick, $S = -\partial_{n}\,\mathrm{tr}\,\rho^{n}\big|_{n=1}$, with $\mathrm{tr}\,\rho^{n}$ evaluated by a gravitational path integral over $n$ copies of the geometry glued along the radiation. Almheiri et al. (2020a) and Penington et al. (2022) showed that this path integral has saddle points in which the replicas are connected through the black hole interior. Schematically, for integer $n > 1$, the disconnected saddle contributes $e^{-(n-1)S_{\mathrm{Hawking}}}$ to $\mathrm{tr}\,\rho^{n}$ and the connected one $e^{-(n-1){S_{\mathrm{BH}}}}$. Whichever entropy is smaller gives the larger term and dominates, and the minimum in Eq. (7.2) follows. These “replica wormholes” dominate after the Page time; Hawking's calculation is the disconnected saddle alone. Penington et al. (2022) also showed, in a simple model, how the interior can be reconstructed from the radiation. As reviewed by Almheiri et al. (2021), the semiclassical gravitational path integral, with all its saddles, already yields the Page curve.

> **Remark 7.2.**
>
> Replica wormholes leave the state of individual Hawking pairs, and low-point correlators of the radiation, essentially unchanged; they affect quantities such as $\mathrm{tr}\,\rho^{n}$ that involve very many quanta. This is how the calculation escapes Eq. (7.5). That bound treats $R$ and the interior partners as independent tensor factors; in the island picture the partners are, after the Page time, encoded in $R$.

## 7.10 Assessment

These results are widely regarded as the most significant advance on the problem since its formulation, and a student should know exactly what they establish. In specific models, mostly two-dimensional gravity or AdS black holes coupled to a non-gravitating bath, the gravitational path integral with all its saddles computes a fine-grained entropy of the radiation that follows the Page curve. That much is a calculation, and within those models it is not seriously disputed.

Several things are not established. The calculations rely on low-dimensional models or on a bath, and Geng and Karch (2020) have argued that in higher-dimensional versions the graviton acquires a mass, which makes the extension to ordinary gravity less direct. Island computations for four-dimensional asymptotically flat black holes exist but rest on further assumptions. The calculation yields an entropy, not the mechanism by which information reaches the Hawking quanta. Nor does it settle what an infalling observer meets at the horizon of an old black hole: many read entanglement wedge reconstruction as support for a smooth horizon, others as a precise form of complementarity that leaves the firewall question open. Spacetime wormholes also raise the question of whether the gravitational path integral describes a single quantum system or an ensemble, a question tied to the duality between Jackiw–Teitelboim gravity and a random matrix ensemble (Saad et al., 2019). Raju (2022) reviews these issues critically and argues that, because of the gravitational Gauss law, information in gravity is always available at infinity.

In the terms of Section [7.2](#72-hawkings-argument), the recent work keeps (ii) and, on the most common reading, modifies (iii) through a calculable, non-local identification of the interior with part of the radiation. Whether that is the whole story remains open.

## Problems

1. _A bound on Page's average._ Let ${\lvert \psi \rangle}$ be a random unit vector in $\mathbb{C}^{m}\otimes\mathbb{C}^{n}$, $N = mn$, distributed with the unitarily invariant measure, whose components satisfy $\langle\psi_{i}\psi_{j}^{*}\psi_{k}\psi_{l}^{*}\rangle = (\delta_{ij}\delta_{kl} + \delta_{il}\delta_{kj})/[N(N+1)]$. Show that the reduced density matrix $\rho_{A}$ of the $m$-dimensional factor obeys $\langle\mathrm{tr}\,\rho_{A}^{2}\rangle = (m+n)/(mn+1)$. Using $S(\rho) \geq -\ln\mathrm{tr}\,\rho^{2}$ and the convexity of $-\ln x$, deduce that $\langle S_{A}\rangle \geq \ln m - m/n$ for all $m$ and $n$, and compare with Eq. (7.1).

2. _The Page time._ From Eq. (7.2) show that the Page time is $t_{\mathrm{Page}}/\tau = 1 - [\beta/(1+\beta)]^{3/2}$. Evaluate it, together with $M/M_{0}$ and the maximum entropy of the radiation in units of $S_{0}$, for $\beta = 1.48$. Repeat for $\beta = 1$, and explain why $\beta = 1$ would correspond to reversible emission.

3. _Monogamy and young black holes._ (a) Show that if $S(B\tilde{B}) = 0$ then $\rho_{RB\tilde{B}} = \rho_{R}\otimes{\lvert \psi \rangle}{\langle \psi \rvert}_{B\tilde{B}}$, and hence that $S(RB) = S(R) + S(B)$, so that the strong subadditivity inequality used in Section [7.6](#76-complementarity-and-the-firewall-paradox) is saturated. (Purify $\rho_{RB\tilde{B}}$ and use the Schmidt decomposition across $B\tilde{B}$ and its complement.) (b) Explain why the same argument produces no contradiction for a black hole before its Page time.

4. _Scrambling a solar-mass black hole._ Using Eq. (7.3), $GM_{\odot}/c^{3} \approx 4.93\,\mu\mathrm{s}$, $GM_{\odot}/c^{2} \approx 1.48\,\mathrm{km}$ and ${\ell_{\mathrm{P}}} \approx 1.62\times 10^{-35}\,\mathrm{m}$, compute ${S_{\mathrm{BH}}} = 4\pi(GM/c^{2})^{2}/{\ell_{\mathrm{P}}}^{2}$ and the scrambling time of a solar-mass black hole in seconds. Compare it with the Page time, taking $\tau \sim 10^{67}$ years.

## Notes and further reading

The reader new to the subject should start with Harlow (2016), which sets out the information problem, complementarity and the firewall argument with unusual care and is honest about which steps are assumptions. Page (1993b) is short and still the best place to see how the Page curve follows from counting alone, and Mathur (2009) gives the strong-subadditivity argument of Section [7.5](#75-why-small-corrections-do-not-help) in a form accessible to anyone who knows what a density matrix is.

For the recent developments, Almheiri et al. (2021) is the standard review, written by several of the people who did the work; it should be read after Harlow (2016), not before. Raju (2022) is a long and deliberately critical counterweight, useful precisely because it disagrees with parts of the consensus, and the TASI lectures of Polchinski (2017), by one of the authors of the firewall paper, present that argument and its alternatives from the inside.

[^1]: Hawking denoted this operator by a dollar sign, &#36;, and it is still sometimes called the dollar matrix.

[^2]: Page conjectured the exact result, $\langle S_{A}\rangle = \sum_{k=n+1}^{mn} 1/k - (m-1)/(2n)$, from which Eq. (7.1) follows for $1 \ll m \leq n$; proofs appeared within three years.

[^3]: Proved by Lieb and Ruskai in 1973. Subadditivity and the Araki–Lieb inequality are much easier.

[^4]: The paper is usually called AMPS, after its authors Almheiri, Marolf, Polchinski and Sully.

[^5]: He announced the change of view at a conference in Dublin in 2004 and conceded a public bet on the question to John Preskill.
