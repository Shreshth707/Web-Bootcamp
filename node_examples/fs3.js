// OTT platform streaming sort of example
const fs = require('fs'); // built-in module

const stream = fs.createReadStream("fs1.js");

stream.on("data", chunk => {
    console.log(chunk.toString()); // code can be exected many times 
});

stream.on("end", () => {
    console.log("Next Episode >>>");
})

stream.on("error", (err) => {
    console.log(err);
});