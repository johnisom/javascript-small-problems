// Exercise 8

const getGrade = function getGrade(score1, score2, score3) {
  let average = (score1 + score2 + score3) / 3;

  if (average > 100 || average < 0) return 'INVALID SCORES';
  if (average >= 90) return 'A';
  if (average >= 80) return 'B';
  if (average >= 70) return 'C';
  if (average >= 60) return 'D';
  return 'F';
};

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
