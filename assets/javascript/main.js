var wordList = ["astronomy", "astrophysics", "atom", "beaker", "biochemistry", "biology", "botany", "burette","cell", "chemical", "chemistry", "climate", "climatologist", "control", "cuvette","data", "datum","electricity", "electrochemist", "element", "energy", "entomology", "evolution", "experiment","fact", "flask", "fossil", "funnel","genetics", "geology", "geophysics", "glassware", "graduated", "cylinder", "gravity", "herpetology", "hypothesis", "ichthyology", "immunology", "lab", "laboratory", "magnetism", "mass", "matter", "measure", "meteorologist", "meteorology", "microbiologist", "microbiology", "mineralogy", "molecule", "motion","observatory", "observe", "organism", "ornithology","article", "phase", "physics", "pipette","radiology", "research", "retort", "scale", "science", "scientist", "seismology", "telescope", "temperature", "theory", "thermometer", "tissue","variable", "virologist", "volcano", "volume","weather", "weigh","zoology"];

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
