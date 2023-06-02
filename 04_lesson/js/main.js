// numbers
const myNumber = 42;
const myFloat = 42.0;
const myString = "42";

console.log(myNumber);
console.log(myFloat);
console.log(myString);

console.log(myNumber === myFloat);			// returns: true
console.log(myNumber === myString);			// returns: false
console.log(myNumber === Number(myString));	// returns: true

console.log(Number("hello"));	// returns: NaN

console.log(Number(true));	// returns: 1
console.log(Number(false));	// returns: 0

console.log(Number.isInteger(myNumber));	// returns: true
console.log(Number.isInteger(myFloat));		// returns: true