---
slug: loop-quantum-gravity-masters-thesis/chapter-1
title: "Elements of General Relativity and Hamiltonian Mechanics"
date: 2020-09-03
summary: "Tetrads and spin connections, gauge symmetries, the Holst action with the Barbero–Immirzi parameter, and Dirac's treatment of constrained systems."
series: loop-quantum-gravity-masters-thesis
part: chapter-1
order: 3
kicker: "Chapter 1"
---

This chapter collects the classical tools on which loop quantum gravity rests. We first present the formulation of general relativity in terms of tetrads and the spin connection, which makes it possible to couple gravity to fermions and which brings gravity closer to gauge theories of Yang–Mills type. We then discuss the gauge symmetries of the theory coupled to matter, followed by the Holst action, which introduces the Barbero–Immirzi parameter. We conclude with the elements of the Hamiltonian mechanics of constrained systems that are needed for canonical quantization. This chapter largely follows Refs. [1, 2, 35]; for differential geometry, the reader may consult Refs. [39, 40].

## 1.1 Tetrad Formalism

### 1.1.1 Tetrads and the Metric

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

### 1.1.2 Spin Connection, Torsion, and Curvature

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

### 1.1.3 First-Order Einstein–Hilbert Action

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

### 1.1.4 Coupling to Matter

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

## 1.2 Gauge Symmetries

### 1.2.1 Dirac's Definition

The notion of gauge invariance admits a general definition, due to Dirac [41], which presupposes no group structure and which proves to be the most illuminating one for gravity. Consider a system whose evolution is governed by equations of motion. The system is said to be _gauge invariant_ if its evolution is underdetermined, that is, if there exist two distinct solutions $\varphi(t)$ and $\tilde\varphi(t)$ that coincide for $t < \hat t$ but differ for $t > \hat t$ (Fig. 1.1). Since both solutions arise from the same initial data, no measurement can distinguish them: they describe the same physical state, and their difference is a pure gauge transformation. Two arbitrary solutions are said to be gauge equivalent if they are related by a finite sequence of such transformations. The physical quantities, or _observables_, are the functions on the space of solutions that are invariant under these transformations. We shall see in Section 1.4 that, in the Hamiltonian formalism, this definition translates into the existence of first-class constraints.

![Dirac's definition of gauge invariance: two solutions φ(t) and φ(t) of the equations of motion coincide for t < t and differ afterward. Since no measurement can distinguish them, they represent the same physical state. Adapted from (1).](/uploads/research/lqg-dirac-gauge.png "Figure 1.1: Dirac's definition of gauge invariance: two solutions φ(t) and φ(t) of the equations of motion coincide for t < t and differ afterward. Since no measurement can distinguish them, they represent the same physical state. Adapted from [1].")

### 1.2.2 The Three Gauge Groups

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

## 1.3 The Holst Action and the Barbero–Immirzi Parameter

### 1.3.1 The Holst Action

The Palatini action (1.10) is not the most general term that can be constructed from $e$ and $\omega$ while respecting the above symmetries. Besides the term $\epsilon_{IJKL}\, e^I\wedge e^J\wedge F^{KL}$, there exists a second invariant of the appropriate dimension, $e_I \wedge e_J \wedge F^{IJ}$, in which the indices are contracted with $\eta_{IJ}$ rather than with $\epsilon_{IJKL}$. Holst [11] showed that the action

$$
\begin{aligned}
S_{\mathrm H}[e,\omega] &= \frac{1}{16\pi G} \int_{\mathcal M} \Big( \tfrac12\, \epsilon_{IJKL}\, e^I\wedge e^J \wedge F^{KL} - \frac1\gamma\, e_I\wedge e_J\wedge F^{IJ} \Big)\\
&= \frac{1}{16\pi G} \int_{\mathcal M} \Big( {\star}\Sigma - \frac{1}{\gamma}\Sigma \Big)_{IJ} \wedge F^{IJ},
\end{aligned}
\tag{1.23}
$$

where $\gamma \in \mathbb R^*$ is a dimensionless parameter, leads to the same equations of motion as general relativity, and that its Hamiltonian analysis yields the real variables introduced by Barbero [10]. The parameter $\gamma$ is called the _Barbero–Immirzi parameter_ [12, 13]. We omit the cosmological term here; it can be added without difficulty. The sign in front of the Holst term depends on the orientation conventions and on the definition of the spatial spin connection; with the conventions adopted in this thesis, the chosen sign leads to the connection $A = \Gamma + \gamma K$ of Chapter 2.

### 1.3.2 Equations of Motion and the Classical Role of γ

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

### 1.3.3 Conjugate Momentum and the Linear Simplicity Constraint

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

## 1.4 Hamiltonian Mechanics of Constrained Systems

In its usual form, mechanics describes the evolution of states and observables with respect to an external time, generated by a Hamiltonian. In general relativity, time is not a variable external to the system but one of its coordinates, and the Hamiltonian is a combination of constraints. In this section we recall the formalism, due to Dirac and Bergmann [41, 45, 46], that makes it possible to treat such systems.

### 1.4.1 Legendre Transform and Primary Constraints

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

### 1.4.2 The Dirac–Bergmann Algorithm and the Classification of Constraints

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

### 1.4.3 Parametrized Systems and Constrained Hamiltonians

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

### 1.4.4 Hamilton–Jacobi Formulation

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

### 1.4.5 Dirac Quantization

The quantization of systems with first-class constraints follows Dirac's program [41]. We first construct a representation of the algebra of canonical variables on a Hilbert space, called the _kinematical_ Hilbert space, ignoring the constraints; we then promote the constraints to operators and define the physical states as the solutions of

$$
\hat C_a\, {\left|{\Psi}\right\rangle} = 0 .
\tag{1.43}
$$

Finally, the space of solutions must be equipped with an inner product, which is often a source of difficulty, since the solutions are in general not normalizable in the kinematical Hilbert space. For a system whose Hamiltonian is a constraint, there is no Schrödinger equation with respect to an external time: the dynamics is entirely contained in (1.43). In gravity, this equation is the Wheeler–DeWitt equation [47, 48], which we shall encounter in the next chapter. The absence of an external time, sometimes referred to as the “problem of time”, is not a pathology of the quantum theory: it is already present in the Hamiltonian formulation of the classical theory.
