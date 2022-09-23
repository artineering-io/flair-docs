---
layout: default
title: Bulk Attribute
parent: Art-direction Tools
nav_order: 1
---

<i class="fas fa-construction"></i> Updating soon...

The bulk attribute tool allows to easily change settings and attributes of multiple _MNPRX_ materials at the same time. Its functionality resembles the _Attribute Editor_, but it allows to modify all selected objects at once. The tool window can be opened by clicking on the `blk` [shelf icon](../shelf).

<figure class="float-right top-1 aio-ui">
	<img src="/media/bulkattr/bulkAttribute.png" alt="Bulk attribute tool">
	<figcaption>The bulk attribute tool shows all the settings and attributes of selected MNPRX materials.</figcaption>
</figure>

The settings and attributes that appear on the _Bulk Attribute_ tool depend on what materials you have selected in the scene.

By default, the tool will automatically refresh when the selection changes to show the attributes/settings of the current material selection. You can disable this behaviour by unchecking the `Auto-refresh` option within the tool and refreshing manually through the `Refresh` button.

The material will be automatically gathered from any object you currently have selected. You can disable this behaviour by unchecking `Auto-materials` at the bottom right of the UI. If disabled, you will need to select the materials yourself for the attributes/settings to appear in the _Bulk Attribute_ tool.

While all the settings and attributes of all the selected materials will show up in the tool, values will only be set in selected materials where they exist.