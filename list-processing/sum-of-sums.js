// Exercise 4

/**
 * This is a reduce within a reduce problem. I will have a big outer reduce
 * with the big sum and index of the array and the inner reduce will use
 * Array.prototype.slice to get a subarray and sum it.
 */

const sumOfSums = function sumOfSums(arr) {
  return arr.reduce((outerSum, outerNum, idx) => (
    outerSum + arr.slice(0, idx + 1).reduce((a, b) => a + b)
  ));
};
