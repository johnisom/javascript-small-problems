// Exercise 4

const concat = function concat(arr, ...args) {
  let result = arr.slice();

  args.forEach(function (arrOrElem) {
    if (Array.isArray(arrOrElem)) {
      arrOrElem.forEach(elem => result.push(elem));
    } else {
      result.push(arrOrElem);
    }
  });

  return result;
};

