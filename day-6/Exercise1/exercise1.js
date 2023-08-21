for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

for (let j = 10; j >= 0; j--) {
  console.log(j);
}

let j = 10;
while (j >= 0) {
  console.log(j);
  j--;
}

let k = Number(prompt("Enter a number"));
for (let i = 0; i <= k; i++) {
  console.log(i);
}

let str = "";
for (let i = 0; i < 7; i++) {
  str += "#";
  console.log(str);
}

for (let i = 0; i <= 10; i++) {
  console.log(i + "x" + i + "=" + i * i);
}

console.log("i" + "i^2" + "i^3");
for (let i = 0; i <= 10; i++) {
  console.log(i + " " + i * i + " " + i * i * i);
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

for (let i = 0; i <= 100; i++) {
  let count = 0;
  for (let j = 1; j <= i; j++) {
    if (i % j == 0) {
      count++;
    }
  }
  if (count == 2) {
    console.log(i);
  }
}

var sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log("The sum of 0 to 100 is " + sum);

var sumEven = 0;
var sumOdd = 0;
var arr = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven += i;
    arr[0] = sumEven;
  } else {
    sumOdd += i;
    arr[1] = sumOdd;
  }
}
console.log(
  "The sum of even numbers from 0 to 100 is " +
    sumEven +
    "The sum of odd numbers from 0 to 100 is " +
    sumOdd
);
console.log(arr);

var arrNumbers = [];
for (let i = 0; i <= 4; i++) {
  random = Math.floor(Math.random() * 100);
  arrNumbers[i] = random;
}
console.log(arrNumbers);

var arrNumbers = [];
for (let i = 0; i < 5; i++) {
  random = Math.floor(Math.random() * 5);
  if (arrNumbers.indexOf(random) == -1) {
    arrNumbers[i] = random;
  } else {
    i--;
  }
}
console.log(arrNumbers);

var rndmId = "";
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for (let i = 0; i < 6; i++) {
  rndmId += characters.charAt(Math.floor(Math.random() * characters.length));
}
console.log(rndmId);
