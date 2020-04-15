// Exercise 2

const union = function union(array, ...arrs) {
  var result = array.slice();

  arrs.forEach(arr => {
    arr.forEach(elem => {
      if (!result.includes(elem)) result.push(elem);
    });
  });

  return result;
};
