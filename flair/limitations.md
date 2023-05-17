---
title: Limitations
layout: home
nav_order: 1
---

# Limitations
{: .no_toc }

## Real-time renderer
Flair is a real-time renderer, not an offline renderer. This means that there will be an inherent limitation in terms of the complexity it can render. The main bottleneck will be the amount of video ram of your GPU (VRAM).

We recommend 8GB of VRAM for 1080p (full-HD) content and more for productions that need to render at higher resolutions. Flair uses between 1.0-1.5GB of VRAM to render a 1920x1080 image. So, when rendering at 4K, Flair would take 4 times as much VRAM, leaving only a few GB left for the polygons and textures of your scene--if you only have 8GB available.

Thankfully, stylized rendering often does not require the amount of detail and complexity of photorealistic rendering. Here are a few tips to make the most of your stylized production.

* Focus on _feeling_ the scene, not describing it in detail.

* Make use of _indication_ in textures to convey and abstract unnecessary detail.

* If the background is static and the camera does not move, why are you doing it in 3D? You can paint it and use a [color plane](/flair/materials/flair-shader/#color-plane) in Flair or composit it afterwards.

Additionally, when optimizing a production for Flair, think in terms of optimizing for a game engine. Here are a few things you can do.

* Use displacement instead of adding unnecessarilly detailed geometry. GPUs nowadays can effectively tesselate geometry dynamically, allowing you to add detail only when required.

* Use single textures or texture atlases when high-resolution textures are not required. Do not load your tiled 4K UDIM textures unless you really need them.

