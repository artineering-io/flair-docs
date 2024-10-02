---
layout: default
title: CMDS
parent: API
nav_order: 1
---

# CMDS
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

The Flair commands allow to directly interact with the C++ plugin mainly to query engine settings and execute renders.

## Flair for Maya
### Commands
<div class="api-cmds" markdown="1">
<div class="maya-api-flag api-header" markdown="1">
#### Long name (short name)
{: .no_toc }

Argument types

Properties
</div>


<div class="maya-api-flag" markdown="1">
#### alpha  (a)  
int

C
</div>
Toggles different alpha modes.  
* 0 - No alpha
* 1 - Linear alpha
* 2 - Premultiplied alpha


<div class="maya-api-flag" markdown="1">
#### benchmark (bch)
int

C
</div>
Performs a benchmark for the amount of frames requested.


<div class="maya-api-flag" markdown="1">
#### channels (ch)
list

C
</div>
Enables/disables visualization of RGBA channels in Flair. 

Note: enabling alpha (A) channel will override all other channels.


<div class="maya-api-flag" markdown="1">
#### cryptomattes (cry)
bool

C
</div>
Toggles rendering of cryptomattes in Flair.


<div class="maya-api-flag" markdown="1">
#### environment (env)
bool, string

C
</div>
Returns the path to the Flair environment or to a folder within the Flair environment.


<div class="maya-api-flag" markdown="1">
#### forceDistortionBlending (fDB)
list

C
</div>
Targets (AOVs) to force alpha blending of distortions onto.

By default, different blending modes are applied depending on the type of data within the AOV--as alpha blending depth, normals or world positions is normally of little use.

This flag can be used to override target-specific blending behavior and force alpha blending onto it. 

> Note: This flag will only work when set together with the _targetsToDistort_ flag.


<div class="maya-api-flag" markdown="1">
#### listOperations (lsO)
bool

C
</div>
Returns the list of render operations currently in use within Flair.


<div class="maya-api-flag" markdown="1">
#### listTargets (lsT)
bool

C
</div>
Returns the list of render targets currently in use within Flair.


<div class="maya-api-flag" markdown="1">
#### refresh (r)
bool

C
</div>
Reloads (recompiles) all post-processing shaders in Flair, refreshing the style.


<div class="maya-api-flag" markdown="1">
#### reloadOperationShaders (rOS)
int

C
</div>
Reloads (recompiles) the shader used by the specified render operation in Flair.


<div class="maya-api-flag" markdown="1">
#### render (rnd)
string

C
</div>
Filepath to render (save) image as.

Use in combination with the _target_ flag to specify what targets to render. 


<div class="maya-api-flag" markdown="1">
#### renderOperation (rOp)
int

C
</div>
Returns if the specified render operation is enabled or disabled.

Use in combination with the _state_ flag to enable/disable operation. 


<div class="maya-api-flag" markdown="1">
#### renderState (rS)
bool

C
</div>
Toggles the render state of Flair on/off.  
Use in combination with the _resolution_ flag to render at different resolutions. 


<div class="maya-api-flag" markdown="1">
#### resolution (res)
list

C Q
</div>
In query mode: returns the resolution Flair is rendering in (without render scale).

In combination with the renderState flag: Sets the rendering resolution in Flair.


<div class="maya-api-flag" markdown="1">
#### state (s)
bool

C
</div>
Used in combination with the _renderOperation_ flag to enable/disable operation.


<div class="maya-api-flag" markdown="1">
#### target (t)
list

C
</div>
Targets (AOVs) to render as an image.

Use in combination with the _render_ flag to render the specified targets. 

Note: Only ".exr" image format can store more than one target in a single file. If another file format is used, only the first target specified will be rendered.


<div class="maya-api-flag" markdown="1">
#### targetsToDistort (tD)
list

C
</div>
Targets (AOVs) to apply distortions onto. By default, only the `outputTarget` and the `cryptomatte` targets will have distortions, including TAA. 
This flag can be used to specify exactly which targets should be distorted.

Note: Exiting the render state (rS) will revert the specified _targetsToDistort_ to their default values.


<div class="maya-api-flag" markdown="1">
#### version (v)
bool

C
</div>
Returns the version of Flair.


<div class="maya-api-flag" markdown="1">
#### vram (vrm)
bool

C
</div>
Returns the amount of video ram currently in use by Flair.


</div>

#### Examples
``` python
import maya.cmds as cmds

# get the environment where Flair is installed
cmds.flair(env=True)  # Result: yourdir/flair/maya

# get the "shaders" folder within Flair
cmds.flair(env="shaders")  # Result: yourdir/flair/maya/shaders

# Run a benchmark over 100 frames
cmds.flair(bch=100)
```
