// Exercise 6

/*

No, the user's expectation is not correct. This is because the average
function is flawed. It starts summing from the key -2 all the way up to index
1, adding up four elements, but only divides by 2.

Refactoring below:

*/

function average(array) {
  var sum = 0;
  var i;

  for (i = -2; i < array.length; i += 1) {
    sum += array[i];
  }

  return sum / Object.keys(array).length;
}
