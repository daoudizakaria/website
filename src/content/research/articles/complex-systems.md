---
slug: complex-systems
title: "Advanced Topics in Complex Systems: Neural Computation and High-Dimensional Random Landscapes"
date: 2025-01-01
summary: >-
  An essay in two parts. The first follows the evolution of neural
  computation, from the reptile-to-mammal transition in the cortex to
  autoassociative memory in the hippocampus and latching dynamics in Potts
  networks. The second introduces high-dimensional random landscapes: spiked
  matrix and tensor inference, the BBP transition, and the Kac–Rice and
  replica methods used to count stationary points in rugged landscapes.
tags:
  - complex-systems
  - neural-computation
  - random-matrix-theory
  - spin-glasses
resume: "/uploads/research/complex-systems.pdf"
---

## Part I — Evolution of Neural Computation

### 1 Introduction and Motivation

The origin of mammals is a deviated lineage from early reptiles (therapsids); a process occurred some 300 million years ago. One of the key evolutionary steps in the mammalian brain, resulting from this shift, involves a major alteration in the sensory dorsal cortex. The motivation behind this evolution is driven primarily by quantitative computational needs, from which we can deduce the "phase transition" that distinguishes mammals from reptiles [1, 2]. There are two principal arguments for this [2, 3]:

1. **Reorganization of the Medial Pallium:** During the transition, the hippocampus is formed slowly from a part of the medial cortex. Where the region of dentate gyrus (DG), a new distinct structure, starts to be populated by _CA3_.
2. **Development of the Neocortex:** At the same time, along with the reorganization of the Medial Pallium, a layered neocortex emerges from the dorsal pallium. A granular layer, _Layer IV_, which enables the separation of the object identity and the spatial local information, is inserted, improving the precision of topographical sensory maps of the mammalian brain.

### 2 Mammalian Brain and Autoassociative Networks

#### 2.1 Evolution of the mammalian brain

Maybe the greatest breakthrough of neural computation in vertebrate evolution is the transition from early reptiles to mammals. That period marked significant qualitative changes in the brain's organization. During the mammals' evolution, the increased need for forming associations and storing memories, particularly those related to spatial environments and specific events, favored the development of complex, intricate neural networks. A major evolution is the laminated isocortex, a process during which a completely new layer of granule cells _Layer IV_ is inserted, known as the process of granulation. These granule cells are a specificity of the mammalian brain [1–3]. This primary shift from the reptilian dorsal cortex, where the keen sense of smell that characterizes early mammals played a crucial role, is primordial for supporting the fine topography observed in mammalian sensory maps. The mammalian isocortex stands out as a highly organized structure with a distinctive six-layered architecture and a radial columnar, it is a remarkable leap in terms of structural complexity and functional capacity. For example, the unique structure of the mammalian brain can be highlighted by the diversification of intratelencephalic (IT) cortical neurons, found in layers 2 through 6 of the isocortex, the addition of new cells types, such as stellate cells in layer 4, pyramidal tract cells in layer 5B, and corticothalamic cells in layer 6 [3, 5].

The formation of this laminar architecture follows a specific development pattern known as the inside-out neurogenetic gradient, where neurons born later in development migrate past the earlier-formed layers to reach their final positions in the more superficial layers of the cortex.

#### 2.2 Autoassociative networks

Many authors have suggested that the CA3 stage acts as an autoassociation memory, which enables episodic memories to be formed and stored in the CA3 network [2, 6].

$$
V = \begin{cases}
g\left(h - T_{hr}\right), & \text{if } h > T_{hr},\\[8pt]
0, & \text{if } h < T_{hr}
\end{cases}
\tag{1}
$$

where the function $V$ is the output, $h$ the total synaptic current entering the cell, and $g$ the gain. On the other hand the integration of synaptic inputs is given by [6]

$$
h_i = \sum_{j=1}^C J^c_{ij} V_j + \text{(non-specific inputs)}
\tag{2}
$$

here, $h_i$ is the relative contributions, and $\sum_{j=1}^C J^c_{ij} V_j$ is a component of the integrated current, where $V$ is the firing rate of the presynaptic cell, and $J$ the proportionality factor, or synaptic factor, due to associative learning. Non-specified inputs may come from cells that are not part of the autoassociative network; we may assume an additional quantitative value for the input current $\Delta h_i$, defined as external current for each cell involved in the process. Since we want the model to be accurate, we need to define an additional quantity for the average firing level of inhibitory neurons and the strengths of their synapses to pyramidal cells, $b(X)$, where $X=\frac{1}{C} \sum_{j=1}^C V_j$, is the dependence is $C$ the set of cells that give inputs to a given cell [5, 6]. (2) can then be rewritten as

