const handleLineInput = (oneLineData) => {
	/**
	 * Generates arrays for operators and operands from one line of data
	 * @param {string} oneLineData - string of one line of data from input
	 * @returns [operatorArr, operandArr] array
	 */
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
			else throw 'Invalid character in input.';
		}
	}

	return [operatorArr, operandArr];
}

const runCalculator = (calculator, operatorArr, operandArr) => {
	/**
	 * Runs calculator on operatorArr and operandArr and returns a value
	 * @param {class} calculator - prefix calculator using a numStack
	 * @param {array} operatorArr - array of operators for one line
	 * @param {array} operandArr - array of operands for one line
	 * @returns output of the calculator as integer
	 */
	for (let i = operandArr.length - 1; i >= 0; i--){
		calculator.push(operandArr[i]);
	}
	for (let j = operatorArr.length - 1; j >= 0; j--){
		if (operatorArr[j] === '+') calculator.add();
		else if (operatorArr[j] === '/') calculator.divide();
		else if (operatorArr[j] === '*') calculator.multiply();
	}
	let result = Math.round(calculator.value());
	if (result < 0) {
		throw 'Invalid calculator result: < 0 result returned'
	}
	return result;
}

module.exports = {
	handleLineInput,
	runCalculator
}