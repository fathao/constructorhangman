var inquirer = require("inquirer");  //npm package
var pkmArray = require("./pkmarray"); //word bank 
var checkLetter = require("./check"); //logic to check letter
var displayLetter = require("./game"); //logic to show word or "_"


var alphabet = /[a-z]/g;
console.log(alphabet);
var letterGuessedWrong = [];
var letterGuessedCorrect = [];
var displayHangman;

var game = {
  wordBank : pkmArray,
  guessremain : 10,
  randomWord : null,

  
}

