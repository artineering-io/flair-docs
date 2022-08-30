
jtd.onReady(function(){
  var uiFigures = document.getElementsByClassName('aio-ui');
  console.log('Running customjs');
  for (var i = 0; i < uiFigures.length; i++) {
    var images = uiFigures[i].getElementsByTagName("img");
    for (var j = 0; j < images.length; j++) {
      var width = images[i].naturalWidth,
      height = images[i].naturalHeight;

      console.log(width)
      console.log(height)
      images[i].style.maxWidth = (width * 0.8) + "px";
      images[i].style.maxHeight = (height * 0.8) + "px";
    } 
  }
})