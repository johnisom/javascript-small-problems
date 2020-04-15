// Exercise 6

const substringsAtStart = function substringsAtStart(string) {
  const result = [];

  for (let i = 1; i <= string.length; i += 1) {
    result.push(string.slice(0, i));
  }

  return result;
};

const substrings = function substrings(string) {
  const result = [];

  for (let i = 0; i < string.length; i += 1) {
    result.push(substringsAtStart(string.slice(i)));
  }

  return result.flat();
};
