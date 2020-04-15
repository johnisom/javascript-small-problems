// Exercise 10

const wordSizes = function wordSizes(words) {
  let result = {};

  words.split(' ').forEach(function(word) {
    let len = word.replace(/[^a-z]/ig, '').length;
    if (len !== 0) {
      result[len] = result[len] || 0;
      ++result[len];            
    }
  });

  return result;
};
