---
layout: default
title: Watercolor
parent: Style library
grand_parent: Styles
nav_order: 2
---
<figure>
 <img src="/media/styles/watercolor/header.jpg" alt="Watercolor render">
</figure>

# Watercolor shader style
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

[Back to Watercolor Features](https://artineering.io/styles/watercolor
){: .aio-btn .d-block}

## Style breakdown

The watercolor shader style emulates traditional watercolor animation in 3D, providing art-directed control over most characteristic effects including color-bleeding, pigment turbulence, edge darkening and more.

This shader style depends on the [Flair material](/flair/materials/flair-shader), which can be assigned onto any mesh object. The material embeds painterly reflectance models and supports the art-direction framework of Flair. The framework allows to fully control the watercolor shader effects at each level of control, from the entire image using sliders to individual vertices.

The style is based on the [award-winning PhD research](https://artineering.io/publications/real-time-watercolor-rendering-of-3d-objects-and-animation-with-enhanced-control) of our founder, but each effect has been continously improved for production. While production-proven, the watercoolor shader style may not have all features that you need. So please let us know if [we can help](https://artineering.io/agency) polish the look exactly to your requirements and pipeline.

In this page, we only document global attributes specific to the watercolor shader style. To learn more about other global attributes, please see the [globals node documentation](/flair/getting-started/globals).

## Attributes

A series of watercolor attributes are provided within the globals node to control and refine the watercolor shader style.

<figure class="aio-ui">
 <img src="/media/styles/watercolor/style-attrs.png" alt="Style attributes">
 <figcaption>Style attributes in the globals node</figcaption>
</figure>

---
## Bloom
Bloom, sometimes also referred to as Glow, leaks light from bright areas into surrounding areas.

{% include responsive-embed url="https://www.youtube.com/embed/f2CxshwgK-k" width="60%" %}

### Bloom Intensity
Defines the intensity/amount of the bloom effect.

### Bloom Size
Defines the threshold at which a pixel is bright enough to be considered for the bloom effect.

### Bloom Blur
Defines the radious of light leakage to the surrounding areas.

---

## Ambient Occlusion

Ambient Occlusion (AO) darkens the image in areas that are hard to reach for the ambient light due to the local shape of the geometry (e.g. concavities, crevices, holes). Note that this effect depends only on the geometry (and the viewpoint, to a lesser extent), and not on the lights present in the scene.

{% include responsive-embed url="https://www.youtube.com/embed/FZfnh0KFKPg" width="60%" %}

Flair currently uses a screen-space implementation of ambient occlusion based on the _Ground-Truth Ambient Occlusion_ algorithm (GTAO).
{: .info}

### AO Blend Mode
Defines how the computed ambient occlusion is applied on the final image.
* **None**: AO is not applied.
* **Multiply**: the AO is multiplied over the image.
* **Color Burn**: same as above, except that the AO is blended over the image using the _Color Burn_ blending mode.
* **Style-specific**: AO is applied by the current style, so the effect depends on the style implementation. (default)
	* With styles other than the *Graph* styles, the AO modulates the *pigment density*, resulting in darker colors in occluded areas.

### AO Radius
Defines the radius used by the ambient occlusion filter: larger radius results in larger darkened areas.

### AO Strength
Defines the strength of ambient occlusion: higher values make the ambient occlusion darker.

---

## Atmospheric Effects

Atmospheric effects are useful to add depth to bigger scenes by changing the color within a specific range. 

### Atmosphere Tint
Defines a custom atmospheric perspective color, making things at distance tint towards the specified color.

### Atmosphere Range
Defines the range at which the atmospheric tint will start and end. Set these values high to _not_ have the atmosphere range affecting your scene.

If you wish to exclude an object from the atmosphere tint affect (e.g., a background plane), enable the _Color Plane_ attribute in the Flair shader material assigned to that object.

The units work as meter/cm, so keep the  _World Scale_ in mind when setting up this attribute.
{: .info}

---

## Watercolor

### Pigment Density
The concentration of pigments, giving the render either a diluted or a more saturated and darker look.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/styles/watercolor/pigment-density.mp4" type="video/mp4">
	</video>
	<figcaption>Pigment Density between 0.5 and 2.</figcaption>
</figure>

### Paper Granulation
The accumulation of pigments on the valleys of the paper (canvas). Concentrates the pigments on the valleys and creates a more saturated and darker look.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/styles/watercolor/paper-granulation.mp4" type="video/mp4">
	</video>
	<figcaption>Paper Granulation between -1 and 5.</figcaption>
</figure>

---

### Edge Darkening
* **Simple** - Simple control over edges defined by the colors and depth.
* **Advanced** - Advanced control over edges defined by lightness, chromacity and depth. We recommend working with this for better results.

### Edge Darkening Intensity
Strength of the edge darkening effect. A higher intensity will concentrate more color on the edges.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/styles/watercolor/edge-intensity.mp4" type="video/mp4">
	</video>
	<figcaption>Edge Darkening Intensity between 0 and 3.</figcaption>
</figure>

### Edge Darkening Width
Width for the edge darkening effect. Note: A wider edge darkening will require an increase in intensity, as well.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/styles/watercolor/edge-width.mp4" type="video/mp4">
	</video>
	<figcaption>Edge Darkening Width between 0 and 30.</figcaption>
</figure>

---

### Bleeding Radius
Maximum width for the bleeding effect. Pushing this too far might affect performance.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/styles/watercolor/bleeding-radius.mp4" type="video/mp4">
	</video>
	<figcaption>Bleeding radius between 1 and 40.</figcaption>
</figure>

### Drybrush Threshold
Sharpness of the drybrush application. Using a dry brush will only apply pigments to the peaks of the canvas, leaving the canvas color appear at the valleys of its profile.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/styles/watercolor/drybrush-threshold.mp4" type="video/mp4">
	</video>
	<figcaption>Drybrush Threshold between 0 and 20.</figcaption>
</figure>

### Drybrush Color
Color of the drybrush application.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/styles/watercolor/drybrush-color.mp4" type="video/mp4">
	</video>
	<figcaption>Different drybrush colors.</figcaption>
</figure>

### Max Gaps Overlaps Width
Maximum width of the gaps & overlaps effect.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/styles/watercolor/gaps-overlaps.mp4" type="video/mp4">
	</video>
	<figcaption>Gaps and overlaps width between 1 and 5.</figcaption>
</figure>

---

## Post Processing
Post Processing attributes contain simple but useful self-explanatory post-processing filters
* Saturation
* Contrast
* Brightness

This group is closed by default, but can be opened by clicking on it.
{: .info}