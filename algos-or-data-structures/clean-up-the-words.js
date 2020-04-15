// Exercise 9

const cleanUp = string => string.replace(/[^a-z]+/ig, ' ');

console.log('"' + cleanUp("---what's my +*& line?") + '"');
