function checkLetter(letter, word) {
  if(word.indexOf(letter) != -1) {
    return true;
  }
  else {
    return false;
  }
}


module.exports = checkLetter;

// Logic to check the letter of word