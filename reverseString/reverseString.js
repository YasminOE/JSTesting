/**
 * Reverses a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} - The reversed string.
 */

function reverseString(str){
  if(typeof(str) != 'string'){
    return 'not a string'
  }else{  
    let strArr = Array.from(str);
    return strArr.reverse().join('');
  }
}

module.exports = reverseString;