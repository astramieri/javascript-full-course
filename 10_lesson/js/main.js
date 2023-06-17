// User Input

alert("Hello, World!") // browser only

let myBoolean = confirm("Ok === True\nCancel = False");

console.log(myBoolean);

let myName = prompt("Please enter your name.");
console.log(typeof myName);
if (myName) {
	console.log(myName.trim());
} else {
	console.log("You didn't enter your name");
}
