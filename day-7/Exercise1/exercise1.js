function fullName() {
  var name = "Batuhan";
  var surname = "Çebin";
  console.log(name + " " + surname);
}
fullName();

function fullName2(name, surname) {
  console.log(name + " " + surname);
}
fullName2("Batuhan", "Çebin");

function sumNumbers(num1, num2) {
  console.log(num1 + num2);
}
sumNumbers(5, 10);

function areaRectangle(width, height) {
  console.log(width * height);
}
areaRectangle(5, 10);

function perimeterRectangle(width, height) {
  console.log(2 * (width + height));
}
perimeterRectangle(5, 10);

function volumeRectangularPrism(width, height, depth) {
  console.log(width * height * depth);
}
volumeRectangularPrism(5, 10, 15);

function areaCircle(radius) {
  console.log(Math.PI * radius * radius);
}
areaCircle(5);

function circumferenceCircle(radius) {
  console.log(2 * Math.PI * radius);
}
circumferenceCircle(5);

function density(mass, volume) {
  console.log(mass / volume);
}
density(5, 10);

function speed(distance, time) {
  console.log(distance / time);
}
speed(5, 10);

function weight(mass, gravity) {
  console.log(mass * gravity);
}
weight(5, 10);

function convertCelciusToFahrenheit(celcius) {
  console.log(celcius * 1.8 + 32);
}
convertCelciusToFahrenheit(5);

function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  return bmi;
}
if (bmiCalculator(60, 1.7) < 18.5) {
  console.log("Zayıf");
} else if (bmiCalculator(60, 1.7) < 25) {
  console.log("Normal");
} else if (bmiCalculator(60, 1.7) < 30) {
  console.log("Kilolu");
} else {
  console.log("Obez");
}

function checkSeason(month) {
  if (month == 12 || month == 1 || month == 2) {
    console.log("Kış");
  } else if (month == 3 || month == 4 || month == 5) {
    console.log("İlkbahar");
  } else if (month == 6 || month == 7 || month == 8) {
    console.log("Yaz");
  } else if (month == 9 || month == 10 || month == 11) {
    console.log("Sonbahar");
  } else {
    console.log("Hatalı ay girdiniz.");
  }
}
checkSeason(5);

function findMax(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2);
  } else if (num3 > num1 && num3 > num2) {
    console.log(num3);
  } else {
    console.log("Hatalı sayı girdiniz.");
  }
}
findMax(5, 10, 15);
