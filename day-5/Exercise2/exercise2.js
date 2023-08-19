import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";

console.log(countries);
console.log(webTechs);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(text);
console.log(text.length);

text = text.replace(/[^a-zA-Z ]/g, "");
console.log(text.split(" "));
console.log(text.split(" ").length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("cips");
shoppingCart.push("Sugar");
console.log(shoppingCart);
let enterShoppingCart = prompt("Enter a shopping cart item");
enterShoppingCart = enterShoppingCart.toLowerCase();
let shoppingCartLowerCase = shoppingCart.map((item) => item.toLowerCase());
if (shoppingCartLowerCase.includes(enterShoppingCart)) {
  console.log("Item found");
} else {
  shoppingCart.push(enterShoppingCart);
}
console.log(shoppingCart);

