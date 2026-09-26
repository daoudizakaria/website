---
slug: complex-systems
title: "Advanced Topics in Complex Systems: Neural Computation and High-Dimensional Random Landscapes"
date: 2025-01-15
summary: >-
  Two parts: how neural computation evolved in the mammalian brain, from
  hippocampal memory to latching dynamics; and how high-dimensional random
  landscapes turn signal recovery from easy (spiked matrices) to glassy
  (spiked tensors).
tags:
  - complex-systems
  - neural-computation
  - random-matrix-theory
  - spin-glasses
resume: "/uploads/research/complex-systems.pdf"
---

## Part I — Evolution of Neural Computation

### 1 Introduction and Motivation

Mammals descend from a lineage that diverged from early reptile-like ancestors (the therapsids), a process that began some 300 million years ago. One of the key evolutionary steps in the mammalian brain resulting from this shift is a major alteration of the sensory dorsal cortex. This evolution appears to have been driven primarily by quantitative computational needs, from which one can infer a “phase transition” that distinguishes mammals from reptiles [1, 2]. Two principal arguments support this view [2, 3]:

1. **Reorganization of the medial pallium:** During the transition, the hippocampus gradually forms from part of the medial cortex, and the dentate gyrus (DG) emerges as a new, distinct structure that feeds _CA3_.

2. **Development of the neocortex:** At the same time, a layered neocortex emerges from the dorsal pallium. A granular layer, _Layer IV_, is inserted; it enables the separation of object identity from local spatial information, improving the precision of the topographic sensory maps of the mammalian brain.

### 2 Mammalian Brain and Autoassociative Networks

#### 2.1 Evolution of the mammalian brain

Perhaps the greatest breakthrough in neural computation during vertebrate evolution is the transition from early reptiles to mammals. That period brought significant qualitative changes in the organization of the brain. As mammals evolved, the increased need to form associations and store memories—particularly memories of spatial environments and of specific events—favored the development of complex, intricate neural networks. A major innovation is the laminated isocortex, into which a completely new layer of granule cells, _Layer IV_, is inserted, a process known as granulation. These granule cells are specific to the mammalian brain [1–3]. This shift away from the reptilian dorsal cortex, in which the keen sense of smell characteristic of early mammals played a crucial role, is essential for supporting the fine topography observed in mammalian sensory maps. The mammalian isocortex stands out as a highly organized structure, with a distinctive six-layered architecture and a radial columnar organization; it represents a remarkable leap in structural complexity and functional capacity. The uniqueness of the mammalian brain is highlighted, for example, by the diversification of intratelencephalic (IT) cortical neurons, found in layers 2 through 6 of the isocortex, and by the addition of new cell types, such as stellate cells in layer 4, pyramidal tract cells in layer 5B, and corticothalamic cells in layer 6 [3, 5].

This laminar architecture forms according to a specific developmental pattern known as the inside-out neurogenetic gradient: neurons born later in development migrate past the earlier-formed layers to reach their final positions in the more superficial layers of the cortex.

#### 2.2 Autoassociative networks

Many authors have suggested that CA3 acts as an autoassociative memory, allowing episodic memories to be formed and stored in the CA3 network [2, 6]. In a simple rate model, the output of each cell is a threshold-linear function of its input:

$$
V \;=\;
\begin{cases}
g \left(h - T_{hr}\right), & \text{if } h > T_{hr},\\[8pt]
0, & \text{if } h \leq T_{hr},
\end{cases}
\tag{1}
$$

where $V$ is the output firing rate, $h$ the total synaptic current entering the cell, $T_{hr}$ the firing threshold, and $g$ the gain. The integration of synaptic inputs is given by [6]

$$
h_i = \sum_{j=1}^C J^c_{ij} V_j + \text{(non-specific inputs)},
\tag{2}
$$

where $h_i$ is the total input current to cell $i$. The sum $\sum_{j=1}^C J^c_{ij} V_j$ is the recurrent component of this current: $V_j$ is the firing rate of presynaptic cell $j$, and $J^c_{ij}$ is the synaptic weight, shaped by associative learning. Non-specific inputs may come from cells that are not part of the autoassociative network; we represent them by an additional external current $\Delta h_i$ for each cell. For a more accurate model, we also include a term $b(X)$ describing the average firing of inhibitory neurons and the strength of their synapses onto pyramidal cells, where $X=\frac{1}{C} \sum_{j=1}^C V_j$ is the mean activity of the $C$ cells that provide input to a given cell [5, 6]. Equation (2) can then be rewritten as

$$
h_i = \sum_{j=1}^C J^c_{ij} V_j + \Delta h_i + b \left(X \right).
\tag{3}
$$

The performance of autoassociative networks is measured by how many patterns they can store and retrieve—their storage capacity—and by their information content, the amount of information that can be reliably retrieved from the network per synapse [6].

