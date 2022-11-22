---
layout: default
title: Style Presets
parent: Styles
nav_order: 1
---

# Style Presets
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

_Style presets_ allow artists to easily switch between styles and their attributes within Flair. The tool can be opened by clicking on the `STYLE` [shelf icon](/flair/getting-started/flair-shelf/).

<figure class="aio-ui">
	<img src="/media/style-presets/presets.png" alt="Style presets window">
	<figcaption>The Style presets window will look similar to this, depending on which presets you have available.</figcaption>
</figure>

A style preset contains all the attributes found in the Flair [globals node](/flair/getting-started/globals/) (the node that gets selected when you press the `GLOB` [shelf icon](/flair/getting-started/flair-shelf/)), together with a small thumbnail of the current view.


## Saving presets
You can save as many presets as you want and these can be created at the top of the _Style presets_ window.
1. Name the current preset as desired in the "New preset name" text field
2. Press `Enter` or click on the `Save` button on the right
3. A new preset will appear that saved all attribute values of the globals node.

When you save a preset with the same name as an existing one, the previously existing preset will be overwritten.
{: .warning}


## Loading presets
Presets can be loaded into the current scene at any time.
1. Select the preset that you would like to load
2. Double click on the preset icon or click on the `Load` button at the bottom left

### Loading options
The loading options give you more refined control over the loading process:

* **Load world scale** - Whether to load the _World Scale_ attribute from the style. By default this is unchecked and the current world scale will be preserved when loading the style.
* **Load quality** -  Whether to load the _Quality_ attribute from the style. If this is unchecked, the current quality setting will be preserved when loading the style.
* **Load attributes** - Whether to load the main attributes of the style preset. This is on by default, but you can uncheck this option if you want to load only the canvas attributes.
* **Load canvases** - Whether to load the canvas-related attributes. If this is unchecked, the current canvas attributes will be preserved when loading the style.

Underneath the loading options is a field to **filter presets** by name, and the drop-down on the right to filter by style. This is especially useful when working with a lot of presets.

## Deleting presets
Presets can be deleted at any time.
1. Select the preset that you would like to delete
2. Click on the `Delete` button at the bottom right

 A deleted preset cannot be recovered by undoing changes.
 {: .warning}

## Refreshing presets
Each style preset is saved under `Flair/maya/presets/styles` as a _\*.json_ and _\*.jpg_ file. Each individual installation will have their own presets, but these can also be shared if Flair is stored in a shared/network folder.

If you or someone else adds/deletes/modifies presets manually within the presets folder, you need to refresh the _Style presets_ window to grab the changes made: click on the `Refresh` button at the bottom.