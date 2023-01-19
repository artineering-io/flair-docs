---
layout: default
title: Built-in Uniforms
parent: Shader Node
grand_parent: Flair Graph
nav_order: 3
---

# Built-in Uniforms
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

<div class="aio-uniform-list" markdown=1>

## f_position `vec2`
Unnormalized screen-space position where the origin (0.0, 0.0) is at the center.

## f_texcoord `vec2`
Screen-space texture coordinates (0.0, 0.0) for the top-left corner, (1.0, 1.0) for the bottom-right corner.

Note that this is the opposite of the usual GLSL convention (y=0.0 is bottom), but this way is more consistent with DX, Vulkan and Metal.
{: .info}

## gl_FragCoord `vec4`
Fragment position within frame buffer

## u_texel `vec2`
Size of a texel in u and v coordinates

## u_rTexel `vec2`
Size of a relative texel in u and v coordinates. A relative texel will have the value of u_texel when the image resolution width is of 1024 and will scale proportionately to the resolution.

## u_frame `float` 
Current frame number in the timeline

## u_taaSample `int`
Current TAA sample

## u_resolution `vec2`
Dimensions of the image/viewport

## u_nearClip `float`
Camera near clip plane distance

## u_farClip `float`
Camera far clip plane distance

## u_projection `mat4`
Projection transformation matrix

## u_projectionInverse `mat4`
Projection transformation matrix inverted

## u_projectionInverseTranspose `mat4`
Projection transformation matrix inverted and transposed

## u_viewProjection `mat4`
View-projection transformation matrix

## u_viewProjectionInverse `mat4`
View-projection transformation matrix inverted

## u_viewProjectionTranspose `mat4`
View-projection transformation matrix transposed

## u_viewProjectionInverseTranspose `mat4`
View-projection transformation matrix inverted and transposed

## u_worldScale `float`
World scale (how many digital units is one meter/cm?)

## u_cameraPositionWorld `vec3`
World-space position of the camera

## PI `float`
The most beautiful number: π = 3.1415926

</div>