$$
h_i = \sum_{j=1}^C J^c_{ij} V_j + \Delta h_i + b\left(X\right)
\tag{3}
$$

The performance of autoassociative networks is measured by how many patterns they can store and retrieve, known as storage capacity, and by the information content, which is the amount of reliable information that can be retrieved from the network for each synapse [6].

#### 2.3 Hippocampus, space and memory

The prevalence of spatial correlates in the rate has encouraged speculations on the evolution of the hippocampus based on spatial functions. Mammals differ from birds and reptiles in that they have detached during their evolution the dentate gyrus from Ammon's Horn [1, 5].

The dual operating mode of storing and retrieving in memory can be achieved by acetylcholine (ACh) by acting differentially on afferent inputs and recurrent connections [1]. Instead of other species, in the mammalian hippocampal cortex, both functions can be performed efficiently in a passive mode, this can be achieved by inserting a preprocessor before the CA3 memory network, which can serve to define which units in CA3 should be involved. This preprocessor is also useful to estimate the amount of new information that could be encoded in CA3 representations with different input systems [1, 6]. The neural network approach to quantifying the capacity of associative memories has been initially formulated in terms of fully connected recurrent architectures and discrete memory states, however, we waited until Rolls and other (1989) to clearly define the crucial role of CA3 recurrent collaterals and made explicit the relation to auto-associative memory networks. An autoassociator may subserve both the storage of discrete memories or more complex memories, its storage capacity, particularly the capacity of a multichart recurrent autoassociator maps a finite environment onto the activity of place-cell-like units, which is equivalent to as many discrete attractor states as there are locations in the environment [6].

The dentate gyrus plays a prominent role in the retrieval capacity of charts. A quantitative analysis of information storage in a model CA3 network, operating with and without dentate gyrus confirmed the essential role of inputs from the dentate gyrus to CA3 in guiding the learning of a new chart. The forcing effect of mossy fibers to CA3 is even more salient when assessed indirectly in the information content of localization accuracy afforded by representations in CA1, whose components are only influenced by DG cells indirectly [1, 3]. Therefore the activity of DG units are concentrated on a relatively small fraction of newly generated granule cells, focusing on representing new information in a more efficient way than older neurons. We can schematize the structured flow of information from the entorhinal cortex (EC) through the dentate gyrus (DG) to CA3 and then to CA1 as follow [5]:

1. **Perforant Path:** $\text{EC} \rightarrow \text{DG}$ general contextual input.
2. **Mossy Fibers:** $\text{DG} \rightarrow \text{CA3}$ delivering sparse to impose new memory traces on CA3.
3. **Recurrent Collaterals:** $\text{CA3} \rightarrow \text{CA3}$ enabling autoassociation.
4. **Schaffer Collaterals:** $\text{CA3} \rightarrow \text{CA1}$ relaying reconstructed memory output to CA1 and onward to cortex.

The schema can be visualised as follows:

![Schematic diagram of hippocampal circuitry: the entorhinal cortex projects to the dentate gyrus (perforant path) and directly to CA3; the dentate gyrus projects to CA3 (mossy fibers); CA3 has recurrent connections and projects to CA1 (Schaffer collaterals); CA1 outputs to the subiculum](/uploads/research/complex-systems-hippocampal-circuitry.svg "Figure 1: Schematic diagram of hippocampal circuitry.")

### 3 Language and Latching Dynamics

The phenomenon of mind wandering has become a rich research field by opening doors to spontaneous, internally generated thought. Mind wandering can be formalized as a functional process rooted in the dynamical behavior of cortical networks [4], particularly those in the prefrontal cortex. Rather than being random or noise-like, it is believed that random wandering reflects structured sequences of internal states driven by associative memory and schemata retrieval, where the dynamic evolution and temporal structured fragments of thought are embedded in semantic memory networks. The retrieval process is done by spontaneous latching dynamics instead of as a response to external stimuli. This process is driven by Hebbian learning mechanisms [4],

$$
J_{ij} \propto \int dt \left(r_i(t) - \langle r_i \rangle \right) \left(r_j(t) - \langle r_j \rangle \right)
\tag{4}
$$

where $J_{ij}$ is the synaptic weight, and $r_i(t)$ and $r_j(t)$ the activities. Synaptic strengths are modified by correlated activity and do not require supervision, instruction, or external reward signals. Hence, the brain can incidentally learn temporal patterns and retrieve them later during periods of free-form cognition. (4) shows that synaptic weight increases when the activities co-vary over time, which enables associative learning. Equation (4) can be rewritten considering temporal sequences, these sequences allows the encoding of causal relationships required for latching [4]

