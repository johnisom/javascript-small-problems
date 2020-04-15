// Exercise 10

const MIN_PER_DAY = 1440;
const MSEC_PER_MIN = 60000;

const afterMidnight = function afterMidnight(timeStr) {
  return Date.parse('1970-01-01 ' + timeStr + ' GMT') / MSEC_PER_MIN;
};

const beforeMidnight = function beforeMidnight(timeStr) {
  return (MIN_PER_DAY - afterMidnight(timeStr)) % MIN_PER_DAY;
};
