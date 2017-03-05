function Calculator() {
  this.numStack = [];
}

Calculator.prototype.push = function(num) {
  this.numStack.push(num);
};

Calculator.prototype.popCompute = function(operationFunc){
    if (this.numStack.length < 2) {
      throw "Calculator is empty";
    }
    const num1 = this.numStack.pop();
    const num2 = this.numStack.pop();
    this.push(operationFunc(num1,num2));
};

Calculator.prototype.plus = function() {
	this.popCompute((num1,num2) => num1+num2);
};

Calculator.prototype.value = function() {
  return this.numStack[this.numStack.length-1];
};

Calculator.prototype.minus = function() {
  this.popCompute(function(first, second){
  	return second - first;
  });
};

Calculator.prototype.times = function() {
	this.popCompute(function(first,second){
		return first*second;
	});
};

Calculator.prototype.divide = function() {
  this.popCompute(function(first,second){
	// throw error on divide by 0
  	return second / first;
  });
};


module.exports = Calculator;