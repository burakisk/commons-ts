import { isWhitespace } from "../src";

describe("isWhitespace", () => {
  test("should be true when value includes only letter", () => {
    expect(isWhitespace("   ")).toEqual(true);
  });

  test("should be true when value includes any chars except from letter", () => {
    expect(isWhitespace(" b ")).toEqual(false);
  });
});
