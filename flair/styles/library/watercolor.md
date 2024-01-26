---
layout: default
title: Watercolor
parent: Style library
grand_parent: Styles
nav_order: 2
---
<figure>
 <img src="/media/styles/watercolor/header.jpg" alt="Watercolor render">
</figure>

# Watercolor shader style
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

[Back to Watercolor Features](https://artineering.io/styles/watercolor
){: .aio-btn .d-block}

## Style breakdown

The watercolor shader style emulates traditional watercolor animation in 3D, providing art-directed control over most characteristic effects including color-bleeding, pigment turbulence, edge darkening and more.

This shader style depends on the [Flair material](/flair/materials/flair-shader), which can be assigned onto any mesh object. The material embeds painterly reflectance models and supports the art-direction framework of Flair. The framework allows to fully control the watercolor shader effects at each level of control, from the entire image using sliders to individual vertices.

The style is based on the [award-winning PhD research](https://artineering.io/publications/real-time-watercolor-rendering-of-3d-objects-and-animation-with-enhanced-control) of our founder, but each effect has been continously improved for production. While production-proven, the watercoolor shader style may not have all features that you need. So please let us know if [we can help](https://artineering.io/agency) polish the look exactly to your requirements and pipeline.

In this page, we only document global attributes specific to the watercolor shader style. To learn more about other global attributes, please see the [globals node documentation](/flair/getting-started/globals).

## Attributes

A series of watercolor attributes are provided within the globals node to control and refine the watercolor shader style.

<figure class="aio-ui">
 <img src="/media/styles/watercolor/style-attrs.png" alt="Style attributes">
 <figcaption>Style attributes in the globals node</figcaption>
</figure>

---

{% include /effects/bloom.md %}

---

{% include /effects/ao.md %}

---

{% include /effects/atmosphere.md %}

---

## Watercolor

{% include /effects/pigment.md style="watercolor" %}

---

{% include /effects/edge-darkening.md style="watercolor" %}

---

{% include /effects/bleeding.md %}

---

{% include /effects/pigment-application.md style="watercolor" %}

---

{% include /effects/gaps-overlaps.md style="watercolor" %}

---

{% include /effects/post-processing.md %}