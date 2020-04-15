// Exercise 1

/*

There are two issues here:
1. The function randomGreeting does not actually return the intended value.
2. On line 16, we mean to assign to greeting the result of calling the
   randomGreeting function, but we don't call it. Instead, greeting is
   assigned the value of the function object randomGreeting.

The fixed code is below:

*/

const randomGreeting = function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', "What's up",
                 'Greetings','Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  return words[idx];
};

const greet = function greet(...names) {
  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    const greeting = randomGreeting();

    console.log(`${greeting}, ${name}!`);
  }
};

greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian');