#### 2.3 Hippocampus, space and memory

The prevalence of spatial correlates in hippocampal firing rates has encouraged speculation that the hippocampus evolved to serve spatial functions. Mammals differ from birds and reptiles in that, during their evolution, the dentate gyrus became detached from Ammon's horn [1, 5].

The dual operating mode of memory, storage and retrieval, can be achieved with acetylcholine (ACh), which acts differentially on afferent inputs and on recurrent connections [1]. Unlike in other species, in the mammalian hippocampus both functions can be performed efficiently in a passive mode, by inserting a preprocessor before the CA3 memory network that determines which CA3 units should be involved. This preprocessor also makes it possible to estimate how much new information can be encoded in CA3 representations with different input systems [1, 6, 7]. The neural-network approach to quantifying the capacity of associative memories was initially formulated for fully connected recurrent architectures and discrete memory states; it was Rolls (1989) [11] who clearly defined the crucial role of the CA3 recurrent collaterals and made the relation to autoassociative memory networks explicit. An autoassociator can store both discrete memories and more complex ones. In particular, a multichart recurrent autoassociator maps a finite environment onto the activity of place-cell-like units, which is equivalent to storing as many discrete attractor states as there are locations in the environment [6].

The dentate gyrus plays a prominent role in the capacity to retrieve charts. A quantitative analysis of information storage in a model CA3 network, operating with and without the dentate gyrus, confirmed that inputs from the dentate gyrus to CA3 are essential for guiding the learning of a new chart. The forcing effect of the mossy fibers on CA3 is even more salient when assessed indirectly, through the localization accuracy afforded by representations in CA1, which DG cells influence only indirectly [1, 3]. DG activity is concentrated on a relatively small fraction of newly generated granule cells, which represent new information more efficiently than older neurons. The flow of information from the entorhinal cortex (EC) through the dentate gyrus (DG) to CA3, and then to CA1, can be summarized as follows [5]:

1. **Perforant path:** $\text{EC} \rightarrow \text{DG}$, carrying general contextual input.

2. **Mossy fibers:** $\text{DG} \rightarrow \text{CA3}$, sparse, strong inputs that impose new memory traces on CA3.

3. **Recurrent collaterals:** $\text{CA3} \rightarrow \text{CA3}$, enabling autoassociation.

4. **Schaffer collaterals:** $\text{CA3} \rightarrow \text{CA1}$, relaying the reconstructed memory to CA1 and onward to the cortex.

This circuit is shown schematically in Figure 1.

![Schematic diagram of hippocampal circuitry: the entorhinal cortex projects to the dentate gyrus (perforant path) and directly to CA3; the dentate gyrus projects to CA3 (mossy fibers); CA3 has recurrent connections and projects to CA1 (Schaffer collaterals); CA1 outputs to the subiculum](/uploads/research/complex-systems-hippocampal-circuitry.svg "Figure 1: Schematic diagram of hippocampal circuitry.")

### 3 Language and Latching Dynamics

Mind wandering has become a rich field of research, opening the door to the study of spontaneous, internally generated thought. It can be formalized as a functional process rooted in the dynamics of cortical networks [4], particularly those of the prefrontal cortex. Rather than being random or noise-like, mind wandering is thought to reflect structured sequences of internal states driven by associative memory and the retrieval of schemata, with temporally structured fragments of thought embedded in semantic memory networks. Retrieval then proceeds through spontaneous latching dynamics rather than in response to external stimuli. The underlying learning is Hebbian [4]:

$$
J_{ij} \propto \int dt \left(r_i(t) - \langle r_i \rangle \right) \left(r_j(t) - \langle r_j \rangle \right),
\tag{4}
$$

where $J_{ij}$ is the synaptic weight and $r_i(t)$, $r_j(t)$ are the activities of the two cells. Synaptic strengths are modified by correlated activity and require no supervision, instruction, or external reward; the brain can therefore learn temporal patterns incidentally and retrieve them later, during periods of free-form cognition. Equation (4) shows that the synaptic weight increases when the two activities co-vary over time, which enables associative learning. To capture temporal sequences, which encode the causal relationships required for latching, Eq. (4) can be generalized to [4]

$$
J_{ij} \propto \sum_k \int dt \int d\delta \, K(\delta) \left(r_i^k(t+\delta) - \langle r_i \rangle \right) \left(r_j^k(t) - \langle r_j \rangle \right),
\tag{5}
$$

where the kernel $K(\delta)$ has both symmetric and asymmetric components; this double structure allows the network to capture temporal structure.

