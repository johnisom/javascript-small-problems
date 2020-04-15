// Exercise 3

const halvsies = function halvsies(array) {
  var halfway = Math.ceil(array.length / 2);

  return [array.slice(0, halfway), array.slice(halfway)];
};
