// Exercise 5

// for calculating the product
const factorial = function factorial(n) {
  let result = 1;

  for (let i = 2; i <= n; ++i) {
    result *= i;
  }

  return result;
};

// for calculating the sum
const triangularNumber = function triangularNumber(n) {
  return n * (n + 1) / 2;
};

let number = parseInt(prompt('Please enter an integer greater than 0:'), 10);
let operation = prompt('Enter "s" to compute the sum or "p" to compute ' +
		       'the product');
operation = operation === 's' ? 'sum' : 'product';

let result = operation === 'sum' ? triangularNumber(number) : factorial(number);

console.log(`The ${operation} of the integers between 1 and ` +
	    `${number} is ${result}.`);