$$
J_{ij} \propto \sum_k \int dt \int dt\, K(\delta) \left(r_i^k(t+\delta) - \langle r_i \rangle \right) \left(r_j^k(t) - \langle r_j \rangle \right)
\tag{5}
$$

where the kernel $K(\delta)$ has both symmetric and asymmetric components, this double structure allow the network to capture temporal structure.

A series of publications led to an empirical model: **Potts associative network**. Each module in this network comprises local attractor states, and sparse global patterns emerge across interconnected modules. The latching behavior starts with the addition of structured long-range connectivity and adaptation mechanisms. The transitions that lead to the latching behavior are explored by network phase transitions, where the system behavior qualitatively changes depending on memory load and connectivity. Beyond a critical point of this system, networks shift from static memory retrieval to ongoing dynamic recall, which is the key feature of latching behavior. In the Potts network, the storage capacity is given by [4]

$$
P_c \propto \frac{C \cdot S^2}{a}
\tag{6}
$$

$C$ is the number of connections, $S$ the number of states per unit, and $a$ the activity sparsity. Therefore, increasing the complexity of local units, $S$, and the density network, $C$, allows the brain to store more semantic patterns.

The network exhibits latching when adaptation mechanisms are added, this will lead to infinite sequence generation [4]. In mixed networks, Potts units with higher $S$ will slow down lower-$S$ units, and vice versa. This is known as the speed inversion effect. This allows the prefrontal cortex to direct retrieval memory from posterior areas

$$
q\left(t_0 + \tau\right) = \frac{1}{2}, \quad \text{when } q(t_0) = 1
\tag{7}
$$

(7) is the latching overlap decay. Where $q(t)$ is the overlap between network activity and the target memory pattern and $\tau$ represents how long the network takes to move from one attractor to another.

## Part II — High-Dimensional Random Landscapes

### 4 The Landscape Program: Introduction and Motivation

High-dimensional random landscapes are random functions that emerge naturally when studying complex systems. These random functions $\varepsilon(s)$ of many variables $N \gg 1$, where $s = (s_1, s_2, \ldots, s_N)$ are extensively used in the economy, neurons in biological or artificial neural networks, ecosystem studies, particles or spins in materials, etc. The configuration of the entire system is described by vectors $s$ belonging to high-dimensional configuration spaces. Since the complex systems in general evolve by making local moves in configuration space, updating their configuration in the direction that changes the value of functions such as energy, fitness, loss, or cost function $\varepsilon(s)$. These functions contain information about the random interactions between their components; the study of the dynamics of the system can be done by considering it as a stochastic optimization problem of a high-dimensional random landscape [8]. More precisely, the function $\mathcal{E}(s)$ encodes this randomness, where $s$ is the set of the configuration and $\mathbb{S}^{N-1}(\sqrt{N})$ the geometry of the landscape. A key aim of the landscape program is to understand the behavior of the _geometry and topology_ of $\mathcal{E}(s)$, how it affects algorithmic search, and how it controls dynamics in systems [8, 9].

The answers to these three central questions summarize the landscape program:

1. **What is the structure of the ground state $s_{\mathbb{GS}} = \arg\min E(s)$?** Does the minimum have special alignment with any known structure (such as a signal direction)?
2. **What does the rest of the landscape look like?** Are there many local minima? Are there many saddles? Is the system dominated by exponentially many metastable states (a hallmark of glassiness), or is the energy surface relatively smooth?
3. **How do dynamics behave?** Can local algorithms find the minimum efficiently, or do they become trapped? What are the time scales to reach low-energy regions?

The main strategy to answer the questions above is to consider _stationary points_ of the landscape; local minima, maxima, saddles. These special configurations $\mathbf{s}$ satisfy the $(N-1)$-dimensional gradient $\nabla_\perp \mathcal{E}_r(s) = 0$.

### 5 Quadratic High-Dimensional Inference

#### 5.1 Noisy Matrix Inference

In denoising problems, the goal is to infer a signal that has been corrupted by _noise_. For the beginning, we consider the "spiked GOE matrices", a particular case of the "spiked matrix problem". These are $N \times N$ matrices $\mathbf{M}$ that decompose

$$
\mathbf{M} = \frac{r}{N} \mathbf{v}\mathbf{v}^T + \mathbf{J}
\tag{8}
$$

