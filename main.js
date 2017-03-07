const fs = require('fs');
const path = require('path');

const Calculator = require('./calc.js');
const { handleLineInput, runCalculator } = require('./func.js');

const processLine = (line) => {
    let [operatorArr, operandArr] = handleLineInput(line);
    let calculator = new Calculator();
    return runCalculator(calculator, operatorArr, operandArr);
}

const processData= (rawData) => {
    const dataArr = rawData.split('\n');
    return dataArr.map(processLine);
}

const main = (err, data) => {
    if (err) {
        throw 'Failed to read file';
    }
    let output = processData(data);
    console.log(output.join('\n'));
}

if (process.env.file !== undefined) {
    // File provided through ENV
    if (fs.existsSync(process.env.file)) {
        fs.readFile(process.env.file, 'utf8', main);
    }

}
