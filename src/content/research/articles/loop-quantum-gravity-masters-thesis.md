---
slug: loop-quantum-gravity-masters-thesis
title: "Loop Quantum Gravity: From Theory to Applications"
date: 2020-09-03
summary: >-
  Master's thesis in theoretical physics: a systematic introduction to loop
  quantum gravity, from the tetrad and Holst formulation of general relativity
  and the Ashtekar–Barbero variables to spin networks and the discrete area and
  volume spectra, with two applications, black-hole entropy and the covariant
  spin-foam formulation.
tags:
  - loop-quantum-gravity
  - quantum-gravity
  - general-relativity
  - black-hole-entropy
  - spin-foams
resume: "/uploads/research/lqg-masters-thesis.pdf"
---

## About this thesis

Master's thesis in theoretical physics (Master in Physics), Department of Physics, Faculty of Exact Sciences, Frères Mentouri University Constantine 1, Algeria. Supervised by Prof. N. Mebarki and defended on 3 September 2020 before a committee chaired by Prof. H. Aissaoui, with Prof. A. Benslama as examiner. The full text is given below; the typeset thesis can also be downloaded as a PDF.

## Abstract

This thesis provides a systematic introduction to loop quantum gravity, a non-perturbative and background-independent approach to the quantization of general relativity. We start from the tetrad and spin-connection formulation of general relativity and from the Holst action, which introduces the Barbero–Immirzi parameter $\gamma$. The Hamiltonian analysis, carried out first in the ADM formalism and then in terms of the Ashtekar–Barbero variables, recasts general relativity as an ${\mathrm{SU}}(2)$ gauge theory subject to three sets of constraints: the Gauss, diffeomorphism and Hamiltonian constraints. The quantization relies on the holonomy–flux algebra: we construct the kinematical Hilbert space, the spin-network basis and the area and volume operators, whose discrete spectra express a granular structure of geometry at the Planck scale. We then present Thiemann's regularization of the Hamiltonian constraint together with its ambiguities. Two applications are developed. The first is black-hole entropy: from the local first law of Frodden, Ghosh and Perez and a statistical counting of the punctures of the horizon by spin-network links, we recover the Bekenstein–Hawking law $S = A/4{\ell_{\mathrm{P}}}^2$ for the value $\gamma_0 \simeq 0.274$ of the Barbero–Immirzi parameter, and we discuss the dependence of this result on the counting scheme. The second is the covariant spin-foam formulation: after a derivation of Feynman's path integral, we present the Ponzano–Regge model of three-dimensional gravity, Ooguri's model for four-dimensional BF theory and the EPRL model, obtained by imposing the simplicity constraints. We conclude with a discussion of the main open problems: the dynamics, the semiclassical limit and the contact with observation. 

**Keywords:** loop quantum gravity, Ashtekar–Barbero variables, Barbero–Immirzi parameter, spin networks, area and volume spectra, black-hole entropy, spin foams.

## Abbreviations and symbols

| Abbreviation | Meaning |
| --- | --- |
| % Include a list of abbreviations (a table of two columns)

ADM | Arnowitt–Deser–Misner (decomposition, action, energy) |
| EPRL | Engle–Pereira–Rovelli–Livine (spin-foam model) |
| FGP | Frodden–Ghosh–Perez (local first law) |
| FK | Freidel–Krasnov (spin-foam model) |
| GFT | Group Field Theory |
| GR | General Relativity |
| LOST | Lewandowski–Okołów–Sahlmann–Thiemann (uniqueness theorem) |
| LQG | Loop Quantum Gravity |
| QFT | Quantum Field Theory |
| TOCY | Turaev–Ooguri–Crane–Yetter (topological spin-foam models) |

| Symbol | Meaning |
| --- | --- |
| $\mathcal M$, $\Sigma$ | spacetime manifold; spatial hypersurface |
| $g_{\mu\nu}$, $q_{ab}$ | spacetime metric; induced spatial metric |
| $e^I_\mu$, $\omega^{IJ}_\mu$ | tetrad; spin connection |
| $F^{IJ}$, $R^{IJ}$ | curvature of $\omega$; curvature of the Levi-Civita connection $\omega[e]$ |
| $\Sigma^{IJ}$ | the 2-form $e^I\wedge e^J$ |
| $\kappa$ | $8\pi G$ (the surface gravity in Chapter 4) |
| $\gamma$ | Barbero–Immirzi parameter |
| $N$, $N^a$ | lapse function; shift vector |
| $K_{ab}$, $K^i_a$ | extrinsic curvature; its triad form |
| $\pi^{ab}$ | momentum conjugate to $q_{ab}$ |
| $e^i_a$, $E^a_i$ | triad; densitized triad |
| $\Gamma^i_a$, $A^i_a$ | spin connection of the triad; Ashtekar–Barbero connection |
| $G_i$, $C_a$, $C$ | Gauss, diffeomorphism (vector) and Hamiltonian (scalar) constraints |
| $h_e[A]$, $E_i(S)$ | holonomy along the link $e$; flux through the surface $S$ |
| $\Gamma$, $j_e$, $\iota_n$ | graph; spin of a link; intertwiner at a node |
| $\Psi_{\Gamma,j_e,\iota_n}$ | spin-network state |
| $\hat A(S)$, $\hat V(R)$ | area and volume operators |
| $\tau_i$, $J_i$ | anti-Hermitian and Hermitian generators of ${\mathfrak{su}}(2)$ |
| $T_H$, $T_U$ | Hawking and Unruh temperatures |
| $S_{\mathrm{BH}}$ | Bekenstein–Hawking entropy |
| $a$ | proper acceleration (the Kerr parameter in Section 4.1) |
| $\mathcal N$, $z(\gamma)$ | number of punctures; single-puncture partition function |
| $\sigma = (\mathcal C, j_f, \iota_e)$ | spin foam on the 2-complex $\mathcal C$ |
| $A_v$, $A_e$, $A_f$ | vertex, edge and face amplitudes |

## Notation and Conventions

The conventions below are used throughout the thesis. Since signs and numerical factors vary considerably from one reference to another, we fix them once and for all; whenever our conventions differ from those of the standard monographs [1–3], this is pointed out in the text.

### Units and Constants

Unless stated otherwise, we set $c = k_{\mathrm B} = 1$ and keep Newton's constant $G$ and the reduced Planck constant $\hbar$ explicit. We write

$$
\kappa \coloneqq 8\pi G, \qquad
{\ell_{\mathrm{P}}} \coloneqq \sqrt{\hbar G},
$$

so that $\hbar\kappa = 8\pi {\ell_{\mathrm{P}}}^2$; in ordinary units, ${\ell_{\mathrm{P}}} = \sqrt{\hbar G/c^3} \simeq 1.616 \times 10^{-35}\ \mathrm{m}$. Ordinary units are restored, in particular in Chapter 4, whenever orders of magnitude are given. In Chapter 4 only, the letter $\kappa$ also denotes the surface gravity of a horizon.

### Indices

| Indices | Range | Nature |
| --- | --- | --- |
| $\mu,\nu,\rho,\ldots$ | $0,1,2,3$ | spacetime indices (manifold $\mathcal M$) |
| $a,b,c,\ldots$ | $1,2,3$ | spatial indices (hypersurface $\Sigma$) |
| $I,J,K,\ldots$ | $0,1,2,3$ | internal Lorentz indices |
| $i,j,k,\ldots$ | $1,2,3$ | internal ${\mathrm{SO}}(3)$ or ${\mathfrak{su}}(2)$ indices |

Repeated indices are summed over. The internal Minkowski metric is $\eta_{IJ} = \mathrm{diag}(-1,1,1,1)$, and the signature of $g_{\mu\nu}$ is $(-,+,+,+)$. Internal spatial indices are raised and lowered with $\delta_{ij}$. Antisymmetrization is normalized: $X_{[ab]} = \tfrac12(X_{ab} - X_{ba})$.

### Levi-Civita Symbols

The totally antisymmetric internal symbol satisfies $\epsilon_{0123} = +1$, hence $\epsilon^{0123} = -1$; in three dimensions, $\epsilon_{123} = \epsilon^{123} = 1$ and $\epsilon_{0ijk} = \epsilon_{ijk}$. The spacetime symbol $\tilde\epsilon^{\mu\nu\rho\sigma}$ and the spatial symbol $\tilde\epsilon^{abc}$ are densities taking the values $0,\pm1$; for instance,

$$
\epsilon_{IJKL}\, e^I_\mu e^J_\nu e^K_\rho e^L_\sigma = e\, \tilde\epsilon_{\mu\nu\rho\sigma},
\qquad e \coloneqq \det(e^I_\mu) = \sqrt{-g}.
$$

### Differential Forms and Internal Duality

Differential forms are written without spacetime indices: $e^I = e^I_\mu\, {\mathrm{d}} x^\mu$, $\omega^{IJ} = \omega^{IJ}_\mu\, {\mathrm{d}} x^\mu$. For an antisymmetric quantity $X^{IJ}$ with values in the Lorentz algebra, the internal Hodge dual is

$$
({\star} X)_{IJ} \coloneqq \tfrac12\, \epsilon_{IJKL}\, X^{KL}, \qquad {\star}{\star} = -1 .
$$

The curvature of a connection $\omega$ is $F^{IJ} = {\mathrm{d}}\omega^{IJ} + \omega^I{}_K \wedge \omega^{KJ}$; it is denoted $R^{IJ}$ when $\omega = \omega[e]$ is the Levi-Civita connection.

### The Algebra su(2)

The anti-Hermitian generators of ${\mathfrak{su}}(2)$ in the fundamental representation are $\tau_i = -\tfrac{{\mathrm{i}}}{2}\sigma_i$, where $\sigma_i$ are the Pauli matrices. They satisfy

$$
[\tau_i, \tau_j] = \epsilon_{ij}{}^{k}\, \tau_k, \qquad
{\operatorname{Tr}}(\tau_i \tau_j) = -\tfrac12\, \delta_{ij}.
$$

In the spin-$j$ representation, of dimension $d_j = 2j+1$, the generators are denoted $\tau^{(j)}_i$; the Casimir operator is $\tau^{(j)}_i \tau^{(j)i} = -j(j+1)\,\mathbb 1$. We write $J_i = {\mathrm{i}} \tau_i$ for the usual Hermitian generators.

### Canonical Variables

The configuration variable is the Ashtekar–Barbero connection $A^i_a = \Gamma^i_a + \gamma K^i_a$, and its conjugate momentum is the densitized triad $E^a_i$, with

$$
{\left\{{A^i_a(x)},\,{E^b_j(y)}\right\}} = \kappa\gamma\, \delta^b_a\, \delta^i_j\, \delta^{(3)}(x,y).
$$

The curvature of $A$ is $F^i_{ab} = \partial_a A^i_b - \partial_b A^i_a + \epsilon^i{}_{jk} A^j_a A^k_b$.

## Introduction

### Two Pillars and an Incompatibility

Contemporary fundamental physics rests on two theories whose empirical successes are considerable. Quantum mechanics, extended to special relativity in the form of quantum field theory, describes the electromagnetic, weak, and strong interactions with remarkable precision; the Standard Model of particle physics is its culmination. General relativity describes the gravitational interaction as a manifestation of the geometry of spacetime; its predictions have been confirmed from the scale of the Solar System up to the recent observations of gravitational waves and black holes.

These two theories, however, rest on conceptual premises that are difficult to reconcile. Quantum field theory is formulated on a background spacetime given a priori, usually Minkowski spacetime: the causal structure, the notion of time, and the measurement of distances are fixed prior to any dynamics. In general relativity, by contrast, the metric $g_{\mu\nu}$ is itself the dynamical field: there is no nondynamical geometric structure on which the other fields would propagate. The invariance of the theory under diffeomorphisms of the manifold expresses precisely the absence of any background: the points of spacetime have no physical identity independently of the fields defined on them. Time is no longer an external parameter, as it is in the Schrödinger equation, but one coordinate among others, with no physical meaning of its own. Yet quantum mechanics teaches us that every dynamical field has quantum properties; it is therefore natural to expect that the gravitational field, that is, geometry itself, has them as well. The construction of such a quantum theory of geometry is the object of quantum gravity.

### Why a Quantum Theory of Gravity?

Several independent arguments indicate that classical general relativity is not a complete theory. First, the singularity theorems show that the theory predicts its own breakdown, in the form of geodesic incompleteness, near the Big Bang as well as inside black holes, in regions where, in general, the curvature becomes arbitrarily large. Second, the discovery by Bekenstein and Hawking that black holes possess an entropy proportional to the area of their horizon [4, 5] calls for a statistical interpretation in terms of microstates, which only a quantum theory of gravity can provide. Finally, the perturbative quantization of general relativity around Minkowski spacetime leads to a nonrenormalizable theory: ultraviolet divergences appear already at one loop in the presence of matter [6] and at two loops for pure gravity [7].

Quantum-gravitational effects are expected at the Planck scale, characterized by the length ${\ell_{\mathrm{P}}} = \sqrt{\hbar G/c^3} \simeq 1.6\times 10^{-35}\ \mathrm{m}$ and the energy $E_{\mathrm P} = \sqrt{\hbar c^5/G} \simeq 1.2\times10^{19}\ \mathrm{GeV}$. These scales are beyond the reach of current experiments, which partly explains the coexistence of several research programs. These programs may be divided schematically into two families. Approaches of the first family start from a fixed background. String theory, historically formulated as a perturbative expansion around a given spacetime, is the most extensively studied example; it postulates that the elementary constituents are one-dimensional objects, strings, and aims at a unification of all interactions. Approaches of the second family take background independence as their guiding principle and seek a nonperturbative quantization of geometry: causal dynamical triangulations, causal sets, asymptotic safety, noncommutative geometry, and _loop quantum gravity_ (LQG), which is the subject of this thesis.

### Loop Quantum Gravity

Loop quantum gravity is an attempt at a direct quantization of general relativity, without additional assumptions about the unification of the interactions or the existence of extra dimensions or symmetries. Its starting point is the reformulation of general relativity proposed by Ashtekar in 1986 [8, 9], in which the fundamental variable is no longer the metric but a connection, as in Yang–Mills theories. The real version of these variables, due to Barbero [10] and derived from the Holst action [11], introduces a dimensionless parameter, the Barbero–Immirzi parameter $\gamma$ [12, 13], which plays a central role in the quantum theory.

The canonical approach may be summarized as follows. Spacetime is split into space and time according to the decomposition of Arnowitt, Deser, and Misner [14, 15]; general relativity then appears as a totally constrained Hamiltonian system, whose Hamiltonian is a linear combination of constraints. In Ashtekar–Barbero variables, these constraints fall into three families: the Gauss constraint, which generates ${\mathrm{SU}}(2)$ gauge transformations; the diffeomorphism constraint, which generates spatial diffeomorphisms; and the Hamiltonian constraint, which encodes the dynamics. Rather than quantizing the connection and its conjugate momentum at each point, which leads to ill-defined expressions, the theory quantizes their integrated versions: the holonomies of the connection along curves and the fluxes of the electric field across surfaces. These variables require no background metric and form an algebra with well-defined Poisson brackets. Wilson loops, the traces of holonomies along closed loops, gave the theory its name [16, 17].

Imposing the Gauss constraint leads to the basis of _spin networks_ [18, 19], graphs whose links carry representations of ${\mathrm{SU}}(2)$ and whose nodes carry invariant tensors. This basis diagonalizes the area operator and, for a suitable choice of intertwiners, the volume operator. The spectra of these operators are discrete [20–22], so that the theory predicts a granular structure of space at the Planck scale, with the nodes of spin networks representing quanta of volume and the links representing quanta of area. The Hamiltonian constraint was defined as an operator by Thiemann [23, 24]; its regularization, however, involves ambiguities, and the dynamics remains the least understood part of the theory. The covariant formulation, known as _spin foams_ [25–27], describes the evolution of spin networks as a sum over histories of quantum geometries and provides an alternative formulation of the dynamics [28, 29].

The results of the theory include the computation of black hole entropy by counting the microstates of the horizon [30, 31] and, within loop quantum cosmology, the replacement of the initial singularity by a bounce [32, 33]. Fundamental questions remain open, foremost among them the semiclassical limit of the theory: it has yet to be established that general relativity is indeed the low-energy limit of the quantum dynamics. Like the other approaches to quantum gravity, the theory currently lacks experimental confirmation, although some of its applications, notably in cosmology, lead to potentially observable predictions.

### Outline of the Thesis

Chapter 1 collects the necessary classical tools: the formulation of general relativity in terms of tetrads and the spin connection, the gauge symmetries of the theory coupled to matter, the Holst action and the Barbero–Immirzi parameter, and the elements of the Hamiltonian mechanics of constrained systems due to Dirac. Chapter 2 presents the Hamiltonian formulation of general relativity, first in ADM variables and then in Ashtekar–Barbero variables, and brings out the geometric interpretation of the electric field as an area element. Chapter 3 is devoted to quantization: the holonomy–flux algebra, the loop representation, the kinematical Hilbert space, spin networks, geometric operators, and the Hamiltonian constraint. The next two chapters deal with applications. Chapter 4 presents the computation of black hole entropy based on the local first law of Frodden, Ghosh, and Perez [34]. Chapter 5 introduces the spin foam formalism, from the Ponzano–Regge model to the EPRL model. The conclusion summarizes the results obtained and discusses the main open questions. An appendix collects the elements of the representation theory of ${\mathrm{SU}}(2)$ used in the text.

This thesis draws mainly on the books by Rovelli [1], by Rovelli and Vidotto [2], and by Thiemann [3], on the lecture notes of Doná and Speziale [35] and of Perez [36], and on the reviews [37, 38]; the original references are cited throughout the text.

## 1 Elements of General Relativity and Hamiltonian Mechanics

This chapter collects the classical tools on which loop quantum gravity rests. We first present the formulation of general relativity in terms of tetrads and the spin connection, which makes it possible to couple gravity to fermions and which brings gravity closer to gauge theories of Yang–Mills type. We then discuss the gauge symmetries of the theory coupled to matter, followed by the Holst action, which introduces the Barbero–Immirzi parameter. We conclude with the elements of the Hamiltonian mechanics of constrained systems that are needed for canonical quantization. This chapter largely follows Refs. [1, 2, 35]; for differential geometry, the reader may consult Refs. [39, 40].

### 1.1 Tetrad Formalism

#### 1.1.1 Tetrads and the Metric

Let $\mathcal M$ be a four-dimensional differentiable manifold with local coordinates $x^\mu$. A _tetrad_ (or _vierbein_) is a set of four 1-forms

$$
e^I(x) = e^I_\mu(x)\, {\mathrm{d}} x^\mu, \qquad I = 0,1,2,3,
\tag{1.1}
$$

such that, at each point $x$, the matrix $e^I_\mu(x)$ is invertible. We denote its inverse by $e^\mu_I$: $e^\mu_I e^I_\nu = \delta^\mu_\nu$ and $e^I_\mu e^\mu_J = \delta^I_J$. The spacetime metric is then expressed as

$$
g_{\mu\nu}(x) = \eta_{IJ}\, e^I_\mu(x)\, e^J_\nu(x).
\tag{1.2}
$$

Geometrically, $e^I_\mu(x)$ defines an isomorphism between the tangent space $T_x\mathcal M$ and Minkowski space $(\mathbb R^4, \eta_{IJ})$: at each point, the tetrad identifies a locally inertial frame, which is a direct translation of the equivalence principle. At each point, the vectors $e_I = e^\mu_I\, \partial_\mu$ form an orthonormal basis with respect to $g_{\mu\nu}$.

Relation (1.2) is invariant under the local Lorentz transformations

$$
e^I_\mu(x) \longmapsto \Lambda^I{}_J(x)\, e^J_\mu(x), \qquad \Lambda(x) \in {\mathrm{SO}}(3,1),
\tag{1.3}
$$

since $\eta_{IJ}\Lambda^I{}_K\Lambda^J{}_L = \eta_{KL}$. The tetrad has sixteen components and the metric ten; the difference corresponds exactly to the six parameters of the Lorentz group. The tetrad formalism therefore introduces an additional internal gauge symmetry without adding any physical degree of freedom. It is indispensable for the description of fermions, whose fields transform under the spinor representations of the Lorentz group, which have no analog for the group $\mathrm{GL}(4,\mathbb R)$ of coordinate changes.

#### 1.1.2 Spin Connection, Torsion, and Curvature

A _spin connection_ is a 1-form $\omega^{IJ} = \omega^{IJ}_\mu\, {\mathrm{d}} x^\mu$ with values in the Lie algebra ${\mathfrak{so}}(3,1)$, that is, antisymmetric: $\omega^{IJ} = -\omega^{JI}$. It defines the covariant derivative of a field carrying a Lorentz index,

$$
D_\mu v^I = \partial_\mu v^I + \omega^I{}_{\mu J}\, v^J,
\tag{1.4}
$$

and, more generally, the covariant exterior derivative of a vector-valued $p$-form $u^I$,

$$
D u^I = {\mathrm{d}} u^I + \omega^I{}_J \wedge u^J.
\tag{1.5}
$$

The _torsion_ and the _curvature_ of $\omega$ are, respectively, the vector-valued 2-form and the ${\mathfrak{so}}(3,1)$-valued 2-form

$$
\begin{align}
T^I &\coloneqq D e^I = {\mathrm{d}} e^I + \omega^I{}_J \wedge e^J, \tag{1.6} \\
F^I{}_J &\coloneqq {\mathrm{d}}\omega^I{}_J + \omega^I{}_K \wedge \omega^K{}_J
= \tfrac12\, F^I{}_{J\mu\nu}\, {\mathrm{d}} x^\mu \wedge {\mathrm{d}} x^\nu. \tag{1.7}
\end{align}
$$

Relations (1.6) and (1.7) constitute the _Cartan structure equations_. They are supplemented by the Bianchi identities

$$
D F^{IJ} = 0, \qquad D T^I = F^I{}_J \wedge e^J .
\tag{1.8}
$$

A fundamental result is that, for a given invertible tetrad, there exists a unique torsion-free spin connection, denoted $\omega[e]$:

$$
{\mathrm{d}} e^I + \omega[e]^I{}_J \wedge e^J = 0 .
\tag{1.9}
$$

Indeed, the condition $T^I = 0$ amounts to $4\times6 = 24$ linear algebraic equations for the $4\times6 = 24$ components of $\omega^{IJ}_\mu$, and this system is invertible whenever $e$ is. Equivalently, $\omega[e]$ is determined by the “tetrad postulate” $\partial_\mu e^I_\nu - \Gamma^\rho_{\mu\nu} e^I_\rho + \omega[e]^I{}_{\mu J} e^J_\nu = 0$, where $\Gamma^\rho_{\mu\nu}$ are the Christoffel symbols of $g_{\mu\nu}$. The curvature of $\omega[e]$, denoted $R^{IJ}$, is then related to the Riemann tensor by $R^{IJ}{}_{\mu\nu} = e^I_\rho\, e^{J\sigma} R^\rho{}_{\sigma\mu\nu}$; a region of spacetime is flat if and only if $R^{IJ} = 0$ there. For a torsion-free connection, the second identity in (1.8) reduces to the algebraic Bianchi identity $R^I{}_J \wedge e^J = 0$, that is, $R^\rho{}_{[\sigma\mu\nu]} = 0$.

#### 1.1.3 First-Order Einstein–Hilbert Action

In the first-order formalism, known as the _Palatini_ formalism, the tetrad and the connection are treated as independent variables. The action of general relativity with cosmological constant $\Lambda$ reads

$$
S_{\mathrm P}[e,\omega] = \frac{1}{32\pi G} \int_{\mathcal M} \epsilon_{IJKL}\,
e^I \wedge e^J \wedge \Big( F^{KL}(\omega) - \frac{\Lambda}{6}\, e^K \wedge e^L \Big).
\tag{1.10}
$$

Introducing the 2-form $\Sigma^{IJ} \coloneqq e^I \wedge e^J$ and the internal dual $({\star}\Sigma)_{IJ} = \tfrac12\epsilon_{IJKL}\Sigma^{KL}$, the kinetic term takes the compact form $\frac{1}{16\pi G}\int ({\star}\Sigma)_{IJ} \wedge F^{IJ}$, which is sometimes abbreviated as $\int {\star}(e\wedge e)\wedge F$.

**Equations of motion.** Variation with respect to the connection gives $\epsilon_{IJKL}\, D(e^I\wedge e^J) = 2\,\epsilon_{IJKL}\, T^I\wedge e^J = 0$, which, for an invertible tetrad, is equivalent to $T^I = 0$: the connection is the torsion-free spin connection $\omega = \omega[e]$. Substituting this solution into (1.10), we obtain the second-order action $S[e] = S_{\mathrm P}[e,\omega[e]]$. Using the identity $\epsilon_{IJKL}\, e^I\wedge e^J \wedge R^{KL} = 2 R\, e\, {\mathrm{d}}^4x$ together with $\epsilon_{IJKL}\, e^I\wedge e^J\wedge e^K\wedge e^L = 24\, e\, {\mathrm{d}}^4 x$, where $e = \det(e^I_\mu) = \sqrt{-g}$ and ${\mathrm{d}}^4x = {\mathrm{d}} x^0\wedge {\mathrm{d}} x^1\wedge{\mathrm{d}} x^2\wedge{\mathrm{d}} x^3$, we recover the Einstein–Hilbert action

$$
S[e] = \frac{1}{16\pi G} \int {\mathrm{d}}^4x\, \sqrt{-g}\, \big(R - 2\Lambda\big).
\tag{1.11}
$$

Variation of (1.10) with respect to the tetrad yields the Einstein equations in the form of 3-forms:

$$
\epsilon_{IJKL}\, e^J \wedge \Big( F^{KL} - \frac{\Lambda}{3}\, e^K \wedge e^L \Big) = 0 .
\tag{1.12}
$$

To verify the equivalence with the usual tensorial form, we take the exterior product of (1.12) with $e^M$; when $\omega = \omega[e]$, a direct computation gives

$$
\epsilon_{IJKL}\, e^J \wedge \Big( R^{KL} - \frac{\Lambda}{3}\, e^K \wedge e^L \Big) \wedge e^M
= 2\, \big( G_I{}^M + \Lambda\, \delta_I^M \big)\, e\, {\mathrm{d}}^4 x ,
\tag{1.13}
$$

where $G_I{}^M = e^\mu_I\, e^M_\nu\, G_\mu{}^\nu$ are the internal components of the Einstein tensor $G_{\mu\nu} = R_{\mu\nu} - \tfrac12 R\, g_{\mu\nu}$. Equation (1.12) is therefore equivalent to $G_{\mu\nu} + \Lambda g_{\mu\nu} = 0$. In particular, we verify that the trace ($M = I$) of (1.13) reproduces the identity used to obtain (1.11).

#### 1.1.4 Coupling to Matter

The tetrad formalism makes it possible to write the actions of the matter fields of the Standard Model on a curved spacetime in a uniform manner. We denote by $A = A^\alpha_\mu\, t_\alpha\, {\mathrm{d}} x^\mu$ a Yang–Mills connection for a compact gauge group $\mathcal G$ with generators $t_\alpha$, and by $F = {\mathrm{d}} A + A\wedge A$ its curvature.

**Gauge fields.** The Yang–Mills action (the Maxwell action for $\mathcal G = \mathrm U(1)$) reads

$$
S_{\mathrm{YM}}[e,A] = -\frac14 \int {\mathrm{d}}^4x\; e\; g^{\mu\rho} g^{\nu\sigma}\, F^\alpha_{\mu\nu} F_{\alpha\,\rho\sigma},
\qquad g^{\mu\nu} = \eta^{IJ} e^\mu_I e^\nu_J,
\tag{1.14}
$$

where the index $\alpha$ is lowered with the normalized Killing form of the Lie algebra of $\mathcal G$. In the language of differential forms, $S_{\mathrm{YM}} = -\tfrac12\int F^\alpha \wedge \ast F_\alpha$, where $\ast$ denotes the spacetime Hodge dual, which depends on the tetrad (not to be confused with the internal dual ${\star}$).

**Scalar fields.** For a scalar field $\varphi$ in a representation of $\mathcal G$, with covariant derivative $D_\mu\varphi = \partial_\mu\varphi + A^\alpha_\mu t_\alpha \varphi$, the action is

