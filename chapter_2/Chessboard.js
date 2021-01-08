// Chessboard

let size = 8;
let str = "";

for (let i = 0; i < size; i++) {
	for (let j = 0; j < size; j++) {
		if (j % size === 0) {
			str += "\n";
			if (i % 2 === 0){
				str += " ";
			}
		} else if (j % 2 === 0) {
			str += " ";
		} else {
			str += "#";
		}
	}
}

console.log(str);
console.log(`size: ${size}x${size}`);