A series of studies led to a concrete model: the **Potts associative network**. Each module of this network has its own local attractor states, and sparse global patterns emerge across interconnected modules. Latching appears once structured long-range connectivity and adaptation mechanisms are added. The onset of latching can be studied as a phase transition of the network, in which the system's behavior changes qualitatively with memory load and connectivity: beyond a critical point, the network shifts from static memory retrieval to ongoing dynamic recall, the key feature of latching. In the Potts network, the storage capacity scales as [4]

$$
P_c \propto \frac{C \, S^2}{a},
\tag{6}
$$

where $C$ is the number of connections per unit, $S$ the number of states per unit, and $a$ the sparsity of the activity. Increasing the complexity of the local units, $S$, and the connectivity, $C$, therefore allows the brain to store more semantic patterns.

When adaptation is added, the network exhibits latching, which can generate indefinitely long sequences [4]. In mixed networks, Potts units with higher $S$ slow down units with lower $S$, and vice versa; this is known as the speed-inversion effect, and it allows the prefrontal cortex to direct memory retrieval in posterior areas. The time scale of latching can be characterized through the decay of the overlap,

$$
q \left(t_0 + \tau \right) = \frac{1}{2} \quad \text{when } q(t_0)=1,
\tag{7}
$$

where $q(t)$ is the overlap between the network activity and the target memory pattern, and $\tau$ measures how long the network takes to move from one attractor to the next.

## Part II — High-Dimensional Random Landscapes

### 4 The Landscape Program: Introduction and Motivation

High-dimensional random landscapes are random functions that arise naturally in the study of complex systems. They are functions $\mathcal{E}(\mathbf{s})$ of many variables, $N \gg 1$, with $\mathbf{s} = (s_1, s_2, \ldots, s_N)$, and they are used extensively to model economies, neurons in biological or artificial neural networks, ecosystems, and particles or spins in materials. The configuration of the entire system is described by a vector $\mathbf{s}$ in a high-dimensional configuration space. Complex systems generally evolve through local moves in this space, updating their configuration in the direction that changes the value of a function such as an energy, fitness, loss, or cost. Because this function encodes the random interactions between the components of the system, its dynamics can be studied as a stochastic optimization problem on a high-dimensional random landscape [8]. Here the configurations are constrained to the sphere $\mathbb{S}^{N-1}(\sqrt{N})$, which sets the geometry of the landscape. A key aim of the landscape program is to understand the _geometry and topology_ of $\mathcal{E}(\mathbf{s})$, how they affect algorithmic search, and how they control the dynamics of the system [8, 9].

The landscape program can be summarized by three central questions:

1. **What is the structure of the ground state $\mathbf{s}_{\mathrm{GS}} = \arg\min \mathcal{E}(\mathbf{s})$?** Is the minimum aligned with any known structure, such as a signal direction?

2. **What does the rest of the landscape look like?** Are there many local minima? Many saddles? Is the system dominated by exponentially many metastable states (a hallmark of glassiness), or is the energy surface relatively smooth?

3. **How do the dynamics behave?** Can local algorithms find the minimum efficiently, or do they become trapped? What are the time scales needed to reach low-energy regions?

The main strategy for answering these questions is to study the _stationary points_ of the landscape: local minima, maxima, and saddles. These special configurations $\mathbf{s}$ satisfy $\nabla_\perp \mathcal{E}(\mathbf{s})=0$, where $\nabla_\perp$ is the $(N-1)$-dimensional gradient on the sphere.

### 5 Quadratic High-Dimensional Inference

#### 5.1 Noisy Matrix Inference

In denoising problems, the goal is to infer a signal that has been corrupted by _noise_. We start with spiked GOE matrices, a particular case of the spiked matrix problem. These are $N \times N$ matrices $\mathbf{M}$ of the form

$$
\mathbf{M}=\frac{r}{N} \mathbf{v}\mathbf{v}^T + \mathbf{J},
\tag{8}
$$

where $\mathbf{v} \in S_N(\sqrt{N})$ and $\mathbf{J} \in \text{GOE}(\sigma^2)$. The first term is the spike: the signal $\mathbf{v}$ is an $N$-dimensional vector on the hypersphere $S_N(\sqrt{N})=\{\mathbf{s}:\|\mathbf{s}\|^2=N\}$. The second term is the noise, represented by the matrix $\mathbf{J}$, which is independent of the signal, symmetric, and has Gaussian entries, distributed as

$$
P_{N}(\mathbf{J})\,d\mathbf{J}=\frac{1}{2^\frac{N}{2}}\left( \frac{N}{2 \pi \sigma^2}\right)^\frac{N(N+1)}{4} e^{-\frac{N}{4\sigma^2}\operatorname{Tr} \mathbf{J}^2 } \prod_{i \leq j} dJ_{ij}.
\tag{9}
$$

Matrices with the distribution (9) belong to the Gaussian Orthogonal Ensemble (GOE) with variance $\sigma^2$.

