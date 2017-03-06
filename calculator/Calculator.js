class Calculator{
	constructor(){
		this.numStack = [];
	}

	push(num){
		this.numStack.push(num);
	}

	compute(operationFunction){
		if (this.numStack.length < 2) {
		  throw 'Calculator is empty';
		}
		const num1 = this.numStack.pop();
		const num2 = this.numStack.pop();
		this.push(operationFunction(num1,num2));
	}

	add(){
		this.compute((num1,num2) => num1+num2);
	}

	multiply(){
		this.compute(function(first,second){
			return first*second;
		});
	}

	divide(){
	  this.compute(function(first,second){
		// throw error on divide by 0
	  	return second / first;
	  });
	}

	value(){
		return this.numStack[this.numStack.length-1];
	}
}

module.exports = Calculator;