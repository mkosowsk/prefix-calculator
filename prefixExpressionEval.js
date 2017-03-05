const fs = require('fs');
const file = process.env.file;
const parseFileLines = require('./functions/parseFileLines.js');
const handleLineInput = require('./functions/handleLineInput.js');
const Calculator = require('./calculator/Calculator.js');
const runCalculator = require('./functions/runCalculator.js')

fs.readFile('input-files/' + file, 'utf8', (err, data) => {
	if (err) console.log('Failed to read file');
	const dataArr = parseFileLines(data);
	for (let i = 0; i < dataArr.length; i++){
		let [operatorArr, operandArr] = handleLineInput(dataArr[i]);
		// console.log([operatorArr, operandArr]);
		let calculator = new Calculator;
		let output = runCalculator(calculator, operatorArr, operandArr);
		console.log(output);
	}
});
