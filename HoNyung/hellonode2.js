var fs = require("fs");

fs.readFile("./hello.txt", eocnding="utf-8", function(err,data){
	if(err)
		throw err
	console.log(data + " node.js");
	});
// 파일을 읽어서 콘솔창에 출력한다