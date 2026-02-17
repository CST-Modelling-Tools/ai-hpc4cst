---
id: objectives
title: Objectives
---

## Project Objectives

**AI-HPC4CST** (Towards disruptive innovation in advanced solar energy systems through artificial intelligence and high-performance computing) aims to advance the state of the art in large-scale optimisation of complex engineering systems through the development of novel metaheuristic optimisation strategies accelerated by high-performance computing (HPC).

While the project uses concentrating solar tower (CST) technology as a high-impact and highly complex case study, its methodological developments are designed to be generic and applicable to any system characterised by a large number of optimisable parameters.

---

## General Objective

To develop a **generic, simulation-driven optimisation framework** capable of efficiently exploring very high-dimensional design spaces through advanced metaheuristic algorithms and scalable HPC workflows.

The framework targets systems that satisfy three fundamental conditions:

1. The system configuration can be defined by a set of parameters.
2. A deterministic instantiation process can generate a physical model from a given parameter set and evaluate its performance metrics.
3. The mapping between parameters and fitness metrics can be treated as a black-box function by the optimisation algorithm.

Under this abstraction, the optimisation strategy focuses exclusively on identifying optimal regions of the multidimensional design space, without requiring internal knowledge of the underlying physical modelling process.

---

## Scientific and Technical Objectives

### 1. Develop Advanced Metaheuristic Optimisation Algorithms

Design and implement novel and hybrid metaheuristic strategies capable of:

- Efficient exploration of very high-dimensional parameter spaces  
- Handling strong coupling between variables  
- Managing multi-objective trade-offs  
- Maintaining robustness in computationally expensive optimisation environments  

The emphasis is on integral optimisation strategies rather than surrogate modelling approaches.

---

### 2. Build a Generic Black-Box Optimisation Framework

Create a modular optimisation architecture that:

- Decouples optimisation algorithms from physical simulation models  
- Allows seamless integration of different system models  
- Supports single- and multi-objective optimisation  
- Enables scalability across heterogeneous HPC infrastructures  

This framework is designed to be reusable across engineering domains beyond solar energy.

---

### 3. Leverage High-Performance Computing for Large-Scale Optimisation

Develop scalable workflows that:

- Parallelise simulation-driven optimisation  
- Exploit distributed and hybrid HPC architectures  
- Reduce time-to-solution for complex optimisation problems  
- Enable systematic exploration of large design spaces  

HPC is not used merely for acceleration, but as an enabling technology for solving optimisation problems previously considered intractable.

---

### 4. Demonstrate Methodological Impact on Solar Tower Technology

Apply the developed framework to the optimisation of the subsystem responsible for converting radiant energy into thermal energy in solar tower systems, including:

- Heliostat field configuration  
- Tower geometry  
- Receiver design  

This subsystem is selected as a representative example of a highly coupled, multi-parameter and multiphysics engineering system.

---

### 5. Establish Transferability Beyond CST

Validate that the optimisation framework can be adapted to other engineering systems characterised by:

- Parametric configurability  
- Simulation-based performance evaluation  
- High-dimensional optimisation challenges  

The project positions solar tower systems as a demonstrator of a broader class of optimisation problems.

---

## Expected Impact

AI-HPC4CST aims to:

- Enable fast optimisation of systems with hundreds or thousands of design variables  
- Advance the theoretical and practical capabilities of metaheuristic optimisation  
- Reduce barriers to large-scale engineering optimisation  
- Strengthen Spain’s leadership in AI-driven scientific computing  
- Contribute to the competitiveness of solar thermal technologies  

By combining advanced optimisation theory with high-performance computing, AI-HPC4CST contributes to the next generation of simulation-driven engineering design.