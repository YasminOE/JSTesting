/**
 * Encrypts a string using a Caesar cipher with a specified shift factor.
 *
 * @param {string} str - The input string.
 * @param {number} shift - The shift factor.
 * @returns {string} - The encrypted string.
 */

function caesarCipher(str, shift) {
  // Helper function to shift a single character
  function shiftCharacter(char, shift) {
    const isUpperCase = char === char.toUpperCase();
    const alphabet = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz';
    const charCode = char.charCodeAt(0);

    if (alphabet.includes(char)) {
      const newIndex = (charCode - alphabet.charCodeAt(0) + shift) % 26;
      return alphabet.charAt(newIndex >= 0 ? newIndex : newIndex + 26);
    }

    return char;
  }

  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);
    result += shiftCharacter(char, shift);
  }

  return result;
}

module.exports = caesarCipher;
