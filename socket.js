var app = require('http').createServer(handler)
var io = requrie('socket.io').listen(app)
var fs = require('fs')

app.listen(80);

function handler(req,res){
	fs.readfile(__dirname + '/index.html',
		function(err,data){
			if(err){
				res.writeHead(500);
				
			}
		})
}