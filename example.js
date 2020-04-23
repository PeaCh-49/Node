const fs = require('fs');

console.log('started');

const data = fs.readFileSync('./example.txt');

console.log('Completed');

const data2 = fs.readFile('./example.txt', (err,data) => {
	console.log('finished');
});

console.log('init');

// Seriously