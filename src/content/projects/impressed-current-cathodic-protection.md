---
slug: impressed-current-cathodic-protection
title: "An Analytical Framework for the Design of Impressed Current Cathodic Protection Systems for Buried Steel Pipelines"
date: 2026-09-27
summary: >-
  The analytical core of a simulation tool for designing impressed current
  cathodic protection of buried pipelines: cell-wise current distribution,
  superposition of rectifiers, circuit sizing with Dwight's formulas, and
  coating attenuation as a leaky transmission line. Applied to a 1 km,
  914 mm line, with every worked example recomputed.
category: physics
paper: "/uploads/projects/iccp-technical-report.pdf"
featured: true
tags:
  - cathodic-protection
  - corrosion
  - pipelines
  - electrical-engineering
  - applied-physics
year: "2023"
type: client
rank: 1
image: "/uploads/projects/thumbs/impressed-current-cathodic-protection.webp"
glance:
  problem: "Size the rectifiers, anodes and cables that protect a buried steel pipeline from corrosion, with a model simple enough to run in a spreadsheet."
  approach: "Cell-wise current distribution, superposition of rectifiers, circuit sizing with Dwight's and Sunde's formulas, and coating attenuation treated as a leaky transmission line."
  result: "Ten stations instead of one cut the max/min current-density ratio from 51 to 3.7, and a ten-anode groundbed cuts the rectifier voltage from about 120 V to 20 V."
  tools: "Analytical modelling, electrochemistry, spreadsheet implementation"
---

## About this project

Between May and September 2023, a client asked me to build the mathematical core of a simulation tool for designing impressed current cathodic protection (ICCP) systems: the rectifiers, anodes and cables that keep a buried steel pipeline from corroding. The requirement was a model that engineers could evaluate in a spreadsheet, which ruled out finite element software and called for closed-form, cell-by-cell formulas. The technical report below documents that framework. It was written up in September 2026, when I recomputed every worked example from my original working notes and corrected the errors I found (Appendix A). The full report can also be [downloaded as a PDF](/uploads/projects/iccp-technical-report.pdf).

> "Zakaria is a brilliant dude! We had a challenging technical problem where we had to make a simulation for an extensive cathodic protection system and he just helped us CRUSH the math."
>
> — Client feedback, cathodic-protection simulation engagement (2023)

## Abstract

External corrosion of buried steel pipelines is controlled in practice by the combined use of protective coatings and cathodic protection (CP). This report presents an analytical framework developed as the computational core of a simulation tool for the design of Impressed Current Cathodic Protection (ICCP) systems. The soil surrounding the pipeline is discretised into cells of 10 m, and the design problem is decomposed into four coupled stages. The first is a cell-wise description of the current density delivered by a single rectifier. The second is its extension, by linear superposition, to an arbitrary number of rectifiers. The third is the electrical sizing of the protection circuit on the basis of Dwight's earthing-resistance formulas. The fourth is the treatment of the coated pipeline as a leaky transmission line in order to quantify potential attenuation. The framework is applied to a reference pipeline of length 1 km and outside diameter 914 mm. A parametric study indicates that distributing a fixed rectifier output over ten stations, rather than one, reduces the ratio of maximum to minimum current density along the line from approximately 51 to approximately 4. The attenuation analysis shows that, over the range of coating resistances considered, the required drain current varies by more than four orders of magnitude. All worked examples have been recomputed independently, and the corrections to the original calculations are documented in Appendix A.

## Nomenclature

