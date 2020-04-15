// Exercise 7

const swapName = function swapName(fullName) {
  return fullName.split(' ').reverse().join(', ');
};

const swapBigName = function swapBigName(fullName) {
  var names = fullName.split(' ');
  return names.slice(-1) + ', ' + names.slice(0, -1).join(' ');
};
