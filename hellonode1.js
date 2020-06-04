var server = require('http');

server.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end("Hello, Node.js\n");
}).listen(3000,'localhost');

console.log('server Running at http://localhost:3000');

// npm means node package manager
// node.js를 깔때 깔린다