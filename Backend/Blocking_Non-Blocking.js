// Synchronous or blocking - Line by line execution
// Asynchronous or Non-blocking - Line by line not gauranteed, callbacks will fire

const fs = require("fs");
let text = fs.readFile("Random.txt", "utf-8", (a, b)=>
{
    console.log(b);
});
console.log("This is a Message");