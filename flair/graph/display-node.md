---
layout: default
title: Display Node
parent: Flair Graph
nav_order: 6
---

# Display Node
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

The _display_ node can show whatever is connected to it. This helps troubleshooting shader styles and visualizing images when using the Flair Graph in standalone mode. To show the image that has been connected to it, open the node context menu by right-clicking on the node.

<figure class="aio-ui">
	<img src="/media/graph/nodes/display_context.png" alt="The display node context menu when right-clicking on the node">
	<figcaption>The context menu of a display node.</figcaption>
</figure>

## Open display panel
Click on this option to open the display panel. By default, the panel is minimized underneath the properties panel. Click-and-drag to undock the panel and resize it to accomodate the image it should display.

<figure class="aio-ui">
	<img src="/media/graph/nodes/read_display.png" alt="The connection to show the contents of a read node.">
	<figcaption>The connection to show the contents of a read node.</figcaption>
</figure>

<figure class="aio-ui">
	<img src="/media/graph/nodes/display_panel.png" alt="The display panel showing a gradient image">
	<figcaption>The display panel showing a gradient image that was just read.</figcaption>
</figure>

## Save image
Select this option to save the input image of the display node. This option can save in-between results of the graph on-demand.

The display node has an input and an output, so it can also pass through whatever input has been connected to it.
{: .info}