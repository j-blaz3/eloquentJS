// Bean Counting

function countBs(str) {
	let counter = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "B"){
			counter += 1;
		}
	}
	return `${counter} uppercase "B" characters in "${str}"`;
}

console.log(countBs("Bears, Beets, Battlestar Galactica"));

function countChars(str, char) {
	let counter = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char){
			counter += 1;
		}
	}
	return `${counter} "${char}" characters in "${str}"`;
}

console.log(countChars("Bears, Beets, Battlestar Galactica", "a"));
