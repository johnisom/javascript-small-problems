// Exercise 3

const stringy = n => '10'.repeat(n / 2) + (n % 2 === 1 ? '1' : '');

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");

