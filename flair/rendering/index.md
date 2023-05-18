---
layout: default
title: Rendering
nav_order: 8
has_children: true
has_toc: false
---

# Rendering
{: .no_toc }

Rendering with _Flair_ is a breeze compared to rendering with offline renderers, as every frame is calculated in real-time! In fact, some computers can take longer to save image files to disk than to render them.

There are many ways to render images out of _Maya_, but we strongly recommend the tools that we have developed to get the best and most consistent results.

* [**Viewport Renderer**](viewport), `RENDR` in the [Flair shelf](/flair/getting-started/flair-shelf/), is simple tool to render individual frames and quick playblasts. 

* [**Flair Renderer**](sequence), `SEQ` in the [Flair shelf](/flair/getting-started/flair-shelf/), is the go-to interface to render image _sequences_ and AOVs.

* [**Standalone Renderer**](standalone) allows to render in batch mode without opening the Maya interface using _mayapy_. An example script on how to use the Flair API is found under `scripts/flair_standalone.py`.

These tools will allow you to render images of up to 16K resolution  (16384×16384) with a graphics card supporting it (enough VRAM).
