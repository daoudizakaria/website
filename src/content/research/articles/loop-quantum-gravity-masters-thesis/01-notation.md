---
slug: loop-quantum-gravity-masters-thesis/notation
title: "Notation and Conventions"
date: 2020-09-03
summary: "Units, index conventions, differential forms and the su(2) algebra used throughout, with the lists of abbreviations and symbols."
series: loop-quantum-gravity-masters-thesis
part: notation
order: 1
kicker: "Front matter"
---

The conventions below are used throughout the thesis. Since signs and numerical factors vary considerably from one reference to another, we fix them once and for all; whenever our conventions differ from those of the standard monographs [1–3], this is pointed out in the text.

## Units and Constants

Unless stated otherwise, we set $c = k_{\mathrm B} = 1$ and keep Newton's constant $G$ and the reduced Planck constant $\hbar$ explicit. We write

$$
\kappa \coloneqq 8\pi G, \qquad
{\ell_{\mathrm{P}}} \coloneqq \sqrt{\hbar G},
$$

so that $\hbar\kappa = 8\pi {\ell_{\mathrm{P}}}^2$; in ordinary units, ${\ell_{\mathrm{P}}} = \sqrt{\hbar G/c^3} \simeq 1.616 \times 10^{-35}\ \mathrm{m}$. Ordinary units are restored, in particular in Chapter 4, whenever orders of magnitude are given. In Chapter 4 only, the letter $\kappa$ also denotes the surface gravity of a horizon.

## Indices

| Indices | Range | Nature |
| --- | --- | --- |
| $\mu,\nu,\rho,\ldots$ | $0,1,2,3$ | spacetime indices (manifold $\mathcal M$) |
| $a,b,c,\ldots$ | $1,2,3$ | spatial indices (hypersurface $\Sigma$) |
| $I,J,K,\ldots$ | $0,1,2,3$ | internal Lorentz indices |
| $i,j,k,\ldots$ | $1,2,3$ | internal ${\mathrm{SO}}(3)$ or ${\mathfrak{su}}(2)$ indices |

Repeated indices are summed over. The internal Minkowski metric is $\eta_{IJ} = \mathrm{diag}(-1,1,1,1)$, and the signature of $g_{\mu\nu}$ is $(-,+,+,+)$. Internal spatial indices are raised and lowered with $\delta_{ij}$. Antisymmetrization is normalized: $X_{[ab]} = \tfrac12(X_{ab} - X_{ba})$.

## Levi-Civita Symbols

The totally antisymmetric internal symbol satisfies $\epsilon_{0123} = +1$, hence $\epsilon^{0123} = -1$; in three dimensions, $\epsilon_{123} = \epsilon^{123} = 1$ and $\epsilon_{0ijk} = \epsilon_{ijk}$. The spacetime symbol $\tilde\epsilon^{\mu\nu\rho\sigma}$ and the spatial symbol $\tilde\epsilon^{abc}$ are densities taking the values $0,\pm1$; for instance,

$$
\epsilon_{IJKL}\, e^I_\mu e^J_\nu e^K_\rho e^L_\sigma = e\, \tilde\epsilon_{\mu\nu\rho\sigma},
\qquad e \coloneqq \det(e^I_\mu) = \sqrt{-g}.
$$

## Differential Forms and Internal Duality

Differential forms are written without spacetime indices: $e^I = e^I_\mu\, {\mathrm{d}} x^\mu$, $\omega^{IJ} = \omega^{IJ}_\mu\, {\mathrm{d}} x^\mu$. For an antisymmetric quantity $X^{IJ}$ with values in the Lorentz algebra, the internal Hodge dual is

$$
({\star} X)_{IJ} \coloneqq \tfrac12\, \epsilon_{IJKL}\, X^{KL}, \qquad {\star}{\star} = -1 .
$$

The curvature of a connection $\omega$ is $F^{IJ} = {\mathrm{d}}\omega^{IJ} + \omega^I{}_K \wedge \omega^{KJ}$; it is denoted $R^{IJ}$ when $\omega = \omega[e]$ is the Levi-Civita connection.

## The Algebra su(2)

The anti-Hermitian generators of ${\mathfrak{su}}(2)$ in the fundamental representation are $\tau_i = -\tfrac{{\mathrm{i}}}{2}\sigma_i$, where $\sigma_i$ are the Pauli matrices. They satisfy

$$
[\tau_i, \tau_j] = \epsilon_{ij}{}^{k}\, \tau_k, \qquad
{\operatorname{Tr}}(\tau_i \tau_j) = -\tfrac12\, \delta_{ij}.
$$

In the spin-$j$ representation, of dimension $d_j = 2j+1$, the generators are denoted $\tau^{(j)}_i$; the Casimir operator is $\tau^{(j)}_i \tau^{(j)i} = -j(j+1)\,\mathbb 1$. We write $J_i = {\mathrm{i}} \tau_i$ for the usual Hermitian generators.

## Canonical Variables

The configuration variable is the Ashtekar–Barbero connection $A^i_a = \Gamma^i_a + \gamma K^i_a$, and its conjugate momentum is the densitized triad $E^a_i$, with

$$
{\left\{{A^i_a(x)},\,{E^b_j(y)}\right\}} = \kappa\gamma\, \delta^b_a\, \delta^i_j\, \delta^{(3)}(x,y).
$$

The curvature of $A$ is $F^i_{ab} = \partial_a A^i_b - \partial_b A^i_a + \epsilon^i{}_{jk} A^j_a A^k_b$.

## Abbreviations

| Abbreviation | Meaning |
| --- | --- |
| % Include a list of abbreviations (a table of two columns)

## Symbols

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
