### Fray

The Fray attributes allow to control globally how the frayed distortion should behave.

#### Frayed Type
The frayed type dictates where the frayed distortion should happen.

* Everything - applied everywhere
* Geometry - applied around depth differences
* Edges - applied around any recognized edge (color, normals, depth)

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/fray/frayed-type.mp4" type="video/mp4">
	</video>
	<figcaption>Cycling through Everything, Geometry and Edges</figcaption>
</figure>

#### Frayed
The amount of frayed distortion. 

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/fray/frayed.mp4" type="video/mp4">
	</video>
	<figcaption>Different frayed values</figcaption>
</figure>

#### Frayed Max Distortion
Defines the maximum amount that the frayed distortion can grow iteratively, even with art-direction.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/fray/frayed-max-distortion.mp4" type="video/mp4">
	</video>
	<figcaption>Different max-frayed values, clamping the frayed distortion.</figcaption>
</figure>

Longer frayed edges are much more prone to flicker than shorter ones.
{: .info} 

#### Frayed Feathering
Fades the frayed distortion towards the tips of the distortion.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/fray/frayed-feathering.mp4" type="video/mp4">
	</video>
	<figcaption>Frayed feathering between 0 and 1.</figcaption>
</figure>

#### Frayed Frequency
Defines the base frequency of the feature noise controlling the frayed distortion. A higher frequency will make the frayed distortion finer, whereas a lower frequency make the frayed distortion coarser.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/fray/frayed-frequency.mp4" type="video/mp4">
	</video>
	<figcaption>Frayed frequency between 0 and 100.</figcaption>
</figure>

A high frequency can cause flickering as the feature noise enters sub-pixel dimensions.
{: .info} 

#### Frayed Phase
Shifts the base feature noise value around, creating new distortions at different values.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/fray/frayed-phase.mp4" type="video/mp4">
	</video>
	<figcaption>Frayed phase between 0 and 1.</figcaption>
</figure>

#### Frayed Grain
Accumulates the color along the feature noise, generating frayed grain.

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/fray/frayed-grain.mp4" type="video/mp4">
	</video>
	<figcaption>Frayed grain between 0 and 2.</figcaption>
</figure>
