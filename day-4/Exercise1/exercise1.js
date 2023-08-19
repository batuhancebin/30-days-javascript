//Drivers age
let age = Number(prompt("What is your age:"));
if (age < 18) {
  console.log("Sorry, you are too young to drive this car. Powering off");
} else if (age === 18) {
  console.log("Congratulations on your first year of driving. Enjoy the ride!");
} else {
  console.log("Powering On. Enjoy the ride!");
}

//ages comparison
let ageOfPerson1 = Number(prompt("What is the age of the first person:"));
let ageOfPerson2 = Number(prompt("What is the age of the second person:"));
if (ageOfPerson1 > ageOfPerson2) {
  let ageDifference = ageOfPerson1 - ageOfPerson2;
  console.log(`Person 1 is older than ${ageDifference} Person 2`);
} else if (ageOfPerson1 < ageOfPerson2) {
  let ageDifference = ageOfPerson2 - ageOfPerson1;
  console.log(`Person 2 is older than ${ageDifference} Person 1`);
}

//if else
let a = 4;
let b = 3;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

//Ternary operator
let result =
  a > b ? console.log("a is greater than b") : console.log("a is less than b");

//even numbers
let number = Number(prompt("Enter a number: "));
if (number % 2 === 0) {
  console.log(`${number} is an even number`);
} else {
  console.log(`${number} is an odd number`);
}
