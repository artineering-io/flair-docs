---
title: Overview
layout: home
nav_order: 0
---
# Overview
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

<!-- HEAD-->
<link rel="stylesheet" href="https://docs.artineering.io/assets/css/twentytwenty/twentytwenty.css" type="text/css" media="screen"/>

<!-- EMBED -->
<figure class="flair-hero">
    <div id="flair-comparison" class="twentytwenty-container">
        <!-- The before image is first -->
        <img src="https://docs.artineering.io/media/styles/with_flair.jpg" style="width: 100vw"/>
        <!-- The after image is last -->
        <img src="https://docs.artineering.io/media/styles/without_flair.jpg" style="width: 100vw"/>
    </div>
</figure>

<style>
    body { margin: 0 }
    .flair-hero { margin: 0; cursor: none;}
    .twentytwenty-handle { cursor: none; }
</style>

<script
  src="https://code.jquery.com/jquery-3.6.1.min.js"
  integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
  crossorigin="anonymous">
</script>

<script>
  $(function(){
    $("#flair-comparison").twentytwenty({
    move_slider_on_hover: true,
    no_overlay: true,
    });
  });
</script>

<!-- FOOTER -->
<script src="https://docs.artineering.io/assets/js/twentytwenty/jquery.event.move.js" type="text/javascript"></script>
<script src="https://docs.artineering.io/assets/js/twentytwenty/jquery.twentytwenty.js" type="text/javascript"></script>



## Flair breakdown

Flair is a **real-time stylized rendering engine** for Autodesk Maya which consists of **three core elements**

* The [**styles**](./styles) stylize images using shader pipelines.

* The [**materials**](./materials) render the 3D shading information and AOVs of objects.

* The [**art-direction tools**](./art-direction) control the different effects available for each style.

The **combination** of these core elements **make Flair a unique framework** to produce **stylized art-directed 3D graphics**.
This is **complemented by the real-time** performance making creative choices immediate, allowing you to **iterate faster towards your final vision**.

Each core element is thoroughly documented here, together with the [**setup and activation**](./setup) of Flair, the [**rendering tools**](./rendering) and other miscellaneous functions found in the [**Flair toolbox**](./toolbox).

Finally, while Flair is production-proven and continuously improved, we have made sure to also document its [**limitations**](./limitations) compared to other offline (non-realtime) renderers.

## Documentation structure

This documentation is structured to be read from top to bottom.

If you haven't installed Flair yet, we recommend starting with the Flair [setup](./setup).  
Otherwise, you can continue to [Getting Started](./getting-started) to start learning how to use Flair.

Apart from the **search bar at the top**, we've made the effort to provide some **useful features on each page** to make browsing and learning easier:
* **Table of Contents** at the top to jump to different sections of the page.
* **Hyperlink Headings** (to the left when hovering over a title) to easily share exact links to them. 
* **FAQ sections** at the bottom with the most asked questions about the topics covered in each page.

If something is missing in this documentation, feel free to reach out to us via email or Discord.
