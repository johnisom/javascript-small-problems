// Exercise 10

// I can't sort the array and then compare because the sort order isn't
// completely guaranteed.
const areArraysEqual = function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) return false;

  let array2Copy = array2.slice();

  for (let i = 0; i < array1.length; ++i) {
    let index = array2Copy.indexOf(array1[i])
    if (index === -1) return false;

    array2Copy.splice(index, 1);
  }

  return true;
};
