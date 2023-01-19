---
layout: default
title: Read Node
parent: Flair Graph
nav_order: 4
---

# Read Node

The _read_ node can load external images onto the Flair graph. Supported formats are _*.jpg_, _*.png_ and _*.exr_. When a _read_ node is created, a file dialog will appear to select the image right away.

<figure class="aio-ui">
	<img src="/media/graph/nodes/read_params.png" alt="Read node parameters">
	<figcaption>Read node parameters when the node is selected.</figcaption>
</figure>

1. The image file path (absolute paths).
2. The button to browse for an image
3. The format that the file should be read in (the graph needs to be reconnected for changes to be made)