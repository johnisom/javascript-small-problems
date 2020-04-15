// Exercise 3

const rlSync = require('readline-sync');

var currentYear = new Date().getFullYear();

var currentAge = parseInt(rlSync.question('What is your age? '), 10);
var retirementAge = parseInt(
  rlSync.question('At what age would you like to retire? '),
  10
);

var yearsOfWork = retirementAge - currentAge;
var retirementYear = currentYear + yearsOfWork;

console.log(`\nIt's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsOfWork} years of work to go!`);
