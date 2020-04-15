// Exercise 9

const searchWord = function searchWord(word, text) {
  if (arguments.length < 2) return 0;
  return (text.match(RegExp(`\\b${word}\\b`, 'gi')) || []).length;
};
