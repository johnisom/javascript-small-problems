// Exercise 10

const searchWord = function searchWord(word, text) {
  if (arguments.length < 2) return '';
  const regex = RegExp(`\\b${word}\\b`, 'gi');
  return text.replace(regex, `**${word.toUpperCase()}**`);
};
