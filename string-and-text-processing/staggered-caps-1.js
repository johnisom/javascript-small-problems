// Exercise 6

// Prime candidate for a split map join
const staggeredCase = function staggeredCase(string) {
  return string.split('').map((chr, idx) => (
    idx % 2 === 0 ? chr.toUpperCase() : chr.toLowerCase()
  )).join('');
};

// Much longer, probably faster though
const staggeredCaseIterative = function staggeredCaseIterative(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (i % 2 === 0) {
      result += string[i].toUpperCase();
    } else {
      result += string[i].toLowerCase();
    }
  }

  return result;
};

// Inspired by Nick Johnson:
const staggeredCaseNick = (str) => (
  str.replace(/./g, (c, i) => c[`to${['Upp', 'Low'][i % 2]}erCase`]())
);
