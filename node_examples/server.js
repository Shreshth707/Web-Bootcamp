// OTT platform streaming sort of example
const fs = require('fs'); // built-in module
const http = require('http');

const server = http.createServer( (req, res) => {
    // res.setHeader('Content-Type', 'application/octet-stream');
    const stream = fs.createReadStream("fs1.js");
    stream.on("data", chunk => {
        res.write(chunk.toString()); // code can be exected many times 
    });

    stream.on("end", () => {
       res.end();
    })

    stream.on("error", (err) => {
        res.end(err);
    });
});


server.listen(1234, () => console.log("server started!!!"));
