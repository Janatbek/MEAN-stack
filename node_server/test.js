var http = require("http");

var fs = require("fs");

var server = http.createServer(function (request, response) {
    
    console.log("client request URK: ", request.url);
    if (request.url === "/") {
        fs.readFile('index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'}) 
            response.write(contents);
            response.end();
        });
    } // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
    
});
// Tell your server which port to run on

server.listen(6789);

//print to terminal window

console.log("Running in localhost at port 6789");
