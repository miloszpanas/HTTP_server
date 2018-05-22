var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
        if (request.method === 'GET' && request.url === '/') {
            fs.readFile('./html/index.html', 'utf-8', function(err, data) {
                response.write(data);
                response.end();
            })
            } else {
                response.statusCode = 404;
                response.write('<img src="https://i.ytimg.com/vi/2qZHh_iN5Zs/hqdefault.jpg" style="display:block;margin:auto;width:40%;" alt="doggo">');
                response.write('<h2 style="text-align:center;">Wrong way, dude</h2>');
                response.end();
            }
        });

server.listen(8080);