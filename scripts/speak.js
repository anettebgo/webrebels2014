function speak(){
  var u = new SpeechSynthesisUtterance();
  u.text = 'Hello webrebels, you beautiful people!';
  speechSynthesis.speak(u);
}