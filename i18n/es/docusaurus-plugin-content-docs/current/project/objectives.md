---
id: objectives
title: Objetivos
---

## Objetivos del Proyecto

**AI-HPC4CST** (*Hacia la innovación disruptiva en sistemas avanzados de energía solar mediante inteligencia artificial y computación de alto rendimiento*) tiene como objetivo avanzar el estado del arte en la optimización a gran escala de sistemas de ingeniería complejos mediante el desarrollo de nuevas estrategias de optimización metaheurística aceleradas por computación de alto rendimiento (HPC).

Aunque el proyecto utiliza la tecnología de sistemas termosolares de torre como caso de estudio de alto impacto y elevada complejidad, los desarrollos metodológicos están concebidos con carácter genérico y son aplicables a cualquier sistema caracterizado por un elevado número de parámetros optimizables.

---

## Objetivo General

Desarrollar un **marco genérico de optimización basada en simulación** capaz de explorar de manera eficiente espacios de diseño de muy alta dimensionalidad mediante algoritmos metaheurísticos avanzados y flujos de trabajo escalables apoyados en HPC.

El marco se dirige a sistemas que cumplen tres condiciones fundamentales:

1. La configuración del sistema puede definirse mediante un conjunto de parámetros.
2. Un proceso determinista de instanciación permite generar un modelo físico a partir de un conjunto de parámetros y evaluar sus métricas de rendimiento.
3. La relación entre los parámetros y las métricas de aptitud puede tratarse como una función de caja negra por parte del algoritmo de optimización.

Bajo esta abstracción, la estrategia de optimización se centra exclusivamente en identificar regiones óptimas del espacio de diseño multidimensional, sin requerir conocimiento interno del proceso de modelado físico subyacente.

---

## Objetivos Científicos y Técnicos

### 1. Desarrollar algoritmos avanzados de optimización metaheurística

Diseñar e implementar estrategias metaheurísticas novedosas e híbridas capaces de:

- Explorar eficientemente espacios de parámetros de muy alta dimensionalidad  
- Gestionar el fuerte acoplamiento entre variables  
- Abordar compromisos multiobjetivo  
- Mantener robustez en entornos de optimización computacionalmente costosos  

El énfasis se sitúa en estrategias de optimización integral, más que en enfoques basados en modelos sustitutivos.

---

### 2. Construir un marco genérico de optimización de caja negra

Crear una arquitectura modular de optimización que:

- Desacople los algoritmos de optimización de los modelos físicos de simulación  
- Permita la integración flexible de diferentes modelos de sistema  
- Soporte optimización monoobjetivo y multiobjetivo  
- Facilite la escalabilidad sobre infraestructuras HPC heterogéneas  

Este marco está concebido para ser reutilizable en distintos dominios de la ingeniería más allá del ámbito termosolar.

---

### 3. Aprovechar la computación de alto rendimiento para la optimización a gran escala

Desarrollar flujos de trabajo escalables que:

- Paralelicen procesos de optimización basados en simulación  
- Aprovechen arquitecturas HPC distribuidas e híbridas  
- Reduzcan el tiempo de obtención de soluciones en problemas complejos  
- Permitan la exploración sistemática de espacios de diseño extensos  

La HPC no se emplea únicamente como mecanismo de aceleración, sino como tecnología habilitadora para abordar problemas de optimización previamente considerados inabordables.

---

### 4. Demostrar el impacto metodológico en sistemas termosolares de torre

Aplicar el marco desarrollado a la optimización del subsistema responsable de la conversión de energía radiante en energía térmica en sistemas termosolares de torre, incluyendo:

- Configuración del campo de heliostatos  
- Geometría de la torre  
- Diseño del receptor  

Este subsistema se selecciona como ejemplo representativo de un sistema de ingeniería altamente acoplado, multiparamétrico y multifísico.

---

### 5. Establecer la transferibilidad más allá de los sistemas termosolares de concentración (CST)

Validar que el marco de optimización puede adaptarse a otros sistemas de ingeniería caracterizados por:

- Configuración paramétrica  
- Evaluación de rendimiento basada en simulación  
- Desafíos de optimización de alta dimensionalidad  

El proyecto posiciona los sistemas termosolares de torre como demostrador de una clase más amplia de problemas de optimización basada en simulación.

---

## Impacto Esperado

AI-HPC4CST pretende:

- Permitir la optimización eficiente de sistemas con cientos o miles de variables de diseño  
- Avanzar las capacidades teóricas y prácticas de la optimización metaheurística  
- Reducir barreras en la optimización de ingeniería a gran escala  
- Reforzar el liderazgo de España en computación científica impulsada por IA  
- Contribuir a la competitividad de las tecnologías termosolares  

Mediante la combinación de teoría avanzada de optimización y computación de alto rendimiento, AI-HPC4CST contribuye al desarrollo de la próxima generación de diseño de ingeniería basado en simulación.