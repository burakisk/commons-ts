import { compare, toInt, toFloat, isEven, isOdd } from "../src";

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

describe("toFloat", () => {
  test("should convert given string to float", () => {
    expect(toFloat("42")).toBe(42);
    expect(toFloat("3.14")).toBe(3.14);
    expect(toFloat("abc")).toBe(0.0);
    expect(toFloat("abc", 10.2)).toBe(10.2);
  });
});

describe("isEven", () => {
  it("should return true for even numbers", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-4)).toBe(true);
  });

  it("should return false for odd numbers", () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(7)).toBe(false);
    expect(isEven(-1)).toBe(false);
  });
});

describe("isOdd", () => {
  it("should return true for odd numbers", () => {
    expect(isOdd(3)).toBe(true);
    expect(isOdd(7)).toBe(true);
    expect(isOdd(-1)).toBe(true);
  });

  it("should return false for even numbers", () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(0)).toBe(false);
    expect(isOdd(-4)).toBe(false);
  });
});