where $\mathbf{v} \in S_n(\sqrt{N})$ and $\mathbf{J} \in \text{GOE}(\sigma^2)$. The first term is the spike, with the signal $\mathbf{v}$ being the signal in a $N$-dimensional vector that belongs to the hypersphere $S_N(\sqrt{N}) = \{\mathbf{s} : \|s\|^2 = N\}$. The second term is the noise, represented by the matrix $\mathbf{J}$, a matrix independent of the signal, symmetric, and the distribution of its entries is Gaussian. The distributions of the entries of these random matrices are

$$
P_N(\mathbf{J})\,d\mathbf{J} = \frac{1}{2^{\frac{N}{2}}} \left( \frac{N}{2\pi\sigma^2} \right)^{\frac{N(N+1)}{4}} e^{-\frac{N}{4\sigma^2} \text{Tr}\,\mathbf{J}} \prod_{i \leq j} d\mathbf{J}_{ij}
\tag{9}
$$

the matrices obeying to the distribution (9) belong to the Gaussian Orthogonal Ensemble (GOE) with variance $\sigma^2$.

The _signal-to-noise ratio_ $r/\sigma$ measures the relative strength of the signal with respect to the typical size of fluctuation of the noise. The inference problem can be stated as follow: we have access to several instances of the noisy matrix, $\mathbf{M}$ and we assume that we know the signal-to-noise ratio $r/\sigma$ as well as the form of the distribution of the noise $\mathbf{J}$, can this information allow us to infer the position of the unknown vector $\mathbf{v}$ on the hypersphere $S_N(\sqrt{N})$. To answer this problem, we need to focus on the _maximum likelihood_ approach.

We consider now the limiting cases that can help to optimization problem. First $r \rightarrow 0$, in this limit, the overlap function will be $q_N(\mathbf{s}_{GS}, \mathbf{v}) \rightarrow 0$ for $N \rightarrow \infty$. Secondly $\sigma \rightarrow 0$, in this case the minima is attained exactly at $\mathbf{s}_{GS} = \pm\mathbf{v}$, therefore the maximum likelihood estimator is fully informative of the signal. The signal-to-noise parameter is relevant to analyze the landscape behavior, which can be summarized using the questions given in the introduction [8]

1. **Question 1: Signal recovery using maximum likelihood:** what are the values of the signal-to-noise ratio for which the position of the vector $\mathbf{v}$ is known? If we consider the statistical mechanics framework, more particularly the Boltzmann measure

   $$
   Z_\beta = \int_{S_N} d\mathbf{s}\, e^{-\beta \mathcal{E}_r(\mathbf{s})}
   \tag{10}
   $$

   we find that in the limit $\beta \rightarrow \infty$ the measure collapses to the Ground state configuration, which is a useful way to formulate the maximum likelihood problem.

2. **Question 2: Topology and Geometry:** are there exponentially-many local minima? In other terms, is the energy landscape $\mathcal{E}_r$ rugged? What is the energy distribution on the hypersphere $S_N$? Their overlap with the vector $\mathbf{v}$?
3. **Question 3: Dynamics of the landscape:** Does the search for $\mathbf{s}_{GS}$ needs very large timescales to be performed? If yes, this is a hard problem.

#### 5.2 Random Matrix Theory

One of its general interests is to describe properties of the spectrum of the spiked GOE random matrices $\mathbf{M}$ in the limit of large matrix size, $N \rightarrow \infty$. The eigenvalues distribution can be written [8],

$$
\upsilon_N(\lambda) = \frac{1}{N} \sum_{\alpha=1}^N \delta\left(\lambda - \lambda^\alpha\right), \quad \lambda \in \mathbb{R}
\tag{11}
$$

which can be decomposed for large $N$

$$
d\upsilon_N(\lambda) \approx \rho_N(\lambda)\, d\lambda + \frac{1}{N} \sum_i \delta\left(\lambda - \lambda^{iso,i}\right) d\lambda
\tag{12}
$$

the random function with a distribution $\rho_N(\lambda)$ can be given as

$$
\lim_{N \rightarrow \infty} \rho_N(\lambda) = \rho_\infty(\lambda) = \lim_{N \rightarrow \infty} \mathbb{E}\left[\rho_N(\lambda)\right]
\tag{13}
$$

and the isolated eigenvalues $\lambda_N^{iso,i}$

$$
\lim_{N \rightarrow \infty} \lambda_N^{iso,i} = \lambda_\infty^{iso,i}
\tag{14}
$$

The problem maps to an eigenvalue problem where the eigenvalue density of the matrices exists in the interval $\left[-2\sigma, 2\sigma\right]$ [10]. Therefore, isolated eigenvalues are located outside the range of the eigenvalue density, with a contribution of the order $\frac{1}{N}$. We find that:

