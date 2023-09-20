const reverseString = require('../reverseString/reverseString');

test('Reverse', () => {
  expect(reverseString('test')).toBe('tset');
})


test('Only string', () => {
  expect(reverseString(2)).toBe('not a string');
})