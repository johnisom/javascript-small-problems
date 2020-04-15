# Exercise 7 #

## Sample Code ##

``` javascript
var a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);
```

## Answer ##

```
7
```

This is because the statement `a += 10` is reassigning the _local_ variable
`a`, not the outer scoped global `a`. Remember, arguments for functions are
initialized as local variables.
