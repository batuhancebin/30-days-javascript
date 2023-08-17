console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);
console.log(
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);

console.log(typeof "10");
console.log(typeof 10);
console.log("10" == 10);
console.log("10" === 10);

console.log(parseFloat("9.8") == 10);
console.log(parseFloat("9.8") === 10);
console.log(Math.ceil(parseFloat("9.8")));

console.log("python".includes("on"));
console.log("jargon".includes("on"));

console.log("I hope this course is not full of jargon.".includes("jargon"));

console.log(Math.floor(Math.random() * 101));

console.log(Math.floor(Math.random() * 51) + 50);

console.log(Math.floor(Math.random() * 256));

let str = "JavaScript";
let randomNum = Math.floor(Math.random() * str.length);
console.log(str[randomNum]);

console.log("1\t1\t1\t1\t1");
console.log("2\t1\t2\t4\t8");
console.log("3\t1\t3\t9\t27");
console.log("4\t1\t4\t16\t64");
console.log("5\t1\t5\t25\t125");

let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.substr(31, 23));