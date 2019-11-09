function add (a,b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (arr) {
	return arr.length === 0
			? 0
			: arr.reduce((accum, value) => accum += value, 0);
}

function multiply (arr) {
	return arr.length === 0
			? 0
			: arr.reduce((accum, value) => accum *= value, 1);
}

function power(base, power) {
	return Math.pow(base,power);	
}

function factorial(num) {
	if(num === 0){
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}