var EventEmitter = require("events").EventEmitter;
var evt = new EventEmitter();

evt.on("HelloNode", function(str){
	console.log("Hello! "+str);
});

setTimeout(function(){
	evt.emit("HelloNode", "Node.js");
},3000);
// 3초가 지난 뒤, HelloNode 라는 이름을 가진 이벤트에 Node.js 라는 문자열을 전달한다.