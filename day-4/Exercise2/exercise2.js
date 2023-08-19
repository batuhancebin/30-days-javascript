// Score Grades
let score = Number(prompt("Enter your score: "));
if (score < 0 || score > 100) {
  console.log("Invalid score");
} else if (score < 50) {
  console.log("Your grade is F");
} else if (score < 60) {
  console.log("Your grade is D");
} else if (score < 70) {
  console.log("Your grade is C");
} else if (score < 80) {
  console.log("Your grade is B");
} else {
  console.log("Your grade is A");
}

// Check the season
let month = Number(prompt("Enter month: "));
month = month.toLowerCase();
if (month == "September" || month == "October" || month == "November") {
  console.log("The season is Autumn");
} else if (month == "December" || month == "January" || month == "February") {
  console.log("The season is Winter");
} else if (month == "March" || month == "April" || month == "May") {
  console.log("The season is Spring");
} else if (month == "June" || month == "July" || month == "August") {
  console.log("The season is Summer");
} else {
  console.log("Invalid month");
}

// Check if a day is weekend day or a working day
let day = prompt("Enter day: ");
day = day.toLowerCase();
if (day == "saturday" || day == "sunday") {
  console.log(`${day} is a weekend`);
} else if (
  day == "monday" ||
  day == "tuesday" ||
  day == "wednesday" ||
  day == "thursday" ||
  day == "friday"
) {
  console.log(`${day} is a working day`);
} else {
  console.log("Invalid day");
}
