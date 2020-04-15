// Exercise 7

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

/*

Every function has access to a local variable called "arguments." It is an
array-like object that you can iterate over using a classic for loop or
a for...of loop. It isn't an array so it doesn't support Array methods
like filter, forEach, and more.

The contents of "arguments" are all the arguments passed into the function,
regardless of whether there are parameters defined.

*/
