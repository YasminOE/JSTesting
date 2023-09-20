function capitalize(str){
  if(typeof(str) != 'string') {
    return 'Not a string';
  }
  else{
    return str.toUpperCase();
  }
}

module.exports = capitalize;