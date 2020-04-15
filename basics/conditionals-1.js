// Exercise 2

var myBoolean = true;
var myString = 'hello';
var myArray = [];
var myOtherString = '';

if (myBoolean) {
  console.log('Hello'); // Hello
}

if (!myString) { // Not Reached
  console.log('World');
}

if (!!myArray) {
  console.log('World'); // World
}

if (myOtherString || myArray) {
  console.log('!'); // !
}

/*

Yes, this is precisely what I expected to happen.

*/
