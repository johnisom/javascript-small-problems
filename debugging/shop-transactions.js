// Exercise 6

/*

There is a missing `(error)` in the catch statement so `error` isn't a local
variable.

Fixed and refactored code:

*/

const rlSync = require('readline-sync');

const transactionLog = [];

const processInput = function processInput(input) {
  return parseFloat(input, 10);
}

const logTransaction = function logTransaction() {
  let data = rlSync.question('Please enter the transaction amount: ');
  data = processInput(data);

  if (!Number.isNaN(data)) {
    transactionLog.push(data);

    console.log('Thank you. Data accepted.');
  } else {
    console.log(error.message);
  }
}

const transactionTotal = function transactionTotal() {
  return transactionLog.reduce((total, transaction) => total + transaction);
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());
