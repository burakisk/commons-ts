import { isAlpha } from "../src";

describe("isAlpha", () => {
  test("should be true when value includes only letter", () => {
    expect(isAlpha("b")).toEqual(true);
  });

  test("should be false when value includes any chars except from letter", () => {
    expect(isAlpha(" b ")).toEqual(false);
  });

  test("should be false when value is empty", () => {
    expect(isAlpha("  ")).toEqual(false);
  });
});
