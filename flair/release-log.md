---
layout: default
title: Release Log
nav_order: 10
---
<!-- HEAD-->
<link rel="stylesheet" href="https://docs.artineering.io/assets/css/twentytwenty/twentytwenty.css" type="text/css" media="screen"/>

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
## Flair 1.1.3
> Released 12.11.2024 [[**Download**](https://artineering.io/software/flair#pricing)] 

<figure class="release-log">
<video autoplay loop muted playsinline>
	<source src="/media/release-log/1.1.3/banner_1_1_3_web.mp4" type="video/mp4">
</video>
<figcaption>3D model and animation by Jose Díaz.</figcaption>
</figure>

> Pixel pushing the envelope!

Flair 1.1.3 **improves upon toon and sketch lines**, exposes our **API to automate style import/export and preset load/save** procedures, **increases saving/importing speed** and **fixes batch rendering on Linux** along with other smaller fixes and improvements. Additionally, **all Nuke and Fusion files** have been **updated to pixel-match Flair** renders and a new **_lines_ fuse has been released**, to also apply Flair lines to passes from other renderers in DaVinci Resolve.

### Toon and Sketch lines
* *New* - Toon and Sketch lines fuse for DaVinci Resolve
* *Improved* - Sketch lines to be more solid and less fragmented
* *Fixed* - Sketch line flickering when applied onto geometry planes (high frequency might still flicker)
* *Fixed* - Rounding error causing artifacts in the Nuke comp
* *Fixed* - Sketch line artifacts when sketchiness went beyond max sketchiness value
* *Fixed* - Line clippings at some transitions of widths
* *Fixed* - Removed noise from single pixels

<figure>
    <div class="twentytwenty-container 1-1-3-comparison">
        <!-- The before image is first -->
        <img src="/media/release-log/1.1.3/nuke_1_1_2.jpg"/>
        <!-- The after image is last -->
        <img src="/media/release-log/1.1.3/nuke_1_1_3.jpg"/>
    </div>
    <figcaption>Fixed rounding errors causing artifacts in the Nuke comp (900% magnification).</figcaption>
</figure>

### NoiseFX and VertexFX
* *New* - Buttons to reset all VertexFX and NoiseFX of selected objects within the tools
* *New* - Automatically enable features in the material, if NoiseFX or VertexFX modify the feature

### Style and material presets
* *New* - Basic support for converting _Redshift_ and _usdPreviewSurface_ materials to flairShader materials
* *Improved* - Material presets show material attributes after loading
* *Improved* - Removing unnecessary warnings when loading older presets
* *Fixed* - Renaming presets not working after cancelling the operation

### Lighting
* *Improved* - Forward lighting for transparent materials when _blendAOVs_ is enabled
* *Reverted* - "Soft" cast shadow with TAA, as these were creating polygonal artifacts and shadow flickering

<figure>
    <div class="twentytwenty-container 1-1-3-comparison">
        <!-- The before image is first -->
        <img src="/media/release-log/1.1.3/lighting_1_1_2.jpg"/>
        <!-- The after image is last -->
        <img src="/media/release-log/1.1.3/lighting_1_1_3.jpg"/>
    </div>
    <figcaption>Edge case of lighting with transparency - 3D model by Gregory Khodyrev, original concept by Pascal Campion.</figcaption>
</figure>

### Rendering
* *Improved* - Render scale of "50%" with integer scaling, for better and faster results on 4K screens
* *Fixed* - Batch rendering not working on Linux
* *Fixed* - Color management not working when batch rendering

### Import/Export
* *New* - Added example to implement your own custom import/export functions within the `_custom_import_export_example.py` file
* *Fixed* - Issue where non-existing textures would auto-load on older Flair scenes.
* *Fixed* - Color management error prompt that would appear when importing a style file onto a scene that was not using _legacy sRGB_

### Installation
* *New* - Adding `FLAIR_READ_ONLY` environment variable to force read-only local installations
* *Improved* - Added fallback to accept EULA if it doesn't load on Linux

### Miscellaneous
* *Improved* - Watercolor Nuke comp
* *Improved* - Warp Nuke comp and warp fuse (DaVinci Resolve)
* *Improved* - `Flair` shelf icon renamed to `Docs` for clarity
* *Improved* - Speed while saving the Maya scene and importing the Flair style
* *Improved* - Removing trailing whitespaces from sequence render and preset names

### API
* *New* - Documentation of the Import/Export API [docs](/flair/api/import-export/)
* *New* - Documentation of the Style Presets API [docs](/flair/api/style-presets/)
* *New* - Documentation of the Material Presets API [docs](/flair/api/material-presets/)

<figure class="release-log">
<video autoplay loop muted playsinline style="max-height: 400px;">
	<source src="/media/release-log/1.1.3/api_example.mp4" type="video/mp4">
</video>
<figcaption>Demonstrating the Import/Export API - model and animation by Jose Díaz.</figcaption>
</figure>


## Flair 1.1.2
> Released 21.08.2024

<figure class="release-log">
<video autoplay loop muted playsinline>
	<source src="/media/release-log/1.1.2/banner_1_1_2_web.mp4" type="video/mp4">
</video>
<figcaption>3D model and animation by Jose Díaz.</figcaption>
</figure>

> Battle testing Flair!

Flair 1.1.2 brings a **revamped installation experience**, improved **stability and speed**, and **tons of small but useful new features** to bring effects like **wobble blur, toon/sketch lines and the fray style to the next level!** Additionally, Flair now fully **supports Maya 2025** and **runs on RHEL-based Linux distributions!** We have also included a [**new demo scene**](https://artineering.io/software/flair/demo-scenes) for Indie/Studio artists and all patreons!

Thanks to everyone for their feedback, Flair has never been this good!

### Installation
The entire installation process has been revamped to better guide the artist and added proper support for read-only installations (all-users).
- *New* - Installation UI letting you uninstall, install, and delete existing license [[docs](/flair/setup/#re-activation)]
- *New* - Specify the location of presets/preferences and canvas caches when installing for all-users [[docs](/flair/setup/#for-all-users)]
- *Improved* - Only allow to agree EULA after it has loaded
- *Improved* - New cache location for precomputed canvases

### Lines Style
* *New* - Added `Line Width Light Response` global control line thickness through lighting [[docs](/flair/styles/library/lines/#line-width-light-response)]
* *New* - Material `Offsets` to set line thresholds offsets for each material (depth, flow and color thresholds and depth bias) [[docs](/flair/materials/flair-shader/#offsets)]
* *Fixed* - In-between line width transitions looking bad
* *Fixed* - Artifacts when toon and sketch line density were set to 0.0
* *Fixed* - Pigment application affecting lines
* *Fixed* - Toggling velocity on materials affecting sketch lines
* *Fixed* - Line compositing showing dark halos
* *Improved* - Separated sketch lines in individual AOVs for better compositing
* *Improved* - Updated Nuke comps and added simplified comp for adding lines to external images
* *Improved* - Renamed `Line Width Range`  to `Line Width Depth Range` and `Line Width Factor` to `Line Width Depth Factor`

<figure class="release-log">
<video autoplay loop muted playsinline>
	<source src="/media/release-log/1.1.2/edge_width_web.mp4" type="video/mp4">
</video>
<figcaption>Before and after the new line dilation algorithm.</figcaption>
</figure>

### Fray Style
* *New* - Added `Frayed Depth Range` and `Frayed Depth Factor` global control [[docs](/flair/styles/library/fray/#frayed-depth-range)]
* *New* - Added edge width control within _VertexFX_ and _NoiseFX_

### Materials
- *New* - Added support for albedo textures with transparency [[docs](/flair/materials/flair-shader/#albedo)]
- *New* - `Wobble Blur Layers` [[docs](/flair/materials/flair-shader/#wobble-blur-layers)]
- *New* - `Offsets` setting for supported styles (depth/flow/color thresholds and depth bias) [[docs](/flair/materials/flair-shader/#offsets)]
- *New* - `Culling Mode` setting [[docs](/flair/materials/flair-shader/#culling)]
- *New* - `Light linking` setting to enable light-linking on-demand [[docs](/flair/materials/flair-shader/#light-linking)]
- *New* - `NoiseFX` setting to toggle NoiseFX within materials [[docs](/flair/materials/flair-shader/#noisefx)]
- *Improved* - Highlight diffussion not looking right
- *Improved* - Negative *Bump Depth* now flips the U normal
- *Removed* - Alternative reflectance models as they don't work with shadow maps

<figure class="release-log">
<video autoplay loop muted playsinline>
	<source src="/media/release-log/1.1.2/wobble_blur_layers_web.mp4" type="video/mp4">
</video>
<figcaption>Wobble blur layers being featured in the new demo scene.</figcaption>
</figure>

### Import/Export
- *Fixed* - Importing VertexFX erroring out on referenced materials
- *Fixed* - VertexFX sometimes not being imported correctly when materials were also imported
- *Fixed* - _OverFlowError_ in Maya 2023 and 2024 when style file becomes too big
- *Improved* - Performance of setting materials onto components
- *Improved* - Progress dialog flickering after completion
- *Improved* - Adding support for materials assigned to nurbs surfaces
- *Improved* - File dialog now opens on the last active directory
- *Improved* - Importing only to selected objects when no selection has been made shows an error

### Miscellaneous
- *Fixed* - Rendering progress bar not showing correct progress with custom frame steps
- *Improved* - Surface shaders can also be converted to Flair materials
- *Improved* - Renderer shows an error when saving with non-ASCII characters
- *Improved* - Default behavior of distorting the normalsDepth AOV will be blended
- *Improved* - Reduced small memory footprint by discarding unused render targets

<figure>
<video autoplay loop muted playsinline>
	<source src="/media/release-log/1.1.2/cranes_web.mp4" type="video/mp4">
</video>
<figcaption>Thank you for reading this far!</figcaption>
</figure>

---

## Flair 1.1.1
> Released 23.02.2024

<figure>
	<img src="/media/release-log/1.1.1/banner.gif" alt="Flair 1.1.1 banner gif"/>
    <figcaption>3D model by Marleen Vijge</figcaption>
</figure>

> The first patch update of Flair 1.1 is here!

Flair 1.1.1 **focuses on stability** but also brings sought after **updates to rendering** like the ability to **render only every X frames** and to **render any AOV with TAA and its respective effects**, i.e., geo/wobble blur. Additionally, the **Cutout shader style has been fixed**, and the **Warp shader style art-direction has been restored**, even with Arnold materials. **Crashes** happening upon opening different scenes or assigning materials to components **have been fixed**, and a lot of other bugs have been ironed out, as documented below.

**All [demo scenes](https://artineering.io/software/flair/demo-scenes)** have also been updated and optimized to work with Flair 1.1.
{: .info}

### [Flair Renderer](/flair/rendering/sequence/)
The Flair Renderer has been revamped to include the ability to render at different frame steps and to distort arbitrary AOVs. Distorted AOVs have TAA and geo/wobble blur applied to them. Within the UI, this option can be found under `Advanced->Distortion Control`. As each AOV contains different types of data, the most suitable blending option will be applied to them. However, this can still be overwritten by forcing alpha/linear blending onto them on the sequence renderer preferences or directly through the batch rendering script.

- *New* - _Frame Step_ to render only every X frames
- *New* - Render out any AOV with TAA and its respective distortions
- *New* - _Distortion Control_ toggle to show the AOV distortion checkboxes and pick the AOVs to distort
- *New* - Set which AOVs are checked to distort and to force blend by default in `flair/maya/prefs/sequence_renderer.py`
- *Improved* - [Batch rendering script](/flair/rendering/standalone/) updated to reflect the latest features.
- *Improved* - First frame has a different look than the rest of frames
- *Improved* - More accurate estimated VRAM usage in UI
- *Fixed* - _Render each light_ option showing light leaks from other lights
- *Fixed* - _Render each light_ not working with other formats except for `.exr`
- *Fixed* - _Render each light_ progress bar not reflecting the correct progress
- *Fixed* - View camera not restoring after rendering and showing an error in the script editor

<div class="d-flex flex-justify-around">
{% include responsive-embed url="https://www.youtube.com/embed/-6L4p02gdYQ" width="480px" caption="Latest rendering tutorial showcases distorted AOVS in Flair 1.1.1!" %}
</div>

### Warp Style
- *Improved* - Avoid selecting instance material with `mat` button
- *Fixed* - Warp amplitude art-direction not working
- *Fixed* - Warp style and art-direction not working with Arnold materials
- *Fixed* - Bug with endless loop when shading engine was connected, but not first plug in array
- *Fixed* - Instance rendering passes applied to all styles if instances attribute is enabled

### Material presets
- *Improved* - Setting materials to use existing shading engines instead of creating new ones
- *Improved* - Material presets also load when no materials are assigned onto objects/components
- *Fixed* - Crashes when assigning materials to components due to light linking not being updated
- *Fixed* - Default wobble and toon shading not being applied when enabled globally

### Flair Toolbox
- *Improved* - _Re-link Textures_ will prompt to select the right texture when multiple textures with the same name are found
- *Improved* - _Re-link Textures_ will relativize textures if found in the current Maya project
- *Improved* - Accurate [VRAM log](/flair/toolbox/#vram-info)

### Import/Export
- *Fixed* - Style import only on selected objects not working
- *Fixed* - Style import stuck when MFnMesh could not be attached to shape
- *Fixed* - Style import sometimes failing due to backslashes in sequence directory
- *Fixed* - ShaderFX materials being applied sometimes on old Flair scenes
- *Fixed* - Style always auto-loading after importing a *.style file with proxies
- *Fixed* - Style not saving ShaderFX materials properly
- *Fixed* - Style import stuck if a texture was previously assigned and un-assigned from an attribute

### Miscellaneous
- *New* - Nuke comp to combine toon and sketch lines with other renderers
- *New* - Flair commands in the API: [vram](/flair/api/cmds/#vram-vrm), [targetsToDistort](/flair/api/cmds/#targetstodistort-td) and [forceDistortionBlending](/flair/api/cmds/#forcedistortionblending-fdb).
- *New* - "What's New" splash window now shows direct download link for latest version if artist is using an outdated Flair version.
- *Fixed* - Crashes sometimes when opening scenes due to light linking not being updated
- *Fixed* - Cutout style - Not working correctly in Flair 1.1
- *Fixed* - Watercolor style - Rendering of cryptomattes not working
- *Fixed* - Painting VertexFX on ShaderFX materials not working (proxies, cutout and hatching materials)
- *Fixed* - Light painting not affecting painterly attributes in material
- *Fixed* - Save/replace option of _Separate Stylization_ global not sticking after being prompted to it while saving

---

## Flair 1.1
> Released 29.01.2024

<figure>
	<img src="/media/release-log/1.1/flair_1_1_banner.gif" alt="Flair 1.1 banner gif"/>
    <figcaption>3D model by Marleen Vijge</figcaption>
</figure>

The first big update of Flair is here! 

Flair 1.1 introduces production-ready **toon and sketch lines**, geometry blur for **stylized depth of field and motion blur**, and lots of **improvements to rendering, lighting, materials, presets, art-direction tools**, and more.

From now on, only **the latest three Maya versions will be supported**. Support for older versions could be added through customized development in case they are needed by studio pipelines.

Read below for a full list of changes!

### Toon Lines and Sketch Lines
The new toon and sketch lines shader style adds lines to your renders in real-time!
With extensive control and art-direction over the line intensity, width, color and sketchiness. The new lines shader style provides a powerful and intuitive way of rendering linework. Additionally, inlines (non-silhouette lines) can be art directed to either be erased or drawn when needed. Lines appear in the final rendered frame, but also draw their own separate line passes and are added to the depth, normals, velocity and cryptomatte passes to facilitate compositing. Finally, flair lines even render a custom AOV to help extract lines from other renderers.

Learn all about lines in Flair in the [documentation](/flair/styles/library/lines/) and our new tutorial series on [toon lines](https://www.youtube.com/playlist?list=PLqQsRmdLB8t_h71jiVsGcv669-eu4YNXT) and sketch lines (coming soon).

<figure>
	<video muted autoplay loop playsinline>
		<source src="/media/release-log/1.1/lines_web.mp4" type="video/mp4">
	</video>
	<figcaption>3D model and animation by Adrian Cojocaru</figcaption>
</figure>

### Geometry blur
The new geometry blur (`Geo Blur`) can generate stylized depth of field by deforming the geometry for each TAA sample in different geometric patterns (`Geo Blur Type`) according to the blur depth range (`Geo Blur Range`) and depth factors (`Geo Blur Factor`). Additionally, the geometric patterns can be randomized (`Geo Blur Randomize`) to avoid any visible repeating patterns. Geometric motion blur (`Geo Motion Blur`) can also be enabled to distort the geometry uniformly (or not uniformly if wobble is being used) along the past motion.

Learn all about geometry blur in the [documentation](/flair/getting-started/globals/#geometry-blur).

<figure>
	<video autoplay loop muted playsinline>
	  <source src="/media/globals/geo-blur.mp4" type="video/mp4">
	</video>
	<figcaption>Visualization of geo blur depth of field (icosahedron).</figcaption>
</figure>

### Flair Demo is now Flair Free
To avoid confusions regarding price and features, Flair Demo is now Flair Free. That means that you will always be able to use Flair, even after licenses may have expired. The only limitation is the rendering resolution and the Free version watermark on the top left to promote Flair.

### Rendering
- *New* - Render in batch mode (headless) without opening the Maya UI with `flair_batch.py` supporting rendering in render farms [[docs](/flair/rendering/standalone/)]
- *New* - Render Scale and TAA can now be specified separately from each other [[docs](/flair/getting-started/globals/#quality)]
- *Improved* - WYSIWYG (What You See Is What You Get) compositing when rendering with alpha as canvas color is now also composited at the end of the pipeline
- *Improved* - Added VRAM estimates at different resolutions to Flair Sequence Renderer
- *Improved* - Previous frame data available when rendering first frame
- *Improved* - Resolution independent effects scaling now depend on the maximum resolution, either vertical or horizontal
- *Fixed* - TAA ghosting when scrubbing the time slider
- *Fixed* - Negative value glitches with negative lighting
- *Fixed* - Nurbs surfaces nor appearing when renderig in Maya 2022
- *Fixed* - Crash while rendering when globals node had animation

### Lighting
- *New* - Anti-aliased shadow maps for higher quality shadows at lower resolutions
- *Improved* - Shadow map bias automatically scaling on scenes with bigger world scales
- *Fixed* - Issue with light linking not working properly when material is assigned to components (faces)
- *Fixed* - Performance issues on scenes with many objects due to light linking being updated every frame
- *Fixed* - Full support of light's shadow colors respecting light intensity and diffuse factor
- *Fixed* - Quadratic and cubic decay rates not working on lights
- *Fixed* - Negative lights not working as expected
- *Fixed* - Light color and specular reflections leaking onto cast shadows
- *Fixed* - Gamma correction on lighting for fray, hatching and sketch styles

### Materials
- *Improved* - Revamped attribute editor widgets for material settings
- *Improved* - Colored shading being dependent on the shadow color of lights, with *Shadow Color Offset* attribute replacing the previous *Colored Shading* and acting as a per material shadow color offset.
- *Improved* - The *Color Plane* attribute has been renamed to *Final Color* for better understanding of what it does.
- *Fixed* - Some objects dissapearing when the same object was connected more than once to the Shading Engine with "Mix Maya Materials" enabled
- *Fixed* - ShaderFX materials not working anymore on latest Maya versions due to bug introduced by Autodesk in this update: "MAYA-124764 - Support for multiple paths with SHADERFX_CUSTOMUSERPATH".
- *Fixed* - Crashes appening with non-standard UDIM tiling

### Presets
- *New* - Default material preset without painterly attributes
- *New* - Right click contexts to `Edit` or `Rename` presets
- *Improved* - Saving preset now prompts which material the preset should be saved from in case multiple materials are assigned to selected objects
- *Fixed* - Style presets window always reloading when opened

### Art-direction
- *New* - Added new relative phase slider to NoiseFX widgets to change the phase of the noise patterns [[docs](/flair/art-direction/noisefx/)]
- *New* - Added option to change noise type to NoiseFX widgets i.e., None, Simple (previous noise type), Cloud, Custom (can be customized in `flair/maya/shaders/material/include/noise.glsl` [`customNoise(vec4 v)`])
- *Improved* - Revamped layout of VertexFX widgets
- *Improved* - Revamped layout of NoiseFX widgets
- *Improved* - Keying of VertexFX now also works on meshes that do not contain construction history
- *Improved* - Resetting VertexFX with keyed values will now prompt if the values should be set to 0 or if the effect should be removed altogether
- *Improved* - Adding support to paint VertexfX on selected faces and edges
- *Improved* - Flair FX window title changing depending on what mode you are on (VertexFX or NoiseFX)
- *Improved* - Layout of FlairFX window containing VertexFX and NoiseFX widgets
- *Fixed* - Issue where paint icon would not toggle when activated

### Watercolor
- *Improved* - Separated art-direction of Edge Width from Edge Darkening for VertexFX and NoiseFX
- *Fixed* - Granulation art-direction not working when global was set to 0

### Toon Shading
- *New* - `Toon Smooth Lighting` has been added to smoothly interpolate toon lighting of various light sources [[docs](/flair/materials/flair-shader/#toon-smooth-lighting)]
- *Improved* - Toggling `Toon Shading` globally will prompt to toggle the `Toon Shaded` attribute on each Flair material if no material had the attribute enabled
- *Fixed* - Toon shading not responding to custom light colors
- *Fixed* - `Toon Shade Color` not working correctly

### Wobble
- *New* - Wobble blur works seamlessly with new Geo Blur
- *Improved* - Changed `Wobble Jitter` to `Wobble Blur` to be more descriptive about the visual effect
- *Improved* - Toggling `Wobble` globally will prompt to toggle wobble on each Flair material if no material has wobble enabled

### Playblasts
- *Improved* - Keeping save directory after playblasting for future playblasts
- *Fixed* - HUD appearing on playblast for certain styles and qualities

### Miscellaneous
- *Improved* - Saving speed on scenes of all sizes
- *Improved* - Revamped attribute editor widgets for global engine settings
- *Improved* - `mat` behavior of shelf tool. Clicking it selects the material of selected objects, double clicking it now changes the tab to the assigned material in the attribute editor (without changing selection). Double click with the material attributes shown will refresh the attribute editor.
- *Improved* - Speed of `Bulk Attribute` tool and small aesthetic changes
- *Improved* - Iterative filters now dynamically rebuild the pipeline as needed
- *Improved* - Flair now automatically suggests changing the default clipping planes of cameras depending on the opened/imported/referenced scene
- *Improved* - Converting to Flair materials not fetching textures within aiMultiply nodes
- *Improved* - Baked vertex position naming clashes with some pipelines
- *Fixed* - Flair not being able to load when __RenderMan__ or __Prism__ was previously installed
- *Fixed* - Delete VertexFX in Flair toolbox not changing relevant material attributes
- *Fixed* - Cluttered shading engine nodes when automatically converting Maya materials to Flair materials
- *Fixed* - Disabling velocity per material not working 


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
	$(".1-1-3-comparison").twentytwenty({
    before_label: 'Flair 1.1.2', // Set a custom before label
    after_label: 'Flair 1.1.3', // Set a custom after label
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
			<source src="/media/release-log/1.0.1/1.0.1.mp4" type="video/mp4">
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

Finally, after more than 3 years of development, MNPRX has become [Flair](https://artineering.io/software/flair).

This change is not only a rebranding but a whole evolution of our plugin. There are so many internal and external changes that it is impossible to write them all down here. What matters is that Flair is getting closer to our vision of our ideal stylized renderer, as seen in our new feature reel.

{% include responsive-embed url="https://www.youtube.com/embed/k4Mq0a6mewE" %}

### New Material

We developed a new real-time material from scratch outside of *Maya*’s *ShaderFX* framework. In other words we now control the entire rendering pipeline and have brought native support over new features such as light-linking, file nodes, full resolution UDIMs, hypershade previews and even render per-vertex motion vectors and crypto mattes—all in real-time in the viewport!

### New 3D Styles

All MNPRX styles have been ported over to Flair to use OpenGL instead of DirectX for future cross-platform compatibility. However, we have also created some exciting new shader styles. These include the Sketch and Cat styles as seen above. They are still evolving as we continue to refine them, so make sure to test them out and share your thoughts with us.

<div class="d-flex">
	<figure>
		<video autoplay loop muted playsinline style="max-height:350px;">
			<source src="/media/release-log/1.0.0/bristleback_web.mp4" type="video/mp4">
		</video>
    <figcaption>3D model by Nikolay Tsys.</figcaption>
  </figure>
  <figure>
		<video autoplay loop muted playsinline style="max-height:350px;">
			<source src="/media/release-log/1.0.0/cat_web.mp4" type="video/mp4">
		</video>
		<figcaption>3D model by Jose Diaz.</figcaption>
	</figure>
</div>

### Opening up our Framework

The biggest limitation of MNPRX was that you could only use the styles it came with. That starts to change with Flair, as you can use the new Flair Graph to modify and even create your own shader styles from scratch! While still in beta stages, we have decided to release it to gather feedback as soon as possible and learn your thoughts and wishes for it.

<figure>
    <img src="/media/release-log/1.0.0/flair-graph-beta.jpg" alt="Flair graph beta screenshot">
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