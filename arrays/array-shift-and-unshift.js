// Exercise 7

const shift = function shift(arr) {
  if (arr.length === 0) return;

  let result = arr[0];

  for (let i = 0; i < arr.length - 1; ++i) {
    arr[i] = arr[i + 1];
  }

  --arr.length

  return result;
};

const unshift = function unshift(arr, ...args) {
  for (let i = arr.length - 1; i >= 0; --i) {
    arr[i + args.length] = arr[i];
  }

  args.forEach((elem, idx) => arr[idx] = elem);

  return arr.length;
};
