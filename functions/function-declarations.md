# Exercise 10 #

## Sample Code ##

``` javascript
logValue();

function logValue() {
  console.log('Hello, world!');
}
```

## Answer ##

```
Hello, world!
```

With function declarations, the the whole thing is hoisted to the top of the
file (not really, but interpreted as such). That means that we can reference
and invoke functions before they're declared if they are done so using
function declaration syntax.

### Further Exploration ###

```
string
```

Because the function `logValue` gets hoisted above the variable assignment of
`logValue`, the assigment is evaluated most recently so the variable `1ogValue`
now holds a string rather than a function.
