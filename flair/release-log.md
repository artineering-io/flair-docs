---
layout: default
title: Release Log
nav_order: 10
---

# Release Log
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## Flair 1.0.3
> Released 20.04.2023

<figure>
	<video autoplay loop muted playsinline>
		<source src="/media/release-log/1.0.3/smears_release_log.mp4" type="video/mp4">
	</video>
	<figcaption>3d model/animation by Gerry Chicalo.</figcaption>
</figure>

This patch update includes the new **_Wobble_ effect**, the production-ready **_Fray_ style** (previously cat), support for the **Flair material on normal Viewport 2.0**, **multi-light fixes** across the board, the renaming of the frayed edges to **_Warp_ style**, and other fixes/improvements including **support for Maya 2024**!

Read below for a full list of changes.

### Wobble effect
The wobble effect allows for adding imperfections to shader geometry by deforming it in 3D. 
The [global](/flair/getting-started/globals/#geometry-wobble) and [per-material](/flair/materials/flair-shader/#wobble) controls customize the wobble on-demand, whereas the vertexFX and noiseFX allows to meticulously art-direct the effect.

<div class="d-flex">
	<figure style="width: 20%">
		<video autoplay loop muted playsinline>
			<source src="/media/flair-shader/wobble-frequency.mp4" type="video/mp4">
		</video>
		<figcaption>Wobble Frequency.</figcaption>
	</figure>
	<figure style="width: 20%">
		<video autoplay loop muted playsinline>
			<source src="/media/flair-shader/wobble-amplitude.mp4" type="video/mp4">
		</video>
		<figcaption>Wobble amplitude.</figcaption>
	</figure>
	<figure style="width: 20%">
		<video autoplay loop muted playsinline>
			<source src="/media/flair-shader/wobble-phase.mp4" type="video/mp4">
		</video>
		<figcaption>Wobble phase.</figcaption>
	</figure>
  	<figure style="width: 20%">
		<video autoplay loop muted playsinline>
			<source src="/media/flair-shader/wobble-jitter.mp4" type="video/mp4">
		</video>
		<figcaption>Wobble jitter.</figcaption>
	</figure>
</div>

The *amplitude* defines the amount of wobble, the *frequency* the regularity of the effect, and the *phase* the form of the wobble. Additionally, inspired by the "Painting with polygons" [paper](https://dl.acm.org/doi/10.1145/1597990.1598012) by Isaac Botkin, we added an additional jitter control to wobble differently at each TAA sample, achieving a similar effect in real-time. So, now artists can use the wobble jitter to add soft edges to the watercolor, fray, and sketch styles when needed (other shader styles are coming soon).

<div>
	<figure>
		<video autoplay loop muted playsinline>
			<source src="/media/flair-shader/wobble-motion.mp4" type="video/mp4">
		</video>
    <figcaption>Wobble motion (needs velocityPV enabled)</figcaption>
  </figure>
</div>

Wobble *motion* can also be set per material to generate motion smears. The effect can be seen in the hummingbird animation above, which is available as a [new demo scene](https://artineering.io/software/flair/demo-scenes)!

### Fray style
- *New* - The old cat style is now called the **Fray** style.
- *Improved* - Streamlined cryptomattes for production in Fray style.
- *Improved* - Polished vertexFX and noiseFX controls.
- *Improved* - Frayed feathering look.

### Warp style
- *New* - The Frayed edges style is now called the **Warp** style.
- *New* - Initial support for warped cryptomattes.
- *Fixed* - Applying of material presets not working correctly with instances enabled

### Sketch style
- *Improved* - Sketch amplitude control within NoiseFX and VertexFX.
- *Improved* - Sketch lines now present in alpha channel
- *Improved* - Edge thickness scaling under different resolutions.

### Materials
- *Improved* - Flair shader material now showing in normal Viewport 2.0.
- *Fixed* - Lighting with multiple lights not working correctly.
- *Fixed* - Color plane materials not being excluded from light compositing.
- *Fixed* - Cast shadow matte not working correctly.
- *Fixed* - "Deformed" setting not being applied to all assigned shapes in legacy *ShaderFX* materials when objects were selected.

Simple lighting comparison between previous versions and Flair 1.0.3 using directional, spot, point and ambient lights with color-plane light-shafts.

<!-- HEAD-->
<link rel="stylesheet" href="https://docs.artineering.io/assets/css/twentytwenty/twentytwenty.css" type="text/css" media="screen"/>

<figure>
    <div id="1-0-3-comparison" class="twentytwenty-container">
        <!-- The before image is first -->
        <img src="/media/release-log/1.0.3/lighting_1_0_2.jpg"/>
        <!-- The after image is last -->
        <img src="/media/release-log/1.0.3/lighting_1_0_3.jpg"/>
    </div>
    <figcaption>Comparison rendering with multiple lights.</figcaption>
</figure>

<script
  src="https://code.jquery.com/jquery-3.6.1.min.js"
  integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
  crossorigin="anonymous">
</script>

<script>
  $(function(){
    $("#1-0-3-comparison").twentytwenty({
    before_label: 'Flair 1.0.2', // Set a custom before label
    after_label: 'Flair 1.0.3', // Set a custom after label
    });
  });
</script>

### Installation
- *Fixed* - Demo license for "all users" installation not working properly
- *Fixed* - Python shell not closing when uninstalling "all users" installations
- *Fixed* - Shelf not showing when directory had emty spaces for "all users" installations
- *Fixed* - Flair shelf remaining within Maya after uninstalling "local users" installations

### Miscellaneous
- *New* - Added support for Maya 2024.
- *New* - Added global option to properly mix Flair and Maya materials. This fixes ghosting of Flair effects when Maya materials were in front of Flair materials.
- *Improved* - Alpha channel of watercolor renders for compositing.
- *Improved* - Motion vectors now available when using TAA quality.
- *Improved* - Bloom now also modifies the alpha channel and allows for compositing.
- *Improved* - "_textured" presets now prompt for a texture if no texture was present before in the material.
- *Improved* - Baking color space in exr images linearly when using the *Viewport Renderer* (not with the *Sequence Renderer*).
- *Improved* - Guaranteeing a globals node as soon as Flair renders it’s first image
- *Fixed* - Rendering with linear alpha not working correctly.
- *Fixed* - Sequence renderer not updating checked targets and file format correctly after only the *outputTarget* was being rendered.
- *Fixed* - Canvas Tile Blend not working correctly.
- *Fixed* - Inherit preset not handling normals maps properly.
- *Fixed* - VertexFX painting resetting the style every frame with TAA.
- *Fixed* - Shelf detach not working in environment with UNC paths

---

## Flair 1.0.2
> Released 08.03.2023

<div>
	<figure>
		<video autoplay loop muted playsinline style="max-height:100px;">
			<source src="https://docs.artineering.io/media/release-log/1.0.2/1_0_2.mp4" type="video/mp4">
		</video>
    <figcaption>OUT NOW!</figcaption>
  </figure>
</div>

This massive patch update focuses on fixes, stability and improvements over existing tools and styles that have been highlighted these past months. From improvements to the Sequence Renderer to accept name tags, to fixing VRAM memory leaks that happened when changing styles since the MNPR days. We are also happy to add support for Intel and AMD graphics cards! 
Read below for a full list of changes.

<div class="d-flex">
  <figure>
    <img src="/media/release-log/1.0.2/walk-cycle.gif" alt="Walk cycle demo scene in a cutout style" style="max-height:300px;">
    <figcaption>Nurbs Walk-Cycle availablle in Demo Scenes</figcaption>
  </figure>
  <figure>
	<video autoplay loop muted playsinline style="max-height:300px;">
	  <source src="/media/release-log/1.0.2/cryptomatte_update.mp4" type="video/mp4">
	  </video>
	  <figcaption>Improved Cryptomattes with TAA</figcaption>
  </figure>
</div>

### Materials
- *Fixed* - Nurbs not seen in the Flair viewport.
- *Fixed* - Cryptomatte irregularities due to first pass offsets making pixels from different passes not match.
- *Improved* - Removed *Specular in Alpha* attributes and made specularity support transparency.

### Shader styles
- *New* - Cat style - Adding experimental versions for bleeding (*Algorithm* attribute).
- *New* - Cat style - Support for resolution-independent effects.
- *Fixed* - Frayed style - Feathering effect not working.
- *Fixed* - Frayed style - Problem where meshes couldn’t be selected with camera-based selection.
- *Fixed* - Cutout style - Colored cutouts not working.
- *Fixed* - Blurry edges and cryptomatte fringe due to FXAA being active while using TAA.
- *Fixed* - Style changing not working for *Demo* versions at high resolutions.
- *Fixed* - Support for non-synthesized canvases.
- *Improved* - Making Bloom optional in shader styles.

### Sequence renderer
- *Improved* - Storing sequence renderer GUI preferences with the style.
- *Improved* - Adding name tags <> to sequence renderer name (insert via right-click).
- *Improved* - Adding time remaining to render progress dialog.
- *Fixed* - Double file extension when rendering single files.

### Flair Graph
- *New* - Added multiply color shader.
- *Fixed* - Guassian blur implementation not working with radius 0.
- *Fixed* - Ranges of Global Spinboxes being too narrow.
- *Improved* - Removed unimplemented Graph settings to avoid confusion.
- *Improved* - Updating shader dialog *Docs* button.

### Miscellaneous
- *Fixed* - *Batch Render* not working when Flair was installed.
- *Fixed* - Heads-up-display (HUD) not being removed from playblasts for non-Demo versions.
- *Fixed* - HUD appearing on presets created with the Demo version.
- *Fixed* - VertexFX brush tip not changing.
- *Fixed* - Motion vectors not showing under certain conditions.
- *Fixed* - VRAM Memory leak when unloading and reloading shader styles (leak existed since MNPR!).
- *Fixed* - Crash due to using *Point Lights* with transparent shadows enabled in *Rendering Globals*.
- *Improved* - wording in Import/Export UI.
- *Improved* - Robustness of Import/Export when mesh objects can’t be wrappend in *MFnMesh*.
- *Improved* - Adding additional resolutions for floating viewport (1080x1080, 2048 x 1152).
- *Improved* - Splash window to be non-blocking and only show once fully loaded.
- *Improved* - Splash window to only appear once per day.

**_Fixed_** - Flair not working on *Intel* and *AMD* graphics cards. We will now test before each release with the integrated Intel graphics card and our in-house AMD SteamDeck!
{: .info}

<figure>
  <img src="/media/release-log/1.0.2/steam-deck.jpg" alt="Steam Deck running Flair for Maya" style="max-height:300px;">
  <figcaption>Steam Deck running Flair for Maya on Windows.</figcaption>
</figure>

---

## Flair 1.0.1
> Released 20.10.2022

Based on your feedback this first month, we are releasing our first patch update! 

We will continue releasing patch updates alongside feature updates to improve the experience of working with Flair for everyone. Don't forget to continue sharing your feedback in the [Discord server]({{site.discord-invite}}) so that we can prioritize fixes and new features.

<div class="d-flex">
	<figure>
		<video autoplay loop muted playsinline style="max-height:480px;">
			<source src="/media/release-log/1.0.1.mp4" type="video/mp4">
		</video>
    <figcaption>Steam Cowboy 3D model by Black Spire.</figcaption>
  </figure>
</div>

### Materials
* Fixed - Colored shading not working with cast shadows.
* Fixed - Semi-transparent objects not contributing to cryptomattes under certain circumstances.

### Shader styles
* Improved - Pigment density effect with dark colored canvases.
* Improved - Coexistence of drybrush and granulation effects.
* Fixed - Canvas texture dissapearing after shaders were reloaded.

### Flair Graph
* Fixed - Graph not opening after changes in the graph were not saved.
* Fixed - C++ graph not loading automatically when style was changed and Graph was discarded.

More changes under the hood that will become evident in future releases.

---

## Flair 1.0.0
> Released 25.09.2022

Finally, after more than 3 years of development, MNPRX has become [Flair](https://artineering.io/flair).

This change is not only a rebranding but a whole evolution of our plugin. There are so many internal and external changes that it is impossible to write them all down here. What matters is that Flair is getting closer to our vision of our ideal stylized renderer, as seen in our new feature reel.

{% include responsive-embed url="https://www.youtube.com/embed/k4Mq0a6mewE" %}

### New Material

We developed a new real-time material from scratch outside of *Maya*’s *ShaderFX* framework. In other words we now control the entire rendering pipeline and have brought native support over new features such as light-linking, file nodes, full resolution UDIMs, hypershade previews and even render per-vertex motion vectors and crypto mattes—all in real-time in the viewport!

### New 3D Styles

All MNPRX styles have been ported over to Flair to use OpenGL instead of DirectX for future cross-platform compatibility. However, we have also created some exciting new shader styles. These include the Sketch and Cat styles as seen above. They are still evolving as we continue to refine them, so make sure to test them out and share your thoughts with us.

<div class="d-flex">
	<figure>
		<video autoplay loop muted playsinline style="max-height:350px;">
			<source src="/media/release-log/bristleback_web.mp4" type="video/mp4">
		</video>
    <figcaption>3D model by Nikolay Tsys.</figcaption>
  </figure>
  <figure>
		<video autoplay loop muted playsinline style="max-height:350px;">
			<source src="/media/release-log/cat_web.mp4" type="video/mp4">
		</video>
		<figcaption>3D model by Jose Diaz.</figcaption>
	</figure>
</div>

### Opening up our Framework

The biggest limitation of MNPRX was that you could only use the styles it came with. That starts to change with Flair, as you can use the new Flair Graph to modify and even create your own shader styles from scratch! While still in beta stages, we have decided to release it to gather feedback as soon as possible and learn your thoughts and wishes for it.

<figure>
    <img src="/media/release-log/flair-graph-beta.jpg" alt="Flair graph beta screenshot">
    <figcaption>Using the Flair graph to mix/match/write shaders to create your own style in Flair</figcaption>
</figure>

### Sharing Feedback

As a small team (currently only Santiago is at Artineering), we can’t develop all the features we wish to have at once—we need to focus our development efforts. For this purpose, we are opening a *#vote-on-features* channel on our [Discord server]({{site.discord-invite}}) to suggest, aggregate, and vote on different features to implement in Flair. The most requested features will be developed and included in future updates. So, please help us spread the word and guide our future development. 

### Demo Reel

Finally, to bid the MNPRX name farewell and welcome Flair, we have decided to release our first demo reel! After three years of existence, you have created some amazing productions, which we wish to celebrate and highlight. Thank you for using MNPRX/Flair and for your continuous support!!

{% include responsive-embed url="https://www.youtube.com/embed/R2Ibp1e7SVo" %}

<!-- FOOTER -->
<script src="https://docs.artineering.io/assets/js/twentytwenty/jquery.event.move.js" type="text/javascript"></script>
<script src="https://docs.artineering.io/assets/js/twentytwenty/jquery.twentytwenty.js" type="text/javascript"></script>