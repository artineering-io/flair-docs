---
layout: default
title: API
nav_order: 20
---

# API
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

The Flair API is divided in the different hosts Flair supports. Below you can find the available entrypoints to interact with Flair.

## Flair for Maya
### Commands
<div class="maya-api" markdown="1">
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
Targets to render as an image.

Use in combination with the _render_ flag to render the specified targets. 

Note: Only ".exr" image format can store more than one target in a single file. If another file format is used, only the first target specified will be rendered.


<div class="maya-api-flag" markdown="1">
#### version (v)
bool

C
</div>
Returns the version of Flair.


</div>

#### Examples
``` python
# get the environment where Flair is installed
cmds.flair(env=True)  # Result: yourdir/flair/maya

# get the "shaders" folder within Flair
cmds.flair(env="shaders")  # Result: yourdir/flair/maya/shaders

# Run a benchmark over 100 frames
cmds.flair(bch=100)
```
