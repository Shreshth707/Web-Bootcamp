const fs = require('fs'); // built-in module

fs.readFile("fs1.js", (err, content) => {
    if(!err) {
        console.log(content.toString());
    }
}); // non-blocking code

console.log("Bye!!!");