| Symbol | Unit | Meaning |
| --- | --- | --- |
| $A$ | m² | external pipe surface |
| $A_1$ | m² | pipe surface per cell |
| $C_E$ | – | coating efficiency |
| $D$ | m | anode diameter |
| $E$ | V | pipe-to-soil potential (CSE) |
| $\Delta E$ | V | required potential shift |
| $G$ | S/m | coating conductance per length |
| $h$ | m | anode burial depth |
| $I$ | A | current |
| $J$ | A/m² | current density |
| $l$ | m | pipeline length |
| $L$ | m | anode length; line length (Section 7) |
| $OD$, $d$ | m | outside diameter |
| $p_m$ | – | cell index of rectifier $m$ |
| $R_a$ | Ω | anode-to-earth resistance |
| $R_{PS}$ | Ω | structure-to-electrolyte resistance |
| $R_W$ | Ω | cable resistance |
| $R_p$ | Ω/m | steel resistance per length |
| $R_{CR}$ | Ω | characteristic resistance |
| $WT$ | m | wall thickness |
| $\alpha$ | m⁻¹ | attenuation constant |
| $\rho$, $\rho_s$ | Ω m | soil and steel resistivity |
| $\omega$ | Ω m² | specific coating resistance |

## 1 Introduction

Corrosion is one of the principal mechanisms of degradation of engineering materials. The IMPACT study conducted by NACE International estimated its global cost at approximately US\$2.5 trillion, or about 3.4% of world gross domestic product [1]. In the case of buried pipelines, the soil acts as a heterogeneous electrolyte whose corrosivity depends on resistivity, moisture content, aeration, pH and microbial activity [2]. As a consequence, corrosion tends to be localised and difficult to predict. Pipelines are therefore protected by two complementary measures: a dielectric coating, which isolates the greater part of the steel surface from the soil, and cathodic protection, which protects the steel exposed at coating defects, commonly referred to as holidays [3, 4].

The principle of cathodic protection was first demonstrated by Davy, who in 1824 reported the protection of the copper sheathing of naval vessels by means of zinc and iron attachments [5]. When the structure is made the cathode of an electrochemical cell, its potential is displaced towards a region in which the anodic dissolution of iron is either thermodynamically suppressed or kinetically negligible [6, 7]. Protection may be provided either by galvanic (sacrificial) anodes of a more active metal, or by an impressed current supplied by a DC source, the rectifier, which drives current from comparatively inert anodes through the soil onto the structure (Figure 1). Impressed current systems are generally preferred for long or poorly coated pipelines and for soils of high resistivity, in which the driving voltage of galvanic anodes is insufficient [8, 9].

Two principal approaches to the modelling of CP systems may be distinguished in the literature. Analytical methods constitute the basis of current design practice [4, 10]. They comprise the earthing-resistance formulas of Dwight [11] and Sunde [12], together with the leaky transmission-line treatment of potential attenuation [3, 8], which was subsequently extended to account for polarisation and multiple anodes [13]. Numerical methods based on the boundary element and finite element methods resolve the complete potential field in the electrolyte. They have been applied to discrete coating holidays [14], to pipelines with non-negligible ohmic drop in the metal [15], and to more complex geometries such as storage-tank bottoms [16]. Although numerical models are more general, they require detailed input data and specialised software. Analytical models, by contrast, are transparent and computationally inexpensive, and are therefore well suited to preliminary design and to implementation in simple engineering tools.

### 1.1 Objective and scope

The objective of the present work was to develop the analytical core of an ICCP simulation tool for buried pipelines. The model was required to be evaluable in a spreadsheet environment and to provide (i) the distribution of protective current along the pipeline for an arbitrary rectifier layout, (ii) the electrical sizing of the protection circuit, and (iii) an assessment of the influence of coating quality on the protected length.

### 1.2 Structure of the report

Section 2 summarises the relevant electrochemical and electrical background. Section 3 describes the spatial discretisation, the reference case and the computational workflow. Sections 4 to 7 develop the four stages of the model. Section 8 presents a parametric design study, Section 9 discusses the validity and limitations of the approach, and Section 10 states the conclusions.

![Schematic of an impressed current cathodic protection system: rectifier, positive and drain cables, anode groundbed, coated pipeline and reference electrode.](/uploads/projects/iccp-schematic.png "Figure 1: Schematic representation of an impressed current cathodic protection system (side elevation, not to scale). The rectifier drives current through the positive cable into the anode groundbed; the current then flows through the soil (blue arrows), enters the pipe surface, including exposed steel at coating holidays, and returns to the rectifier through the negative drain cable. Red arrows indicate the direction of conventional current in the cables. The pipe-to-soil potential E is measured between the pipe, via a test lead, and a Cu/CuSO₄ reference electrode placed at the ground surface.")

