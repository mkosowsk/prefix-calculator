const fs = require('fs');
const file = process.env.file;
const parseFileLines = require('./functions/parseFileLines.js');
const handleFileInput = require('./functions/handleFileInput.js');

fs.readFile('input-files/' + file, 'utf8', (err, data) => {
	if (err) console.log('Failed to read file');
	const dataArr = parseFileLines(data);
	for (let i = 0; i < dataArr.length; i++){
		console.log(handleFileInput(dataArr[i]));
	}
});
