# Exercise 6 #

## Sample Code ##

``` javascript
var a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);
```

## Answer ##

```
7
```

This is because `a` is not mutated on line 4, but the _local variable_/
_argument_ `b` is merely reassigned, which has nothing to do with `a` other
that it being initialized with `a`'s value.
