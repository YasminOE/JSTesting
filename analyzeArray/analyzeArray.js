/**
 * Analyzes an array of numbers and returns an object with statistical properties.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {Object} - An object with properties: average, min, max, and length.
 */

function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null; // Return null for invalid input or an empty array.
  }

  const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length: arr.length,
  };
}

module.exports = analyzeArray;