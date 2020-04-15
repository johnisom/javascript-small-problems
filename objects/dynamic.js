// Exercise 4

/*

What
----
678
456

Why
---
On line 8 we are assigning the property prop2 using bracket notation. This
overwrites the previous value for the prop2 property.

On line 9 we are assigning the property 456 using bracket notation. This is
because for property access via brackt notation, the expression inside the
brackets are evaluated and coerced into strings. So prop2 evaluates to '456'
and that is used as the property key.

The same reasoning for bracket notation explains the console output.

Further Exploration
===================

What
----
{ funcProp: 'hello, ' }
{ funcProp: 'world!' }

Why
---
When we're using bracket notation, the code inside the bracket is evaluated and
coerced to a string. Not to mention the function hoisting.

*/