The _signal-to-noise ratio_ $r/\sigma$ measures the strength of the signal relative to the typical size of the noise fluctuations. The inference problem can be stated as follows: given one instance of the noisy matrix $\mathbf{M}$, and assuming that we know the signal-to-noise ratio $r/\sigma$ and the form of the noise distribution, can we infer the position of the unknown vector $\mathbf{v}$ on the hypersphere $S_N (\sqrt{N})$? We address this question with the _maximum likelihood_ approach. For Gaussian noise, the maximum-likelihood estimator is the ground state of the energy landscape

$$
\mathcal{E}_r(\mathbf{s}) = -\frac{1}{2}\sum_{i,j} M_{ij}\, s_i s_j, \qquad \mathbf{s} \in S_N(\sqrt{N}),
$$

and its quality is measured by its overlap with the signal, $q_N(\mathbf{s},\mathbf{v}) = \mathbf{s}\cdot\mathbf{v}/N$.

Two limiting cases are instructive. First, as $r \rightarrow 0$, the overlap $q_N (\mathbf{s}_{\mathrm{GS}}, \mathbf{v})\rightarrow 0$ for $N \rightarrow \infty$. Second, as $\sigma \rightarrow 0$, the minimum is attained exactly at $\mathbf{s}_{\mathrm{GS}}=\pm \mathbf{v}$, so the maximum-likelihood estimator is fully informative about the signal. Between these limits, the signal-to-noise ratio controls the behavior of the landscape, which can be organized around the questions of the introduction [8]:

1. **Signal recovery by maximum likelihood:** For which values of the signal-to-noise ratio can the position of $\mathbf{v}$ be recovered? In the statistical-mechanics framework, one considers the Boltzmann measure with partition function

   $$
   Z_\beta = \int_{S_N} d\mathbf{s}\, e^{-\beta \mathcal{E}_r(\mathbf{s})};
   \tag{10}
   $$

   in the limit $\beta \rightarrow \infty$ the measure concentrates on the ground-state configuration, which gives a convenient formulation of the maximum-likelihood problem.

2. **Topology and geometry:** Are there exponentially many local minima—in other words, is the energy landscape $\mathcal{E}_r$ rugged? How are the stationary points distributed in energy on the hypersphere $S_N$, and what is their overlap with $\mathbf{v}$?

3. **Dynamics:** Does the search for $\mathbf{s}_{\mathrm{GS}}$ require very long time scales? If so, the problem is hard.

#### 5.2 Random Matrix Theory

Random matrix theory describes the spectrum of the spiked GOE matrices $\mathbf{M}$ in the limit of large size, $N \rightarrow \infty$. The empirical eigenvalue distribution is [8]

$$
\upsilon_N (\lambda)=\frac{1}{N} \sum_{\alpha=1}^N \delta \left(\lambda - \lambda^\alpha\right), \quad \lambda \in \mathbb{R},
\tag{11}
$$

which for large $N$ decomposes as

$$
d\upsilon_N(\lambda)\approx \rho_N(\lambda)\, d\lambda + \frac{1}{N} \sum_i \delta\left(\lambda - \lambda_N^{iso,i} \right) d\lambda,
\tag{12}
$$

where $\rho_N(\lambda)$ is the density of the bulk and the $\lambda_N^{iso,i}$ are the isolated eigenvalues. In the limit of large $N$, the bulk density becomes deterministic,

$$
\lim_{N \rightarrow \infty} \rho_N(\lambda) = \rho_\infty (\lambda) =\lim_{N \rightarrow \infty } \mathbb{E} \left[\rho_N (\lambda)\right],
\tag{13}
$$

and so do the isolated eigenvalues,

$$
\lim_{N \rightarrow \infty} \lambda_N^{iso,i} = \lambda_\infty^{iso,i}.
\tag{14}
$$

The bulk density is supported on the interval $\left[-2\sigma,2\sigma \right]$ (the Wigner semicircle) [10]; isolated eigenvalues lie outside this interval and contribute to the distribution only at order $\frac{1}{N}$. One finds that:

1. There are no isolated eigenvalues without perturbation, i.e., for $r=0$.

2. For $r>0$, a transition occurs in the limit $N \rightarrow \infty$ at the critical value $r_c(\sigma)=\sigma$.

3. For $r>r_c$, the matrices have a single isolated eigenvalue.

For large but finite $N$, the transition at $r=r_c(\sigma)$ becomes a crossover, and three regimes can be distinguished for $r>0$:

$$
(r_c - r) \gg N^{-\frac{1}{3}} \quad \text{subcritical},
\tag{15}
$$

$$
|r - r_c| \sim N^{-\frac{1}{3}} \quad \text{critical},
\tag{16}
$$

