// Exercise 2

// Perfect for a string replace

const removeVowels = function removeVowels(stringArray) {
  return stringArray.map((string) => string.replace(/[aeiou]/gi, ''));
};
