// Exercise 8

/*

The problem is that there is no property of "-2" on the array object so
it returns undefined. Since JavaScript Arrays don't support negative indices,
you need to access the nth to last element with this form:
array[array.length - n]

Fixed solution:

*/

function penultimate(string) {
  var words = string.split(' ');
  return words[words.length - 2];
}
