// Exercise 4

// Memoized recursive fibonacci is super fast and efficient, similar to an
// iterative algorithm
const fibonacci = (function() {
  let memo = {};

  const fib = function fib(n) {
    if (String(n) in memo) return memo[String(n)];

    let result = n <= 2 ? 1 : fib(n - 1) + fib(n - 2);
    memo[String(n)] = result;
    return result;
  };

  return fib;
})();

const findFibonacciIndexByLength = function findFibonacciIndexByLength(n) {
  let i = 0;

  while (true) {
    if (String(fibonacci(++i)).length === n) return i;
  }
};

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74
