class Calculator{
	constructor(){
		this.numStack = [];
	}

	push(num){
		this.numStack.push(num);
	}

	compute(operationFunction){
		if (this.numStack.length < 2) {
		  throw 'Calculator has insufficient operands for this operation.';
		}
		const num1 = this.numStack.pop();
		const num2 = this.numStack.pop();
		this.push(operationFunction(num1, num2));
	}

	add(){
		this.compute((num1, num2) => num1 + num2);
	}

	multiply(){
		this.compute((num1, num2) => num1 * num2);
	}

	divide(){
	  this.compute((num1, num2) => num1 / num2);
	}

	value(){
		return this.numStack[this.numStack.length - 1];
	}
}

module.exports = Calculator;