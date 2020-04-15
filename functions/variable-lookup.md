# Exercise 4 #

## Sample Code ##

``` javascript
var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();
```

## Answer ##

```
This is global
```

This is because when we try to log `myVar`, there is no local variable with
that name so the program looks to the next outside scope which just so happens
to have a `myVar` variable.
