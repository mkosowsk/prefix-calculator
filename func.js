const handleLineInput = (oneLineData) => {
	// TODO: Write Error Catcher Here
	// Add Docstrings
	// Change this to a Map
	let operatorArr = [];
	let operandArr = [];
	let oneLineArr = oneLineData.split(' ');

	for (let char of oneLineArr){
		if ('+*/'.indexOf(char) !== -1){
			operatorArr.push(char);
		} else {
			let int = parseInt(char, 10);
			if (Number.isInteger(int)){
				operandArr.push(int);
			}
			// else throw error
		}
	}

	return [operatorArr, operandArr];
}

const runCalculator = (calculator, operatorArr, operandArr) => {
	// TODO: Write Error Catcher Here
	// Add Docstrings
	for (let i = operandArr.length - 1; i >= 0; i--){
		calculator.push(operandArr[i]);
	}
	for (let j = operatorArr.length - 1; j >= 0; j--){
		if (operatorArr[j] === '+') calculator.add();
		else if (operatorArr[j] === '/') calculator.divide();
		else if (operatorArr[j] === '*') calculator.multiply();
	}
	return Math.round(calculator.value());
}

module.exports = {
	handleLineInput,
	runCalculator
}