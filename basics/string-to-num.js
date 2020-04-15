// Exercises 7 and 8

const DIGITS = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 };

function stringToInteger(string) {
  let result = 0;
  let negative = false;

  if (string[0] === '+') {
    string = string.slice(1);
  } else if (string[0] === '-') {
    negative = true;
    string = string.slice(1);
  }

  for (let i = 0; i < string.length; ++i) {
    result *= 10;
    result += DIGITS[string[i]]
  }

  return negative ? -result : result;
}

console.log(stringToInteger('4321'));
console.log(stringToInteger('-570'));
console.log(stringToInteger('+100'));
