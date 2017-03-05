const handleLineInput = (oneLineData) => {
	// TODO: Write Error Catcher Here
	// Add Docstrings
	// Change this to a Map
	let operatorArr = [];
	let operandArr = [];
	let oneLineArr = oneLineData.split(' ');
	for (let i = 0; i < oneLineArr.length; i++){
		if (oneLineArr[i] === '+' ||
			oneLineArr[i] === '*' ||
			oneLineArr[i] === '/'){
			operatorArr.push(oneLineArr[i]);
		} else if (Number.isInteger(parseInt(oneLineArr[i], 10))){
			operandArr.push(parseInt(oneLineArr[i], 10));
		}
	}

	return [operatorArr, operandArr];
}

module.exports = handleLineInput;