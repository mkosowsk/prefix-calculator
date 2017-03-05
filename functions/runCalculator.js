const runCalculator = (calculator, operatorArr, operandArr) => {
	for (let i = operandArr.length - 1; i >= 0; i--){
		calculator.push(operandArr[i]);
	}
	// console.log(calculator.numStack);
	for (let j = operatorArr.length - 1; j >= 0; j--){
		if (operatorArr[j] === '+') calculator.plus();
		if (operatorArr[j] === '-') calculator.minus();
		if (operatorArr[j] === '*') calculator.times();
	}
	return calculator.value();
}

module.exports = runCalculator;