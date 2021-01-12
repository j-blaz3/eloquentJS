// The Sum of a Range

function range(start, end, step) {
	var result = [];
	if (!step){
		step = 1;
	}
	if (start < end) {
		for (var i = start; i <= end; i+=step) {
				result.push(i);
		}
	} else {
		for (var i = start; i >= end; i+=step) {
			result.push(i);
		}
	}
	return result;
};

function sum(arr) {
	var tot = 0;
  for (var i = 0; i < arr.length; i++) {
    tot += arr[i];
	}
	return tot;
};


console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55s