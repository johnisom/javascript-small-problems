// Exercise 6

const reverseString = function reverseString(string) {
  return string.split('').reverse().join('');
};

const isPalindrome = function isPalindrome(string) {
  return string === reverseString(string);
};


const isPalindromicNumber = function isPalindromicNumber(integer) {
  return isPalindrome(String(integer));
};
