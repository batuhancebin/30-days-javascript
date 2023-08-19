const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

console.log(ages.sort());

let min = ages[0];
let max = ages[ages.length - 1];
let midAge = ages[Math.floor(ages.length / 2)];
let averageAge = ages.reduce((acc, cur) => acc + cur) / ages.length;
let range = max - min;

console.log(min, max, midAge, averageAge, range);