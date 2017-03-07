const { expect } = require('chai');
const { runCalculator } = require('../func.js');
const Calculator = require('../calc.js');

describe('runCalculator function', () => {
    let operatorArr;
    let operandArr;
    let calculator;

    beforeEach('instantiate a new calculator and input arrays', () => {
        calculator = new Calculator();
        operatorArr = ['*', '+'];
        operandArr = [2, 3, 4];
    })

    it('returns a number', () => {
        let result = runCalculator(calculator, operatorArr, operandArr);
        expect(typeof result).to.be.number;
    })

    it('returns the correct answer', () => {
        let result = runCalculator(calculator, operatorArr, operandArr);
        expect(typeof result).to.be.deep.equal(20);
    })

    it('works without having blank operatorArr', () => {
        operatorArr = [];
        operandArr = [1];
        let result = runCalculator(calculator, operatorArr, operandArr);
        expect(typeof result).to.be.deep.equal(1);
    })     
})