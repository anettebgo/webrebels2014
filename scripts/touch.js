var canvas;
var ctx;
var w = 0;
var h = 0;

var timer;
var updateStarted = false;
var touches = [];


function update() {
	if (updateStarted) return;
	updateStarted = true;

	var nw = window.innerWidth + 50;
	var nh = window.innerHeight +50;

	if ((w != nw) || (h != nh)) {
		w = nw;
		h = nh;
		canvas.style.width = w/2+'px';
		canvas.style.height = h+'px';
		canvas.width = w/2;
		canvas.height = h;
	}
  canvas.style.zoom = 0.80;

	ctx.clearRect(0, 0, w, h);
	var i, len = touches.length;
	for (i=0; i<len; i++) {
		var touch = touches[i];
    var px = touch.pageX/2;
    var py = touch.pageY;

    var pic = document.getElementById('touch-hand');
    ctx.drawImage(pic, px-30, py-30, 90, 170);
	}

	updateStarted = false;
}

function ol() {
	canvas = document.getElementById('touch-canvas');
  //canvas.classList.add("gesture-canvas")
  ctx = canvas.getContext('2d');
	timer = setInterval(update, 15);

canvas.addEventListener('touchend', function() {
	ctx.clearRect(0, 0, w, h);
});

canvas.addEventListener('touchmove', function(event) {
  event.preventDefault();
  touches = event.touches;
});

canvas.addEventListener('touchstart', function(event) {
  console.log('start');
});
};