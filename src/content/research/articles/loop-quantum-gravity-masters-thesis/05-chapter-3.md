---
slug: loop-quantum-gravity-masters-thesis/chapter-3
title: "Quantization and Geometric Operators"
date: 2020-09-03
summary: "Holonomies and fluxes, the kinematical Hilbert space, spin networks, the discrete spectra of area and volume, and Thiemann's Hamiltonian constraint."
series: loop-quantum-gravity-masters-thesis
part: chapter-3
order: 5
kicker: "Chapter 3"
---

In this chapter we address the quantization of general relativity formulated in Ashtekar–Barbero variables, following the Dirac program recalled in Section 1.4. We first choose the elementary variables—holonomies and fluxes—and construct the kinematical Hilbert space on which they are represented. We then impose, in turn, the Gauss constraint, which leads to the spin network basis, and the diffeomorphism constraint. Next, we construct the area and volume operators, whose discrete spectra underlie the physical interpretation of the theory, before presenting the quantization of the Hamiltonian constraint proposed by Thiemann. This chapter draws on [1, 3, 38, 52, 53] and on the original articles cited in the text.

## 3.1 Holonomies and Fluxes

### 3.1.1 Choice of Elementary Variables

Not every function on phase space can be quantized: the Groenewold–van Hove theorem forbids, already in ordinary quantum mechanics, a consistent assignment of an operator to every classical function. We therefore choose a subalgebra of _elementary variables_, which we represent exactly, the other observables being subsequently constructed from them. These variables must (i) form an algebra that is closed under the Poisson bracket, (ii) separate the points of phase space, so that any other function can in principle be reconstructed from them, (iii) transform simply under ${\mathrm{SU}}(2)$ gauge transformations and diffeomorphisms, and (iv) be defined without recourse to any background structure, in particular to any metric.

The fields $A^i_a(x)$ and $E^a_i(x)$ at a point are not suitable: their brackets (2.26) are distributions, and the corresponding operators would be ill defined. In field theory on Minkowski space, this difficulty is resolved by smearing the fields against three-dimensional test functions; the resulting Fock representations, however, depend in an essential way on a background metric. The remark concluding the previous chapter provides a background-independent alternative: the connection, which is a 1-form, is integrated along curves, and the densitized triad, which is dual to a 2-form, is integrated over surfaces.

### 3.1.2 Holonomies

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

### 3.1.3 Fluxes and the Holonomy–Flux Algebra

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

## 3.2 The Loop Representation and the Mandelstam Identities

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

## 3.3 The Kinematical Hilbert Space

### 3.3.1 Cylindrical Functions

A _graph_ $\Gamma\subset\Sigma$ is a finite collection of oriented links $e_1,\dots,e_L$ that meet only at their endpoints, which are called _nodes_. A _cylindrical function_ on $\Gamma$ is a functional of the connection that depends on it only through the holonomies along the links of $\Gamma$:

$$
\Psi_{\Gamma,f}[A] = f\big( h_{e_1}[A], \dots, h_{e_L}[A] \big),
\tag{3.14}
$$

where $f : {\mathrm{SU}}(2)^L \to \mathbb C$ is a continuous function. Wilson loops and their products are special cases. We denote by ${\mathrm{Cyl}}$ the space of all cylindrical functions, on all graphs.

### 3.3.2 Inner Product and the Ashtekar–Lewandowski Measure

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

### 3.3.3 Elementary Operators

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

## 3.4 Gauss Constraint and Spin Networks

### 3.4.1 Gauge Invariance

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

### 3.4.2 Spin Networks

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

## 3.5 Diffeomorphisms and s-Knots

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

## 3.6 Geometric Operators

The area and volume operators were introduced by Rovelli and Smolin [20] and, within the rigorous framework presented here, by Ashtekar and Lewandowski [21, 22]; the spectrum of the volume operator was studied, in particular numerically, by Loll [59]. These are kinematical operators, defined on ${\mathcal{H}_{\mathrm{kin}}}$: although they are gauge invariant, they are not invariant under diffeomorphisms, since the surface or region under consideration is defined by its position in $\Sigma$. We return to this point at the end of the section.

### 3.6.1 The Area Operator

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

### 3.6.2 The Volume Operator

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

