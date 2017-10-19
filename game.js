// Logic to show the "_" or the actual word

var DisplayLetter = function(word, correctGuess) {
  this.word = word;
  this.correctGuess = correctGuess;
  this.defaultDisplay = '';
  this.win = false; 
  this.showWord = function() {
    var display = ''; //will put logic to add '_' into it

    if(this.correctGuess == undefined) {
      for(var i = 0; i < this.word.length; i++) {
        display += '_';
      }
    }
    else  {
      for(var i = 0; i < this.word.length; i++) {
        var letterFound = false;
        for(var j = 0; j < this.correctGuess.length; j++) {
          if(this.word[i] == this.correctGuess[j]) {
            display += this.correctGuess[j];
             letterFound = true;
          }
        }
        if(!letterFound) {
          display += '_';
        }
      }
    }
    if(this.defaultDisplay == this.word) {
      this.win = true;
    }
  }
};

module.exports = DisplayLetter;