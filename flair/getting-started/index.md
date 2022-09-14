---
layout: default
title: Getting Started
nav_order: 3
has_children: true
---

# Getting Started
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

## Flair workflow

Flair is all about controlling and art-directing a stylized render, so its workflow revolves around using tools at each level of control to cover most of the _interaction spectrum_.

Different levels of control allow you to customize the render from the highest level of control (affecting the entire image) down to the lowest level of control (affecting an individual pixel) to achieve your vision.

<figure>
	<img src="/media/getting-started/levels-of-control.svg" alt="Levels of Control" style="max-width:300px;">
	<figcaption>The different levels of control present in Flair.</figcaption>
</figure>

An ideal workflow follows this order, setting the global style first (high level of control) and continously diving deeper into localized effects (low level of control). However, it is also common to bounce around different levels of control, especially during exploratory phases.

This ideal workflow is also encouraged through the [Flair shelf](./flair-shelf), where all the tools for Flair are found.

<figure>
	<img src="/media/getting-started/shelf-levels-of-control.png" alt="Levels of Control in the Shelf" style="max-width:300px;">
	<figcaption>The tools in the Flair shelf go from the highest (left) to the lowest level of control (right).</figcaption>
</figure>

The art-direction at each level of control is bound to the 3D scene. However, one can easily export and import the art-direction across scenes using the [Import/Export tool](/flair/stylizations/import-export/).
{: .info}

Each level of control is introduced in the sections below, click on the hyperlinks to open the documentation of the different tools.

## Style presets and global control
At the top level of control are [_Style Presets_](/flair/stylizations/style-presets/) (`STYLE` button in the [_Flair Shelf_](./flair-shelf/)), which allow to quickly change the style that Flair is running.

<figure>
 <video autoplay loop muted playsinline>
   <source src="/media/getting-started/presets.mp4" type="video/mp4">
 </video>
 <figcaption>Switching between style presets</figcaption>
</figure>

_Style Presets_ save and load predefined attributes (parameters) of the Flair [_globals node_](./globals/).

The Flair [_globals node_](./globals/) (`GLOB` button in the [_Flair Shelf_](./flair-shelf/)) contains every global attribute available in the engine and active stylization. Being globals, these attributes usually affect the entire image.

<figure>
 <video autoplay loop muted playsinline>
   <source src="/media/getting-started/global.mp4" type="video/mp4">
 </video>
 <figcaption>Modifying style attributes through the globals node</figcaption>
</figure>


## Material presets and material control
At the top of the mid-level of control are [_Material Presets_](/flair/materials/material-presets/) (`PRES` button in the [_Flair Shelf_](./flair-shelf/)), which allow to quickly create or change the materials of selected objects or components.

<figure>
 <video autoplay loop muted playsinline>
   <source src="/media/getting-started/material-presets.mp4" type="video/mp4">
 </video>
 <figcaption>Switching between material presets</figcaption>
</figure>

[_Material Presets_](/flair/materials/material-presets/) save and load predefined attributes from the painterly [_Flair Shader_](/flair/materials/flair-shader/) and [_proxy_](/flair/materials/proxy-material/) materials.

The [_Flair Shader_](/flair/materials/flair-shader/) node (selected by clicking on the `MAT` button in the [_Flair Shelf_](./flair-shelf/) on selected objects/components) contains all shader attributes. These values are applied on all objects that share the same material.

<figure>
 <video autoplay loop muted playsinline>
   <source src="/media/getting-started/material.mp4" type="video/mp4">
 </video>
 <figcaption>Modifying material controls</figcaption>
</figure>

Painterly materials are crucial to develop styles that do not conform to physically-based photorealistic styles. 
By not being constrained to photorealism, the same material can look completely different even under the same lighting conditions. However, painterly materials still need to work in unison to form a coherent look. For this purpose, you can change attributes of multiple materials at the same time using the [Bulk Attribute](/flair/art-direction/bulkattr/) tool (`BULK` button in the [_Flair Shelf_](./flair-shelf/)).
{: .info}

Our custom materials can also drive stylization effects procedurally through the use of [_NoiseFX_](/flair/art-direction/noisefx/).

### NoiseFX
The [_NoiseFX_](/flair/art-direction/noisefx/) tool (`NFX` button in the [_Flair Shelf_](./flair-shelf/)) allows to control effects procedurally from within the material. When used subtly, the tool can quickly produce natural-looking fluctuations within effects. 

<figure>
 <video autoplay loop muted playsinline>
   <source src="/media/getting-started/noisefx.mp4" type="video/mp4">
 </video>
 <figcaption>Adding and modifying NoiseFX</figcaption>
</figure>

## Mapped control

The lowest level of control is mapped control, which are parameters mapped onto objects either at the vertex- (_VertexFX_) or texture-space level.
### VertexFX
The [_VertexFX_](/flair/art-direction/vertexfx/) tool (`VFX` button in the [_Flair Shelf_](./flair-shelf/)), allows to paint effects onto the 3D objects at the vertex level (effects are assigned per vertex). The tool can provide meticulous local control over the stylization.

<figure>
 <video autoplay loop muted playsinline>
   <source src="/media/getting-started/vertexfx.mp4" type="video/mp4">
 </video>
 <figcaption>Painting VertexFX onto geometry.</figcaption>
</figure>


## Proxy control

In parallel to all levels of control are [_Proxies_](/flair/materials/proxy-material/) (created by loading the _\_proxy_ material preset: `PRES` button in the [_Flair Shelf_](./flair-shelf/)). Proxies are invisible objects that control your stylization.

Geometry proxies can take the form of arbitrary 3D objects i.e., spheres, complex objects or planes. All proxies can be placed in your scene to control and stylize whatever is behind them. Their usage in 3D is versatile, as they can be placed onto a small part of your scene, or over the entire scene, in the form of a filter plane.

<figure>
 <video autoplay loop muted playsinline>
   <source src="/media/getting-started/proxies.mp4" type="video/mp4">
 </video>
 <figcaption>Assigning and modifying a proxy</figcaption>
</figure>

## All controls combined

All different levels of control, when art-directed correctly, can reflect your unique vision.

<!-- Make sure to watch the [stylization examples](../stylizing-scene) to learn how to take advantage of each level of control when stylizing your scenes. Once you are happy with the results, render out your animation!-->

<figure>
 <video autoplay loop muted playsinline>
   <source src="/media/getting-started/spherebot.mp4" type="video/mp4">
 </video>
 <figcaption>The Spherebot in motion, 3D model by Bastien Genbrugge</figcaption>
</figure>

## Dive deeper

Make sure to continue _Getting Started_ by opening and reading the pages below: