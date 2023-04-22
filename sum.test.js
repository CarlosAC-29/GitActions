const {sum, resta, multiply} = require('./sum');

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
test('subtraction two numbers', () => {
  expect(resta(2, 2)).toBe(0);
});
test('multiplication two numbers', () => {
  expect(multiply(2, 2)).toBe(4);
});
