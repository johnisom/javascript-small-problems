// Exercise 3

const METER_TO_FOOT = 3.28085;
const SQ_METER_TO_SQ_FOOT = 10.7639;

let width = prompt('What is the width of the room (m or ft)?');
let length = prompt('What is the length of the room (m or ft)?');

if (width.endsWith('ft') || width.endsWith('feet')) {
  width = parseFloat(width, 10) / METER_TO_FOOT;
} else {
  width = parseFloat(width, 10);
}

if (length.endsWith('ft') || length.endsWith('feet')) {
  length = parseFloat(length, 10) / METER_TO_FOOT;
} else {
  length = parseFloat(length, 10);
}

let meterArea = width * length;
let footArea = meterArea * SQ_METER_TO_SQ_FOOT;

console.log('The area of the room is ' +
	    `${meterArea.toFixed(2)} m² (${footArea.toFixed(2)} ft²).`);
