---
slug: literature-review-credit-market-statistical-physics
title: Literature Review on Credit Market and Statistical Physics
date: 2026-07-14
summary: >-
  A literature review on the application of statistical physics to credit
  market analysis, with a special emphasis on structural credit risk models.
  It examines two key studies and their interdisciplinary methodologies,
  arguing that statistical physics provides a structural framework for
  financial modeling and analysis.
tags:
  - statistical-physics
  - econophysics
  - credit-risk
resume: "/uploads/research/literature-review-credit-market-statistical-physics.pdf"
---

## Abstract

This literature review focuses on the application of statistical physics to
credit market analysis, with a special emphasis on structural credit risk
models. It examines two key studies and their interdisciplinary
methodologies, arguing that statistical physics provides a structural
framework for financial modeling and analysis.

## 1 Introduction

The application of statistical physics to finance has become an established
approach in financial analysis [2]. Using the tools of
equilibrium statistical mechanics, we can study the empirical distribution of
income and wealth in a closed system. Although this concept has been
criticized owing to the impossibility of treating a financial system as
closed, Viaggiu et al. [1] constructed a formalism in which credit
is introduced as a new variable in the monetary base, allowing for a more
realistic representation of the credit market. In [3, 4], the framework of
structural credit risk is developed, after which the authors apply the
analytical model to a homogeneous portfolio.[^1]

The goal of this literature review is to introduce physicists to the
application of statistical physics in economics, particularly structural
credit risk modeling. It seeks to highlight both the strengths of and the
ongoing challenges for this class of models.

## 2 Statistical Physics for Financial Modeling

This section follows [6].

### 2.1 Microstates and the Boltzmann Distribution

Consider a system that can exist in a large number of microstates, each
characterized by an energy $\epsilon_i$. In thermal equilibrium, and setting
the Boltzmann constant to unity, the probability that the system occupies a
state with energy $\epsilon$ is given by the Boltzmann distribution:

$$
P(\epsilon)=\frac{1}{Z}\,e^{-\frac{\epsilon}{T}},
$$

where $T$ is the temperature and $Z$ is the partition function, defined as

$$
Z=\sum_i e^{-\frac{\epsilon_i}{T}}.
$$

With the sum taken over all states of the system, the expectation value of
any physical variable $x$ is given by

$$
\langle x\rangle=
\frac{\sum_k x_k\,e^{-\frac{\epsilon_k}{T}}}
{\sum_k e^{-\frac{\epsilon_k}{T}}}.
$$

### 2.2 Entropy and the Maximum Entropy Principle

The entropy $S$ of the system quantifies the degree of uncertainty, that is,
the number of microstates accessible to the system:

$$
S=-\sum_i P_i\ln P_i.
$$

Applying the maximum entropy principle, one obtains the equilibrium
probability distribution by maximizing $S$ subject to the constraints of
normalization and a fixed average energy:

$$
\begin{aligned}
&\text{maximize } S=-\sum_i P_i\ln P_i,\\
&\text{subject to } \sum_i P_i=1
\quad\text{and}\quad
\sum_i E_iP_i=\langle E\rangle.
\end{aligned}
$$

### 2.3 Statistical Ensembles

In the canonical ensemble, the system is in thermal equilibrium with a heat
bath at temperature $T$. The system's average energy is

$$
\langle E\rangle=\sum_i E_iP_i.
$$

The free energy $F$ is a key thermodynamic potential, defined by

$$
F=-k_BT\ln Z.
$$

This quantity connects the microscopic properties of the system with its
macroscopic behavior and is instrumental in understanding phase transitions
and response functions.

Alternatively, in the microcanonical ensemble the system is isolated with a
fixed total energy $E$. The entropy in this context is related to the number
of accessible microstates $\Omega(E)$:

$$
S=k_B\ln\Omega(E).
$$

### 2.4 Brownian Motion

Brownian motion refers to the random movement of microscopic particles
suspended in a fluid due to incessant collisions with the much smaller,
rapidly moving molecules of the medium [6, 7]. A common way to describe this
behavior is through the Langevin equation, which for a particle of mass $m$
reads

