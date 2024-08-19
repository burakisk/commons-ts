import { validateEmail, validatePhoneNumber, validateUrl, isValidCreditCardNumber } from "../src";

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

describe("validateUrl", () => {
  test("returns true for valid URLs", () => {
    expect(validateUrl("https://www.google.com")).toBe(true);
    expect(validateUrl("http://google.com")).toBe(true);
    expect(validateUrl("https://google.com/path")).toBe(true);
    expect(validateUrl("http://google.com?query=value")).toBe(true);
    expect(validateUrl("https://google.com#fragment")).toBe(true);
    expect(validateUrl("www.google.com")).toBe(true); // without protocol
    expect(validateUrl("google.com")).toBe(true); // without www and protocol
  });

  test("returns false for invalid URLs", () => {
    expect(validateUrl("htp://invalid.com")).toBe(false); // invalid protocol
    expect(validateUrl("https://")).toBe(false); // missing domain
    expect(validateUrl("google")).toBe(false); // missing top-level domain
    expect(validateUrl("google.")).toBe(false); // incomplete domain
    expect(validateUrl("https://google,com")).toBe(false); // invalid character in domain
    expect(validateUrl("https://google..com")).toBe(false); // double dots in domain
  });

  test("returns false for non-URL strings", () => {
    expect(validateUrl("random text")).toBe(false);
    expect(validateUrl("12345")).toBe(false);
    expect(validateUrl("")).toBe(false);
  });
});

describe("isValidCreditCardNumber", () => {
  test("valid credit card numbers should return true", () => {
    expect(isValidCreditCardNumber("4532015112830366")).toBe(true); // Visa
    expect(isValidCreditCardNumber("6011514433546201")).toBe(true); // Discover
    expect(isValidCreditCardNumber("371449635398431")).toBe(true); // American Express
    expect(isValidCreditCardNumber("378282246310005")).toBe(true); // American Express
  });

  test("invalid credit card numbers should return false", () => {
    expect(isValidCreditCardNumber("1234567890123456")).toBe(false); // Random invalid number
    expect(isValidCreditCardNumber("0000000000000000")).toBe(false); // All zeros
    expect(isValidCreditCardNumber("453201511283036")).toBe(false); // Incomplete number (12 digits)
    expect(isValidCreditCardNumber("4532015112830367")).toBe(false); // Invalid Luhn check
  });

  test("non-numeric input should return false", () => {
    expect(isValidCreditCardNumber("abcdefg12345678")).toBe(false);
    expect(isValidCreditCardNumber("4532-0151-1283-0366")).toBe(false);
    expect(isValidCreditCardNumber("")).toBe(false);
  });
});
