// Recursion

function isEven(n) {
	let num = Math.abs(n);
	if (num === 0 ) {
		return true;
	} else if (num === 1) {
		return false;
	} else {
		return isEven(num - 2);
	}
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
