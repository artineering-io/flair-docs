---
layout: default
title: Flair Shelf
parent: Getting Started
nav_order: 1
---

# Flair Maya Shelf

<figure class="">
	<img src="/media/ui/flair-shelf.png" alt="Flair shelf">
	<figcaption>The Flair shelf with its three segments: Art-direction, Lighting/Testing and Rendering.</figcaption>
</figure>

The _Flair shelf_ contains all tools required to work with Flair, separated into three segments:
1. [Art-direction](#art-direction)
2. [Lighting/Testing](#lightingtesting)
3. [Rendering](#rendering)

While most users will find themselves working with the first segment, it's important to understand what the remaining two segments are for. 

Don't like working with shelves? The last shelf tool will popup the shelf into its own window.
{: .info}
## Art-direction
The art-direction tools can be found in the left side of the shelf, ordered from highest to lowest level of control.
1. **FLAIR** - opens the browser with the [Flair documentation](/).
1. **STYLE** - opens the _Stylization Presets_ to load/save styles and their parameters [[docs](../presets)].
1. **GLOB** - selects the global node to change style attributes [[docs](../globals)].
1. **PRES** - opens the _Material Presets_ to load/save predefined Flair materials and their parameters [[docs](../material-presets)].  
1. **MAT** - selects the materials of currently selected objects or components.   
`Double click` refreshes the _Attribute Editor_ of the material, fixing any issues that might happen.  
`Right click -> Select objects with material` will select all objects that share the same material.
1. **BULK** - opens the _Bulk Attribute_ tool. An attribute editor that lets you modify multiple Flair materials at once (in bulk).
1. **NFX** - opens the _NoiseFX_ tool that lets you control effects procedurally on Flair materials [[docs](/flair/art-direction/noisefx)].
1. **VFX** - opens the _VertexFX_ window that lets you paint each effect directly onto your 3D models [[docs](../paintfx)].


## Lighting/Testing
The lighting and testing tools allow to easily create the supported lights within Flair and to troubleshoot if things are not looking quite right.
1. **Supported lights** - shelf icons for the four different supported lights: ambient, directional, point (no shadow maps) and spot light.
1. **PASS** - opens the _Pass Inspector_, which lets you toggle on/off each stylization pass and troubleshoot the inner workings of the stylization itself.
1. **TEST** - creates our favourite sphere with default lighting.


## Rendering
1. **TBOX** - opens the _Flair Toolbox_, containing useful functions to work with Flair in production [[docs](../toolbox)].
1. **FLOAT** - opens a floating viewport with a 1280 x 720 resolution.  
`Right click -> Float viewport 1024 x 540` opens a floating viewport with a 1024 x 540 resolution.  
`Right click -> Float viewport 1920 x 1080` opens a floating viewport with a 1920 x 1080 resolution (Full HD).  
`Right click -> Custom float viewport` opens a floating viewport with a custom resolution set through a small dialog.
1. **RENDR** - opens the _Viewport Renderer_, which quickly allows to save screenshots or playblasts [[docs](../rendering#rendr)].
1. **SEQ** - opens the _Sequence Renderer_, which allows to render sequences and all different passes for production [[docs](../rendering/#target-sequence-renderer)].
1. **IM/EX** - opens the _Stylization Import/Export_ tool to import or export _.style_ files [[docs](../import-export)]  
`Right click -> Custom auto-import` function found in: `flair_import_export.auto_import_style()`.  
`Right click -> Custom import` function found in: `flair_import_export.custom_import()`.  
Custom import functions can be overriden depending on the project's pipeline.
1. **SUPP.** - opens the browser straight to [support at the Artineering page](https://artineering.io/support/).

## Popup shelf
Opens a popup shelf so that you can always access the Flair tools while using other shelves.
<figure class="aio-ui aio-window">
	<img src="/media/ui/flair-popup-shelf.png" alt="Flair popup shelf">
	<figcaption>The popup shelf with all Flair tools.</figcaption>
</figure>
