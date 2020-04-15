// Exercise 8

const sequence = function sequence(count, start) {
  return Array(count).fill(null).map((_, idx) => (idx + 1) * start);
};
