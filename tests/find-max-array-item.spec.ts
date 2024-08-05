import { findMax } from "../src";
import { people } from "./test-commons";

describe("findMax", () => {
  test("should return undefined for an empty array", () => {
    expect(findMax([], (a, b) => a - b)).toBeUndefined();
  });

  test("should return max item in given integer array", () => {
    expect(findMax([3, 1, 4, 1, 5, 9, 2, 6], (a, b) => a - b)).toBe(9);
  });

  test("should return max item in given float array", () => {
    expect(findMax([1.5, 2.3, 0.9, 1.8], (a, b) => a - b)).toBe(2.3);
  });

  test("should return max item in given double array", () => {
    expect(findMax([1.23456789, 0.12345678, 2.3456789], (a, b) => a - b)).toBe(2.3456789);
  });

  test("should return max item in given double array", () => {
    expect(findMax(["banana", "apple", "cherry", "date"], (a, b) => a.localeCompare(b))).toBe("date");
  });

  test("should return person who has max age in given person array", () => {
    const expected = { age: 35, name: "Charlie" };
    expect(findMax(people, (a, b) => a.age - b.age)).toEqual(expected);
  });
});
