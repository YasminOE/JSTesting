# JS Testing 

---

## Table of Contents

- [Description](#description)
- [Functions](#functions)
  - [capitalize](#capitalize)
  - [reverseString](#reversestring)
  - [calculator](#calculator)
  - [caesarCipher](#caesarcipher)
  - [analyzeArray](#analyzearray)
- [Usage](#usage)

---

## Description

This project contains a set of JavaScript functions for various text and numeric operations, each function was tested using Jest. The functions are designed to perform the following tasks:

- **capitalize**: Capitalize the first character of a string.
- **reverseString**: Reverse a given string.
- **calculator**: Perform basic arithmetic operations such as addition, subtraction, multiplication, and division.
- **caesarCipher**: Encrypt a string using a Caesar cipher with a specified shift factor.
- **analyzeArray**: Analyze an array of numbers to calculate the average, minimum, maximum, and length.

---

## Functions

### Capitalize

```javascript
/**
 * Capitalizes the first character of a string.
 *
 * @param {string} str - The input string.
 * @returns {string} - The string with the first character capitalized.
 */
function capitalize(str) {
  // Implementation here
}

```

### ReverseString

```javascript
/**
 * Reverses a given string.
 *
 * @param {string} str - The input string.
 * @returns {string} - The reversed string.
 */
function reverseString(str) {
  // Implementation here
}

```

### Calculator

```javascript
  /**
   * A calculator object containing basic arithmetic operations.
   *
   * @param {string} operation - the performed operation.
   * @param {number} num1 - The first number.
   * @param {number} num2 - The second number.
   * @returns {number} - The result of the opeation.
   */

  function calculator(operation,num1, num2) {
    // Implementation here
  }

```
 
### CaesarCipher

```javascript

/**
 * Encrypts a string using a Caesar cipher with a specified shift factor.
 *
 * @param {string} str - The input string.
 * @param {number} shift - The shift factor.
 * @returns {string} - The encrypted string.
 */
function caesarCipher(str, shift) {
  // Implementation here
}

```
### AnalyzeArray

```javascript
/**
 * Analyzes an array of numbers and returns an object with statistical properties.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {Object} - An object with properties: average, min, max, and length.
 */
function analyzeArray(arr) {
  // Implementation here
}

``` 
### Usage

Provide examples of how to use each function here.

```javascript

// Example usage of capitalize
const capitalized = capitalize("hello");
console.log(capitalized); // Output: "Hello"

// Example usage of reverseString
const reversed = reverseString("world");
console.log(reversed); // Output: "dlrow"

// Example usage of calculator
const additionResult = calculator.add(5, 3);
console.log(additionResult); // Output: 8

// Example usage of caesarCipher
const encryptedText = caesarCipher("Hello, World!", 3);
console.log(encryptedText); // Output: "Khoor, Zruog!"

// Example usage of analyzeArray
const numbers = [2, 4, 6, 8, 10];
const analysis = analyzeArray(numbers);
console.log(analysis); // Output: { average: 6, min: 2, max: 10, length: 5 }

```




