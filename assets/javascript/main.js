var wordList = [];

var word = Math.floor(Math.random()*wordChoices.length);

var wins=0, losses=0, display="", guesses=10, badGuess="";

$("#newGame").click(function() {
  guesses=10;

  for(var i=0; i<word.length; i++) {
    display+="_";
  }

  document.onkeyup = function(event) {
    var letter = event.key;
    var newDisplay = "";
    for(var i=0; i<word.length; i++) {
      if(letter==word[i]) {
        newDisplay = display.substring(0,i) + letter + display.substring(i+1);
      }
    }
  }
});
