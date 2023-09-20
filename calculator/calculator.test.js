const basicCalculator = require('../calculator/calculator');

test('Addition', () => {
  expect(basicCalculator('Add', 4, 3)).toBe(7);
})

test('Subtraction', () => {
  expect(basicCalculator('Subtract', 4, 3)).toBe(1);
})

test('Division', () => {
  expect(basicCalculator('Divide', 4, 2)).toBe(2);
})

test('Multiplication', () => {
  expect(basicCalculator('Multiply', 4, 2)).toBe(8);
})

test('not a number', () => {
  expect(basicCalculator('Multiply', '4', '2')).toBe('not a number');
})


test('not a number', () => {
  expect(basicCalculator('Add', 4, '2')).toBe('not a number');
})
