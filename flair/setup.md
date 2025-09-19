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
| **Autodesk Maya** | 2022.4    | 2024.2         | Maya 2022, 2023, 2024 2025 and 2026 are supported                                       |
| **OS**            | Windows 10<br>RHEL 7.9 | Windows 11<br>RHEL 8+ | Linux available only for Flair Indie and Studio licenses |
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

<div class="d-flex flex-justify-around">
{% include responsive-embed url="https://www.youtube.com/embed/GiXa6NPbT4c" width="380px" caption="Installing and activating Flair for Maya" %}

{% include responsive-embed url="https://www.youtube.com/embed/ABOvM372LZw" width="380px" caption="Updating Flair for Maya!"%}
</div>

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

The "Only for me" option allows keeping different versions of Flair on different versions of Maya. However, everyone using Flair will need read/write permissions to the Flair installation folder.
{: .info}

#### For all users
*Recommended for studios or institutions* where multiple artists use Flair from the same workstation/server.

This method allows installing Flair automatically in all supported Maya versions, even in environments with strict read-only policies e.g., **Rez**.

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

#### Only for me - but read-only
There is a third hidden option where you can make an _"Only for me"_ installation read-only by setting the environment variable `FLAIR_READ_ONLY=1`. This will force Flair to behave as if it was installed _"For all users"_.

For this installation to work properly, make sure the directories to save canvas caches, presets and preferences have read/write access for artists using Flair, as these will default to the _"For all users"_ directories (which can be customized within the `_custom_dirs_example.json` file). 

Keep in mind that the license will remain within the local Maya folder, so it won't be available for other users.

---
## Activation
When Flair is run and doesn't find a valid license, you will be prompted with the activation picker:

<figure class="aio-ui-highres aio-window">
	<img src="/media/setup/activation_key.png" alt="Activation picker">
	<figcaption>Choose the license you wish to activate.</figcaption>
</figure>

* **With a license key** lets you enter the [activation key](#with-a-license-key) of your license.  
* **Through a license server** lets you enter the port and hostname to connect to a [floating license](floaring-licenses) server.
* **Free version** activates the free version of Flair, only limited in resolution to 1280 x 800 pixels.

### With a license key 
You activate your Flair license key by choosing `With a license key`, entering the **activation key** and clicking on `Activate`.

The activation key is sent to you via email shorly after [making your purchase](https://artineering.io/software/flair#pricing).
To validate license keys, you will need to be online upon loading Flair. If you happen to not have internet at some point while launching Flair, you can still use Flair _Free_ with a limited resolution until you are back online to validate your license.

A **single Flair license** can be active on **only one computer at a time**.  
Licenses can be **migrated between computers after 6 hours** have passed from a previous activation.
{: .info}

If the license key has been activated on a different computer, you will be asked if you want to [migrate the license](#license-migration) to this machine. Otherwise, you will directly be prompted with the [**End-User-License Agreement (EULA)**](#end-user-license-agreements-eulas), which must be accepted to use Flair.

#### License Migration

Licenses keys can be **migrated between computers** once **6 hours have passed** from a previous activation.

Attempting to migrate (transfer) the license before 6 hours have passed will lead to a failed activation error.
{: .warning}

To migrate a license, **just enter the license key into the new computer**  during activation. If a another license was previously activated on the new computer, follow the **steps to [change the license](#changing-the-license)** to **delete the activated license** and **trigger a new license activation**.

If the license activation key was previously used on another computer, you will be prompted to **confirm the migration** of the license.

<figure class="aio-ui aio-window">
	<img src="/media/setup/activation_migration.png" alt="Flair migration prompt">
	<figcaption>Flair license prompt that appears to confirm the license migration.</figcaption>
</figure>

Click `Activate` to confirm, or `Cancel` to abort the activation.

After a successful migration, the license in the **other computer will automatically deactivate** and you can **use Flair in the new computer**.

### Floating Licenses
You activate a floating license by choosing `Through a license server`, entering the **port number** (default: 6349), the **hostname or ip address** of the licensing server and clicking on `Activate` to **claim a license**. If a license is available on the licensing server, it will be **assigned to your computer**.

<figure class="aio-ui-highres aio-window">
	<img src="/media/setup/activation_server.png" alt="Flair server activation">
	<figcaption>Enter the port number and hostname or ip address in the text fields.</figcaption>
</figure>

If you don't want to manually enter the port and hostname, you can specify a `FLAIR_SERVER` environment variable containing `PORT@HOSTNAME` pointing directly to the licensing server.
{: .info}

Floating Flair licenses do not need an internet connection for validation, but **require a licensing server within your local network** instead.
The licensing server will **relay the available licenses to the computers** that need the Flair license, allowing licenses to **roam between artists**.

Licenses are released from the licensing server once all instances of Flair are closed or if Flair doesn't send a heartbeat within a minute from the computer that claimed it.

Floating licenses are available when purchasing multiple Flair _STUDIO_ or _INDIE for Education_ licenses directly through us. [**Get in touch**](https://artineering.io/contact) with our sales team to get setup.
{: .info}

If a floating license has never been used on the computer, you will be prompted with the [**End-User-License Agreement (EULA)**](#end-user-license-agreements-eulas), which must be accepted to use Flair.

### Free version
You activate a the free version of Flair by choosing `Free version` and clicking on `Activate`.

<figure class="aio-ui-highres aio-window">
	<img src="/media/setup/activation_free.png" alt="Flair free version activation">
	<figcaption>Click on Activate to activate the free version of Flair.</figcaption>
</figure>

This will prompt the [**End-User-License Agreement (EULA)**](#end-user-license-agreements-eulas), which must be accepted to use Flair.

## Changing a license
If you want to remove a Flair license and activate a different one instead you need to **re-install Flair** and choose to **Delete the existing license**.

This is useful when upgrading/downgrading between the Free, Community, Indie or Studio licenses.
{: .info}

{% include responsive-embed url="https://www.youtube.com/embed/KtiFdePYM-Q" width="70%" caption="Changing the Flair license" %}

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


## End-User-License-Agreements (EULAs)
The End-User-License-Agreements are the terms by which you can use Flair. These are normal in any type of software and serves as a legal contract to protect the developers of an application.

<figure class="aio-ui aio-window">
	<img src="/media/setup/activation_eula.png" alt="End-User-License Agreement dialog">
	<figcaption>End-User-License Agreement (EULA).</figcaption>
</figure>

The EULAs for each version of Flair can be found below:
* [Flair Studio EULA](https://artineering.io/legal/flair-studio-eula)
* [Flair Indie EULA](https://artineering.io/legal/flair-indie-eula)
* [Flair Community EULA](https://artineering.io/legal/flair-community-eula)
* [Flair Free EULA](https://artineering.io/legal/flair-free-eula)

Once you have read and agreed to the End-User License Agreement, click on **I Agree**.

---

## FAQ
{% include faq/section.html file="setup.md" self-contained=true %}
