# Exercise 8 #

## Sample Code ##

``` javascript
var a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);
```

## Answer ##

```
1,2,10
```

This is because the statement on line 4 is a _mutating_ statement. When we pass
in `a` as an argument to `myValue`, we actually pass a _reference_ to `a` in
because `a` is an object. That means that `b` points to the _same object_.
