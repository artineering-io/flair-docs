<!-- markdownlint-disable -->

# <kbd>module</kbd> `flair_style_presets`
API module exposing functions related to shader style presets within Flair. The shader style presets are directly applied onto the [*flairGlobals*](/flair/getting-started/globals/) node, changing engine settings and post-processing shaders. This module is directly used by the [*Style Presets UI*](/flair/styles/presets/). 

Presets are individually stored as `.json` files and contain attributes of objects and their values. 



**Examples:**
 

Instance the style presets library and load a style 

```python
import flair_style_presets

style_preset_lib = flair_style_presets.StylePresetLibrary()
style_preset_lib.find()  # not needed to manually find starting Flair 1.1.3+

# load a style with all options enabled
options = { "worldScale": False, "quality": True, "canvases": True, "attributes": True }
style_preset_lib.load("wc_ingres", options)
``` 


---

## <kbd>function</kbd> `set_style_attrs`

```python
set_style_attrs(globals_data, options=None)
```

Set the style attributes in the globals node according to options. 

Options are: 
- *worldScale* - set world scale attribute 
- *quality* - set quality attributes i.e., TAA, TAA samples, render scale 
- *canvases* - set all attributes with canvas in their name 
- *attributes* - set all remaining attributes 

You can get the shader style attributes with the [`get_maya_attrs()`](/flair/api/import-export/#function-getmayaattrs) function from the import/export API. You could use the respective `set_maya_attrs()` function too, but you won't be able to set options and will also set global attributes like `_sequenceDir` and `_sequenceName` that might not be desired. 



**Args:**
 
 - <b>`globals_data`</b> (dict):  Dictionary of style data within the flairGlobals node 
 - <b>`options`</b> (dict):  Dictionary of options to set (default: `{ "worldScale": True, "quality": True, "canvases": True, "attributes": True }`) 


---

## <kbd>class</kbd> `StylePresetLibrary`
Preset library class to save and load style presets within Flair. 

This class inherits from the Python *dict* object, extending its functionality. 



**Example:**
 

Load library and print available presets 

```python
# load preset library
style_preset_lib = flair_style_presets.StylePresetLibrary()
style_preset_lib.find()  # not needed to manually find starting Flair 1.1.3+

# print available presets
preset_names = style_preset_lib.keys()
print(preset_names)
``` 




---

### <kbd>method</kbd> `StylePresetLibrary.find`

```python
find()
```

Finds all available style presets and populates the library class. 

---

### <kbd>method</kbd> `StylePresetLibrary.load`

```python
load(name, options)
```

Load the shader style preset with the specified options onto the flairGlobals node. 

Options are: 
- *worldScale* - sets world scale attribute 
- *quality* - sets quality attributes i.e., TAA, TAA samples, render scale 
- *canvases* - sets all attributes with canvas in their name 
- *attributes* - sets all remaining attributes 

Options are a requirement for this method and can be defined as follows: 

`options = { "worldScale": False, "quality": True, "canvases": True, "attributes": True }` 



**Args:**
 
 - <b>`name`</b> (unicode):  name of style preset 
 - <b>`options`</b> (dict):  options to load the shader style with 

---

### <kbd>method</kbd> `StylePresetLibrary.save`

```python
save(name, obj)
```

Save the shader style attributes of the flairGlobals node into a preset with the specified name 

**Args:**
 
 - <b>`name`</b> (unicode):  name of the style preset 
 - <b>`obj`</b> (list, unicode):  name of the globals node to create preset from e.g., `"flairGlobals"` 