$$
m\frac{dv}{dt}=-\gamma v+\xi(t),
$$

where $\gamma$ is the friction coefficient and $\xi(t)$ is a random force.
The mean square displacement in one dimension is given by

$$
\langle x^2(t)\rangle=2Dt,
$$

with the diffusion coefficient $D=\frac{k_BT}{\gamma}$. This result, which
connects microscopic dynamics to macroscopic diffusion, is discussed in
detail in [7]. A complementary approach involves the Fokker–Planck equation,
which governs the time evolution of the probability density $P(x,t)$ for
finding a particle at position $x$ at time $t$. For Brownian motion, the
Fokker–Planck equation is written as

$$
\frac{\partial P(x,t)}{\partial t}=D\frac{\partial^2 P(x,t)}{\partial x^2}.
$$

Given an initial condition $P(x,0)=\delta(x)$, the solution is the Gaussian

$$
P(x,t)=\frac{1}{\sqrt{4\pi Dt}}\exp\left(-\frac{x^2}{4Dt}\right),
$$

which describes how the probability distribution spreads out over time.

## 3 Application of Statistical Physics to Credit Markets

The framework provided by statistical physics has led to modeling the complex
dynamics of credit markets.[^2] This section is divided into the ensemble
approaches to the credit market [1, 2] and the structural credit risk models
discussed in [3, 4].

### 3.1 Ensemble Approaches to Credit Markets

Consider an isolated economic system with $N$ agents,[^3] in which the total
money $M$ remains constant. By integrating over the complete configuration
space defined by the microscopic variables $\{x_i, y_i\}$ (where $x_i$
denotes the cash held by the $i$-th agent and $y_i$ represents the credit or
debt associated with that agent), and assuming the conservation of total
money with $\overline{M}=m=\text{const}$, we introduce a thick shell $\Delta$
(with $\Delta\ll m$) to define the number of accessible microstates as

$$
\Gamma(m)=\int_{m<M<m+\Delta}\frac{d^Nx\,d^Ny}{k^{2N}},
$$

where $k$ is a normalization constant.

To facilitate the computation, we define the cumulative integral

$$
\Sigma(m)=\int_{M\le m}d^Nx\,d^Ny.
$$

The number of microstates within the shell $\Delta$ can then be approximated
by

$$
\Gamma(m)=\Sigma(m+\Delta)-\Sigma(m)\approx\frac{\partial\Sigma(m)}{\partial m}\,\Delta.
$$

Thus, the entropy of the system is given by

$$
S=\ln\Gamma(m)=\ln\Sigma(m),
$$

which effectively quantifies the logarithm of the number of microscopic
configurations compatible with a fixed total money $m$ for a large number of
agents.

**Model of a Credit Market**

The ensemble formalism can be used to describe a credit market, which, unlike
a simple payment system, requires agents to obey certain accounting
identities when they interact. In a credit market, when one agent extends a
loan of $\Delta m$ to another, the accounting for each agent is maintained by
the identities

$$
M_1=\left(x_1-\Delta m\right)+\left(d_1+\Delta m\right)=\text{Cte}_1,
$$

$$
M_2=\left(x_2+\Delta m\right)+\left(d_2-\Delta m\right)=\text{Cte}_2,
$$

where $x_i$ denotes the cash held by agent $i$ and $d_i$ represents the net
debt (i.e., assets minus liabilities) of agent $i$. These equations guarantee
that the overall monetary base stays constant when agents exchange credit.

Additional constraints must be enforced on the system:

$$
\sum_{i=1}^{N}x_i=M_0,
$$

$$
\sum_{i=1}^{N}(\text{assets})_i-\sum_{i=1}^{N}(\text{liabilities})_i=Q_0,
$$

where $M_0$ is the fixed monetary base and, for simplicity, one may assume
$Q_0=0$, resulting in similar distributions of credit and debt.

The credit market framework reinterprets the monetary function to focus
exclusively on the credit variable:

$$
\sum_{i=1}^{N}y_i=m,\quad\text{with }y_i\in[0,+\infty).
$$

Since the monetary base $M_0$ is fixed, variations in the total money supply
(within the canonical ensemble) arise solely from changes in credit. Thus,
the partition function is expressed as

