// if statement

let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = false;
let reply;

if (customerIsBanned) {
  reply = "No soup for you!";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} and crackers`;
} else if (soup) {
  reply = `Here's your order of ${soup}`;
} else {
  reply = "Sorry, we are out of soup";
}

console.log(reply);

let testScore = 89;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U"; // unsatisfactory
  } else {
    grade = "F";
  }
}

console.log(grade);
