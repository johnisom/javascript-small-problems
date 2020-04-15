// Exercise 7

/**
 * A simple iterate through with boolean flag should work nicely
 */

const staggeredCase = function staggeredCase(string) {
  let result = '';
  let upperCaseFlag = true;

  for (const char of string) {
    if (/[a-z]/i.test(char)) {
      result += upperCaseFlag ? char.toUpperCase() : char.toLowerCase();
      upperCaseFlag = !upperCaseFlag;
    } else {
      result += char;
    }
  }

  return result;
};