$$
Z=\int d^Nx\,d^Ny\,\exp\left(-\frac{1}{T}\sum_{i=1}^{N}y_i\right).
$$

Assuming that integration over the cash variables yields a factor
proportional to $M_0^N$, the partition function factorizes as

$$
Z=M_0^N\,T^N.
$$

Therefore, the effective temperature of the credit market is defined as

$$
T=\frac{m}{N},
$$

which represents the average credit exposure per agent. Introducing a
generalization of the simple money function $M=\sum_{i=1}^N(x_i+y_i)$,

$$
M=\sum_{i=1}^N\sum_{j=1}^I y_{ij},
$$

where the index $i$ runs over the agents and $j$ over the different
asset[^4] classes, a full-fledged financial market can be described by

$$
F=-TNI\ln T,
\qquad
S=NI\ln T+NI,
\qquad
T=\frac{m}{NI}.
$$

Consequently, permitting a greater variety of assets and liabilities within
the system diminishes the probability of encountering substantial values of
$m_i$ and significant deviations from $m$, as $T$ is reduced for the same
$m$. Diversification enhances system stability, in line with conventional
economic theory.

### 3.2 Structural Credit Risk Modeling

This section follows [3, 4]. Structural credit risk modeling quantifies
credit risk by deriving loss distributions from the stochastic evolution of a
firm's asset value. Traditional market risk measures rely on volatility,
while credit risk modeling requires an asymmetric approach, since losses
occur only when default is triggered [16–19]. This structural framework begins with the
asset price dynamics.

Consider a firm whose asset value $S(t)$ follows a geometric Brownian motion.
We first define a single increment of a Brownian motion as

$$
\Delta V_k(t)=\sigma_k\left(\sqrt{1-c}\,\epsilon_k+\sqrt{c}\,\eta(t)\right),
$$

where $\sigma_k$ is the variance for asset $k$. For a single asset $k$, this
increment can be rewritten as

$$
(\Delta\vec{V}(t))_k=(\mathbf{A}\vec{B}(t))_k.
$$

The vector $\vec{B}(t)$ consists of all the asset components $\epsilon_k$
plus the correlation component $\eta(t)$, while the matrix $\mathbf{A}$ holds
the correlation coefficients and variances:

$$
\mathbf{B}(t)=
\begin{pmatrix}
\epsilon_{1}(t)\\
\epsilon_{2}(t)\\
\vdots\\
\epsilon_{K}(t)\\
\eta(t)
\end{pmatrix},
\quad
\mathbf{A}=
\begin{pmatrix}
\sigma_{1}\sqrt{1-c} & 0 & \cdots & 0 & \sigma_{1}\sqrt{c}\\
0 & \sigma_{2}\sqrt{1-c} & \cdots & 0 & \sigma_{2}\sqrt{c}\\
\vdots & \vdots & \ddots & \vdots & \vdots\\
0 & 0 & \cdots & \sigma_{K}\sqrt{1-c} & \sigma_{K}\sqrt{c}
\end{pmatrix}.
$$

To characterize the Brownian motion, we need the distribution of the asset
prices at a given time $T$:

$$
p(\vec{V}(t),\mathbf{A},\mathbf{B})=\int p(\mathbf{B})\,
\delta\!\left(\vec{V}(T)-\sum_{t=1}^T\mathbf{A}\vec{B}(t)\right)d[\mathbf{B}],
$$

with $p(\mathbf{B})$ the joint probability density of the random variables in
$\mathbf{B}$. Using the Fourier transform, the delta distribution becomes

$$
\delta\!\left(\vec{V}(T)-\sum_{t=1}^T\mathbf{A}\vec{B}(t)\right)=
\left(\frac{1}{2\pi}\right)^K\!\int
\exp\left(-i\vec{\omega}^\dagger\vec{V}(T)\right)
\exp\left(i\vec{\omega}^\dagger\sum_{t=1}^T\mathbf{A}\vec{B}(t)\right)
d[\vec{\omega}].
$$

Since modeling asset prices is a continuous-time stochastic process, we map
the geometric Brownian motion to the ordinary Brownian motion [8]:

