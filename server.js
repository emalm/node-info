var http = require('http');
var url = require('url');

HOST = null;

var host = process.env.CF_INSTANCE_INTERNAL_IP || "0.0.0.0";
var port = process.env.PORT || 3000;
var cell_ip = process.env.CF_INSTANCE_IP || "(no external CF IP)";
var message = process.env.MESSAGE || "Hello from a node app!";
var index = process.env.CF_INSTANCE_INDEX || "(no index)";

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.write(message + '\n\n');
    res.write('Instance index: ' + index + '\n');
    res.write('Diego cell address: ' + cell_ip + '\n');
    res.end('');
}).listen(port, null);

console.log('Server running at http://' + host + ':' + port + '/');