$$
S_{\mathrm{KG}}[e,A,\varphi] = - \int {\mathrm{d}}^4x\; e\, \Big( \eta^{IJ} e^\mu_I e^\nu_J\, \overline{D_\mu \varphi}\, D_\nu \varphi + V(\varphi) \Big),
\tag{1.15}
$$

where $V$ is the potential, which includes the mass term and the self-interactions (Higgs potential).

**Fermions.** A Dirac field $\psi$ transforms under the spinor representation of the Lorentz group; its covariant derivative involves the spin connection,

$$
D_\mu\psi = \partial_\mu \psi + \tfrac12\, \omega_{\mu IJ}\, S^{IJ} \psi + A^\alpha_\mu t_\alpha \psi,
\qquad S^{IJ} = \tfrac14 [\gamma^I, \gamma^J],
\tag{1.16}
$$

where the Dirac matrices satisfy $\{\gamma^I,\gamma^J\} = 2\eta^{IJ}$ (not to be confused with the parameter $\gamma$ introduced in Section 1.3). The Dirac action, supplemented by Yukawa couplings $Y(\varphi,\bar\psi,\psi)$, reads schematically

$$
S_{\mathrm D}[e,\omega,A,\varphi,\psi] = -\int {\mathrm{d}}^4 x\; e\, \Big( \bar\psi\, \gamma^I e^\mu_I D_\mu \psi + m\,\bar\psi\psi + Y(\varphi,\bar\psi,\psi) \Big),
\tag{1.17}
$$

where the real part is understood. This is the only action in which the spin connection appears explicitly; it is what makes the tetrad indispensable.

**Total action.** The action of gravity coupled to matter is the sum

$$
S[e,\omega,A,\varphi,\psi] = S_{\mathrm P}[e,\omega] + S_{\mathrm{YM}}[e,A] + S_{\mathrm{KG}}[e,A,\varphi] + S_{\mathrm D}[e,\omega,A,\varphi,\psi].
\tag{1.18}
$$

Its variation with respect to the tetrad leads to the Einstein equations with sources,

$$
\epsilon_{IJKL}\, e^J \wedge \Big( F^{KL} - \frac{\Lambda}{3}\, e^K\wedge e^L \Big) = 16\pi G\; \mathcal T_I ,
\tag{1.19}
$$

where the energy-momentum 3-form $\mathcal T_I$ is defined by $\delta S_{\mathrm{mat}} = -\int \delta e^I \wedge \mathcal T_I$ and satisfies $\mathcal T_I \wedge e^J = T_I{}^J\, e\, {\mathrm{d}}^4x$. According to (1.13), Eq. (1.19) is equivalent to $G_{\mu\nu} + \Lambda g_{\mu\nu} = 8\pi G\, T_{\mu\nu}$. In the presence of fermions, the equation for the connection no longer imposes $T^I = 0$: the spin density of the fermions acts as a source of torsion, and the connection differs from $\omega[e]$ by an algebraic term quadratic in $\psi$.

### 1.2 Gauge Symmetries

#### 1.2.1 Dirac's Definition

The notion of gauge invariance admits a general definition, due to Dirac [41], which presupposes no group structure and which proves to be the most illuminating one for gravity. Consider a system whose evolution is governed by equations of motion. The system is said to be _gauge invariant_ if its evolution is underdetermined, that is, if there exist two distinct solutions $\varphi(t)$ and $\tilde\varphi(t)$ that coincide for $t < \hat t$ but differ for $t > \hat t$ (Fig. 1.1). Since both solutions arise from the same initial data, no measurement can distinguish them: they describe the same physical state, and their difference is a pure gauge transformation. Two arbitrary solutions are said to be gauge equivalent if they are related by a finite sequence of such transformations. The physical quantities, or _observables_, are the functions on the space of solutions that are invariant under these transformations. We shall see in Section 1.4 that, in the Hamiltonian formalism, this definition translates into the existence of first-class constraints.

