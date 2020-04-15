// Exercise 6

const multiplicativeAverage = function multiplicativeAverage(numbers) {
  var product = numbers.reduce((accum, elem) => accum * elem);

  return (product / numbers.length).toFixed(3);
};
