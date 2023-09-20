/**
 * Capitalizes the first character of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} - The string with the first character capitalized.
 */

function capitalize(str){
  if(typeof(str) != 'string') {
    return 'Not a string';
  }
  else{
    return str.toUpperCase();
  }
}

module.exports = capitalize;