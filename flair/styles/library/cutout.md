---
layout: default
title: Cutout
parent: Style Library
grand_parent: Styles
nav_order: 2
---

## Style breakdown

Cutout animations are excruciating to create manually using scissors and hundreds of paper sheets, therefore, reproducing this style digitally presents a refreshing take, which can benefit from the flexibility given by 3D animation. No more trees or fingers are harmed during its creation and one can playfully compose and create the animation, taking complete advantage of digital tools and the 3D environment.

There are three fundamental elements within the cutout style which require to be controlled:
* Papers
* Cutout stencils
* External lighting

### Papers
The top and bottom layers of paper (canvases) are controlled respectively by the _Main canvas_ and _Alternate canvas_ attribute groups. There are over ten distinct _canvas textures_ to choose from and these can be customized in _color_, _scale_, _rotation_, _roughness_, _shading_, and _tiles_. See the [_canvas_ documentation](/software/MNPRX/docs/config#main-canvas) for a description of these attributes.

### Cutout Stencils
The cutout stencils are created through the **[cutout material](.#cutout-material)**, which can easily be created and assigned using the [material presets](/software/MNPRX/docs/material-presets/). Each cutout material automatically creates a stencil of the object it is assigned too. The cutout stencil can further be controlled and art-directed using [PaintFX](/software/MNPRX/docs/paintfx) and [NoiseFX](/software/MNPRX/docs/noisefx).

<div class="d-flex">
    <figure>
		<video autoplay loop muted playsinline style="height:150px;">
			<source src="/media/cutout/noiseFX.mp4" type="video/mp4">
		</video>
        <figcaption>Cutout controlled through NoiseFX.</figcaption>
    </figure>
    <figure>
		<video autoplay loop muted playsinline style="height:150px;">
			<source src="/media/cutout/paintFX.mp4" type="video/mp4">
		</video>
		<figcaption>Cutout controlled through PaintFX.</figcaption>
	</figure>
</div>

### External Lighting
External lighting affects the cast shadow (drop shadow) and bevel of the cutout, together with the overall shading of the paper sheets (canvases).

Lighting is controlled globally through the canvas light defined by the [Canvas Light Tilt](/software/MNPRX/docs/config#canvas-light-tilt) and [Canvas Light Dir](/software/MNPRX/docs/config#canvas-light-dir) attributes.

Only the two sheets of paper need to be lit within the style. There will not be any shading control within the cutout material assigned to objects in the scene.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/cutout/lighting.mp4" type="video/mp4">
	</video>
	<figcaption>Lighting affecting the Cutout stylization.</figcaption>
</figure>

------------------------
------------------------


## Style attributes

To refine and customize the cutout style, a series of global cutout attributes are provided within the [style configuration node](/software/MNPRX/docs/config#style-attributes).

<figure class="aio-ui">
    <img src="/media/cutout/style-attrs.png" alt="Style attributes">
    <figcaption>Style attributes in the configuration node</figcaption>
</figure>

### Invert
If checked, the cutout is inverted. This attribute is useful for emulating simple, two-layered paper cut animation, instead.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/cutout/invert.mp4" type="video/mp4">
	</video>
	<figcaption>Inverting the cutout effect.</figcaption>
</figure>

### Distance
Distance between the two canvases (papers). A longer distance will increase the offset of the cast shadow.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/cutout/distance.mp4" type="video/mp4">
	</video>
	<figcaption>Varying paper distance between 0 and 6</figcaption>
</figure>

### Drop Shadow
Intensity of the cast shadow.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/cutout/drop-shadow.mp4" type="video/mp4">
	</video>
	<figcaption>Drop shadow between 0 and 6</figcaption>
</figure>

### Drop Shadow Radius
Radius of the drop shadow in pixels, modifying the shadow cast by the top canvas (paper) on the bottom canvas.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/cutout/drop-shadow-radius.mp4" type="video/mp4">
	</video>
	<figcaption>Drop shadow radius between 1 and 20</figcaption>
</figure>

### Outer Bevel Shadow
Intensity of the outer bevel shadow (paper curving away from the light).

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/cutout/outer-bevel-shadow.mp4" type="video/mp4">
	</video>
	<figcaption>Outer bevel shadow between 0.0 and 1.2</figcaption>
</figure>

### Outer Bevel Highlight
Intensity of the outer bevel highlight (paper curving towards the light).

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/cutout/outer-bevel-highlight.mp4" type="video/mp4">
	</video>
	<figcaption>Outer bevel highlights between 0.0 and 2.0</figcaption>
</figure>

### Outer Bevel Radius
Radius of the outer bevel in pixels. The outer bevel simulates the paper curving near cut edges.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/cutout/outer-bevel-radius.mp4" type="video/mp4">
	</video>
	<figcaption>Outer bevel radius between 1 and 25</figcaption>
</figure>

### Cut Highlight
Intensity of the cut edge near the bevel shadow (cut edge facing the light). A value of zero means that the cut edge is invisible.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/cutout/cut-highlight.mp4" type="video/mp4">
	</video>
	<figcaption>Cut highlight between 0 and 1.0</figcaption>
</figure>

### Cut Opp. Highlight
Intensity of the cut paper edge near the bevel highlight (cut edge turning away from the light).

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/cutout/cut-opp-highlight.mp4" type="video/mp4">
	</video>
	<figcaption>Cut opposite highlight between 0 and 1.0</figcaption>
</figure>


### Gradient Shade
Intensity of the gradient shading effect. The gradient shading is a lighting gradient overlaid on the image and oriented towards the direction of the light.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/cutout/gradient-shade.mp4" type="video/mp4">
	</video>
	<figcaption>Gradient shading between 0 and 1.0. The gradient follows the direction of the Canvas Light attribute.</figcaption>
</figure>

------------------------
------------------------

<figure class="float-right aio-ui">
	<img src="/media/cutout/cutout-AE.png" alt="Cutout material node">
	<figcaption>The default cutout material in the Attribute Editor.</figcaption>
</figure>

## Cutout Material

The cutout stencil is generated by the cutout material, which needs to be set on all cutout objects. To assign this material on an object, select an object and load the "_\_cutout_" material preset (see [material presets](/software/MNPRX/docs/material-presets)).

The cutout material controls how objects affect the cutout stencil and the paper color. As with the [MNPRX uber material](/software/MNPRX/docs/uber/), the cutout material is divided in optional _Settings_ and _Attributes_.

### Settings
Closed by default, once opened, each _Setting_ allows you to customize what optional features the cutout material should have. Most of these settings are disabled by default, as to avoid unnecessary computations and clutter for artists. If needed, enabling settings will provide the necessary attributes to configure them.

#### VtxControl
Enables the control of stylization effects through the vertex colors. This attribute is automatically managed by _MNPRX_ and is activated as soon as you start using [_PaintFX_](/software/MNPRX/docs/paintfx/).

#### Colored
Overrides the color of the canvas with the color specified in the _Color Tint_ attribute, which is generated when this setting is checked.

#### Transparent
Only shows if the _Colored_ setting is checked, allows to create transparent colored cutouts. The setting creates relevant transparency attributes, [documented here](/software/MNPRX/docs/uber/#transparent).

#### Alpha
Allows the use of alpha masks to modify the cutout stencil. The setting creates relevant alpha attributes, [documented here](/software/MNPRX/docs/uber/#alpha-mask).

#### Displacement
Useful to add geometric detail, which can enhance the cutout silhouette. Displacement and its attributes are [documented here](/software/MNPRX/docs/uber/#displacement).

------------------------

### Attributes
The cutout material attributes modify the behaviour of the cutout material.

#### Cut
If checked, the material will make the object a cutout stencil. Otherwise, the object will not be cutout. This is enabled by default.

#### Cutout Mask
_Cutout Mask_ is an black and white uv-map that defines what parts of the object should be cut-out and which parts should not. This attribute toggles the use of the [_Cutout Mask File_](#cutout-mask-file).

#### Cutout Mask File
Specifies the file path to the _Cutout Mask_. In _Cutout Masks_, white is cut, whereas black is uncut. The path can be absolute or relative to the project root directory.

#### Color Tint
The color of the canvas is overridden with the custom color set by this attribute. This attribute is only available if the _Colored_ setting is enabled.

------------------

### Stylization (proc.)
When the [_NoiseFX_](./../noisefx) tool has been used on the material, the _Stylization (procedural)_ section will appear at the bottom of the _Attribute Editor_. This section contains all the procedural attributes that the _NoiseFX_ tool creates and modifies. Therefore, you can mostly ignore these attributes within the material, unless you want to key and animate them.

<figure class="aio-ui">
	<img src="/media/cutout/stylization-proc-AE.png" alt="Stylization (procedural) attributes">
	<figcaption>Some procedural stylization attributes created through NoiseFX.</figcaption>
</figure>
