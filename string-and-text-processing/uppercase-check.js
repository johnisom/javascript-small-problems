// Exercise 1

/**
 * This can be done with splitting the string into an array, calling the every
 * array method, and checking that they're upper or lower case. Alternatively,
 * I could opt for a more efficient solution by directly iterating through the
 * string. I will demonstrate both.
 *
 * EDIT: I was not thinking very clearly and that is apparrent. I could have
 * solved it with a simple string === string.toUpperCase() check...
 */
// BAD SOLUTION
const isUppercase = function isUppercase(string) {
  for (const char of string) {
    if (char.toUpperCase() !== char) return false;
  }

  return true;
};

// BAD SOLUTION
const isUppercaseAbstracted = function isUppercaseAbstracted(string) {
  return string.split('').every((char) => char.toUpperCase() === char);
};

// Nayib Abdala solution:
const isUppercaseNayib = (string) => string === string.toUpperCase();

// This is the LS solution that I didn't come up with because I'm dumb:
const isUppercaseLS = (string) => !/[a-z]/.test(string);
