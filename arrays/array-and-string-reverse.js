// Exercise 6

const reverse = function reverse(stringOrArray) {
  if (Array.isArray(stringOrArray)) {
    let result = [];

    stringOrArray.forEach(elem => result.unshift(elem));

    return result;
  } else {
    return reverse(stringOrArray.split('')).join('');
  }
};
