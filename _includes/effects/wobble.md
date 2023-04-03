### Geometry Wobble
Geometry wobble adds imperfections by deforming the geometry in 3D. Enabling this attribute will show the wobble controls in the globals node (see below) and the wobble widgets in the NoiseFX and VertexFX tools.

<figure class="aio-ui">
	<img src="/media/effects/wobble/wobble-attrs.png" alt="Global wobble attributes in the Attribute Editor">
	<figcaption>The global wobble attributes in the Attribute Editor.</figcaption>
</figure>

In case you can't see the wobble effect, make sure Flair materials also have their wobble attribute enabled.

Once the wobble attribute has been enabled globally, material presets will default as wobbled.
{: .info}

#### Wobble Amplitude
Defines the amount of wobble. The amount is also directly linked to the global [World Scale](/flair/getting-started/globals/#world-scale).

#### Wobble Frequency
Defines the regularity of the effect. A higher frequency will make the wobble more "irregular", whereas a lower frequency will make it more "regular".

#### Wobble Phase
Defines the form of the wobble. Useful when you want a different wobble deformation or want to vary the wobble on a frame-by-frame basis.

As wobble is generated from noise in 3D, make sure to toggle the *deformed* attribute in materials if they are animated/deformed so that the wobble is baked in place.
{:.info}

#### Wobble Jitter (TAA)
Defines the amount of jitter for each TAA sample, generating a soft edge by avaraging different wobble positions. This was inspired by the "Painting with polygons" [paper](https://dl.acm.org/doi/10.1145/1597990.1598012) by Isaac Botkin. 