## 2 Theoretical background

### 2.1 Protection criterion

The criterion most widely applied to buried carbon steel requires a structure-to-electrolyte potential equal to or more negative than −850 mV with respect to a saturated copper/copper sulphate electrode (CSE), the ohmic (IR) drop in the soil being taken into account in the interpretation of the measurement [4, 10]:

$$
E_{\text{pipe}} \le -0.85\ \text{V (CSE)}.
\tag{1}
$$

For a natural (unprotected) potential $E$, the potential shift to be provided by the CP system is therefore

$$
\Delta E = -0.85 - E.
\tag{2}
$$

### 2.2 Equivalent circuit

Under steady-state conditions the ICCP system may be represented as a series DC circuit comprising the rectifier, the positive cable, the anode groundbed, the soil, the pipe surface and the negative (drain) cable. The total circuit resistance is

$$
R_T = R_a + R_W + R_{PS},
\tag{3}
$$

where $R_a$ denotes the anode-to-earth resistance, $R_W$ the cable resistance and $R_{PS}$ the structure-to-electrolyte resistance. In most practical cases the circuit resistance is dominated by the electrolyte, both in the vicinity of the anodes and at the pipe surface. The contribution of the metallic path is small, except for very long or thin-walled lines [3].

## 3 Methodology

### 3.1 Spatial discretisation

The soil is represented by an $N \times M$ lattice of square cells of side 10 m, through which the pipeline passes. All state variables, namely the current density, the potential shift and the local electric field, are evaluated at cell level. The continuous problem is thereby reduced to finite sums that can be evaluated directly in a spreadsheet. The discretisation along the pipeline is illustrated in Figure 2.

![Discretisation of the soil into 10 m by 10 m cells along the pipeline, with the drain point at cell 1.](/uploads/projects/iccp-discretisation.png "Figure 2: Discretisation of the soil into cells of 10 m × 10 m along the pipeline (schematic, one row of the lattice on either side of the pipe shown). Each cell contains a pipe surface A₁. For a drain point at cell 1, the current reaching cell n is distributed over the surface Aₙ = nA₁.")

### 3.2 Reference case

All results presented in this report refer to the pipeline and environment described in Table 1. The external surface area of the pipe is $A = \pi d l = 2872.67\ \text{m}^2$, which corresponds to $A_1 = A/100 = 28.73\ \text{m}^2$ per cell.

| Parameter | Value | Parameter | Value |
| --- | --- | --- | --- |
| Length | $l = 1000$ m | Outside diameter | $d = 0.9144$ m |
| Wall thickness | $WT = 0.0159$ m | Steel resistivity | $\rho_s = 10^{-7}\ \Omega\,\text{m}$ |
| Soil resistivity | $\rho = 12.7\ \Omega\,\text{m}$ (1270 Ω cm) | Discretisation | 100 cells of 10 m |
| Natural potential | $E = -0.557$ V (CSE) | Design current density | $J_{\text{req}} = 5\ \text{mA/m}^2$ |

_Table 1: Parameters of the reference pipeline and environment._

### 3.3 Computational workflow

The tool is organised according to the sequence shown in Figure 3. Stages C1 and C2 determine the distribution of the protective current along the pipeline. Stage C3 determines the equipment required to deliver it. Stage C4 assesses the extent of protection achievable for a given coating. Where the resulting protection is inadequate, the rectifier layout is revised and the sequence repeated.

![Computational workflow of the ICCP simulation tool: inputs, stages C1 to C4, and output.](/uploads/projects/iccp-workflow.png "Figure 3: Computational workflow of the ICCP simulation tool.")

## 4 Current distribution due to a single rectifier (C1)

For a rectifier output of $I = 10$ A distributed uniformly over the pipe surface, the mean current density is

$$
\bar J = \frac{I}{A} = \frac{10}{2872.67} = 3.48\ \text{mA/m}^2.
\tag{4}
$$

