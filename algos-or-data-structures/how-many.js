// Exercise 9

const countOccurrences = function countOccurrences(array) {
  var counts = {};

  for (let elem of array) {
    counts[elem] = counts[elem] || 0;
    ++counts[elem];    
  }

  for (let key in counts) {
    console.log(key, '=>',  counts[key]);
  }
};
