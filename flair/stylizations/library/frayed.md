---
layout: default
title: Frayed
parent: Style Library
grand_parent: Stylizations
nav_order: 3
---

## Style attributes

To refine and customize the frayed edges style, a series of global frayed attributes are provided within the [style configuration node](/software/MNPRX/docs/config#style-attributes).

<figure class="aio-ui">
    <img src="/media/frayed/style-attrs.png" alt="Style attributes">
    <figcaption>Style attributes in the configuration node</figcaption>
</figure>

### Enable
Creates inflated noise instances of objects in the scene to be used for the frayed edge stylization within Maya. You can disable this attribute if you don't want to see the noise covering all scene elements in Viewport 2.0.

### Inflation
Amount of inflation of the noise objects, default: 0.05. Inflation is required to keep the frayed edges outside of the geometry.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/frayed/inflation.mp4" type="video/mp4">
	</video>
	<figcaption>Inflation between 0 and 0.5</figcaption>
</figure>

### Frequency
Frequency of the frayed edges, default: 50.0.
- Higher frequency ⇒ smaller distortions
- Lower frequency ⇒ bigger distortions
Note: if the frequency is too high and the noise enters the sub-pixel size, it will flicker.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/frayed/frequency.mp4" type="video/mp4">
	</video>
	<figcaption>Frequency between 0 and 200</figcaption>
</figure>

### Amplitude
Determines the amount of distortion on the frayed edges, default 1.0. Note: Increasing the _Amplitude_ will also require a higher _Inflation_ amount.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/frayed/amplitude.mp4" type="video/mp4">
	</video>
	<figcaption>Varying amplitude between 0 and 10</figcaption>
</figure>

---

### Pigment Density
The concentration of pigments, giving the render either a diluted or a more saturated and darker look.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/frayed/pigment-density.mp4" type="video/mp4">
	</video>
	<figcaption>Pigment Density between 0.5 and 2</figcaption>
</figure>

### Paper Granulation
The accumulation of pigments on the valleys of the paper (canvas). Concentrates the pigments on the valleys and creates a more saturated and darker look.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/frayed/paper-granulation.mp4" type="video/mp4">
	</video>
	<figcaption>Paper Granulation between -1 and 5</figcaption>
</figure>

---

### Edge Darkening Intensity
Strength of the edge darkening effect. A higher intensity will concentrate more color on the edges.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/frayed/edge-darkening-intensity.mp4" type="video/mp4">
	</video>
	<figcaption>Edge Darkening Intensity between 0 and 3</figcaption>
</figure>

### Edge Darkening Width
Width for the edge darkening effect. Note: A wider edge darkening will require an increase in intensity, as well.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/frayed/edge-darkening-width.mp4" type="video/mp4">
	</video>
	<figcaption>Edge Darkening Width between 0 and 30</figcaption>
</figure>

---

### Drybrush Threshold
Sharpness of the drybrush application.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/frayed/drybrush-threshold.mp4" type="video/mp4">
	</video>
	<figcaption>Drybrush Threshold between 0 and 20</figcaption>
</figure>

### Drybrush color
Color of the drybrush application.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/frayed/drybrush-color.mp4" type="video/mp4">
	</video>
	<figcaption>Different drybrush colors.</figcaption>
</figure>

### Max Gaps Overlaps Width
Maximum width of the gaps & overlaps effect.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/frayed/max-gaps-overlaps-width.mp4" type="video/mp4">
	</video>
	<figcaption>Gaps and overlaps width between 1 and 5</figcaption>
</figure>


------------------------
------------------------


## Considerations

### Nurbs surfaces
Nurbs surfaces can't save any data in vertex colors, so frayed edges won't stick onto the objects and it won't be possible to use PaintFX on them.

### Parenting of mesh objects
Parenting of mesh objects (a mesh object paranted to another one) is not supported, as Maya won't know what mesh to render where. Use parent constraints instead.

### Inflation
- Vertex normals in objects that are not sub-divided will need to be averaged for hard-edged objects. Otherwise, each face vertex has its own normal and inflation will leave gaps between each inflated face, creating uncoherent frayed edges.
- Thin objects should have faces on both sides for the object to inflate correctly.

### Warnings
`...due to multiply-instanced child`
Whenever you get this warning, uncheck the *Enable* attribute in the frayed stylization, make the edits that you previously wanted to do and re-enable the frayed stylization.