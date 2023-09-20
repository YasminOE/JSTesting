  /**
   * A calculator object containing basic arithmetic operations.
   *
   * @param {string} operation - the performed operation.
   * @param {number} num1 - The first number.
   * @param {number} num2 - The second number.
   * @returns {number} - The result of the opeation.
   */


function basicCalculator(operator, operand1, operand2){
  
  if(typeof(operand1) != 'number' || typeof(operand2) != 'number'){
    return 'not a number';
  }else{
    if(operator == 'Add'){
      return operand1 + operand2;
    }
    else if(operator == 'Subtract'){
      return operand1 - operand2;
    }
    else if(operator == 'Multiply'){
      return operand1 * operand2;
    }
    else if(operator == 'Divide'){
      return operand1 / operand2;
    }
  }
}

module.exports = basicCalculator;