---
id: ai-methods
title: AI Methods
---

## Role of Artificial Intelligence in AI-HPC4CST

Artificial Intelligence (AI) is a central enabler of AI-HPC4CST.  
Its role is not to replace physics-based simulation, but to **augment, accelerate and structure** the optimisation process of solar tower systems.

The project investigates how machine learning can:

- Approximate expensive simulations
- Guide optimisation strategies
- Reduce computational cost
- Enable exploration of high-dimensional design spaces
- Provide insight into system sensitivities

---

## Surrogate Modelling

### Why Surrogates?

High-fidelity CST simulations (optical ray tracing, thermal models, system performance evaluation) are computationally expensive.  
Exploring large design spaces using brute-force simulation alone is often infeasible.

AI-HPC4CST develops **surrogate models** that learn from simulation data and approximate:

- Optical efficiency maps
- Receiver performance behaviour
- System-level performance indicators
- Multi-parameter design responses

---

### Surrogate Model Types

The project explores and evaluates different model families, including:

- Neural networks
- Gaussian processes
- Physics-informed neural networks
- Ensemble learning methods

Key criteria include:

- Accuracy
- Generalisation capability
- Robustness
- Interpretability
- Computational efficiency

---

## Physics-Informed Learning

A critical aspect of the project is ensuring that AI models:

- Respect physical constraints
- Remain consistent with conservation laws
- Avoid non-physical extrapolations

This includes:

- Hybrid simulation–learning loops
- Constraint-aware training
- Embedding domain knowledge into model architectures
- Structured feature engineering based on CST physics

The objective is to move beyond purely data-driven approaches toward **physics-consistent AI frameworks**.

---

## Uncertainty Quantification

For engineering decision-making, predictive accuracy alone is insufficient.

AI-HPC4CST incorporates:

- Uncertainty estimation in surrogate predictions
- Sensitivity analysis
- Confidence-aware optimisation strategies

Understanding uncertainty enables:

- Risk-informed design decisions
- Adaptive sampling strategies
- Reliable optimisation under incomplete information

---

## AI in the Optimisation Loop

Surrogate models are embedded into multi-objective optimisation workflows:

1. Generate simulation data
2. Train AI surrogate models
3. Use surrogates to explore design space efficiently
4. Validate promising solutions with high-fidelity simulations
5. Iteratively refine models and solutions

This hybrid strategy aims to balance:

- Accuracy
- Computational cost
- Exploration efficiency

---

## Expected Advances

The AI research component aims to deliver:

- Robust CST-specific surrogate modelling strategies
- Hybrid AI–simulation optimisation frameworks
- Scalable workflows for high-dimensional energy system design
- Reproducible AI pipelines integrated with HPC environments

---

AI in AI-HPC4CST is not an isolated component.  
It is tightly integrated with simulation, optimisation, and HPC acceleration to enable transformative advances in solar tower system design.