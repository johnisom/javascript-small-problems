// Exercise 3

const concat = function concat(arr, arrOrElem) {
  let result = arr.slice();

  if (Array.isArray(arrOrElem)) {
    arrOrElem.forEach(elem => result.push(elem));
  } else {
    result.push(arrOrElem);
  }

  return result;
};
