const { expect } = require('chai');
const assertArrays = require('chai-arrays');
const { handleLineInput } = require('../func.js');

describe('handleLineInput function', () => {
    let testInput = '* + 2 3 4';
    let result;

    beforeEach('run the handleLineInput function', () => {
        result = handleLineInput(testInput);
    });

    it('returns an array', () => {
        expect(typeof result).to.be.array;
    });

    it('returns an array of arrays', () => {
        expect(typeof result[0]).to.be.array;
        expect(typeof result[1]).to.be.array;
    });

    it('correctly splits operators and operands', () => {
        expect(result[0]).to.be.deep.equal(['*', '+']);
        expect(result[1]).to.be.deep.equal([2, 3, 4]);
    })

    it('returns numbers for operands and not strings', () => {
        expect(result[1]).to.not.be.deep.equal(['2', '3', '4']);
        expect(result[1]).to.be.deep.equal([2, 3, 4]);
    });

    it('throws error and does not return invalid operators', () => {
        const invalidInput1 = '- 1 2';
        expect(function(){
            handleLineInput(invalidInput1);
        }).to.throw('Invalid character in input.');
    });

    it('throws error and does not return invalid operands', () => {
        const invalidInput2 = '+ 1 a';
        expect(function(){
            handleLineInput(invalidInput2);
        }).to.throw('Invalid character in input.');
    });
});