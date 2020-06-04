var util = require('util');
var EventEmitter = require('events').EventEmitter;

//prototype object
var Calc = function(){
    var self = this;
    this.on('stop',function(){
        console.log("Calc에 stop event 전달됨.");
    });
};
//Calc object가 on을 사용하기 위해, EventEmitter inherit
util.inherits(Calc,EventEmitter);

Calc.prototype.add = function(a,b){
    return a+b;
};

module.exports = Calc;
module.exports.title = 'calculator';