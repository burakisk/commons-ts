import { isNumeric } from "../src";

describe("isNumeric", () => {
  test("should be true when value includes only letter", () => {
    expect(isNumeric("12345")).toEqual(true);
  });

  test("should be true when value includes any chars except from letter", () => {
    expect(isNumeric("123a5")).toEqual(false);
  });
});