## 3.7 Quantum Geometry

The preceding results allow us to interpret spin network states as quantum states of the geometry of space (Fig. 3.5). The area operator receives contributions only from the points where the surface is crossed by a link, and the volume operator only from the nodes contained in the region. A spin network therefore describes a space made of _quanta of volume_, carried by the nodes, separated by _quanta of area_, carried by the links: two quanta of volume are adjacent if the corresponding nodes are connected by a link, and the area of the surface separating them is $8\pi\gamma{\ell_{\mathrm{P}}}^2\sqrt{j(j+1)}$, where $j$ is the spin of the link. The graph thus encodes the adjacency structure of the grains of space, the spins encode their areas, and the intertwiners their volumes.

![Geometric interpretation of a spin network. (a) The nodes carry quanta of volume and the links carry quanta of area: a surface crossed by a link of spin j acquires the area 8πγℓ_P²j(j+1). (b) A four-valent node corresponds to a quantum tetrahedron, each face of which is crossed by one of the links.](/uploads/research/lqg-quantum-geometry.png "Figure 3.5: Geometric interpretation of a spin network. (a) The nodes carry quanta of volume and the links carry quanta of area: a surface crossed by a link of spin j acquires the area 8πγℓ_P²j(j+1). (b) A four-valent node corresponds to a quantum tetrahedron, each face of which is crossed by one of the links.")

This interpretation can be formulated more precisely. The Gauss constraint at a node imposes $\sum_a {\vec{{J}}}_a = 0$, the quantum analog of the closure condition $\sum_a {\vec{{E}}}_a = 0$ satisfied by the area vectors of a polyhedron. A theorem of Minkowski ensures that any family of non-coplanar vectors summing to zero determines a unique convex polyhedron (up to translations) whose face normals are these vectors, with norms equal to the face areas. An intertwiner of valence $F$ can therefore be interpreted as a _quantum polyhedron_ with $F$ faces [61]. This polyhedron is not a sharp geometric figure: the generators ${\vec{{J}}}_a$ do not commute, so that the areas and the volume can be fixed simultaneously while the dihedral angles fluctuate, exactly as the components of an angular momentum do. The geometry described by a spin network is thus intrinsically “fuzzy” at the Planck scale. After averaging over diffeomorphisms, only the combinatorial and relational structure remains: there is no space in which the grains would be located; the grains and their adjacency relations _constitute_ space.

## 3.8 Quantization of the Hamiltonian Constraint

It remains to impose the Hamiltonian constraint (2.30), which contains the dynamics of the theory and whose quantum version is the Wheeler–DeWitt equation $\hat C\Psi = 0$. The main difficulty lies in the factor $1/\sqrt{{\left|{\det E}\right|}}$, for which no direct quantization exists, since the volume operator has a large kernel. Thiemann showed in 1996 how this obstacle can be circumvented [23, 24].

### 3.8.1 Thiemann's Trick

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

### 3.8.2 Regularization and Action on Spin Networks

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

### 3.8.3 Ambiguities and Open Questions

Thiemann's construction demonstrates that it is possible to define, without divergences and without any background structure, an operator corresponding to the Hamiltonian constraint of Lorentzian general relativity. It nevertheless involves significant ambiguities [62, 63]: the choice of the representation of ${\mathrm{SU}}(2)$ in which the holonomies are taken (the fundamental representation is only one choice among others), the operator ordering, and the choice of the triangulation and of the position of the loops $\alpha$. Moreover, the newly created links end at planar trivalent nodes, on which the volume operator vanishes, so that successive actions of the operator remain highly local; this raises doubts about the propagation of the degrees of freedom and about the semiclassical limit. Finally, the commutator of two Hamiltonian constraints vanishes on diffeomorphism-invariant states, but it has not been established that the classical algebra (2.15), with its structure functions, is reproduced. To address some of these difficulties, Thiemann proposed replacing the family of Hamiltonian constraints by a single _master constraint_ [64], and Giesel and Thiemann developed the framework of algebraic quantum gravity [65]. The covariant spin foam formulation, presented in Chapter 5, offers another route to the dynamics: there, the matrix elements of the Hamiltonian operator between spin networks are replaced by vertex amplitudes.
