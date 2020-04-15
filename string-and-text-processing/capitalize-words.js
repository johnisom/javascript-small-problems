// Exercise 4

const wordCap = function wordCap(string) {
  return string.split(' ').map((word) => capitalize(word)).join(' ');
};

const capitalize = function capitalize(string) {
  if (string === '') return '';
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
};
