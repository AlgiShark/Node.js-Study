console.time('measurement');

var result = '';
for(var i = 1 ; i <= 100; i++) {
	result += i + ' ';
}

console.log('Result :', result);
console.timeEnd('measurement');
// measurement의 시간을 측정하여 결과 출력을 한다