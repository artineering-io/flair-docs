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
- **If _MNPRX May 2021_** or a prior version is currently installed in Maya, you have to **uninstall MNPRX first**.

| Requirements      | Minimum    | Recommended   | Notes                                                                                   |
|-------------------|------------|---------------|-----------------------------------------------------------------------------------------|
| **Autodesk Maya** | 2019.3.1   | 2022.4        | Maya 2019, 2020, 2022, 2023 and 2024 are supported                                                       |
| **OS**            | Windows 10 | Windows 10/11 | Linux/Mac compiled on-demand for Studios, [contact us](https://artineering.io/contact) |
| **VRAM**          | 4 GB       | 8+ GB          | Higher resolutions and scene complexity require more VRAM                               |
| **Memory**        | 8 GB       | 16+ GB         | As much as your Maya scene requires                                                     |

_Resizable BAR_ (Base Address Register) or _AMD SAM_ (Smart Access Memory) found in modern hardware can significantly increase performance.
{: .info}

---
## Download
Get a **commercial, non-commercial or demo** version of Flair below.

[Get Flair](https://artineering.io/software/flair#download){: target="_blank" .aio-btn .d-block}

**Demo versions are free to use** and are limited only in resolution to 1280 x 800.

Upon purchasing Flair, you can download any version through the link you receive via email.  
You can also download the demo version and [activate a license](#activation) with your activation key.
{: info}

---
## Installation
Installing Flair is as simple as a drag-and-drop.  

1. Make sure you have all [pre-requisites](#pre-requisites)
2. Download and extract the contents of the Flair *zip* file in any folder outside of Maya that doesn't not require "admin" rights i.e., Documents/Flair, Desktop/Flair, C:/Flair.
3. Open the folder where you extracted Flair in
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
8. Click on the test file in the shelf to load our favourite sphere
9. [Activate Flair](#activation) if not done previously.



### Installation options

**Only for me - Recommended for individuals** to install and keep different versions of Flair on different versions of Maya.

This option installs Flair within your **user folder** and does not require administrator rights.

The license will be placed in `Documents/maya` and the Flair path will be inserted into the `Maya.env` file of the Maya where you are installing Flair in.

**For all users - Recommended for institutions** where multiple users will use Flair on the same computer.

This option installs Flair within your **system folders** and requires administrator rights.

The license will be placed in `Program Files/Common Files/Autodesk Shared/Modules/Maya` and the Flair module in the same folder for all the supported Maya versions.

---
## Activation
Purchasing a Flair **license enables the full functionality of Flair** upon activation.  
Activate Flair by entering and **validating an activation key** that is sent to you via email shorly after purchase.

**An internet connection is required** to activate and validate Flair licenses, except for the Demo version.

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
* **Activate demo** activates the demo version of Flair, with limited resolution of 1280 x 800 pixels.
* **Cancel** runs Flair as demo this time only. You will be prompted again the next time Flair loads.

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
* [Flair Demo EULA](https://artineering.io/legal/flair-demo-eula)

Once you have read and agreed to the End-User License Agreement, click on **I Agree**. You will then be asked to confirm the activation on this computer. 

<figure class="aio-ui aio-window">
	<img src="/media/setup/activation_confirm.png" alt="Confirm activation dialog">
	<figcaption>Confirm activation by clicking "Activate".</figcaption>
</figure>

Click **Activate** to confirm and activate, or **Cancel** to abort the activation.

### Re-activation

If a license has been previously activated, you may want to remove the activated license and **activate a different license** instead.

This is useful when upgrading/downgrading between the Demo, Community, Indie or Studio licenses.
{: .info}

You can activate a different license by **installing Flair** again and choosing to **delete the existing license**.

1. Open the folder where Flair was installed from
2. Drag-and-drop the `install_maya.mel` file onto the Maya viewport
3. When prompted if you wish to keep the existing license, click `No`
    <figure class="aio-ui aio-window">
        <img src="/media/setup/installation_license_confirmation.png" alt="License found prompt">
        <figcaption>License found prompt.</figcaption>
    </figure>
4. Proceed with the [normal installation](#installation)
4. Restart Maya
3. Load Flair to activate the new license


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

Click `Activate` to confirm, or `Cancel` to abort activation and run as demo for this session.

After a successful migration, the license in the **other computer will automatically deactivate** and you can **use Flair in the new computer**.


---

## FAQ
{% include faq/section.html file="setup.md" self-contained=true %}
