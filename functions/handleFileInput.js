const handleFileInput = (oneLineData) => {
	// TODO: Write Error Catcher Here
	// Add Docstrings
	// Change this to a Map
	let operatorArr = [];
	let operandArr = [];
	let lineInput = oneLineData.split(' ');
	for (let i = 0; i < lineInput.length; i++){
		if (lineInput[i] === '+' ||
			lineInput[i] === '*' ||
			lineInput[i] === '/'){
			operatorArr.push(lineInput[i]);
		} else if (Number.isInteger(parseInt(lineInput[i], 10))){
			operandArr.push(lineInput[i]);
		}
	}

	return [operatorArr, operandArr];
}

module.exports = handleFileInput;