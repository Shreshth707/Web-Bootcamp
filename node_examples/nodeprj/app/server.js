var http = require('http'); // built-in module provided for nodejs runtime
var url = require('url'); // built-in module provided for nodejs runtime

var {random} = require('lodash'); // installed module node_modules folder

var {add, subtract} = require('./compute'); // custom module in project

// http://localhost:1234/add?x=10&y=15
// http://localhost:1234/subtract?x=60&y=15

var server = http.createServer((req, res) => {
    var pathname = url.parse(req.url).pathname;
    var query = url.parse(req.url, true).query;

    if(pathname === '/add') {
        res.end(add(parseInt(query.x), parseInt(query.y)).toString());
    } else if(pathname === '/subtract') {
        res.end(subtract(parseInt(query.x), parseInt(query.y)).toString());
    } else {
        res.end("Random :" + random(1, 100));
    }
});

server.listen(1234, () => console.log("server started!!!"));