1. There are no isolated eigenvalues in the absence of perturbation, i.e., $r = 0$.
2. For $r > 0$, transition occurs in the limit $N \rightarrow \infty$ at a critical value $r_c(\sigma) = \sigma$.
3. For $r > r_c$, the matrices have a single isolated eigenvalue.

In the case where $N$ is large but finite, the transition at $r = r_c(\sigma)$ becomes a crossover, three different regimes can be defined for $r > 0$

$$
(r_c - r) \gg N^{-\frac{1}{3}} \quad \text{subcritical}
\tag{15}
$$

$$
(r - r_c) \approx N^{-\frac{1}{3}} \quad \text{critical}
\tag{16}
$$

$$
(r - r_c) \gg N^{-\frac{1}{3}} \quad \text{supercritical}
\tag{17}
$$

The transition at $r = r_c$ is both a transition in the typical value of the maximal and a transition in the scaling and nature of the fluctuations of largest eigenvalue at finite but large $N$. This is referred to as the _BBP transition_. In the quadratic landscape, the optimization problem reduces to a spectral problem: the ground state $s_{\mathbb{GS}}$ coincides with the leading eigenvector of the matrix $M = \frac{r}{N} vv^T + J$. The recovery of the signal thus depends on whether the top eigenvalue becomes an outlier, detaching from the bulk of the Wigner semicircle. This detachment occurs when $r > \sigma$, and the associated eigenvector correlates with the signal $v$, enabling recovery [8].

#### 5.3 Ground State, Metastability, and Dynamics

The recovery of the unknown signal $\mathbf{v}$ is only possible via the maximum likelihood estimator if the condition below is satisfied

$$
q_\infty\left(\mathbf{s}_{GS}, \mathbf{v}\right) := \lim_{N \rightarrow \infty} q_N\left(\mathbf{s}_{GS}, \mathbf{v}\right) > 0
\tag{18}
$$

hence, for $N \rightarrow \infty$ a sharp transition occurs at $r = r_c(\sigma) = \sigma$. The transition in this case is continuous, where the critical value of signal-to-noise ratio $(r/\sigma)_c = 1$ is called the _recovery threshold_, the order parameter $q_\infty(\mathbf{s}_{GS}, \mathbf{v})$ changes from $0 \rightarrow \infty$ continuously, which made it a second order transition. This threshold is also the upper limit for which spiked and GOE matrix are undistinguishable, i.e., _detection threshold_.

The total number of stationary points $\mathbf{s}$ does not grow exponentially with $N$, hence the landscape is not rugged. The random variable $X_N(\epsilon)$ is self-averaging when $N \rightarrow \infty$. Most stationary points are saddles of _extensive index_ $\kappa = O(N)$, while some others are saddles with _intensive index_ $\kappa = O(1)$, corresponding to the bulk of the density and the edge of the density respectively. Following the BBP transition, an overlap is only gained by the maximal eigenvalue, while for the other eigenvalue, the overlap $q_N(\mathbf{s}_\alpha, \mathbf{v}) \rightarrow \infty$ for $N \rightarrow \infty$, which means that all the saddles are localized at the equator [8, 10].

Due to the fact that the total number of stationary points are only polynomial, and that there are no trapping metastable states, we do not require exponentially large timescales to reach the ground states, hence the quadratic energy landscape is _not hard_. The Langevin equation for $\beta \rightarrow \infty$ is given by [10]

$$
\frac{d\mathbf{s}(t)}{dt} = \sum_{j=1}^N M_{ij} s_j(t) - \lambda(t) s_i(t) + \sqrt{\frac{2}{\beta}}\, \eta_i(t)
\tag{19}
$$

with $\mathbf{s}(t=0) = \mathbf{s}_0$, this will lead to a crossover timescale depending on the statistics of extremal eigenvalues. Following the three existent critical regimes, the statistics of the gap can be summarized as follow

$$
\tau_{cross} \sim \frac{1}{g_N} \sim
\begin{cases}
O(N^{\frac{2}{3}}) & \text{subcritical regime} \\
\textit{unknown} & \text{critical regime} \\
O(N^0) = O(\log N) & \text{supercritical regime}
\end{cases}
\tag{20}
$$

### 6 Higher-Order Random Landscape

#### 6.1 Noisy Tensor Inference

Here, the observed object is a rank-one symmetric tensor:

$$
\mathbf{M} = \frac{r}{N^{p-1}} \mathbf{v}^{\bigotimes p} + \mathbf{J} \quad p \in \mathbb{N},\ p \geq 3
\tag{21}
$$

where the entries are

