// Exercise 4

const centerOf = function centerOf(string) {
  var halfway = Math.floor(string.length / 2);

  if (string.length % 2 === 1) {
    return string[halfway];
  } else {
    return string.slice(halfway - 1, halfway + 1);
  }
};