$$
(r - r_c) \gg N^{-\frac{1}{3}} \quad \text{supercritical}.
\tag{17}
$$

The transition at $r=r_c$ concerns both the typical value of the largest eigenvalue and the scaling and nature of its fluctuations at large but finite $N$; it is known as the _BBP transition_. In the quadratic landscape, the optimization problem reduces to a spectral problem: the ground state $\mathbf{s}_{\mathrm{GS}}$ coincides with the leading eigenvector of the matrix $\mathbf{M} = \frac{r}{N}\mathbf{v}\mathbf{v}^T + \mathbf{J}$. Recovering the signal therefore depends on whether the top eigenvalue becomes an outlier, detaching from the bulk of the Wigner semicircle. This happens when $r > \sigma$, and the corresponding eigenvector is then correlated with the signal $\mathbf{v}$, enabling recovery [8].

#### 5.3 Ground State, Metastability, and Dynamics

The unknown signal $\mathbf{v}$ can be recovered with the maximum-likelihood estimator only if

$$
q_{\infty} \left(\mathbf{s}_{\mathrm{GS}},\mathbf{v}\right):=\lim_{N \rightarrow \infty} q_N \left(\mathbf{s}_{\mathrm{GS}},\mathbf{v}\right) > 0.
\tag{18}
$$

For $N \rightarrow \infty$, a sharp transition occurs at $r = r_c (\sigma) = \sigma$. The transition is continuous: at the critical signal-to-noise ratio $(r/\sigma)_c=1$, called the _recovery threshold_, the order parameter $q_\infty(\mathbf{s}_{\mathrm{GS}},\mathbf{v})$ grows continuously from zero to positive values, which makes it a second-order transition. The same threshold also marks the _detection threshold_: below it, spiked and pure GOE matrices cannot be distinguished.

The total number of stationary points does not grow exponentially with $N$—on the sphere, a quadratic function has exactly $2N$ of them, namely $\pm$ each eigenvector of $\mathbf{M}$—so the landscape is not rugged. The random variable $X_N (\epsilon)$, which counts the stationary points at energy density $\epsilon$, is self-averaging as $N \rightarrow \infty$. Most stationary points are saddles of _extensive index_ $\kappa=O(N)$, corresponding to eigenvalues in the bulk of the density; a few are saddles of _intensive index_ $\kappa =O(1)$, corresponding to eigenvalues at its edge. Above the BBP transition, only the eigenvector of the largest eigenvalue acquires an overlap with the signal; for all the others, $q_N (\mathbf{s}_\alpha, \mathbf{v}) \rightarrow 0$ as $N \rightarrow \infty$, which means that all the saddles lie at the equator [8, 10].

Because the number of stationary points is only polynomial in $N$ and there are no trapping metastable states, reaching the ground state does not require exponentially long time scales: the quadratic energy landscape is _not hard_. The dynamics are described by the Langevin equation [10]

$$
\frac{d s_i(t)}{dt} = \sum_{j=1}^N M_{ij} s_j(t) - \lambda(t) s_i(t) + \sqrt{\frac{2}{\beta}}\,\eta_i(t),
\tag{19}
$$

with $\mathbf{s}(t=0)=\mathbf{s}_0$, where $\lambda(t)$ enforces the spherical constraint and $\eta_i(t)$ is a white noise; the search for the ground state corresponds to the limit $\beta \rightarrow \infty$. The crossover time scale is set by the gap $g_N$ between the two largest eigenvalues of $\mathbf{M}$, whose statistics differ in the three regimes:

$$
\tau_{cross} \sim \frac{1}{g_N} \sim
\begin{cases}
O(N^\frac{2}{3}) & \text{subcritical regime,} \\
\textit{unknown} & \text{critical regime,} \\
O(N^0) & \text{supercritical regime.}
\end{cases}
\tag{20}
$$

In the supercritical regime the gap is of order one. Starting from a random configuration, whose overlap with $\mathbf{v}$ is only of order $N^{-1/2}$, the time needed to reach the ground state therefore grows only logarithmically, as $O(\log N)$.

### 6 Higher-Order Random Landscapes

#### 6.1 Noisy Tensor Inference

For $p \geq 3$, the observed object is a rank-one symmetric tensor corrupted by noise:

$$
\mathbf{M} = \frac{r}{N^{p-1}} \mathbf{v}^{\otimes p} + \mathbf{J}, \quad p \in \mathbb{N}, \; p \geq 3,
\tag{21}
$$

with entries

$$
M_{i_1 \dots i_p} = \frac{r}{N^{p-1}} v_{i_1} \cdots v_{i_p} + J_{i_1 \dots i_p},
\tag{22}
$$

and the corresponding energy function

$$
\mathcal{E}_r(\mathbf{s}) = - \frac{1}{p !}\sum_{i_1,\dots,i_p} M_{i_1 \dots i_p} s_{i_1} \cdots s_{i_p}.
$$

