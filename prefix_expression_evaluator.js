const fs = require('fs');
const filePath = process.env.file;

fs.readFile('input-files/' + filePath, 'utf8', (err, data) => {
	if (err) console.log('Failed to read file');

	console.log(data);
});
