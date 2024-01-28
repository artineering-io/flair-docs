### Toon Lines
Toon lines can be customized in terms of intensity, width and color. Coloring of toon lines happens in the following order: [Density](#line-density), [Coloration](#line-coloration), [Light Response](#line-light-response).

#### Line Intensity
Opacity of the generated lines. A lower intensity will make the toon lines more transparent.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/line-intensity.mp4" type="video/mp4">
	</video>
	<figcaption>Line intensity between 0 and 1.</figcaption>
</figure>

As lines are generated at the middle of an edge, blending the intensity will reveal the edge underneath.
{: .info}

#### Line Width
Width of the generated toon and sketch lines. The width of lines can also be art-directed with [VertexFX](/flair/art-direction/vertexfx/) and [NoiseFX](/flair/art-direction/noisefx/).

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/line-width.mp4" type="video/mp4">
	</video>
	<figcaption>Line width between 1 and 10.</figcaption>
</figure>

#### Line Width Max
Defines the maximum width the generated toon and sketch lines may have.

#### Line Width Range
The depth range at which toon and sketch lines are widened or thinned in the scene. This attribute consists of four (4) values that define the different distances from the camera to modify the line width. From left to right: Close, Close Mid, Far Mid, Far.

Between the _Close Mid_ and _Far Mid_ distances, the global _Line Width_ that has been set will apply. Beyond these distances towards the _Close_ and _Far_ depths, the global _Line Width_ will be multiplied by the _Line Width Factor_, which is defined below.

The distances are relative to the _World Scale_ global attribute. For example, if the world scale is of _100_, a _1000_ Maya unit distance will be _10_ (1000/100). If the world scale is 1, a _1000_ Maya unit distance will be _1000_.
{: .info}

<figure class="aio-ui">
 <img src="/media/globals/line_width_range+factor.png" alt="Line Width Range and Factor Illustration">
 <figcaption>Breakdown - Line Width Range and Line Width Factor</figcaption>
</figure>

#### Line Width Factor
The factor to multiply the toon and sketch line width, depending on the distance to the camera defined in the _Line Width Range_. The first value is at _Close_ distance and the second value is at _Far_ distance. 

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/line-range-factor.mp4" type="video/mp4">
	</video>
	<figcaption>Line width changes according to the Line Width Range and Line Width Factor.</figcaption>
</figure>

You can set both of these values to 1.0 if you do not wish to modify the _Line Width_ along the depth.
{: .info}

#### Line Density
The density of the line, whereas a value of 1 equals the object's color. A higher density accumulates color making the line more saturated and darker. A lower density makes the line brighter.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/line-density.mp4" type="video/mp4">
	</video>
	<figcaption>Line density between 0 and 3.</figcaption>
</figure>

To see the full effect, the [Line Coloration](#line-coloration) and [Line Light Response](#line-light-response) should be set to 0.
{: .info}

#### Line Color
Defines a custom global color for the lines. The amount of line coloration can be adjusted with the _Line Coloration_ attribute below.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/line-color.mp4" type="video/mp4">
	</video>
	<figcaption>Changing toon line colors.</figcaption>
</figure>

#### Line Coloration
The amount of _Line Color_ that should be applied. This can also be art-directed with [VertexFX](/flair/art-direction/vertexfx/) and [NoiseFX](/flair/art-direction/noisefx/). A negative art-directed coloration will bring the line color back to the object's original color.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/line-coloration.mp4" type="video/mp4">
	</video>
	<figcaption>Line coloration between 0 and 1 at a line density of 1.</figcaption>
</figure>

#### Line Light Response
The influence lighting will have over the color of the line.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/line-light.mp4" type="video/mp4">
	</video>
	<figcaption>Line light response between 0 and 1.</figcaption>
</figure>

You can also use lines with line light response to make rim lights.
{: .info}
