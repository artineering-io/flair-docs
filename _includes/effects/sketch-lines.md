### Sketch Lines
Sketch lines can be customized in terms of number of sketch lines, intensity, width, sketchiness and color. To simplify control, the width control of sketch lines is shared with [toon lines](#line-width). The remaining controls are documented below.

[Feature Noise](/flair/materials/flair-shader/#feature-noise) attribute must be enabled in the Flair material to activate the sketch line(s) offset.
{: .info}

#### Sketch Type
The number of sketch lines that will be drawn.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch.mp4" type="video/mp4">
	</video>
	<figcaption>Cycling through None, One line and Two lines.</figcaption>
</figure>

#### Sketch Intensity
Opacity of the generated sketch line(s). A lower intensity will make the sketch lines more transparent. This can also be art-directed with [VertexFX](/flair/art-direction/vertexfx/) and [NoiseFX](/flair/art-direction/noisefx/).

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-intensity.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch line intensity between 0 and 1.</figcaption>
</figure>

#### Sketchiness
Offset of the sketch line(s) in relation to the outline. This can also be art-directed with [VertexFX](/flair/art-direction/vertexfx/) and [NoiseFX](/flair/art-direction/noisefx/). Materials should have the `Feature Noise` attribute enabled for sketchiness to work.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-sketchiness.mp4" type="video/mp4">
	</video>
	<figcaption>Sketchiness between 0 and 30.</figcaption>
</figure>

#### Sketchiness Max
Maximum offset the generated sketch line(s) may have.

#### Sketchiness Frequency
Base frequency of the feature noise controlling the sketch offsets. A higher frequency will shorten the distance between the sketch line(s) peaks, whereas a lower frequency elongates the distance, resulting in smoother and longer waves. The frequency is directly linked to the global [World Scale](/flair/getting-started/globals/#world-scale) attribute.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-frequency.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch frequency between 0 and 10.</figcaption>
</figure>

#### Sketchiness Phase
Shifts the feature noise phase, creating new shapes of sketch line(s). Useful when you want a different sketchy deformation or want to vary the sketchiness on a frame-by-frame basis.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-phase.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch phase between 0 and 1.</figcaption>
</figure>

{: .info}
As the sketch line(s) is generated from 3D noise, make sure to toggle the `Animated` attribute in materials if they are animated/deformed so that the sketch line(s) is baked in place.

#### Sketch Density
The density of the line, whereas a value of 1 equals the object's color. A higher density accumulates color making the line more saturated and darker. A lower density makes the line brighter.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-density.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch density between 0 and 3.</figcaption>
</figure>

To see the full effect, the [Sketch Coloration](#sketch-coloration) and [Sketch Light Response](#sketch-light-response) should be set to 0.
{: .info}

#### Sketch Color
Defines a custom global color for the sketch line(s). The amount of sketch line(s) coloration can be adjusted with the _Sketch Coloration_ attribute below.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-color.mp4" type="video/mp4">
	</video>
	<figcaption>Changing sketch line colors.</figcaption>
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
The influence lighting will have over the color of the sketch line(s).

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/lines/sketch-light.mp4" type="video/mp4">
	</video>
	<figcaption>Sketch light response between 0 and 1.</figcaption>
</figure>

You can also use sketch lines with sketch light response to make sketchy rim lights.
{: .info}