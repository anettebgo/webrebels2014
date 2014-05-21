

function listen(){
var commands = {
  'unicorn': function() {
    document.getElementById('banana').classList.add("hide");
    document.getElementById('icecream').classList.add("hide");
    document.getElementById('unicorn').classList.remove("hide");
  },
  'ice cream': function() {
    document.getElementById('banana').classList.add("hide");
    document.getElementById('unicorn').classList.add("hide");
    document.getElementById('icecream').classList.remove("hide");
  },
  'banana': function() {
    document.getElementById('icecream').classList.add("hide");
    document.getElementById('unicorn').classList.add("hide");
    document.getElementById('banana').classList.remove("hide");
;
  }
  };

  annyang.addCommands(commands);
  annyang.start();
  console.log("listening")
}

function hideAll(){
  
}      

      