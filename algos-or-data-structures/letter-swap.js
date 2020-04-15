// Exercise 8

const swapLetters = function swapLetters(word) {
  if (word.length === 1) return word;

  return word[word.length - 1] + word.slice(1, -1) + word[0];
};

const swap = function swap(string) {
  return string.split(' ').map(word => swapLetters(word)).join(' ');
};
