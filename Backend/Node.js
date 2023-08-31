const { log } = require("console");
const fs = require("fs");
let text = fs.readFileSync("Random.txt", "utf-8");
text = text.replace("Backend", "Frontend");

console.log(text);
// console.log("Welcome to Backend Node Js.");

console.log('Creating a new file...')
fs.writeFileSync("Rahul.txt", text);