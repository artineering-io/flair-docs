### Lines
Lines outline the form of the 3D geometry and are therefore generated from various AOVs. The influence of each data type to generate lines can be changed in [Advanced Controls](/#advanced-controls).

#### Line Intensity
Strength of the generated lines. A lower intensity will alpha-blend the lines with the render.

As lines are generated at the middle of an edge, blending the intensity will reveal the edge underneath.
{: .info}

#### Line Width
Width of the generated lines. This can also be art-directed with [VertexFX](/flair/art-direction/vertexfx/) and [NoiseFX](/flair/art-direction/noisefx/).

#### Line Width Max
Maximum width the generated line may have.

#### Line Width Range
The depth range at which to control the width of lines. This attribute consists of four (4) values that define the different distances from the camera at which to modify the width of the line. From left to right: Close, Close Mid, Far Mid, Far.

Between the _Close Mid_ and _Far Mid_ distances, the global _Line Width_ will apply. Beyond these distances towards the _Close_ and _Far_ depths, the global _Line Width_ will be multiplied by the _Line Width Factor_, which is defined below.

The distances are relative to the world scale. For example, if the world scale is of _100_, a _1000_ Maya unit distance will be _10_ (1000/100). If the world scale is 1, a _1000_ Maya unit distance will be _1000_.
{: .info}

#### Line Width Factor
The factor to multiply the line width depending on the distance to the camera defined in the _Line Width Range_. The first value is at _Close_ distances and the second value is at _Far_ distances. 

{: .info}
You can set both of these values to 1.0 if you do not wish to modify the _Line Width_ along the depth.

#### Line Density
The density of the line, a higher density accumulates color, thereby making the line darker.

#### Line Color
A custom global color for the lines,

#### Line Coloration
How much the lines should be of the set _Line Color_. This can also be art-directed with [VertexFX](/flair/art-direction/vertexfx/) and [NoiseFX](/flair/art-direction/noisefx/). A negative art-directed coloration will bring the line color back to the albedo.

#### Line Light Response
The influence of the lighting color over the line.