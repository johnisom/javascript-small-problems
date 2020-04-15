// Exercise 5

const interleave = function interleave(arr1, arr2) {
  var result = [];

  for (let i = 0; i < arr1.length; ++i) {
    result.push(arr1[i], arr2[i]);
  }

  return result;
};
