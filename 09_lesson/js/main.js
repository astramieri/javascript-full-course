// ternary operator

// syntax: condition ? if_true: if_false;

let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have soup." : "Sorry, no soup today";

console.log(response);

let isCustomerBanned = false;
let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you!"
  : soup
  ? `Yes, we have ${soup} today`
  : "Sorry, no soup today";

console.log(soupAccess);

let testScore = 82;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : testScore > 49
    ? "E"
    : "F";

console.log(myGrade);
