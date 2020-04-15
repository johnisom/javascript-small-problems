// Exercise 1

// Faster, but more code
const repeater = function repeater(string) {
  var result = '';

  for (let chr of string) {
    result += chr + chr;
  }

  return result;
};


// Less code, but slower
const repeaterSplitMap = function repeaterSplitMap(string) {
  return string.split('').map(chr => chr + chr).join('');
};
