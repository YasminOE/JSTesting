const encryptedText = require('../caesarCipher/caesarCipher');


test('Encryption', () => {
  expect(encryptedText("Hello, World!", 3)).toBe("Khoor, Zruog!");
})