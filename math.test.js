const { sum, subtract, multiply, divide } = require("./src/utils/math");

test("adds two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});

test("subtracts two numbers", () => {
  expect(subtract(5, 2)).toBe(3);
});

test("multiplies two numbers", () => {
  expect(multiply(3, 4)).toBe(12);
});

test("divides two numbers", () => {
  expect(divide(10, 2)).toBe(5);
});

test("throws error when dividing by zero", () => {
  expect(() => divide(10, 0)).toThrow("Division by zero is not allowed");
});