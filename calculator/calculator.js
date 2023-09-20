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