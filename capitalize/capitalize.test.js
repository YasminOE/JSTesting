const capitalize =  require("../capitalize/capitalize");

test('Capitalization', () => {
  expect(capitalize('test')).toBe('TEST');
});

test('Only strings', () => {
  expect(capitalize(2)).toBe('Not a string');
})