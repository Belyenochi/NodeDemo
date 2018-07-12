var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-type': 'text-plain'});
    response.end('Hello World\n');
}).listen(8124);

http.createServer(function (request, response) {
    var body = [];

    console.log(request.method);
    console.log(request.headers);

    request.on('data', function (chunk) {
        body.push(chunk);
    });

    request.on('end', function () {
        body = Buffer.concat(body);
        console.log(body.toString());
    });
}).listen(8081);