# Exercise 1 #

## Sample Code ##

``` javascript
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);
```

## Answer ##

'This is global' because the `myVar` declared and initialized on line 4 is a
local variable and shadows the global `myVar`.
