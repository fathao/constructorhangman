var inquirer = require("inquirer");  //npm package
var alphabet = require("alphabet"); //validation of letter
var pkmArray = require("./pkmarray"); //word bank 
var checkLetter = require("./check"); //logic to check letter
var displayLetter = require("./game"); //logic to show word or "_"

//------------------------

var character = /[a-z]/g; //need to test this validation
// console.log(alphabet);
var letterGuessedWrong = [];
var letterGuessedCorrect = [];
var displayHangman;


//------------------------------------------------------
var game = {
  wordBank : pkmArray,
  guessRemain : 10,
  randomWord : null,

gameBegin : function() {
  this.guessRemain = 10;

  var randomWordGen = Math.floor(Math.random() * this.wordBank.length);
  this.randomWord = this.wordBank[randomWordGen];  //generate the word from wordbank and put it into null randomWord
  console.log("See if you are a real pokemon fan");
  console.log(this.randomWord);
  displayHangman = new displayLetter(this.randomWord);
  displayHangman.showWord();
  console.log("Guesses remain: " + game.guessRemain);

  inGame();
}
};

//This is kind of like the initialize stage... It generates word and put them into '_'

function inGame () {
  if(game.guessRemain > 0) {
    var validation = alphabet.lower.join('');
    
    inquirer.prompt([
      {
      type: "validation",
      name: "letter",
      message: "Guess a letter"
    }
    ]).then(function(userGuess){
      // var validation = alphabet.lower.join('');
      console.log(validation);
      if(validation == -1) {
        console.log("Guesses left: " + game.guessRemain);
        console.log(validation.lower.join(''));
        inGame();
      }
      else {
        var letterInWord = checkLetter(validation, game.randomWord);

        if(letterInWord) {
          letterGuessedCorrect.push(validation);

          displayHangman = new displayLetter(game.randomWord, letterGuessedCorrect);
          displayHangman.showWord();

          if(displayHangman.winner) {
            console.log("You won");
            return;
          }
          else{
            console.log("Guesses left:" + game.guessRemain);
            inGame();
          }
        }
        else{
          game.guessRemain--;
          displayHangman.showWord();
          console.log("Guesses left:" + game.guessRemain);
          inGame();

        }
      }

      

    });
  }
}

game.gameBegin();

// I'm missing the validation to make this game work
