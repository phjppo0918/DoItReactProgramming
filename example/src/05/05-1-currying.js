function multiply(a,b) {
	return a*b;
}

function multiplyTwo(a) {
	return multiply(a,2);
}
function multiplyX(x) {
	return function(a) {
		return multiply(a, x);
	}
}

// => (x*a) * b + c
// a = 2, b = 3, c = 4
const equation = (a,b,c) => x => x*a*b+c;
const k = equation(2,3,4)(10);