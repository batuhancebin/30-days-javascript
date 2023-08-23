function userIdGeneratedByUser(numOfChar, numOfIds) {
  var users = [];
  var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < numOfIds; i++) {
    var userId = "";
    for (var j = 0; j < numOfChar; j++) {
      userId += chars[Math.floor(Math.random() * chars.length)];
    }
    users.push(userId);
  }
  return users;
}
console.log(userIdGeneratedByUser(5, 3));

function rgbColorGenerator() {
  var rgb = [];
  for (var i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 256));
  }
  return "rgb(" + rgb.join(",") + ")";
}
console.log(rgbColorGenerator());

function arrayOfHexaColors() {
  var hexa = [];
  var chars = "0123456789abcdef";
  for (var i = 0; i < 3; i++) {
    var hexaColor = "#";
    for (var j = 0; j < 6; j++) {
      hexaColor += chars[Math.floor(Math.random() * chars.length)];
    }
    hexa.push(hexaColor);
  }
  return hexa;
}
console.log(arrayOfHexaColors());

function arrayOfRgbColors() {
  var rgb = [];
  for (var i = 0; i < 3; i++) {
    var rgbColor = [];
    for (var j = 0; j < 3; j++) {
      rgbColor.push(Math.floor(Math.random() * 256));
    }
    rgb.push("rgb(" + rgbColor.join(",") + ")");
  }
  return rgb;
}
console.log(arrayOfRgbColors());

function convertHexaToRgb(hexa) {
  var rgb = [];
  for (var i = 1; i < hexa.length; i += 2) {
    rgb.push(parseInt(hexa[i] + hexa[i + 1], 16));
  }
  return "rgb(" + rgb.join(",") + ")";
}
console.log(convertHexaToRgb("#ffffff"));

function convertRgbToHexa(rgb) {
  var hexa = [];
  var rgb = rgb.slice(4, -1).split(",");
  for (var i = 0; i < rgb.length; i++) {
    hexa.push(parseInt(rgb[i]).toString(16));
  }
  return "#" + hexa.join("");
}
console.log(convertRgbToHexa("rgb(255, 255, 255)"));

function generateColors(type, numOfColors) {
  var colors = [];
  if (type === "hexa") {
    for (var i = 0; i < numOfColors; i++) {
      colors.push(arrayOfHexaColors());
    }
  } else if (type === "rgb") {
    for (var i = 0; i < numOfColors; i++) {
      colors.push(arrayOfRgbColors());
    }
  }
  return colors;
}
console.log(generateColors("hexa", 3));

function shuffleArray(arr) {
  var newArr = [];
  while (arr.length > 0) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    newArr.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }
  return newArr;
}
console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

function factorial(num) {
  var factorial = 1;
  for (var i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(5));

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));

function sumOfNumbers(num) {
  var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(5));

function sumOfArrayItems(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum;
}
console.log(sumOfArrayItems([1, 2, 3, 4, 5]));

function averageOfNumbers(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return sum / arr.length;
}
console.log(averageOfNumbers([1, 2, 3, 4, 5]));

function modifyArray(arr) {
  if (arr.length < 5) {
    return "item not found";
  }
  arr[4] = "new item";
  return arr;
}
console.log(modifyArray([1, 2, 3, 4]));

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (var i = 2; i < num; i++) {
    if (num % 2 === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));

function arrayItemsUnique(arr) {
  var unique = [];
  for (var i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}
console.log(arrayItemsUnique([1, 2, 3, 3, 4, 5, 5, 6]));

function checkArrayItemsDataType(arr) {
  var dataType = [];
  for (var i = 0; i < arr.length; i++) {
    dataType.push(typeof arr[i]);
  }
  return dataType;
}
console.log(checkArrayItemsDataType([1, 2, "hello", true, undefined]));

function isValidVariable(variable) {
  if (variable === null || variable === undefined) {
    return false;
  }
  return true;
}
console.log(isValidVariable(""));

function sevenRandomNumbers() {
  var random = [];
  while (random.length < 7) {
    var num = Math.floor(Math.random() * 10);
    if (random.indexOf(num) === -1) {
      random.push(num);
    }
  }
  return random;
}
console.log(sevenRandomNumbers());

function reverseCountries(countries) {
  var reverse = [];
  for (var i = countries.length - 1; i >= 0; i--) {
    reverse.push(countries[i]);
  }
  return reverse;
}
console.log(reverseCountries(["Finland", "Sweden", "Norway"]));
