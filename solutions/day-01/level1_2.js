const countries = require("./countries.js");
const webTechs = require("./web_techs");

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

console.log(countries);
console.log(webTechs);
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

const words = text.split(" ");
console.log(words);
console.log(words.length);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

shoppingCart.unshift("Meat");
shoppingCart.push("Sugar");
const honeyIndex = shoppingCart.indexOf("Honey");
shoppingCart.splice(honeyIndex, 1);
const teaIndex = shoppingCart.indexOf("Tea");
shoppingCart[teaIndex] = "Green Tea";

console.log(shoppingCart);

if (countries.includes("Ethiopia")) {
  console.log("ETHIOPIA");
} else {
  countries.push("Ethiopia");
}

if (webTechs.includes("Sass")) {
  console.log("Sass is a CSS preprocess");
} else {
  webTechs.push("Sass");
  console.log(webTechs);
}

let fullstack = frontEnd.concat(backEnd);
console.log(fullstack);