In this simplified representation the longitudinal resistance of the steel is $\rho_s l/A \approx 3.5 \times 10^{-8}\ \Omega$, and the associated metallic IR drop (of order $10^{-7}$ V) is negligible. The pipe is therefore treated as equipotential at this stage, and the problem reduces to the description of the manner in which current enters the pipe along its length.

A cell-wise spreading rule is adopted for this purpose. With the drain point located at cell 1, the current reaching cell $n$ is assumed to be distributed over the pipe surface between the drain point and that cell, $A_n = nA_1$, so that

$$
J_n = \frac{I}{A_n} = \frac{I}{n A_1}.
\tag{5}
$$

This yields $J_1 = 0.348\ \text{A/m}^2$, $J_2 = 0.174\ \text{A/m}^2$, $J_3 = 0.116\ \text{A/m}^2$, and so forth. When the drain point is located at mid-line (cell 50), the distribution becomes symmetric and the extremities of the line receive $I/(50A_1) \approx 6.9\ \text{mA/m}^2$. As shown in Figure 4, this is approximately twice the minimum value obtained with an end connection.

![Cell-wise current density for a single 10 A rectifier, with the drain point at cell 1 or at cell 50.](/uploads/projects/iccp-single-rectifier.png "Figure 4: Cell-wise current density for a single rectifier of output 10 A, computed from Equation (5). A mid-line drain point approximately doubles the minimum current density along the line relative to an end connection. Triangles indicate the positions of the drain points; the dotted line is the mean current density for a uniform distribution.")

**Sign convention.** The current density is treated as a one-dimensional quantity directed along the pipe axis $Ox$. Since $\vec J = nq\vec v_d$, with $q = -e$ and the electron drift velocity antiparallel to the electric field, the sign of $\vec J$ is fixed by the choice of axis, and only its magnitude is required.

## 5 Superposition of multiple rectifiers (C2)

Within the linear, purely resistive assumptions of the model, the contributions of independent sources are additive. For $M$ rectifiers, rectifier $m$ delivering a current $I_m$ at cell $p_m$, the total current density at cell $n$ is given by

$$
J_T(n) = \sum_{m=1}^{M} \frac{I_m}{A_1\left(|p_m - n| + 1\right)},
\tag{6}
$$

in which the unit offset ensures that the cell containing each rectifier constitutes the first cell of its spreading region. Table 2 and Figure 5 present the results for a configuration of two rectifiers, A ($I_A = 10$ A, $p_A = 50$) and B ($I_B = 15$ A, $p_B = 1$).

| Cell $n$ | $J_A$ | $J_B$ | $J_T$ |
| --- | --- | --- | --- |
| 1 | 0.0070 | 0.522 | 0.529 |
| 2 | 0.0071 | 0.261 | 0.268 |
| 6 | 0.0077 | 0.087 | 0.095 |
| 50 | 0.348 | 0.010 | 0.359 |
| 100 | 0.0068 | 0.0052 | 0.012 |

_Table 2: Contributions to the current density for the two-rectifier configuration (A/m²)._

![Superposition of two rectifiers: individual contributions and total current density along the line.](/uploads/projects/iccp-superposition.png "Figure 5: Superposition of two rectifiers according to Equation (6). The total current density (solid line) is the sum of the individual contributions (dashed and dotted lines). Triangles indicate the rectifier positions. The minimum total current density occurs at the far end of the line (cell 100).")

**Local electric field.** By Ohm's law in the electrolyte, $\vec J = \sigma \vec E$, the field at the pipe surface is $E_x = \rho J_x$. For cell 6 of the configuration considered above, $E_x = 12.7 \times 0.0948 = 1.20$ V/m. The current distribution can thus be converted into a map of potential gradient suitable for comparison with close-interval survey data. Where a two-dimensional description is required, for instance in the assessment of interference, the field at a point $P$ is obtained by vector superposition of the contributions of the sources $S$ and $A$ and the sink $B$:

$$
E_{T,x} = E_{S,x} + E_{A,x} + E_{B,x}, \qquad E_{T,y} = E_{S,y} + E_{A,y} + E_{B,y}.
\tag{7}
$$

