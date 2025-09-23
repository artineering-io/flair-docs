Whitelist URL and port on firewall for the Flair license to be validated

If you can't validate Flair on your workstation because your access to the internet is restricted by a firewall, add a whitelist rule for our licensing server: _api.keygen.sh_ on port 443.

I have not received my activation key
<div markdown="1">
The email is most likely in your spam folder. Please double-check the spam folder of the email you entered or your _Patreon_ email (for _Community_ licenses).

If the license still has not arrived within an hour [contact us](https://artineering.io/contact) to help you get started.
</div>

The viewport is all black and I get the Error compiling GLSL code. 
<div markdown="1">
This can happen when the viewport is forced to use DirectX (e.g., with an environment variable) instead of OpenGL. 

During installation, we try to automatically set the Viewport 2.0 rendering engine to OpenGL, but this can fail depending on your setup.  Check your Maya setup for anything that might force the viewport to use DirectX and remove it. Then, manually set the rendering engine to OpenGL (`Preferences->Display->Viewport 2.0->Rendering Engine->OpenGL Core Profile`). Maya will prompt to restart the application and Flair will be able to run after restarting.
</div>


