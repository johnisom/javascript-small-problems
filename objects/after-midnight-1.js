// Exercise 9

const MILLISECONDS_PER_MINUTE = 60000;

const timeOfDay = function timeOfDay(deltaMinutes) {
  var deltaDate = new Date(deltaMinutes * MILLISECONDS_PER_MINUTE);

  var hours = String(deltaDate.getUTCHours()).padStart(2, '0');
  var minutes = String(deltaDate.getUTCMinutes()).padStart(2, '0');

  return hours +  ':' + minutes;
};