## 6 Design of the protection circuit (C3)

### 6.1 Design procedure

In accordance with established practice [3, 8], the circuit is sized by the following procedure.

1. The required potential shift $\Delta E$ is determined from Equation (2).
2. The current requirement is computed as $I = A\,J_{\text{req}}(1 - C_E)$.
3. The structure-to-electrolyte resistance is obtained as $R_{PS} = |\Delta E|/I$.
4. The anode-to-earth resistance $R_a$ is calculated from the groundbed geometry (Section 6.3).
5. The cable resistance is computed as $R_W = r_W l_W$, a 10% allowance being added to the routed cable length.
6. The total resistance $R_T$ is evaluated from Equation (3), and the rectifier is rated at $V_{\text{rec}} = 1.5\,I R_T$ and $I_{\text{rec}} \ge I$. The factor of 1.5 is a design margin intended to accommodate ageing, coating degradation and seasonal variation of soil resistivity.

### 6.2 Current requirement

For $E = -0.557$ V, Equation (2) gives $\Delta E = -0.293$ V. For an uncoated line ($C_E = 0$),

$$
I = 2872.67 \times 5 \times 10^{-3} = 14.36\ \text{A}, \qquad R_{PS} = \frac{0.293}{14.36} = 0.020\ \Omega.
$$

### 6.3 Anode-to-earth resistance

The anode under consideration is a cylinder of length $L = 0.762$ m and diameter $D = 0.152$ m, buried at a depth $h = 5$ m. Dwight's expression for a horizontal cylindrical electrode [11] may be written in SI units as

$$
R_h = \frac{\rho}{2\pi L}\left(\ln\frac{4L}{D} + \ln\frac{L}{h} + \frac{2h}{L} - 2\right).
\tag{8}
$$

In design literature it is frequently quoted in the form $R_h = (0.00521\,\rho/L)[\cdots]$, with $\rho$ expressed in Ω cm and $L$ in feet [3]. The series expansion underlying Equation (8) is valid for $2h \lesssim L$. In the present case $h \gg L$, and the anode is more appropriately represented as an isolated cylinder in an infinite medium, with a correction for its image in the insulating ground surface [12]:

$$
R_a \simeq \frac{\rho}{2\pi L}\left(\ln\frac{4L}{D} - 1\right) + \frac{\rho}{4\pi(2h)} = 5.30 + 0.10 \approx 5.4\ \Omega.
\tag{9}
$$

### 6.4 Rectifier rating

For a cable of resistance $r_W = 0.259$ mΩ/m and length $l_W = 1.1 \times 1000$ m, $R_W = 0.285$ Ω. Table 3 compares the resulting rectifier ratings for a single anode and for a groundbed of ten anodes.

| Groundbed | $R_T$ (Ω) | $V_{\text{rec}}$ (V) | $I_{\text{rec}}$ (A) |
| --- | --- | --- | --- |
| Single anode | 5.40 + 0.285 + 0.020 = 5.71 | 123 | ≥ 14.4 |
| Ten anodes in parallel† | 0.54 + 0.285 + 0.020 = 0.85 | 18 | ≥ 14.4 |

_Table 3: Circuit resistance and rectifier rating for two groundbed configurations. † Mutual interference between anodes is neglected; the value of $R_a$ is therefore a lower bound._

The groundbed resistance is the dominant term in $R_T$ and hence governs the rectifier voltage. The adoption of a multi-anode groundbed reduces the voltage requirement from approximately 120 V to approximately 20 V, which is within the range of standard 15 A rectifier units.

**Comparison with galvanic protection.** According to Peabody's empirical relation, the current output of a zinc anode is $I_{\text{Zn}} = 50\,000\, fY/\rho$ (mA, with $\rho$ in Ω cm) [3]. For $f = 1.06$ and $Y = 1$, $I_{\text{Zn}} = 41.7$ mA. A galvanic system supplying 14.4 A would therefore require of the order of 345 zinc anodes, which indicates that impressed current is the appropriate technology for a line of these dimensions.