To impose the spherical constraint, we introduce a Lagrange multiplier $\lambda$ and define

$$
\mathcal{E}_{r,p}(\mathbf{s};\lambda) = -\frac{1}{p!}\sum_{i_1,i_2,\dots,i_p} M_{i_1 i_2 \dots i_p} s_{i_1} s_{i_2} \cdots s_{i_p}+\frac{\lambda}{2}\left(\sum_i s_i^2-N\right),\quad \mathbf{s} \in \mathbb{R}^N.
\tag{23}
$$

At a stationary point $\mathbf{s}^\ast$ on the sphere, the Lagrange multiplier is fixed by the constraint:

$$
\lambda^\ast = -\frac{\nabla \mathcal{E}_{r}(\mathbf{s}^\ast) \cdot \mathbf{s}^\ast}{N} = -p \frac{\mathcal{E}_{r}(\mathbf{s}^\ast)}{N}=-p\,\epsilon_N(\mathbf{s}^\ast),
\tag{24}
$$

so $\lambda^\ast$ is proportional to the energy density of the configuration $\mathbf{s}^\ast$. The number of stationary points at a given energy density is

$$
X_N(\epsilon)=\#\left\{\text{stationary points } \mathbf{s}^\ast \text{ such that } \epsilon_N(\mathbf{s}^\ast)=\epsilon\right\} \simeq \max_{q \in [0,1]} X_N(\epsilon,q),
\tag{25}
$$

where $X_N(\epsilon,q)$ counts those with overlap $q$ with the signal, and the last relation holds to leading exponential order. The implications for the quadratic and higher-order cases are summarized in Table 1. For $p > 2$, the energy is a _nonlinear_, highly _non-convex_ function, generalizing the spherical $p$-spin model. The most important result is that for non-quadratic landscapes, $p > 2$, the number of stationary points is, in general, not self-averaging. The self-averaging quantity is its logarithm, whose asymptotic value [8]

$$
\Sigma_\infty (\epsilon, q) = \lim_{N \rightarrow \infty} \frac{\log X_N (\epsilon,q)}{N} = \lim_{N \rightarrow \infty} \mathbb{E} \left[\frac{\log X_N (\epsilon, q)}{N} \right]
\tag{26}
$$

is called the _complexity of the energy landscape_; it plays the role of an entropy for stationary points and controls the scaling of their typical number.

<table>
<thead>
<tr>
<th>

**Quadratic case ($p=2$)**

</th>
<th>

**Higher-order case ($p>2$)**

</th>
</tr>
</thead>
<tbody>
<tr>
<td>

- Almost all stationary points are saddles at the equator ($q=0$).
- $X_N(\epsilon)$ is $\mathcal{O}(N)$ for large $N$. The scaled variable $X_N(\epsilon)/N$ has a well-defined limiting distribution as $N \to \infty$.
- $X_N(\epsilon)/N$ is self-averaging; its distribution concentrates on a single value in the thermodynamic limit.

</td>
<td>

- At energies above the ground state, most stationary points lie at the equator ($q=0$), and exponentially many of them are local minima.
- $X_N(\epsilon)$ is $\mathcal{O}(e^N)$ for large $N$, meaning $X_N(\epsilon) = e^{N\,\Sigma(\epsilon) + o(N)}$, where $\Sigma(\epsilon)$ is a random variable with a well-defined limit as $N \to \infty$.
- In general, $X_N(\epsilon)$ is _not_ self-averaging for $p>2$.

</td>
</tr>
</tbody>
</table>

_Table 1: Comparison of key properties of quadratic ($p=2$) and higher-order ($p>2$) random landscapes._

The average number of stationary points defines the _annealed complexity_,

$$
\Sigma_A (\epsilon, q) = \lim_{N \rightarrow \infty} \frac{\log \mathbb{E} \left[X_N(\epsilon,q)\right]}{N},
\tag{27}
$$

which is often used as an approximation to the _quenched complexity_ (26). By Jensen's inequality (the logarithm is concave), the annealed complexity is an upper bound on the quenched one:

$$
\Sigma_A(\epsilon,q) \geq \Sigma_\infty (\epsilon,q).
\tag{28}
$$

When the inequality is strict, $\mathbb{E}\left[X_N\right] \gg X_N^{typ}$: the average is dominated by _rare realizations_ of the disorder with an atypically large number of stationary points.

#### 6.2 Kac–Rice and Replica Methods

The average number of solutions of equations with random coefficients can be computed with the _Kac–Rice formula_. Consider the equation $\nabla_\perp \mathcal{E}_{r,p}(\mathbf{s})=0$ together with the two constraints $\epsilon_N(\mathbf{s})=\epsilon$ and $q_N(\mathbf{s},\mathbf{v})=q$. The Kac–Rice formula for the mean number of such stationary points reads [8]

