// Exercise 3

/*

On line 2, the named function expression isn't assigned to a variable so it is
just an expression that gets thrown out.

Fixed code below:

*/

const rlSync = require('readline-sync');

const placeABet = function placeABet(guess) {
  const generateRandomInt = function generateRandomInt() {
    return Math.floor(Math.random() * 25) + 1;
  };

  const winningNumber = generateRandomInt();

  if (guess < 1 || guess > 25) {
    return 'Invalid guess. Valid guesses are between 1 and 25.';
  }

  if (guess === winningNumber) {
    return 'Congratulations, you win!';
  } else {
    return 'Wrong-o! You lose.';
  }
};

let userGuess = parseInt(rlSync.question('Input a guess between 1-25: '), 10);
console.log(placeABet(userGuess));
