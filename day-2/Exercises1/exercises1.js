var challange = "30 Days Of JavaScript";
console.log(challange);
console.log(challange.length);
console.log(challange.toUpperCase());
console.log(challange.toLowerCase());
console.log(challange.substr(0, 2));
console.log(challange.substring(3));
console.log(challange.substring(3, 24));
console.log(challange.includes("Script"));
console.log(challange.split(" "));
var string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(string.split(","));
console.log(challange.replace("JavaScript", "Python"));
console.log(challange.charAt(15));
console.log(challange.charCodeAt("J"));
console.log(challange.indexOf("a"));
console.log(challange.lastIndexOf("a"));
var sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.lastIndexOf("because"));
console.log(sentence.search("because"));
console.log(challange.trim());
console.log(challange.startsWith("30"));
console.log(challange.endsWith("JavaScript"));
console.log(challange.match(/a/g));
var string2 = "30 Days Of";
console.log(string2.concat(" JavaScript"));
console.log(challange.repeat(2));