# Exercise 2 #

## Sample Code ##

``` javascript
var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();
```

## Answer ##

'This is local' because the `myVar` declared on line 4 has local
scope. Variable shadowing.
