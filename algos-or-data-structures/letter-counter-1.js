// Exercise 9

const wordSizes = function wordSizes(words) {
  let result = {};

  words.split(' ').forEach(function(word) {
    let len = word.length;
    if (len === 0) continue;

    result[len] = result[len] || 0;
    ++result[len];      
  });

  return result;
};
