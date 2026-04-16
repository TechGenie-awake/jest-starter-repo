const { registerUser, loginUser } = require("./src/services/authService");

test("registers a user successfully", () => {
  const user = {name: "John Doe", email: "abc@hotmail.com", password: "Password123" };
  expect(registerUser(user)).toEqual({
    success: true,
    message: "User registered successfully",
  });   
});

test("fails to register a user with invalid email", () => {
  const user = {name: "John Doe", email: "invalid-email", password: "Password123" };
  expect(registerUser(user)).toEqual({
    success: false,
    message: "Invalid email",
  });   
});

test("fails to register a user with weak password", () => {
  const user = {name: "John Doe", email: "john.doe@hotmail.com", password: "123" };
  expect(registerUser(user)).toEqual({
    success: false,
    message: "Password is not strong enough",
  });   
});

test("fails to register a user with missing name", () => {
  const user = {email: "john.doe@hotmail.com", password: "Password123" };
  expect(registerUser(user)).toEqual({
    success: false,
    message: "Name is required",
  });   
});

test("fails to register a user with non-object data", () => {
  expect(registerUser("invalid data")).toEqual({
    success: false,
    message: "User data is required",
  });   
});

test("logs in a user successfully", () => {
  const credentials = {email: "student@demo.com", password: "Password123" };
  expect(loginUser(credentials.email, credentials.password)).toEqual({
    success: true,
    message: "Login successful",
  });   
});

test("fails to log in with invalid email format", () => {
  expect(loginUser("invalid-email", "Password123")).toEqual({
    success: false,
    message: "Invalid email format",
  });   
});

test("fails to log in with missing password", () => {
  expect(loginUser("student@demo.com", "")).toEqual({
    success: false,
    message: "Password is required",
  });   
});

test("fails to log in with incorrect credentials", () => {
  expect(loginUser("abc@hotmail.com", "WrongPassword")).toEqual({
    success: false,
    message: "Invalid credentials",
  });   
});