$$
M_{i_1 \dots i_p} = \frac{r}{N^{(p-1)/2}} v_{i_1} \cdots v_{i_p} + W_{i_1 \dots i_p}
\tag{22}
$$

with energy function:

$$
\mathcal{E}_r(s) = -\frac{1}{p!} \sum M_{i_1 \dots i_p} s_{i_1} \cdots s_{i_p}
$$

The landscape is defined as

$$
\mathcal{E}_{r,p}(\mathbf{s};\lambda) \frac{1}{p!} \sum_{i_1, i_2, \ldots, i_p} M_{i_1, i_2, \ldots, i_p} s_{i_1} s_{i_2} \ldots s_{i_p} + \frac{\lambda}{2} \left( \sum_i s_i^2 - N \right), \quad \mathbf{s} \in \mathbb{R}^N
\tag{23}
$$

Once we define the Lagrangian functions that satisfies stationary points conditions for symmetric $\mathbf{M}$, we can define the Lagrangian multiplier

$$
\lambda^\ast = -\frac{\nabla \mathcal{E}_{r,p}(\mathbf{s}^\ast) \cdot \mathbf{s}^\ast}{N} = -p \frac{\mathcal{E}_{r,p}(\mathbf{s}^\ast)}{N} = -p\, \epsilon_N(\mathbf{s}^\ast)
\tag{24}
$$

the values of the Lagrange multiplier $\lambda$ are then proportional to the energy density of the configuration $\mathbf{s}^\ast$. The set of its solution can be written as follow

$$
X_N(\epsilon) = \{\text{number of stationary points } \mathbf{s}^\ast \text{ such that } \epsilon_N(\mathbf{s}^\ast) = \epsilon\} = \max X_N(\epsilon, q)
\tag{25}
$$

for $q \in [0, 1]$. What these implies for quadratic and higher-order can be summarized in Table 1. This creates a _nonlinear_ and highly _non-convex_ energy landscape, generalizing the spherical $p$-spin model. The most important result is that for non-quadratic landscapes, $p > 2$, the number of stationary points are not self-averaging in general, which lead to the asymptotic value of this self-averaging random variable [8]

$$
\Sigma_\infty(\epsilon, q) = \lim_{N \rightarrow \infty} \frac{\log X_N(\epsilon, q)}{N} = \lim_{N \rightarrow \infty} \mathbb{E}\left[\frac{\log X_N(\epsilon, q)}{N}\right]
\tag{26}
$$

generally called the _complexity of the energy landscape_, playing the role of an entropy for stationary points. (26) controls the scaling of the typical value of the random variable.

<table>
<thead>
<tr>
<th>

**Quadratic case ($p = 2$)**

</th>
<th>

**Higher-order case ($p > 2$)**

</th>
</tr>
</thead>
<tbody>
<tr>
<td>

- Almost all stationary points are saddles at the equator ($q = 0$).
- $N_f(\epsilon)$ is $\mathcal{O}(N)$ for large $N$. The scaled variable $N_f(\epsilon)/N$ has a well-defined limiting distribution as $N \to \infty$.
- $N_f(\epsilon)/N$ is self-averaging; its distribution converges to a single value in the thermodynamic limit.

</td>
<td>

- Still need to be calculated.
- $N_f(\epsilon)$ is $\mathcal{O}(e^N)$ for large $N$, meaning $N_f(\epsilon) = e^{N s(\epsilon)} + \ldots$, where $s(\epsilon)$ is a random variable with a well-defined limit as $N \to \infty$.
- In general, $N_f(\epsilon)$ is _not_ self-averaging for $p > 2$.

</td>
</tr>
</tbody>
</table>

_Table 1: Comparison of key properties for quadratic ($p = 2$) versus higher-order ($p > 2$) random landscapes based on the provided RMT (Random Matrix Theory) results._

The typical behavior of the system is given by

$$
\Sigma_a(\epsilon, q) = \lim_{N \rightarrow \infty} \frac{\log \mathbb{E}\left[X_N(\epsilon, q)\right]}{N}
\tag{27}
$$

equation (27) is known as the _annealed complexity_, and is considered as an approximation to the _quenched complexity_, i.e., (26). Due to the concavity of the logarithm, the annealed complexity is bounded by the quenched complexity as follow

$$
\Sigma_A(\epsilon, q) \geq \Sigma_\infty(\epsilon, q) \Rightarrow \mathbb{E}\left[X_N\right] \gg X_N^{typ}
\tag{28}
$$

therefore, the average value contribute by _rare realizations_ associated to an atypically large number of stationary points.

