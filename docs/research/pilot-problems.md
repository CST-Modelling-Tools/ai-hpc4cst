---
id: pilot-problems
title: Pilot Problems
---

## Pilot Problems in AI-HPC4CST

To demonstrate and validate the proposed methodologies, AI-HPC4CST is structured around a set of representative pilot problems in solar tower system design.

These pilot problems serve to:

- Test AI–HPC integration strategies  
- Benchmark optimisation performance  
- Validate surrogate modelling approaches  
- Demonstrate reproducibility and scalability  

They are designed to progressively increase in complexity.

---

## 1. Heliostat Field Layout Optimisation

### Objective
Optimise heliostat positioning and aiming strategies to maximise annual optical efficiency under realistic constraints.

### Key Challenges

- High-dimensional design variables (positions, aiming points, grouping strategies)
- Nonlinear shading and blocking interactions
- Large-scale ray-tracing requirements

### Research Questions

- Can AI surrogate models reduce the number of required ray-tracing evaluations?
- How does multi-objective optimisation improve trade-offs between efficiency and cost?
- What is the scalability of layout optimisation under HPC execution?

---

## 2. Receiver Design Optimisation

### Objective
Optimise receiver geometry and operating conditions to improve thermal performance and durability.

### Key Challenges

- Coupled optical and thermal behaviour
- Flux non-uniformity constraints
- Material and operational limits

### Research Questions

- Can AI models predict flux distribution and thermal stress efficiently?
- How can HPC accelerate coupled optical–thermal simulations?
- What optimisation strategies best manage competing objectives (efficiency, reliability, cost)?

---

## 3. Integrated System Optimisation

### Objective
Move from component-level optimisation toward integrated system-level optimisation.

### Key Challenges

- Interaction between heliostat field and receiver
- System-level efficiency metrics
- Multi-scale modelling complexity

### Research Questions

- How can surrogate models coordinate optimisation across subsystems?
- What is the computational impact of full-system optimisation?
- How does integrated optimisation compare to sequential design approaches?

---

## 4. Multi-Objective Trade-Off Studies

Across all pilot problems, multi-objective optimisation plays a central role.

Typical competing objectives include:

- Optical efficiency  
- Thermal efficiency  
- Capital cost proxies  
- Operational constraints  
- Robustness under varying conditions  

AI-HPC4CST investigates:

- Pareto front construction at scale  
- Decision-support tools for stakeholders  
- Visualisation of high-dimensional trade-offs  

---

## Progressive Complexity Strategy

The pilot problems are structured progressively:

1. Component-level optimisation  
2. Coupled subsystem optimisation  
3. Full integrated system optimisation  

This staged approach allows:

- Method validation at smaller scales  
- Incremental HPC scaling  
- Controlled benchmarking of AI performance  

---

## Benchmarking and Reproducibility

Each pilot problem will include:

- Defined input datasets  
- Clearly specified objectives and constraints  
- Documented computational workflows  
- Reproducible optimisation pipelines  

The aim is to create reference optimisation cases that can:

- Be reused by the CST community  
- Serve as methodological benchmarks  
- Support transparent comparison of optimisation strategies  

---

## Expected Outcomes

Through these pilot problems, AI-HPC4CST aims to demonstrate:

- Significant reduction in optimisation time  
- Improved design quality  
- Scalable AI–HPC workflows  
- Open, reproducible optimisation frameworks  

The pilot problems transform theoretical methodology into validated, practical optimisation advances for advanced solar tower systems.