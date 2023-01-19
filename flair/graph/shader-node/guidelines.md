---
layout: default
title: Coding Guidelines
parent: Shader Node
grand_parent: Flair Graph
nav_order: 5
---

# Coding Guidelines
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

These are internal coding guidelines that we adhere to at Artineering and are present in the shaders provided by Flair. You may use whatever guideline you prefer!

## Inputs/Outputs
Inputs and outputs are written in Pascal Case e.g., **ThisWordIsInPascalCase**
Note that while similar to Camel Case, the first letter **is** capitalized.

If only one output is made within the shader, you may name this `Output`, otherwise, use a descriptive name for the output that you are creating. Do **not** name them `Output1`, `Output2`, etc.

## Variables
Variables in GLSL are written in Camel Case e.g., **thisWordIsInCamelCase**