$$
V_k(T)\rightarrow\hat{V}_k(T)=
\ln\left(\frac{V_k(T)}{V_{k,0}}\right)-\left(\mu_k-\frac{\sigma_k^2}{2}\right)T.
$$

To average over all possible correlation matrices and disclose the general
statistical behavior of the system, we estimate the general impact of
correlations through the average price $\langle p(\vec{V}(T))\rangle$, given
by

$$
\langle p(\vec{V}(T))\rangle=
\left(\frac{\sqrt{N}^{\,K}}{2\pi}\right)
\int\exp\left(-i\vec{\omega}^\dagger\vec{V}(T)\right)
\frac{1}{\left(1+(T/N)\,\vec{\omega}^\dagger\mathbf{S}\mathbf{S}\vec{\omega}\right)^{N/2}}
d[\vec{\omega}].
$$

Using Gaussian integrals, properties of the Gamma function, and Bessel
functions [3], this leads to

$$
\langle p(\vec{V}(T))\rangle=
\left(\sqrt{\frac{N}{2\pi T}}\right)^{K}
\frac{1}{\Gamma\!\left(\frac{N}{2}\right)}
\left(\prod_{k=1}^{K}\frac{1}{\sigma_kV_k}\right)
\times 2^{\,1-\frac{N}{2}}
\left(\sqrt{\frac{N}{T}\sum_{k=1}^{K}\frac{\hat{V}_k^2}{\sigma_k^2}}\right)^{\!\frac{N-K}{2}}
\kappa_{\frac{K-N}{2}}\!\left(\sqrt{\frac{N}{T}\sum_{k=1}^K\frac{\hat{V}_k^2}{\sigma_k^2}}\right),
$$

where

$$
\hat{V}_k(T)=\ln\left(\frac{V_k(T)}{V_{k,0}}\right)-\left(\mu_k-\frac{\sigma_k^2}{2}\right)T,
$$

and the standard deviation is

$$
\hat{\sigma}_k=\sqrt{\exp\left(2\mu+\sigma_k^2T\right)\left(\exp\left(\sigma_k^2T\right)-1\right)V_{k,0}^2}.
$$

If we define a threshold value $\Delta_k$ with $V_k(T)>\Delta_k$, the model
presented in [3] remains valid and produces correct results. But when a
default occurs, namely when the obligor's equity[^5] is exhausted, the
model must be extended: the loss distribution $L_k$ must be added to
the mathematical framework. Denoting the threshold by $F_k$, i.e. _the face
value_, the loss is defined as

$$
L_{k}=
\begin{cases}
\dfrac{F_{k}-V_{k}(T)}{F_{k}}, & \text{if }V_{k}(T)<F_{k}\quad(\text{default}),\\
0, & \text{else (no default)},
\end{cases}
$$

hence the overall loss of a portfolio is defined by weighting each loss by
its face value, written as the sum

$$
L=\sum_{k=1}^K f_kL_k,
\qquad
f_k=\frac{F_k}{\sum_{l=1}^K F_l}.
$$

Consider the following example with two credits ($K=2$) in the portfolio:

1. Credit 1: face value $F_1=50{,}000$ USD, with a loss of $0.4$;
2. Credit 2: face value $F_2=90{,}000$ USD, with a loss of $0.15$.

$$
f_1=\frac{F_1}{F_1+F_2}=\frac{50{,}000}{50{,}000+90{,}000}=0.35,
\qquad
f_2=\frac{90{,}000}{50{,}000+90{,}000}=0.64.
$$

Thus, the overall portfolio loss $L$ is

$$
L=f_1L_1+f_2L_2=(0.35)(0.4)+(0.64)(0.15)=0.236,
$$

which corresponds to a $23.6\%$ loss across the entire portfolio. Since the
loss must be weighted by each credit's size relative to the total face value,
and since we want to simulate real-world portfolios, we need to average the
loss distribution [3, 9]. Assuming random correlations and an average
correlation level of zero, the average loss distribution is given by

