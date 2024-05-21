The scene size becomes too big after using VertexFX
<div markdown="1">
This happens because Maya is not optimized to save a lot of data on vertices. Thankfully, in the [globals node](/flair/getting-started/globals/#separate-stylization), you can define to _separate the stylization_ of the scene and save it in a different file. The option `Yes, save and replace` will make your Maya scene lighter again.
</div>

Painting VertexFX is super slow
<div markdown="1">
Painting vertices on objects with many polygons can be quite slow in Maya, depending on how many vertices the object has. So, make sure you are not working in 'subdivided preview' mode ('3' on your keyboard) during painting or try separating meshes to reduce the amount of vertices that Maya needs to iterate over while painting.
</div>

Can I apply VertexFX on Nurbs or changing topology?
<div markdown="1">
This is unfortunately not possible as nurbs don't have vertices to save the painted effects onto.
</div>

Can I paint VertexFX on meshes with changing topology?
<div markdown="1">
It is possible but not recommended. If you change the topology, the vertex count will also change so you may encounter unpredictable behaviors and even Maya crashes.
</div>


