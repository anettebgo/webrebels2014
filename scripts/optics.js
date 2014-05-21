  function drawGlasses(frame){
    var canvas = document.querySelector('#optic-canvas');
    var pic = document.querySelector(frame); 
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(pic, 70, 30, 200, 50);
    
  }
  function initGlasses() {

    var streaming = false,
        video = document.querySelector('#video')

    navigator.webkitGetUserMedia(
      {
        video: true,
        audio: false
      },
      
      function(stream) {
        var vendorURL = window.URL;
        video.src = vendorURL.createObjectURL(stream);
        video.play();
      }
    );
  };