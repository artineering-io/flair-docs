---
layout: default
title: Lines
parent: Style library
grand_parent: Styles
nav_order: 7
---

# Toon and sketch lines shader style

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

<!-- 
[Back to Sketch Features](https://artineering.io/styles/warp
){: .aio-btn .d-block}
-->

## Style breakdown

The _toon_ and _sketch_ shader style is all about generating lines for all kinds of linework to outline the form of 3D geometry. From clean lines to the more rough sketch lines, you can control and art-direct them to match your artwork. The shader style also provides other painterly effects often found using traditional painting media such as pigment turbulence, canvas granulation and dry-brush.

<figure>
	<video autoplay loop muted playsinline>
		<source src="/media/release-log/1.1/lines_web.mp4" type="video/mp4">
	</video>
	<figcaption>3D model and animation by Adrian Cojocaru</figcaption>
</figure>

The lines in the toon and sketch shader style are generated from three different types of data: color, normals and depth. So, whenever there is a high enough difference between neighboring pixels of the specific data type, a line is generated. This line is then dilated to become wider or narrower and offset from its original position in the case of sketch lines.

This shader style depends on the [Flair material](/flair/materials/flair-shader), which can be assigned onto any mesh object. The material embeds painterly reflectance models and supports the art-direction framework of Flair. The material also contains a	`Animated` setting attribute, which allows to attach sketch line offsets to animated objects.

The toon and sketch line shader style may not have all features that you need. So please let us know if [we can help](https://artineering.io/agency) polish the look exactly to your requirements and pipeline.

---

## Tutorials

<div class="d-flex flex-justify-around">
{% include responsive-embed url="https://www.youtube.com/embed/videoseries?si=kyQSf-WSCExdRzL2&amp;list=PLqQsRmdLB8t_h71jiVsGcv669-eu4YNXT" width="80%" caption="Tutorial Series - All about Toon Lines in Flair for Maya" %}
</div>

---

## Attribute breakdown

In this section, we only document global attributes specific toon and sketch lines shader style. To learn more about other global attributes, please refer to the [globals node documentation](/flair/getting-started/globals).


<figure class="aio-ui">
    <img src="/media/styles/lines/style-attrs.png" alt="Style attributes">
    <figcaption>Style attributes in the configuration node</figcaption>
</figure>

---

{% include /effects/ao.md %}

---

{% include /effects/atmosphere.md %}

---

{% include /effects/toon-lines.md %}

---

{% include /effects/sketch-lines.md %}

---

{% include /effects/advanced-line-controls.md %}

---
### Others

{% include /effects/pigment.md style="watercolor" %}

---

{% include /effects/pigment-application.md style="watercolor" %}

---