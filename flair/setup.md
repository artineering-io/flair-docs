---
layout: default
title: Setup
nav_order: 2
---
# Setup
{: .no_toc }

<details close markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>


## Pre-requisites

- Install latest **Visual C++ Redistributable** ([download](https://aka.ms/vs/17/release/vc_redist.x64.exe))

| Requirements      | Minimum    | Recommended   | Notes                                                                                   |
|-------------------|------------|---------------|-----------------------------------------------------------------------------------------|
| **Autodesk Maya** | 2022.4    | 2023.3        | Maya 2022, 2023, 2024 and 2025 are supported                                                       |
| **OS**            | Windows 10<br>RHEL 7.9 | Windows 11<br>RHEL 8+ | Linux available on-demand for Studios, [contact us](https://artineering.io/contact) |
| **VRAM**          | 4 GB       | 8+ GB          | Higher resolutions and scene complexity require more VRAM                               |
| **Memory**        | 8 GB       | 16+ GB         | As much as your Maya scene requires                                                     |

_Resizable BAR_ (Base Address Register) or _AMD SAM_ (Smart Access Memory) found in modern hardware can significantly increase performance when using the Flair Graph.
{: .info}

---
## Download
Get a **commercial**, **non-commercial** or **free** version of Flair below.

[Get Flair](https://artineering.io/software/flair#download){: target="_blank" .aio-btn .d-block}

**Free versions** are limited only in resolution to 1280 x 800.

Upon purchasing Flair, you can download any version through the link you receive via email.  
You can also download the free version and [activate a license](#activation) with your activation key.
{: info}

---
## Installation
Installing Flair is as simple as a drag-and-drop.  

1. Make sure you have all [pre-requisites](#pre-requisites)
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
9. [Activate Flair](#activation) if needed.

If the drag-and-drop of the `install_maya.mel` file fails, make sure that its directory only contains valid [ASCII characters](https://en.wikipedia.org/wiki/ASCII), or Maya won't be able to read the _MEL_ file.
{: .warning}


### Installation options

#### Only for me
*Recommended for individuals* for simple installations without admin rights.

The installer will only insert the Flair paths into your `Maya.env` file for the Maya version in use.

All flair-related files are kept within the Flair installation folder, except for the license file, which is placed in:
* Windows: `Documents/maya`
* Linux: `~/maya`

The "Only for me" option allows keeping different versions of Flair on different versions of Maya. However, you will need read/write permissions to the Flair installation folder.
{: .info}

#### For all users
*Recommended for studios or institutions* where multiple artists use Flair from the same workstation/server.

This method allows installing Flair automatically in all supported Maya versions, even in environments with strict read-only policies e.g., *Rez* repo.

The Flair installation "For all users" requires admin/sudo privileges to place files in:

##### License and modules
* Windows: `%CommonProgramFiles%/Autodesk Shared/Modules/maya`
* Linux: `/usr/autodesk/modules/maya`

##### Canvas caches
* Windows: `%ProgramData%/Flair`
* Linux: `opt/Flair`

After installation and activation, artists will find their **presets and preferences** in:
* Windows: `Documents/AppDocuments/Flair`
* Linux: `~/AppDocuments/Flair`

If you need to customize where the _program data_ (caches) and _app documents_ (presets/preferences) are stored, you can follow the instructons within `flair/maya/scripts/coop/_custom_dirs_example.json`.
{: .warning}

---
## Activation
Purchasing a Flair **license enables the full functionality of Flair** upon activation.  
Activate Flair by entering and **validating an activation key** that is sent to you via email shorly after purchase.

**An internet connection is required** to activate and validate Flair licenses, except for the Free version.

A **single Flair license** can be active on **only one computer at a time**.  
Licenses can be **migrated between computers after 12 hours** have passed from a previous activation.
{: .warning}

### First time activation
The first time Flair is run, you will be prompted with the following dialog:

<figure class="aio-ui aio-window">
	<img src="/media/setup/activation_activate.png" alt="First-time activation dialog">
	<figcaption>Select how you want to activate Flair.</figcaption>
</figure>

* **Activate with key** lets you to enter the activation key of your license.  
* **Activate free version** activates the free version of Flair, with limited resolution of 1280 x 800 pixels.
* **Cancel** runs Flair as the free version this time only. You will be prompted again the next time Flair loads.

After clicking `Activate with key`, enter the activation key you received when purchasing Flair and click `OK`.

<figure class="aio-ui aio-window">
	<img src="/media/setup/activation_key.png" alt="Enter activation key dialog">
	<figcaption>Enter your activation key in the text box.</figcaption>
</figure>

Once activated, if the license has never been activated, you will be prompted with the **End-User-License Agreement** (EULA):

<figure class="aio-ui aio-window">
	<img src="/media/setup/activation_eula.png" alt="End-User-License Agreement dialog">
	<figcaption>End-User-License Agreement (EULA).</figcaption>
</figure>

The EULAs for each version of Flair can be found below:
* [Flair Studio EULA](https://artineering.io/legal/flair-studio-eula)
* [Flair Indie EULA](https://artineering.io/legal/flair-indie-eula)
* [Flair Community EULA](https://artineering.io/legal/flair-community-eula)
* [Flair Free EULA](https://artineering.io/legal/flair-free-eula)

Once you have read and agreed to the End-User License Agreement, click on **I Agree**. You will then be asked to confirm the activation on this computer. 

<figure class="aio-ui aio-window">
	<img src="/media/setup/activation_confirm.png" alt="Confirm activation dialog">
	<figcaption>Confirm activation by clicking "Activate".</figcaption>
</figure>

Click **Activate** to confirm and activate, or **Cancel** to abort the activation.

### Re-activation

If a license has been previously activated, you may want to remove the activated license and **activate a different license** instead.

This is useful when upgrading/downgrading between the Free, Community, Indie or Studio licenses.
{: .info}

You can activate a different license by **re-installing Flair** again and choosing to **Delete the existing license**.

<figure class="aio-ui aio-window">
	<img src="/media/setup/re-install_delete_license.png" alt="Installation dialog with Delete the existing license selected">
	<figcaption>Re-installation dialog with license deletion.</figcaption>
</figure>

1. Open the folder where Flair was installed from
2. Drag-and-drop the `install_maya.mel` file onto the Maya viewport
3. Within the installation dialog, check "Delete the existing license"
4. Proceed with the installation
4. Restart Maya
3. Load Flair to trigger the license activation again


### License Migration

Licenses can be **migrated between computers** (transferred) once **12 hours have passed** from a previous activation.

Attempting to migrate the license before 12 hours have passed will lead to a failed activation.
{: .warning}

To migrate the license, just follow the same **steps as for the [re-activation](#re-activation) on the new computer** to **delete the activated license** and **activate the new license**.

After inputting the **activation key on the new computer**, you will be prompted to **confirm the migration** of the license.

<figure class="aio-ui aio-window">
	<img src="/media/setup/activation_migration.png" alt="Flair migration prompt">
	<figcaption>Flair license prompt that appears if an existing license is found.</figcaption>
</figure>

Click `Activate` to confirm, or `Cancel` to abort activation and run the free version for this session.

After a successful migration, the license in the **other computer will automatically deactivate** and you can **use Flair in the new computer**.


---

## FAQ
{% include faq/section.html file="setup.md" self-contained=true %}
