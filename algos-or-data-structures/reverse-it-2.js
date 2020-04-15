// Exercise 10

const reverseWord = function reverseWord(word) {
  return word.length < 5 ? word : [...word].reverse().join('');
};

const reverseWords = function reverseWords(sentence) {
  return sentence.split(' ').map(reverseWord).join(' ');
};
