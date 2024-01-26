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
#### renderState (rS)
bool

C
</div>
Toggles the render state of Flair on/off.  
Use in combination with the resolution flag to render at different resolutions. 

<div class="maya-api-flag" markdown="1">
#### resolution (res)
list

C Q
</div>
In query mode: returns the resolution Flair is rendering in (without render scale).

In combination with the renderState flag: Sets the rendering resolution in Flair.

<div class="maya-api-flag" markdown="1">
#### version (v)
bool

C
</div>
Returns the version of Flair.


</div>

