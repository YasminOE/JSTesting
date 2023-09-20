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