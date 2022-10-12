---
layout: default
title: Hatching
parent: Style library
grand_parent: Styles
nav_order: 4
---

<figure>
 <img src="/media/styles/hatching/header.jpg" alt="Hatching header image">
</figure>

# Hatching and Stippling
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

[Back to Hatching Features](https://artineering.io/styles/hatching
){: .aio-btn .d-block}

## Style breakdown

The hatching shader style emulates traditional hatching animation in 3D. While the hatching style contains tightly-packed lines to depict shading on objects, the same shader style can also be used to emulate stippling when the [hatching length](#length) is set to 0 (zero).

This shader style depends on a [custom material](/flair/materials/others#hatching-material), which can be assigned onto any poly object. The material generates 3D noise that can be fractalized, maintaining its pixel size, disregarding the distance to the object. That way the size and density of the noise is preserved--never becoming too small or too big. When the fractalized noise is stretched along the object's flow (curvature), stipples become hatches that follow the surface of the object.

In this page, we only document global attributes specific to the hatching shader style. To learn more about other global attributes, please see the [globals node documentation](/flair/getting-started/globals).

This style is still in early development. If you wish for us to refine it further for your production, please consider [working with us](https://artineering.io/agency) to polish the look exactly to your requirements and pipeline.
{: .warning}

## Attributes

A series of hatching and stippling attributes are provided within the globals node to control and refine the hatching shader style.

<figure class="aio-ui">
    <img src="/media/styles/hatching/style-attrs.png" alt="Style attributes">
    <figcaption>Style attributes in the globals node</figcaption>
</figure>

### Length
Length of the hatching lines. If set to zero, produces a stippling effect.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/styles/hatching/length.mp4" type="video/mp4">
	</video>
	<figcaption>Varying length between 0 and 40</figcaption>
</figure>

### Width
Average width (thickness) of the hatching lines in pixels. A width of zero is invisible.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/styles/hatching/width.mp4" type="video/mp4">
	</video>
	<figcaption>Varying width between 0 and 6</figcaption>
</figure>

### Gradient
Controls the extent of the diffuse lighting gradient. A value of zero results in a binary shading style.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/styles/hatching/wrap.mp4" type="video/mp4">
	</video>
	<figcaption>Varying gradient between 0 and 2</figcaption>
</figure>

### Smoothness
Smoothes the vector field used to orient the hatching lines. Higher values produce less abrupt changes in orientation.  
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/styles/hatching/smoothness.mp4" type="video/mp4">
	</video>
	<figcaption>Varying smoothness between 1 and 5</figcaption>
</figure>


------------------------

## Art-direction
The width and the local orientation of the hatching lines can be art-directed procedurally with [NoiseFX](/flair/art-direction/noisefx) and/or locally by painting with [VertexFX](/flair/art-direction/vertexfx).

<figure class="aio-ui">
	<img src="/media/styles/hatching/noisefx.png" alt="MNPRX noiseFX window">
	<figcaption>Art-directable parameters of the hatching style.</figcaption>
</figure>

---

## Considerations

### Attach hatching/stippling onto objects
Activate the `Deformed` attribute within the materials to bake the fractalized noise onto animated objects.

### Nurbs surfaces
Nurbs surfaces can't save any data in vertex colors, so hatching/stippling won't stick onto the objects and it won't be possible to use VertexFX on them.