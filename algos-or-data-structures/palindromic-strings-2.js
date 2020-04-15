// Exercise 5

const reverseString = function reverseString(string) {
  return string.split('').reverse().join('');
};

const isPalindrome = function isPalindrome(string) {
  return string === reverseString(string);
};

const isRealPalindrome = function isRealPalindrome(string) {
  return isPalindrome(string.toUpperCase().replace(/\W/g, ''));
};
