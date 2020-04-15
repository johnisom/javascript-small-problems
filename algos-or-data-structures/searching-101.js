// Exercise 2

const rlSync = require('readline-sync');

var numbers = [
  rlSync.question('Enter the 1st number: '),
  rlSync.question('Enter the 2nd number: '),
  rlSync.question('Enter the 3rd number: '),
  rlSync.question('Enter the 4th number: '),
  rlSync.question('Enter the 5th number: '),
];

var lastNumber = rlSync.question('Enter the last number: ');
var appears = numbers.includes(lastNumber) ? 'appears' : 'does not appear';

console.log(`The number ${lastNumber} ${appears} in [${numbers.join(', ')}].`);
