function solveLinEquation(a, b) {
  if (a === 0) {
    return "No solution";
  }
  return -b / a;
}
console.log(solveLinEquation(1, 2));

function solveQuadEquation(a, b, c) {
  var delta = b * b - 4 * a * c;
  if (delta < 0) {
    return "No solution";
  }
  if (delta === 0) {
    return -b / (2 * a);
  }
  return [(-b + Math.sqrt(delta)) / (2 * a), (-b - Math.sqrt(delta)) / (2 * a)];
}
console.log(solveQuadEquation(1, 4, 4));

function printArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printArray([1, 2, 3, 4, 5]);

function showDateTime() {
  var date = new Date();
  console.log(
    date.getDate() +
      "/" +
      (date.getMonth() + 1) +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes()
  );
}
showDateTime();

function swapValues(x, y) {
  var temp = x;
  x = y;
  y = temp;
  return [x, y];
}
console.log(swapValues(3, 4));

function reverseArray(arr) {
  var newArr = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

function capitalizeArray(arr) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i].toUpperCase());
  }
  return newArr;
}
console.log(capitalizeArray(["a", "b", "c", "d", "e"]));
console.log(capitalizeArray(["a", 1, "c", 4, "e"]));

function addItem(arr, item) {
  arr.push(item);
  return arr;
}
console.log(addItem([1, 2, 3, 4, 5], 6));

function removeItem(arr, index) {
  arr.splice(index, 1);
  return arr;
}
console.log(removeItem([1, 2, 3, 4, 5], 3));

function sumOfNumbers(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumOfNumbers([1, 2, 3, 4, 5]));

function sumOfOdds(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] % 2 === 1) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumOfOdds([1, 2, 3, 4, 5]));

function sumOfEven(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumOfEven([1, 2, 3, 4, 5]));

function evensAndOdds(arr) {
  var odd = 0;
  var even = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] % 2 === 0) {
      even++;
    } else if (typeof arr[i] === "number" && arr[i] % 2 === 1) {
      odd++;
    }
  }
  return [even, odd];
}
console.log(evensAndOdds([1, 2, 3, 4, 5]));

function sumOfPositive(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
console.log(sumOfPositive([1, 2, 3, 4, 5]));

function randomUserIp() {
  var ip = "";
  for (var i = 0; i < 4; i++) {
    ip += Math.floor(Math.random() * 256) + ".";
  }
  return ip.slice(0, -1);
}
console.log(randomUserIp());

function randomMacAddress() {
  var mac = "";
  for (var i = 0; i < 6; i++) {
    mac += Math.floor(Math.random() * 256).toString(16) + ":";
  }
  return mac.slice(0, -1);
}
console.log(randomMacAddress());

function randomHexaNumberGenerator() {
  var hexa = "#";
  for (var i = 0; i < 6; i++) {
    hexa += Math.floor(Math.random() * 16).toString(16);
  }
  return hexa;
}
console.log(randomHexaNumberGenerator());

function userIdGenerator() {
  var id = "";
  for (var i = 0; i < 7; i++) {
    id += Math.floor(Math.random() * 10);
  }
  return id;
}
console.log(userIdGenerator());
