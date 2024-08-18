import { validateEmail, validatePhoneNumber } from "../src";

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

describe("validatePhoneNumber", () => {
  test("returns true for valid phone numbers with different formats", () => {
    expect(validatePhoneNumber("+1 (555) 555-5555")).toBe(true); // format with country code
    expect(validatePhoneNumber("555-555-5555")).toBe(true); //  format without country code
    expect(validatePhoneNumber("(555) 555-5555")).toBe(true); // format with parentheses
    expect(validatePhoneNumber("555 555 5555")).toBe(true); // format with spaces
    expect(validatePhoneNumber("+90 123 456 7890")).toBe(true); // format with country code
    expect(validatePhoneNumber("+44 20 1234 5678")).toBe(true); // format with country code
    expect(validatePhoneNumber("+1 555 555 5555")).toBe(true); // format with spaces
  });

  test("returns false for invalid phone numbers", () => {
    expect(validatePhoneNumber("12345")).toBe(false); // too short
    expect(validatePhoneNumber("555-5555")).toBe(false); // missing digits
    expect(validatePhoneNumber("555-555-55555")).toBe(false); // too many digits
    expect(validatePhoneNumber("555) 555-5555")).toBe(false); // incorrect parenthesis placement
    expect(validatePhoneNumber("(555 555-5555")).toBe(false); // missing closing parenthesis
    expect(validatePhoneNumber("phone: 555-555-5555")).toBe(false); // non-numeric input
  });
});
