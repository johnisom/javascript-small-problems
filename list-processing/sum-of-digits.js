// Exercise 1

/**
 * This will convert the number to a sting, split that string, and then
 * use reduce to add together the digits that will be coerced to ints.
 *
 * One possible solution is to actually map to numbers and then reduce, but
 * that would require an extra iteration which is needlessly wasteful.
 */

const sum = function sumOfDigits(integer) {
  const digitChars = String(integer).split('');
  return digitChars.reduce((sum, digit) => sum + Number(digit), 0);
};
