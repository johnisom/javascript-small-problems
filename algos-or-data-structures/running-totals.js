// Exercise 7

const runningTotal = function runningTotal(array) {
  var result = array.slice();

  for (let i = 1; i < result.length; ++i) {
    result[i] += result[i - 1];
  }

  return result;
};
