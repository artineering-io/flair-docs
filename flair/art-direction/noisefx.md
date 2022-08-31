---
layout: default
title: NoiseFX
parent: Art-direction Tools
nav_order: 2
---
# NoiseFX tool
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

The _NoiseFX_ tool simplifies the [procedural control of effects](#showcase) on selected Flair materials. The tool is opened by clicking on the **NFX** shelf icon and shares the same window with the [_VertexFX_](../vertexfx) tool.

<figure class="float-right aio-ui aio-window">
	<img src="/media/noisefx/noiseFX.png" alt="NoiseFX tool window">
	<figcaption>NoiseFX of the watercolor stylization.</figcaption>
</figure>

Each Flair material supports NoiseFX, but the effects driven by NoiseFX depend on the loaded style. To apply NoiseFX, select an object with a Flair material and modify the desired slider.


From top to bottom, these are the different elements of the NoiseFX tool.

<figure class="float-left">
	<img src="/media/ui/icons/viewPassive.png" alt="View NoiseFX"  style="max-height: 32px">
</figure>

On the top-left, you will find an eye icon which toggles the parameter view. This will allow you to view the control parameters that you are currently affecting through the _Noise Widgets_.

On the top-right, you will find the `Bake 3D` button. This button toggles the `Deformed` setting in the assigned Flair materials, baking the current 3D position of objects. Baking is useful to attach the current NoiseFX patterns to an animated/deformed object. If the 3D position is not baked, NoiseFX will "float" in 3D space, instead of moving with animated objects.


## Noise widgets
Each style has different effects, therefore, the noise widgets (sections) will vary depending on the currently loaded stylization. Each widget (section) handles a specific effect/behaviour within the style e.g., _Lighting_, _Pigment turbulence_, _Color bleeding_.

### Toggle/reset
On the left side of each widget, you will find a term for the generalized behaviour of each effect. This is followed by a sphere preview, visually showcasing what the behavior/effect does. Underneath the preview, you will find two buttons.

<figure class="float-left">
	<img src="/media/ui/icons/io.png" alt="NoiseFX toggle"  style="max-height: 32px">
</figure>

This button toggles the NoiseFX on/off to visualize the influence that the noise makes for the stylization.

<figure class="float-left">
 <img src="/media/ui/icons/reset.png" alt="Reset NoiseFX"  style="max-height: 32px">
</figure>

This button resets the NoiseFX values for that effect, allowing to start anew or completely remove its influence.

### Modifying noise
Modifying noise is simple, select the object with the material that you wish to modify and use one of the three relative sliders.

* **Scale** - Modifies the scale of the 3D/2D noise for the specified effect [noise frequency].
* **Noise** - Modifies the contrast (how strong it is) of the noise for the specified effect. Keep in mind that noise is composed out of positive and negative values and the contrast amplifies the noise in both directions [noise amplitude].
* **Offset** - The offset slider is the vertical slider on the far right, which offsets the noise towards positive or negative values, accordingly [noise offset].

Depending on the widget (see _Edge Manipulation_ widget), it may present different names for the _Noise_ slider, but they also modify the contrast (how strong it is) of the noise for the specified effect.

## Showcase
Here we select the object that contains the material to which we want to add NoiseFX onto. Using the NoiseFX tool, we modify the _noise_, _scale_ and _offset_ of the density to create a natural-looking pigment turbulence effect.

<figure class="aio-ui">
 <video autoplay loop muted playsinline style="max-width: 502px">
   <source src="/media/noisefx/noisefx.mp4" type="video/mp4">
 </video>
 <figcaption>Adding and modifying density NoiseFX</figcaption>
</figure>

## Internal workings

The NoiseFX tool simplifies the toggling and modifying of procedural attributes on Flair materials.  
These can be found within each material when opening the NoiseFX group in the Attribute editor.

<figure class="aio-ui">
	<img src="/media/noisefx/noiseFX_AE.png" alt="Stylization (procedural) attributes">
	<figcaption>Some procedural stylization attributes within the material, created through NoiseFX.</figcaption>
</figure>

## FAQ
{% include faq/section.html file="noisefx.md" self-contained=true %}