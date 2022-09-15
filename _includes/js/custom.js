
window.addEventListener("DOMContentLoaded", function(){
  var uiFigures = document.getElementsByClassName('aio-ui');
  for (var i = 0; i < uiFigures.length; i++) {
    var images = uiFigures[i].getElementsByTagName("img");
    for (var j = 0; j < images.length; j++) {
      var width = images[j].naturalWidth,
      height = images[j].naturalHeight;
      console.log(width)
      console.log(height)
      images[j].style.maxWidth = (width * 0.7) + "px";
      images[j].style.maxHeight = (height * 0.7) + "px";
    } 
  }
})