![Dirac's definition of gauge invariance: two solutions φ(t) and φ(t) of the equations of motion coincide for t < t and differ afterward. Since no measurement can distinguish them, they represent the same physical state. Adapted from (1).](/uploads/research/lqg-dirac-gauge.png "Figure 1.1: Dirac's definition of gauge invariance: two solutions φ(t) and φ(t) of the equations of motion coincide for t < t and differ afterward. Since no measurement can distinguish them, they represent the same physical state. Adapted from [1].")

#### 1.2.2 The Three Gauge Groups

The equations of motion derived from action (1.18) are invariant under three families of local transformations.

**(i) Yang–Mills gauge transformations.** These are parametrized by a map $g : \mathcal M \to \mathcal G$ and act on the matter fields, while the tetrad and the spin connection remain unchanged:

$$
\begin{aligned}
\varphi &\longmapsto R_\varphi(g)\, \varphi, &\qquad
\psi &\longmapsto R_\psi(g)\, \psi, &\qquad
A &\longmapsto g A g^{-1} + g\, {\mathrm{d}} g^{-1},\\
e^I &\longmapsto e^I, &
\omega^{IJ} &\longmapsto \omega^{IJ}, &&
\end{aligned}
\tag{1.20}
$$

where $R_\varphi$ and $R_\psi$ denote the representations of $\mathcal G$ carried by $\varphi$ and $\psi$.

**(ii) Local Lorentz transformations.** These are parametrized by $\Lambda : \mathcal M \to {\mathrm{SO}}(3,1)$ (or, more precisely, by its covering group ${\mathrm{SL}}(2,\mathbb C)$ when fermions are present) and act on the tetrad, the spin connection, and the fermions:

$$
\begin{aligned}
e^I &\longmapsto \Lambda^I{}_J\, e^J, &\qquad
\omega &\longmapsto \Lambda\, \omega\, \Lambda^{-1} + \Lambda\, {\mathrm{d}} \Lambda^{-1}, &\qquad
\psi &\longmapsto S(\Lambda)\, \psi,\\
\varphi &\longmapsto \varphi, &
A &\longmapsto A, &&
\end{aligned}
\tag{1.21}
$$

where $S(\Lambda)$ is the spinor representation. The transformation law of $\omega$ is the one that ensures the covariance $D e^I \mapsto \Lambda^I{}_J\, D e^J$; in components, $\omega^I{}_{\mu J} \mapsto \Lambda^I{}_K\, \omega^K{}_{\mu L}\, (\Lambda^{-1})^L{}_J + \Lambda^I{}_K\, \partial_\mu (\Lambda^{-1})^K{}_J$.

**(iii) Diffeomorphisms.** A diffeomorphism $\phi : \mathcal M \to \mathcal M$, that is, a differentiable invertible map with differentiable inverse, acts on all fields by pullback:

$$
\begin{aligned}
\varphi(x) &\longmapsto \varphi(\phi(x)), &\qquad
A_\mu(x) &\longmapsto \frac{\partial \phi^\nu(x)}{\partial x^\mu}\, A_\nu(\phi(x)),\\
e^I_\mu(x) &\longmapsto \frac{\partial \phi^\nu(x)}{\partial x^\mu}\, e^I_\nu(\phi(x)), &
\omega^{IJ}_\mu(x) &\longmapsto \frac{\partial \phi^\nu(x)}{\partial x^\mu}\, \omega^{IJ}_\nu(\phi(x)),
\end{aligned}
\tag{1.22}
$$

and likewise for $\psi$, which transforms as a spacetime scalar.

The full gauge group is the semidirect product of these three groups. Diffeomorphism invariance has a particular conceptual significance: since two solutions related by a diffeomorphism are physically indistinguishable, a point of the manifold $\mathcal M$ has no physical meaning in itself. Only coincidences between values of the fields, for instance the meeting of two particles, are observable. This conclusion, which Einstein reached in 1915 through the hole argument, expresses the background independence of general relativity [1]. It constitutes the guiding principle of loop quantum gravity.

### 1.3 The Holst Action and the Barbero–Immirzi Parameter

#### 1.3.1 The Holst Action

The Palatini action (1.10) is not the most general term that can be constructed from $e$ and $\omega$ while respecting the above symmetries. Besides the term $\epsilon_{IJKL}\, e^I\wedge e^J\wedge F^{KL}$, there exists a second invariant of the appropriate dimension, $e_I \wedge e_J \wedge F^{IJ}$, in which the indices are contracted with $\eta_{IJ}$ rather than with $\epsilon_{IJKL}$. Holst [11] showed that the action

$$
\begin{aligned}
S_{\mathrm H}[e,\omega] &= \frac{1}{16\pi G} \int_{\mathcal M} \Big( \tfrac12\, \epsilon_{IJKL}\, e^I\wedge e^J \wedge F^{KL} - \frac1\gamma\, e_I\wedge e_J\wedge F^{IJ} \Big)\\
&= \frac{1}{16\pi G} \int_{\mathcal M} \Big( {\star}\Sigma - \frac{1}{\gamma}\Sigma \Big)_{IJ} \wedge F^{IJ},
\end{aligned}
\tag{1.23}
$$

where $\gamma \in \mathbb R^*$ is a dimensionless parameter, leads to the same equations of motion as general relativity, and that its Hamiltonian analysis yields the real variables introduced by Barbero [10]. The parameter $\gamma$ is called the _Barbero–Immirzi parameter_ [12, 13]. We omit the cosmological term here; it can be added without difficulty. The sign in front of the Holst term depends on the orientation conventions and on the definition of the spatial spin connection; with the conventions adopted in this thesis, the chosen sign leads to the connection $A = \Gamma + \gamma K$ of Chapter 2.

#### 1.3.2 Equations of Motion and the Classical Role of γ

Variation of (1.23) with respect to $\omega$ gives

$$
\Big( {\star} - \frac1\gamma \Big) D\Sigma = 0,
\tag{1.24}
$$

where the operator ${\star} - 1/\gamma$ acts on the antisymmetric index pair of $D\Sigma^{IJ}$. Since ${\star}{\star} = -1$, we have $({\star} - 1/\gamma)({\star} + 1/\gamma) = -(1 + 1/\gamma^2)$; the operator is therefore invertible whenever $\gamma^2 \neq -1$, which is the case for every real $\gamma$. Equation (1.24) then reduces to $D\Sigma^{IJ} = T^I\wedge e^J - e^I\wedge T^J = 0$, which, as in the Palatini case, imposes $T^I = 0$ and hence $\omega = \omega[e]$.

The Holst term then vanishes identically. Indeed, using the Bianchi identity $D T^I = F^I{}_J\wedge e^J$, we can verify the Nieh–Yan identity [42]

$$
e_I \wedge e_J \wedge F^{IJ} = T_I \wedge T^I - {\mathrm{d}}\big( e_I \wedge T^I \big),
\tag{1.25}
$$

whose right-hand side vanishes when the torsion vanishes. Equivalently, for $\omega = \omega[e]$ we have $e_I\wedge e_J\wedge R^{IJ} \propto \tilde\epsilon^{\mu\nu\rho\sigma} R_{\mu\nu\rho\sigma}\, {\mathrm{d}}^4x$, which vanishes by virtue of the algebraic Bianchi identity $R_{\mu[\nu\rho\sigma]} = 0$. Variation with respect to the tetrad therefore reproduces the Einstein equations (1.12): _the parameter $\gamma$ has no effect on the classical dynamics of the gravitational field in vacuum_. The situation is different in the presence of minimally coupled fermions: the torsion induced by the spin density makes the Holst term nontrivial, and $\gamma$ appears in an effective four-fermion interaction [43, 44]. Above all, we shall see that $\gamma$ plays an essential role in the quantum theory, where it sets the scale of the area and volume spectra (Section 3.6).

For the particular complex values $\gamma = \pm {\mathrm{i}}$, the operator ${\star} - 1/\gamma = {\star} \pm {\mathrm{i}}$ projects onto the self-dual or anti-self-dual part of the Lorentz algebra; we then recover Ashtekar's original complex formulation [8, 9], whose connection is the self-dual part of the spin connection.

#### 1.3.3 Conjugate Momentum and the Linear Simplicity Constraint

Anticipating the $3+1$ decomposition of Chapter 2, let us assume that $\mathcal M = \mathbb R \times \Sigma$ and consider the term of action (1.23) that contains the time derivative of the connection. Since $F^{IJ} \supset {\mathrm{d}} t \wedge \partial_t \omega^{IJ}_a\, {\mathrm{d}} x^a$, we obtain

$$
S_{\mathrm H} = \int {\mathrm{d}} t \int_\Sigma \tfrac12\, \Pi_{IJ} \wedge \partial_t \omega^{IJ} + \cdots,
\qquad
\Pi_{IJ} \coloneqq \frac{1}{8\pi G} \Big( {\star}\Sigma - \frac1\gamma \Sigma \Big)_{IJ}\Big|_\Sigma ,
\tag{1.26}
$$

where $|_\Sigma$ denotes the restriction (the pullback) to the hypersurface $\Sigma$. The 2-form $\Pi_{IJ}$ is therefore the momentum canonically conjugate to the connection; by construction, it is also the generator of internal Lorentz transformations on $\Sigma$. Let us decompose it, relative to the internal vector $n^I = (1,0,0,0)$, into a “boost” part and a rotation part:

$$
K^i \coloneqq \Pi^{0i}, \qquad L^i \coloneqq \tfrac12\, \epsilon^i{}_{jk}\, \Pi^{jk}.
\tag{1.27}
$$

In the _time gauge_, in which the tetrad is adapted to the foliation ($e^0|_\Sigma = 0$), we have $\Sigma^{0i}|_\Sigma = 0$. Using $\epsilon^{0i}{}_{jk} = -\epsilon_{ijk}$, we find

$$
K^i = -\frac{1}{8\pi G}\, E^i, \qquad L^i = -\frac{1}{8\pi G\gamma}\, E^i,
\qquad E^i \coloneqq \tfrac12\, \epsilon^i{}_{jk}\, e^j \wedge e^k \Big|_\Sigma ,
\tag{1.28}
$$

whence the relation

$$
\boxed{\;{\vec{{K}}} = \gamma\, {\vec{{L}}}\;}
\tag{1.29}
$$

The boost and rotation parts of the momentum conjugate to the connection are proportional, and the proportionality factor is precisely the Barbero–Immirzi parameter. This relation, called the _linear simplicity constraint_, expresses the fact that $\Pi_{IJ}$ derives from a tetrad. It will play a central role on two occasions: in the computation of black hole entropy (Section 4.3), where it relates the local energy to the area of the horizon, and in the construction of the EPRL spin foam model (Section 5.4.3).

The 2-form $E^i$ in (1.28) admits a direct geometric interpretation, which we develop in Section 2.3: its integral over a small surface $S\subset\Sigma$ is a vector normal to $S$ whose norm is the area of $S$. For such a surface, we therefore have

$$
{\left|{{\vec{{L}}}_S}\right|} = \frac{A(S)}{8\pi G\gamma}, \qquad
{\left|{{\vec{{K}}}_S}\right|} = \frac{A(S)}{8\pi G},
\tag{1.30}
$$

where ${\vec{{L}}}_S$ and ${\vec{{K}}}_S$ denote the integrals over $S$ of the corresponding 2-forms.

### 1.4 Hamiltonian Mechanics of Constrained Systems

In its usual form, mechanics describes the evolution of states and observables with respect to an external time, generated by a Hamiltonian. In general relativity, time is not a variable external to the system but one of its coordinates, and the Hamiltonian is a combination of constraints. In this section we recall the formalism, due to Dirac and Bergmann [41, 45, 46], that makes it possible to treat such systems.

#### 1.4.1 Legendre Transform and Primary Constraints

Consider a system with $N$ degrees of freedom $q^i$, Lagrangian $L(q,\dot q)$, and action

$$
S[q] = \int_{t_1}^{t_2} {\mathrm{d}} t\; L\big(q^i(t), \dot q^i(t)\big).
\tag{1.31}
$$

The physical trajectories extremize $S$ with fixed endpoints and satisfy the Euler–Lagrange equations. The conjugate momenta are $p_i = \partial L/\partial \dot q^i$. If the Hessian matrix $W_{ij} = \partial^2 L/\partial\dot q^i\partial\dot q^j$ is invertible, the velocities can be expressed in terms of the momenta, and the Legendre transform leads to the usual Hamiltonian. If $W_{ij}$ is singular, which is the case for all gauge theories, the momenta are not independent: there exist relations

$$
\phi_m(q,p) = 0, \qquad m = 1,\dots,M,
\tag{1.32}
$$

called _primary constraints_, which follow from the very definition of the momenta. The canonical Hamiltonian $H_c = p_i \dot q^i - L$ is then defined only on the constraint surface, and the evolution is generated by the _total Hamiltonian_

$$
H_T = H_c + u^m\, \phi_m ,
\tag{1.33}
$$

where the $u^m$ are Lagrange multipliers. We write $f \approx 0$ (weak equality) to indicate that a function vanishes on the constraint surface, although its Poisson brackets with other functions need not vanish.

#### 1.4.2 The Dirac–Bergmann Algorithm and the Classification of Constraints

The consistency of the theory requires that the constraints be preserved by the evolution: $\dot\phi_m = {\left\{{\phi_m},\,{H_T}\right\}} \approx 0$. These conditions may be satisfied automatically, fix some of the multipliers $u^m$, or generate new constraints, called _secondary_ constraints, to which the consistency condition is applied in turn. The algorithm terminates when no new constraint appears. The resulting set of constraints $\{\phi_A\}$ is then divided into two categories:

- a constraint is said to be _first class_ if its Poisson bracket with all the constraints vanishes weakly;

- it is said to be _second class_ otherwise.

Second-class constraints reflect the presence of redundant variables; they are eliminated by solving them and replacing the Poisson bracket with the Dirac bracket. First-class constraints have a very different meaning: the Lagrange multipliers associated with them are not determined by the equations of motion, so that the evolution involves arbitrary functions of time. This is exactly the situation described by Dirac's definition of gauge invariance (Fig. 1.1): the first-class constraints $G_a$ _generate gauge transformations_, according to

$$
\delta_\varepsilon f = \varepsilon^a\, {\left\{{f},\,{G_a}\right\}}.
\tag{1.34}
$$

An observable is a function $O$ on phase space whose bracket with all the first-class constraints vanishes weakly. If phase space has dimension $2N$ and there are $N_1$ first-class constraints and $N_2$ second-class constraints, the number of physical degrees of freedom is

$$
n_{\mathrm{dof}} = \tfrac12 \big( 2N - 2N_1 - N_2 \big).
\tag{1.35}
$$

Each first-class constraint thus removes two dimensions from phase space: one because it restricts the data, and the other because it identifies the points related by the gauge transformation that it generates.

#### 1.4.3 Parametrized Systems and Constrained Hamiltonians

A simple example sheds light on the structure of general relativity. Consider a nonrelativistic particle with Hamiltonian $H_0(q,p)$, and promote time to a dynamical variable, $q^0 \coloneqq t$, by describing the trajectories with an arbitrary parameter $\tau$. The action

$$
S = \int {\mathrm{d}}\tau\; \Big( p_i\, \frac{{\mathrm{d}} q^i}{{\mathrm{d}}\tau} + p_0\, \frac{{\mathrm{d}} q^0}{{\mathrm{d}}\tau} - N(\tau)\, \big( p_0 + H_0(q,p) \big) \Big)
\tag{1.36}
$$

is invariant under the reparametrizations $\tau \mapsto f(\tau)$. Variation with respect to the multiplier $N$ imposes the first-class constraint $C \coloneqq p_0 + H_0 \approx 0$, and the total Hamiltonian $H = N C$ vanishes weakly. Evolution in $\tau$ is a pure gauge transformation: the physics lies in the relation between the variables $q^i$ and the variable $q^0 = t$, which plays the role of a clock. Similarly, for a relativistic particle of mass $m$, the action $S = -m\int {\mathrm{d}}\tau \sqrt{-\eta_{\mu\nu}\dot x^\mu \dot x^\nu}$ leads to the constraint $C = \eta^{\mu\nu}p_\mu p_\nu + m^2 \approx 0$ and to the Hamiltonian $H = N C$. We shall see in Chapter 2 that general relativity has exactly this structure: its Hamiltonian is a linear combination of first-class constraints, as a direct consequence of diffeomorphism invariance.

Rovelli [1] proposed a formulation of mechanics adapted to such systems, in which no variable is singled out as time. In this formulation, a relativistic system is described by:

(i) a configuration space $\mathcal C$ of _partial observables_ $q^a$, that is, quantities that can be measured but whose value cannot be predicted in isolation (for example, the position $q^i$ and the reading $t$ of a clock);

(ii) a phase space $\Gamma$ of relativistic states, that is, the space of motions;

(iii) an evolution equation $f = 0$, where $f : \Gamma\times\mathcal C \to V$ takes values in a vector space $V$, which determines the correlations between partial observables realized in a given state.

#### 1.4.4 Hamilton–Jacobi Formulation

The Hamilton–Jacobi formulation brings this structure to light. For a nonrelativistic system with Hamiltonian $H_0$, Hamilton's principal function $S(q^i,t)$ satisfies

$$
\frac{\partial S}{\partial t} + H_0\Big( q^i, \frac{\partial S}{\partial q^i} \Big) = 0 .
\tag{1.37}
$$

For a time-independent Hamiltonian, a complete integral $S(q^i, Q^i, t)$, depending on $N$ integration constants $Q^i$, is obtained in the form $S = W(q^i,Q^i) - E\,t$, where Hamilton's characteristic function $W$ satisfies

$$
H_0\Big( q^i, \frac{\partial W}{\partial q^i} \Big) = E .
\tag{1.38}
$$

The trajectories are then given implicitly by the relations

$$
P_i = -\frac{\partial S(q^i,Q^i,t)}{\partial Q^i},
\tag{1.39}
$$

where the $P_i$ are new constants. Another solution of (1.37) is the _Hamilton function_, namely the value of the action along the classical trajectory joining $(t_1,q_1)$ to $(t_2,q_2)$:

$$
S(t_1,q_1;t_2,q_2) = \int_{t_1}^{t_2} {\mathrm{d}} t\; L\big( q^i(t), \dot q^i(t) \big)\Big|_{\text{classical trajectory}}.
\tag{1.40}
$$

For a parametrized system, time is one of the partial observables $q^a = (t, q^i)$, and Eq. (1.37) takes the covariant form

$$
C\Big( q^a, \frac{\partial S(q^a)}{\partial q^a} \Big) = 0,
\tag{1.41}
$$

where $C$ is the Hamiltonian constraint. Given a complete integral $S(q^a, Q^i)$, the evolution equation reads

$$
f_i(q^a; P_i, Q^i) \equiv \frac{\partial S(q^a, Q^i)}{\partial Q^i} + P_i = 0 ;
\tag{1.42}
$$

a relativistic state, labeled by the constants $(Q^i,P_i)$, thus determines a relation among the partial observables $q^a$, without any of them being singled out as the time variable. We shall encounter the analog of (1.41) for general relativity in Chapter 2.

#### 1.4.5 Dirac Quantization

The quantization of systems with first-class constraints follows Dirac's program [41]. We first construct a representation of the algebra of canonical variables on a Hilbert space, called the _kinematical_ Hilbert space, ignoring the constraints; we then promote the constraints to operators and define the physical states as the solutions of

$$
\hat C_a\, {\left|{\Psi}\right\rangle} = 0 .
\tag{1.43}
$$

Finally, the space of solutions must be equipped with an inner product, which is often a source of difficulty, since the solutions are in general not normalizable in the kinematical Hilbert space. For a system whose Hamiltonian is a constraint, there is no Schrödinger equation with respect to an external time: the dynamics is entirely contained in (1.43). In gravity, this equation is the Wheeler–DeWitt equation [47, 48], which we shall encounter in the next chapter. The absence of an external time, sometimes referred to as the “problem of time”, is not a pathology of the quantum theory: it is already present in the Hamiltonian formulation of the classical theory.

## 2 Hamiltonian General Relativity

The Hamiltonian formulation of general relativity is the starting point of any canonical quantization. It requires that space and time be distinguished, at least formally. To this end, we introduce the $3+1$ decomposition of Arnowitt, Deser and Misner, which reveals general relativity as a fully constrained system. We then reformulate the theory in terms of triads, and subsequently in terms of the Ashtekar–Barbero connection, which brings it closer to an ${\mathrm{SU}}(2)$ gauge theory. This chapter draws on [1–3]; for the $3+1$ decomposition, the reader may also consult [49].

### 2.1 The ADM Formalism

#### 2.1.1 Foliation of Spacetime

We assume that spacetime is globally hyperbolic; it is then diffeomorphic to $\mathbb R\times\Sigma$, where $\Sigma$ is a three-dimensional manifold. We choose a time function $t$ whose level surfaces $\Sigma_t$ are spacelike; these surfaces define a _foliation_ of $\mathcal M$ (Fig. 2.1). Let $n^\mu$ denote the future-directed unit normal to $\Sigma_t$, with $g_{\mu\nu}n^\mu n^\nu = -1$ and $n_\mu = -N\partial_\mu t$. The evolution vector field $t^\mu$, which satisfies $t^\mu\partial_\mu t = 1$ and connects points with the same spatial coordinates $x^a$ on two neighboring leaves, decomposes into its normal and tangential parts:

$$
t^\mu = N\, n^\mu + N^\mu, \qquad N^\mu n_\mu = 0 .
\tag{2.1}
$$

The function $N$ is called the _lapse_ (or lapse function) and the vector $N^a$ the _shift_ (or shift vector). The lapse measures the proper time elapsed along the normal between $\Sigma_t$ and $\Sigma_{t+\delta t}$, namely $N\delta t$; the shift measures the displacement, within $\Sigma_{t+\delta t}$, between the foot of the normal and the point with the same coordinates $x^a$.

![The 3+1 decomposition of spacetime and the geometric interpretation of the lapse and the shift. The point with coordinates x^a on Σ_t is connected to the point with the same coordinates on Σ_t+δ t by the vector t δ t = (N n + N) δ t. Adapted from (3).](/uploads/research/lqg-adm-foliation.png "Figure 2.1: The 3+1 decomposition of spacetime and the geometric interpretation of the lapse and the shift. The point with coordinates x^a on Σ_t is connected to the point with the same coordinates on Σ_t+δ t by the vector t δ t = (N n + N) δ t. Adapted from [3].")

In adapted coordinates $(t,x^a)$, the metric induced on $\Sigma_t$ is $q_{ab} = g_{ab}$, and the line element takes the form

$$
{\mathrm{d}} s^2 = -N^2\, {\mathrm{d}} t^2 + q_{ab}\, \big({\mathrm{d}} x^a + N^a {\mathrm{d}} t\big)\big({\mathrm{d}} x^b + N^b {\mathrm{d}} t\big),
\tag{2.2}
$$

that is,

$$
g_{00} = -N^2 + q_{ab}N^aN^b, \qquad g_{0a} = N_a \coloneqq q_{ab}N^b, \qquad g_{ab} = q_{ab}.
\tag{2.3}
$$

The inverse metric has components $g^{00} = -1/N^2$, $g^{0a} = N^a/N^2$ and $g^{ab} = q^{ab} - N^aN^b/N^2$, so that

$$
N = \big(-g^{00}\big)^{-1/2}, \qquad \det g = -N^2 \det q, \qquad \sqrt{-g} = N\sqrt q ,
\tag{2.4}
$$

where $q \coloneqq \det q_{ab}$. The ten components of $g_{\mu\nu}$ are thus replaced by the six components of the _spatial metric_ $q_{ab}$, the lapse $N$, and the three components of the shift $N^a$.

#### 2.1.2 Extrinsic Curvature and the ADM Action

The manner in which $\Sigma_t$ is embedded in $\mathcal M$ is described by the _extrinsic curvature_

$$
K_{ab} \coloneqq q_a{}^\mu q_b{}^\nu\, \nabla_\mu n_\nu
= \frac{1}{2N}\big( \dot q_{ab} - D_a N_b - D_b N_a \big)
= \frac{1}{2N}\big( \dot q_{ab} - {\mathcal{L}}_{\vec N}\, q_{ab} \big),
\tag{2.5}
$$

where $q_a{}^\mu$ is the projector onto $\Sigma_t$, $D_a$ is the Levi-Civita covariant derivative of $q_{ab}$, and $\dot q_{ab} = \partial_t q_{ab}$. The tensor $K_{ab}$ is symmetric, and we denote its trace by $K = q^{ab}K_{ab}$. It plays the role of a “velocity” of the spatial metric.

The Gauss–Codazzi relation expresses the scalar curvature of $g_{\mu\nu}$ in terms of the scalar curvature $R[q]$ of $q_{ab}$ and the extrinsic curvature [40]:

$$
{}^{(4)}\!R = R[q] + K_{ab}K^{ab} - K^2 + \nabla_\mu v^\mu ,
\tag{2.6}
$$

where the last term is a total divergence. Omitting this term, together with the boundary terms, and using $\sqrt{-g} = N\sqrt q$, the Einstein–Hilbert action (1.11) (with $\Lambda = 0$) becomes the _ADM action_ [14, 15]

$$
S[q,N,\vec N] = \frac{1}{16\pi G}\int {\mathrm{d}} t \int_\Sigma {\mathrm{d}}^3x\; \sqrt q\, N\, \big( K_{ab}K^{ab} - K^2 + R[q] \big).
\tag{2.7}
$$

The Lagrangian does not depend on the time derivatives $\dot N$ and $\dot N^a$: the lapse and the shift are not dynamical variables but Lagrange multipliers. This gives rise to the primary constraints $\pi_N \approx 0$ and $\pi_{\vec N} \approx 0$ on their conjugate momenta.

#### 2.1.3 Hamiltonian Formulation

The momentum conjugate to the spatial metric is

$$
\pi^{ab} \coloneqq \frac{\partial \mathcal L}{\partial \dot q_{ab}} = \frac{\sqrt q}{16\pi G}\,\big( K^{ab} - K q^{ab} \big),
\qquad\text{equivalently}\qquad
K_{ab} = \frac{16\pi G}{\sqrt q}\,\Big( \pi_{ab} - \tfrac12\, \pi\, q_{ab} \Big),
\tag{2.8}
$$

with $\pi = q_{ab}\pi^{ab}$. Up to boundary terms, the Legendre transformation yields

$$
S[q,\pi,N,\vec N] = \int{\mathrm{d}} t \int_\Sigma {\mathrm{d}}^3x\; \Big( \pi^{ab}\dot q_{ab} - N\, C - N^a\, C_a \Big),
\tag{2.9}
$$

where

$$
\begin{align}
C &= 16\pi G\; G_{abcd}\, \pi^{ab}\pi^{cd} - \frac{\sqrt q}{16\pi G}\, R[q]
= \frac{16\pi G}{\sqrt q}\Big( \pi_{ab}\pi^{ab} - \tfrac12\pi^2 \Big) - \frac{\sqrt q}{16\pi G}\, R[q], \tag{2.10} \\
C_a &= -2\, q_{ac}\, D_b\, \pi^{bc}, \tag{2.11}
\end{align}
$$

and where

$$
G_{abcd} = \frac{1}{2\sqrt q}\,\big( q_{ac}q_{bd} + q_{ad}q_{bc} - q_{ab}q_{cd} \big)
\tag{2.12}
$$

is the _DeWitt supermetric_ [47]. Since the lapse and the shift appear linearly, variation with respect to them imposes

$$
C \approx 0, \qquad C_a \approx 0 .
\tag{2.13}
$$

These are, respectively, the _Hamiltonian_ (or scalar) _constraint_ and the _diffeomorphism_ (or vector) _constraint_. From the point of view of the Dirac algorithm, they are the secondary constraints generated by $\pi_N\approx0$ and $\pi_{\vec N}\approx0$. The Hamiltonian of general relativity is therefore a linear combination of constraints,

$$
H[N,\vec N] = \int_\Sigma {\mathrm{d}}^3x\,\big( N\, C + N^a C_a \big) \approx 0 ,
\tag{2.14}
$$

up to a boundary term which, for an asymptotically flat spacetime, yields the ADM energy [14]. As for the parametrized systems of Section 1.4, the Hamiltonian vanishes on solutions: evolution in $t$ is a gauge transformation.

**Constraint algebra.** We introduce the smeared constraints $D(\vec N) = \int_\Sigma N^a C_a$ and $H(N) = \int_\Sigma N C$. The vector constraint generates spatial diffeomorphisms: ${\left\{{q_{ab}},\,{D(\vec N)}\right\}} = {\mathcal{L}}_{\vec N} q_{ab}$. The constraints satisfy the hypersurface deformation algebra

$$
\begin{aligned}
{\left\{{D(\vec N)},\,{D(\vec M)}\right\}} &= D\big( [\vec N, \vec M] \big), \\
{\left\{{D(\vec N)},\,{H(M)}\right\}} &= H\big( {\mathcal{L}}_{\vec N} M \big), \\
{\left\{{H(N)},\,{H(M)}\right\}} &= D\big( q^{ab}\,( N\partial_b M - M \partial_b N ) \big),
\end{aligned}
\tag{2.15}
$$

where the signs depend on the convention adopted for the Poisson bracket. The constraints are therefore first class. The last bracket involves the metric $q^{ab}$: these are _structure functions_ rather than structure constants, so that (2.15) is not a Lie algebra. This property lies at the origin of many of the difficulties encountered in quantizing the Hamiltonian constraint (Section 3.8).

**Degrees of freedom.** The phase space $(q_{ab},\pi^{ab})$ is $12$-dimensional at each point, and there are four first-class constraints. From Eq. (1.35), general relativity therefore has $\tfrac12(12 - 2\times4) = 2$ degrees of freedom per spatial point, which correspond to the two polarizations of gravitational waves.

#### 2.1.4 The Hamilton–Jacobi and Wheeler–DeWitt Equations

The gravitational analog of the relativistic Hamilton–Jacobi equation (1.41) is obtained by setting $\pi^{ab} = \delta S/\delta q_{ab}$ for a functional $S[q]$ of the spatial metric [50]:

$$
16\pi G\; G_{abcd}\, \frac{\delta S}{\delta q_{ab}}\, \frac{\delta S}{\delta q_{cd}} - \frac{\sqrt q}{16\pi G}\, R[q] = 0,
\qquad
D_a\, \frac{\delta S}{\delta q_{ab}} = 0 .
\tag{2.16}
$$

The second equation expresses the invariance of $S[q]$ under spatial diffeomorphisms. We note the absence of any time variable: as for (1.41), time is encoded in the correlations among the components of the metric themselves. The formal quantization $\pi^{ab} \mapsto -{\mathrm{i}}\hbar\, \delta/\delta q_{ab}$ of the scalar constraint leads to the _Wheeler–DeWitt equation_ [47, 48]

$$
\Big( -16\pi G\hbar^2\; G_{abcd}\, \frac{\delta^2}{\delta q_{ab}\,\delta q_{cd}} - \frac{\sqrt q}{16\pi G}\, R[q] \Big)\, \Psi[q] = 0 ,
\tag{2.17}
$$

supplemented by the requirement that $\Psi[q]$ be invariant under spatial diffeomorphisms. This equation is, however, ill defined: it contains the product of two functional derivatives at the same point, and neither a background-independent regularization nor an inner product on the space of its solutions is available. Loop quantum gravity can be regarded as a way of giving a precise meaning to this program by means of a change of canonical variables.

### 2.2 Triads and the Ashtekar–Barbero Connection

#### 2.2.1 Triads and the Densitized Triad

Rather than using a spacetime tetrad, we introduce on each leaf $\Sigma_t$ a _triad_ $e^i_a$, which defines the spatial metric through

$$
q_{ab} = \delta_{ij}\, e^i_a\, e^j_b, \qquad i,j = 1,2,3 .
\tag{2.18}
$$

This triad coincides with the spatial components of the tetrad in the time gauge $e^0|_\Sigma = 0$ of Section 1.3.3. Its determinant is

$$
\det(e) = \tfrac{1}{3!}\, \tilde\epsilon^{abc}\, \epsilon_{ijk}\, e^i_a e^j_b e^k_c, \qquad \sqrt q = {\left|{\det(e)}\right|} .
\tag{2.19}
$$

The introduction of the triad adds a local ${\mathrm{SO}}(3)$ gauge invariance, $e^i_a \mapsto O^i{}_j(x)\, e^j_a$, which expresses the freedom to choose an orthonormal frame at each point of $\Sigma$. It is convenient to use the _densitized triad_

$$
E^a_i \coloneqq \sqrt q\; e^a_i = \tfrac12\, \tilde\epsilon^{abc}\, \epsilon_{ijk}\, e^j_b\, e^k_c ,
\tag{2.20}
$$

where $e^a_i$ is the inverse triad and where we have assumed $\det(e) > 0$. It is a vector density of weight one, which satisfies

$$
\det(E) = q, \qquad q\, q^{ab} = \delta^{ij}\, E^a_i E^b_j .
\tag{2.21}
$$

The associated 2-form $E^i = \tfrac12\tilde\epsilon_{abc}E^a_i\,{\mathrm{d}} x^b\wedge{\mathrm{d}} x^c$ coincides with the 2-form $\tfrac12\epsilon^i{}_{jk}\,e^j\wedge e^k$ of (1.28).

Similarly, we define the triadic version of the extrinsic curvature, $K^i_a \coloneqq K_{ab}\, e^b_j\,\delta^{ji}$. The variables $(K^i_a, E^a_i)$ form a canonical pair, of dimension $9+9$ at each point:

$$
{\left\{{K^i_a(x)},\,{E^b_j(y)}\right\}} = 8\pi G\; \delta_a^b\, \delta^i_j\, \delta^{(3)}(x,y), \qquad
{\left\{{K^i_a(x)},\,{K^j_b(y)}\right\}} = {\left\{{E^a_i(x)},\,{E^b_j(y)}\right\}} = 0 .
\tag{2.22}
$$

The phase space thus extended has six more dimensions at each point than the ADM phase space $(q_{ab},\pi^{ab})$ ($9+9$ instead of $6+6$). To recover the latter, one must require that $K_{ab} = K^i_a e_{ib}$ be symmetric, which reads

$$
G_i \coloneqq \epsilon_{ijk}\, K^j_a\, E^{a k} \approx 0 .
\tag{2.23}
$$

This constraint generates ${\mathrm{SO}}(3)$ rotations of the triad; for a reason that will become apparent below, we shall call it the _Gauss constraint_.

#### 2.2.2 The Ashtekar–Barbero Connection

Let $\Gamma^i_a$ be the spin connection associated with the triad, that is, the unique torsion-free ${\mathfrak{so}}(3)$ connection,

$$
\partial_{[a} e^i_{b]} + \epsilon^i{}_{jk}\, \Gamma^j_{[a}\, e^k_{b]} = 0 ,
\tag{2.24}
$$

which can be expressed explicitly in terms of the triad and its first derivatives; in terms of the spacetime spin connection, $\Gamma^i = -\tfrac12\epsilon^{ijk}\omega_{jk}|_\Sigma$. We define the _Ashtekar–Barbero connection_ [10, 12]

$$
\boxed{\;A^i_a \coloneqq \Gamma^i_a + \gamma\, K^i_a\;}
\tag{2.25}
$$

where $\gamma$ is the Barbero–Immirzi parameter. The passage from $(K,E)$ to $(A,E)$ is a canonical transformation: because $\Gamma^i_a$ is the functional derivative, with respect to $E^a_i$, of a generating functional, the new brackets read [3]

$$
{\left\{{A^i_a(x)},\,{E^b_j(y)}\right\}} = 8\pi G\gamma\; \delta_a^b\,\delta^i_j\,\delta^{(3)}(x,y), \qquad
{\left\{{A^i_a(x)},\,{A^j_b(y)}\right\}} = {\left\{{E^a_i(x)},\,{E^b_j(y)}\right\}} = 0 .
\tag{2.26}
$$

We thus recover exactly the canonical structure obtained from the Holst action: in the time gauge, the kinetic term of (1.23) reads $\frac{1}{8\pi G\gamma}\int E^a_i\, \dot A^i_a$ (see Section 1.3.3 and [11]). The normalized conjugate momentum is often denoted by $P^a_i \coloneqq E^a_i/(8\pi G\gamma)$, so that ${\left\{{A^i_a(x)},\,{P^b_j(y)}\right\}} = \delta_a^b\delta^i_j\delta^{(3)}(x,y)$.

**The choice of $\gamma$.** For $\gamma = \pm{\mathrm{i}}$, the connection (2.25) is the complex (anti-)self-dual connection introduced by Ashtekar [8, 9]. In this case, the Hamiltonian constraint takes a remarkably simple polynomial form (see below), but the connection is complex, and one must impose reality conditions ensuring that the reconstructed metric is real; this has proved very difficult at the quantum level. Barbero [10] showed that $\gamma$ can be chosen to be real; the connection is then a real ${\mathrm{SU}}(2)$ connection, at the price of a more complicated Hamiltonian constraint. This is the choice adopted in loop quantum gravity. Immirzi [12, 13] pointed out that the quantum theories corresponding to different values of $\gamma$ are not unitarily equivalent (see also [51]).

#### 2.2.3 The Constraints in Ashtekar–Barbero Variables

The curvature of the Ashtekar–Barbero connection is

$$
F^i_{ab} = \partial_a A^i_b - \partial_b A^i_a + \epsilon^i{}_{jk}\, A^j_a A^k_b .
\tag{2.27}
$$

Expressed in the new variables, the constraints of general relativity read [3]

$$
\begin{align}
G_i &= \partial_a E^a_i + \epsilon_{ij}{}^k A^j_a E^a_k \eqqcolon \mathcal D_a E^a_i \approx 0, \tag{2.28} \\
C_a &= \frac{1}{8\pi G\gamma}\, F^i_{ab}\, E^b_i \approx 0, \tag{2.29} \\
C &= \frac{1}{16\pi G}\, \frac{E^a_i E^b_j}{\sqrt{{\left|{\det E}\right|}}}\,\Big( \epsilon^{ij}{}_k\, F^k_{ab} - 2\big(1+\gamma^2\big)\, K^i_{[a} K^j_{b]} \Big) \approx 0 . \tag{2.30}
\end{align}
$$

The Gauss constraint (2.28) has exactly the form of the Gauss law ${\vec{{\nabla}}}\cdot{\vec{{E}}} = 0$ of electromagnetism, extended to the non-Abelian case: it generates the ${\mathrm{SU}}(2)$ gauge transformations of the pair $(A,E)$, under which $A$ transforms as a connection and $E$ as an electric field in the adjoint representation. It coincides with (2.23) up to a factor of $\gamma$, since the $\Gamma$-dependent part of $\mathcal D_a E^a_i$ vanishes identically. The vector constraint (2.29) coincides with the ADM diffeomorphism constraint up to a combination of the Gauss constraint. In the scalar constraint (2.30), $K^i_a = (A^i_a - \Gamma^i_a)/\gamma$ is a non-polynomial function of $E$ through $\Gamma[E]$. The first term, called the Euclidean part, is the only one that survives for $\gamma = \pm{\mathrm{i}}$; this is the simple form mentioned above. In the presence of a cosmological constant, the term $\frac{\Lambda}{8\pi G}\sqrt{{\left|{\det E}\right|}}$ is added to $C$, with $\det E = \tfrac{1}{3!}\tilde\epsilon_{abc}\,\epsilon^{ijk}E^a_iE^b_jE^c_k$.

The action of general relativity then takes the form of a constrained gauge theory,

$$
S[A,E,\Lambda^i,N^a,N] = \int {\mathrm{d}} t\int_\Sigma {\mathrm{d}}^3 x\; \Big( \frac{1}{8\pi G\gamma}\, E^a_i\,\dot A^i_a - \Lambda^i G_i - N^a C_a - N\, C \Big),
\tag{2.31}
$$

where $\Lambda^i$, $N^a$ and $N$ are Lagrange multipliers (the normalization of $\Lambda^i$ absorbs that of $G_i$), and the Hamiltonian is again a linear combination of constraints. The phase space $(A,E)$ is $18$-dimensional at each point, and there are $3+3+1 = 7$ first-class constraints; we thus recover $\tfrac12(18 - 2\times7) = 2$ degrees of freedom per point, as expected.

General relativity is thus formulated as a theory defined on the space of ${\mathrm{SU}}(2)$ connections, with the same phase space as an ${\mathrm{SU}}(2)$ Yang–Mills theory but with additional constraints—the diffeomorphism and Hamiltonian constraints—which reflect the absence of any background structure. This similarity with gauge theories is the starting point of the quantization presented in the next chapter.

### 2.3 Geometric Interpretation: Flux and Area

The densitized triad admits a simple geometric interpretation, which will be central to the construction of the geometric operators. Let $S\subset\Sigma$ be an embedded surface, parametrized by $\sigma = (\sigma^1,\sigma^2) \mapsto x^a(\sigma)$, and let

$$
n_a(\sigma) = \tilde\epsilon_{abc}\, \frac{\partial x^b}{\partial\sigma^1}\, \frac{\partial x^c}{\partial\sigma^2}
\tag{2.32}
$$

be its densitized conormal, which is defined without recourse to the metric. The determinant of the induced metric $h_{\alpha\beta} = q_{ab}\,\partial_\alpha x^a\partial_\beta x^b$ satisfies $\det h = q\, q^{ab}n_a n_b$, so that, from Eq. (2.21),

$$
A(S) = \int_S {\mathrm{d}}^2\sigma\, \sqrt{\det h} = \int_S {\mathrm{d}}^2\sigma\; \sqrt{ \delta^{ij}\, E^a_i n_a\, E^b_j n_b } .
\tag{2.33}
$$

The area of a surface is therefore a function of the densitized triad alone. We define the _flux_ of $E$ across $S$:

$$
E_i(S) \coloneqq \int_S E_i = \int_S {\mathrm{d}}^2\sigma\; E^a_i\, n_a .
\tag{2.34}
$$

For a surface small enough that the integrand of (2.33) is approximately constant, we have $A(S) \simeq {\left|{{\vec{{E}}}(S)}\right|}$: the flux ${\vec{{E}}}(S)$ is an internal vector normal to the surface, whose norm is the area of the surface. The area of an arbitrary surface is obtained by partitioning it into small surfaces $S_I$:

$$
A(S) = \lim_{S_I\to 0}\; \sum_I \sqrt{E_i(S_I)\, E^i(S_I)} .
\tag{2.35}
$$

This expression, which involves only fluxes, will be promoted to an operator in the next chapter.

The flux admits a second interpretation, which follows from Section 1.3.3. According to (1.28), the vector ${\vec{{L}}}_S = -{\vec{{E}}}(S)/(8\pi G\gamma)$ is the rotation part of the generator of the Lorentz transformations associated with the surface $S$; by (2.26), it is also the generator of the ${\mathrm{SU}}(2)$ rotations of the connection in the neighborhood of $S$. The linear simplicity constraint ${\vec{{K}}} = \gamma{\vec{{L}}}$ then relates the area of $S$ to the norm of the boost generator:

$$
{\left|{{\vec{{K}}}_S}\right|} = \frac{A(S)}{8\pi G} .
\tag{2.36}
$$

Up to the factor $8\pi G$, the area of a surface is thus the norm of the generator of the boosts that leave the surface invariant. We shall use this relation, which is independent of $\gamma$, to determine the local energy of a horizon in Chapter 4.

Finally, we observe that the canonical variables admit natural integrations that require no metric: the connection $A^i_a$ is a 1-form, which is naturally integrated along curves, and the densitized triad $E^a_i$ is a vector density, dual to a 2-form, which is naturally integrated over surfaces. These two observations underlie the choice of the elementary variables of the quantum theory: holonomies and fluxes.

## 3 Quantization and Geometric Operators

In this chapter we address the quantization of general relativity formulated in Ashtekar–Barbero variables, following the Dirac program recalled in Section 1.4. We first choose the elementary variables—holonomies and fluxes—and construct the kinematical Hilbert space on which they are represented. We then impose, in turn, the Gauss constraint, which leads to the spin network basis, and the diffeomorphism constraint. Next, we construct the area and volume operators, whose discrete spectra underlie the physical interpretation of the theory, before presenting the quantization of the Hamiltonian constraint proposed by Thiemann. This chapter draws on [1, 3, 38, 52, 53] and on the original articles cited in the text.

### 3.1 Holonomies and Fluxes

#### 3.1.1 Choice of Elementary Variables

Not every function on phase space can be quantized: the Groenewold–van Hove theorem forbids, already in ordinary quantum mechanics, a consistent assignment of an operator to every classical function. We therefore choose a subalgebra of _elementary variables_, which we represent exactly, the other observables being subsequently constructed from them. These variables must (i) form an algebra that is closed under the Poisson bracket, (ii) separate the points of phase space, so that any other function can in principle be reconstructed from them, (iii) transform simply under ${\mathrm{SU}}(2)$ gauge transformations and diffeomorphisms, and (iv) be defined without recourse to any background structure, in particular to any metric.

The fields $A^i_a(x)$ and $E^a_i(x)$ at a point are not suitable: their brackets (2.26) are distributions, and the corresponding operators would be ill defined. In field theory on Minkowski space, this difficulty is resolved by smearing the fields against three-dimensional test functions; the resulting Fock representations, however, depend in an essential way on a background metric. The remark concluding the previous chapter provides a background-independent alternative: the connection, which is a 1-form, is integrated along curves, and the densitized triad, which is dual to a 2-form, is integrated over surfaces.

#### 3.1.2 Holonomies

Let $e : [0,1] \to \Sigma$ be an oriented curve (a _link_), with initial point $s(e) = e(0)$ and final point $t(e) = e(1)$. The _holonomy_ of the connection $A$ along $e$ is the element $h_e[A] \in {\mathrm{SU}}(2)$ defined by parallel transport along $e$: it is the value at $s = 1$ of the solution of

$$
\frac{{\mathrm{d}}}{{\mathrm{d}} s}\, h_e(s) = h_e(s)\, A\big(e(s)\big), \qquad h_e(0) = \mathbb 1,
\qquad A\big(e(s)\big) \coloneqq A^i_a\big(e(s)\big)\, \dot e^a(s)\, \tau_i ,
\tag{3.1}
$$

where $\dot e^a = {\mathrm{d}} e^a/{\mathrm{d}} s$. The solution takes the form of a path-ordered exponential:

$$
h_e[A] = {\mathcal{P}\!\exp} \int_e A
= \mathbb 1 + \sum_{n=1}^{\infty} \int_{0<s_1<\cdots<s_n<1} {\mathrm{d}} s_1\cdots{\mathrm{d}} s_n\;
A\big(e(s_1)\big)\cdots A\big(e(s_n)\big) .
\tag{3.2}
$$

In the spin-$j$ representation of ${\mathrm{SU}}(2)$, we write $h^{(j)}_e = D^{(j)}(h_e)$, where $D^{(j)}$ denotes the Wigner matrices (Appendix A). For an infinitesimal link of coordinate length $\varepsilon$ and direction $\dot e^a$, we have $h_e = \mathbb 1 + \varepsilon\, \dot e^a A_a + {\mathcal{O}\!\left({\varepsilon^2}\right)}$: the connection can be recovered from the holonomies of small links.

The holonomy does not depend on the parametrization of $e$ and satisfies

$$
h_{e_1 \circ e_2} = h_{e_1}\, h_{e_2}, \qquad h_{e^{-1}} = h_e^{-1},
\tag{3.3}
$$

where $e_1\circ e_2$ denotes the link obtained by traversing $e_1$ and then $e_2$, and $e^{-1}$ denotes the link $e$ traversed in the opposite direction. Under a gauge transformation $g : \Sigma \to {\mathrm{SU}}(2)$, $A \mapsto gAg^{-1} + g\,{\mathrm{d}} g^{-1}$, the holonomy transforms only at its endpoints:

$$
h_e[A] \longmapsto g\big(s(e)\big)\, h_e[A]\, g\big(t(e)\big)^{-1} .
\tag{3.4}
$$

Under a diffeomorphism $\phi$ of $\Sigma$, it is mapped to the holonomy along the image link:

$$
h_e[\phi^*A] = h_{\phi\circ e}[A] .
\tag{3.5}
$$

These two properties make the holonomy particularly well suited to the construction of invariant observables.

#### 3.1.3 Fluxes and the Holonomy–Flux Algebra

Let $S\subset\Sigma$ be an oriented surface with conormal $n_a$ (2.32), and let $f^i$ be an ${\mathfrak{su}}(2)$-valued function on $S$. The _flux_ of the densitized triad through $S$ is

$$
E_f(S) \coloneqq \int_S f^i E_i = \int_S {\mathrm{d}}^2\sigma\; f^i(\sigma)\, E^a_i\big(x(\sigma)\big)\, n_a(\sigma) ;
\tag{3.6}
$$

for constant $f^i$, we recover the components $E_i(S)$ of (2.34). Holonomies and fluxes form an algebra whose brackets are well defined. Consider a link $e$ that crosses the surface $S$ transversally at an interior point $p = e(s_p)$ (Fig. 3.1), and denote by $e_1$ and $e_2$ the portions of $e$ before and after $p$, so that $e = e_1\circ e_2$. Using the functional derivative

$$
\frac{\delta h_e[A]}{\delta A^i_a(x)} = \int_0^1 {\mathrm{d}} s\; \delta^{(3)}\big(x, e(s)\big)\, \dot e^a(s)\; h_{e_1(s)}\, \tau_i\, h_{e_2(s)},
\tag{3.7}
$$

where $e_1(s)$ and $e_2(s)$ are the portions of $e$ before and after $e(s)$, together with the bracket (2.26), we obtain

$$
{\left\{{h_e[A]},\,{E_i(S)}\right\}} = 8\pi G\gamma\; \varepsilon(e,S)\; h_{e_1}[A]\, \tau_i\, h_{e_2}[A] .
\tag{3.8}
$$

The sign $\varepsilon(e,S) = \pm1$ is determined by the relative orientation of $\dot e^a$ and $n_a$ at the intersection point: it arises from the integral $\int{\mathrm{d}}^2\sigma\,{\mathrm{d}} s\; n_a \dot e^a\, \delta^{(3)}(e(s),x(\sigma))$, which equals the sign of the Jacobian of the change of variables $(\sigma,s)\mapsto x$. One has $\varepsilon(e,S) = 0$ if $e$ does not meet $S$ or is contained in $S$, and $\varepsilon(e,S) = \pm\tfrac12$ if $e$ begins or ends on $S$. The result (3.8) is remarkable: the bracket of a holonomy with a flux is not a distribution but a regular function, which inserts a generator $\tau_i$ into the holonomy at the intersection point. Holonomies commute with one another, whereas fluxes associated with the same surface do not commute in general; this noncommutativity, which is required by the consistency of the algebra (Jacobi identity), has important geometric consequences (Section 3.7).

![A link e of spin j crossing a surface S at the point p. The Poisson bracket (3.8) of the holonomy h_e with the flux E_i(S) inserts the generator τ_i between the holonomies of the portions e₁ and e₂. The same configuration yields a contribution 8πγℓ_P²j(j+1) to the area of S (Section 3.6).](/uploads/research/lqg-edge-surface.png "Figure 3.1: A link e of spin j crossing a surface S at the point p. The Poisson bracket (3.8) of the holonomy h_e with the flux E_i(S) inserts the generator τ_i between the holonomies of the portions e₁ and e₂. The same configuration yields a contribution 8πγℓ_P²j(j+1) to the area of S (Section 3.6).")

### 3.2 The Loop Representation and the Mandelstam Identities

Historically, the theory was first formulated in terms of _Wilson loops_, from which loop quantum gravity takes its name [16, 17, 52]. For a closed curve $\alpha$ (a loop), the trace of the holonomy

$$
W_\alpha[A] \coloneqq {\operatorname{Tr}} h_\alpha[A] = {\operatorname{Tr}} {\mathcal{P}\!\exp} \oint_\alpha A
\tag{3.9}
$$

is gauge invariant, as follows from Eq. (3.4). Conversely, a theorem of Giles [54] ensures that knowledge of the Wilson loops for all loops determines the connection up to a gauge transformation: the Wilson loops generate the gauge-invariant functions of the connection, that is, the solutions of the Gauss constraint. This suggests representing quantum states by functions on the space of loops, related to the functionals $\Psi[A]$ by the _loop transform_

$$
\Psi(\alpha) = \int {\mathrm{d}}\mu[A]\; \overline{W_\alpha[A]}\;\Psi[A] ,
\tag{3.10}
$$

a functional analog of the Fourier transform, for a suitable measure ${\mathrm{d}}\mu$ (Section 3.3). The advantage of this _loop representation_ is that it makes the action of diffeomorphisms transparent: according to (3.5), a diffeomorphism-invariant state is a function $\Psi(\alpha)$ that depends only on the class of $\alpha$ modulo continuous deformations, that is, on its knot class. Knot theory thus arises naturally in quantum gravity.

**A knot invariant: the Gauss linking number.** An elementary example of a diffeomorphism-invariant function of two loops is the Gauss linking number. For two disjoint closed curves $\alpha$ and $\beta$ in $\mathbb R^3$,

$$
\mathrm{Lk}(\alpha,\beta) = \frac{1}{4\pi} \oint_\alpha {\mathrm{d}} s \oint_\beta {\mathrm{d}} t\;
\epsilon_{abc}\; \frac{\alpha^a(s) - \beta^a(t)}{{\left|{\alpha(s)-\beta(t)}\right|}^3}\; \dot\alpha^b(s)\, \dot\beta^c(t) .
\tag{3.11}
$$

This integral always takes an integer value, which is invariant under any continuous deformation of the curves that does not make them cross each other. For the Hopf link in Fig. 3.2(a), $\mathrm{Lk} = \pm1$ depending on the orientations; for two separated loops, Fig. 3.2(b), $\mathrm{Lk} = 0$. The converse is false: two loops with zero linking number may be nontrivially linked, as in the Whitehead link. The linking number is therefore only a partial invariant, but it illustrates the idea of a loop function that is invariant under smooth deformations.

![(a) Two linked loops (Hopf link), with linking number Lk(α,β) = 1. (b) Two unlinked loops, for which Lk(α,β) = 0.](/uploads/research/lqg-hopf-link.png "Figure 3.2: (a) Two linked loops (Hopf link), with linking number Lk(α,β) = 1. (b) Two unlinked loops, for which Lk(α,β) = 0.")

**Mandelstam identities.** The loop representation suffers from one difficulty: the Wilson loops are not independent. For two matrices $U,V\in{\mathrm{SU}}(2)$, the Cayley–Hamilton theorem gives $V + V^{-1} = ({\operatorname{Tr}} V)\,\mathbb 1$; multiplying by $U$ and taking the trace, we obtain

$$
{\operatorname{Tr}} U\, {\operatorname{Tr}} V = {\operatorname{Tr}} (UV) + {\operatorname{Tr}} (UV^{-1}) .
\tag{3.12}
$$

For two loops $\alpha$ and $\beta$ that share a point, this yields the _Mandelstam identities_ [55]

$$
W_\alpha\, W_\beta = W_{\alpha\circ\beta} + W_{\alpha\circ\beta^{-1}}, \qquad
W_\alpha = W_{\alpha^{-1}}, \qquad
W_{\alpha\circ\beta} = W_{\beta\circ\alpha},
\tag{3.13}
$$

where $\alpha\circ\beta$ denotes the loop obtained by traversing $\alpha$ and then $\beta$. The second identity expresses the reality of traces in ${\mathrm{SU}}(2)$ (${\operatorname{Tr}} U^{-1} = {\operatorname{Tr}} U^\dagger = \overline{{\operatorname{Tr}} U} = {\operatorname{Tr}} U$), and the third the cyclicity of the trace. Products of Wilson loops thus form an _overcomplete_ family, subject to nonlinear relations whose number grows rapidly with the number of loops. The systematic resolution of these relations leads to _spin networks_ [19], which form an orthonormal basis and whose construction relies on the representation theory of ${\mathrm{SU}}(2)$. We introduce them in Section 3.4, within the more general framework of cylindrical functions.

### 3.3 The Kinematical Hilbert Space

#### 3.3.1 Cylindrical Functions

A _graph_ $\Gamma\subset\Sigma$ is a finite collection of oriented links $e_1,\dots,e_L$ that meet only at their endpoints, which are called _nodes_. A _cylindrical function_ on $\Gamma$ is a functional of the connection that depends on it only through the holonomies along the links of $\Gamma$:

$$
\Psi_{\Gamma,f}[A] = f\big( h_{e_1}[A], \dots, h_{e_L}[A] \big),
\tag{3.14}
$$

where $f : {\mathrm{SU}}(2)^L \to \mathbb C$ is a continuous function. Wilson loops and their products are special cases. We denote by ${\mathrm{Cyl}}$ the space of all cylindrical functions, on all graphs.

#### 3.3.2 Inner Product and the Ashtekar–Lewandowski Measure

For two cylindrical functions defined on the same graph, we set

$$
{\left\langle{\Psi_{\Gamma,f}}\middle|{\Psi_{\Gamma,g}}\right\rangle} \coloneqq \int_{{\mathrm{SU}}(2)^L} {\mathrm{d}} h_1\cdots{\mathrm{d}} h_L\; \overline{f(h_1,\dots,h_L)}\; g(h_1,\dots,h_L),
\tag{3.15}
$$

where ${\mathrm{d}} h$ is the normalized Haar measure on ${\mathrm{SU}}(2)$, which is both left and right invariant. If the two functions are defined on different graphs $\Gamma$ and $\Gamma'$, we regard both of them as cylindrical functions on a graph $\Gamma''$ containing $\Gamma\cup\Gamma'$; the invariance and the normalization $\int{\mathrm{d}} h = 1$ of the Haar measure guarantee that the result does not depend on the choice of $\Gamma''$. This inner product defines a measure, the _Ashtekar–Lewandowski measure_ $\mu_{\mathrm{AL}}$, on a completion $\bar{\mathcal A}$ of the space of connections (the “generalized connections”) [56]. The _kinematical Hilbert space_ is the completion of ${\mathrm{Cyl}}$ with respect to this inner product:

$$
{\mathcal{H}_{\mathrm{kin}}} = L^2\big(\bar{\mathcal A}, {\mathrm{d}}\mu_{\mathrm{AL}}\big).
\tag{3.16}
$$

No background metric enters this construction: only the differentiable structure of $\Sigma$ is used.

#### 3.3.3 Elementary Operators

Holonomies act by multiplication,

$$
\big(\hat h^{(j)}_e \Psi\big)[A] = h^{(j)}_e[A]\; \Psi[A],
\tag{3.17}
$$

and fluxes by differentiation, $\hat E_i(S) = -{\mathrm{i}}\hbar\, 8\pi G\gamma \int_S{\mathrm{d}}^2\sigma\, n_a\, \delta/\delta A^i_a$. On a cylindrical function whose graph meets $S$ only at an interior point $p$ of a link $e = e_1\circ e_2$, we obtain, from Eq. (3.7),

$$
\hat E_i(S)\, \Psi_{\Gamma,f} = -{\mathrm{i}}\hbar\, 8\pi G\gamma\;\varepsilon(e,S)\;
\big( h_{e_1}\, \tau_i\, h_{e_2} \big)^{A}{}_{B}\, \frac{\partial f}{\partial (h_e)^{A}{}_{B}} .
\tag{3.18}
$$

When several links meet $S$, the contributions of each intersection point and of each incident link are summed; for a link that begins or ends on $S$, the operator acts as an invariant vector field on ${\mathrm{SU}}(2)$, that is, as a generator $\hbar\,8\pi G\gamma\,J_i = 8\pi\gamma{\ell_{\mathrm{P}}}^2 J_i$ (up to a sign and a factor $\tfrac12$) of the action of ${\mathrm{SU}}(2)$ on the corresponding endpoint of the holonomy. One verifies directly that $[\hat h_e, \hat E_i(S)] = {\mathrm{i}}\hbar\,\widehat{{\left\{{h_e},\,{E_i(S)}\right\}}}$: Equations (3.17) and (3.18) thus provide a representation of the holonomy–flux algebra.

This representation enjoys a remarkable uniqueness property: the LOST theorem [57, 58] establishes that it is the unique cyclic representation of the holonomy–flux algebra whose cyclic vector is invariant under spatial diffeomorphisms, the latter being implemented unitarily. The requirement of background independence is therefore sufficient to fix the kinematical representation. Two unusual properties deserve to be emphasized. First, the operators $\hat h_e$ are well defined but do not depend continuously on $e$: there is no operator $\hat A^i_a(x)$ corresponding to the connection itself. Second, ${\mathcal{H}_{\mathrm{kin}}}$ is not separable, since two cylindrical functions on distinct graphs are orthogonal, however close these graphs may be.

### 3.4 Gauss Constraint and Spin Networks

#### 3.4.1 Gauge Invariance

According to (3.4), a gauge transformation $g$ acts on a cylindrical function as

$$
\big(U_g\Psi_{\Gamma,f}\big)[A] = f\Big( g_{s(e_1)}\, h_{e_1}\, g^{-1}_{t(e_1)}, \dots, g_{s(e_L)}\, h_{e_L}\, g^{-1}_{t(e_L)} \Big),
\tag{3.19}
$$

where $g_n = g(n)$: only the values of $g$ at the nodes of the graph are involved. The Gauss constraint therefore requires $f$ to be invariant under the independent action of ${\mathrm{SU}}(2)$ at each node. To construct such functions, we decompose $f$ into irreducible representations. By the Peter–Weyl theorem, the functions $\sqrt{2j+1}\,D^{(j)}_{mn}(h)$, for $j\in\mathbb N/2$ and $-j\le m,n\le j$, form an orthonormal basis of $L^2({\mathrm{SU}}(2),{\mathrm{d}} h)$:

$$
\int_{{\mathrm{SU}}(2)}{\mathrm{d}} h\;\overline{D^{(j)}_{mn}(h)}\,D^{(j')}_{m'n'}(h) = \frac{\delta_{jj'}\,\delta_{mm'}\,\delta_{nn'}}{2j+1}.
\tag{3.20}
$$

A cylindrical function on $\Gamma$ can therefore be expanded in terms of the products $\prod_e D^{(j_e)}_{m_en_e}(h_e)$. At the node $n$, the indices $m_e$ (outgoing links) and $n_e$ (incoming links) transform according to the tensor product of the representations of the incident links; gauge invariance requires that they be contracted with an invariant tensor, called an _intertwiner_,

$$
\iota_n \in \mathrm{Inv}_{{\mathrm{SU}}(2)}\Big( \bigotimes_{e\ \text{incident to}\ n} V_{j_e} \Big),
\tag{3.21}
$$

where $V_j$ is the representation space of spin $j$ (or its dual, depending on the orientation of the link).

#### 3.4.2 Spin Networks

> **Definition 3.1.**
>
> A _spin network_ is a triple $(\Gamma, j_e, \iota_n)$ consisting of an oriented graph $\Gamma$, a nonzero spin $j_e\in\mathbb N^*/2$ assigned to each link, and an intertwiner $\iota_n$ assigned to each node. The corresponding _spin network state_ is the cylindrical function
>
> $$
> \Psi_{\Gamma,j_e,\iota_n}[A] = \Big( \bigotimes_{e\in\Gamma} D^{(j_e)}\big(h_e[A]\big) \Big) \cdot \Big( \bigotimes_{n\in\Gamma} \iota_n \Big),
> \tag{3.22}
> $$
>
> where the dot denotes the contraction of all magnetic indices according to the structure of the graph.

Spin network states are gauge invariant by construction. From Eq. (3.20), and for orthonormal intertwiners, they satisfy

$$
{\left\langle{\Psi_{\Gamma,j_e,\iota_n}}\middle|{\Psi_{\Gamma',j'_e,\iota'_n}}\right\rangle} = \delta_{\Gamma\Gamma'}\;\delta_{j_ej'_e}\;\delta_{\iota_n\iota'_n},
\tag{3.23}
$$

and they form an orthonormal basis of the gauge-invariant Hilbert space ${\mathcal{H}_{\mathrm{kin}}}^{{\mathrm{SU}}(2)}$ [19]. They thus resolve the Mandelstam identities: every state of the loop representation can be written uniquely as a linear combination of spin networks. The Wilson loop (3.9) is the simplest example: it is the spin network consisting of a single loop of spin $\tfrac12$.

The structure of the intertwiners depends on the valence of the nodes (Appendix A). For a bivalent node, a nonzero intertwiner exists only if the two spins are equal, and it is then unique: it is the identity, which amounts to merging the two links. For a trivalent node with spins $(j_1,j_2,j_3)$, the space of intertwiners is one-dimensional if the spins satisfy the triangle conditions ${\left|{j_1-j_2}\right|}\le j_3\le j_1+j_2$ and $j_1+j_2+j_3$ is an integer, and it is trivial otherwise; the intertwiner is then given by the Wigner $3j$ symbol. For a four-valent node, the space of intertwiners generally has dimension greater than one; a basis is labeled by a “virtual” spin $k$ associated with the coupling channel $(j_1j_2)(j_3j_4)$. Figure 3.3 shows a spin network on the tetrahedral graph.

![A spin network on the tetrahedral graph: four trivalent nodes carrying the intertwiners ι₁,,ι₄ and six links carrying spins. At each node, the spins 12, 1 and 32 satisfy the triangle conditions, and their sum is an integer. In Penrose's notation (18), a link of spin j carries the “color” 2j and corresponds to a representation of dimension 2j+1.](/uploads/research/lqg-spin-network.png "Figure 3.3: A spin network on the tetrahedral graph: four trivalent nodes carrying the intertwiners ι₁,,ι₄ and six links carrying spins. At each node, the spins 12, 1 and 32 satisfy the triangle conditions, and their sum is an integer. In Penrose's notation [18], a link of spin j carries the “color” 2j and corresponds to a representation of dimension 2j+1.")

Spin networks were introduced by Penrose [18], in an attempt to construct space from the combinatorics of angular momentum, and were used by Rovelli and Smolin [19] to resolve the overcompleteness of the loop basis. In Penrose's notation, a link of “color” $N$ corresponds to the spin $j = N/2$, that is, to a representation of dimension $N+1$; holonomies in the spin-$j$ representation can be constructed as the symmetrized tensor product of $2j$ holonomies in the fundamental representation.

### 3.5 Diffeomorphisms and s-Knots

A diffeomorphism $\phi$ of $\Sigma$ acts unitarily on ${\mathcal{H}_{\mathrm{kin}}}$ by displacing the graphs:

$$
U_\phi\, \Psi_{\Gamma,j_e,\iota_n} = \Psi_{\phi(\Gamma),j_e,\iota_n} .
\tag{3.24}
$$

Unlike in the case of the Gauss constraint, this action has no infinitesimal generator on ${\mathcal{H}_{\mathrm{kin}}}$. Indeed, for a one-parameter family of diffeomorphisms $\phi_t$ generated by a vector field $\vec N$, with $\phi_t^*A = A + t\,{\mathcal{L}}_{\vec N}A + {\mathcal{O}\!\left({t^2}\right)}$, the graph $\phi_t(\Gamma)$ differs from $\Gamma$ for every $t\neq0$ as soon as $\vec N$ is not tangent to the graph, and ${\left\langle{\Psi_\Gamma}\middle|{U_{\phi_t}\Psi_\Gamma}\right\rangle} = 0$ does not tend to $1$ as $t\to0$: the representation is not weakly continuous. We therefore impose invariance under finite diffeomorphisms directly, $U_\phi\Psi = \Psi$. No nontrivial state in ${\mathcal{H}_{\mathrm{kin}}}$ is a solution; the solutions are elements of the algebraic dual ${\mathrm{Cyl}}^*$, constructed by a group averaging procedure. To a spin network state we associate the linear functional

$$
\eta\big[\Psi_{\Gamma,j_e,\iota_n}\big] \coloneqq \frac{1}{n_\Gamma} \sum_{\phi\,\in\,{\operatorname{Diff}}(\Sigma)/{\operatorname{Diff}}_\Gamma} {\left\langle{\Psi_{\phi(\Gamma),j_e,\iota_n}}\right|},
\tag{3.25}
$$

where ${\operatorname{Diff}}_\Gamma$ is the subgroup of diffeomorphisms that preserve the graph, so that the sum runs over the distinct images of $\Gamma$, and where $n_\Gamma$ is a normalization factor related to the symmetries of the graph. The sum is infinite, but its action on a given cylindrical function involves only finitely many nonzero terms:

$$
\eta\big[\Psi_{\Gamma,j_e,\iota_n}\big]\big(\Psi_{\Gamma',j'_e,\iota'_n}\big) \neq 0
\quad\Longleftrightarrow\quad
\text{there exists } \phi \text{ such that } \Gamma' = \phi(\Gamma),\; j'_e = j_e,\; \iota'_n = \iota_n .
\tag{3.26}
$$

The expression $\langle\eta[\Psi],\eta[\Psi']\rangle_{\mathrm{diff}} \coloneqq \eta[\Psi](\Psi')$ defines an inner product on the space ${\mathcal{H}_{\mathrm{diff}}}$ of diffeomorphism-invariant states. These states depend only on the equivalence class of the spin network under diffeomorphisms, called an _s-knot_: they encode the combinatorics of the graph, its spins, its intertwiners and the way in which it is knotted, but not its position in $\Sigma$. This is the quantum counterpart of the background independence discussed in Section 1.2: s-knots are not objects _in_ space; they _are_ space.

### 3.6 Geometric Operators

The area and volume operators were introduced by Rovelli and Smolin [20] and, within the rigorous framework presented here, by Ashtekar and Lewandowski [21, 22]; the spectrum of the volume operator was studied, in particular numerically, by Loll [59]. These are kinematical operators, defined on ${\mathcal{H}_{\mathrm{kin}}}$: although they are gauge invariant, they are not invariant under diffeomorphisms, since the surface or region under consideration is defined by its position in $\Sigma$. We return to this point at the end of the section.

#### 3.6.1 The Area Operator

According to (2.35), the area of a surface $S$ can be expressed in terms of the fluxes alone:

$$
A(S) = \lim_{S_I\to0}\,\sum_I \sqrt{E_i(S_I)\,E^i(S_I)} .
\tag{3.27}
$$

We quantize it by replacing the fluxes with the operators (3.18). Consider a spin network state whose graph meets $S$ at a finite number of points, and refine the partition $\{S_I\}$ until each $S_I$ contains at most one intersection point. Cells without intersections do not contribute. For a cell crossed transversally, at an interior point $p$, by a link of spin $j$, two applications of (3.18) give

$$
\begin{align}
\hat E_i(S_I)\,\hat E^i(S_I)\;\Psi
&= \big(-{\mathrm{i}}\hbar\,8\pi G\gamma\big)^2\; \big( \cdots h^{(j)}_{e_1}\, \tau^{(j)}_i\tau^{(j)i}\, h^{(j)}_{e_2} \cdots \big) \\
&= \big(8\pi\gamma{\ell_{\mathrm{P}}}^2\big)^2\; j(j+1)\; \Psi , \tag{3.28}
\end{align}
$$

where we have used $\tau^{(j)}_i\tau^{(j)i} = -j(j+1)\mathbb 1$ and $\hbar G = {\ell_{\mathrm{P}}}^2$. The operator $\hat E_i(S_I)\hat E^i(S_I)$ therefore acts diagonally, and its square root is defined by the spectral theorem. Summing over the intersection points, we obtain

$$
\boxed{\;\hat A(S)\, \Psi_{\Gamma,j_e,\iota_n} = 8\pi\gamma{\ell_{\mathrm{P}}}^2 \sum_{p\,\in\, S\cap\Gamma} \sqrt{j_p(j_p+1)}\;\; \Psi_{\Gamma,j_e,\iota_n}\;}
\tag{3.29}
$$

when all intersection points are points of transversal crossing. Spin network states are therefore eigenstates of the area operator, and its spectrum is _discrete_. When nodes of the graph lie on $S$, the general spectrum is [21]

$$
a_S = 4\pi\gamma{\ell_{\mathrm{P}}}^2 \sum_{p} \sqrt{ 2 j^{\mathrm u}_p(j^{\mathrm u}_p+1) + 2 j^{\mathrm d}_p(j^{\mathrm d}_p+1) - j^{\mathrm{u+d}}_p(j^{\mathrm{u+d}}_p+1) } ,
\tag{3.30}
$$

where $j^{\mathrm u}_p$ and $j^{\mathrm d}_p$ are the total spins of the links lying on either side of $S$ at the point $p$, and $j^{\mathrm{u+d}}_p$ is the total spin of their coupling; we recover (3.29) for $j^{\mathrm u}_p = j^{\mathrm d}_p = j_p$ and $j^{\mathrm{u+d}}_p = 0$.

The smallest nonzero eigenvalue, obtained for a single link of spin $\tfrac12$, is the _area quantum_

$$
a_0 = 4\sqrt3\,\pi\gamma\,{\ell_{\mathrm{P}}}^2 \simeq 21.8\,\gamma\,{\ell_{\mathrm{P}}}^2 .
\tag{3.31}
$$

For the value $\gamma_0\simeq0.274$ obtained in Chapter 4, $a_0 \simeq 6.0\,{\ell_{\mathrm{P}}}^2 \simeq 1.6\times10^{-69}\ \mathrm{m}^2$. The scale of the discreteness is set by the Barbero–Immirzi parameter, which illustrates the role of this parameter in the quantum theory. For large areas, the gap between successive eigenvalues of the full spectrum decreases rapidly, so that the spectrum appears quasi-continuous on macroscopic scales.

#### 3.6.2 The Volume Operator

In terms of the densitized triad, the volume of a region $R\subset\Sigma$ reads

$$
V(R) = \int_R {\mathrm{d}}^3x\,\sqrt{{\left|{\det E}\right|}} = \int_R {\mathrm{d}}^3x\,\sqrt{ \Big| \tfrac{1}{3!}\, \tilde\epsilon_{abc}\,\epsilon^{ijk}\, E^a_iE^b_jE^c_k \Big| } .
\tag{3.32}
$$

To regularize it, we divide $R$ into small cubic cells $R_I$ of coordinate size $\varepsilon$, and in each cell we choose three mutually transverse surfaces $S^1_I$, $S^2_I$, $S^3_I$ (Fig. 3.4). Since $E_i(S^a_I) \simeq \varepsilon^2 E^a_i$, we have

$$
V(R) = \lim_{\varepsilon\to0}\,\sum_I \sqrt{ \Big| \tfrac{1}{3!}\,\epsilon^{ijk}\,\tilde\epsilon_{abc}\; E_i(S^a_I)\,E_j(S^b_I)\,E_k(S^c_I) \Big| } ,
\tag{3.33}
$$

an expression that involves only fluxes and can therefore be quantized. The resulting operator acts nontrivially only on the nodes of the spin networks contained in $R$: $\hat V(R) = \sum_{n\in R}\hat V_n$. The details of the regularization (choice of the surfaces, averaging over their orientations) lead to two versions of the operator, due to Rovelli and Smolin [20] and to Ashtekar and Lewandowski [22], respectively, which differ in their action on certain nodes.

![Regularization of the volume operator: the region R is divided into small cells R_I, and the three fluxes entering (3.33) are evaluated on the surfaces S¹_I, S²_I and S³_I. Only the cells that contain a node of the spin network contribute.](/uploads/research/lqg-volume-cube.png "Figure 3.4: Regularization of the volume operator: the region R is divided into small cells R_I, and the three fluxes entering (3.33) are evaluated on the surfaces S¹_I, S²_I and S³_I. Only the cells that contain a node of the spin network contribute.")

The case of a four-valent node is particularly instructive. Classically, the volume of a tetrahedron can be written in terms of the area vectors ${\vec{{E}}}_a$ of its faces, which are normal to the faces and have a norm equal to their area, as

$$
V^2 = \frac29\,{\left|{{\vec{{E}}}_1\cdot\big({\vec{{E}}}_2\times{\vec{{E}}}_3\big)}\right|} ,
\tag{3.34}
$$

which can be verified on the trirectangular tetrahedron with edges $a,b,c$, for which $V = abc/6$ and ${\left|{{\vec{{E}}}_1\cdot({\vec{{E}}}_2\times{\vec{{E}}}_3)}\right|} = (abc)^2/8$. At the quantum level, the area vector of the face crossed by link $a$ becomes $8\pi\gamma{\ell_{\mathrm{P}}}^2\,{\vec{{J}}}_a$, where ${\vec{{J}}}_a$ is the Hermitian generator of ${\mathrm{SU}}(2)$ acting on the endpoint of link $a$ at the node, with ${\vec{{J}}}_a^2 = j_a(j_a+1)$. We thus obtain the operator [2]

$$
\hat V_n = \frac{\sqrt2}{3}\,\big(8\pi\gamma{\ell_{\mathrm{P}}}^2\big)^{3/2}\,\sqrt{\big|\hat Q_n\big|}, \qquad
\hat Q_n = {\vec{{J}}}_1\cdot\big({\vec{{J}}}_2\times{\vec{{J}}}_3\big),
\tag{3.35}
$$

which acts on the intertwiner space of the node. The operator $\hat Q_n$ is Hermitian (the generators of distinct links commute), and its nonzero eigenvalues come in pairs of opposite sign. For four links of spin $\tfrac12$, the intertwiner space is two-dimensional and the eigenvalues of $\hat Q_n$ are $\pm\sqrt3/4$; the corresponding eigenvalue of the volume is

$$
V_{1/2} = \frac{\sqrt2\;3^{1/4}}{6}\,\big(8\pi\gamma\big)^{3/2}\,{\ell_{\mathrm{P}}}^3 \simeq 5.6\,{\ell_{\mathrm{P}}}^3 \quad(\gamma = \gamma_0) .
\tag{3.36}
$$

For a gauge-invariant trivalent node, the closure condition ${\vec{{J}}}_1 + {\vec{{J}}}_2 + {\vec{{J}}}_3 = 0$ implies $\hat Q_n = 0$: a direct computation using $[J^i,J^j] = {\mathrm{i}}\epsilon^{ijk}J^k$ shows that the two terms arising from ${\vec{{J}}}_3 = -{\vec{{J}}}_1 - {\vec{{J}}}_2$ cancel exactly. Volume is therefore carried by nodes of valence at least four, and its spectrum is discrete as well.

**Discreteness and physical observables.** The spectra (3.29) and (3.35) are those of kinematical operators. A physical area, invariant under diffeomorphisms and under evolution, must be defined relationally, for instance with respect to matter fields; whether discreteness persists for such operators has been the subject of debate [60]. The argument most often put forward is that, under reasonable assumptions, relational observables have the same spectrum as their kinematical counterparts [1].

### 3.7 Quantum Geometry

The preceding results allow us to interpret spin network states as quantum states of the geometry of space (Fig. 3.5). The area operator receives contributions only from the points where the surface is crossed by a link, and the volume operator only from the nodes contained in the region. A spin network therefore describes a space made of _quanta of volume_, carried by the nodes, separated by _quanta of area_, carried by the links: two quanta of volume are adjacent if the corresponding nodes are connected by a link, and the area of the surface separating them is $8\pi\gamma{\ell_{\mathrm{P}}}^2\sqrt{j(j+1)}$, where $j$ is the spin of the link. The graph thus encodes the adjacency structure of the grains of space, the spins encode their areas, and the intertwiners their volumes.

![Geometric interpretation of a spin network. (a) The nodes carry quanta of volume and the links carry quanta of area: a surface crossed by a link of spin j acquires the area 8πγℓ_P²j(j+1). (b) A four-valent node corresponds to a quantum tetrahedron, each face of which is crossed by one of the links.](/uploads/research/lqg-quantum-geometry.png "Figure 3.5: Geometric interpretation of a spin network. (a) The nodes carry quanta of volume and the links carry quanta of area: a surface crossed by a link of spin j acquires the area 8πγℓ_P²j(j+1). (b) A four-valent node corresponds to a quantum tetrahedron, each face of which is crossed by one of the links.")

This interpretation can be formulated more precisely. The Gauss constraint at a node imposes $\sum_a {\vec{{J}}}_a = 0$, the quantum analog of the closure condition $\sum_a {\vec{{E}}}_a = 0$ satisfied by the area vectors of a polyhedron. A theorem of Minkowski ensures that any family of non-coplanar vectors summing to zero determines a unique convex polyhedron (up to translations) whose face normals are these vectors, with norms equal to the face areas. An intertwiner of valence $F$ can therefore be interpreted as a _quantum polyhedron_ with $F$ faces [61]. This polyhedron is not a sharp geometric figure: the generators ${\vec{{J}}}_a$ do not commute, so that the areas and the volume can be fixed simultaneously while the dihedral angles fluctuate, exactly as the components of an angular momentum do. The geometry described by a spin network is thus intrinsically “fuzzy” at the Planck scale. After averaging over diffeomorphisms, only the combinatorial and relational structure remains: there is no space in which the grains would be located; the grains and their adjacency relations _constitute_ space.

### 3.8 Quantization of the Hamiltonian Constraint

It remains to impose the Hamiltonian constraint (2.30), which contains the dynamics of the theory and whose quantum version is the Wheeler–DeWitt equation $\hat C\Psi = 0$. The main difficulty lies in the factor $1/\sqrt{{\left|{\det E}\right|}}$, for which no direct quantization exists, since the volume operator has a large kernel. Thiemann showed in 1996 how this obstacle can be circumvented [23, 24].

#### 3.8.1 Thiemann's Trick

The starting point is the identity

$$
{\left\{{A^i_a(x)},\,{V}\right\}} = 8\pi G\gamma\,\frac{\delta V}{\delta E^a_i(x)} = 4\pi G\gamma\; e^i_a(x),
\qquad V = \int_\Sigma {\mathrm{d}}^3x\,\sqrt{{\left|{\det E}\right|}},
\tag{3.37}
$$

which expresses the co-triad as the bracket of the connection with the total volume, together with the algebraic identity $\epsilon_{ijk}E^a_jE^b_k/\sqrt{{\left|{\det E}\right|}} = \tilde\epsilon^{abc}\,e^i_c$. The Euclidean part of the Hamiltonian constraint smeared with the lapse $N$ can then be written free of any inverse:

$$
H_{\mathrm E}[N] = \frac{1}{16\pi G}\int_\Sigma {\mathrm{d}}^3x\; N\,\frac{\epsilon_{ijk}E^a_iE^b_jF^k_{ab}}{\sqrt{{\left|{\det E}\right|}}}
= -\frac{1}{32\pi^2G^2\gamma}\int_\Sigma {\mathrm{d}}^3x\; N\,\tilde\epsilon^{abc}\,{\operatorname{Tr}}\Big( F_{ab}\,{\left\{{A_c},\,{V}\right\}} \Big),
\tag{3.38}
$$

where $F_{ab} = F^i_{ab}\tau_i$ and $A_c = A^i_c\tau_i$, and where we have used ${\operatorname{Tr}}(\tau_i\tau_j) = -\tfrac12\delta_{ij}$. The Lorentzian part is handled by a second trick: the trace of the extrinsic curvature, $\bar K = \int K^i_aE^a_i$, can be expressed, up to a constant, as the bracket ${\left\{{H_{\mathrm E}[1]},\,{V}\right\}}$, and $K^i_a$ as the bracket ${\left\{{A^i_a},\,{\bar K}\right\}}$. The entire Hamiltonian constraint can thus be written in terms of Poisson brackets of the connection, its curvature and the volume.

#### 3.8.2 Regularization and Action on Spin Networks

We next express the connection and the curvature in terms of holonomies. For a segment $s_{x,u}$ starting at the point $x$, with direction $u^a$ and coordinate length $\varepsilon$, and for a triangular loop $\alpha_{x,uv}$ two of whose sides, of length $\varepsilon$, are tangent to $u^a$ and $v^a$, we have

$$
h_{s_{x,u}} = \mathbb 1 + \varepsilon\, u^aA_a(x) + {\mathcal{O}\!\left({\varepsilon^2}\right)}, \qquad
h_{\alpha_{x,uv}} = \mathbb 1 + \tfrac12\,\varepsilon^2\,u^av^bF_{ab}(x) + {\mathcal{O}\!\left({\varepsilon^3}\right)} .
\tag{3.39}
$$

It follows that $h^{-1}_{s_{x,u}}{\left\{{h_{s_{x,u}}},\,{V}\right\}} = \varepsilon\,u^a{\left\{{A_a},\,{V}\right\}} + {\mathcal{O}\!\left({\varepsilon^2}\right)}$. We introduce a triangulation $T_\varepsilon$ of $\Sigma$ adapted to the graph and replace the integral (3.38) by a Riemann sum over its tetrahedra $\Delta$, each of which has a vertex $x_\Delta$ and three edges $s_m(\Delta)$, $m = 1,2,3$, emanating from this vertex:

$$
H_{\mathrm E}[N] = \lim_{\varepsilon\to0}\; c \sum_{\Delta\in T_\varepsilon} N(x_\Delta)\;\epsilon^{mnp}\,
{\operatorname{Tr}}\Big( h_{\alpha_{mn}(\Delta)}\, h^{-1}_{s_p(\Delta)}\, {\left\{{h_{s_p(\Delta)}},\,{V}\right\}} \Big),
\tag{3.40}
$$

where $c$ is a numerical constant and $\alpha_{mn}(\Delta)$ is the loop formed by the edges $s_m$ and $s_n$ and the segment joining their endpoints. The powers of $\varepsilon$ cancel exactly—$\varepsilon^2$ from the curvature, $\varepsilon$ from the bracket, and $\varepsilon^{-3}$ from the volume of the tetrahedron—because $C$ is a density of weight one; this is what makes the limit $\varepsilon\to0$ well defined.

The quantization is then straightforward: the holonomies become multiplication operators, the volume becomes the operator $\hat V$, and the Poisson bracket becomes a commutator, ${\left\{{\cdot},\,{\cdot}\right\}}\mapsto({\mathrm{i}}\hbar)^{-1}[\cdot,\cdot]$. Since $\hat V$ acts only on nodes, only the tetrahedra whose vertex is a node of the graph contribute, with edges $s_m$ chosen along the links of that node (Fig. 3.6). The resulting operator reads

$$
\hat H_{\mathrm E}[N]\,{\left|{\Psi_\Gamma}\right\rangle} = \frac{c}{{\mathrm{i}}\hbar} \sum_{n\in\Gamma} N(n) \sum_{l,l',l''} \epsilon(l,l',l'')\;
{\operatorname{Tr}}\Big( \hat h_{\alpha_{n,l'l''}}\, \hat h^{-1}_{s_{n,l}}\, \big[\hat h_{s_{n,l}}, \hat V\big] \Big){\left|{\Psi_\Gamma}\right\rangle},
\tag{3.41}
$$

where the sum runs over the triples of links incident to the node $n$, and where $\epsilon(l,l',l'') = \pm1,0$ depending on the orientation of the tangents. For a node of valence greater than three, the sum extends over all triples of links.

![Elements of the regularization of the Hamiltonian constraint at a node x: the segment s_x,l along the link l and the triangular loop α_x,l'l” built on the links l' and l”. Adapted from (1).](/uploads/research/lqg-thiemann-loop.png "Figure 3.6: Elements of the regularization of the Hamiltonian constraint at a node x: the segment s_x,l along the link l and the triangular loop α_x,l'l” built on the links l' and l”. Adapted from [1].")

The action of the operator is illustrated in Fig. 3.7. The holonomy $\hat h_{\alpha}$, taken in the fundamental representation, adds a new link of spin $\tfrac12$ joining two points on the links $l'$ and $l''$, and shifts by $\pm\tfrac12$ the spins of the segments lying between the node and these points, while the commutator with $\hat V$ acts on the intertwiner of the node. The Hamiltonian operator thus creates new nodes and new links: it modifies the combinatorial structure of the quantum geometry. On diffeomorphism-invariant states, the exact position of the new link carries no meaning, which makes it possible to give a meaning to the limit $\varepsilon\to0$.

![Action of the operator D_+-, one of the components of the Hamiltonian constraint, on a trivalent node: a new link of spin 12 is created between the links j' and j”, whose segments adjacent to the node have their spins changed to j'+12 and j”-12, respectively. Adapted from (1).](/uploads/research/lqg-hamiltonian-action.png "Figure 3.7: Action of the operator D_+-, one of the components of the Hamiltonian constraint, on a trivalent node: a new link of spin 12 is created between the links j' and j”, whose segments adjacent to the node have their spins changed to j'+12 and j”-12, respectively. Adapted from [1].")

#### 3.8.3 Ambiguities and Open Questions

Thiemann's construction demonstrates that it is possible to define, without divergences and without any background structure, an operator corresponding to the Hamiltonian constraint of Lorentzian general relativity. It nevertheless involves significant ambiguities [62, 63]: the choice of the representation of ${\mathrm{SU}}(2)$ in which the holonomies are taken (the fundamental representation is only one choice among others), the operator ordering, and the choice of the triangulation and of the position of the loops $\alpha$. Moreover, the newly created links end at planar trivalent nodes, on which the volume operator vanishes, so that successive actions of the operator remain highly local; this raises doubts about the propagation of the degrees of freedom and about the semiclassical limit. Finally, the commutator of two Hamiltonian constraints vanishes on diffeomorphism-invariant states, but it has not been established that the classical algebra (2.15), with its structure functions, is reproduced. To address some of these difficulties, Thiemann proposed replacing the family of Hamiltonian constraints by a single _master constraint_ [64], and Giesel and Thiemann developed the framework of algebraic quantum gravity [65]. The covariant spin foam formulation, presented in Chapter 5, offers another route to the dynamics: there, the matrix elements of the Hamiltonian operator between spin networks are replaced by vertex amplitudes.

## 4 Black-Hole Entropy

Black-hole entropy is one of the few results in theoretical physics that simultaneously involve Newton's constant $G$, Planck's constant $\hbar$, the speed of light $c$, and Boltzmann's constant $k_{\mathrm B}$. Any theory of quantum gravity must account for it by identifying the corresponding microstates. We first review the classical and semiclassical thermodynamics of black holes, and we then present a heuristic argument suggesting that the Bekenstein–Hawking law is a manifestation of the discreteness of geometry. We next establish the local first law of Frodden, Ghosh, and Perez, which relates the energy measured near the horizon to its area, and we use it to derive the entropy from the quantum geometry of Chapter 3. This chapter is based mainly on [2, 34, 66].

### 4.1 Black-Hole Thermodynamics

#### 4.1.1 Stationary Black Holes

According to the uniqueness theorems, a stationary black hole that solves the Einstein–Maxwell equations is completely characterized by three parameters: its mass $M$, its angular momentum $J$, and its electric charge $Q$. The corresponding solution is the Kerr–Newman metric [67, 68], which, in Boyer–Lindquist coordinates $(t,r,\theta,\phi)$ and in geometrized units ($G = c = 1$), reads

$$
{\mathrm{d}} s^2 = -\frac{\Delta}{\rho^2}\big( {\mathrm{d}} t - a\sin^2\theta\,{\mathrm{d}}\phi \big)^2
+ \frac{\sin^2\theta}{\rho^2}\big( (r^2+a^2)\,{\mathrm{d}}\phi - a\,{\mathrm{d}} t \big)^2
+ \frac{\rho^2}{\Delta}\,{\mathrm{d}} r^2 + \rho^2\,{\mathrm{d}}\theta^2 ,
\tag{4.1}
$$

with

$$
a = \frac{J}{M}, \qquad \rho^2 = r^2 + a^2\cos^2\theta, \qquad \Delta = r^2 - 2Mr + a^2 + Q^2 .
\tag{4.2}
$$

The usual units are restored by the substitutions $M\to GM/c^2$, $a\to J/(Mc)$, and $Q^2\to GQ^2/(4\pi\varepsilon_0c^4)$. The event horizon is located at the largest root of $\Delta$, $r_+ = M + \sqrt{M^2 - a^2 - Q^2}$, and its area is $A = 4\pi(r_+^2 + a^2)$. For the Schwarzschild black hole ($a = Q = 0$), we recover $r_+ = 2M$ and $A = 16\pi M^2$.

#### 4.1.2 The Four Laws of Black-Hole Mechanics

In 1971, Hawking proved that the area of a black-hole horizon cannot decrease in any classical process satisfying the null energy condition [69]. Christodoulou and Ruffini had previously identified an _irreducible mass_ $M_{\mathrm{irr}}$, which cannot be extracted from a black hole by classical processes [70, 71]; it is related to the area by $A = 16\pi M_{\mathrm{irr}}^2$ and to the total mass by

$$
M^2 = \Big( M_{\mathrm{irr}} + \frac{Q^2}{4M_{\mathrm{irr}}} \Big)^2 + \frac{J^2}{4M_{\mathrm{irr}}^2}
\qquad (G = c = 1).
\tag{4.3}
$$

Bardeen, Carter, and Hawking subsequently established four laws of black-hole mechanics [72], whose resemblance to the laws of thermodynamics is striking. Denoting by $\kappa$ the surface gravity of the horizon (in this chapter, $\kappa$ therefore does not denote the constant $8\pi G$), by $\Omega_H$ its angular velocity, and by $\Phi_H$ its electric potential, these laws read as follows:

(0) the surface gravity $\kappa$ is constant over the horizon of a stationary black hole;

(1) in a transition between two neighboring stationary black holes,

$$
\delta M = \frac{\kappa}{8\pi G}\,\delta A + \Omega_H\,\delta J + \Phi_H\,\delta Q ;
\tag{4.4}
$$

(2) the horizon area does not decrease, $\delta A \ge 0$;

(3) it is impossible to reach $\kappa = 0$ by a finite sequence of processes.

The analogy suggests identifying the temperature with a multiple of $\kappa$ and the entropy with a multiple of $A$. Bekenstein proposed taking this analogy seriously and assigning to black holes an entropy proportional to the area of their horizon [4], this being the only way to preserve the second law when matter carrying entropy falls into a black hole.

#### 4.1.3 Hawking Radiation and the Bekenstein–Hawking Entropy

The difficulty with the analogy was that a classical black hole, which absorbs everything and emits nothing, has zero temperature. In 1974, Hawking showed that quantum field theory on the spacetime of a collapsing black hole predicts thermal emission [5, 73]: a quantum field initially in its vacuum state evolves, for a distant observer, into a stationary state of thermal radiation at the temperature

$$
T_H = \frac{\hbar\,\kappa}{2\pi\,k_{\mathrm B}\,c}, \qquad\text{i.e.}\qquad
T_H = \frac{\hbar c^3}{8\pi G M k_{\mathrm B}} \quad\text{(Schwarzschild, } \kappa = c^4/4GM\text{)}.
\tag{4.5}
$$

The first law (4.4), read as $\delta M = T_H\,\delta S$, then fixes the proportionality coefficient between entropy and area:

$$
\boxed{\;S_{\mathrm{BH}} = \frac{k_{\mathrm B}\,c^3}{4\,G\hbar}\,A = k_{\mathrm B}\,\frac{A}{4{\ell_{\mathrm{P}}}^2}\;}
\tag{4.6}
$$

where ${\ell_{\mathrm{P}}}^2 = \hbar G/c^3$. For a black hole of one solar mass, $T_H \simeq 6\times10^{-8}\ \mathrm K$ and $S_{\mathrm{BH}} \simeq 10^{77}\,k_{\mathrm B}$, an entropy far larger than that of the star from which the black hole formed. If this entropy has, like any entropy, a statistical origin, it measures the logarithm of the number of microstates of the black hole. Identifying these microstates is a task that falls within the scope of quantum gravity. In the remainder of this chapter, we revert to units in which $c = k_{\mathrm B} = 1$.

### 4.2 A Heuristic Argument: The Black-Body Analogy

The form of (4.6) already contains a hint about the nature of the microstates [2]. Planck's constant appears in the denominator: in the classical limit $\hbar\to0$, the entropy diverges. This situation is reminiscent of black-body radiation. The entropy of thermal radiation of energy $E$ contained in a volume $L^3$ is

$$
S = \frac43\,k_{\mathrm B} \left( \frac{\pi^2 L^3E^3}{15\,\hbar^3c^3} \right)^{1/4} ,
\tag{4.7}
$$

which also diverges as $\hbar\to0$: this is the manifestation, at the level of the entropy, of the ultraviolet catastrophe of the classical theory of radiation. The constant $\hbar$, introduced by Planck in 1900 [74], renders the entropy finite by fixing the size of the elementary cells of phase space; the entropy is of order $k_{\mathrm B}$ when $LE/c\sim\hbar$, that is, for an energy of the order of that of a single quantum $\hbar\omega$ of frequency $\omega\sim c/L$. It was by analyzing the entropy of radiation that Einstein was led, in 1905, to the hypothesis of light quanta [75].

By analogy, the appearance of $\hbar$ in the denominator of (4.6) suggests that area is itself quantized, with quanta of order

$$
A \sim \hbar G = {\ell_{\mathrm{P}}}^2 ,
\tag{4.8}
$$

and that the entropy counts, up to a factor of order one, the number of these quanta: $S_{\mathrm{BH}} \sim k_{\mathrm B}A/{\ell_{\mathrm{P}}}^2$. This is precisely what the spectrum of the area operator (3.29) predicts. It remains to make this argument quantitative, which requires relating the area to an energy and specifying the temperature at which the system is in equilibrium.

### 4.3 The Local First Law of Frodden, Ghosh, and Perez

The laws of Bardeen, Carter, and Hawking are formulated in terms of quantities defined at infinity: the ADM mass $M$ and the surface gravity $\kappa$, normalized with respect to the timelike Killing vector at infinity. For a statistical description of the horizon in quantum gravity, it is more natural to consider quantities measured locally, by an observer located near the horizon. Frodden, Ghosh, and Perez [34] showed that these quantities satisfy a remarkably simple local first law.

#### 4.3.1 Near-Horizon Geometry

Consider a Schwarzschild black hole, for which the Kerr parameter vanishes; in all that follows, the letter $a$ denotes a proper acceleration. Let a stationary observer maintain a fixed position at a proper distance $d \ll 2GM$ from the horizon. The four-velocity of this observer is $u^\mu = \xi^\mu/N$, where $\xi = \partial_t$ is the timelike Killing vector and $N = \sqrt{-\xi^\mu\xi_\mu} = \sqrt{1 - 2GM/r}$ is the redshift factor. The proper distance to the horizon is

$$
d = \int_{2GM}^{r} \frac{{\mathrm{d}} r'}{\sqrt{1 - 2GM/r'}} \simeq 2\sqrt{2GM\,(r - 2GM)} ,
\qquad\text{hence}\qquad N \simeq \frac{d}{4GM} = \kappa\, d ,
\tag{4.9}
$$

with $\kappa = 1/(4GM)$. Near the horizon, the metric takes the form ${\mathrm{d}} s^2 \simeq -\kappa^2d^2\,{\mathrm{d}} t^2 + {\mathrm{d}} d^2 + (2GM)^2\,{\mathrm{d}}\Omega^2$: its $(t,d)$ part is Rindler spacetime, that is, the region of Minkowski space accessible to a uniformly accelerated observer (Fig. 4.1). The proper acceleration of our observer is therefore

$$
a = \frac{\kappa}{N} \simeq \frac1d ,
\tag{4.10}
$$

and the black-hole horizon is, locally, the Rindler horizon associated with this acceleration.

![Near-horizon geometry. In the coordinates (X,T), the horizon consists of the two null half-lines H^ emanating from the bifurcation sphere. A stationary observer at proper distance d follows the hyperbola X² - T² = d² and undergoes the proper acceleration a = 1/d. The hyperbolas are the orbits of the boost Killing vector.](/uploads/research/lqg-rindler.png "Figure 4.1: Near-horizon geometry. In the coordinates (X,T), the horizon consists of the two null half-lines H^ emanating from the bifurcation sphere. A stationary observer at proper distance d follows the hyperbola X² - T² = d² and undergoes the proper acceleration a = 1/d. The hyperbolas are the orbits of the boost Killing vector.")

#### 4.3.2 Local Energy and the Local First Law

The energy measured by the stationary observer is the conserved charge associated with the Killing field $\chi = \xi/N_0$, where $N_0$ is the value of $N$ at the position of the observer; on the observer's worldline, this field coincides with the observer's four-velocity. For a perturbation of the black hole—for instance, the infall of a small body—the variation of the local energy is related to that of the Killing energy, that is, of the mass $M$, by the Tolman factor: $\delta E = \delta M/N$. Using the first law (4.4) with $J = Q = 0$, and then (4.10), we obtain

$$
\delta E = \frac{\delta M}{N} = \frac{\kappa}{N}\,\frac{\delta A}{8\pi G}
\qquad\Longrightarrow\qquad
\boxed{\;\delta E = \frac{a}{8\pi G}\,\delta A\;}
\tag{4.11}
$$

This is the _local first law_. Frodden, Ghosh, and Perez showed that it holds for the entire Kerr–Newman family, in which case the stationary observers corotate with the horizon [34]. For a fixed acceleration, it integrates to

$$
E = \frac{a\,A}{8\pi G} .
\tag{4.12}
$$

> **Remark 4.1.**
>
> The integrated expression (4.12) does not coincide with the redshifted mass $M/N$. Using (4.9), we find $M/N \simeq 4GM^2/d$, whereas $aA/(8\pi G) \simeq 2GM^2/d$: the two expressions differ by a factor of two, because $M$ scales as $\sqrt A$ rather than as $A$. Only variations enter the thermodynamic argument that follows, and these are given unambiguously by (4.11).

The local first law admits a direct interpretation in terms of the canonical structure of Chapter 1. The uniformly accelerated observer measures the flow of its proper time $\tau$, which is related to the boost parameter $\eta$ by $\eta = a\tau$; the Hamiltonian that generates its evolution is therefore $a$ times the boost generator. According to the linear simplicity constraint and relation (2.36), the norm of the boost generator associated with a surface is $A/(8\pi G)$. We thus recover

$$
E = a\,{\left|{{\vec{{K}}}}\right|} = \frac{a\,A}{8\pi G} ,
\tag{4.13}
$$

independently of $\gamma$. The local energy of a horizon is proportional to its area, which reduces the thermodynamic problem to that of the area spectrum.

#### 4.3.3 Unruh Temperature and Entropy

Unruh showed that a uniformly accelerated observer with proper acceleration $a$ perceives the Minkowski vacuum of a quantum field as a thermal bath at the temperature [76]

$$
T_U = \frac{\hbar\, a}{2\pi} .
\tag{4.14}
$$

The quantum state of the fields near the horizon, which is regular for freely falling observers, is thus perceived by the stationary observer as a thermal state at the temperature $T_U$. The Clausius definition of entropy, $\delta S = \delta E/T$, then gives

$$
\delta S = \frac{\delta E}{T_U} = \frac{2\pi}{\hbar a}\,\frac{a\,\delta A}{8\pi G} = \frac{\delta A}{4\hbar G} = \frac{\delta A}{4{\ell_{\mathrm{P}}}^2} ,
\tag{4.15}
$$

which is precisely the variation of the Bekenstein–Hawking entropy. The acceleration $a$ drops out of the result, which is therefore the same for all stationary observers close to the horizon. The relations $\delta E = T_U\,\delta S$ and $\delta M = T_H\,\delta S$ are, moreover, equivalent: they are related to each other by the Tolman factor, $T_H = N\,T_U = \hbar\kappa/2\pi$.

### 4.4 Statistical Derivation in Loop Quantum Gravity

#### 4.4.1 The Horizon as a Punctured Surface

In loop quantum gravity, the horizon is a surface whose quantum geometry is described by the links of the spin network that cross it (Fig. 4.2). According to (3.29), a state in which the horizon is crossed by $\mathcal N$ links with spins $j_1,\dots,j_{\mathcal N}$ has the area

$$
A = 8\pi\gamma{\ell_{\mathrm{P}}}^2 \sum_{p=1}^{\mathcal N} \sqrt{j_p(j_p+1)} .
\tag{4.16}
$$

Each crossing point, or _puncture_, contributes to the area independently of the others. From the point of view of the horizon, a puncture of spin $j$ is described by the spin-$j$ representation space, of dimension $2j+1$, whose basis states correspond to the eigenvalues $m$ of the normal component of the flux. The horizon geometry fixes only the spins: for a given area, these $2j+1$ states cannot be distinguished by macroscopic observables. In the approach presented here, it is these states that constitute the microstates of the black hole [2, 30, 31].

![The horizon H of a black hole, crossed by the links of a spin network. Each puncture of spin j contributes the quantum a_j = 8πγℓ_P²j(j+1) to the horizon area and carries 2j+1 internal states.](/uploads/research/lqg-horizon-punctures.png "Figure 4.2: The horizon H of a black hole, crossed by the links of a spin network. Each puncture of spin j contributes the quantum a_j = 8πγℓ_P²j(j+1) to the horizon area and carries 2j+1 internal states.")

#### 4.4.2 Canonical Ensemble at the Unruh Temperature

According to (4.12) and (4.16), the local energy is the sum of the energies of the punctures,

$$
E = \sum_{p=1}^{\mathcal N} E_{j_p}, \qquad
E_j = \frac{a}{8\pi G}\, 8\pi\gamma{\ell_{\mathrm{P}}}^2\sqrt{j(j+1)} = a\,\gamma\,\hbar\,\sqrt{j(j+1)} .
\tag{4.17}
$$

We treat the punctures as independent subsystems in equilibrium with the fields near the horizon at the Unruh temperature, that is, at the inverse temperature $\beta = 2\pi/(\hbar a)$. In the Gibbs state, the probability that a puncture carries spin $j$, taking into account the degeneracy $2j+1$, is

$$
P_j = \frac{1}{z}\,(2j+1)\, {\mathrm{e}}^{-\beta E_j} = \frac{1}{z(\gamma)}\,(2j+1)\, {\mathrm{e}}^{-2\pi\gamma\sqrt{j(j+1)}} ,
\tag{4.18}
$$

where the normalization condition $\sum_j P_j = 1$ fixes the partition function of a single puncture:

$$
z(\gamma) = \sum_{j\in\mathbb N^*/2} (2j+1)\, {\mathrm{e}}^{-2\pi\gamma\sqrt{j(j+1)}} .
\tag{4.19}
$$

The acceleration $a$ has dropped out: $\beta E_j = 2\pi\gamma\sqrt{j(j+1)}$ depends only on the spin and on $\gamma$. Each microstate $(j,m)$ of a puncture has the probability $p_j = P_j/(2j+1) = {\mathrm{e}}^{-\beta E_j}/z$. For $\mathcal N$ independent punctures, the partition function is $Z = z^{\mathcal N}$, and the Gibbs entropy, computed over the microstates, is

$$
S = -\mathcal N\sum_{j}\,(2j+1)\, p_j \ln p_j = \beta\langle E\rangle + \ln Z = \beta\langle E\rangle + \mathcal N\ln z(\gamma) .
\tag{4.20}
$$

Note that it is indeed the entropy of the microstates, and not the entropy $-\sum_j P_j\ln P_j$ of the spin distribution alone, that enters here: the difference, $\sum_j P_j\ln(2j+1)$ per puncture, is precisely the contribution of the degeneracy. Using (4.12), we obtain

$$
\beta\langle E\rangle = \frac{2\pi}{\hbar a}\,\frac{a\langle A\rangle}{8\pi G} = \frac{\langle A\rangle}{4{\ell_{\mathrm{P}}}^2},
$$

and hence

$$
S = \frac{\langle A\rangle}{4{\ell_{\mathrm{P}}}^2} + \mathcal N\ln z(\gamma) .
\tag{4.21}
$$

#### 4.4.3 Thermodynamic Consistency and the Value of γ

The first term of (4.21) is exactly the Bekenstein–Hawking entropy. The second term, proportional to the number of punctures, is equal to $-\beta F$, where $F = -T_U\ln Z$ is the Helmholtz free energy. The Clausius relation (4.15), a consequence of the local first law (4.11), must hold for every variation of the area, including those that change the number of punctures. For the statistical entropy to be compatible with it, this second term must vanish, that is, the free energy per puncture must be zero:

$$
z(\gamma) = \sum_{j\in\mathbb N^*/2} (2j+1)\, {\mathrm{e}}^{-2\pi\gamma\sqrt{j(j+1)}} = 1 .
\tag{4.22}
$$

The function $z$ is strictly decreasing, from $+\infty$ at $\gamma = 0$ to $0$ as $\gamma\to\infty$; Eq. (4.22) therefore admits a unique solution, which we determine numerically (Fig. 4.3):

$$
\boxed{\;\gamma_0 = 0.274\,067\ldots\;}
\tag{4.23}
$$

For $\gamma = \gamma_0$, the free energy vanishes and we recover the Bekenstein–Hawking law,

$$
S = \frac{A}{4{\ell_{\mathrm{P}}}^2} .
\tag{4.24}
$$

![Partition function z(γ) of a single puncture, computed numerically by summing over spins up to j = 2000. The consistency condition z(γ) = 1 fixes the value γ₀ ≃ 0.274 of the Barbero–Immirzi parameter.](/uploads/research/lqg-immirzi-z.png "Figure 4.3: Partition function z(γ) of a single puncture, computed numerically by summing over spins up to j = 2000. The consistency condition z(γ) = 1 fixes the value γ₀ ≃ 0.274 of the Barbero–Immirzi parameter.")

The distribution (4.18) is dominated by small spins: for $\gamma = \gamma_0$, we find $P_{1/2}\simeq0.45$, $P_1\simeq0.26$, $P_{3/2}\simeq0.14$, and $P_2\simeq0.07$. The mean area per puncture is $\langle a\rangle = 8\pi\gamma_0{\ell_{\mathrm{P}}}^2\langle\sqrt{j(j+1)}\rangle \simeq 10\,{\ell_{\mathrm{P}}}^2$, and the entropy per puncture is $2\pi\gamma_0\langle\sqrt{j(j+1)}\rangle \simeq 2.5$. A macroscopic black hole is thus crossed by a number of links of order $A/(10\,{\ell_{\mathrm{P}}}^2)$, that is, approximately $4\times10^{76}$ for a black hole of one solar mass.

### 4.5 Discussion

The preceding calculation shows that the quantum geometry of loop quantum gravity provides a finite number of microstates, whose logarithm is proportional to the horizon area: this is the robust result of the approach. The coefficient $1/4$, on the other hand, requires fixing the value of the Barbero–Immirzi parameter, and this value depends on the details of the counting. Several treatments have been proposed since the first calculation by Rovelli [30].

- In the isolated-horizon approach of Ashtekar, Baez, Corichi, and Krasnov [31, 77], the horizon geometry is described by a Chern–Simons theory, and the microstates are the states of this theory that are compatible with the punctures. The original counting, dominated by punctures of spin $\tfrac12$, led to $\gamma = \ln2/(\pi\sqrt3) \simeq 0.127$; an exact counting, due to Domagala and Lewandowski and to Meissner, gives $\gamma \simeq 0.2375$ [78, 79]. The counting presented above, which assigns the degeneracy $2j+1$ to each puncture, leads to $\gamma_0\simeq0.274$ [80].

- The ${\mathrm{SU}}(2)$-invariant formulation of the Chern–Simons theory of the horizon [81] makes it possible to compute the subleading corrections: the entropy receives a logarithmic correction $-\tfrac32\ln(A/{\ell_{\mathrm{P}}}^2)$ [81, 82].

- Several works have sought to obtain the coefficient $1/4$ independently of $\gamma$. Ghosh and Perez [83] showed that a nonzero chemical potential associated with the punctures makes it possible to recover (4.24) for any value of $\gamma$; Bianchi [84] obtained the coefficient $1/4$ from the entanglement between the degrees of freedom on either side of the horizon; and Ghosh, Noui, and Perez [85] showed that the analytic continuation of the degeneracy to $\gamma = \pm{\mathrm{i}}$ also leads to the Bekenstein–Hawking law.

The current situation, summarized in the review by Perez [66], is therefore as follows: loop quantum gravity provides a microscopic explanation of the proportionality between entropy and area, based on the discreteness of the area spectrum, but the determination of the coefficient still depends on choices made in the treatment of the horizon and of the punctures. If we adopt the value $\gamma_0$, the area quantum (3.31) is fixed at approximately $6\,{\ell_{\mathrm{P}}}^2$: the computation of black-hole entropy thus relates a macroscopic thermodynamic property to the scale of the granularity of space.

## 5 Spin Foams

Classical mechanics admits two equivalent formulations, the Hamiltonian and the Lagrangian one. Feynman showed that the same holds for quantum mechanics [86]: alongside the canonical formulation, which is based on a Hilbert space and operators, there exists a covariant formulation, in which transition amplitudes are sums over all possible histories, each weighted by the exponential of the action. The canonical formulation of loop quantum gravity was presented in Chapter 3. The subject of this chapter is its covariant formulation, in which the transition amplitudes between quantum geometries of space are written as sums over histories of spin networks, called _spin foams_ [25, 26]. Each spin foam is weighted by a product of local amplitudes that depend on the spins and on the intertwiners, that is, on the quanta of area and volume. This chapter is based on [1, 2, 27, 36].

### 5.1 The Path Integral in Quantum Mechanics

Consider a particle of mass $m$ in $d$ dimensions, with Hamiltonian

$$
\hat H = \frac{\hat P^2}{2m} + V(\hat X) .
\tag{5.1}
$$

The probability amplitude for the particle, initially at $x'$, to be detected at $x''$ after a time $T$ is the matrix element ${\left\langle{x''}\middle|{\hat U(T)}\middle|{x'}\right\rangle}$ of the evolution operator $\hat U(T) = \exp(-{\mathrm{i}}\hat HT/\hbar)$. We divide the interval $T$ into $n$ steps of duration $\varepsilon = T/n$. Since the kinetic and potential operators do not commute, we use the Trotter formula,

$$
\hat U(T) = \lim_{n\to\infty} \Big( {\mathrm{e}}^{-{\mathrm{i}}\varepsilon\hat P^2/(2m\hbar)}\; {\mathrm{e}}^{-{\mathrm{i}}\varepsilon V(\hat X)/\hbar} \Big)^n ,
\tag{5.2}
$$

where the error made at each step is of order $\varepsilon^2$, and hence of order $1/n$ in total. Between the factors we insert $n-1$ completeness relations $\int{\mathrm{d}}^dx_j\,{\left|{x_j}\right\rangle}{\left\langle{x_j}\right|} = \mathbb 1$, with $x_0 = x'$ and $x_n = x''$. Each factor is evaluated by inserting a completeness relation in momentum space, with ${\left\langle{x}\middle|{p}\right\rangle} = (2\pi\hbar)^{-d/2}{\mathrm{e}}^{{\mathrm{i}} p\cdot x/\hbar}$:

$$
{\left\langle{x_j}\middle|{{\mathrm{e}}^{-{\mathrm{i}}\varepsilon\hat P^2/(2m\hbar)}\,{\mathrm{e}}^{-{\mathrm{i}}\varepsilon V(\hat X)/\hbar}}\middle|{x_{j-1}}\right\rangle}
= \int \frac{{\mathrm{d}}^dp_j}{(2\pi\hbar)^d}\;
\exp\Big\{ \frac{\mathrm{i}}\hbar \Big[ p_j\cdot(x_j - x_{j-1}) - \varepsilon\Big( \frac{p_j^2}{2m} + V(x_{j-1}) \Big) \Big] \Big\}.
\tag{5.3}
$$

We thus obtain the phase-space path integral,

$$
\begin{aligned}
{\left\langle{x''}\middle|{\hat U(T)}\middle|{x'}\right\rangle} = \lim_{n\to\infty} \int \prod_{j=1}^{n-1}{\mathrm{d}}^dx_j \prod_{j=1}^{n}\frac{{\mathrm{d}}^dp_j}{(2\pi\hbar)^d}\;
&\exp\Big\{ \frac{\mathrm{i}}\hbar \sum_{j=1}^{n} \Big[ p_j\cdot(x_j-x_{j-1}) \\
&\qquad\qquad - \varepsilon\, H(p_j,x_{j-1}) \Big] \Big\},
\end{aligned}
\tag{5.4}
$$

which is formally written as

$$
{\left\langle{x''}\middle|{\hat U(T)}\middle|{x'}\right\rangle} = \int_{x(0)=x'}^{x(T)=x''} \mathcal Dx\,\mathcal Dp\;
\exp\Big\{ \frac{\mathrm{i}}\hbar \int_0^T {\mathrm{d}} t\,\big( p\cdot\dot x - H(p,x) \big) \Big\}.
\tag{5.5}
$$

The momentum integrals are Gaussian: $\int\frac{{\mathrm{d}}^dp}{(2\pi\hbar)^d}\exp\{\frac{\mathrm{i}}\hbar[p\cdot\Delta x - \varepsilon p^2/2m]\} = \big(\frac{m}{2\pi{\mathrm{i}}\hbar\varepsilon}\big)^{d/2}\exp\{\frac{\mathrm{i}}\hbar\frac{m\Delta x^2}{2\varepsilon}\}$. We then obtain the Feynman path integral in configuration space,

$$
\begin{align}
{\left\langle{x''}\middle|{\hat U(T)}\middle|{x'}\right\rangle}
&= \lim_{n\to\infty} \Big( \frac{m}{2\pi{\mathrm{i}}\hbar\varepsilon} \Big)^{nd/2} \int\prod_{j=1}^{n-1}{\mathrm{d}}^dx_j\;
\exp\Big\{ \frac{\mathrm{i}}\hbar\sum_{j=1}^{n}\Big[ \frac{m\,(x_j-x_{j-1})^2}{2\varepsilon} \\
&\hspace{16em} - \varepsilon\,V(x_{j-1}) \Big] \Big\} \\
&\eqqcolon \int_{x(0)=x'}^{x(T)=x''}\mathcal Dx\;\exp\Big\{ \frac{\mathrm{i}}\hbar\int_0^T{\mathrm{d}} t\,\Big( \frac{m\dot x^2}{2} - V(x) \Big) \Big\}
= \int\mathcal Dx\;{\mathrm{e}}^{{\mathrm{i}} S[x]/\hbar}. \tag{5.6}
\end{align}
$$

The amplitude is a sum over all trajectories joining $x'$ to $x''$, each weighted by ${\mathrm{e}}^{{\mathrm{i}} S/\hbar}$, where $S$ is the classical action. In the limit $\hbar\to0$, the integral is dominated by the trajectories that make the action stationary, which recovers the principle of least action.

### 5.2 From Loops to Spin Foams

#### 5.2.1 The Gravitational Path Integral

By analogy, the transition amplitude between an initial spatial geometry $q'$ and a final geometry $q''$ is formally written as an integral over the spacetime metrics that interpolate between them:

$$
W[q'',q'] = \int_{g|_{\Sigma'} = q'}^{g|_{\Sigma''} = q''} \mathcal D[g_{\mu\nu}]\; {\mathrm{e}}^{{\mathrm{i}} S_{\mathrm{EH}}[g]/\hbar} .
\tag{5.7}
$$

Two remarks are in order. First, this expression is ill-defined: the measure $\mathcal D[g]$ has no precise mathematical meaning, and the corresponding perturbative theory is not renormalizable. Second, since the action is invariant under diffeomorphisms, the amplitude does not depend on any coordinate time: $W[q'',q']$ is not the matrix element of an evolution operator ${\mathrm{e}}^{-{\mathrm{i}} HT/\hbar}$, but that of the _projector_ onto the solutions of the Hamiltonian constraint. Indeed, the integration over the lapse $N(x)$, which appears linearly in the action (2.9), formally imposes

$$
W[q'',q'] = {\left\langle{q''}\middle|{\hat P}\middle|{q'}\right\rangle}, \qquad
\hat P = \int\mathcal D N\; \exp\Big\{ {\mathrm{i}}\int_\Sigma {\mathrm{d}}^3x\; N(x)\,\hat C(x) \Big\} = \prod_{x\in\Sigma}\delta\big(\hat C(x)\big).
\tag{5.8}
$$

This is the exact analogue of the propagator of the relativistic particle, for which the integration over the proper time turns the evolution operator into a projector onto the mass shell $\delta(p^2+m^2)$. The operator $\hat P$ (formally) defines the physical scalar product: $\langle\hat P s'',s'\rangle$.

#### 5.2.2 Spin Network Histories

In loop quantum gravity, the eigenstates of the spatial geometry are the spin networks (for a suitable choice of intertwiners), which diagonalize the area and volume operators; the diffeomorphism-invariant states are labeled by s-knots. The transition amplitude between two quantum geometries $s'$ and $s''$ is therefore

$$
W(s'',s') = {\left\langle{s''}\middle|{\hat P}\middle|{s'}\right\rangle} .
\tag{5.9}
$$

We formally expand the projector (5.8) in powers of the Hamiltonian constraint and insert, between two successive actions of $\hat C$, the completeness relation in the spin network basis:

$$
W(s'',s') = \sum_{n=0}^\infty \frac{{\mathrm{i}}^n}{n!} \sum_{s_1,\dots,s_{n-1}} \int\mathcal DN\;
{\left\langle{s''}\middle|{\hat C[N]}\middle|{s_{n-1}}\right\rangle} \cdots {\left\langle{s_2}\middle|{\hat C[N]}\middle|{s_1}\right\rangle}{\left\langle{s_1}\middle|{\hat C[N]}\middle|{s'}\right\rangle} .
\tag{5.10}
$$

As shown in Section 3.8, $\hat C$ acts locally on the nodes, creating or modifying links in the neighborhood of a node. Each term of (5.10) therefore corresponds to a sequence

$$
\sigma = (s', s_1, \dots, s_{n-1}, s'')
\tag{5.11}
$$

of spin networks, each of which is obtained from the preceding one by a local modification: this is a _history_ of spin networks. The associated amplitude is the _product_ of the local amplitudes corresponding to each step,

$$
A(\sigma) = \prod_{v} A_v(\sigma), \qquad A_v(\sigma) \propto {\left\langle{s_{v+1}}\middle|{\hat C}\middle|{s_v}\right\rangle},
\tag{5.12}
$$

and the transition amplitude is the sum over all histories [25]:

$$
W(s'',s') = \sum_{\sigma:\, s'\to s''} A(\sigma) .
\tag{5.13}
$$

#### 5.2.3 The Spin Foam as a History of Geometry

A history of spin networks admits a natural geometric representation (Fig. 5.1). In the course of its “temporal” evolution, each link of a spin network sweeps out a surface, called a _face_, and each node sweeps out a line, called an _edge_. Where the Hamiltonian constraint acts, a node splits or several nodes merge: the edges branch at a _vertex_, from which emerge the faces swept out by the newly created links (Fig. 5.2). The history is thus represented by a _2-complex_ $\mathcal C$, that is, a set of faces $f$ that meet along edges $e$, which in turn meet at vertices $v$. The faces inherit the spins of the links that swept them out, and the edges inherit the intertwiners of the corresponding nodes. A _spin foam_ is a 2-complex whose faces are colored by irreducible representations $j_f$ and whose edges are colored by intertwiners $\iota_e$; we denote it by $\sigma = (\mathcal C, j_f, \iota_e)$. Figure 5.3 shows a spin foam with two vertices.

![Evolution of a spin network between two hypersurfaces Σ_i and Σ_f: each link sweeps out a face and each node an edge. In the absence of any action of the Hamiltonian constraint, the network s_f has the same combinatorial structure as s_i. Adapted from (1).](/uploads/research/lqg-spinnet-evolution.png "Figure 5.1: Evolution of a spin network between two hypersurfaces Σ_i and Σ_f: each link sweeps out a face and each node an edge. In the absence of any action of the Hamiltonian constraint, the network s_f has the same combinatorial structure as s_i. Adapted from [1].")

![A spin foam vertex v: the edge swept out by a node branches into three edges. The three new links that connect the corresponding nodes form a triangle, and their worldsheets are three new faces emerging from the vertex. This is the spacetime representation of the action of the Hamiltonian constraint on a node, which replaces the node by a triangle (Fig. 3.7). Adapted from (1).](/uploads/research/lqg-foam-vertex.png "Figure 5.2: A spin foam vertex v: the edge swept out by a node branches into three edges. The three new links that connect the corresponding nodes form a triangle, and their worldsheets are three new faces emerging from the vertex. This is the spacetime representation of the action of the Hamiltonian constraint on a node, which replaces the node by a triangle (Fig. 3.7). Adapted from [1].")

![A spin foam with two vertices p and q between the spin networks s_i and s_f. At the vertex p, a node splits into three nodes connected by three new links, with spins j₄, j₅ and j₆; this yields the intermediate network s₁. At the vertex q, these three nodes merge again, and the faces j₄, j₅, j₆ close. Each face retains its spin: the final network carries the same spins j₁, j₂, j₃ as the initial network. Adapted from (1).](/uploads/research/lqg-foam-two-vertices.png "Figure 5.3: A spin foam with two vertices p and q between the spin networks s_i and s_f. At the vertex p, a node splits into three nodes connected by three new links, with spins j₄, j₅ and j₆; this yields the intermediate network s₁. At the vertex q, these three nodes merge again, and the faces j₄, j₅, j₆ close. Each face retains its spin: the final network carries the same spins j₁, j₂, j₃ as the initial network. Adapted from [1].")

### 5.3 General Formalism of Spin Foams

The boundary $\partial\mathcal C$ of a 2-complex is a graph: the faces that reach the boundary define its links, and the edges that reach it define its nodes. The boundary of a spin foam is therefore a spin network, denoted by $\partial\sigma = s$. If this network is connected, it can be interpreted as a state of the gravitational field on the boundary of a finite region of spacetime. In the case of the transition amplitude (5.9), the boundary is the disjoint union of the initial and final networks, $\partial\sigma = s'\cup s''$. A _spin foam model_ is defined by the following data:

(i) a set of 2-complexes $\mathcal C$, each equipped with a weight $w(\mathcal C)$;

(ii) a set of irreducible representations $j$ and of intertwiners $\iota$ of a given group;

(iii) local amplitudes: a face amplitude $A_f(j_f)$, an edge amplitude $A_e(j_f,\iota_e)$ and a vertex amplitude $A_v(j_f,\iota_e)$.

The amplitude associated with a boundary spin network $s$ is then

$$
Z(s) = \sum_{\mathcal C:\,\partial\mathcal C = \Gamma_s} w(\mathcal C) \sum_{j_f,\,\iota_e}\;
\prod_{f} A_f(j_f)\; \prod_{e} A_e(j_f,\iota_e)\; \prod_{v} A_v(j_f,\iota_e),
\tag{5.14}
$$

where the spins and intertwiners of the faces and edges that reach the boundary are fixed by $s$. In most models, the face amplitude is the dimension of the representation, $A_f = \dim(j_f) = 2j_f+1$, and the edge amplitude serves to normalize the intertwiners; the entire dynamics is then contained in the vertex amplitude. The transition amplitude between two spin networks is given by $W(s'',s') = Z(s'\cup s'')$: the spin foam model defines the transition amplitude between two quantum states of the gravitational field as a sum over histories.

It is often convenient to consider 2-complexes that are _dual_ to a triangulation of the spacetime manifold. In four dimensions, a vertex of the foam is dual to a 4-simplex, an edge to a tetrahedron and a face to a triangle; on the boundary, a node of the spin network is dual to a tetrahedron and a link to a triangle. This correspondence, summarized in Table 5.1, provides a direct geometric interpretation of the quantum data: the spin of a face is the area of the dual triangle, the intertwiner of an edge describes the dual quantum tetrahedron, and the vertex amplitude describes the quantum geometry of a 4-simplex.

| Spin foam | Spin network (boundary) | Dual triangulation | Quantum data |
| --- | --- | --- | --- |
| vertex $v$ (dim. 0) | — | 4-simplex | amplitude $A_v$ |
| edge $e$ (dim. 1) | node $n$ (dim. 0) | tetrahedron | intertwiner $\iota_e$ |
| face $f$ (dim. 2) | link $l$ (dim. 1) | triangle | spin $j_f$ |

_Table 5.1: Terminology of spin networks and spin foams, and correspondence with the elements of the dual triangulation of a four-dimensional manifold._

### 5.4 Spin Foam Models

Each of the models presented below is a particular case of (5.14), obtained by choosing a set of 2-complexes, a group and a vertex amplitude. Table 5.2 gives an overview. The first four models quantize topological theories, which have no local degrees of freedom; they serve as a testing ground and as a starting point for the construction of models of four-dimensional gravity.

| Model | Classical theory | 2-complex | Group | Vertex |
| --- | --- | --- | --- | --- |
| Ponzano–Regge [87] | 3d GR | $\Delta^*$ | ${\mathrm{SU}}(2)$ | $\{6j\}$ |
| Turaev–Viro [88] | 3d GR $+\,\Lambda$ | $\Delta^*$ | ${\mathrm{SU}}(2)_q$ | $\{6j\}_q$ |
| Ooguri [89] | 4d BF | $\Delta^*$ | ${\mathrm{SU}}(2)$ | $\{15j\}$ |
| Crane–Yetter [90] | 4d BF $+\,\Lambda$ | $\Delta^*$ | ${\mathrm{SU}}(2)_q$ | $\{15j\}_q$ |
| Barrett–Crane [91] | 4d GR (Plebański) | $\Delta^*$ | ${\mathrm{SO}}(4)$ simple | $\{10j\}$ |
| EPRL–FK [28, 29] | 4d GR (Holst) | arbitrary [92] | ${\mathrm{SL}}(2,\mathbb C)$ | $A_v^{\mathrm{EPRL}}$ |

_Table 5.2: Main spin foam models. $\Lambda$ denotes the cosmological constant, $\Delta^*$ the dual complex of a fixed triangulation, and the subscript $q$ indicates the use of a quantum group._

The sum over 2-complexes can itself be generated as the Feynman graph expansion of a field theory defined on a group, known as a group field theory [93]. This provides a natural framework for generating the sum (5.14), whose convergence remains an open question.

#### 5.4.1 The Ponzano–Regge Model

**Three-dimensional gravity.** In three dimensions and in Euclidean signature, general relativity without a cosmological constant can be written in first-order form as

$$
S[e,\omega] = \int_{\mathcal M} e_i\wedge F^i(\omega),
\tag{5.15}
$$

where $e^i$ is a triad (an ${\mathfrak{su}}(2)$-valued 1-form) and $\omega$ is an ${\mathrm{SU}}(2)$ connection; we omit the coupling constant. The equations of motion, $F(\omega) = 0$ and $D_\omega e = 0$, require the connection to be flat and torsion-free: all solutions are locally flat, and the theory has no local degrees of freedom. Only global degrees of freedom, related to the topology of the manifold, remain: three-dimensional general relativity is a _topological field theory_.

**Discretization.** In 1961, Regge proposed a discretization of general relativity, _Regge calculus_, in which the manifold is triangulated by flat simplices whose edge lengths are the dynamical variables, while the curvature is concentrated on the simplices of codimension two [94]. To define the path integral of the theory (5.15), we likewise introduce a triangulation $\Delta$ of $\mathcal M$ and its dual complex $\Delta^*$ (Fig. 5.4), whose elements correspond to one another as listed in Table 5.3. The discrete variables are:

- for each segment $\ell$ of $\Delta$, the element $X_\ell = \int_\ell e^i\tau_i\in{\mathfrak{su}}(2)$, whose norm is the length of the segment;

- for each edge $e$ of $\Delta^*$, the holonomy $g_e = {\mathcal{P}\!\exp}\int_e\omega\in{\mathrm{SU}}(2)$.

Each segment $\ell$ of $\Delta$ is dual to a face $f$ of $\Delta^*$, whose boundary consists of the edges dual to the triangles that contain $\ell$; the holonomy around this face, $U_f = \prod_{e\in\partial f} g_e$, is the discrete counterpart of the curvature.

| Triangulation $\Delta$ | Dual complex $\Delta^*$ |
| --- | --- |
| tetrahedron | vertex (where 4 edges and 6 faces meet) |
| triangle | edge (bounding 3 faces) |
| segment | face |
| point | three-dimensional cell |

_Table 5.3: Correspondence between the elements of a triangulation $\Delta$ of a three-dimensional manifold and those of its dual complex $\Delta^*$._

![(a) A triangulation of a surface (in gray) and its dual graph (in red): each triangle corresponds to a dual vertex, and each shared edge to a dual edge. (b) In three dimensions, the vertex dual to a tetrahedron is connected by four dual edges, which cross its four faces, to the dual vertices of the neighboring tetrahedra.](/uploads/research/lqg-dual-triangulation.png "Figure 5.4: (a) A triangulation of a surface (in gray) and its dual graph (in red): each triangle corresponds to a dual vertex, and each shared edge to a dual edge. (b) In three dimensions, the vertex dual to a tetrahedron is connected by four dual edges, which cross its four faces, to the dual vertices of the neighboring tetrahedra.")

The discretized action reads

$$
S[X_\ell, g_e] = \sum_{f} {\operatorname{Tr}}\big( X_{\ell_f}\, U_f \big),
\tag{5.16}
$$

where $\ell_f$ is the segment dual to the face $f$. The integral over the variables $X_\ell$, which range over ${\mathfrak{su}}(2)\simeq\mathbb R^3$, produces a delta distribution on the group, and we obtain

$$
Z = \int\prod_\ell {\mathrm{d}} X_\ell\,\prod_e{\mathrm{d}} g_e\;{\mathrm{e}}^{{\mathrm{i}} S[X_\ell,g_e]}
= \int\prod_e{\mathrm{d}} g_e\;\prod_f\delta\big(U_f\big) ,
\tag{5.17}
$$

up to normalization: the path integral imposes that every face holonomy be trivial, that is, that the discrete connection be flat. We then expand the delta distribution on ${\mathrm{SU}}(2)$ by means of the Peter–Weyl theorem,

$$
\delta(g) = \sum_{j\in\mathbb N/2} (2j+1)\,\chi^{j}(g), \qquad \chi^j(g) = {\operatorname{Tr}} D^{(j)}(g),
\tag{5.18}
$$

which gives

$$
Z = \sum_{\{j_f\}} \prod_f (2j_f+1) \int\prod_e{\mathrm{d}} g_e\; \prod_f \chi^{j_f}\Big( \prod_{e\in\partial f} g_e \Big).
\tag{5.19}
$$

Each holonomy $g_e$ appears in the three faces bounded by the edge $e$. The integral $\int{\mathrm{d}} g\, D^{(j_1)}(g)\otimes D^{(j_2)}(g)\otimes D^{(j_3)}(g)$ is the projector onto the invariants of $V_{j_1}\otimes V_{j_2}\otimes V_{j_3}$, that is, the product of two Wigner $3j$ symbols (Appendix A). At each dual vertex, that is, at each tetrahedron, four $3j$ symbols are contracted into a _$6j$ symbol_, which depends on the six spins carried by the edges of the tetrahedron (Fig. 5.5):

$$
\{6j\} = {\begin{Bmatrix}{j_1}&{j_2}&{j_3}\\{j_4}&{j_5}&{j_6}\end{Bmatrix}} .
\tag{5.20}
$$

In this notation, each of the triples $(j_1,j_2,j_3)$, $(j_1,j_5,j_6)$, $(j_4,j_2,j_6)$ and $(j_4,j_5,j_3)$ corresponds to a face of the tetrahedron and must satisfy the triangle conditions. The partition function finally takes the form of the _Ponzano–Regge model_ [87]:

$$
\boxed{\;Z_{\mathrm{PR}} = \sum_{\{j_\ell\}} \prod_{\ell} (2j_\ell+1) \prod_{\text{tetrahedra}} {\begin{Bmatrix}{j_1}&{j_2}&{j_3}\\{j_4}&{j_5}&{j_6}\end{Bmatrix}}\;}
\tag{5.21}
$$

up to phase factors that depend on the normalization conventions for the intertwiners.

![The tetrahedron associated with the \6j\ symbol: the six spins are carried by its edges, and each face corresponds to a triple of spins that satisfies the triangle conditions. Adapted from (1).](/uploads/research/lqg-6j.png "Figure 5.5: The tetrahedron associated with the \6j\ symbol: the six spins are carried by its edges, and each face corresponds to a triple of spins that satisfies the triangle conditions. Adapted from [1].")

**Semiclassical limit and relation to Regge calculus.** The interest of the Ponzano–Regge model lies in a remarkable result, conjectured by Ponzano and Regge and proven by Roberts [95]: in the limit of large spins, the $6j$ symbol behaves as

$$
{\begin{Bmatrix}{j_1}&{j_2}&{j_3}\\{j_4}&{j_5}&{j_6}\end{Bmatrix}} \simeq \frac{1}{\sqrt{12\pi V}}\, \cos\Big( \sum_{e=1}^{6} \big(j_e + \tfrac12\big)\,\theta_e + \frac\pi4 \Big),
\tag{5.22}
$$

where $V$ is the volume of the Euclidean tetrahedron with edge lengths $j_e + \tfrac12$, and $\theta_e$ are its exterior dihedral angles. The argument of the cosine is the Regge action of the tetrahedron. The spins are therefore interpreted as quantized lengths, and in the semiclassical limit the vertex amplitude behaves as the sum of ${\mathrm{e}}^{{\mathrm{i}} S_{\mathrm{Regge}}}$ and ${\mathrm{e}}^{-{\mathrm{i}} S_{\mathrm{Regge}}}$: the quantum model reproduces discrete Regge gravity. The sum over spins in (5.21) diverges in general; these divergences, which are associated with the “bubbles” of the 2-complex, can be regularized. Turaev and Viro [88] showed that replacing ${\mathrm{SU}}(2)$ by the quantum group ${\mathrm{SU}}(2)_q$, with $q$ a root of unity, yields a finite sum that is independent of the triangulation; this sum defines a topological invariant of three-dimensional manifolds and corresponds to gravity with a positive cosmological constant. Finally, the Ponzano–Regge amplitudes coincide with the physical scalar product of three-dimensional loop quantum gravity [96]: in this case, the link between the canonical and covariant formulations is established.

#### 5.4.2 BF Theory and the Ooguri Model

In four dimensions, general relativity has local degrees of freedom and is not a topological theory. We first consider a simpler theory, _BF theory_, which generalizes the action (5.15) to arbitrary dimension. For a Lie group $\mathcal G$, its variables are a 2-form $B$ with values in the Lie algebra of $\mathcal G$ and a connection $\omega$ with curvature $F$; its name simply derives from the notation for these two fields. The action reads

$$
S_{\mathrm{BF}}[B,\omega] = \int_{\mathcal M} {\operatorname{Tr}}\big( B\wedge F(\omega) \big),
\tag{5.23}
$$

that is, $\int B_{IJ}\wedge F^{IJ}$ for $\mathcal G = {\mathrm{SO}}(4)$. The equations of motion, $F = 0$ and $D_\omega B = 0$, again admit only locally trivial solutions: BF theory is topological in any dimension.

The discretization follows exactly the steps of the previous section, now on a four-dimensional triangulation. The field $B$ is integrated over the triangles, which are dual to the faces of $\Delta^*$; the holonomies are associated with the dual edges, that is, with the tetrahedra. We again obtain $Z = \int\prod_e{\mathrm{d}} g_e\prod_f\delta(U_f)$ and then, after the character expansion, a sum over the spins $j_f$ of the faces. Each dual edge now bounds four faces, since a tetrahedron has four triangles: the integral over $g_e$ produces the projector onto the space of four-valent intertwiners, $\sum_{\iota_e}{\left|{\iota_e}\right\rangle}{\left\langle{\iota_e}\right|}$, whose dimension is in general greater than one. This results in a sum over one intertwiner $\iota_e$ per edge. At each vertex, which is dual to a 4-simplex, five edges (the five tetrahedra on the boundary of the 4-simplex) and ten faces (its ten triangles) meet: the vertex amplitude is the evaluation of the spin network given by the complete graph on five nodes, which carries ten spins and five intertwiners (Fig. 5.6),

$$
\{15j\}\big(j_1,\dots,j_{10};\iota_1,\dots,\iota_5\big) = \big( \iota_1\otimes\iota_2\otimes\iota_3\otimes\iota_4\otimes\iota_5 \big)\Big|_{\text{contracted according to the complete graph } K_5} .
\tag{5.24}
$$

When each four-valent intertwiner is expressed in a basis labeled by a virtual spin, this amplitude depends on fifteen spins, hence the name $\{15j\}$ symbol. The partition function of the Ooguri model [89] is

$$
Z_{\mathrm{BF}} = \sum_{\{j_f\},\{\iota_e\}} \prod_f (2j_f+1) \prod_v \{15j\}_v .
\tag{5.25}
$$

For $\mathcal G = {\mathrm{SO}}(4)\simeq({\mathrm{SU}}(2)\times{\mathrm{SU}}(2))/\mathbb Z_2$, the amplitude factorizes into two copies of the ${\mathrm{SU}}(2)$ model. Crane and Yetter [90] constructed the quantum-group version of this model, which corresponds to BF theory with a cosmological constant; these four-dimensional topological models are sometimes referred to collectively as the TOCY models (Turaev, Ooguri, Crane, Yetter) [1].

![The boundary spin network of a 4-simplex: the complete graph on five nodes, whose nodes carry the intertwiners ι₁,,ι₅ (dual to the five tetrahedra) and whose links carry the spins j₁,,j₁₀ (dual to the ten triangles). Its evaluation defines the \15j\ symbol. The crossings of the links are not nodes. Adapted from (1).](/uploads/research/lqg-15j.png "Figure 5.6: The boundary spin network of a 4-simplex: the complete graph on five nodes, whose nodes carry the intertwiners ι₁,,ι₅ (dual to the five tetrahedra) and whose links carry the spins j₁,,j₁₀ (dual to the ten triangles). Its evaluation defines the \15j\ symbol. The crossings of the links are not nodes. Adapted from [1].")

#### 5.4.3 From BF Theory to Gravity: Simplicity Constraints and the EPRL Model

**General relativity as a constrained BF theory.** Plebański observed that general relativity can be written as a BF theory for the Lorentz group, supplemented by constraints that force the field $B$ to be of the form ${\star}(e\wedge e)$ [97]. Once the Holst term is included, a comparison of (5.23) with (1.23) shows that general relativity corresponds to

$$
B_{IJ} = \frac{1}{16\pi G}\Big( {\star}\Sigma - \frac1\gamma\Sigma \Big)_{IJ}, \qquad \Sigma^{IJ} = e^I\wedge e^J .
\tag{5.26}
$$

The constraints that ensure that a field $B$ is of this form are called _simplicity constraints_. In a discretization, they act on the bivectors associated with the triangles of each tetrahedron; in the frame in which the normal to the tetrahedron is $n^I = (1,0,0,0)$, they take the form of the linear simplicity constraint (1.29), ${\vec{{K}}} = \gamma{\vec{{L}}}$, which we obtained in Chapter 1. The idea underlying the models of four-dimensional gravity is to start from the BF model for the Lorentz group and to impose these constraints at the quantum level, which restores the local degrees of freedom.

**Imposing the constraints at the quantum level.** In the Lorentzian case, the unitary irreducible representations of the principal series of ${\mathrm{SL}}(2,\mathbb C)$, which appear in the expansion of the delta distribution on the group, are labeled by a pair $(p,k)$, with $p\in\mathbb R$ and $k\in\mathbb N/2$. The two Casimir operators take the values

$$
{\vec{{L}}}^2 - {\vec{{K}}}^2 = k^2 - p^2 - 1, \qquad {\vec{{K}}}\cdot{\vec{{L}}} = p\,k .
\tag{5.27}
$$

Each of these representations decomposes into ${\mathrm{SU}}(2)$ representations of spins $j = k, k+1, \ldots$. The constraint ${\vec{{K}}} = \gamma{\vec{{L}}}$ cannot be imposed strongly, since its components do not commute with one another; Engle, Pereira, Rovelli and Livine [28] impose it weakly, by requiring that its matrix elements between physical states vanish in the limit of large spins. It can be shown that this condition selects the representations

$$
p = \gamma\,k, \qquad k = j,
\tag{5.28}
$$

and, within each of them, the subspace of minimal spin $j$. We thus define the map

$$
Y_\gamma : V_j \longrightarrow \mathcal H^{(\gamma j,\, j)}, \qquad {\left|{j,m}\right\rangle} \longmapsto {\left|{(\gamma j,j);\, j, m}\right\rangle},
\tag{5.29}
$$

which embeds the spin-$j$ representation space of ${\mathrm{SU}}(2)$ into the $(\gamma j,j)$ representation of ${\mathrm{SL}}(2,\mathbb C)$. The consistency of this choice can be checked on the Casimirs: ${\vec{{K}}}\cdot{\vec{{L}}} = \gamma j^2$, whereas $\gamma{\vec{{L}}}^2 = \gamma j(j+1)$, and the two coincide in the limit of large spins.

**The EPRL amplitude.** The vertex amplitude of the EPRL model is obtained from the boundary spin network of the vertex, whose links carry spins $j_l$ and whose nodes carry ${\mathrm{SU}}(2)$ intertwiners $\iota_n$: we embed each link into ${\mathrm{SL}}(2,\mathbb C)$ by means of $Y_\gamma$ and integrate over one element of the Lorentz group per node. Schematically,

$$
A_v^{\mathrm{EPRL}}(j_l,\iota_n) = \int_{{\mathrm{SL}}(2,\mathbb C)^5} \prod_{n=1}^{5}{\mathrm{d}} g_n\;\delta(g_5)\;
\Big( \bigotimes_{n}\iota_n \Big)\cdot \bigotimes_{l=(nm)} \Big( Y_\gamma^\dagger\, D^{(\gamma j_l, j_l)}\big(g_n^{-1}g_m\big)\, Y_\gamma \Big),
\tag{5.30}
$$

where $D^{(p,k)}$ denotes the matrices of the representation $(p,k)$; the distribution $\delta(g_5)$ removes one of the integrations, which is redundant because of Lorentz invariance, and ensures that the amplitude is finite [98]. Freidel and Krasnov [29] independently obtained a closely related model, which coincides with the EPRL model in Euclidean signature for $\gamma<1$. The model was extended by Kamiński, Kisielowski and Lewandowski to arbitrary 2-complexes [92], whose boundaries are spin networks of arbitrary valence.

**Properties.** The EPRL model has several properties that make it, at present, the reference model of covariant quantum gravity [2, 27].

(i) Its boundary state space is spanned by ${\mathrm{SU}}(2)$ spin networks: it is precisely the kinematical Hilbert space of loop quantum gravity, which provides a bridge between the canonical and covariant formulations. The parameter $\gamma$ enters in the same way as in the area spectrum.

(ii) The vertex amplitude is finite [98].

(iii) In the limit of large spins, and for boundary data that describe the geometry of a 4-simplex, the amplitude behaves as $A_v \sim N_+\,{\mathrm{e}}^{{\mathrm{i}} S_{\mathrm{Regge}}/\hbar} + N_-\,{\mathrm{e}}^{-{\mathrm{i}} S_{\mathrm{Regge}}/\hbar}$, where $S_{\mathrm{Regge}}$ is the Regge action of the 4-simplex and $N_\pm$ are slowly varying factors [99, 100]: discrete general relativity emerges in the semiclassical limit, just as Regge gravity does in the Ponzano–Regge model.

Essential questions remain open: the role of the sum over 2-complexes and its relation to the continuum limit, the structure of the radiative divergences, the precise relation to the canonical Hamiltonian constraint of Chapter 3, and the semiclassical limit beyond a single 4-simplex.

## Conclusion and Outlook

### Summary

This thesis has presented loop quantum gravity as a direct, non-perturbative and background-independent quantization of general relativity. We recall here its main steps.

The formulation of general relativity in terms of tetrads and a spin connection, supplemented by the Holst term, leads to a theory that is classically equivalent to Einstein's theory but whose canonical structure depends on a dimensionless parameter, the Barbero–Immirzi parameter $\gamma$. We have seen that, by virtue of the Nieh–Yan identity, this parameter does not affect the vacuum equations of motion, and that it fixes the ratio between the boost and rotation parts of the momentum conjugate to the connection, ${\vec{{K}}} = \gamma{\vec{{L}}}$.

The $3+1$ decomposition reveals general relativity as a fully constrained system, whose Hamiltonian is a combination of first-class constraints. In Ashtekar–Barbero variables, the phase space is that of an ${\mathrm{SU}}(2)$ gauge theory subject to the Gauss, diffeomorphism and Hamiltonian constraints, and the electric field $E^a_i$ is interpreted as the area element of spatial surfaces.

Quantization based on holonomies and fluxes leads to a kinematical Hilbert space, which is unique under the assumption of diffeomorphism invariance and in which spin networks form an orthonormal basis of the gauge-invariant states. The area and volume operators have discrete spectra on this space: the area of a surface is a sum of quanta $8\pi\gamma{\ell_{\mathrm{P}}}^2\sqrt{j(j+1)}$, and volume is carried by nodes of valence at least four. These results underpin the interpretation of spin networks as quantum states of geometry, composed of grains of volume separated by quanta of area. The Hamiltonian constraint could be defined as an operator by means of Thiemann's construction; its action locally modifies the combinatorial structure of spin networks.

We then developed two applications. The computation of black hole entropy, based on the local first law of Frodden, Ghosh and Perez and on the counting of horizon punctures, reproduces the Bekenstein–Hawking law $S = A/4{\ell_{\mathrm{P}}}^2$ when $\gamma = \gamma_0\simeq0.274$. The relation $E = aA/(8\pi G)$ that underlies this computation itself follows from the simplicity constraint ${\vec{{K}}} = \gamma{\vec{{L}}}$, which provides a consistent link between the canonical structure of the theory and the thermodynamics of horizons. Finally, the spin foam formulation expresses transition amplitudes between quantum geometries as sums over histories of spin networks. From the Ponzano–Regge model, whose semiclassical limit reproduces the Regge action, to the EPRL model, whose boundary state space is that of the canonical theory, this formulation provides a second route to the dynamics.

### Open Questions

Loop quantum gravity is not yet a complete theory. We mention here the main open questions, without any claim to exhaustiveness [2, 62, 63].

**The dynamics.** Thiemann's Hamiltonian constraint involves regularization ambiguities—the choice of representation for the holonomies, the operator ordering, the choice of loops—and it has not been established that it reproduces the classical constraint algebra, with its structure functions. The master constraint program [64] and algebraic quantum gravity [65] aim to overcome these difficulties.

**The relation between the canonical and covariant formulations.** Although the correspondence is established in three dimensions, where the Ponzano–Regge amplitudes coincide with the physical inner product of the canonical theory [96], it remains incomplete in four dimensions. The existence of several spin foam models, with differing motivations, raises the question of the uniqueness of the dynamics.

**The semiclassical limit.** It remains to be shown that general relativity is the low-energy limit of the quantum theory, that is, that suitable semiclassical states reproduce, at large scales, a smooth geometry obeying the Einstein equations. The asymptotic results obtained for a 4-simplex [99, 100] constitute an important step, but the question of the continuum limit of an extended spin foam remains open.

**Coupling to matter.** Gauge fields, fermions and the Higgs field can be coupled to the theory by expressing their actions in Ashtekar–Barbero variables. In the spin network representation, the resulting description resembles that of lattice gauge theories, with the matter fields carried by the nodes and the gauge fields by the links [3]. Coupling to matter is also possible in the spin foam formalism [1]. At this stage, however, the theory imposes no restriction on the matter content.

**The Barbero–Immirzi parameter.** Its value, which sets the scale of the geometric spectra, is determined only by the black hole entropy computation, and this determination depends on the counting scheme adopted (Section 4.5).

**Contact with observation.** Like all approaches to quantum gravity, loop quantum gravity does not yet have any experimental confirmation. Loop quantum cosmology, which applies the techniques of the theory to homogeneous models, predicts that the initial singularity is replaced by a quantum bounce [32, 33, 101], and it offers prospects for contact with cosmological observations. The physics of black holes in the final stages of evaporation offers another.

### Concluding Remark

The number of open questions should not obscure the merits of the approach. Loop quantum gravity shows that it is possible to construct, without additional assumptions and without background structure, a consistent quantum theory of geometry in which area and volume have discrete spectra and in which black hole entropy receives a microscopic interpretation. These results do not depend on the questions that remain open regarding the dynamics. Nevertheless, no theory of quantum gravity can be regarded as established until it has led to predictions confirmed by experiment. In the absence of such confirmation, the various approaches, whether loop quantum gravity, string theory or the other programs mentioned in the Introduction, each have their strengths and weaknesses, and their comparative study remains fruitful.

## Appendix A Elements of the Representation Theory of SU(2)

This appendix collects the results from the representation theory of ${\mathrm{SU}}(2)$ that are used in the main text: irreducible representations, the Peter–Weyl theorem, intertwiners, and the $3j$ and $6j$ symbols. The conventions are those of the Notation and Conventions page.

### A.1 The group SU(2) and Its Lie Algebra

The group ${\mathrm{SU}}(2)$ consists of the unitary complex $2\times2$ matrices of unit determinant; it is diffeomorphic to the sphere $S^3$ and is the double cover of ${\mathrm{SO}}(3)$. Its Lie algebra ${\mathfrak{su}}(2)$ is generated by the anti-Hermitian matrices $\tau_i = -\frac{\mathrm{i}}2\sigma_i$, with commutation relations $[\tau_i,\tau_j] = \epsilon_{ij}{}^k\tau_k$. Every element can be written as $h = \exp(\theta\,\hat n^i\tau_i)$, where $\theta\in[0,2\pi]$ is the rotation angle and $\hat n$ is a unit vector. In terms of the Euler angles $(\phi,\vartheta,\psi)\in[0,2\pi)\times[0,\pi]\times[0,4\pi)$, the normalized Haar measure, which is both left- and right-invariant, reads

$$
{\mathrm{d}} h = \frac{1}{16\pi^2}\,\sin\vartheta\;{\mathrm{d}}\phi\,{\mathrm{d}}\vartheta\,{\mathrm{d}}\psi, \qquad \int_{{\mathrm{SU}}(2)}{\mathrm{d}} h = 1 .
\tag{A.1}
$$

### A.2 Irreducible Representations

The irreducible unitary representations of ${\mathrm{SU}}(2)$ are labeled by a spin $j\in\mathbb N/2$. The carrier space $V_j$ of the spin-$j$ representation has dimension $d_j = 2j+1$ and admits the orthonormal basis $\{{\left|{j,m}\right\rangle}\}_{m=-j,\dots,j}$ of eigenvectors of $J_3 = {\mathrm{i}}\tau_3$:

$$
\begin{gathered}
{\vec{{J}}}^2{\left|{j,m}\right\rangle} = j(j+1){\left|{j,m}\right\rangle}, \qquad J_3{\left|{j,m}\right\rangle} = m{\left|{j,m}\right\rangle}, \\
J_\pm{\left|{j,m}\right\rangle} = \sqrt{j(j+1)-m(m\pm1)}\;{\left|{j,m\pm1}\right\rangle} ,
\end{gathered}
\tag{A.2}
$$

with $J_\pm = J_1\pm{\mathrm{i}} J_2$. The _Wigner matrices_ $D^{(j)}_{mn}(h) = {\left\langle{j,m}\middle|{h}\middle|{j,n}\right\rangle}$ represent the group elements, and their trace defines the _character_

$$
\chi^j(h) = {\operatorname{Tr}} D^{(j)}(h) = \frac{\sin\big((2j+1)\theta/2\big)}{\sin(\theta/2)},
\tag{A.3}
$$

which depends only on the conjugacy class of $h$, that is, on the angle $\theta$. For $j = \tfrac12$, we recover $\chi^{1/2} = {\operatorname{Tr}} h = 2\cos(\theta/2)$, the trace that appears in Wilson loops.

### A.3 The Peter–Weyl Theorem

The functions $\sqrt{2j+1}\,D^{(j)}_{mn}$ form an orthonormal basis of $L^2({\mathrm{SU}}(2),{\mathrm{d}} h)$; the orthogonality relations are given by (3.20). This yields the decomposition

$$
L^2\big({\mathrm{SU}}(2),{\mathrm{d}} h\big) = \bigoplus_{j\in\mathbb N/2} V_j\otimes V_j^* ,
\tag{A.4}
$$

and, for class functions, the orthonormality of the characters, $\int{\mathrm{d}} h\;\overline{\chi^j(h)}\,\chi^{j'}(h) = \delta_{jj'}$. The delta distribution on the group, defined with respect to the Haar measure, admits the expansion

$$
\delta(h) = \sum_{j\in\mathbb N/2}(2j+1)\,\chi^j(h),
\tag{A.5}
$$

which is used in Chapter 5. Finally, the integral of a tensor product of representations is the projector onto the invariant subspace:

$$
\int_{{\mathrm{SU}}(2)}{\mathrm{d}} h\;D^{(j_1)}(h)\otimes\cdots\otimes D^{(j_n)}(h) = \mathbb P_{\mathrm{Inv}}
= \sum_{\iota}{\left|{\iota}\right\rangle}{\left\langle{\iota}\right|},
\tag{A.6}
$$

where the sum runs over an orthonormal basis of $\mathrm{Inv}(V_{j_1}\otimes\cdots\otimes V_{j_n})$.

### A.4 Coupling of Angular Momenta and Intertwiners

The tensor product of two irreducible representations decomposes according to the Clebsch–Gordan rule

$$
V_{j_1}\otimes V_{j_2} = \bigoplus_{j={\left|{j_1-j_2}\right|}}^{j_1+j_2} V_j ,
\tag{A.7}
$$

where $j$ varies in integer steps. From this rule one obtains the dimension of the intertwiner spaces, which appear at the nodes of spin networks.

**Trivalent nodes.** The space $\mathrm{Inv}(V_{j_1}\otimes V_{j_2}\otimes V_{j_3})$ is one-dimensional if ${\left|{j_1-j_2}\right|}\le j_3\le j_1+j_2$ and $j_1+j_2+j_3\in\mathbb N$, and trivial otherwise. The normalized intertwiner is given by the _Wigner $3j$ symbol_, which is related to the Clebsch–Gordan coefficients by

$$
\begin{pmatrix} j_1 & j_2 & j_3\\ m_1 & m_2 & m_3 \end{pmatrix}
= \frac{(-1)^{j_1-j_2-m_3}}{\sqrt{2j_3+1}}\;{\left\langle{j_1,m_1;\,j_2,m_2}\middle|{j_3,-m_3}\right\rangle} .
\tag{A.8}
$$

It is nonzero only if $m_1+m_2+m_3 = 0$, and it satisfies $\sum_{m_i}\big|\begin{smallmatrix} j_1 & j_2 & j_3\\ m_1 & m_2 & m_3\end{smallmatrix}\big|^2 = 1$.

**Four-valent nodes.** A basis of $\mathrm{Inv}(V_{j_1}\otimes\cdots\otimes V_{j_4})$ is obtained by first coupling $j_1$ and $j_2$ into a “virtual” spin $k$, and then coupling $j_3$ and $j_4$ into the same spin: the intertwiner $\iota_k$ is the contraction of two $3j$ symbols along a virtual link of spin $k$, normalized by the factor $\sqrt{2k+1}$. The virtual spin ranges over

$$
\max\big({\left|{j_1-j_2}\right|},{\left|{j_3-j_4}\right|}\big) \le k \le \min\big(j_1+j_2,\, j_3+j_4\big),
\tag{A.9}
$$

in integer steps, and the number of allowed values is the dimension of the intertwiner space. For four spins $\tfrac12$, we find $k\in\{0,1\}$: the space is two-dimensional, a fact used in the volume computation (3.36). The change of coupling channel, for instance from $(j_1j_2)(j_3j_4)$ to $(j_1j_3)(j_2j_4)$, is given by the $6j$ symbols.

### A.5 The 6j Symbol

The $6j$ symbol is the contraction of four $3j$ symbols following the structure of a tetrahedron:

$$
\begin{align}
{\begin{Bmatrix}{j_1}&{j_2}&{j_3}\\{j_4}&{j_5}&{j_6}\end{Bmatrix}} = \sum_{m_1,\dots,m_6} (-1)^{\sum_{k=1}^6 (j_k-m_k)}\;
&\begin{pmatrix} j_1 & j_2 & j_3\\ -m_1 & -m_2 & -m_3\end{pmatrix}
\begin{pmatrix} j_1 & j_5 & j_6\\ m_1 & -m_5 & m_6\end{pmatrix} \\
\times\;
&\begin{pmatrix} j_4 & j_2 & j_6\\ m_4 & m_2 & -m_6\end{pmatrix}
\begin{pmatrix} j_4 & j_5 & j_3\\ -m_4 & m_5 & m_3\end{pmatrix} . \tag{A.10}
\end{align}
$$

Each of the four triples $(j_1,j_2,j_3)$, $(j_1,j_5,j_6)$, $(j_4,j_2,j_6)$ and $(j_4,j_5,j_3)$ must satisfy the triangle conditions; they correspond to the four faces of the tetrahedron in Fig. 5.5. The $6j$ symbol is invariant under the $24$ symmetry operations of the tetrahedron, namely permutations of its columns and the interchange of the upper and lower entries in any two columns. It gives the recoupling coefficients of three angular momenta,

$$
{\left\langle{(j_1j_2)j_{12},j_3;J}\middle|{j_1,(j_2j_3)j_{23};J}\right\rangle}
= (-1)^{j_1+j_2+j_3+J}\sqrt{(2j_{12}+1)(2j_{23}+1)}\;{\begin{Bmatrix}{j_1}&{j_2}&{j_{12}}\\{j_3}&{J}&{j_{23}}\end{Bmatrix}},
\tag{A.11}
$$

and satisfies the orthogonality relation

$$
\sum_x (2x+1)(2y+1){\begin{Bmatrix}{a}&{b}&{x}\\{c}&{d}&{y}\end{Bmatrix}}{\begin{Bmatrix}{a}&{b}&{x}\\{c}&{d}&{y'}\end{Bmatrix}} = \delta_{yy'} .
\tag{A.12}
$$

For example, ${\begin{Bmatrix}{1}&{1}&{1}\\{1}&{1}&{1}\end{Bmatrix}} = {\begin{Bmatrix}{\frac12}&{\frac12}&{1}\\{\frac12}&{\frac12}&{1}\end{Bmatrix}} = \frac16$ and ${\begin{Bmatrix}{2}&{2}&{2}\\{2}&{2}&{2}\end{Bmatrix}} = -\frac{3}{70}$. We have verified the asymptotic formula (5.22) numerically for the regular tetrahedron: for $j = 20$, the exact value $\{6j\}\simeq-5.029\times10^{-3}$ is reproduced to within $0.1\,\%$ by the Ponzano–Regge formula, which gives $-5.034\times10^{-3}$.

## Bibliography

1. C. Rovelli, _Quantum Gravity_, Cambridge Monographs on Mathematical Physics (Cambridge University Press, 2004). [doi:10.1017/CBO9780511755804](https://doi.org/10.1017/CBO9780511755804).
2. C. Rovelli and F. Vidotto, _Covariant Loop Quantum Gravity: An Elementary Introduction to Quantum Gravity and Spinfoam Theory_, Cambridge Monographs on Mathematical Physics (Cambridge University Press, 2014). [doi:10.1017/CBO9781107706910](https://doi.org/10.1017/CBO9781107706910).
3. T. Thiemann, _Modern Canonical Quantum General Relativity_ (Cambridge University Press, 2007). [arXiv:gr-qc/0110034](https://arxiv.org/abs/gr-qc/0110034). [doi:10.1017/CBO9780511755682](https://doi.org/10.1017/CBO9780511755682).
4. J. D. Bekenstein, “Black holes and entropy,” _Phys. Rev. D_ **7**, 2333 (1973). [doi:10.1103/PhysRevD.7.2333](https://doi.org/10.1103/PhysRevD.7.2333).
5. S. W. Hawking, “Particle creation by black holes,” _Commun. Math. Phys._ **43**, 199 (1975). [doi:10.1007/BF02345020](https://doi.org/10.1007/BF02345020).
6. M. \. J. \. G. Veltman, “One-loop divergencies in the theory of gravitation,” _Ann. Inst. H. Poincaré Phys. Théor. A_ **20**, 69 (1974).
7. M. H. Goroff and A. Sagnotti, “The ultraviolet behavior of Einstein gravity,” _Nucl. Phys. B_ **266**, 709 (1986). [doi:10.1016/0550-3213(86)90193-8](https://doi.org/10.1016/0550-3213(86)90193-8).
8. A. Ashtekar, “New variables for classical and quantum gravity,” _Phys. Rev. Lett._ **57**, 2244 (1986). [doi:10.1103/PhysRevLett.57.2244](https://doi.org/10.1103/PhysRevLett.57.2244).
9. A. Ashtekar, “New Hamiltonian formulation of general relativity,” _Phys. Rev. D_ **36**, 1587 (1987). [doi:10.1103/PhysRevD.36.1587](https://doi.org/10.1103/PhysRevD.36.1587).
10. J. \. F. Barbero\bibnamedelima G., “Real Ashtekar variables for Lorentzian signature space-times,” _Phys. Rev. D_ **51**, 5507 (1995). [arXiv:gr-qc/9410014](https://arxiv.org/abs/gr-qc/9410014). [doi:10.1103/PhysRevD.51.5507](https://doi.org/10.1103/PhysRevD.51.5507).
11. S. Holst, “Barbero's Hamiltonian derived from a generalized Hilbert-Palatini action,” _Phys. Rev. D_ **53**, 5966 (1996). [arXiv:gr-qc/9511026](https://arxiv.org/abs/gr-qc/9511026). [doi:10.1103/PhysRevD.53.5966](https://doi.org/10.1103/PhysRevD.53.5966).
12. G. Immirzi, “Quantum gravity and Regge calculus,” _Nucl. Phys. B Proc. Suppl._ **57**, 65 (1997). [arXiv:gr-qc/9701052](https://arxiv.org/abs/gr-qc/9701052). [doi:10.1016/S0920-5632(97)00354-X](https://doi.org/10.1016/S0920-5632(97)00354-X).
13. G. Immirzi, “Real and complex connections for canonical gravity,” _Class. Quantum Grav._ **14**, L177 (1997). [arXiv:gr-qc/9612030](https://arxiv.org/abs/gr-qc/9612030). [doi:10.1088/0264-9381/14/10/002](https://doi.org/10.1088/0264-9381/14/10/002).
14. R. Arnowitt, S. Deser and C. W. Misner, “Dynamical structure and definition of energy in general relativity,” _Phys. Rev._ **116**, 1322 (1959). [doi:10.1103/PhysRev.116.1322](https://doi.org/10.1103/PhysRev.116.1322).
15. R. Arnowitt, S. Deser and C. W. Misner, “The dynamics of general relativity,” _Gen. Relativ. Gravit._ **40**, 1997 (2008). [arXiv:gr-qc/0405109](https://arxiv.org/abs/gr-qc/0405109). [doi:10.1007/s10714-008-0661-1](https://doi.org/10.1007/s10714-008-0661-1).
16. T. Jacobson and L. Smolin, “Nonperturbative quantum geometries,” _Nucl. Phys. B_ **299**, 295 (1988). [doi:10.1016/0550-3213(88)90286-6](https://doi.org/10.1016/0550-3213(88)90286-6).
17. C. Rovelli and L. Smolin, “Loop space representation of quantum general relativity,” _Nucl. Phys. B_ **331**, 80 (1990). [doi:10.1016/0550-3213(90)90019-A](https://doi.org/10.1016/0550-3213(90)90019-A).
18. R. Penrose, “Angular momentum: an approach to combinatorial space-time,” in _Quantum Theory and Beyond_, edited by T. Bastin (Cambridge University Press, 1971), pp. 151\bibrangedash 180.
19. C. Rovelli and L. Smolin, “Spin networks and quantum gravity,” _Phys. Rev. D_ **52**, 5743 (1995). [arXiv:gr-qc/9505006](https://arxiv.org/abs/gr-qc/9505006). [doi:10.1103/PhysRevD.52.5743](https://doi.org/10.1103/PhysRevD.52.5743).
20. C. Rovelli and L. Smolin, “Discreteness of area and volume in quantum gravity,” _Nucl. Phys. B_ **442**, 593 (1995). [arXiv:gr-qc/9411005](https://arxiv.org/abs/gr-qc/9411005). [doi:10.1016/0550-3213(95)00150-Q](https://doi.org/10.1016/0550-3213(95)00150-Q).
21. A. Ashtekar and J. Lewandowski, “Quantum theory of geometry: I. Area operators,” _Class. Quantum Grav._ **14**, A55 (1997). [arXiv:gr-qc/9602046](https://arxiv.org/abs/gr-qc/9602046). [doi:10.1088/0264-9381/14/1A/006](https://doi.org/10.1088/0264-9381/14/1A/006).
22. A. Ashtekar and J. Lewandowski, “Quantum theory of geometry II: Volume operators,” _Adv. Theor. Math. Phys._ **1**, 388 (1997). [arXiv:gr-qc/9711031](https://arxiv.org/abs/gr-qc/9711031). [doi:10.4310/ATMP.1997.v1.n2.a8](https://doi.org/10.4310/ATMP.1997.v1.n2.a8).
23. T. Thiemann, “Anomaly-free formulation of non-perturbative, four-dimensional Lorentzian quantum gravity,” _Phys. Lett. B_ **380**, 257 (1996). [arXiv:gr-qc/9606088](https://arxiv.org/abs/gr-qc/9606088). [doi:10.1016/0370-2693(96)00532-1](https://doi.org/10.1016/0370-2693(96)00532-1).
24. T. Thiemann, “Quantum spin dynamics (QSD),” _Class. Quantum Grav._ **15**, 839 (1998). [arXiv:gr-qc/9606089](https://arxiv.org/abs/gr-qc/9606089). [doi:10.1088/0264-9381/15/4/011](https://doi.org/10.1088/0264-9381/15/4/011).
25. M. P. Reisenberger and C. Rovelli, “`Sum over surfaces' form of loop quantum gravity,” _Phys. Rev. D_ **56**, 3490 (1997). [arXiv:gr-qc/9612035](https://arxiv.org/abs/gr-qc/9612035). [doi:10.1103/PhysRevD.56.3490](https://doi.org/10.1103/PhysRevD.56.3490).
26. J. C. Baez, “Spin foam models,” _Class. Quantum Grav._ **15**, 1827 (1998). [arXiv:gr-qc/9709052](https://arxiv.org/abs/gr-qc/9709052). [doi:10.1088/0264-9381/15/7/004](https://doi.org/10.1088/0264-9381/15/7/004).
27. A. Perez, “The spin-foam approach to quantum gravity,” _Living Rev. Relativ._ **16**, 3 (2013). [arXiv:1205.2019](https://arxiv.org/abs/1205.2019). [doi:10.12942/lrr-2013-3](https://doi.org/10.12942/lrr-2013-3).
28. J. Engle, E. Livine, R. Pereira and C. Rovelli, “LQG vertex with finite Immirzi parameter,” _Nucl. Phys. B_ **799**, 136 (2008). [arXiv:0711.0146](https://arxiv.org/abs/0711.0146). [doi:10.1016/j.nuclphysb.2008.02.018](https://doi.org/10.1016/j.nuclphysb.2008.02.018).
29. L. Freidel and K. Krasnov, “A new spin foam model for 4D gravity,” _Class. Quantum Grav._ **25**, 125018 (2008). [arXiv:0708.1595](https://arxiv.org/abs/0708.1595). [doi:10.1088/0264-9381/25/12/125018](https://doi.org/10.1088/0264-9381/25/12/125018).
30. C. Rovelli, “Black hole entropy from loop quantum gravity,” _Phys. Rev. Lett._ **77**, 3288 (1996). [arXiv:gr-qc/9603063](https://arxiv.org/abs/gr-qc/9603063). [doi:10.1103/PhysRevLett.77.3288](https://doi.org/10.1103/PhysRevLett.77.3288).
31. A. Ashtekar, J. Baez, A. Corichi and K. Krasnov, “Quantum geometry and black hole entropy,” _Phys. Rev. Lett._ **80**, 904 (1998). [arXiv:gr-qc/9710007](https://arxiv.org/abs/gr-qc/9710007). [doi:10.1103/PhysRevLett.80.904](https://doi.org/10.1103/PhysRevLett.80.904).
32. M. Bojowald, “Absence of a singularity in loop quantum cosmology,” _Phys. Rev. Lett._ **86**, 5227 (2001). [arXiv:gr-qc/0102069](https://arxiv.org/abs/gr-qc/0102069). [doi:10.1103/PhysRevLett.86.5227](https://doi.org/10.1103/PhysRevLett.86.5227).
33. A. Ashtekar, T. Pawlowski and P. Singh, “Quantum nature of the big bang,” _Phys. Rev. Lett._ **96**, 141301 (2006). [arXiv:gr-qc/0602086](https://arxiv.org/abs/gr-qc/0602086). [doi:10.1103/PhysRevLett.96.141301](https://doi.org/10.1103/PhysRevLett.96.141301).
34. E. Frodden, A. Ghosh and A. Perez, “Quasilocal first law for black hole thermodynamics,” _Phys. Rev. D_ **87**, 121503 (2013). [arXiv:1110.4055](https://arxiv.org/abs/1110.4055). [doi:10.1103/PhysRevD.87.121503](https://doi.org/10.1103/PhysRevD.87.121503).
35. P. Doná and S. Speziale, “Introductory lectures to loop quantum gravity,” in _Gravitation : Théorie et Expérience_, edited by A. Bounames and A. Makhlouf (Hermann, 2013), pp. 89\bibrangedash 140. [arXiv:1007.0402](https://arxiv.org/abs/1007.0402).
36. A. Perez, “Introduction to loop quantum gravity and spin foams” (2004). [arXiv:gr-qc/0409061](https://arxiv.org/abs/gr-qc/0409061).
37. C. Rovelli, “Loop quantum gravity,” _Living Rev. Relativ._ **11**, 5 (2008). [doi:10.12942/lrr-2008-5](https://doi.org/10.12942/lrr-2008-5).
38. A. Ashtekar and J. Lewandowski, “Background independent quantum gravity: a status report,” _Class. Quantum Grav._ **21**, R53 (2004). [arXiv:gr-qc/0404018](https://arxiv.org/abs/gr-qc/0404018). [doi:10.1088/0264-9381/21/15/R01](https://doi.org/10.1088/0264-9381/21/15/R01).
39. M. Nakahara, _Geometry, Topology and Physics_ (Institute of Physics Publishing, 2003).
40. R. M. Wald, _General Relativity_ (University of Chicago Press, 1984). [doi:10.7208/chicago/9780226870373.001.0001](https://doi.org/10.7208/chicago/9780226870373.001.0001).
41. P. A. \. M. Dirac, _Lectures on Quantum Mechanics_, Belfer Graduate School of Science Monographs Series (Belfer Graduate School of Science, Yeshiva University, 1964).
42. H. \. T. Nieh and M. \. L. Yan, “An identity in Riemann-Cartan geometry,” _J. Math. Phys._ **23**, 373 (1982). [doi:10.1063/1.525379](https://doi.org/10.1063/1.525379).
43. L. Freidel, D. Minic and T. Takeuchi, “Quantum gravity, torsion, parity violation, and all that,” _Phys. Rev. D_ **72**, 104002 (2005). [arXiv:hep-th/0507253](https://arxiv.org/abs/hep-th/0507253). [doi:10.1103/PhysRevD.72.104002](https://doi.org/10.1103/PhysRevD.72.104002).
44. A. Perez and C. Rovelli, “Physical effects of the Immirzi parameter in loop quantum gravity,” _Phys. Rev. D_ **73**, 044013 (2006). [arXiv:gr-qc/0505081](https://arxiv.org/abs/gr-qc/0505081). [doi:10.1103/PhysRevD.73.044013](https://doi.org/10.1103/PhysRevD.73.044013).
45. P. A. \. M. Dirac, “Generalized Hamiltonian dynamics,” _Can. J. Math._ **2**, 129 (1950). [doi:10.4153/CJM-1950-012-1](https://doi.org/10.4153/CJM-1950-012-1).
46. M. Henneaux and C. Teitelboim, _Quantization of Gauge Systems_ (Princeton University Press, 1992).
47. B. S. DeWitt, “Quantum theory of gravity. I. The canonical theory,” _Phys. Rev._ **160**, 1113 (1967). [doi:10.1103/PhysRev.160.1113](https://doi.org/10.1103/PhysRev.160.1113).
48. J. A. Wheeler, “Superspace and the nature of quantum geometrodynamics,” in _Battelle Rencontres_, edited by C. M. DeWitt and J. A. Wheeler (W. A. Benjamin, 1968), pp. 242\bibrangedash 307.
49. É. Gourgoulhon, _3+1 Formalism in General Relativity: Bases of Numerical Relativity_, Lecture Notes in Physics (Springer, 2012). [arXiv:gr-qc/0703035](https://arxiv.org/abs/gr-qc/0703035). [doi:10.1007/978-3-642-24525-1](https://doi.org/10.1007/978-3-642-24525-1).
50. A. Peres, “On Cauchy's problem in general relativity – II,” _Nuovo Cimento_ **26**, 53 (1962). [doi:10.1007/BF02754342](https://doi.org/10.1007/BF02754342).
51. C. Rovelli and T. Thiemann, “Immirzi parameter in quantum general relativity,” _Phys. Rev. D_ **57**, 1009 (1998). [arXiv:gr-qc/9705059](https://arxiv.org/abs/gr-qc/9705059). [doi:10.1103/PhysRevD.57.1009](https://doi.org/10.1103/PhysRevD.57.1009).
52. R. Gambini and J. Pullin, _Loops, Knots, Gauge Theories and Quantum Gravity_ (Cambridge University Press, 1996). [doi:10.1017/CBO9780511524431](https://doi.org/10.1017/CBO9780511524431).
53. R. Gambini and J. Pullin, _A First Course in Loop Quantum Gravity_ (Oxford University Press, 2011). [doi:10.1093/acprof:oso/9780199590759.001.0001](https://doi.org/10.1093/acprof:oso/9780199590759.001.0001).
54. R. Giles, “Reconstruction of gauge potentials from Wilson loops,” _Phys. Rev. D_ **24**, 2160 (1981). [doi:10.1103/PhysRevD.24.2160](https://doi.org/10.1103/PhysRevD.24.2160).
55. S. Mandelstam, “Feynman rules for electromagnetic and Yang-Mills fields from the gauge-independent field-theoretic formalism,” _Phys. Rev._ **175**, 1580 (1968). [doi:10.1103/PhysRev.175.1580](https://doi.org/10.1103/PhysRev.175.1580).
56. A. Ashtekar and J. Lewandowski, “Representation theory of analytic holonomy $C^*$-algebras,” in _Knots and Quantum Gravity_, edited by J. C. Baez (Oxford University Press, 1994), pp. 21\bibrangedash 61. [arXiv:gr-qc/9311010](https://arxiv.org/abs/gr-qc/9311010). [doi:10.1093/oso/9780198534907.003.0002](https://doi.org/10.1093/oso/9780198534907.003.0002).
57. J. Lewandowski, H. Sahlmann and T. Thiemann, “Uniqueness of diffeomorphism invariant states on holonomy-flux algebras,” _Commun. Math. Phys._ **267**, 703 (2006). [arXiv:gr-qc/0504147](https://arxiv.org/abs/gr-qc/0504147). [doi:10.1007/s00220-006-0100-7](https://doi.org/10.1007/s00220-006-0100-7).
58. C. Fleischhack, “Representations of the Weyl algebra in quantum geometry,” _Commun. Math. Phys._ **285**, 67 (2009). [arXiv:math-ph/0407006](https://arxiv.org/abs/math-ph/0407006). [doi:10.1007/s00220-008-0593-3](https://doi.org/10.1007/s00220-008-0593-3).
59. R. Loll, “Spectrum of the volume operator in quantum gravity,” _Nucl. Phys. B_ **460**, 143 (1996). [arXiv:gr-qc/9511030](https://arxiv.org/abs/gr-qc/9511030). [doi:10.1016/0550-3213(95)00627-3](https://doi.org/10.1016/0550-3213(95)00627-3).
60. B. Dittrich and T. Thiemann, “Are the spectra of geometrical operators in loop quantum gravity really discrete?,” _J. Math. Phys._ **50**, 012503 (2009). [arXiv:0708.1721](https://arxiv.org/abs/0708.1721). [doi:10.1063/1.3054277](https://doi.org/10.1063/1.3054277).
61. E. Bianchi, P. Doná and S. Speziale, “Polyhedra in loop quantum gravity,” _Phys. Rev. D_ **83**, 044035 (2011). [arXiv:1009.3402](https://arxiv.org/abs/1009.3402). [doi:10.1103/PhysRevD.83.044035](https://doi.org/10.1103/PhysRevD.83.044035).
62. A. Ashtekar, “Loop quantum gravity: four recent advances and a dozen frequently asked questions,” in _The Eleventh Marcel Grossmann Meeting on Recent Developments in Theoretical and Experimental General Relativity, Gravitation and Relativistic Field Theories_, edited by H. Kleinert, R. T. Jantzen and R. Ruffini (World Scientific, 2008), pp. 126\bibrangedash 147. [arXiv:0705.2222](https://arxiv.org/abs/0705.2222). [doi:10.1142/9789812834300_0008](https://doi.org/10.1142/9789812834300_0008).
63. H. Nicolai and K. Peeters, “Loop and spin foam quantum gravity: a brief guide for beginners,” in _Approaches to Fundamental Physics_, edited by I. Stamatescu and E. Seiler (Springer, 2007), pp. 151\bibrangedash 184. [arXiv:hep-th/0601129](https://arxiv.org/abs/hep-th/0601129). [doi:10.1007/978-3-540-71117-9_9](https://doi.org/10.1007/978-3-540-71117-9_9).
64. T. Thiemann, “The Phoenix project: master constraint programme for loop quantum gravity,” _Class. Quantum Grav._ **23**, 2211 (2006). [arXiv:gr-qc/0305080](https://arxiv.org/abs/gr-qc/0305080). [doi:10.1088/0264-9381/23/7/002](https://doi.org/10.1088/0264-9381/23/7/002).
65. K. Giesel and T. Thiemann, “Algebraic quantum gravity (AQG): I. Conceptual setup,” _Class. Quantum Grav._ **24**, 2465 (2007). [arXiv:gr-qc/0607099](https://arxiv.org/abs/gr-qc/0607099). [doi:10.1088/0264-9381/24/10/003](https://doi.org/10.1088/0264-9381/24/10/003).
66. A. Perez, “Black holes in loop quantum gravity,” _Rep. Prog. Phys._ **80**, 126901 (2017). [arXiv:1703.09149](https://arxiv.org/abs/1703.09149). [doi:10.1088/1361-6633/aa7e14](https://doi.org/10.1088/1361-6633/aa7e14).
67. R. P. Kerr, “Gravitational field of a spinning mass as an example of algebraically special metrics,” _Phys. Rev. Lett._ **11**, 237 (1963). [doi:10.1103/PhysRevLett.11.237](https://doi.org/10.1103/PhysRevLett.11.237).
68. E. \. T. Newman et al., “Metric of a rotating, charged mass,” _J. Math. Phys._ **6**, 918 (1965). [doi:10.1063/1.1704351](https://doi.org/10.1063/1.1704351).
69. S. W. Hawking, “Gravitational radiation from colliding black holes,” _Phys. Rev. Lett._ **26**, 1344 (1971). [doi:10.1103/PhysRevLett.26.1344](https://doi.org/10.1103/PhysRevLett.26.1344).
70. D. Christodoulou, “Reversible and irreversible transformations in black-hole physics,” _Phys. Rev. Lett._ **25**, 1596 (1970). [doi:10.1103/PhysRevLett.25.1596](https://doi.org/10.1103/PhysRevLett.25.1596).
71. D. Christodoulou and R. Ruffini, “Reversible transformations of a charged black hole,” _Phys. Rev. D_ **4**, 3552 (1971). [doi:10.1103/PhysRevD.4.3552](https://doi.org/10.1103/PhysRevD.4.3552).
72. J. M. Bardeen, B. Carter and S. W. Hawking, “The four laws of black hole mechanics,” _Commun. Math. Phys._ **31**, 161 (1973). [doi:10.1007/BF01645742](https://doi.org/10.1007/BF01645742).
73. S. W. Hawking, “Black hole explosions?,” _Nature_ **248**, 30 (1974). [doi:10.1038/248030a0](https://doi.org/10.1038/248030a0).
74. M. Planck, “Zur Theorie des Gesetzes der Energieverteilung im Normalspectrum,” _Verh. Dtsch. Phys. Ges._ **2**, 237 (1900).
75. A. Einstein, “Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt,” _Ann. Phys. (Leipzig)_ **17**, 132 (1905). [doi:10.1002/andp.19053220607](https://doi.org/10.1002/andp.19053220607).
76. W. G. Unruh, “Notes on black-hole evaporation,” _Phys. Rev. D_ **14**, 870 (1976). [doi:10.1103/PhysRevD.14.870](https://doi.org/10.1103/PhysRevD.14.870).
77. A. Ashtekar, J. C. Baez and K. Krasnov, “Quantum geometry of isolated horizons and black hole entropy,” _Adv. Theor. Math. Phys._ **4**, 1 (2000). [arXiv:gr-qc/0005126](https://arxiv.org/abs/gr-qc/0005126). [doi:10.4310/ATMP.2000.v4.n1.a1](https://doi.org/10.4310/ATMP.2000.v4.n1.a1).
78. M. Domagala and J. Lewandowski, “Black-hole entropy from quantum geometry,” _Class. Quantum Grav._ **21**, 5233 (2004). [arXiv:gr-qc/0407051](https://arxiv.org/abs/gr-qc/0407051). [doi:10.1088/0264-9381/21/22/014](https://doi.org/10.1088/0264-9381/21/22/014).
79. K. A. Meissner, “Black-hole entropy in loop quantum gravity,” _Class. Quantum Grav._ **21**, 5245 (2004). [arXiv:gr-qc/0407052](https://arxiv.org/abs/gr-qc/0407052). [doi:10.1088/0264-9381/21/22/015](https://doi.org/10.1088/0264-9381/21/22/015).
80. A. Ghosh and P. Mitra, “An improved estimate of black hole entropy in the quantum geometry approach,” _Phys. Lett. B_ **616**, 114 (2005). [arXiv:gr-qc/0411035](https://arxiv.org/abs/gr-qc/0411035). [doi:10.1016/j.physletb.2005.05.003](https://doi.org/10.1016/j.physletb.2005.05.003).
81. J. Engle, K. Noui and A. Perez, “Black hole entropy and SU(2) Chern-Simons theory,” _Phys. Rev. Lett._ **105**, 031302 (2010). [arXiv:0905.3168](https://arxiv.org/abs/0905.3168). [doi:10.1103/PhysRevLett.105.031302](https://doi.org/10.1103/PhysRevLett.105.031302).
82. R. K. Kaul and P. Majumdar, “Logarithmic correction to the Bekenstein-Hawking entropy,” _Phys. Rev. Lett._ **84**, 5255 (2000). [arXiv:gr-qc/0002040](https://arxiv.org/abs/gr-qc/0002040). [doi:10.1103/PhysRevLett.84.5255](https://doi.org/10.1103/PhysRevLett.84.5255).
83. A. Ghosh and A. Perez, “Black hole entropy and isolated horizons thermodynamics,” _Phys. Rev. Lett._ **107**, 241301 (2011). [arXiv:1107.1320](https://arxiv.org/abs/1107.1320). [doi:10.1103/PhysRevLett.107.241301](https://doi.org/10.1103/PhysRevLett.107.241301).
84. E. Bianchi, “Entropy of non-extremal black holes from loop gravity” (2012). [arXiv:1204.5122](https://arxiv.org/abs/1204.5122).
85. A. Ghosh, K. Noui and A. Perez, “Statistics, holography, and black hole entropy in loop quantum gravity,” _Phys. Rev. D_ **89**, 084069 (2014). [arXiv:1309.4563](https://arxiv.org/abs/1309.4563). [doi:10.1103/PhysRevD.89.084069](https://doi.org/10.1103/PhysRevD.89.084069).
86. R. P. Feynman, “Space-time approach to non-relativistic quantum mechanics,” _Rev. Mod. Phys._ **20**, 367 (1948). [doi:10.1103/RevModPhys.20.367](https://doi.org/10.1103/RevModPhys.20.367).
87. G. Ponzano and T. Regge, “Semiclassical limit of Racah coefficients,” in _Spectroscopic and Group Theoretical Methods in Physics_, edited by F. Bloch, S. \. G. Cohen, S. Sambursky and I. Talmi (North-Holland, 1968), pp. 1\bibrangedash 58.
88. V. G. Turaev and O. Y. Viro, “State sum invariants of 3-manifolds and quantum $6j$-symbols,” _Topology_ **31**, 865 (1992). [doi:10.1016/0040-9383(92)90015-A](https://doi.org/10.1016/0040-9383(92)90015-A).
89. H. Ooguri, “Topological lattice models in four dimensions,” _Mod. Phys. Lett. A_ **7**, 2799 (1992). [arXiv:hep-th/9205090](https://arxiv.org/abs/hep-th/9205090). [doi:10.1142/S0217732392004171](https://doi.org/10.1142/S0217732392004171).
90. L. Crane and D. Yetter, “A categorical construction of 4D topological quantum field theories,” in _Quantum Topology_, edited by L. H. Kauffman and R. A. Baadhio (World Scientific, 1993), pp. 120\bibrangedash 130. [arXiv:hep-th/9301062](https://arxiv.org/abs/hep-th/9301062). [doi:10.1142/9789812796387_0005](https://doi.org/10.1142/9789812796387_0005).
91. J. W. Barrett and L. Crane, “Relativistic spin networks and quantum gravity,” _J. Math. Phys._ **39**, 3296 (1998). [arXiv:gr-qc/9709028](https://arxiv.org/abs/gr-qc/9709028). [doi:10.1063/1.532254](https://doi.org/10.1063/1.532254).
92. W. Kamiński, M. Kisielowski and J. Lewandowski, “Spin-foams for all loop quantum gravity,” _Class. Quantum Grav._ **27**, 095006 (2010). [arXiv:0909.0939](https://arxiv.org/abs/0909.0939). [doi:10.1088/0264-9381/27/9/095006](https://doi.org/10.1088/0264-9381/27/9/095006).
93. L. Freidel, “Group field theory: an overview,” _Int. J. Theor. Phys._ **44**, 1769 (2005). [arXiv:hep-th/0505016](https://arxiv.org/abs/hep-th/0505016). [doi:10.1007/s10773-005-8894-1](https://doi.org/10.1007/s10773-005-8894-1).
94. T. Regge, “General relativity without coordinates,” _Nuovo Cimento_ **19**, 558 (1961). [doi:10.1007/BF02733251](https://doi.org/10.1007/BF02733251).
95. J. Roberts, “Classical $6j$-symbols and the tetrahedron,” _Geom. Topol._ **3**, 21 (1999). [arXiv:math-ph/9812013](https://arxiv.org/abs/math-ph/9812013). [doi:10.2140/gt.1999.3.21](https://doi.org/10.2140/gt.1999.3.21).
96. K. Noui and A. Perez, “Three-dimensional loop quantum gravity: physical scalar product and spin-foam models,” _Class. Quantum Grav._ **22**, 1739 (2005). [arXiv:gr-qc/0402110](https://arxiv.org/abs/gr-qc/0402110). [doi:10.1088/0264-9381/22/9/017](https://doi.org/10.1088/0264-9381/22/9/017).
97. J. F. Plebański, “On the separation of Einsteinian substructures,” _J. Math. Phys._ **18**, 2511 (1977). [doi:10.1063/1.523215](https://doi.org/10.1063/1.523215).
98. J. Engle and R. Pereira, “Regularization and finiteness of the Lorentzian loop quantum gravity vertices,” _Phys. Rev. D_ **79**, 084034 (2009). [arXiv:0805.4696](https://arxiv.org/abs/0805.4696). [doi:10.1103/PhysRevD.79.084034](https://doi.org/10.1103/PhysRevD.79.084034).
99. J. W. Barrett et al., “Asymptotic analysis of the Engle-Pereira-Rovelli-Livine four-simplex amplitude,” _J. Math. Phys._ **50**, 112504 (2009). [arXiv:0902.1170](https://arxiv.org/abs/0902.1170). [doi:10.1063/1.3244218](https://doi.org/10.1063/1.3244218).
100. J. W. Barrett et al., “Lorentzian spin foam amplitudes: graphical calculus and asymptotics,” _Class. Quantum Grav._ **27**, 165009 (2010). [arXiv:0907.2440](https://arxiv.org/abs/0907.2440). [doi:10.1088/0264-9381/27/16/165009](https://doi.org/10.1088/0264-9381/27/16/165009).
101. A. Ashtekar and P. Singh, “Loop quantum cosmology: a status report,” _Class. Quantum Grav._ **28**, 213001 (2011). [arXiv:1108.0893](https://arxiv.org/abs/1108.0893). [doi:10.1088/0264-9381/28/21/213001](https://doi.org/10.1088/0264-9381/28/21/213001).
