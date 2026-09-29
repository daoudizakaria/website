---
slug: ising-model
title: "The Ising Model in One and Two Dimensions: Exact Results and Monte Carlo Simulations"
date: 2026-09-27
summary: >-
  Self-contained notes on the Ising model, from the exact solution of the
  chain to Onsager's solution of the square lattice, paired with a tested
  Python package for Metropolis, heat-bath and Wolff simulations. Every
  simulated result is checked against exact solutions, and finite-size
  scaling recovers the 2D critical exponents.
category: physics
repo: "https://github.com/daoudizakaria/Ising-Model"
paper: "/uploads/projects/ising-model-notes.pdf"
featured: true
tags:
  - statistical-physics
  - phase-transitions
  - monte-carlo
  - critical-phenomena
  - python
year: "2025–2026"
type: notes
rank: 4
image: "/uploads/projects/thumbs/ising-model.webp"
glance:
  problem: "Understand the phase transition of the Ising model in one and two dimensions, and simulate it reliably."
  approach: "Exact solutions (transfer matrix, Onsager, Kaufman) alongside Metropolis, heat-bath and Wolff Monte Carlo, with jackknife errors and finite-size scaling."
  result: "Every simulated result agrees with an exact solution. Finite-size scaling gives β/ν = 0.125 and γ/ν = 1.770 (exact: 0.125 and 1.75), and Wolff is about 316 times more efficient than Metropolis at the critical point."
  tools: "Python, NumPy, SciPy, Numba; 28 unit tests"
---

## About this project

The Ising model is the simplest system in which interacting particles collectively undergo a phase transition, and the standard test bench for Monte Carlo methods. This project pairs a Python package that simulates the model in one and two dimensions with a complete set of notes, which can be read online section by section. The notes explain the physics, from the exact solution of the chain to Onsager's solution of the square lattice, then the simulation methods and their statistical analysis. Every simulated result is checked against an exact solution: the transfer matrix for chains, exact enumeration and Kaufman's formula for finite lattices, and Onsager's and Yang's results for the infinite lattice. The notes are written for undergraduate students who have followed a first course in statistical physics. The code is [on GitHub](https://github.com/daoudizakaria/Ising-Model), and the notes can also be [downloaded as a PDF](/uploads/projects/ising-model-notes.pdf).

## Abstract

The Ising model is the simplest model of a system in which many interacting particles collectively undergo a phase transition. These notes give a self-contained introduction to the model in one and two dimensions. After a reminder of the statistical mechanics needed, we solve the one-dimensional chain exactly with the transfer matrix and show that it has no phase transition. We then introduce mean-field theory, and turn to the two-dimensional square lattice: the Peierls argument, Kramers–Wannier duality, Onsager's exact solution, critical exponents and universality. The second half of the notes is devoted to Monte Carlo simulations: importance sampling, the Metropolis, heat-bath and Wolff algorithms, the statistical analysis of the data, and finite-size scaling. Every numerical result is produced by the accompanying Python code, and checked against the exact solutions. The notes are aimed at undergraduate students who have followed a first course in statistical physics. Exercises with answers are given at the end.
