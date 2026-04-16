const {
  isValidEmail,
  isStrongPassword,
  isNonEmptyString,
} = require("./src/utils/validators");

test("validates email addresses", () => {
  expect(isValidEmail("abc@hotmail.com")).toBe(true);
  expect(isValidEmail("invalid-email")).toBe(false);
  expect(isValidEmail("")).toBe(false);
  expect(isValidEmail(123)).toBe(false);
});

test("validates strong passwords", () => {
  expect(isStrongPassword("Password123")).toBe(true);
  expect(isStrongPassword("password123")).toBe(false);
  expect(isStrongPassword("weakpass")).toBe(false);
  expect(isStrongPassword("Short1")).toBe(false);
  expect(isStrongPassword(12345678)).toBe(false);
});

test("validates non-empty strings", () => {
  expect(isNonEmptyString("Hello")).toBe(true);
  expect(isNonEmptyString("   ")).toBe(false);
  expect(isNonEmptyString("")).toBe(false);
  expect(isNonEmptyString(123)).toBe(false);
});
