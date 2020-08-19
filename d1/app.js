var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! from node  server');
}).listen(8000);

console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');