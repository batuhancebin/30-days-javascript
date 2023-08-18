// Calculate the area of a triangle
let base = prompt("Enter base: ");
let height = prompt("Enter height: ");
let area = (base * height) / 2;
console.log(`The area of the triangle is ${area}`);

// Calculate the perimeter of a triangle
let side1 = Number(prompt("Enter side1: "));
let side2 = Number(prompt("Enter side2: "));
let side3 = Number(prompt("Enter side3: "));
let perimeter = side1 + side2 + side3;
console.log(`The perimeter of the triangle is ${perimeter}`);

// Calculate the area and perimeter of a square
let firstSide = Number(prompt("Enter side: "));
let secondSide = Number(prompt("Enter side: "));
let areaOfSquare = firstSide * secondSide;
console.log(`The area of the square is ${areaOfSquare}`);
let perimeterOfSquare = 2 * (firstSide + secondSide);
console.log(`The perimeter of the square is ${perimeterOfSquare}`);

// Calculate the area and perimeter of a circle
let radius = Number(prompt("Enter radius: "));
let areaOfCircle = Math.PI * radius * radius;
console.log(`The area of the circle is ${areaOfCircle}`);
let perimeterOfCircle = 2 * Math.PI * radius;
console.log(`The perimeter of the circle is ${perimeterOfCircle}`);

//Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let x1 = 2;
let x2 = 6;
let y1 = 2;
let y2 = 10;
let slope = (y2 - y1) / (x2 - x1);
console.log(`The slope between point (2, 2) and point(6,10) is ${slope}`);

//Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let x = Number(prompt("Enter x: "));
let y = x * x + 6 * x + 9;
console.log(`The value of y is ${y}`);

//Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = Number(prompt("Enter hours: "));
let pay = (hours * 28) +  40;

//If the length of your name is greater than 7 say, your name is long else say your name is short.
let name = prompt("Enter your name: ");
if (name.length > 7) {
    console.log("Your name is long");
}
else {
    console.log("Your name is short");
}

//Compare your first name length and your family name length and you should get this output.
let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");
if (firstName.length > lastName.length) {
    console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
}
else {
    console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`);
}

//Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 22;
let yourAge = 30;
console.log(`I am ${myAge} years old.`);

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let yearOfBirth = Number(prompt("Enter your year of birth: "));
var now = new Date();
let age = now.getFullYear() - yearOfBirth;
if (age >= 18) {
    console.log("You are old enough to drive");
}
else {
    console.log(`You are left with ${18 - age} years to drive`);
}

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
let numberOfYears = Number(prompt("Enter number of years: "));
let numberOfSeconds = numberOfYears * 365 * 24 * 60 * 60;
console.log(`You lived ${numberOfSeconds} seconds.`);

//Create a human readable time format using the Date time object
console.log(now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes());
console.log(now.getDay() + "/" + (now.getMonth() + 1) + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes());
console.log(now.getMonth() + "/" + now.getDate() + "/" + now.getFullYear() + " " + now.getHours() + ":" + now.getMinutes());