## 7 Coating quality and potential attenuation (C4)

In Stage C1 the pipe is treated as equipotential. On an actual pipeline, current leakage through the coating causes the potential shift to decrease with distance from the drain point. Following the classical leaky transmission-line treatment [3, 8, 12], the pipeline is characterised by the following quantities per unit length:

$$
R_p = \frac{\rho_s}{\pi\, WT\,(OD - WT)}, \qquad G = \frac{\pi\, OD}{\omega},
\tag{10}
$$

$$
\alpha = \sqrt{R_p G}, \qquad R_{CR} = \sqrt{R_p/G},
\tag{11}
$$

where $R_p$ is the metallic resistance of the pipe wall, $G$ the coating conductance and $\omega$ the specific coating resistance. For a line of length $L$ drained at $x = 0$ and electrically isolated at its far end, the potential shift and the drain current are

$$
\Delta E(x) = \Delta E_0\,\frac{\cosh\big(\alpha(L - x)\big)}{\cosh(\alpha L)}, \qquad I_0 = \frac{\Delta E_0}{R_{CR}}\tanh(\alpha L).
\tag{12}
$$

These relations are evaluated in Figure 6 and Table 4 for four representative coating qualities, and the dependence of the drain current on the coating resistance is shown over the full range in Figure 6(b).

![Effect of coating quality: normalised potential shift along the line, and drain current as a function of coating resistance.](/uploads/projects/iccp-coating-attenuation.png "Figure 6: Effect of coating quality on the reference line of length 1 km, computed from Equation (12). (a) Normalised potential shift along the line: for a bare pipe approximately 16% of the drain-point shift is retained at the far end, whereas a coating of high quality maintains an almost uniform shift. (b) Drain current I₀ required to produce ΔE₀ = 0.293 V as a function of the specific coating resistance; the markers correspond to the four cases of panel (a) and Table 4.")

Over the range of coating resistances considered, the required drain current varies by more than four orders of magnitude. The coating quality also determines the length of pipeline that can be protected from a single drain point. On well-coated lines a single station may protect several kilometres, whereas bare or degraded lines require closely spaced stations. The latter configuration is precisely the problem addressed by the superposition model of Section 5.

| $\omega$ (Ω m²) | $\alpha L$ | $R_{CR}$ (Ω) | $I_0$ (A) | $\Delta E(L)/\Delta E_0$ |
| --- | --- | --- | --- | --- |
| 1 (bare) | 2.53 | $8.8 \times 10^{-4}$ | 328 | 0.16 |
| 10 | 0.80 | $2.8 \times 10^{-3}$ | 70 | 0.75 |
| $10^3$ | 0.080 | 0.028 | 0.84 | 1.00 |
| $10^5$ | 0.008 | 0.28 | 0.008 | 1.00 |

_Table 4: Attenuation parameters for the reference line ($R_p = 2.23 \times 10^{-6}$ Ω/m, $\Delta E_0 = 0.293$ V)._

## 8 Parametric study: number of rectifier stations

The use of Equation (6) as a design tool is illustrated by a parametric study. A fixed total output of 25 A was divided equally among $K = 1, \dots, 10$ stations located at the centres of equal line segments. The uniformity of protection was quantified by the ratio of the maximum to the minimum cell current density, which is plotted in Figure 7(a); the corresponding current density profiles for selected values of $K$ are shown in Figure 7(b).

![Parametric study: ratio of maximum to minimum current density against the number of stations, and current density profiles for K = 1, 3 and 10.](/uploads/projects/iccp-parametric-study.png "Figure 7: Parametric study of the number of equally spaced rectifier stations for a constant total output of 25 A. (a) Ratio of maximum to minimum cell current density as a function of the number of stations K. (b) Current density profiles for K = 1, 3 and 10.")

The ratio decreases from 51 for a single station to 11.7 for three stations and 3.7 for ten, while the minimum cell current density increases from 17 to approximately 34 mA/m². The marginal improvement becomes small beyond approximately five stations. This result reflects the familiar engineering compromise between the capital cost of additional stations and over-protection in the vicinity of each drain point. Over-protection not only wastes current but, at excessively negative potentials, may also promote cathodic disbondment of the coating [3, 4].

