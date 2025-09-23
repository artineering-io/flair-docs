---
layout: default
title: Installation
nav_order: 1
parent: Setup
---
# Installation
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

Installing Flair is as simple as a drag-and-drop.  

<div class="d-flex flex-justify-around">
{% include responsive-embed url="https://www.youtube.com/embed/GiXa6NPbT4c" width="380px" caption="Installing and activating Flair for Maya" %}

{% include responsive-embed url="https://www.youtube.com/embed/ABOvM372LZw" width="380px" caption="Updating Flair for Maya!"%}
</div>

1. Make sure you have all [pre-requisites](/flair/setup/#pre-requisites)
2. Download and extract all the contents of the Flair *zip* file into any folder outside of Maya  
e.g., `Documents/Flair`, `C:/Flair`, a shared drive.
3. Open the folder where you extracted Flair into, this will become your installation folder
4. Drag-and-drop the `install_maya.mel` file onto the Maya viewport
5. Select for whom you want to install Flair for and click `Accept` ([see options](#installation-options))
    <figure class="aio-ui aio-window">
        <img src="/media/setup/installation.png" alt="Flair installation prompt">
        <figcaption>Flair installation prompt that appears after the viewport drag-and-drop.</figcaption>
    </figure>
6. Upon successful installation, a restart prompt will appear
    <figure class="aio-ui aio-window">
        <img src="/media/setup/success.png" alt="Dialog stating that the changes were successful">
        <figcaption>Flair has been successfully installed.</figcaption>
    </figure>
7. Restart Maya
8. After restarting, the Flair shelf should appear in Maya
9. Click on the `glob` or `test` shelf button to verify the installation and prompt the Flair activation
9. [Activate Flair](/flair/setup/activation) if needed.

If the drag-and-drop of the `install_maya.mel` file fails, make sure that its directory only contains valid [ASCII characters](https://en.wikipedia.org/wiki/ASCII), or Maya won't be able to read the _MEL_ file.
{: .warning}


### Installation options

#### Only for me
*Recommended for individuals* for simple installations without admin rights.

The installer will only insert the Flair paths into your `Maya.env` file for the Maya version in use.

All flair-related files are kept within the Flair installation folder, except for the license file, which is placed in:
* Windows: `Documents/maya`
* Linux: `~/maya`

The "Only for me" option allows keeping different versions of Flair on different versions of Maya. However, everyone using Flair will need read/write permissions to the Flair installation folder.
{: .info}

#### For all users
*Recommended for studios or institutions* where multiple artists use Flair from the same workstation/server.

This method allows installing Flair automatically in all supported Maya versions, even in environments with strict read-only policies e.g., **Rez**.

The Flair installation "For all users" requires admin/sudo privileges to place files in:

**License and modules**
* Windows: `%CommonProgramFiles%/Autodesk Shared/Modules/maya`
* Linux: `/usr/autodesk/modules/maya`

**Canvas caches**
* Windows: `%ProgramData%/Flair`
* Linux: `opt/Flair`

After installation and activation, artists will find their **presets and preferences** in:
* Windows: `Documents/AppDocuments/Flair`
* Linux: `~/AppDocuments/Flair`

If you need to customize where the _program data_ (caches) and _app documents_ (presets/preferences) are stored, you can follow the instructons within `flair/maya/scripts/coop/_custom_dirs_example.json`.
{: .warning}

#### Only for me (but read-only)
There is a third hidden option where you can make an _"Only for me"_ installation read-only by setting the environment variable `FLAIR_READ_ONLY=1`. This will force Flair to behave as if it was installed _"For all users"_.

For this installation to work properly, make sure the directories to save canvas caches, presets and preferences have read/write access for artists using Flair, as these will default to the _"For all users"_ directories (which can be customized within the `_custom_dirs_example.json` file). 

Keep in mind that the license will remain within the local Maya folder, so it won't be available for other users.

---

## FAQ
{% include faq/section.html file="installation.md" self-contained=true %}
