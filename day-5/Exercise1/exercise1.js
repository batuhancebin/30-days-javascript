const aArray = [];
const bArray = [1, 2, 3, 4, 5];
const mixedDataTypes = [
  1,
  "string",
  true,
  undefined,
  null,
  { name: "John" },
  [1, 2, 3, 4, 5],
];
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(bArray.length);

let firstElement = bArray[0];
let lastElement = bArray[bArray.length - 1];
let middleElement = bArray[Math.floor(bArray.length / 2)];
console.log(firstElement, lastElement, middleElement);

console.log(mixedDataTypes.length);

console.log(itCompanies);

console.log(itCompanies.length);

console.log(
  itCompanies[0],
  itCompanies[Math.floor(itCompanies.length / 2)],
  itCompanies[itCompanies.length - 1]
);

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

console.log(itCompanies.join(", "));

let enterCompany = prompt("Enter a company name");
enterCompany = enterCompany.toLowerCase();
let itCompaniesLowerCase = itCompanies.map((company) => company.toLowerCase());
if (itCompaniesLowerCase.includes(enterCompany)) {
  console.log("Company found");
} else {
  console.log("Company not found");
}

console.log(itCompanies.sort());

console.log(itCompanies.reverse());

console.log(itCompanies.slice(0, 3));

console.log(itCompanies.slice(4, 7));

console.log(itCompanies.slice(3, 4));

console.log(itCompanies.shift());

console.log(itCompanies.pop());

console.log(itCompanies.splice(2, 1));

console.log(itCompanies.splice(0, itCompanies.length));

/**
 * 1. Declare an empty array;
 * 2. Declare an array with more than 5 number of elements
 * 3. Find the length of your array
 * 4. Get the first item, the middle item and the last item of the array
 * 5. Declare an array called mixedDataTypes,put different data types and in your array and the array size should be greater than 5
 * 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
 * 7. Print the array using console.log()
 * 8. Print the number of companies in the array
 * 9. Print the first company, middle and last company
 * 10. Print out each company
 * 11. Change each company name to uppercase one by one and print them out
 * 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
 * 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
 * 14. Filter out companies which have more than one 'o' without the filter method
 * 15. Sort the array using sort() method
 * 16. Reverse the array using reverse() method
 * 17. Slice out the first 3 companies from the array
 * 18. Slice out the last 3 companies from the array
 * 19. Slice out the middle IT company or companies from the array
 * 20. Remove the first IT company from the array
 * 21. Remove the middle IT company or companies from the array
 * 22. Remove the last IT company from the array
 * 23. Remove all IT companies
 */