$$
\langle p(L)\rangle\approx
\frac{1}{\sqrt{2\pi\,\Gamma\!\left(\tfrac{N}{2}\right)}}
\int_{0}^{\infty}dz\,
z^{\tfrac{N}{2}-1}e^{-z}
\frac{1}{\sqrt{\widehat{M}_{2}(z)}}
\exp\!\left(
-\frac{\left(L-\widehat{M}_{1}(z)\right)^{2}}{2\widehat{M}_{2}(z)}
\right),
$$

with

$$
\widehat{M}_{1}(z)=\sum_{k=1}^{K}f_kM_{1,k}(z),
\qquad
\widehat{M}_{2}(z)=\sum_{k=1}^{K}f_k^{2}\left(M_{2,k}(z)-M_{1,k}(z)^{2}\right).
$$

With all the tools built in [3] and [4], we focus on the example of the
homogeneous portfolio: a portfolio in which every credit $k$ has the same
face value $F_k=F$, the same asset value distribution parameters, and
identical threshold conditions. With these assumptions, the weighting factor
for every credit becomes

$$
f_k=\frac{F_k}{\sum_{l=1}^K F_l}=\frac{1}{K},
$$

and the portfolio can be considered as an ensemble of $K$ identical copies of
a unique credit sample, so that every loss $L_k$ has the same distribution:

$$
L=\sum_{k=1}^K\frac{1}{K}L_k.
$$

The functions $\widehat{M}_1(z)$ and $\widehat{M}_2(z)$ become independent of
$k$ and can be written

$$
\widehat{M}_{1}(z)\rightarrow M_1(z),
\qquad
\widehat{M}_{2}(z)\rightarrow\frac{1}{K}\left(M_2(z)-M_1^2(z)\right).
$$

Therefore, the average loss distribution takes the form

$$
\begin{aligned}
\langle p(L)\rangle\approx{}&
\frac{1}{2\pi T\,\Gamma\!\left(\tfrac{N}{2}\right)}
\sum_{j=0}^{K}\int_{0}^{\infty}dz\;
z^{\tfrac{N}{2}-1}\exp(-z)\,
\sqrt{\frac{2\pi K^{2}}{j\left(M_{2}(z)-M_{1}(z)^{2}\right)}}\\
&\times\exp\!\left[
-\frac{\left(LK-jM_{1}(z)\right)^{2}}{2j\left(M_{2}(z)-M_{1}(z)^{2}\right)}
\right]
\left(\frac{1}{2}+\frac{1}{2}\,\mathrm{erf}\!\left[
\frac{\ln\!\left(F/V_{0}\right)-\left(\mu-\tfrac{\sigma^{2}}{2}\right)T}
{\sigma\sqrt{2T}}
\right]\right)^{K-j}.
\end{aligned}
$$

### 3.3 Application

With the analytical model developed and the homogeneous portfolio defined, we
can apply the model to a realistic setting. In [3, 4] several examples are
deployed; we focus on the second example, where $K=50$. The input parameters
$V_0$, $\mu$, $\sigma$, $F$, and $T$ are listed in the table below.

| Variable   | Description                        | Value(s)               | Unit          |
| ---------- | ---------------------------------- | ---------------------- | ------------- |
| $K$        | Number of assets                   | 50                     | —             |
| $T$        | Time of maturity                   | 1                      | year          |
| $\sigma_k$ | Volatility of the $k$-th asset     | 0.15                   | year$^{-1/2}$ |
| $\mu_k$    | Drift of the $k$-th asset          | 0.05                   | year$^{-1}$   |
| $N$        | Parameter controlling correlations | $N=K$ and $N\to\infty$ | —             |
| $V_{k,0}$  | Start price of the $k$-th asset    | 100                    | currency      |
| $F_k$      | Face value of the $k$-th asset     | 75                     | currency      |

These parameters are needed to analyze the impact of correlations on the loss
distribution of a homogeneous portfolio. Since we are free to choose the
input parameter $N$, we consider two cases:

1. the strongest impact of random correlations, $N=K$;
2. the uncorrelated limit, in which the correlation matrix becomes the
   identity matrix, $N\to\infty$.

The simulation shows heavy tails in the loss distribution of the correlated
portfolio compared to the uncorrelated case; this remains true even when the
distribution becomes narrower for large values of $K$ (see the figure
below). We conclude that if correlations are not modeled properly, the tails
of the loss distribution are strongly underestimated.

