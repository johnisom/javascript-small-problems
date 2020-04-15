// Exercise 8

const wordLengths = function wordLengths(string) {
  if (!string) return [];
  return string.split(' ').map((word) => `${word} ${word.length}`);
};
