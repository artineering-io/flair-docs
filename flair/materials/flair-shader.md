---
layout: default
title: Flair shader
parent: Materials
nav_order: 2
---

# Flair Shader
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

The _Flair Shader_ material was developed to meet most painterly shading requirements, support art-direction and render the necessary AOVs (Arbitrary Object Values i.e., normals, motion vectors...) in real-time. Built from scratch using the Maya API, it was conceived for artists, offering features only when needed.

A _Flair Shader_ material has two types of 'attributes': [**Settings**](.#settings) and normal [**Attributes**](.#painterly-shading).
{: .info}

<figure class="aio-ui">
	<img src="/media/flair-shader/node-AE.png" alt="Flair Shader material node attributes">
	<figcaption>The default Flair Shader material in the Attribute Editor.</figcaption>
</figure>

The first section of a Flair Shader material within the attribute editor, provides the [**Settings**](.#settings) that allow to enable/disable what features the material should have. Therefore, we document the default material [**Attributes**](.#painterly-shading) first.

## Painterly Shading
Painterly shading attributes focus on bringing colors into the foreground of shading control and work differently than most attributes found in PBR materials. This doesn't mean that they can't be combined with normal [_Shading_](#shading) parameters, but they require 3D artists to go back to thinking in terms of colors and light. The first group of attributes control the color in the lit parts of objects, whereas the second group of attributes (from [_Colored Shading_](#colored-shading) onwards) control the color in the shade of objects.

Painterly shading attributes are baked onto albedo AOVs and can't be separated for compositing purposes.
{: .info}

### Cangiante
_Cangiante_ illumination changes the hue of the lit area towards a brighter and saturated related color. This attributes can also be used to enhance the color of any applied [_Albedo_](#albedo).
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/cangiante.mp4" type="video/mp4">
    </video>
    <figcaption>Cangiante illumination (0...2.0)</figcaption>
</figure>

### Cangiante Wrap
_Cangiante Wrap_ defines the area of effect for the [_Cangiante_](#cangiante) illumination attribute.
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/cangiante-wrap.mp4" type="video/mp4">
    </video>
    <figcaption>Cangiante Wrap (0...1.0)</figcaption>
</figure>

### Custom Light
_Custom Light_ changes the color of the lit area towards the [_Custom Light Color_](#custom-light-color).
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/light.mp4" type="video/mp4">
    </video>
    <figcaption>Custom Light (0...1.0)</figcaption>
</figure>

### Custom Light Wrap
_Custom Light Wrap_ defines the area of effect for the [_Custom Light_](#custom-light) attribute.
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/light-wrap.mp4" type="video/mp4">
    </video>
    <figcaption>Custom Light Wrap (0...1.0)</figcaption>
</figure>

### Custom Light Color
_Custom Light Color_ defines a custom color used by the [_Custom Light_](#custom-light) and [_Highlight_](#highlight) attributes.
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/light-color.mp4" type="video/mp4">
    </video>
    <figcaption>Different custom light colors</figcaption>
</figure>

### Colored Shading
_Colored Shading_ toggles colored shading of objects, which is then done with the [_Custom Shade Color_](#custom-shade-color) instead of black.
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/colored-shading.mp4" type="video/mp4">
    </video>
    <figcaption>Colored Shading on/off</figcaption>
</figure>

### Diffuse Factor
_Diffuse Factor_ defines the amount of diffuse shading within the material. `0` will be flat shading (entirely lit), `1` will be completely diffuse.
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/diffuse-factor.mp4" type="video/mp4">
    </video>
    <figcaption>Diffuse Factor (0...1.0)</figcaption>
</figure>

For scenes that require strong contrasts in shading (e.g., at night), keep the _Diffuse Factor_ close to `1`.
{: .info}

### Custom Shade
_Custom Shade_ changes the color of the shade area towards the [_Custom Shade Color_](#custom-shade-color).
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/shade.mp4" type="video/mp4">
    </video>
    <figcaption>Custom Shade (0...1.0)</figcaption>
</figure>

### Custom Shade Wrap
_Custom Shade Wrap_ defines the area of effect for the _Custom Shade_ attribute. It behaves like the [_Custom Light Wrap_](#custom-light-wrap), but for the shade of an object.
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/shade-wrap.mp4" type="video/mp4">
    </video>
    <figcaption>Custom Shade Wrap (0...1.0)</figcaption>
</figure>

### Custom Shade Color
_Custom Shade Color_ defines a custom color used by the [_Colored Shading_](#colored-shading) and the [_Custom Shade_](#custom-shade) attributes.
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/shade-color.mp4" type="video/mp4">
    </video>
    <figcaption>Different custom shade colors showcased with the Colored Shading enabled</figcaption>
</figure>

-----------------

## Shading
Shading attributes focus on common attributes found in materials, including various uses of texture mapping for different shading effects.

### Shading
_Shading_ defines the amount of shading within the material. `0` will be flat shading (entirely unlit), `1` will be shaded. It's the opposite of [_Diffuse Factor_](#diffuse-factor) and won't affect lighting from [_Light Maps_](#lightmap).
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/shading.mp4" type="video/mp4">
    </video>
    <figcaption>Shading (0...1.0)</figcaption>
</figure>

### Color Tint
_Color Tint_ defines a custom tint color. It is especially useful when mixing an additional color to the albedo color or textures. The color tint will multiply with the albedo to tint it accordingly. So, leave the color tint white if you only want the color of the albedo texture.
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/color-tint.mp4" type="video/mp4">
    </video>
    <figcaption>Different tint colors showcased with a Diffuse Factor of 0.6</figcaption>
</figure>

### Albedo
_Albedo_ contains the raw colors of the object, without any lighting information. Use a plain color or click on the checkerboard icon to select a texture.

<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/albedo-tint.mp4" type="video/mp4">
    </video>
    <figcaption>Albedo Texture with different tint colors and a Diffuse Factor of 0.85</figcaption>
</figure>

### Normal Map
_Normal Map_ is a texture which contains normal inclination deviations of the surface in the red and green channels, adding geometric detail without using polygons. Click on the checkerboard icon to select a texture.

### Bump Depth
Defines the intensity of the normal inclinations in the [_Normal Map_](#normal-map).
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/normal-map.mp4" type="video/mp4">
    </video>
    <figcaption>Normal Map with Bump Depth (0...3.0)</figcaption>
</figure>

------------------
------------------


## Settings

Additional material attributes for optional features can be created on-demand by enabling different settings.

Setting attributes are found in the first section of the _Attribute Editor_. Most settings are disabled by default, as to avoid unnecessary computations and clutter for artists. When needed, enabling settings will show the necessary attributes in the Attribute Editor, any copied tabs thereof, and in the Property Editor of the Hypershade window.

### Reflectance Model
The _Reflectance Model_ setting defines the shading algorithm used by the _Flair Shader_. A shading algorithm dictates how light is reflected along the surface of the object. Here is a visual comparison of each shading algorithm.

<figure>
    <div class="d-flex">
        <img src="/media/flair-shader/lambert.png" alt="lambert" style="height:152px">
        <img src="/media/flair-shader/half-lambert.png" alt="half-lambert" style="height:152px">
        <img src="/media/flair-shader/extended-lambert.png" alt="extended-lambert" style="height:152px">
        <img src="/media/flair-shader/angular-lambert.png" alt="angular-lambert" style="height:152px">
    </div>
	<figcaption>Available reflectance models: Lambert, Half Lambert, Extended Lambert and Angular Lambert.</figcaption>
</figure>

Some reflectance models may not be compatible with all material features on this documentation page. Only the _Lambert_ reflectance model will work with cast shadows and has been thoroughly tried and tested.
{: .warning}

------------------

### Toon Shaded

The _Toon Shaded_ setting activates toon/cell shading based on the active reflectance model. Toon shading within Flair separates the reflectance of light into three regions i.e., shade, mid and light region. Each region can be controlled through the toon shading attributes in the Attribute Editor.

<figure class="aio-ui">
	<img src="/media/flair-shader/toon-AE.png" alt="Toon Shading attributes in the Attribute Editor">
	<figcaption>The Toon Shading section in the Attribute Editor.</figcaption>
</figure>

#### Toon Shade Color
The _Toon Shade Color_ defines the color of the shade toon region.
<figure>
    <video autoplay loop muted playsinline style="height:152px">
        <source src="/media/flair-shader/toon-shade-color.mp4" type="video/mp4">
    </video>
    <figcaption>Different toon shade colors</figcaption>
</figure>

#### Toon Shade Wrap
The _Toon Shade Wrap_ defines the area of effect for the toon shade region.
<figure>
    <video autoplay loop muted playsinline style="height:152px">
        <source src="/media/flair-shader/toon-shade-wrap.mp4" type="video/mp4">
    </video>
    <figcaption>Toon shade wrap (0...1)</figcaption>
</figure>

#### Toon Shade Blur
The _Toon Shade Blur_ defines the softness between the shade and mid toon regions.
<figure>
    <video autoplay loop muted playsinline style="height:152px">
        <source src="/media/flair-shader/toon-shade-blur.mp4" type="video/mp4">
    </video>
    <figcaption>Toon shade blur (0...1)</figcaption>
</figure>

Toon region blur can also be controlled locally with VertexFX and NoiseFX, by enabling the _Toon Toolset_: `Fair Toolbox -> Toon Settings -> Toon Toolset`.
{: .info}

#### Toon Mid Color
The _Toon Mid Color_ defines the color of the mid toon region.
<figure>
    <video autoplay loop muted playsinline style="height:152px">
        <source src="/media/flair-shader/toon-mid-color.mp4" type="video/mp4">
    </video>
    <figcaption>Different toon mid colors</figcaption>
</figure>

#### Toon Mid Wrap
The _Toon Mid Wrap_ defines the area of effect for the toon mid region.
<figure>
    <video autoplay loop muted playsinline style="height:152px">
        <source src="/media/flair-shader/toon-mid-wrap.mp4" type="video/mp4">
    </video>
    <figcaption>Toon mid wrap (0.6...0...1)</figcaption>
</figure>

You can use the _Toon Mid Wrap_ attribute to reduce toon shading to only two regions instead of three.
{: .info}

#### Toon Mid Blur
The _Toon Mid Blur_ defines the softness between the mid and light toon regions.
<figure>
    <video autoplay loop muted playsinline style="height:152px">
        <source src="/media/flair-shader/toon-mid-blur.mp4" type="video/mp4">
    </video>
    <figcaption>Toon mid blur (0...1)</figcaption>
</figure>

#### Toon Light Color
The _Toon Light Color_ defines the color of the light toon region.
<figure>
    <video autoplay loop muted playsinline style="height:152px">
        <source src="/media/flair-shader/toon-light-color.mp4" type="video/mp4">
    </video>
    <figcaption>Different toon light colors</figcaption>
</figure>


---

### Transparent
The _Transparent_ setting activates the use of transparency and alpha masks in the material and toggles the attributes in the Attribute Editor.
<figure class="aio-ui">
	<img src="/media/flair-shader/transparent-AE.png" alt="Transparency and alpha masking attributes">
	<figcaption>Transparency and alpha masking section in the Attribute Editor.</figcaption>
</figure>

#### Transparency Map
_Transparency Map_ is a greyscale texture which embeds the semi-transparency of the material. Click on the checkerboard icon to select a texture.

<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/transparency-map.mp4" type="video/mp4">
    </video>
    <figcaption>Transparency Map, featuring semi-transparency.</figcaption>
</figure>

As with [_Alpha Masks_](#alpha-mask): white is opaque, grey values are semi-transparent, black is transparent. The darker the value of the _Transparency Map_, the more transparent the material will be.
{: .info}

#### Transparency
_Transparency_ defines the overall semi-transparency of the material.
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/transparency.mp4" type="video/mp4">
    </video>
    <figcaption>Transparency (0...1.0)</figcaption>
</figure>

#### Blend FX
_Blend FX_ defines if the control masks of effects (NoiseFX, VertexFX) should blend with transparency or not.

#### Blend AOVs
_Blend AOVs_ defines if AOVs (depth and normals) should blend with transparency or not. This attribute also shows the _AOV Blend_ attribute, which helps to blend AOVs further so that effects can look better on semi-transparent objects.

##### AOV Blend
_AOV Blend_, which only appears appears once _Blend AOVs_ is enabled, defines how much the AOVs should blend. A value of 0 will make the AOVs (depth and normals) of the material dissapear, while a value of 1 will blend AOVs as much as the color.

#### Alpha Mask
_Alpha Mask_ is a black and white image which embeds the alpha of the material. Alpha masks are binary and can only distinguish between opaque or fully transparent (white is opaque, black is transparent). Click on the checkerboard icon to select a texture.

Use the alpha masks if you want cast shadows to respect the transparency.
{: .info}

#### Alpha Mask Cutoff
The grayscale value at which the [_Alpha Mask_](#alpha-mask) is transparent. Defines the threshold/boundary of the alpha mask in case there are grey values.
<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/alpha-mask.mp4" type="video/mp4">
    </video>
    <figcaption>Alpha Mask with Alpha Mask Cutoff (0.1...0.9).</figcaption>
</figure>

---

### Displacement
The _Displacement_ setting activates the use of displacement within the material and toggles the attributes in the _Attribute Editor_.

<figure class="aio-ui">
	<img src="/media/flair-shader/displacement-AE.png" alt="Displacement section">
	<figcaption>The Displacement section in the Attribute Editor.</figcaption>
</figure>

_GrayScale_ is the simplest form of displacement map, in which the intensity of the map (white value) defines the amount of displacement given to the geometry.

#### Displacement Map
_Displacement Map_ is a greyscale texture which embeds the displacement in the form of a heightmap. Click on the checkerboard icon to select a texture.

#### Displacement Multiplier
_Displacement Multiplier_ defines the amount of displacement to use. The higher the value, the more displacement there will be.

<figure>
    <video autoplay loop muted playsinline style="width:152px">
        <source src="/media/flair-shader/displacement-multiplier.mp4" type="video/mp4">
    </video>
    <figcaption>Displacement Multiplier (0...0.5).</figcaption>
</figure>

#### Displacement Offset
_Displacement Offset_ offsets the displacement inward, so that displacement can be inside and outside of the object.

<figure>
    <video autoplay loop muted playsinline style="width:152px">
        <source src="/media/flair-shader/displacement-offset.mp4" type="video/mp4">
    </video>
    <figcaption>Displacement Offset (0...1.0).</figcaption>
</figure>


#### Tessellation Factor
_Tessellation Factor_ defines the amount of subdivision within each polygon. The higher the factor, the more polygons are subdivided, giving more points to displace. There is no magic number, so you will need to find out how much tessellation is enough for your displacement purposes depending on the topology of each model.  

<figure>
    <video autoplay loop muted playsinline style="width:152px">
        <source src="/media/flair-shader/tessellation-factor.mp4" type="video/mp4">
    </video>
    <figcaption>Displacement with different Tesselation Factors (1.0...10.0).</figcaption>
</figure>

---

### Light Map
The _Light Map_ setting activates the use of light maps within the material and toggles light map attributes in the Attribute Editor. 
<figure class="aio-ui">
	<img src="/media/flair-shader/light-map-AE.png" alt="Light Map attributes">
	<figcaption>The Light Map section in the Attribute Editor.</figcaption>
</figure>

#### Light Map File
_Light maps_ are grayscale texture maps that add light to the material (white is light). These can be baked from offline renderers, painted with VertexFX or assigned procedurally through NoiseFX. Click on the checkerboard icon to select a texture.

#### Shade in Light Map
If this attribute is enabled, _Light Maps_ will add both light and shade to the object. White `1.0` will add light, neutral grey `0.5` won't add anything, black `0` will add shade to the object.

<div class="d-flex">
	<figure>
		<img src="/media/flair-shader/light-map-map.png" alt="Light map used in video"  style="height: 152px">
		<figcaption>Light Map supporting Shade in Light Map.</figcaption>
	</figure>
	<figure>
		<video autoplay loop muted playsinline style="height:152px">
			<source src="/media/flair-shader/light-map.mp4" type="video/mp4">
		</video>
		<figcaption>Light Map applied.</figcaption>
	</figure>
</div>



---
<i class="fas fa-construction"></i>Documentation updated until here...

### Deformed
The _Deformed_ setting bakes the current position of vertices so that effects that rely on the 3D position of objects can stay in place when objects are animated/deformed. If this setting is not enabled, things like _NoiseFX_ or _FeatureNoise_ would float around in 3D space and not move with the objects.

------------------

### VertexFX
The _VertexFX_ setting enables the control of stylization effects through the vertex colors. This attribute is automatically managed by MNPRX and is activated as soon as you start using [_PaintFX_](./../paintfx).

------------------

### Cast-Shadows
The _Cast Shadows_ setting enables cast shadows of the material on other surfaces. If disabled, the objects with the material won't _cast_ any shadows onto other objects.

------------------

### Receive-Shadows
The _Receive Shadows_ setting enables receiving cast shadows from other objects on the material. If disabled, the objects with the material won't receive shadows from other objects.

------------------

### Flip-Back-Faces
The _Flip-Back-Faces_ setting flips the normals of faces that might be pointing away from the camera view. This is useful to obtain better results for thin objects like leaves.

------------------

### Rim light / Rim light opp.
The _Rim Light_ and _Rim light opp._ settings control the appearance of the rim lighting effect around the silhouette of objects, on areas facing respectively away and towards the light.
The settings described below are the same for both rim light (facing away) and rim light opposite (facing towards the light).

#### Rim Light
_Rim Light_ controls the intensity of the rim light. A value of `0` means that the rim light is invisible.

<div class="d-flex">
    <figure>
        <video autoplay loop muted playsinline style="width:200px">
            <source src="/media/flair-shader/rim-light.mp4" type="video/mp4">
        </video>
        <figcaption>Rim Light (0...1.0).</figcaption>
    </figure>
    <figure>
        <video autoplay loop muted playsinline style="width:200px">
            <source src="/media/flair-shader/rim-light-opp.mp4" type="video/mp4">
        </video>
        <figcaption>Rim Light Opposite (0...1.0).</figcaption>
    </figure>
</div>

#### Rim Light Wrap
_Rim Light Wrap_ defines the area of effect of the rim light.

<div class="d-flex">
    <figure>
        <video autoplay loop muted playsinline style="width:200px">
            <source src="/media/flair-shader/rim-wrap.mp4" type="video/mp4">
        </video>
        <figcaption>Rim Light Wrap (0...1).</figcaption>
    </figure>
    <figure>
        <video autoplay loop muted playsinline style="width:200px">
            <source src="/media/flair-shader/rim-wrap-opp.mp4" type="video/mp4">
        </video>
        <figcaption>Rim Light Wrap Opposite (0...1).</figcaption>
    </figure>
</div>

#### Rim Light Color
Controls the color of the rim light effect. The color is additively blended on top of the underlaying shading.

<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/rim-color.mp4" type="video/mp4">
    </video>
    <figcaption>Varying the hue of the rim light color.</figcaption>
</figure>

------------------

### Highlight
The _Highlight_ setting generates the [_Highlight Roll Off_](#highlight-roll-off) and [_Highlight Transparency_](#highlight-transparency) attributes in the _Painterly Shading_ material section. These attributes generate a sharp highlight with the [_Light Color_](#light-color).
<figure class="aio-ui">
	<img src="/media/flair-shader/highlight-AE.png" alt="Highlight attributes">
	<figcaption>The Highlight attributes in the Paintery Shading section within the Attribute Editor.</figcaption>
</figure>

#### Highlight Roll Off
_Highlight Roll Off_ defines the size of the highlight in the lit area of objects.

<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/highlight-roll-off.mp4" type="video/mp4">
    </video>
    <figcaption>Highlight Roll Off with an orange Light Color (0...1.0)</figcaption>
</figure>

#### Highlight Diffusion
_Highlight Diffusion_ defines how diffuse (blurred) the highlight should be.

<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/highlight-diffusion.mp4" type="video/mp4">
    </video>
    <figcaption>Highlight Diffusion (0...1.0)</figcaption>
</figure>

#### Highlight Transparency
_Highlight Transparency_ defines the transparency of the highlight.

<figure>
    <video autoplay loop muted playsinline style="width:200px">
        <source src="/media/flair-shader/highlight-transparency.mp4" type="video/mp4">
    </video>
    <figcaption>Highlight Transparency (0...1.0).</figcaption>
</figure>

------------------

### Specularity
The _Specularity_ setting enables the use of [specular reflectance models](#specularmodel) within the material and creates new attributes within the Shading section. Once enabled, two new settings appear underneath: [_specularModel_](#specularmodel) and [_Specular-In-Alpha_](#specular-in-alpha) (if the [_Transparent_](#transparent-and-semi-transparent) setting is also enabled).

<figure class="aio-ui">
	<img src="/media/flair-shader/specularity-AE.png" alt="Specularity settings">
	<figcaption>The Specularity settings in the Attribute Editor.</figcaption>
</figure>

### specularModel
The _specularModel_ setting defines the shading algorithm used by the _Flair Shader_ material for specularity (shininess). A shading algorithm dictates how light is reflected along the surface of the object.

<figure>
    <div class="d-flex">
        <img src="/media/flair-shader/blinn.png" alt="Blinn" style="height:152px">
        <img src="/media/flair-shader/anisotropic.png" alt="Anisotropic" style="height:152px">
	</div>
    <figcaption>Available specular reflectance models: Blinn and Anisotropic.</figcaption>
</figure>

Depending on which specular model is selected, different specularity attributes will appear in the _Shading_ section.
{: #specular-AE}

<div class="d-flex">
	<figure class="aio-ui">
		<img src="/media/flair-shader/blinn-AE.png" alt="Blinn specularity attributes">
		<figcaption>Blinn specularity attributes.</figcaption>
	</figure>
	<figure class="aio-ui">
		<img src="/media/flair-shader/anisotropic-AE.png" alt="Anisotropic specularity attributes">
		<figcaption>Red: Anisotropic specularity attributes. Cyan: Specular-In-Alpha attributes.</figcaption>
	</figure>
</div>

#### Specular Map
_Specular Map_ is a greyscale image which defines the specularity within the material. Otherwise, the specularity will be even throughout the material. This attribute toggles the use of the [_Specular Map File_](#specular-map-file).

**The specularity within the specular map is encoded within the intensity (white values) of the texture. White is specular, grey is semi-specular, black is diffuse.**
{: .info}

#### Specular Map File
Specifies the file path to the _Specular Map_. The path can be absolute or relative to the project root directory.  
<figure>
    <video autoplay loop muted playsinline style="width:152px">
        <source src="/media/flair-shader/specular-map.mp4" type="video/mp4">
    </video>
    <figcaption>(1) without specularity; (2) with specularity; (3) with specularity and a Specular Map.</figcaption>
</figure>

#### Roll Offs
_Specular Roll Off_, _Horizontal Roll Off_ and _Vertical Roll Off_ define the size of the specular highlight.

<div class="d-flex">
	<figure>
		<video autoplay loop muted playsinline style="height:152px">
			<source src="/media/flair-shader/roll-off.mp4" type="video/mp4">
		</video>
		<figcaption style="width:17em">Blinn: Roll Off (0...1.0).</figcaption>
	</figure>
	<figure>
		<video autoplay loop muted playsinline style="height:152px">
			<source src="/media/flair-shader/h-roll-off.mp4" type="video/mp4">
		</video>
		<figcaption style="width:17em">Anisotropic: Horizontal Roll Off (0...0.5).</figcaption>
	</figure>
	<figure>
		<video autoplay loop muted playsinline style="height:152px">
			<source src="/media/flair-shader/v-roll-off.mp4" type="video/mp4">
		</video>
		<figcaption style="width:17em">Anisotropic: Vertical Roll Off (0...0.5).</figcaption>
	</figure>
</div>

#### Specular Diffusion
_Specular Deffusion_ defines how diffuse or sharp a specular highlight is.

<div>
	<figure>
        <div class="d-flex">
            <video autoplay loop muted playsinline style="height:152px;">
                <source src="/media/flair-shader/blinn-diffusion.mp4" type="video/mp4">
            </video>
            <video autoplay loop muted playsinline style="height:152px;">
                <source src="/media/flair-shader/anisotropic-diffusion.mp4" type="video/mp4">
            </video>
        </div>
		<figcaption>Specular Diffusion (0...1.0).</figcaption>
	</figure>
</div>

#### Specular Transparency
_Specular Transparency_ defines the transparency of the specular highlight.

<div>
	<figure>
		<video autoplay loop muted playsinline style="height:152px">
			<source src="/media/flair-shader/specular-transparency.mp4" type="video/mp4">
		</video>
		<figcaption>Specular Transparency (0...1.0).</figcaption>
	</figure>
</div>

### Specular-In-Alpha
The _Specular-In-Alpha_ setting is only visible if the [_Specularity_](#specularity) and [_Transparent_](#transparent-and-semi-transparent) settings are enabled. The setting forces the specularity on the transparent parts of an object, which were set through the [_Alpha Mask_](#alpha-mask) attribute. The specular in alpha setting also generates the [_Alpha Tint_](#alpha-tint) attribute in the _Shading_ section ([cyan attribute](#specular-AE))

<div class="d-flex">
	<figure>
		<img src="/media/flair-shader/no-specular-in-alpha.png" alt="Without Specular-In-Alpha"  style="height: 152px">
		<figcaption>Without Specular-In-Alpha</figcaption>
	</figure>
	<figure>
		<img src="/media/flair-shader/specular-in-alpha.png" alt="With Specular-In-Alpha"  style="height: 152px">
		<figcaption>With Specular-In-Alpha</figcaption>
	</figure>
</div>

#### Alpha Tint
_Alpha Tint_ darkens the alpha parts of the material with a specified color. This attribute is especially useful for materials like tinted windows.

<div>
	<figure>
		<video autoplay loop muted playsinline style="height:152px">
			<source src="/media/flair-shader/alpha-tint.mp4" type="video/mp4">
		</video>
		<figcaption>Alpha Tint with a light red color.</figcaption>
	</figure>
</div>

------------------

### NormalMapTweaks
The _NormalMapTweaks_ setting enables more refined control over the [_Normal Map_](#normal-map) by creating the [_Invert U_ and _Invert V_](#invert) attributes within the _Shading_ section.

<figure class="aio-ui">
	<img src="/media/flair-shader/normal-map-tweaks-AE.png" alt="Normal Map Tweak attributes">
	<figcaption>Invert U and Invert V attributes created by the Normal Map Tweaks setting.</figcaption>
</figure>

#### Invert
_Invert U_ and _Invert V_ invert the normal inclinations either horizontally or vertically, respectively.

<div>
	<figure>
        <div class="d-flex">
            <video autoplay loop muted playsinline style="height:152px;">
                <source src="/media/flair-shader/invert-u.mp4" type="video/mp4">
            </video>
            <video autoplay loop muted playsinline style="height:152px;">
                <source src="/media/flair-shader/invert-v.mp4" type="video/mp4">
            </video>
        </div>
		<figcaption>Invert U and Invert V.</figcaption>
	</figure>
</div>

------------------

### FeatureNoise
The _FeatureNoise_ setting creates fractalized 3D noise that is used for styles that require it i.e., hatching.

------------------

### Color-Plane
The _Color-Plane_ setting defines a material as a color plane. Objects assigned to a color plane material won't be affected by the _Atmosphere Color_ attribute that is set in the configuration node. This allows you to use color planes at different distances from the camera, without any atmospheric tint affecting them.

------------------

### maxLights
The _maxLights_ setting defines the maximum amount of lights considered by the material for its calculations.


------------------
------------------


## NoiseFX
The _NoiseFX_ section (closed by default) at the bottom contains the attributes that are automatically set by the [_NoiseFX_](/art-direction/noisefx) tool. You can mostly ignore these attributes within the material, unless you want to key and animate NoiseFX values.

<figure class="aio-ui">
	<img src="/media/flair-shader/noisefx.png" alt="Stylization (procedural) attributes">
	<figcaption>All NoiseFX attributes</figcaption>
</figure>

------------------
------------------


## Advanced

**Modifying nodes inside of the ShaderFX material**

1. Open the [_ShaderFX graph_](#shaderfx-graph) within the desired material.
1. Change the _CustomGraph_ node at the top-level from `false` to `true`. This will avoid overwriting your changes upon a _ShaderFX_ update.
1. Modify the material to your heart's content and [create your own ShaderFX material](#creating-shaderfx), if needed.

**Set your own NoiseFX algorithms within the Flair Shader material**

1. Remember which attribute is being modified within the material's _Stylization (procedural)_ section when modifying the desired _NoiseFX_ values.
1. Open the [_ShaderFX graph_](#shaderfx-graph) within the desired material.
1. Navigate to: `Material -> ForwardRenderPasses -> Color-DiffusePass -> Control Sets -> Procedural Control -> X Procedural`, where `X` is the procedural attribute that modifies the desired effect.
1. Depending on what kind of noise algorithm you use, you can hook up your own nodes within the _Noise2D_ or _Noise3D_ node.

**Create your own ShaderFX materials**

You can create your own _ShaderFX_ materials and continue using the MNPRX tools with them.
1. [Modify](#modifying-shaderfx) the _Flair Shader_ material to create your custom _ShaderFX_ network.
1. At the top-level of the _ShaderFX_ material, set the desired name of the graph in the _GraphName_ node.
1. If previously modified, change the _CustomGraph_ node from `true` to `false`. This will enable quick _ShaderFX_ updates in the future for materials with your graph name.
1. Export the entire graph `File->Export Graph` into `MNPRX->shaders` under the new graph name.
1. Create a new preset with the [_mPre_](./../material-presets) tool

Every time you load your preset, your shaderfx graph will now be loaded.