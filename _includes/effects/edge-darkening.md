### Edge Darkening
Edge darkening accumulates the pigments (color) gradually towards the edges, generating darker edges.

{% if include.style == "watercolor" %}

* **Simple** - Simple control over edges defined by the colors and depth.
* **Advanced** - Advanced control over edges defined by lightness, chromacity and depth. We recommend working with this for better results.

{% endif %}

#### Edge Darkening Intensity
Strength of the edge darkening effect. A higher intensity will concentrate more color on the edges.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/styles/{{include.style}}/edge-darkening-intensity.mp4" type="video/mp4">
	</video>
	<figcaption>Edge Darkening Intensity between 0 and 3</figcaption>
</figure>

#### Edge Darkening Width
Width for the edge darkening effect.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/styles/{{include.style}}/edge-darkening-width.mp4" type="video/mp4">
	</video>
	<figcaption>Edge Darkening Width between 0 and 30</figcaption>
</figure>

Note: A wider edge darkening will require an increase in intensity, as well.
{: .info}
