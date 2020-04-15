// Exercise 4

let name = 'Bob';
let saveName = name;
name.toUpperCase();
console.log(name, saveName); // Bob Bob

/*

Answer
------
This is because the `String.prototype.toUpperCase` method returns a new string
rather than reassiging the value of the variable that calls it.

The Takeaway
------------
Strings are immutable

Further Exploration
-------------------
It is true that only objects can have methods and properties and a string
primitive isn’t able to call a method. However, JavaScript automatically
coerces a string primitive by wrapping it in a `String` object (as opposed
to a string primitive) and calling the method, then removing the wrapping
after the fact.

*/
