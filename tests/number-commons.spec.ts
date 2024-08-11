import { compare, toInt } from "../src";

describe("compare", () => {
  test("should return 0 when both numbers are equal", () => {
    expect(compare(10, 10)).toBe(0);
    expect(compare(-5, -5)).toBe(0);
    expect(compare(0, 0)).toBe(0);
    expect(compare(0.1, 0.1)).toBe(0);
  });

  test("should return -1 when the first number is less than the second", () => {
    expect(compare(5, 10)).toBe(-1);
    expect(compare(-10, 0)).toBe(-1);
    expect(compare(0, 1)).toBe(-1);
    expect(compare(-5.1, -5)).toBe(-1);
  });

  test("should return 1 when the first number is greater than the second", () => {
    expect(compare(10, 5)).toBe(1);
    expect(compare(0, -10)).toBe(1);
    expect(compare(1, 0)).toBe(1);
    expect(compare(7.2, 7)).toBe(1);
  });
});

describe("toInt", () => {
  test("should convert given string to integer", () => {
    expect(toInt("42")).toBe(42);
    expect(toInt("3.14")).toBe(3);
    expect(toInt("abc")).toBe(0);
    expect(toInt("abc", 10)).toBe(10);
  });
});
