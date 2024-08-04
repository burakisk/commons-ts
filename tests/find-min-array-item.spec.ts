import { findMin } from "../src";

describe("findMin", () => {
  test("should return undefined for an empty array", () => {
    expect(findMin([], (a, b) => a - b)).toBeUndefined();
  });

  test("should return min item in given integer array", () => {
    expect(findMin([3, 1, 4, 1, 5, 9, 2, 6], (a, b) => a - b)).toBe(1);
  });

  test("should return min item in given float array", () => {
    expect(findMin([1.5, 2.3, 0.9, 1.8], (a, b) => a - b)).toBe(0.9);
  });

  test("should return min item in given double array", () => {
    expect(findMin([1.23456789, 0.12345678, 2.3456789], (a, b) => a - b)).toBe(0.12345678);
  });

  test("should return min item in given double array", () => {
    expect(findMin(["banana", "apple", "cherry", "date"], (a, b) => a.localeCompare(b))).toBe("apple");
  });
});
