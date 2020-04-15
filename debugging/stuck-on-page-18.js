// Exercise 10

/*

This is a logic error. Each time we invoked the `read` function, declare a new
local variable `currentPage` and initialize it to 1 every time, making it
impossible to get past page 18.

The solution is to create a global variable that is accessed from each
function invocation:

*/

const totalPages = 364;
let energy = 100;
let currentPage = 1;

const read = function read() {
  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log('Made it to page ' + String(currentPage) + '.');

  // Drink a cup of coffee.
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
};

read();
