var http = require('http');
var url = require('url');

HOST = null;

var host = process.env.CF_INSTANCE_INTERNAL_IP || "0.0.0.0";
var port = process.env.PORT || 3000;

var index = process.env.CF_INSTANCE_INDEX || "(no index)";
var cell_ip = process.env.CF_INSTANCE_IP || "(no external CF IP)";

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.write('Instance index: ' + index + '\n');
    res.write('Diego cell address: ' + cell_ip + '\n');
    res.end('');
}).listen(port, null);

console.log('Server running at http://' + host + ':' + port + '/');
