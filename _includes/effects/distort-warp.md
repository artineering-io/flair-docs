### Warp

#### Enable
Creates inflated noise instances of objects in the scene to be used for the warped stylization within Maya. You can disable this attribute if you don't want warped distortions or do not wish to see the noise covering all scene elements in normal Viewport 2.0.

#### Inflation
Amount of inflation of the noise objects, default: 0.05. Inflation is required to keep the warped distortions outside of the geometry.
<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/styles/warp/inflation.mp4" type="video/mp4">
	</video>
	<figcaption>Inflation between 0 and 0.5</figcaption>
</figure>

#### Frequency
Frequency of the warped distortions, default: 50.0.
- Higher frequency ⇒ smaller distortions
- Lower frequency ⇒ bigger distortions

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/styles/warp/frequency.mp4" type="video/mp4">
	</video>
	<figcaption>Frequency between 0 and 200</figcaption>
</figure>

Note: if the frequency is too high and the noise enters the sub-pixel size, it will flicker.
{: .warning}

#### Amplitude
Determines the amount of warp distortions, default 1.0. 

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/styles/warp/amplitude.mp4" type="video/mp4">
	</video>
	<figcaption>Varying amplitude between 0 and 10</figcaption>
</figure>

Note: Increasing the _Amplitude_ will also require a higher _Inflation_ amount.
{: .info}

#### Feathering
Determines the softness of warped distortions, default 0.0. 

<figure>
	<video autoplay loop muted playsinline>
	    <source src="/media/effects/warp/warp-feathering.mp4" type="video/mp4">
	</video>
	<figcaption>Varying amplitude between 0 and 10</figcaption>
</figure>