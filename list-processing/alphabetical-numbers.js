// Exercise 2

const alphabeticNumberSort = function alphabeticNumberSort(nums) {
  const numberNames = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
                       'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
                       'thirteen', 'fourteen', 'fifteen', 'sixteen',
                       'seventeen', 'eighteen', 'nineteen'];

  return nums.sort((a, b) => {
    if (numberNames[a] < numberNames[b]) return -1;
    if (numberNames[a] > numberNames[b]) return 1;
    return 0;
  });
};
