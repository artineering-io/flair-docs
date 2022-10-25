---
layout: default
title: Import/Export
parent: Styles
nav_order: 4
---

# Import/Export
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Importing and exporting the stylization is crucial for professional production workflows and can easily be done with the _Import/Export_ tool. The tool window can be opened by clicking on the `im/ex` [shelf icon](/flair/getting-started/flair-shelf/).

<figure class="float-right aio-ui">
	<img src="/media/styles/import-export/tool.png" alt="Flair Import Export Tool">
	<figcaption>The Import/Export tool.</figcaption>
</figure>

At the top of the _Import/Export_ tool, you will find the different options thereof.

* **Style** - style globals node's attributes.
* **Materials** - Flair materials with all their attributes and _NoiseFX_.
* **VertexFX** - all painted vertexFX parameters.
* **Proxies** - geometry proxies, their material and painted effect parameters.

By default, the tool will export everything and import everything (if available in the exported files) into the current scene, without changing any namespaces.


## Exporting
Exporting the stylization is straightforward:
1. Check/uncheck the different options that you wish to export
1. Check/uncheck if you want to only export the selected objects or all objects in the scene.
1. Click on the `Export` button
1. Navigate to the directory where you want to save the stylization into and `Save`.

The _Style_, _Materials_ and _VertexFX_ of the scene are saved as a _*.style_ file, whereas the _Proxies_ (if they exist) will be saved as an _*.fbx_ file.

You only need to export the first option (_Style_) to transfer the stylization to Nuke.
{: .info}


## Importing
Importing the stylization will work smoothlessly as long as the naming and hierarchy of objects is consistent.
1. Check/uncheck the different options that you wish to import
1. Check/uncheck if you want to only import onto the selected objects or all objects in the scene.
1. Click on the `Import` button
1. Navigate to the directory where you saved the stylization, select the _*.style_ file and `Open`.

### Changing namespaces

If you are importing the stylization from a scene where the assets used different namespaces, you can check the _Change namespaces upon importing_ checkbox.
1. In the _From_ field, you put the old namespaces (separate namespaces with a colon: `:`)
2. In the _To_ field, you put the new namespaces (separate namespaces with a colon: `:`)

If assets in the exported stylization didn't have any namespace, you can leave the _From_ field empty and just enter the new namespace in the _To_ field.

You can import and change multiple namespaces at the same time. If this is the case, the first namespace in the _From_ field will be changed to the first namespace in the _To_ field. The second, with the second one, and so forth.
{: .info}

## Auto import/export when saving
To reduce the Maya scene size when painting VertexFX onto referenced assets, we started  automatically saving the stylization alongside the scene. The automatically saved style shares the same name as the scene, albeit with the _.style_ extension. 

This generated _*.style_ file is saved in the same directory as the Maya scene. Being next too each other will guarantee the auto-loading of the style upon opening, importing and referencing the scene, when necessary.

Also, if for whatever any reason the style in the Maya scene gets corrupted, you can import the automatically saved _.style_ file to recover the style and art-direction.

## Importing and Exporting in custom pipelines
Custom production pipelines may have further importing and exporting requiremets. This section is meant to facilitate integration of the Flair import/export tool onto them.

### Import/Export API
The import/export tool programatically calls the `import_stylization()` and `export_stylization()` functions, which are found in the `flair_import_export.py` file within the `maya/scripts/` folder of the Flair installation. You can use these functions to create your own import and export procedures within your custom pipeline. 

The _*.style_ files that Flair uses are text files containing a python dictionary. Therefore, these files can easily be loaded by calling `eval()` on their contents.
{: .info}

### Custom imports
There are two custom import functions available for integration onto pipelines. These can be found by right clicking on the `im/ex` [shelf icon](/flair/getting-started/flair-shelf/).

<figure class="float-right aio-ui">
	<img src="/media/styles/import-export/custom.png" alt="Custom import options">
	<figcaption>Custom import options.</figcaption>
</figure>

**Custom auto-import** - `auto_import_style()`  
This function will automatically extract the asset name from the reference namespace and try to find the corresponding `*._style` file thereof. The preferences where the `*.style` file is searched in can be found in the `maya/prefs/import-export.py` file within the Flair installation.

You can override the `_post_auto_import()` function to perform any post import cleanup.

**Custom import** - `custom_import()`  
This function will perform a custom import with the namespace changes defined in the import-export preferences found in the `maya/prefs/import-export.py` file within the Flair installation.



