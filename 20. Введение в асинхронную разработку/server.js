var http = require('http');
var fs = require('fs');

http.Server(function(req, res) {
	var info;

	if (req.url === '/') {

		fs.readFile('index.html', function(err, info) {
			if (err) {
				console.log(err);
				res.statusCode = 500;
				res.end('Error on server!');
				return;
			}

			res.end(info);
		});
	} else { /* 404 */ 
		res.end('404');
	}

}).listen(3000);