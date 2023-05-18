---
layout: default
title: Flair Renderer
nav_order: 2
parent: Rendering
---

# Flair Renderer
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

The _Flair Renderer_ is a tool that allows to easily render image sequences and their AOVs. The tool itself is roughly divided into three sections: _Directory_, _AOVs to render_ and _Settings_.

<figure class="aio-ui aio-window">
	<img src="/media/rendering/seq.png" alt="Flair Renderer window">
	<figcaption>The Flair Renderer saves image sequences of any Flair AOVs.</figcaption>
</figure>

## Directory
The upper section of the _Flair Renderer_ allows you to specify where the image sequence is going to be saved in. By default, your current Maya project's directory will be set, but you can define any directory by clicking on the `Browse` button and navigating to your desired path.

If changed, the specified path will be saved within the scene globals node and be the same the next time the scene is opened.

## AOVs to render
The left section outlines all AOVs (targets) available to render.

By default, all AOVs required to replicate the shader style in compositing are pre-selected. This allows to have the same stylization in, for example, _Nuke_ and have complete freedom to push the look further in _comp_. To change the default AOVs that are pre-selected, you can modify the `maya/prefs/sequence_renderer.py` file.

When rendering multi-layer _*.exr_ images, the _outputTarget_ will always be rendered (it is computed anyways). You can render only the _outputTarget_ by toggling it in the list, which disables all other targets automatically.

Internal render targets (all except _outputTarget_) should be exported as _.exr_ to preserve the embedded linear float data of each image.
{: .info}

## Settings
The right section of the _Flair Renderer_ allows you to define all render settings. 

### Name
By default, the name is set by tags in the following way: _Scene.Camera.Frame.ext_. You can edit and customize the name any way you want, either with tags or normal characters. If the scene is not named, _Unnamed_ will be used as the scene name.

You can right click on the _line edit_ to go back to the default name, insert supported tags or clear the name entirely when needed.

<figure class="aio-ui">
	<img src="/media/rendering/naming-tags.png" alt="Right-click naming context">
	<figcaption>The naming context opened after right-clicking.</figcaption>
</figure>

If changed, the specified name will be saved within the scene globals node and be the same the next time the scene is opened.

### Folder structure
The folder stucture defines the folders that will be created within the directory. By default, only a scene folder will be created. Additional folders can be created, if desired, for each camera and target that you render. When all are enabled, the hierarchy will look like this `directory/scene/camera/target/image.ext`.

### Render settings 
The render settings customizes the _quality_, _alpha_ and _format_ of the image sequence.
* _Quality_ - Defines the quality of the viewport rendering and correlates with the [quality settings of the globals node](/flair/getting-started/globals/#quality). _TAA_ gives the best visual quality and is the default in Flair.
* _Alpha_ - Defines how the alpha (transparency) is handled in the rendered image sequence. The options are _None_ (no alpha), _Linear_ (linear alpha) and _Premult._ (premultiplied alpha).
* _Format_ - Defines the image file format to save the image sequence as i.e., _.png, .jpg, .exr, .tif, .iff_.

### Resolution
The resolution defines the resolution to render with. You can specify the width and height individually up to 16384 pixels. Just be mindful that your graphics card might not have enough VRAM to support extravagant resolutions.

By default, the render resolution is grabbed from _Maya_'s [_Render Settings_](https://help.autodesk.com/view/MAYAUL/2024/ENU/?guid=GUID-59DFB8B7-776B-4243-B404-A3D602FF8CFD) and set back accordingly if changed within the Flair Renderer.

### Frame range
The frame range defines the start and end of the sequence from the timeline, but can be set to any integer.

### Camera views
Camera views outlines the available cameras in the scene and allows you to select from which camera you want to render the sequence through. By default, all cameras set as 'renderable' in _Maya_'s [_Render Settings_](https://help.autodesk.com/view/MAYAUL/2024/ENU/?guid=GUID-59DFB8B7-776B-4243-B404-A3D602FF8CFD) will be pre-selected and changed accordingly from the Flair Renderer.

## Advaced
The advanced settings can be toggled on-demand by clicking on them.

<figure class="aio-ui">
	<img src="/media/rendering/advanced.png" alt="The advanced Flair Renderer Settings">
	<figcaption>Advanced Flair render settings.</figcaption>
</figure>

### Render each light
Render each light will render all selected AOVs for each available light. This is useful when you want intricate lighting control in _comp_. However, make sure to only render the targets that get affected by different lights to avoid saving duplicate AOVs.

### Apply color space
Applies the color space of the viewport onto the rendered image. Supported color spaces are `Raw`, `sRGB gamma`, `2.2 gamma`, `Rec 709 gamma` or `1.8 gamma`. If color space is not applied, the resulting colors will be the same as in the `Raw` color space.

When rendering the _outputTarget_, keep in mind that image formats that default to linear color representations such as _.exr_ and _.tif_ won't show the applied color space until it is set afterwards. If you don't apply the color space to them, the color space will be baked in its linear format (caution with this).
{: .info}

### Bundle AOVs in EXR
Bundles all AOVs in a single _*.exr_ image. If you want to save each image individually, uncheck this setting.

### Make deformations visible in these targets

Distortions (deformations) will always be present in the _outputTarget_, _cryptomattes_ and the _ctrlsDepthTarget_ (within the Fray style).

We want to add the ability to distort any target, but for now you can safely ignore this. A more intuitive functionality to distort AOVs will be available in future versions.
{: .warning}

## Render targets
The `Render targets` button will start rendering the target sequence with the settings you specified. You can cancel the sequence render anytime by hitting on `cancel` within the render progress dialog.