#### 6.2 Kac-Rice and Replica Methods

The average number of solutions of equations with random coefficients can be calculated by the _Kac-Rice formula_. If we consider a non-linear equation $\nabla_\perp \mathcal{E}_{r,p}(\mathbf{s}) = 0$, and a set of configurations that satisfy the double constraints $\epsilon_N(\mathbf{s}) = \epsilon$ and $q_N(\mathbf{s}, \mathbf{v}) = q$, the Kac-Rice formula for the mean number of stationary points is given by [8]

$$
\mathbb{E}[\mathcal{N}_N(\epsilon, q)] = \int_{\mathbb{S}_N(\sqrt{N})} d\mathbf{s}\, \delta(\mathbf{s} \cdot \mathbf{v} - Nq)\, \mathbb{E}\left[ \left| \det \nabla^2_{\perp} \mathcal{E}(\mathbf{s}) \right| \, \bigg| \right]_{\nabla_{\perp} \mathcal{E}(\mathbf{s}) = 0} \mathbb{P}_{\nabla_{\perp} \mathcal{E}}(0, N\epsilon)
\tag{29}
$$

where $\mathbb{P}_{\nabla_{\perp} \mathcal{E}}(0, N\epsilon)$ is the joint probability distribution of the $(N-1)$-dimensional gradient vector $\nabla_{\perp} \mathcal{E}(\mathbf{s})$, and $\mathbb{E}\left[ \left| \det \nabla^2_{\perp} \mathcal{E}(\mathbf{s}) \right| \, \bigg| \right]_{\nabla_{\perp} \mathcal{E}(\mathbf{s}) = 0}$ is the expectation value of the Hessian at $\mathbf{s}$.

The annealed complexity can be obtained if we consider the Gaussianity, isotropy, and large dimensionality combined with random matrix theory; this will allow us to compute the leading order term in $N$ of the Kac-Rice formula (29). To characterize the typical properties of the landscape, we need to use the Kac-Rice formula along with the replica trick given below [8]

$$
\log X_N = \lim_{n \to 0} \frac{\mathbb{E}[X_N^n] - 1}{n}
\quad \Rightarrow \quad
\Sigma_\infty = \lim_{N \to \infty} \lim_{n \to 0} \frac{\mathbb{E}[X_N^n] - 1}{N n}
\tag{30}
$$

this formalism is particularly suitable for systems where there is no-random energy landscape, such as those arising in biological or ecological contexts. The Kac-Rice formalism provides a three-steps calculations to compute the complexity of high-dimensional energy landscapes [8]

1. **Counting critical points:** The expected value $\mathbb{E}[\mathcal{N}_N(\epsilon, \kappa)]$ is calculated for a stochastic function $\mathcal{E}(s)$ defined on a high-dimensional manifold, $S^{N-1}(\sqrt{N})$. Number of critical points with energy density $\epsilon$ and index $\kappa$ (i.e., with $\kappa$ negative eigenvalues of the Hessian).
2. **Constrained integration:** This expectation is articulated as an integral over configurations $s$ and Hessians $H$ that fulfill the requirements $\nabla E(s) = 0$ and $E(s) = N\epsilon$. The gradient and Hessian's probability distribution, conditioned on energy, is Gaussian and analytically manageable in numerous scenarios.
3. **Extracting the complexity:** The normalized logarithm is then used to calculate the complexity

   $$
   \Sigma(\epsilon, \kappa) = \lim_{N \to \infty} \frac{1}{N} \log \mathbb{E}[X_N(\epsilon, \kappa)]
   \tag{31}
   $$

   The integration over $\kappa$ enables the calculation of the complexity, and we can measures the exponential growth rate of stationary points at defined energies.

To avoid the annealed approximation, where the number of critical points over the disorder is generally overestimated, we need to evaluate the quenched complexity, defined in the precedent section as the logarithm of stationary points normalized by system size. Since the logarithm is hard to approximate, we will use the _replica trick_, where $\mathbb{E}[X^n]$ is computed for the limit $n \to 0$. The _multiple replicas_ of the system are then introduced to find the correlations encoded in the geometry of the landscape.

A simple ansatz assumes that _replica symmetry_ is true, i.e., all replicas are equally correlated. This yields an expression for $\Sigma(\epsilon)$ under the assumption of a homogeneous landscape structure. However, we're dealing with rugged landscapes, then the replica symmetry solution must become unstable below a certain energy level. In such cases, the analysis must be extended to define _Replica Symmetry Breaking (RSB)_ [9], where the replicas cluster into groups in its one-step form. The solution of the RSB offer a schematic organization of metastable basins and correctly encodes the distribution of critical points. The energy density where critical points are most abundant can be found by the maximum of the complexity curve $\Sigma(\epsilon)$, while the threshold energy is defined at the point where $\Sigma(\epsilon) = 0$. The energy threshold is the upper bound for which critical points are exponentially rare, explaining the reasons behind the observation of _glassy dynamics_ and the hard landscape optimization [10].

