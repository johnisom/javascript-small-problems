// Exercise 10

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(integer) {
  let result = '';

  for (let remainder = integer % 10; integer > 0; remainder = integer % 10) {
    integer = (integer - remainder) / 10;
    result = DIGITS[remainder] + result;
  }

  return result || '0';
}

function signedIntegerToString(integer) {
  let sign;
  if (integer > 0) {
    return '+' + integerToString(integer);
  } else if (integer < 0) {
    return '-' + integerToString(-integer);
  } else {
    return '0';
  }
}

console.log(signedIntegerToString(4321)); // "+4321"
console.log(signedIntegerToString(-123)); // "-123"
console.log(signedIntegerToString(0));    // "0"
