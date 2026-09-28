---
slug: loop-quantum-gravity-masters-thesis/chapter-2
title: "Hamiltonian General Relativity"
date: 2020-09-03
summary: "The ADM formalism, then triads and the Ashtekar–Barbero connection, which turn general relativity into an SU(2) gauge theory with three constraints."
series: loop-quantum-gravity-masters-thesis
part: chapter-2
order: 4
kicker: "Chapter 2"
---

The Hamiltonian formulation of general relativity is the starting point of any canonical quantization. It requires that space and time be distinguished, at least formally. To this end, we introduce the $3+1$ decomposition of Arnowitt, Deser and Misner, which reveals general relativity as a fully constrained system. We then reformulate the theory in terms of triads, and subsequently in terms of the Ashtekar–Barbero connection, which brings it closer to an ${\mathrm{SU}}(2)$ gauge theory. This chapter draws on [1–3]; for the $3+1$ decomposition, the reader may also consult [49].

## 2.1 The ADM Formalism

### 2.1.1 Foliation of Spacetime

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

### 2.1.2 Extrinsic Curvature and the ADM Action

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

### 2.1.3 Hamiltonian Formulation

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

### 2.1.4 The Hamilton–Jacobi and Wheeler–DeWitt Equations

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

## 2.2 Triads and the Ashtekar–Barbero Connection

### 2.2.1 Triads and the Densitized Triad

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

### 2.2.2 The Ashtekar–Barbero Connection

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

### 2.2.3 The Constraints in Ashtekar–Barbero Variables

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

## 2.3 Geometric Interpretation: Flux and Area

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