## 9 Discussion

### 9.1 Validity of the spreading rule

Equation (5) should be regarded as a heuristic indicator of the concentration of current near the drain point. It does not satisfy current conservation at cell level ($\sum_n J_n A_1 \neq I$), and its absolute values should therefore not be interpreted as predicted current densities. Its appropriate use is the comparative ranking of rectifier layouts by relative uniformity, as in Section 8. The attenuation law of Equation (12) is derived from the same Ohm's-law physics but conserves current, and therefore constitutes the physically consistent alternative. Its evaluation at cell level represents the natural next development of the tool.

### 9.2 Linearity assumption

Both the superposition principle and the transmission-line solution assume linear, purely resistive behaviour. In practice the pipe–soil interface polarises, and its effective resistance depends on the local current density. Pierson et al. [13] demonstrated how polarisation resistance may be incorporated into attenuation equations for pipelines protected by multiple anodes. Their formulation can be transferred directly to the present framework.

### 9.3 Representation of coating defects

The representation of the coating by a uniform conductance $G$ is equivalent to the assumption of uniformly distributed defects. Kennelley et al. [14] showed that a single large holiday imposes considerably more severe design constraints than a uniform reduction of coating efficiency of equivalent area. Where holiday survey data are available, discrete defects should therefore be modelled explicitly.

### 9.4 Relation to numerical models

Boundary element and finite element approaches [15, 16] resolve the three-dimensional field in the soil, heterogeneous resistivity and the interaction between anodes and pipeline. The analytical framework presented here is not intended to replace such models in detailed design. Its value lies in the preliminary design phase, where it permits rapid sizing of rectifiers and groundbeds, screening of candidate layouts and the definition of initial configurations for subsequent numerical refinement.

## 10 Conclusions

An analytical framework for the preliminary design of ICCP systems for buried pipelines has been developed and applied to a reference pipeline of length 1 km. The principal conclusions are as follows.

1. The design problem can be decomposed into four coupled stages, namely current distribution, multi-rectifier superposition, circuit sizing and coating attenuation. Each stage admits a closed-form, cell-wise evaluation suitable for implementation in a spreadsheet.
2. The distribution of a fixed output over several stations substantially improves the uniformity of protection. The ratio of maximum to minimum current density decreases from approximately 51 to approximately 4 between one and ten stations, with diminishing returns beyond five.
3. The groundbed resistance dominates the circuit resistance. The replacement of a single anode by a ten-anode groundbed reduces the required rectifier voltage from approximately 120 V to approximately 20 V.
4. Coating quality is the governing parameter for both current demand and protected length, each of which varies by several orders of magnitude between bare and well-coated pipe.

Further work should replace the heuristic spreading rule by the cell-wise attenuation law, incorporate polarisation kinetics [13], introduce mutual-interference factors for multi-anode groundbeds and spatially variable soil resistivity, and calibrate the tool against field close-interval potential surveys.

## Appendix A: Verification of the original calculations

All worked examples contained in the original working notes [17] and on the earlier version of this project page were recomputed independently in the preparation of this report. The discrepancies identified, and the values adopted in the present report, are summarised in Table 5.

| Item | Original value or expression | Value or expression adopted |
| --- | --- | --- |
| Position of rectifier B | "position 0" | Cell 1 ($p_B = 1$), consistent with the original numerical results. |
| Zinc anode output | 4.73 mA | 50 000 × 1.06/1270 = 41.7 mA. |
| Anode resistance | 1.19 Ω | ≈ 5.4 Ω. The original value combined the constant 0.00521 (Ω cm, ft) with SI inputs and applied Equation (8) outside its range of validity. |
| Dwight formula (web page) | $0.00521\,\rho L[\cdots]$ | $0.00521\,\rho/L[\cdots]$ in field units, or Equation (8) in SI units. |
| Cable resistance | 0.259 Ω | 0.285 Ω, including the stated 10% length allowance. |
| $R_{PS}$ | 0.021 Ω | 0.0204 Ω. |
| Pipe resistance $R_p$ | $\rho/[\pi L(OD - WT)]$ | $\rho_s/[\pi\, WT\,(OD - WT)]$ per unit length. |
| Attenuation and $I_0$ | $\cos(\alpha L)$, $\tan(\alpha L)$ | $\cosh$ and $\tanh$, Equation (12). |
| $E_x$ at cell 6 | 1.2296 V/m | 1.20 V/m, from $J_T(6) = 0.0948$ A/m². |
| Pipe-to-soil $\Delta V$ (web page) | Parallel-plate capacitor with dielectric | Not adopted. Under DC conditions the pipe–soil system is a conduction problem, described by $E = \rho J$ and Equation (12). |