$$
\begin{aligned}
\mathbb{E}[X_N(\epsilon, q)] = \int_{\mathbb{S}_N(\sqrt{N})} d\mathbf{s} \, \delta(\mathbf{s} \cdot \mathbf{v} - Nq) \,
&\mathbb{E} \left[ \left| \det \nabla^2_{\perp} \mathcal{E}(\mathbf{s}) \right| \,\middle|\, \nabla_{\perp} \mathcal{E}(\mathbf{s}) = 0,\ \mathcal{E}(\mathbf{s}) = N\epsilon \right] \\
&\times p_{\mathbf{s}}(\mathbf{0}, N\epsilon),
\end{aligned}
\tag{29}
$$

where $p_{\mathbf{s}}(\mathbf{0}, N\epsilon)$ is the joint probability density of the $(N-1)$-dimensional gradient $\nabla_{\perp} \mathcal{E}(\mathbf{s})$ and of the energy $\mathcal{E}(\mathbf{s})$, evaluated at $(\mathbf{0}, N\epsilon)$, and the conditional expectation is that of the absolute value of the determinant of the Hessian at $\mathbf{s}$.

For Gaussian, isotropic landscapes in high dimension, random matrix theory makes it possible to compute the leading order in $N$ of the Kac–Rice formula (29), which gives the annealed complexity. To characterize the typical properties of the landscape, the Kac–Rice formula must be combined with the replica trick [8]:

$$
\mathbb{E}[\log X_N] = \lim_{n \to 0} \frac{\mathbb{E}[X_N^n] - 1}{n}
\quad \Rightarrow \quad
\Sigma_{\infty} = \lim_{N \to \infty} \lim_{n \to 0} \frac{\mathbb{E}[X_N^n] - 1}{N n}.
\tag{30}
$$

The Kac–Rice formalism does not even require an energy function: it counts the solutions of random equations, so it also applies to systems whose dynamics do not derive from an energy landscape, such as those arising in biology and ecology. It computes the complexity of high-dimensional landscapes in three steps [8]:

1. **Counting critical points:** For a random function $\mathcal{E}(\mathbf{s})$ on the high-dimensional manifold $\mathbb{S}^{N-1}(\sqrt{N})$, one computes the expected number $\mathbb{E}[X_N(\epsilon, \kappa)]$ of critical points with energy density $\epsilon$ and index $\kappa$ (the number of negative eigenvalues of the Hessian).

2. **Constrained integration:** This expectation is written as an integral over configurations $\mathbf{s}$ and Hessians $H$ satisfying $\nabla_\perp \mathcal{E}(\mathbf{s}) = 0$ and $\mathcal{E}(\mathbf{s}) = N\epsilon$. Conditioned on the energy, the joint distribution of the gradient and the Hessian is Gaussian and analytically tractable in many cases.

3. **Extracting the complexity:** The complexity is then obtained from the normalized logarithm,

   $$
   \Sigma(\epsilon, \kappa) = \lim_{N \to \infty} \frac{1}{N} \log \mathbb{E}[X_N(\epsilon, \kappa)],
   \tag{31}
   $$

   which measures the exponential growth rate of the number of stationary points at a given energy density and index.

To go beyond the annealed approximation, which generally overestimates the number of critical points, one must compute the quenched complexity, defined above as the average logarithm of the number of stationary points normalized by $N$. Because the average of a logarithm is hard to compute directly, one uses the _replica trick_: $\mathbb{E}[X_N^n]$ is computed for integer $n$ and continued to $n \to 0$. _Multiple replicas_ of the system are introduced, and their correlations encode the geometry of the landscape.

The simplest ansatz assumes _replica symmetry_, i.e., that all replicas are equally correlated; this yields an expression for $\Sigma(\epsilon)$ under the assumption of a homogeneous landscape. In rugged landscapes, however, the replica-symmetric solution becomes unstable below a certain energy, and the analysis must be extended to _replica symmetry breaking (RSB)_ [9], in which, at one step of breaking, the replicas cluster into groups. The RSB solution captures the organization of metastable basins and correctly describes the distribution of critical points.

The complexity curve $\Sigma(\epsilon)$ summarizes the landscape. Its maximum gives the energy density at which stationary points are most abundant. The lowest energy at which $\Sigma(\epsilon)$ vanishes is the ground-state energy: below it, stationary points are exponentially rare. In between lies the _threshold energy_ $\epsilon_{th}$: stationary points above $\epsilon_{th}$ are typically saddles, while those below it are typically local minima. Gradient-based dynamics started from a random configuration get stuck near $\epsilon_{th}$, which explains the observed _glassy dynamics_ and why optimizing such landscapes is hard [10].

