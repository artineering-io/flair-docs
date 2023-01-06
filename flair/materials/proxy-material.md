---
layout: default
title: Proxy material
parent: Materials
nav_order: 3
---
# Proxy Materials
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Proxy materials are invisible materials that only render to the stylization control maps within Flair, thereby only modifying effects on the final image.

Being separate stylization elements in the scene, these provide unique versatility. They can help art-direct effects at all levels of control. For example, they can affect the entire image by being placed in front of the camera as a proxy card, or affect only a specific part of the scene in 3D space by being placed in front of it. The tutorial below showcases this versatility.

{% include responsive-embed url="https://www.youtube.com/embed/A_gdVg4K7Uc" %}

The proxy material can be created and assigned from the [material presets tool](/flair/materials/presets/#special-presets) and are divided into optional _Settings_ and _Attributes_.

<figure class="aio-ui">
	<img src="/media/other-materials/proxy_AE.png" alt="Flair proxy material node">
	<figcaption>The proxy material in the Attribute Editor.</figcaption>
</figure>

The first element within the _proxy_ material is the `Open ShaderFX` button, which opens the _ShaderFX Graph_. This graph allows complete control to customize the material with nodes. The graph is intended for shader writers or advanced users who know how to manipulate and work with the _ShaderFX_ framework. Using the _ShaderFX_ framework is outside of the scope of this documentation, but you can learn a lot by watching [these tutorials](https://www.youtube.com/playlist?list=PLtiFs_CcTAQ5bewy6WwDrak9q9Pw2O6pu).

---

## Settings

The first section, when opened, provides the material **Settings** that allow to customize what optional features the _proxy_ material should have.

### VtxControl
The _VtxControl_ setting enables the control of stylization effects through the vertex colors. This attribute is automatically managed by Flair and is activated as soon as you start using [_VertexFX_](/flair/art-direction/vertexfx).

---


## Attributes
The proxy material offers only a few default parameters, as it is mostly controlled through the [_VertexFX_](/flair/art-direction/vertexfx) and [_NoiseFX_](/flair/art-direction/noisefx) tools

### Color Tint
_Color Tint_ darkens the material with a specified color. This attribute is especially useful for materials like tinted windows.

<div>
	<figure>
		<video autoplay loop muted playsinline style="height:150px">
			<source src="/media/other-materials/color-tint.mp4" type="video/mp4">
		</video>
		<figcaption>Color Tint with a light red color.</figcaption>
	</figure>
</div>

### Feathering
_Feathering_ softens the hard edges of the proxy materials to create a soft transition. This effect works best when the material is applied to round proxy objects.

<div>
	<figure>
		<video autoplay loop muted playsinline style="height:150px">
			<source src="/media/other-materials/feathering.mp4" type="video/mp4">
		</video>
		<figcaption>Feathering the Color Tint (0...3.0).</figcaption>
	</figure>
</div>

### Cookie Mask
_Cookie Mask_ is an image which contains a mask of the proxy. It is especially useful if you place a proxy plane (card) in front of the camera to create effect vignettes. This attribute toggles the use of the [_Cookie Mask File_](#cookie-mask-file).

### Cookie Mask File
Specifies the file path to the _Cookie Mask_. The path can be absolute or relative to the project root directory.  
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/other-materials/cookie-mask.mp4" type="video/mp4">
    </video>
    <figcaption>Cookie mask applied on a proxy material.</figcaption>
</figure>

### Invert Cookie
_Invert Cookie_ inverts the applied _Cookie Mask_ values.

<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/other-materials/cookie-invert.mp4" type="video/mp4">
    </video>
    <figcaption>Cookie mask inverted on a proxy material.</figcaption>
</figure>

------------------

## Stylization (procedural)
When the [_NoiseFX_](/flair/art-direction/noisefx) tool has been used on the material, the _Stylization (procedural)_ section will appear at the bottom of the _Attribute Editor_. This section contains all the procedural attributes that the _NoiseFX_ tool creates and modifies. Therefore, you can mostly ignore these attributes within the material.

<figure class="aio-ui">
	<img src="/media/other-materials/stylization_proc_AE.png" alt="Stylization (procedural) attributes">
	<figcaption>Some procedural stylization attributes created through NoiseFX.</figcaption>
</figure>