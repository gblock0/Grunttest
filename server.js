var express = require('express');
var app     = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendfile('./public/views/index.html');
});

app.listen(8080);
console.log('Magic happens on 8080');
