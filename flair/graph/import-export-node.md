---
layout: default
title: Import/Export Nodes
parent: Flair Graph
nav_order: 5
---

# Import/Export Nodes
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

The _import_ and _export_ nodes are required whenever the Flair graph is used as a plugin. They serve to import whatever data is required and export the end result to the viewport. As such, the Flair graph won't work as a plugin if these two nodes are not used.

<figure class="aio-ui">
	<img src="/media/graph/nodes/import_export.png" alt="Import and Export nodes connected to each other">
	<figcaption>Import and Export nodes connected to each other.</figcaption>
</figure>

Only one _Import_ and _Export_ node can be used per Flair graph.
{: .warning}

## Import Node

The import node allows to import render targets and uniforms (variables) from _Autodesk Maya_ onto the Flair Graph. Render targets are only available on-demand, so they can be chosen from the import node properties when selected (see below).

<figure class="aio-ui">
	<img src="/media/graph/nodes/import_params.png" alt="Import node parameters">
	<figcaption>Import node parameters when the node is selected.</figcaption>
</figure>

You can choose as many as necessary for the shader style, and you can request different render targets at any point. Just keep in mind that altering the order may break some connections from the import node.

## Export Node

The export node allows to export the resulting image back to Autodesk Maya. The export node only accepts one input.