---
layout: default
title: Globals Node
parent: Getting Started
nav_order: 2
---

# Flair Globals
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

The Flair Globals node gets selected after clicking on the `GLOB` icon in the [*Flair shelf*](../flair-shelf) and looks somewhat similar to the figure below---depending on the active style. This node contains every global parameter available in the active style and each value is usually applied over the entire image.

It is imperative to understand what each attribute does and how it affects the style, but it is also fun to simply experiment with them and make happy accidents. The attributes in the style configuration node are separated into three groups: [*Engine*](#engine), [*Style*](#style) and [*Canvas*](#canvas).

<figure class="aio-ui">
	<img src="/media/globals/globals.png" alt="Style globals node">
	<figcaption>The globals node showing all the watercolor style attributes.</figcaption>
</figure>

---

## Video tutorial

{% include responsive-embed url="https://www.youtube.com/embed/JzHHlWIg9UE" width="70%" caption="Learn all about style globals in under 7 minutes" %}

---

## Engine
Engine attributes remain the same across styles and contain attributes directly related to the Flair engine. These attributes can change the behavior, fidelity and performance of the stylization or toggle optional features.

### World Scale
Defines how many _Maya_ units is considered one "meter" in the virtual world. Since most projects work with assets at different scales, setting up the _World Scale_ right will help the style behave correctly.

Example: if your character is supposed to be one meter high in his world, but is actually 5 units high in _Maya_, the _World Scale_ attribute should be set to 5.
{: .info}

### Style
Defines the style that Flair is currently running in.
* [**Graph**](/flair/styles/graph/) - The Flair Graph style (customizable)
* [**Watercolor**](/flair/styles/library/watercolor/) - The Watercolor shader style (default)
* [**Cutout**](/flair/styles/library/cutout/) - 3D Cutout shader style
* [**Hatching**](/flair/styles/library/hatching/) - Hatching and stippling shader style
* [**Warp**](/flair/styles/library/warp/) - Warp shader style
* [**Fray**](/flair/styles/library/fray/) - Fray shader style
* [**Lines**](/flair/styles/library/lines/) - Toon and sketch lines shader style

### Separate Stylization
The option to save the stylization (art-direction) of the scene concurrently in a separate file.
* **No** - The stylization will only be saved with the scene
* **Yes, only save** - The stylization will be saved with the scene and in a `*.style` file next to it (default)
* **Yes, save and replace** - The stylization will only be saved in a `*.style` file and be automatically applied upon opening the scene

When applying VertexFX onto referenced assets, Flair will automatically ask if you wish to only save the stylization in a separate file, instead of in the Maya scene ("Yes, save and replace" option). This is recommended, because if the stylization is saved with the Maya scene, the file size will be orders of magnitude bigger than it should be and may even not open anymore. 
{: .info}

---

### Quality
Contains the quality-related global attributes within Flair.

#### TAA
Renders many images with _Temporal Anti-Aliasing_ to perform progressive, super-sampled results. Because of this, the rendered results will have more detail and less jaggies (staircase effect). Enabling TAA will also enable the _Samples_ attribute to the right.

Anti-aliasing makes edges appear smoother and less pixelated, you can find more about what aliasing is [here](https://www.youtube.com/watch?v=hqi0114mwtY).

<figure style="max-width:700px">
    <div class="d-flex">
	    <img src="/media/globals/AA1.png" alt="Close-up without antialiasing" style="max-width: 150px">
	    <img src="/media/globals/AA2.png" alt="Close-up with antialiasing" style="max-width: 150px">
	</div>
    <figcaption>Close-up of image without and with anti-aliasing.</figcaption>
</figure>

#### Samples
The amount of image samples that the _TAA_ uses to create the final result. Default is 64, but you can also get acceptable results rendering less samples.

#### Render Scale
Renders at different resolution scales. 
* **50%** renders at half the normal horizontal and vertical resolution and can be useful when working in monitors with ridiculously high resolutions or weaker GPUs.
* **100%** is the normal rendering resolution
* **150%** renders at 1.5x horizontal and vertical resolution, bringing out more detail without impacting performance too much.
* **200%** renders at double the horizontal and vertical resolution, lifting up the quality substantially, but also quadrupling the amount of pixels that need to be rendered and stored (VRAM).

#### Color Depth

Defines the color depth of most render targets. This generally translates to: higher is better. However, slower systems should consider using 8bit targets if the performance is too slow, provided you can sacrifice some color fidelity.

---

### Optional Features

#### Velocity PV
Enables the calculation of motion vectors of each object in the scene (per vertex). This helps certain effects to remain motion coherent and avoid the _shower door effect_.

<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/globals/motion-coherence.mp4" type="video/mp4">
	</video>
	<figcaption>Visualization of motion coherence.</figcaption>
</figure>

Velocity PV does **NOT** work with subdivided previews (`3` on the keyboard), as vertices won't be in the same place. Consider subdividing the required objects with normal geometry instead.
{: .warning}

---

#### Effect Focal Range
Creates the effect focal range locators in the scene. These locators allow you to define the center of interest and an effect factor at the front and back. Based on these factors, effects that support this (i.e., watercolor bleeding) will be reduced or increased at different distances from the effect focal point.

These locators can also be constrained/parented to a camera to have the front and back factors relative to the distance to the camera.
{: .info}

---

#### Mix Maya Materials
Enables to properly mix Flair materials with Maya materials, at the cost of some performance. Without this option, you will see Flair effects from background objects being applied on top of Maya materials, which might not be desired.

---

{% include /effects/bloom.md %}

---

{% include /effects/geo-blur.md %}

---

{% include /effects/wobble.md %}

#### Toon Shading
Toon shading adds the ability to art-direct toon shading to sharpen or soften toon regions in different objects. When no materials in the scene are toon shaded, enabling Toon Shading will prompt the artist if Toon Shading should be enabled on every Flair material, as well. 

<div class="d-flex bottom">
	<figure class="aio-ui">
		<img src="/media/globals/toon-vertexfx.png" alt="VertexFX toon control widget">
		<figcaption>VertexFX toon control widget.</figcaption>
	</figure>
	<figure class="aio-ui">
		<img src="/media/globals/toon-noisefx.png" alt="NoiseFX toon control widget">
		<figcaption>NoiseFX toon control widget.</figcaption>
	</figure>
</div>

-----------

## Style
Style attributes contain the attributes of the currently loaded style. In the case of the figure above: watercolor.

These attributes allow to globally control the parameters the style and are documented below.

* [**Watercolor**](/flair/styles/library/watercolor/)
* [**Cutout**](/flair/styles/library/cutout/)
* [**Hatching**](/flair/styles/library/hatching/)
* [**Warp**](/flair/styles/library/warp/)
* [**Fray**](/flair/styles/library/fray/)
* [**Lines**](/flair/styles/library/lines/)

When using a custom _Graph_ style, the style attributes will auto-populate depending on the _Globals_ defined in the graph.
{: .info}

-----------

## Canvas
Canvas attributes contain the attributes of the texture where paint is applied on, be it paper or canvas. Altering these attributes will affect all effects that depend on the canvas for its style.

### Canvas Synthesis
Defines if an infinite canvas should be created from the given texture. Infinite canvases are completely seamless and can be generated from any heightmap texture within the `textures` folder of Flair.

###	Canvas Distortion
Defines the global amount of distortion caused by the _Canvas Roughness_.

### Canvas Blend
Defines the blending between the _Canvas Texture_ (_Main Canvas_ group) and the _Canvas Texture Alt_ (_Alternate Canvas_ group), allowing you to combine profile properties of different canvases.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/canvas/canvas-blend.mp4" type="video/mp4">
	</video>
	<figcaption>Blending between the Canvas Texture (default) and the Canvas Texture Alt (canvas).</figcaption>
</figure>

###	Canvas Light Dir.
Defines the side where the external light is shining from. `0` degrees is from the bottom, `90` degrees is from the left, `180` degrees from the top and `270` degrees is from the right.

<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/canvas/canvas-light-dir.mp4" type="video/mp4">
	</video>
	<figcaption>Canvas Light Dir between 0 and 359.0.</figcaption>
</figure>

The effect of this attribute can only be seen if _Canvas Shading_ is more than `0`.
{: .notice--warning}

###	Canvas Light Tilt
Defines the tilt angle of the external light in relation to the canvas, 90 degrees is perpendicular to the canvas.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/canvas/canvas-light-tilt.mp4" type="video/mp4">
	</video>
	<figcaption>Canvas Light Tilt between 30.0 and 60.0.</figcaption>
</figure>

The effect of this attribute can only be seen if _Canvas Shading_ is more than `0`.
{: .warning}

### Canvas Position X
Defines how much the canvas should be panned horizontally.

### Canvas Position Y
Defines how much the canvas should be panned vertically.

---


### Advection
Advection attaches the canvas to the underlaying animation, reducing the _shower door_ effect commonly known in non-photorealistic rendering when the canvas appears to float above the animation.  
This group is closed by default, but can be opened by clicking on it.

#### Canvas Advection
Enables/Disables canvas advection in the scene.

Big amounts of motion will distort canvas-based effects. It is recommended to refresh the canvas with the _Canvas Tile_ attribute once in a while to reset the texture or use _Canvas Advection_ with _Canvas Regeneration_ to attach the texture to the underlaying motion.
{: .info}

#### Canvas Regeneration
Defines the speed of regeneration in seconds for distorted canvases.

Advection can only be seen if the _VelocityPV_ attribute is checked and the animation is playing.
{: .warning}

---

### Main Canvas
Contains the attributes that define the main canvas texture of the style.

#### Canvas Texture
Defines the main texture that is going to be used as the canvas. Flair comes with more than 10 different canvas heightmaps to choose from. You can load any heightmap, as long as they are in the `textures` folder within Flair.

The _Canvas Synthesis_ attribute will automatically make an infinite canvas of any heightmap texture. Feel free to add your own textures and experiment with different canvas blends.
{: .info}

#### Canvas Color
Defines the color of the canvas.

####	Canvas Scale
Defines the linear scale of the canvas texture.

#### Canvas Rotation
Defines the rotation in degrees of the canvas texture. The center of the viewport is used as the rotation pivot.

####	Canvas Roughness
Defines the global roughness of the canvas.

<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/canvas/canvas-roughness.mp4" type="video/mp4">
	</video>
	<figcaption>Roughness between 0 and 5.0.</figcaption>
</figure>

_Canvas Roughness_ will affect **ALL** canvas-based effects.
{: .warning}

####	Canvas Shading
Defines the amount of external diffuse shading of the canvas.

<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/canvas/canvas-shading.mp4" type="video/mp4">
	</video>
	<figcaption>Canvas Shading between 1.0 and 0.</figcaption>
</figure>

The shading is caused by the _Canvas Light Dir_ and _Canvas Light Tilt_ attributes.
{: .info}

#### Canvas Tile
Loads a new canvas tile at every round number i.e., `1.0`, `2.0`, `3.0`.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/canvas/canvas-tile.mp4" type="video/mp4">
	</video>
	<figcaption>Switching between Canvas Tile 1.0 and Canvas Tile 2.0, without Canvas Tile Blend.</figcaption>
</figure>

Loading a new _Canvas Tile_ will present a new texture pattern and reset every canvas-dependent effect.
{: .info}

#### Canvas Tile Blend
Enables to smoothly blend two canvas tiles. That means that the _Canvas Tile_ attribute will smoothly blend the tiles e.g., a _Canvas Tile_ attribute of `1.5` will be a blend of the tile at 1.0 and the tile at 2.0.
<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/canvas/canvas-tile-blend.mp4" type="video/mp4">
	</video>
	<figcaption>Blending between Canvas Tile 1.0 and Canvas Tile 2.0.</figcaption>
</figure>

---


### Alternate Canvas
Contains the attributes that control the alternate canvas texture of the style, for styles that make use of two canvas textures. Control of this canvas is independent from the main canvas.
This group is closed by default, but can be opened by clicking on it.  
The attributes are the same as the main canvas: see above for the corresponding documentation.

The alternate canvas is used if the _Canvas Blend_ option is not 0 or in in styles that depend on more than one canvas e.g., Cutout.
{: .info}
