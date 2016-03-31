// node server.js --port=3000

var http = require('http');

var opts = require('optimist').argv;

http.Server(function(req, res) {

	res.end('The server is running!');

}).listen(opts.port);