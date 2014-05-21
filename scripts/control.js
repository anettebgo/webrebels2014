var Control = {
	drums: function(event){
		var axes = event.gamepad.axes;
		var buttons = event.gamepad.buttons;
	
		//use thresholds to avoid 'dirty' buttons
		if(buttons[0] > 0.5) { Control.paintService(); } //blue
		if(buttons[1] > 0.5) { Control.paintDuck();  } //green
		if(buttons[2] > 0.5) { Control.paintCar();  } //red
		if(buttons[3] > 0.5) { Control.paintHouse();  } //yellow
	},

	setController: function(){
    document.addEventListener("gamepadChangedEvent", Control.drums);	
	},

	pauseController: function(){
		document.removeEventListener("gamepadChangedEvent", Control.drums);	
	},
  
  paintCar: function(){
    Control.clearOptions();
    document.getElementById('car').style.backgroundColor = "#FF6666";
    document.getElementById('cars').classList.remove("hide");
  },
  
  paintHouse: function(){
    Control.clearOptions();
    document.getElementById('house').style.backgroundColor = "yellow";
    document.getElementById('houses').classList.remove("hide");   
  },
  
  paintService: function(){
    Control.clearOptions();
    document.getElementById('service').style.backgroundColor = "#7CB2E8";
    document.getElementById('services').classList.remove("hide");
  },
  
  paintDuck: function(){
    Control.clearOptions();
    document.getElementById('duck').style.backgroundColor = "#40E2A0";
    document.getElementById('ducks').classList.remove("hide");
  },
  
  clearOptions: function(){
    document.getElementById('car').style.backgroundColor="#FFFFFF";
    document.getElementById('cars').classList.add("hide");
    
    document.getElementById('house').style.backgroundColor="#FFFFFF";
    document.getElementById('houses').classList.add("hide");
    
    document.getElementById('service').style.backgroundColor="#FFFFFF";
    document.getElementById('services').classList.add("hide");
    
    document.getElementById('duck').style.backgroundColor="#FFFFFF";
    document.getElementById('ducks').classList.add("hide");
  }
  
};

(function() {
  document.addEventListener('DOMContentLoaded', function() {
		Gamepad.init();
    Control.setController();
  })
	
}());



