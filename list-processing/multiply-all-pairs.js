// Exercise 3

const multiplyAllPairs = function multiplyAllPairs(nums1, nums2) {
  return nums1.flatMap((num1) => nums2.map((num2) => num1 * num2))
              .sort((a, b) => a - b);
};