_Table 5: Discrepancies identified in the original calculations and values adopted in this report._

## References

1. G. Koch, J. Varney, N. Thompson, O. Moghissi, M. Gould and J. Payer. International measures of prevention, application, and economics of corrosion technologies study (IMPACT). Technical report, NACE International, Houston, TX, 2016.
2. M. Romanoff. _Underground Corrosion_. National Bureau of Standards Circular 579. U.S. Government Printing Office, Washington, DC, 1957. doi:10.6028/NBS.CIRC.579.
3. A. W. Peabody. _Peabody's Control of Pipeline Corrosion_, 2nd ed., edited by R. L. Bianchetti. NACE International, Houston, TX, 2001.
4. NACE International. SP0169-2013: Control of external corrosion on underground or submerged metallic piping systems. Standard Practice, NACE International, Houston, TX, 2013. Superseded by SP0169-2024.
5. H. Davy. On the corrosion of copper sheeting by sea water, and on methods of preventing this effect; and on their application to ships of war and other ships. _Philosophical Transactions of the Royal Society of London_ 114, 151–158 (1824).
6. M. Pourbaix. _Atlas of Electrochemical Equilibria in Aqueous Solutions_, 2nd English ed. NACE International, Houston, TX, 1974.
7. R. W. Revie and H. H. Uhlig. _Corrosion and Corrosion Control: An Introduction to Corrosion Science and Engineering_, 4th ed. Wiley, Hoboken, NJ, 2008.
8. W. von Baeckmann, W. Schwenk and W. Prinz. _Handbook of Cathodic Corrosion Protection: Theory and Practice of Electrochemical Protection Processes_, 3rd ed. Gulf Professional Publishing, Houston, TX, 1997.
9. J. Morgan. _Cathodic Protection_, 2nd ed. NACE International, Houston, TX, 1987.
10. International Organization for Standardization. ISO 15589-1:2015 – Petroleum, petrochemical and natural gas industries – Cathodic protection of pipeline systems – Part 1: On-land pipelines. ISO, Geneva, 2015.
11. H. B. Dwight. Calculation of resistances to ground. _Electrical Engineering_ 55(12), 1319–1328 (1936). doi:10.1109/T-AIEE.1936.5057209.
12. E. D. Sunde. _Earth Conduction Effects in Transmission Systems_. Dover Publications, New York, 1968.
13. P. Pierson, K. P. Bethune, W. H. Hartt and P. Anathakrishnan. A new equation for potential attenuation and anode current output projection for cathodically polarized marine pipelines and risers. _Corrosion_ 56(4), 350–360 (2000). doi:10.5006/1.3280538.
14. K. J. Kennelley, L. Bone and M. E. Orazem. Current and potential distribution on a coated pipeline with holidays. Part I—Model and experimental verification. _Corrosion_ 49(3), 199–210 (1993). doi:10.5006/1.3316041.
15. F. Brichau and J. Deconinck. A numerical model for cathodic protection of buried pipes. _Corrosion_ 50(1), 39–49 (1994). doi:10.5006/1.3293492.
16. D. P. Riemer and M. E. Orazem. A mathematical model for the cathodic protection of tank bottoms. _Corrosion Science_ 47, 849–868 (2005).
17. Z. Daoudi. Basic maths for ICCP simulation tool. Unpublished working notes, June 2023.
