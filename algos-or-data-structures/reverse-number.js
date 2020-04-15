// Exercise 3

const reverseNumber = function reverseNumber(integer) {
  return parseInt(String(integer).split('').reverse().join(''), 10);
};


// I time tested this, it's over 10x as fast
const reverseNumberEfficient = function reverseNumberEfficient(integer) {
  var result = 0;

  while (integer > 0) {
    let remainder = integer % 10;
    integer = (integer - remainder) / 10;

    result *= 10;
    result += remainder;
  }

  return result;
};
