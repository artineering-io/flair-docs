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