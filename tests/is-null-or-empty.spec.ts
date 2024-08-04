import { isNullOrEmpty } from "../src";

describe("isNullOrEmpty", () => {
  test("should be true when value is empty string", () => {
    expect(isNullOrEmpty("")).toEqual(true);
  });

  test("should be true when value includes only whitespace", () => {
    expect(isNullOrEmpty("  ")).toEqual(true);
  });

  test("should be true when value is undefined", () => {
    expect(isNullOrEmpty(undefined)).toEqual(true);
  });

  test("should be true when value is null", () => {
    expect(isNullOrEmpty(null)).toEqual(true);
  });
});
