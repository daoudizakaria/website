---
slug: erlangc-calculator
title: "Erlang C Staffing Calculator"
date: 2025-05-12
summary: >-
  A Python tool for the central staffing question of a call centre, namely how
  many agents are required to meet a target service level, based on the
  Erlang C queueing model, with shrinkage and occupancy constraints, numerically
  stable log-space evaluation, and a Monte Carlo layer that quantifies how
  staffing plans respond to uncertain demand.
category: math
repo: "https://github.com/daoudizakaria/ErlangC_calculator"
paper: "/uploads/projects/erlangc-calculator-paper.pdf"
featured: false
tags:
  - queueing-theory
  - monte-carlo
  - operations-research
  - python
year: "2025"
type: tool
rank: 7
image: "/uploads/projects/thumbs/erlangc-calculator.webp"
glance:
  problem: "How many agents does a contact centre need to answer 80% of calls within 20 seconds?"
  approach: "The Erlang C queueing model evaluated in log-space, with shrinkage and occupancy constraints, plus a Monte Carlo layer for uncertain demand."
  result: "For 400 calls per half hour at 257 s handle time, the service-level target needs 64 agents on the phones; shrinkage and the occupancy cap then set the headcount to schedule."
  tools: "Python, NumPy, Matplotlib"
---

## 1 The Problem

Every contact centre faces the same planning question: *given a forecast of
incoming calls, how many agents must be scheduled so that, say, 80% of
callers are answered within 20 seconds?* Understaffing degrades service
quality; overstaffing increases labour costs. The classical answer comes from
queueing theory, in the form of the **Erlang C model**, and this project
implements it end to end as an interactive Python calculator: from raw inputs
(contact volume, handle time, shift shrinkage) to a staffing recommendation,
with plots and a Monte Carlo analysis of the sensitivity of that
recommendation to uncertain demand.

## 2 The Queueing Model

### 2.1 Offered Load

The workload is summarised by the *offered load* (traffic intensity), the
dimensionless product of the arrival rate $\lambda$ and the average handle
time. With $\mu = 1/\text{AHT}$ the service rate,

$$
A=\frac{\lambda}{\mu}.
$$

Intuitively, $A$ is the number of agents that would be busy at all times if
calls arrived perfectly smoothly.

Erlang C models the centre as an $M/M/c$ queue, which rests on five
assumptions: Poisson arrivals, exponentially distributed (memoryless) call
durations, $c$ identical agents, an infinite queue with no abandonment, and
first-come-first-served ordering. These assumptions make the model tractable
at a cost: real centres see time-varying arrival rates, call durations closer
to log-normal, and callers who hang up. These departures motivate the Monte
Carlo layer in Section 5.

### 2.2 The Erlang C Probability of Waiting

For $c$ agents serving Poisson arrivals with exponential service times (an
$M/M/c$ queue), the probability that an arriving call finds every agent busy
and must wait is the Erlang C formula:

$$
P_{\text{wait}}=
\frac{\dfrac{A^{c}}{c!}\,\dfrac{c}{c-A}}
{\displaystyle\sum_{n=0}^{c-1}\frac{A^{n}}{n!}
+\frac{A^{c}}{c!}\,\frac{c}{c-A}},
\qquad A<c.
$$

### 2.3 Service Level and Abandonment

Given $P_{\text{wait}}$, the probability that a call is answered within a
target time $t$ follows from the exponential distribution of waiting times:

$$
\text{SL}(c,t)=1-P_{\text{wait}}\,
e^{-(c-A)\,\mu\,t}.
$$

The same structure yields a first-order estimate of abandonment: replacing
the target answer time with the callers' average patience $\tau$ gives the
fraction of calls still waiting when patience runs out,

$$
P_{\text{abandon}}\approx P_{\text{wait}}\,
e^{-(c-A)\,\mu\,\tau}.
$$

### 2.4 Occupancy and Waiting Time

Two further indicators complete the planner's dashboard: the *occupancy*
$\rho=A/c$, the fraction of time agents are busy (desirable when high, but
unsustainable when too high), and the mean wait of a queued call,

$$
W_q=\frac{P_{\text{wait}}}{c\mu-\lambda},
\qquad c\mu>\lambda,
$$

which links the same quantities directly to the customer's experience.

## 3 From Model to Staffing Decision

The theoretical model only speaks about agents *actually on the phones*. The
calculator adds the operational layer that planners live with:

- **Shrinkage.** Breaks, meetings, and training make a fraction $s$ of paid
  time unavailable. The tool either computes $s$ from the shift breakdown or
  accepts it directly, and converts scheduled staff $c$ into effective
  agents $c_{\text{eff}}=\lfloor c\,(1-s)\rfloor$.
- **Occupancy cap.** Sustained utilisation above ~85–90% burns agents out,
  so solutions with $A/c_{\text{eff}}$ above a configurable maximum are
  rejected.
- **The search.** The calculator then finds the *smallest* scheduled
  headcount whose effective agents meet the required service level while
  respecting the occupancy cap, and reports staff, occupancy, and the
  estimated abandon rate together, alongside a plot of service level versus
  agents staffed against the target line.

## 4 Numerical Stability

Evaluating the Erlang C formula naively overflows quickly, since $A^{c}$ and
$c!$ both exceed the floating-point range for realistic call volumes. The implementation works
entirely in log-space: factorials via the log-gamma function,
$\log\Gamma(n+1)$, and sums via the numerically stable log-sum-exp identity

$$
\log\sum_i e^{x_i}=m+\log\sum_i e^{x_i-m},
\qquad m=\max_i x_i,
$$

so the calculator remains accurate for large contact centres where a direct
translation of the textbook formula would fail.

## 5 Monte Carlo Uncertainty Analysis

A point forecast of demand is always wrong in practice, so the second half
of the tool asks a sharper question: *how does the staffing plan behave when
the inputs fluctuate?* Call volume and handle time are drawn from normal
distributions around their forecast means, and the full pipeline (offered
load, Erlang C, service level) is re-evaluated across thousands of
simulated scenarios. The output is a distribution of achieved service
levels for the recommended headcount, visualised as a histogram, rather
than a single number. A plan that looks fine deterministically can reveal a
heavy tail of poor-service scenarios under modest demand variability, which
is information that is needed before a schedule is fixed.

The two approaches also delimit each other's usefulness: for small centres
(fewer than about 20 agents) the deterministic model and the simulation
give nearly identical recommendations, while for large centres (beyond
roughly 60 agents) the Monte Carlo approach becomes preferable for sizing
the workforce, as variability compounds with scale.

## 6 Implementation

The tool is written in Python, with NumPy for the vectorised simulations and
Matplotlib for the plots. The calculator runs as an interactive command-line session: it
prompts for the shift structure (or a known shrinkage percentage), the
demand forecast (e.g. 400 contacts per 30-minute period, 257 s average
handle time), the service target (e.g. 80% in 20 s), the occupancy cap, and
caller patience, then prints the deterministic staffing recommendation and
runs the Monte Carlo study around it.
