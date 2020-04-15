// Exercise 5

/*

On line 34, we _declare_ the `minutes` variable in the _local_ scope. It is
_hoisted_ to the top of the scope and initialized to `undefined`. It _shadows_
the global `minutes` variable so that `pomodoro` doesn't have access to it any
more. The while loop never executes because `minutes` will always be
`undefined` at that point due to the hoisting and `undefined < 25` evaluates
to `false`.

TL;DR: The declaration on line 34 should just be an assignment.

The fixed code is below:

*/

const tasks = 10;
let checkmarks = 0;
let sessions = 0;
let minutes = 0;

const pomodoro = function pomodoro() {
  console.log('Work.');

  while (minutes < 25) {
    minutes += 1;
    console.log(`...${minutes}`);
  }

  console.log('PLING!');

  sessions += 1;
  checkmarks += 1;

  if (checkmarks === tasks) {
    console.log('Done!');
    return;
  }

  let rest;
  if (sessions === 4) {
    sessions = 0;
    rest = 30;
  } else {
    rest = 5;
  }

  console.log(`Rest for ${rest} minutes.`);

  minutes = 0;
  pomodoro();
};

pomodoro();
