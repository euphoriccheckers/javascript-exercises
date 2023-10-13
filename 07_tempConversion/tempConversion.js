const convertToCelsius = function(temp) {
  //	x °F ≘ (x − 32) × 5/9 °C
  temp = (temp - 32) * (5/9);
  //to round decimal: Math.round(num*multiplier)/multiplier
  return Math.round(temp * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  //	x °C ≘ (x × 9/5 + 32) °F
  temp = temp * (9/5) + 32;
  //to round decimal: Math.round(num*multiplier)/multiplier
  return Math.round(temp * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
