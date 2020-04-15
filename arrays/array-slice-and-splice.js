// Exercise 8

const slice = function slice(array, begin, end) {
  if (begin > array.length) {
    begin = array.length;
  }

  if (end > array.length) {
    end = array.length;
  }

  let result = [];

  for (let i = begin; i < end; ++i) {
    result.push(array[i]);
  }

  return result;
};

const splice = function splice(array, start, deleteCount, ...elements) {
  if (start > array.length) {
    start = array.length;
  }

  if (deleteCount > array.length - start) {
    deleteCount = array.length - start;
  }

  let result = slice(array, start, start + deleteCount);

  let lastBit = slice(array, start + deleteCount, array.length);

  for (let i = 0, len = array.length; i < len - start; ++i) {
    array.pop();
  }

  elements.concat(lastBit).forEach(elem => array.push(elem));

  return result;
};