![The loss distribution of a homogeneous portfolio](/uploads/research/loss-distribution-homogeneous-portfolio.png "The loss distribution of a homogeneous portfolio with σ = 0.15, μ = 0.05, T = 1, V₀ = 100, F = 75, and K = 50. The dashed line represents the simple approximation and the solid line the improved approximation, both calculated with maximum random correlations, N = K. The dotted line represents the uncorrelated case, calculated with the approximation N = 30K.")

In this analysis, in order to simplify the model, the normalization of the
loss distribution is not exact, the maturity time[^6] $T$ is held constant,
and the drifts[^7] $\mu_k$ and standard deviations $\sigma_k$ are not tuned
to evaluate the evolution of the loss distribution.

## 4 From the Limitations of Credit Market Modeling to Complex Systems

One of the many lessons of the financial crisis of 2008–2009 was the improper
estimation of credit risk: the models in use underestimated the risks
embedded in credits. Assessing the risk of a credit portfolio cannot be done
without considering correlations between obligors, in particular the
treatment of debtors-in-possession in bankruptcy proceedings [3, 4]. Even
with real-world parameters, current credit risk modeling often relies on
assumptions of rationality in decision-making, and financial data
consistently challenges these assumptions. Recognizing the complexities of
human behavior and the limitations of current models is necessary for
financial analysis [10].

The concept of _reflexivity_ in credit markets is introduced here; it may
become a main research area in econophysics and may open new
directions in complex systems. New models should build on the following
observations [11–13]:

1. credit markets are strongly correlated with investors' beliefs and market
   outcomes;
2. sentiments, positive or negative, can influence borrowing conditions and
   reinforce the prevailing sentiment, particularly during booms and panics;
3. credit market expectations can diverge strongly from economic
   fundamentals;
4. group behavior, acting like a larger collective in the economy, can affect
   the stability of credit market dynamics.

The fourth point motivates the study of the stability of the economy. Future work may apply phase transitions and criticality to
understand transitions between stability and instability in finance, and
investigate equilibrium and out-of-equilibrium behavior in credit markets,
which requires the adaptation of techniques such as the method of critical
fluctuations [14, 15].

## 5 Conclusion

This review discussed the application of statistical physics to credit market
analysis, focusing on structural credit risk modeling. The literature
[1–4] demonstrates the strength of econophysics by providing analytical
models capable of realistic applications.

Although statistical physics provides a structural framework for financial
modeling and analysis, and despite the promising developments, significant
challenges remain. Current models are unable to capture the non-stationary
nature of real-world credit markets. This limitation motivates future work
that incorporates the dynamics and evolution of real credit markets into
econophysics [10].

Concepts such as reflexivity and group behavior [11–13], combined with
techniques from complex systems such as phase transitions and criticality,
could provide validated models for financial analysis [14, 15].

## 6 References

1. S. Viaggiu et al., "Statistical ensembles for money and debt," _Physica A_
   **504**, 123 (2018).
2. V. M. Yakovenko, "Statistical mechanics approach to the probability
   distribution of money," _Eur. Phys. J. B_ **21**, 295 (2001).
3. M. C. Münnix, _Studies of Credit and Equity Markets with Concepts of
   Theoretical Physics_ (Springer, 2011).
4. M. C. Münnix, R. Schäfer, and T. Guhr, "A random matrix approach to credit
   risk," arXiv:1102.3900 \[q-fin.RM] (2011).
5. P. Samuelson, _Economics_, 19th ed. (McGraw-Hill, New York, 2010).
6. K. Huang, _Statistical Mechanics_ (John Wiley & Sons, 1987).
7. T. Hida, _Brownian Motion_ (Springer-Verlag, 1980).
8. S. M. Ross, _Introduction to Probability Models_, 9th ed. (Academic Press,
   2007), chap. 10.3.2, pp. 631–632.
9. S. Chava, C. Stefanescu, and S. Turnbull, "Modeling the loss
   distribution," _Management Science_ **57**(7), 1267–1287 (2011).
