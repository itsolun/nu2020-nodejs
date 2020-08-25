var http = require('http');

let jsonobj = {
    "username":"Ahmed",
    "class":2020
}
let responsetext = JSON.stringify(jsonobj);

http.createServer(function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(responsetext);
}).listen(8000);