#### 6.3 Ground State, Metastability, and Dynamics

As in the quadratic case, maximum-likelihood recovery is possible when $q_{\infty}(\mathbf{s}_{\mathrm{GS}}, \mathbf{v}):= \lim_{N \to \infty} q_N(\mathbf{s}_{\mathrm{GS}}, \mathbf{v}) > 0$. For higher-order landscapes, however, the recovery transition—the ferromagnetic transition at $\beta \rightarrow \infty$—is discontinuous. Moreover, at energy densities above that of the ground state, most stationary points lie at the equator, and there are exponentially many local minima. In this setting, the isolated eigenvalue plays no role in counting the local minima at the equator. For $r = O(1)$ the landscape remains rugged at every value of $r$: it becomes topologically trivial only for $r/\sigma \gg 1$, far above the recovery threshold $(r/\sigma)_{1st}$, where the subscript indicates that this transition is first order.

Optimizing this landscape is therefore expected to be hard, because the energy landscape of the tensor denoising problem is _rugged_ for $r = O(N^0)$. Its geometry is dominated by exponentially many local minima near the threshold energy, separated by high-index saddles. These minima act as attractors for gradient-based dynamics, which leads to metastability. The ground state lies well below the threshold energy, and it is dynamically inaccessible unless rare fluctuations (thermal activation, or non-local moves) occur [9, 10].

## References

1. A. Treves and E. T. Rolls, “Computational analysis of the role of the hippocampus in memory,” _Hippocampus_ **4**(3), 374–391 (1994). doi: [10.1002/hipo.450040319](https://doi.org/10.1002/hipo.450040319). PMID: 7842058.
2. A. Montagnini and A. Treves, “The evolution of mammalian cortex, from lamination to arealization,” _Brain Research Bulletin_ **60**(4), 387–393 (2003). doi: [10.1016/s0361-9230(03)00057-1](<https://doi.org/10.1016/s0361-9230(03)00057-1>). PMID: 12781326.
3. A. Treves, “Spatial cognition, memory capacity, and the evolution of mammalian hippocampal networks,” in _Cognitive Biology: Evolutionary and Developmental Perspectives on Mind, Brain, and Behavior_, L. Tommasi _et al._ (eds.), pp. 41–60 (MIT Press, 2009). doi: [10.7551/mitpress/9780262012935.003.0043](https://doi.org/10.7551/mitpress/9780262012935.003.0043).
4. A. Treves, “Frontal latching networks: A possible neural basis for infinite recursion,” _Cognitive Neuropsychology_ **22**(3–4), 276–291 (2005). doi: [10.1080/02643290442000329](https://doi.org/10.1080/02643290442000329).
5. A. Treves, E. Cerasti, and G. Papp, “The dentate gyrus and the formation of new spatial representations in CA3,” 6th FENS Forum, abstract 225.25 (2008).
6. A. Treves and E. T. Rolls, “What determines the capacity of autoassociative memories in the brain?” _Network: Computation in Neural Systems_ **2**(4), 371–397 (1991). doi: [10.1088/0954-898X_2_4_004](https://doi.org/10.1088/0954-898X_2_4_004).
7. A. Treves and E. T. Rolls, “Computational constraints suggest the need for two distinct input systems to the hippocampal CA3 network,” _Hippocampus_ **2**(2), 189–199 (1992). doi: [10.1002/hipo.450020209](https://doi.org/10.1002/hipo.450020209).
8. V. Ros, “High-dimensional random landscapes: From typical to large deviations,” arXiv:[2502.14084](https://arxiv.org/abs/2502.14084) (2025).
9. V. Ros and Y. V. Fyodorov, “The high-dimensional landscape paradigm: Spin-glasses, and beyond,” in _Spin Glass Theory and Far Beyond: Replica Symmetry Breaking after 40 Years_, pp. 95–114 (World Scientific, 2023). doi: [10.1142/9789811273926_0006](https://doi.org/10.1142/9789811273926_0006).
10. V. Ros, G. Ben Arous, G. Biroli, and C. Cammarota, “Complex energy landscapes in spiked-tensor and simple glassy models: Ruggedness, arrangements of local minima, and phase transitions,” _Physical Review X_ **9**(1), 011003 (2019). doi: [10.1103/PhysRevX.9.011003](https://doi.org/10.1103/PhysRevX.9.011003).
11. E. T. Rolls, “Functions of neuronal networks in the hippocampus and neocortex in memory,” in _Neural Models of Plasticity_, J. H. Byrne and W. O. Berry (eds.), pp. 240–265 (Academic Press, 1989). doi: [10.1016/B978-0-12-148955-7.50017-5](https://doi.org/10.1016/B978-0-12-148955-7.50017-5).
