---
layout: default
title: Release Log
nav_order: 10
---

# Release Log
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## Flair 1.0.1
> Released 20.10.2022

Based on your feedback this first month, we are releasing our first patch update! 

We will continue releasing patch updates alongside feature updates to improve the experience of working with Flair for everyone. Don't forget to continue sharing your feedback in the [Discord server](https://discord.gg/kdTQCRM) so that we can prioritize fixes and new features.

<div class="d-flex">
	<figure>
		<video autoplay loop muted playsinline style="max-height:480px;">
			<source src="/media/release-log/1.0.1.mp4" type="video/mp4">
		</video>
    <figcaption>Steam Cowboy 3D model by Black Spire.</figcaption>
  </figure>
</div>

### Materials
* Fixed - Colored shading not working with cast shadows
* Fixed - Semi-transparent objects not contributing to cryptomattes under certain circumstances

### Shader styles
* Improved - Pigment density effect with dark colored canvases
* Improved - Coexistence of drybrush and granulation effects
* Fixed - Canvas texture dissapearing after shaders were reloaded

### Flair Graph
* Fixed - Graph not opening after changes in the graph were not saved.
* Fixed - C++ graph not loading automatically when style was changed and Graph was discarded.

More changes under the hood that will become evident in future releases.

---

## Flair 1.0.0
> Released 25.09.2022

Finally, after more than 3 years of development, MNPRX has become [Flair](https://artineering.io/flair).

This change is not only a rebranding but a whole evolution of our plugin. There are so many internal and external changes that it is impossible to write them all down here. What matters is that Flair is getting closer to our vision of our ideal stylized renderer, as seen in our new feature reel.

{% include responsive-embed url="https://www.youtube.com/embed/k4Mq0a6mewE" %}

### New Material

We developed a new real-time material from scratch outside of *Maya*’s *ShaderFX* framework. In other words we now control the entire rendering pipeline and have brought native support over new features such as light-linking, file nodes, full resolution UDIMs, hypershade previews and even render per-vertex motion vectors and crypto mattes—all in real-time in the viewport!

### New 3D Styles

All MNPRX styles have been ported over to Flair to use OpenGL instead of DirectX for future cross-platform compatibility. However, we have also created some exciting new shader styles. These include the Sketch and Cat styles as seen above. They are still evolving as we continue to refine them, so make sure to test them out and share your thoughts with us.

<div class="d-flex">
	<figure>
		<video autoplay loop muted playsinline style="max-height:350px;">
			<source src="/media/release-log/bristleback_web.mp4" type="video/mp4">
		</video>
    <figcaption>3D model by Nikolay Tsys.</figcaption>
  </figure>
  <figure>
		<video autoplay loop muted playsinline style="max-height:350px;">
			<source src="/media/release-log/cat_web.mp4" type="video/mp4">
		</video>
		<figcaption>3D model by Jose Diaz.</figcaption>
	</figure>
</div>

### Opening up our Framework

The biggest limitation of MNPRX was that you could only use the styles it came with. That starts to change with Flair, as you can use the new Flair Graph to modify and even create your own shader styles from scratch! While still in beta stages, we have decided to release it to gather feedback as soon as possible and learn your thoughts and wishes for it.

<figure>
    <img src="/media/release-log/flair-graph-beta.jpg" alt="Flair graph beta screenshot">
    <figcaption>Using the Flair graph to mix/match/write shaders to create your own style in Flair</figcaption>
</figure>

### Sharing Feedback

As a small team (currently only Santiago is at Artineering), we can’t develop all the features we wish to have at once—we need to focus our development efforts. For this purpose, we are opening a *#vote-on-features* channel on our [Discord server](https://discord.gg/kdTQCRM) to suggest, aggregate, and vote on different features to implement in Flair. The most requested features will be developed and included in future updates. So, please help us spread the word and guide our future development. 

### Demo Reel

Finally, to bid the MNPRX name farewell and welcome Flair, we have decided to release our first demo reel! After three years of existence, you have created some amazing productions, which we wish to celebrate and highlight. Thank you for using MNPRX/Flair and for your continuous support!!

{% include responsive-embed url="https://www.youtube.com/embed/R2Ibp1e7SVo" %}
