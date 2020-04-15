// Exercise 1

const dms = function dms(degrees) {
  var degs = String(Math.floor(degrees % 360));
  var mins = String(Math.floor(degrees % 1 * 60)).padStart(2, '0');
  var secs = String(Math.floor(degrees % 1 * 60 % 1 * 60)).padStart(2, '0');

  return `${degs}°${mins}'${secs}"`
};
