Can I change the type of noise that NoiseFX uses?
<div markdown="1">
Yes, you can write your own noise function for the _Custom_ noise type. However, you will need to modify the material glsl shader code to do so at `flair/maya/shaders/material/include/noise.glsl` [`customNoise(vec4 v)`].  
</div>