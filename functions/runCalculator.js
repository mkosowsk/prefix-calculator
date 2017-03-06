const runCalculator = (calculator, operatorArr, operandArr) => {
	for (let i = operandArr.length - 1; i >= 0; i--){
		calculator.push(operandArr[i]);
	}
	for (let j = operatorArr.length - 1; j >= 0; j--){
		if (operatorArr[j] === '+') calculator.add();
		if (operatorArr[j] === '/') calculator.divide();
		if (operatorArr[j] === '*') calculator.multiply();
	}
	return calculator.value();
}

module.exports = runCalculator;