# Exercise 5 #

## Sample Code ##

``` javascript
function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);
```

## Answer ##

```
This is global
```

When we assign a value to a variable that has not been declared, it is assigned
to the global object, making it available everywhere in the program.
