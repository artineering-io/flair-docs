---
layout: default
title: Watercolor
parent: Style Library
grand_parent: Stylizations
nav_order: 1
---

## Style attributes

To refine and customize the watercolor style, a series of global watercolor attributes are provided within the [style configuration node](/software/MNPRX/docs/config#style-attributes).

<figure class="aio-ui">
 <img src="/media/watercolor/style-attrs.png" alt="Style attributes">
 <figcaption>Style attributes in the configuration node</figcaption>
</figure>

---
### Bloom
Bloom, sometimes also referred to as Glow, leaks light from bright areas into surrounding areas.

#### Bloom Intensity
Defines the intensity/amount of the bloom effect.

#### Bloom Size
Defines the threshold at which a pixel is bright enough to be considered for the bloom effect.

#### Bloom Blur
Defines the radious of light leakage to the surrounding areas.

---

### Ambient Occlusion

Ambient Occlusion (AO) darkens the image in areas that are hard to reach for the ambient light due to the local shape of the geometry (e.g. concavities, crevices, holes). Note that this effect depends only on the geometry (and the viewpoint, to a lesser extent), and not on the lights present in the scene.

Flair currently uses a screen-space implementation of ambient occlusion based on the _Ground-Truth Ambient Occlusion_ algorithm (GTAO).
{: .info}

#### AO Blend Mode
Defines how the computed ambient occlusion is applied on the final image.
* **None**: AO is not applied.
* **Multiply**: the AO is multiplied over the image.
* **Color Burn**: same as above, except that the AO is blended over the image using the _Color Burn_ blending mode.
* **Style-specific**: AO is applied by the current style so the effect depends on the style implementation. (default)
	* With styles other than the *Graph* styles, the AO modulates the *pigment density*, resulting in darker colors in occluded areas.

#### AO Radius
Defines the radius used by the ambient occlusion filter: larger radius results in larger darkened areas.

#### AO Strength
Defines the strength of ambient occlusion: higher values make the ambient occlusion darker.

---

### Atmosphere Tint
Defines a custom atmospheric perspective color, making things at distance tint towards the specified color.

### Atmosphere Range
Defines the range at which the atmospheric tint will start and end.

The units work as meter/cm, so keep the  _World Scale_ in mind when setting up this attribute.
{: .info}

---

### Pigment Density
The concentration of pigments, giving the render either a diluted or a more saturated and darker look.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/watercolor/pigment-density.mp4" type="video/mp4">
	</video>
	<figcaption>Pigment Density between 0.5 and 2.</figcaption>
</figure>

### Paper Granulation
The accumulation of pigments on the valleys of the paper (canvas). Concentrates the pigments on the valleys and creates a more saturated and darker look.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/watercolor/paper-granulation.mp4" type="video/mp4">
	</video>
	<figcaption>Paper Granulation between -1 and 5.</figcaption>
</figure>

---

### Edge Darkening
* **Simple** - Simple control over edges defined by the colors and depth.
* **Advanced** - Advanced control over edges defined by lightness, chromacity and depth. We recommend working with this for more faithful results.

### Edge Darkening Intensity
Strength of the edge darkening effect. A higher intensity will concentrate more color on the edges.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/watercolor/edge-intensity.mp4" type="video/mp4">
	</video>
	<figcaption>Edge Darkening Intensity between 0 and 3.</figcaption>
</figure>

### Edge Darkening Width
Width for the edge darkening effect. Note: A wider edge darkening will require an increase in intensity, as well.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/watercolor/edge-width.mp4" type="video/mp4">
	</video>
	<figcaption>Edge Darkening Width between 0 and 30.</figcaption>
</figure>

---

### Bleeding Radius
Maximum width for the bleeding effect. Pushing this too far might affect performance.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/watercolor/bleeding-radius.mp4" type="video/mp4">
	</video>
	<figcaption>Bleeding radius between 1 and 40.</figcaption>
</figure>

### Drybrush Threshold
Sharpness of the drybrush application.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/watercolor/drybrush-threshold.mp4" type="video/mp4">
	</video>
	<figcaption>Drybrush Threshold between 0 and 20.</figcaption>
</figure>

### Drybrush Color
Color of the drybrush application.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/watercolor/drybrush-color.mp4" type="video/mp4">
	</video>
	<figcaption>Different drybrush colors.</figcaption>
</figure>

### Max Gaps Overlaps Width
Maximum width of the gaps & overlaps effect.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/watercolor/gaps-overlaps.mp4" type="video/mp4">
	</video>
	<figcaption>Gaps and overlaps width between 1 and 5.</figcaption>
</figure>


## Post Processing
Post Processing attributes contain simple but useful self-explanatory post-processing filters
* Saturation
* Contrast
* Brightness

This group is closed by default, but can be opened by clicking on it.