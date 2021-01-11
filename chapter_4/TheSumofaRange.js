// Your code here.
function range(start, end) {
	let s = start;
	let e = end;
	let result = [];
	for (let i = s; i <= e; i++) {
		result.push(i);
	}
	return result;
};


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// → 55s