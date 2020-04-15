// Exercise 5

const triangle = function triangle(n) {
  for (let i = 1; i <= n; ++i) {
    console.log('*'.repeat(i).padStart(n));
  }
};

triangle(5);
triangle(9);
