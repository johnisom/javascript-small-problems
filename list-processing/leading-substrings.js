// Exercise 5

/**
 * This isn't quite a solution that uses list abstractions, but it was the
 * most efficient and intuitive way that I saw.
 */

const substringsAtStart = function substringsAtStart(string) {
  const result = [];

  for (let i = 1; i <= string.length; i += 1) {
    result.push(string.slice(0, i));
  }

  return result;
};
