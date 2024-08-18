import { validateEmail } from "../src";

describe("validateEmail", () => {
  test("returns true for a valid email address", () => {
    expect(validateEmail("test@example.com")).toBe(true);
    expect(validateEmail("user.name@domain.co")).toBe(true);
    expect(validateEmail("user_name123@domain.net")).toBe(true);
  });

  test("returns false for an invalid email address", () => {
    expect(validateEmail("invalid-email")).toBe(false);
    expect(validateEmail("user@domain")).toBe(false);
    expect(validateEmail("user@domain.c")).toBe(false);
    expect(validateEmail("@missinglocalpart.com")).toBe(false);
  });

  test("returns false for an empty string", () => {
    expect(validateEmail("")).toBe(false);
  });

  test("returns false for an email with invalid characters", () => {
    expect(validateEmail("user@domain..com")).toBe(false);
    expect(validateEmail("user@domain,com")).toBe(false);
    expect(validateEmail("user@domain#com")).toBe(false);
  });
});
