const fs = require('fs'); // built-in module

const content = fs.readFileSync("fs1.js"); // blocking code

console.log(content.toString());

