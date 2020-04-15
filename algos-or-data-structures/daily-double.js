// Exercise 1

const crunch = function crunch(string) {
  let result = '';

  for (let i = 0; i < string.length; ++i) {
    if (string[i] === string[i + 1]) continue;

    result += string[i];
  }

  return result;
};

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

const crunchRegexp = string => string.replace(/(.)\1+/g, '$1');

console.log(crunchRegexp('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunchRegexp('4444abcabccba'));              // "4abcabcba"
console.log(crunchRegexp('ggggggggggggggg'));            // "g"
console.log(crunchRegexp('a'));                          // "a"
console.log(crunchRegexp(''));                           // ""
