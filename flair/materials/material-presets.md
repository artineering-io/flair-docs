---
layout: default
title: Material Presets
parent: Materials
nav_order: 1
---

_Material presets_ allow artists to create and load stylized materials within MNPRX. This tool can be opened by clicking on the `mPre` [shelf icon](../shelf).

<figure class="aio-ui">
	<img src="/media/material-presets/material-presets-2.png" alt="Material presets window">
	<figcaption>The Material presets window will look similar to this, depending on which presets you have available.</figcaption>
</figure>

A material preset contains all the available attributes found in the _[mnpr_uber](../uber)_, _[cutout](/styles/cutout#cutout-material)_, _[hatching](/styles/hatching#hatching-material)_ or the _[mnpr_geoproxy](../proxy)_ materials, together with a small thumbnail of the object assigned to it.


## Special presets
Some presets are special and have a particular functionality described below:

* _**_textured**_ preset will only set the attributes required for normal textured materials.
* _**_inherit**_ preset will replicate the attributes of whatever is already assigned to the object—thereby inheriting the old material.


## Creating presets
You can save as many presets as you want and these can be created at the top of the _Material presets_ window.
1. Name the current preset as desired in the highlighted text field
1. Press `Enter` or click on the `Save` button on the right
1. A new preset will appear in the list with all attributes found in the materials.

When you save a preset with the same name as an existing one, the previously existing preset will be overwritten.
{: .warning}


## Loading presets
Presets can be loaded at any time.
1. Select the objects which you would like assign the material to
1. Select the preset that you would like to load
1. Double click on the preset icon or click on the `Load` button at the bottom left

Be aware that loading the preset will load the material attributes on all objects that share the same material that the tool is replacing. To avoid this behavior, check the `Create new material` option within the loading options.
{: .warning}

Use the **Filter presets** field to filter material presets by name, and the drop-down on the right to filter by material type: `Uber`, `Cutout`, `Hatching` or `All` (no filter). By default, only materials corresponding to the current style are shown.
{: .info}

Above the _Filter presets_ section, the loading options give you more refined control over the loading process. These comprise the following:

* **Create new material** - will force the creation of a new material, no matter what previous material the object had. By default, if the selected object already has an MNPRX material, the existing material will be modified with the attributes of the preset.
* **Load textures** - this will load the textures of the selected preset. If you want to keep the current textures, but wish to still import the other material attributes of the preset, uncheck this box.
* **Load NoiseFX** - this will load the _NoiseFX_ of the selected preset. If you want to keep the _NoiseFX_ of the current material, but wish to still import the other material attributes of the preset, uncheck this box.
* **Load attributes** - this will load the attributes (other than textures & noiseFX) of the selected material preset. If you want to keep the current material attributes, but still wish to import textures and/or noiseFX, uncheck this box.


## Deleting presets
Presets can be deleted at any time.
1. Select the preset that you would like to delete
1. Click on the `Delete` button at the bottom right

 A deleted preset cannot be recovered by undoing changes.
 {: .warning}


## Refreshing presets
Each material preset is saved under `MNPRX/presets/materials` as a _\*.json_ and _\*.jpg_ file. Each individual installation will have their own presets, but these can also be shared if MNPRX is stored in a network folder.

If you or someone else adds/deletes/modifies presets manually within the presets folder, you need to refresh the _Material presets_ window to grab the changes made: click on the `Refresh` button at the bottom.