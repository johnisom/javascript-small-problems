// Exercise 3

const letterCaseCount = function letterCaseCount(string) {
  const result = { lowercase: 0, uppercase: 0, neither: 0 };

  for (const char of string) {
    if (char >= 'a' && char <= 'z') {
      result.lowercase += 1;
    } else if (char >= 'A' && char <= 'Z') {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  }

  return result;
};
