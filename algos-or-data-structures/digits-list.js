// Exercise 8

const digitList = function digitList(integer) {
  var result = [];
  var stringInt = String(integer);

  for (let i = 0; i < stringInt.length; ++i) {
    result.push(parseInt(stringInt[i], 10));
  }

  return result;
};

const digitListShort = function digitListShort(integer) {
  return String(integer).split('').map(digit => parseInt(digit, 10));
};

const anotherDigitList = function anotherDigitList(integer) {
  var result = [];

  do {
    let remainder = integer % 10;
    integer = (integer - remainder) / 10;
    result.unshift(remainder);
  } while (integer > 0);

  return result;
};