#### 6.3 Ground State, Metastability, and Dynamics

For this case too, recovery with maximum likelihood becomes possible when $q_\infty(s_{\mathbb{GS}}, \mathbf{v}) := \lim_{N \to \infty} q_N(s_{\mathbb{GS}}, \mathbf{v}) > 0$ is true. Since the transition at a critical value for higher-order landscapes is discontinuous, the recovery transition, i.e., the ferromagnetic transition occurring at $\beta \rightarrow \infty$, is discontinuous. Another feature is that most stationary points at energy densities higher than the ground state are found to be at the equator, and there are exponentially many local minima. In the analysis' settings, the isolated eigenvalue don't play a role in calculating the local minima at the equator, and since the landscape is rugged at all values of $r$, i.e., the landscape becomes topologically trivial for $(r/\sigma)_{1st} \gg 1$, where the notation shows that the transition for higher-order landscapes is discontinuous.

The optimization of the landscape is expected to be hard due to the fact that the energy landscape associated to the tensor denoising problem for $r = O(N^0)$ is _rugged_. The landscape geometry is dominated by exponentially many local minima around the energy threshold, separated by high-index saddles. These minima act as attractors for gradient-based dynamics, resulting in metastability. The ground state lies well below the energy threshold but is dynamically inaccessible unless rare fluctuations (e.g., thermal activation or non-local moves) occur [9, 10].

## References

1. A. Treves and E. T. Rolls, "Computational analysis of the role of the hippocampus in memory," _Hippocampus_ **4**(3), 374–391 (1994). doi: [10.1002/hipo.450040319](https://doi.org/10.1002/hipo.450040319). PMID: 7842058.
2. A. Montagnini and A. Treves, "The evolution of mammalian cortex, from lamination to arealization," _Brain Research Bulletin_ **60**(4), 387–393 (2003). doi: [10.1016/s0361-9230(03)00057-1](<https://doi.org/10.1016/s0361-9230(03)00057-1>). PMID: 12781326.
3. A. Treves, "Spatial Cognition, Memory Capacity, and the Evolution of Mammalian Hippocampal Networks," in _Cognitive Biology: Evolutionary and Developmental Perspectives on Mind, Brain, and Behavior_, L. Tommasi _et al._ (eds.) (2009).
4. A. Treves, "Frontal latching networks: A possible neural basis for infinite recursion," _Cognitive Neuropsychology_ **22**(3–4), 276–291 (2005). doi: [10.1080/02643290442000329](https://doi.org/10.1080/02643290442000329).
5. A. Treves, E. Cerasti, and G. Papp, "The dentate gyrus and the formation of new spatial representations in CA3," 6th FENS Forum, abstract 225.25 (2008).
6. A. Treves and E. T. Rolls, "What determines the capacity of autoassociative memories in the brain?" _Network: Computation in Neural Systems_ **2**(4), 371–397 (1991). doi: [10.1088/0954-898X_2_4_004](https://doi.org/10.1088/0954-898X_2_4_004).
7. A. Treves and E. T. Rolls, "Computational constraints suggest the need for two distinct input systems to the hippocampal CA3 network," _Hippocampus_ **2**(2), 189–199 (1992). doi: [10.1002/hipo.450020209](https://doi.org/10.1002/hipo.450020209).
8. V. Ros, "High-dimensional random landscapes: From typical to large deviations," arXiv:[2502.14084](https://arxiv.org/abs/2502.14084) (2025).
9. V. Ros and Y. V. Fyodorov, "The High-dimensional Landscape Paradigm: Spin-Glasses, and Beyond," in _Spin Glass Theory and Far Beyond: Replica Symmetry Breaking after 40 Years_, pp. 95–114 (World Scientific, 2023). doi: [10.1142/9789811273926_0006](https://doi.org/10.1142/9789811273926_0006).
10. V. Ros, G. Ben Arous, G. Biroli, and C. Cammarota, "Complex Energy Landscapes in Spiked-Tensor and Simple Glassy Models: Ruggedness, Arrangements of Local Minima, and Phase Transitions," _Physical Review X_ **9**(1), 011003 (2019). doi: [10.1103/PhysRevX.9.011003](https://doi.org/10.1103/PhysRevX.9.011003).
