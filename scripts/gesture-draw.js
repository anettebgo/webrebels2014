	var canvas = document.getElementById("gesture")
  var ctx = canvas.getContext('2d');
	var h = 500;
	var w = 500;

	canvas.style.width = w+'px';
	canvas.style.height = h+'px';
	canvas.width = w;
	canvas.height = h;
  
  var started = false;
  
  function startstop(){
    if(!started){
      started=true;
      document.getElementsByTagName("body")[0].addEventListener("webcamSwipeLeft", left, true)
      document.getElementsByTagName("body")[0].addEventListener("webcamSwipeRight", right, true)
      window.initializeWebcamSwiper()
    } else {
      started = false;
      window.destroyWebcamSwiper();
    }
  }
    
  	function left(){
      var px = Math.random()*480;
      var py = Math.random()*500;
      drawLeft(px, py, "rgba(0, 200, 0, 0.8)")
    }
    
    function right(){
      var px = Math.random()*480;
      var py = Math.random()*500;
      drawRight(px, py, "rgba(200, 0, 0, 0.8)")  
    }
    
    function drawLeft(i, py, color){
      setTimeout(function(){
        if(i-- > 0){
          circle(i, py, color)
          drawLeft(i, py, color);
        }   
      }, 15)
    }
    
    function drawRight(i, py, color){
      setTimeout(function(){
        if(i++ < w){
          circle(i, py, color)
          drawRight(i, py, color);
        }   
      }, 15)
    }
          
    function circle(px, py, color){
      ctx.beginPath();
      ctx.arc(px, py, 20, 0, 2*Math.PI);

		  ctx.fillStyle = color;
		  ctx.fill();
    }
    