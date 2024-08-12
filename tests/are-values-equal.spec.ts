import { areValuesEqual } from "../src";

describe("areValuesEqual", () => {
  test("should return true for equal strings with case ignored", () => {
    expect(areValuesEqual("hello", "HELLO", true)).toBe(true);
    expect(areValuesEqual("Test", "test", true)).toBe(true);
    expect(areValuesEqual(true, "True", true)).toBe(true);
    expect(areValuesEqual(false, "False", true)).toBe(true);
  });

  test("should return false for different strings even with case ignored", () => {
    expect(areValuesEqual("hello", "world", true)).toBe(false);
    expect(areValuesEqual("Test", "testing", true)).toBe(false);
  });

  test("should return true for numbers and their string representations", () => {
    expect(areValuesEqual(123, "123")).toBe(true);
    expect(areValuesEqual("456", 456)).toBe(true);
  });

  test("should return false for different numbers", () => {
    expect(areValuesEqual(123, "124")).toBe(false);
    expect(areValuesEqual(789, 790)).toBe(false);
  });

  test("should return false for null and undefined inputs", () => {
    expect(areValuesEqual(null, "null")).toBe(false);
    expect(areValuesEqual(undefined, "undefined")).toBe(false);
    expect(areValuesEqual("string", null)).toBe(false);
    expect(areValuesEqual("string", undefined)).toBe(false);
  });

  test("should return true for empty strings", () => {
    expect(areValuesEqual("", "")).toBe(true);
  });

  test("should return false for empty string and null/undefined", () => {
    expect(areValuesEqual("", null)).toBe(false);
    expect(areValuesEqual("", undefined)).toBe(false);
  });

  test("should perform case-sensitive comparison by default", () => {
    expect(areValuesEqual("hello", "HELLO")).toBe(false);
    expect(areValuesEqual("Test", "test")).toBe(false);
  });
});
