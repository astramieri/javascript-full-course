// strings
const myVariabile = "Mathematics";

console.log(myVariabile.length); // returns: 11

console.log(myVariabile.charAt(0)); // returns: "M"


console.log(myVariabile.indexOf("at")); // returns: 1
console.log(myVariabile.lastIndexOf("at")); // returns: 6

console.log(myVariabile.slice(5)); // returns: "matics"
console.log(myVariabile.slice(5, 8)); // returns: "mat"

console.log(myVariabile.toLowerCase()); // returns: "mathematics"
console.log(myVariabile.toUpperCase()); // returns: "MATHEMATICS"

console.log(myVariabile.includes("y")); // returns: false
console.log(myVariabile.indexOf("y")); // returns: -1

console.log(myVariabile.split("e")); // returns: ['Math', 'matics']
console.log(myVariabile.split("")); // returns: ['M', 'a', 't', 'h', 'e', 'm', 'a', 't', 'i', 'c', 's']