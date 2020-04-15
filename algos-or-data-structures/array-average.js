// Exercise 10

const average = function average(array) {
  var sum = array.reduce((accum, elem) => accum + elem);
  return Math.floor(sum / array.length);
};
