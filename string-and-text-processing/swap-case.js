// Exercise 5

// Regex based solution
const swapCase = function swapCase(string) {
  return string.replace(/([a-z])|([A-Z])/g, (match, lower, upper) => (
    lower && lower.toUpperCase() || upper && upper.toLowerCase()
  ));
};
