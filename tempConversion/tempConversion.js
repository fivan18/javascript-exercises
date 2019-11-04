const ftoc = function(fahrenheit) {
  return Math.round((fahrenheit-32)*(5/9) * 10) / 10;
}

const ctof = function(celsius) {
  return Math.round((celsius * 9/5 + 32)* 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
