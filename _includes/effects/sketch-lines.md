### Sketch Lines
Additional offset lines that outline the form of the 3D geometry and are therefore generated from various AOVs. The influence of each data type to generate sketch lines can be changed in [Advanced Controls](/#advanced-controls).
The dropdown menu defines how many sketch lines are created. Note that the [Feature Noise](/flair/materials/flair-shader/#feature-noise) must be enabled in the Material Attributes, to see an effect on this selection.

#### Sketch Type
The sketch type dictates how many sketch lines will be generated.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch.mp4" type="video/mp4">
	</video>
	<figcaption>Cycling through None, One line and Two lines.</figcaption>
</figure>

#### Sketch Intensity
Strength of the generated sketch line(s). A lower intensity will alpha-blend the sketch line(s) with the render. This can also be art-directed with [VertexFX](/flair/art-direction/vertexfx/) and [NoiseFX](/flair/art-direction/noisefx/).

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-intensity.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch line intensity between 0 and 1.</figcaption>
</figure>

#### Sketchiness
Offset intensity of the sketch line(s) in relation to the outline. This can also be art-directed with [VertexFX](/flair/art-direction/vertexfx/) and [NoiseFX](/flair/art-direction/noisefx/).

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-sketchiness.mp4" type="video/mp4">
	</video>
	<figcaption>Sketchiness between 0 and 30.</figcaption>
</figure>

#### Sketchiness Max
Defines the maximum offset the generated sketch line(s) may have.

#### Sketch Width Range
The sketch line(s)' width range is directly linked to the [Line Width](/flair/styles/library/lines/#line-width) and [Line Width Range](/flair/styles/library/lines/#line-width-range).

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-range.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch width changes according to depth set in range.</figcaption>
</figure>

#### Sketch Width Factor
The sketch line(s)' width factor is directly linked to the [Line Width](/flair/styles/library/lines/#line-width) and [Line Width Factor](/flair/styles/library/lines/#line-width-factor).

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-factor.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch width changes according to multiplier set in factor.</figcaption>
</figure>

#### Sketchiness Frequency
Defines the base frequency of the feature noise controlling the sketchy offset. A higher frequency will shorten the distance between the sketch line(s) peaks, whereas a lower frequency elongates the distance, resulting in smoother and longer waves. The frequency is directly linked to the global World Scale.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-frequency.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch frequency between 0 and 10.</figcaption>
</figure>

#### Sketchiness Phase
Shifts the base feature noise value around, creating new shapes of sketch line(s) at different values. Useful when you want a different sketchy deformation or want to vary the sketchiness on a frame-by-frame basis.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-phase.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch phase between 0 and 1.</figcaption>
</figure>

{: .info}
As the sketch line(s) is generated from noise in 3D, make sure to toggle the deformed attribute in materials if they are animated/deformed so that the sketch line(s) is baked in place.

#### Sketch Density
The density of the sketch line(s), whereas a value of 1 equals the object’s color.  higher density accumulates color, thereby making the sketch line(s) darker.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-density.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch density between 0 and 3.</figcaption>
</figure>

{: .info}
To see the full effect, the [Sketch Coloration](/flair/styles/library/lines/#sketch-coloration) should be set to 0.

#### Sketch Color
Defines a custom global color for the sketch line(s). The saturation can be adjusted with the slider.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-color.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch color slider between different colors.</figcaption>
</figure>

#### Sketch Coloration
How much the sketch line(s) should be of the set _Sketch Color_. This can also be art-directed with [VertexFX](/flair/art-direction/vertexfx/) and [NoiseFX](/flair/art-direction/noisefx/). A negative art-directed coloration will bring the sketch line(s) color back to the albedo.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-coloration.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch coloration between 0 and 1 at a sketch density of 1.</figcaption>
</figure>

#### Sketch Light Response
The influence of the lighting color over the sketch line(s).

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-light.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch light response between 0 and 1.</figcaption>
</figure>