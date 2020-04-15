// Exercise 10

const centurySuffix = function centurySuffix(number) {
  number %= 100;

  if (number >= 11 && number <= 13) return 'th'

  switch (number % 10) {
  case 1: return 'st';
  case 2: return 'nd';
  case 3: return 'rd';
  default: return 'th';
  }
};

const century = function century(year) {
  let century = Math.ceil(year / 100);

  return String(century) + centurySuffix(century);
};

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
