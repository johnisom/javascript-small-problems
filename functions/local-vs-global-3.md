# Exercise 3 #

## Sample Code ##

``` javascript
var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);
```

## Answer ##

```
This is local
```

This is because we reassign the global variable on line 4.
