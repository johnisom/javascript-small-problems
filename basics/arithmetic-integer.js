// Exercise 5

const rlSync = require('readline-sync');

let number1 = parseInt(rlSync.question('Enter the first number: '), 10);
let number2 = parseInt(rlSync.question('Enter the second number: '), 10);

console.log(number1 + ' + ' + number2 + ' = ' + (number1 + number2));
console.log(number1 + ' - ' + number2 + ' = ' + (number1 - number2));
console.log(number1 + ' * ' + number2 + ' = ' + (number1 * number2));
console.log(number1 + ' / ' + number2 + ' = ' + Math.floor(number1 / number2));
console.log(number1 + ' % ' + number2 + ' = ' + (number1 % number2));
console.log(number1 + ' ** ' + number2 + ' = ' + Math.pow(number1, number2));
