// Exercise 4

/*

The more efficient way to go through this array is to first sort it and then
iterate through it one element at a time. If the current element is the same
as the next element, return it.

*/

const findDup = function findDup(arrayOfNums) {
  var sortedArrayOfNums = arrayOfNums.slice().sort((a, b) => a - b);

  for (let i = 0, elem; i < sortedArrayOfNums.length; ++i) {
    elem = sortedArrayOfNums[i];
    if (elem === sortedArrayOfNums[i + 1]) return elem;
  }
};
