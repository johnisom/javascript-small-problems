// Exercise 6

const rlSync = require('readline-sync');

let answer = rlSync.question('Please enter a phrase: ');
let length = answer.match(/\w/g).length

console.log(`There are ${length} letters in "${answer}"`)
