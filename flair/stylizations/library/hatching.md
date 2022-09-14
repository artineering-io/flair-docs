---
layout: default
title: Hatching
parent: Style Library
grand_parent: Stylizations
nav_order: 4
---

## Style attributes

To refine and customize the hatching style, a series of global hatching attributes are provided within the [style configuration node](/software/MNPRX/docs/config#style-attributes).

<figure class="aio-ui">
    <img src="/media/hatching/style-attrs.png" alt="Style attributes">
    <figcaption>Style attributes in the configuration node</figcaption>
</figure>

### Length
Length of the hatching lines. If set to zero, produces a stippling effect.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/hatching/length.mp4" type="video/mp4">
	</video>
	<figcaption>Varying length between 0 and 40</figcaption>
</figure>

### Width
Average width (thickness) of the hatching lines in pixels. A width of zero is invisible.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/hatching/width.mp4" type="video/mp4">
	</video>
	<figcaption>Varying width between 0 and 6</figcaption>
</figure>

### Gradient
Controls the extent of the diffuse lighting gradient. A value of zero results in a binary shading style.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/hatching/wrap.mp4" type="video/mp4">
	</video>
	<figcaption>Varying gradient between 0 and 2</figcaption>
</figure>

### Smoothness
Smoothes the vector field used to orient the hatching lines. Higher values produce less abrupt changes in orientation.  
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/hatching/smoothness.mp4" type="video/mp4">
	</video>
	<figcaption>Varying smoothness between 1 and 5</figcaption>
</figure>

------------------------
------------------------


## Hatching Material

The _hatching_ style requires its own material: to set this material on an object, select an object and load one of the "_hatching" material presets (see [material presets](/software/MNPRX/docs/material-presets)). Note that this material inherits most of the attributes of the *uber* material, which control the backdrop of the hatching lines. See [uber](/software/MNPRX/docs/uber) for a description of those attributes.

#### Hatching > Density
Controls the overall density of the hatching lines.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/hatching/density.mp4" style="width:300px" type="video/mp4">
	</video>
	<figcaption>Varying density between 10 and 200</figcaption>
</figure>

#### Hatching > Dynamic Noise
If checked, enables the _fractalization_ pass that ensures a constant line density regardless of camera position and zoom. This sometimes produces a slight "blending effect" when moving. Disable this attribute if your shot keeps the object at the same camera distance and zoom level.

<div class="d-flex">
    <figure>
        <video autoplay loop muted playsinline style="width:300px">
            <source src="/media/hatching/fract_on.mp4" type="video/mp4">
        </video>
        <figcaption>Dynamic noise enabled.</figcaption>
    </figure>
    <figure>
        <video autoplay loop muted playsinline style="width:300px">
            <source src="/media/hatching/fract_off.mp4" type="video/mp4">
        </video>
        <figcaption>Dynamic noise disabled.</figcaption>
    </figure>
</div>

------------------------
------------------------


## Art-direction
The width and the local orientation of the hatching lines can be art-directed procedurally with noiseFX and/or locally by painting with paintFX. See [noiseFX](/software/MNPRX/docs/noisefx/) and [paintFX](/software/MNPRX/docs/paintfx/) for usage information.

<figure class="aio-ui">
	<img src="/media/hatching/noisefx.png" alt="MNPRX noiseFX window">
	<figcaption>Art-directable parameters of the hatching style.</figcaption>
</figure>