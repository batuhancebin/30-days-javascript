//days on month
let month = prompt("Enter month: ");
const year = new Date().getFullYear();
const isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
month = month.toLowerCase();

if (
  month == "january" ||
  month == "march" ||
  month == "may" ||
  month == "july" ||
  month == "august" ||
  month == "october" ||
  month == "december"
) {
  console.log(`${month} has 31 days`);
} else if (
  month == "april" ||
  month == "june" ||
  month == "september" ||
  month == "november"
) {
  console.log(`${month} has 30 days`);
} else if (month == "february" && isLeapYear) {
  console.log(`${month} has 29 days`);
} else if (month == "february" && !isLeapYear) {
  console.log(`${month} has 28 days`);
} else {
  console.log("Invalid month");
}
