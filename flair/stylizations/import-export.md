---
layout: default
title: Import/Export Tool
parent: Stylizations
nav_order: 2
---

Importing/exporting the stylization is crucial for professional production workflows and can be done with the _Import/Export Tool_. The tool windowcan be opened by clicking on the `im/ex` [shelf icon](../shelf).

<figure class="float-right aio-ui">
	<img src="/media/stylizations/import-export.png" alt="Flair Toolbox">
	<figcaption>The Import/Export tool.</figcaption>
</figure>

At the top of the _Import/Export Tool_, you will find the different options thereof.

* **Style** - _mnprConfig_ node attributes.
* **Materials** - MNPRX materials with _NoiseFX_ and material attributes.
* **PaintFX** - all painted effect parameters.
* **Proxies** - the geometry proxies, their material and painted effect parameters.

By default, the tool will export everything and import everything (if available in the exported files) into the current scene, without changing any namespaces.


## Exporting
Exporting the stylization is quite intuitive:
1. Check/uncheck the different options that you wish to export
1. Check/uncheck if you want to only export the selected objects or all objects in the scene.
1. Click on the `Export` button
1. Navigate to the directory where you want to save the stylization into and `Save`.

The _Style_, _Materials_ and _PaintFX_ are saved as a _*.json_ file, whereas the _Proxies_ (if they exist) will be saved as an _*.fbx_ file. These two files should always be in the same directory (folder) to be imported back successfully.

You only need to export the _Style_ to transfer the stylization to [Nuke](../compositing-nuke).
{: .info}


## Importing
Importing the stylization should always work, as long as the naming of objects is consistent.
1. Check/uncheck the different options that you wish to import
1. Check/uncheck if you want to only import onto the selected objects or all objects in the scene.
1. Click on the `Import` button
1. Navigate to the directory where you saved the stylization, select the _*.json_ file and `Open`.

The stylization can also be imported on scenes where there are no prior MNPRX materials, as long as names of the mesh objects remain consistent.
{: .info}


-> YOUTUBE EMBEDDED <-


### Changing namespaces

If you are importing the stylization from a scene that used different namespaces, you can check the _Change namespaces upon importing_ checkbox.
1. In the _From_ field, you put the old namespaces (separate namespaces with a colon: `:`)
2. In the _To_ field, you put the new namespaces (separate namespaces with a colon: `:`)

The first namespace in the _From_ field will be changed to the first namespace in the _To_ field. The second, with the second one, and so forth.
{: .warning}


-> YOUTUBE EMBEDDED <-

