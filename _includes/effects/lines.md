### Lines
Lines outline the form of the 3D geometry and are therefore generated from various AOVs. The influence of each data type to generate lines can be changed in [Advanced Controls](/#advanced-controls).

#### Line Intensity
Strength of the generated lines. A lower intensity will alpha-blend the lines with the render.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/sketch/line-intensity.mp4" type="video/mp4">
	</video>
	<figcaption>Line intensity between 0 and 1.</figcaption>
</figure>

As lines are generated at the middle of an edge, blending the intensity will reveal the edge underneath.
{: .info}

#### Line Width
Width of the generated lines. This can also be art-directed with [VertexFX](/flair/art-direction/vertexfx/) and [NoiseFX](/flair/art-direction/noisefx/).

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/sketch/line-width.mp4" type="video/mp4">
	</video>
	<figcaption>Line width between 1 and 10.</figcaption>
</figure>

#### Line Width Max
Defines the maximum width the generated line may have.

#### Line Width Range
The depth range at which to control the width of lines. This attribute consists of four (4) values that define the different distances from the camera at which to modify the width of the line. From left to right: Close, Close Mid, Far Mid, Far.

Between the _Close Mid_ and _Far Mid_ distances, the global _Line Width_ will apply. Beyond these distances towards the _Close_ and _Far_ depths, the global _Line Width_ will be multiplied by the _Line Width Factor_, which is defined below.

The distances are relative to the world scale. For example, if the world scale is of _100_, a _1000_ Maya unit distance will be _10_ (1000/100). If the world scale is 1, a _1000_ Maya unit distance will be _1000_.
{: .info}

<figure class="aio-ui">
 <img src="/media/globals/line_width_range+factor.png" alt="Line Width Range and Factor Illustration">
 <figcaption>Line width Range and Factor example</figcaption>
</figure>

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/sketch/line-range.mp4" type="video/mp4">
	</video>
	<figcaption>Line width changes according to depth set in range.</figcaption>
</figure>

#### Line Width Factor
The factor to multiply the line width depending on the distance to the camera defined in the _Line Width Range_. The first value is at _Close_ distances and the second value is at _Far_ distances. 

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/sketch/line-factor.mp4" type="video/mp4">
	</video>
	<figcaption>Line width changes according to multiplier set in factor.</figcaption>
</figure>

{: .info}
You can set both of these values to 1.0 if you do not wish to modify the _Line Width_ along the depth.

#### Line Density
The density of the line, whereas a value of 1 equals the object's color. A higher density accumulates color, thereby making the line darker.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/sketch/line-density.mp4" type="video/mp4">
	</video>
	<figcaption>Line density between 0 and 3.</figcaption>
</figure>

{: .info}
To see the full effect, the [Line Coloration](/flair/styles/library/sketch/#line-coloration) should be set to 0.

#### Line Color
Defines a custom global color for the lines. The saturation can be adjusted with the slider.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/sketch/line-color.mp4" type="video/mp4">
	</video>
	<figcaption>Line color slider between different colors.</figcaption>
</figure>

#### Line Coloration
How much the lines should be of the set _Line Color_. This can also be art-directed with [VertexFX](/flair/art-direction/vertexfx/) and [NoiseFX](/flair/art-direction/noisefx/). A negative art-directed coloration will bring the line color back to the albedo.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/sketch/line-coloration.mp4" type="video/mp4">
	</video>
	<figcaption>Line coloration between 0 and 1 at a line density of 1.</figcaption>
</figure>

#### Line Light Response
The influence of the lighting color over the line.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/sketch/line-light.mp4" type="video/mp4">
	</video>
	<figcaption>Line light response between 0 and 1.</figcaption>
</figure>