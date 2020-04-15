// Exercise 5

const pop = function pop(arr) {
  if (arr.length === 0) return;

  let result = arr[arr.length - 1];

  --arr.length

  return result;
};

const push = function push(arr, ...args) {
  args.forEach(function(elem) {
    arr[arr.length] = elem;
  });

  return arr.length;
};
