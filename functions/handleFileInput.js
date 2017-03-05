const handleFileInput = (dataArr) => {
	// TODO: Write Error Catcher Here
	// Add Docstrings
	// Change this to a Map
	let operatorAndOperandArr = [];
	for (let i = 0; i < dataArr.length; i++){
		operatorAndOperandArr.push(dataArr[i].split(' '));
	}
	return operatorAndOperandArr;
}

module.exports = handleFileInput;