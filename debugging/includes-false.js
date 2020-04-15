// Exercise 2

/*

It happens because when we compare 0 to false using loose equality (`==`), it
returns true. To fix this, we must use strict equality (`===`).

EDIT: `==` is also known (more commonly, I argue) as the _abstract equality
operator_.

Fixed code below:

*/

const includesFalse = function includesFalse(list) {
  for (let i = 0; i < list.length; i += 1) {
    const element = list[i];

    if (element === false) {
      return true;
    }
  }

  return false;
};

                                                                  // returns:
includesFalse([8, null, 'abc', true, 'launch', 11, false]);       // true
includesFalse(['programming', undefined, 37, 64, true, 'false']); // false
includesFalse([9422, 'lambda', true, 0, '54', null]);             // false!
