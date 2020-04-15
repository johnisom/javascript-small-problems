// Exercise 2

const isConsonant = function isConsonant(chr) {
  return /^[b-df-hj-np-tv-z]$/i.test(chr);
};

const doubleConsonants = function doubleConsonants(string) {
  var result = '';

  for (let chr of string) {
    result += isConsonant(chr) ? chr + chr : chr;
  }

  return result;
};
