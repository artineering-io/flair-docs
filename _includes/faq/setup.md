
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

I have not received my activation key
<div markdown="1">
The email is most likely in your spam folder. Please double-check the spam folder of the email you entered or your _Patreon_ email (for _Community_ licenses).

If the license still has not arrived within an hour [contact us](https://artineering.io/contact) to help you get started.
</div>

I receive an activation failure
<div markdown="1">
If activation key is not valid, or the existing license is no longer valid, an error message will appear.
`Retry` will prompt you to enter a valid activation key, and `Cancel` will run Flair as demo this session.
</div>

