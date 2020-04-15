// Exercise 4

const reverseString = function reverseString(string) {
  return string.split('').reverse().join('');
};

const isPalindrome = function isPalindrome(string) {
  return string === reverseString(string);
};