10. A. Chakraborti, I. M. Toke, M. Patriarca, and F. Abergel, "Econophysics
    review: II. Agent-based models," _Quantitative Finance_ **11**(7),
    1013–1041 (2011).
11. F. Turcaș, F. C. Dumiter, and M. Boiță, "Econophysics techniques and
    their applications on the stock market," _Mathematics_ **10**(6), 860
    (2022).
12. R. Greenwood, S. G. Hanson, and L. J. Jin, "A model of credit market
    sentiment," Harvard Business School Working Paper No. 17-015 (2016).
13. Q. Gao, "Systemic risk analysis of multi-layer financial network system
    based on multiple interconnections between banks, firms, and assets,"
    _Entropy_ **24**(9), 1252 (2022).
14. V. Plerou, P. Gopikrishnan, and H. E. Stanley, "Two-phase behaviour of
    financial markets," _Nature_ **421**, 130 (2003).
15. T. Bury, "A statistical physics perspective on criticality in financial
    markets," _J. Stat. Mech._ **2013**, P11004 (2013).

**Further reading**

16. R. N. Mantegna and H. E. Stanley, _Introduction to Econophysics:
    Correlations and Complexity in Finance_ (Cambridge University Press,
    1999).
17. J.-P. Bouchaud and M. Potters, _Theory of Financial Risk and Derivative
    Pricing: From Statistical Physics to Risk Management_ (Cambridge
    University Press, 2000).
18. D. Sornette, _Why Stock Markets Crash: Critical Events in Complex
    Financial Systems_ (Princeton University Press, 2003).
19. J. D. Farmer and D. Foley, "The economy needs agent-based modelling,"
    _Nature_ **460**, 685 (2009).
20. H. Aoyama, Y. Fujiwara, Y. Ikeda, H. Iyetomi, and W. Souma,
    "Econophysics on real economy: The first decade of the Kyoto
    econophysics group," arXiv:1006.5587 (2010).
21. F. Trigona and A. M. Cianci, "Towards the structure and mechanisms of
    complex systems: The approach of the quantitative theory of meaning,"
    arXiv:2412.09007 (2024).
22. J.-P. Bouchaud and M. Potters, "Credit contagion and credit risk,"
    arXiv:physics/0609164 (2006).
23. M. Coppola and S. Gualdi, "Negative correlations in credit risk,"
    arXiv:2502.21199 (2025).

[^1]: A portfolio is a compilation of financial assets, including stocks, bonds, cash, and other investments, owned by an individual or institution. Portfolios are structured to balance risk and return in accordance with the investor's objectives, risk appetite, and investment horizon [5].

[^2]: A credit market is a market for borrowing and lending. Its participants, including banks, firms, governments and individuals, engage in credit transactions, wherein funds are provided immediately in exchange for future repayment with interest [5].

[^3]: In economics, an "agent" refers to any individual, firm, or entity that engages in decision-making and action-taking within the economic framework. Agents interact with one another, react to incentives, and affect market results by making decisions regarding consumption, production, investment, and other economic activities [5].

[^4]: In economics, an asset is a valuable economic resource that can yield future advantages for its owner. Assets take several forms, encompassing tangible goods such as real estate, machinery, or inventory, as well as intangible items including stocks, bonds, intellectual property, or goodwill [5].

[^5]: The obligor's equity is the remaining worth of a firm's assets after the deduction of all liabilities. In credit risk and financial modeling, it denotes the net value or the equity stake of the firm's shareholders. In the Merton model, a structural framework for credit risk, equity is perceived as a call option on the firm's assets, retaining value only if the assets surpass the debt obligations at maturity. When a firm's asset value declines beneath its liabilities, the obligor's equity becomes zero or negative, frequently signifying default or bankruptcy [5].

[^6]: Maturity time refers to the duration from the present until a financial instrument, such as a bond, loan or derivative contract, reaches its expiration date. Upon maturity, the principal or face value is to be repaid, and any outstanding contractual obligations, such as final interest payments, must be satisfied. This parameter is essential in finance since it affects present value computations, risk evaluations, and the pricing of financial products [5].

[^7]: In economic and financial models, "drift" refers to the average or expected change of a variable over time [5].
