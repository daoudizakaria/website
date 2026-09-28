---
slug: loop-quantum-gravity-masters-thesis/chapter-5
title: "Spin Foams"
date: 2020-09-03
summary: "From Feynman's path integral to spin foams: the Ponzano–Regge model, Ooguri's model of four-dimensional BF theory, and the EPRL model."
series: loop-quantum-gravity-masters-thesis
part: chapter-5
order: 7
kicker: "Chapter 5"
---

Classical mechanics admits two equivalent formulations, the Hamiltonian and the Lagrangian one. Feynman showed that the same holds for quantum mechanics [86]: alongside the canonical formulation, which is based on a Hilbert space and operators, there exists a covariant formulation, in which transition amplitudes are sums over all possible histories, each weighted by the exponential of the action. The canonical formulation of loop quantum gravity was presented in Chapter 3. The subject of this chapter is its covariant formulation, in which the transition amplitudes between quantum geometries of space are written as sums over histories of spin networks, called _spin foams_ [25, 26]. Each spin foam is weighted by a product of local amplitudes that depend on the spins and on the intertwiners, that is, on the quanta of area and volume. This chapter is based on [1, 2, 27, 36].

## 5.1 The Path Integral in Quantum Mechanics

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

## 5.2 From Loops to Spin Foams

### 5.2.1 The Gravitational Path Integral

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

### 5.2.2 Spin Network Histories

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

### 5.2.3 The Spin Foam as a History of Geometry

A history of spin networks admits a natural geometric representation (Fig. 5.1). In the course of its “temporal” evolution, each link of a spin network sweeps out a surface, called a _face_, and each node sweeps out a line, called an _edge_. Where the Hamiltonian constraint acts, a node splits or several nodes merge: the edges branch at a _vertex_, from which emerge the faces swept out by the newly created links (Fig. 5.2). The history is thus represented by a _2-complex_ $\mathcal C$, that is, a set of faces $f$ that meet along edges $e$, which in turn meet at vertices $v$. The faces inherit the spins of the links that swept them out, and the edges inherit the intertwiners of the corresponding nodes. A _spin foam_ is a 2-complex whose faces are colored by irreducible representations $j_f$ and whose edges are colored by intertwiners $\iota_e$; we denote it by $\sigma = (\mathcal C, j_f, \iota_e)$. Figure 5.3 shows a spin foam with two vertices.

![Evolution of a spin network between two hypersurfaces Σ_i and Σ_f: each link sweeps out a face and each node an edge. In the absence of any action of the Hamiltonian constraint, the network s_f has the same combinatorial structure as s_i. Adapted from (1).](/uploads/research/lqg-spinnet-evolution.png "Figure 5.1: Evolution of a spin network between two hypersurfaces Σ_i and Σ_f: each link sweeps out a face and each node an edge. In the absence of any action of the Hamiltonian constraint, the network s_f has the same combinatorial structure as s_i. Adapted from [1].")

![A spin foam vertex v: the edge swept out by a node branches into three edges. The three new links that connect the corresponding nodes form a triangle, and their worldsheets are three new faces emerging from the vertex. This is the spacetime representation of the action of the Hamiltonian constraint on a node, which replaces the node by a triangle (Fig. 3.7). Adapted from (1).](/uploads/research/lqg-foam-vertex.png "Figure 5.2: A spin foam vertex v: the edge swept out by a node branches into three edges. The three new links that connect the corresponding nodes form a triangle, and their worldsheets are three new faces emerging from the vertex. This is the spacetime representation of the action of the Hamiltonian constraint on a node, which replaces the node by a triangle (Fig. 3.7). Adapted from [1].")

![A spin foam with two vertices p and q between the spin networks s_i and s_f. At the vertex p, a node splits into three nodes connected by three new links, with spins j₄, j₅ and j₆; this yields the intermediate network s₁. At the vertex q, these three nodes merge again, and the faces j₄, j₅, j₆ close. Each face retains its spin: the final network carries the same spins j₁, j₂, j₃ as the initial network. Adapted from (1).](/uploads/research/lqg-foam-two-vertices.png "Figure 5.3: A spin foam with two vertices p and q between the spin networks s_i and s_f. At the vertex p, a node splits into three nodes connected by three new links, with spins j₄, j₅ and j₆; this yields the intermediate network s₁. At the vertex q, these three nodes merge again, and the faces j₄, j₅, j₆ close. Each face retains its spin: the final network carries the same spins j₁, j₂, j₃ as the initial network. Adapted from [1].")

## 5.3 General Formalism of Spin Foams

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

## 5.4 Spin Foam Models

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

### 5.4.1 The Ponzano–Regge Model

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

### 5.4.2 BF Theory and the Ooguri Model

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

### 5.4.3 From BF Theory to Gravity: Simplicity Constraints and the EPRL Model

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
