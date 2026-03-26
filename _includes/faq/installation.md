I can't install 'only for me'
<div markdown="1">
If the user-based installation won't work no matter what, you can manually enter the required environment variable in the _Maya.env_ file.

1. Open the _Maya.env_ file usually found in `Documents/maya/202X/Maya.env` with a text editor (make sure its the _Maya.env_ file of the version of Maya you want to install in)
1. Enter this environment variable: `MAYA_MODULE_PATH=#YOURFLAIRMAYAPATH#` (replace _#YOURFLAIRMAYAPATH#_ with the path where `Flair/maya` is located)
1. Restart Maya.
</div>

I can't install 'for ALL users'
<div markdown="1">
The installation for all users requires administrator rights in the computer where you are installing Flair in. This is because we need to put the _module_ file within _Program Files_.
To do this manually, follow the steps below:

1. Duplicate the _flair.mod_ file within the `Flair/maya` folder and open the duplicate with a text editor.
1. Change all `./` with the path to the Flair folder (with forward slashes) and save.
1. (Windows) Copy the edited _flair.mod_ and paste it in `Program Files/Common Files/Autodesk Shared/Modules/Maya/202X` (paste it in the Maya version that you want to install Flair in).
1. Restart Maya.
</div>

Flair doesn't load on macOS
<div markdown="1">
macOS is particularly strict when an app has not been “vetted” through the App Store. You will need to allow `flairEngine.bundle` and `libomp.dylib` to run in your system.

<div class="d-flex">
	<figure class="aio-ui-mac">
    <img src="/media/setup/macos_warning_flair.png" alt="macOS warning prompt about flairEngine.bundle">
		<figcaption>flairEngine.bundle is the Flair plugin.</figcaption>
	</figure>
	<figure class="aio-ui-mac">
        <img src="/media/setup/macos_warning_libomp.png" alt="macOS warning prompt about libomp.dylib">
		<figcaption>libomp.dylib is a Flair dependency.</figcaption>
	</figure>
</div>

When these prompts appear, just click on `Done` to dismiss them. Then go to `Apple menu -> System Settings...->Privacy and Security`. At the bottom, you will find the blocked applications with the option to `Allow Anyway`. Do so for both the `flairEngine.bundle` and `libomp.dylib`.

<div class="d-flex">
	<figure class="aio-ui-mac">
    <img src="/media/setup/macos_allow.png" alt="Privacy and Security section of System Settings with the Allow Anyway button">
		<figcaption>Click on Allow Anyway to allow the Flair plugin to run on your system.</figcaption>
	</figure>
</div>

Once you do so, the prompts will appear again, but this time with an option to `Open Anyway`.

<div class="d-flex">
	<figure class="aio-ui-mac">
    <img src="/media/setup/macos_warning_flair_allow.png" alt="macOS warning prompt about flairEngine.bundle with the Allow option">
		<figcaption>Click on Open Anyway to run the Flair plugin.</figcaption>
	</figure>
	<figure class="aio-ui-mac">
        <img src="/media/setup/macos_warning_libomp_allow.png" alt="macOS warning prompt about libomp.dylib with the Allow option">
		<figcaption>Click on Open Anyway to run the Flair plugin.</figcaption>
	</figure>
</div>

Click on `Open Anyway` to allow Flair to run on your Mac.

If you can't see the _flairShader_ material render, restart Maya one last time so that Flair can run normally with all permissions set.
</div>
