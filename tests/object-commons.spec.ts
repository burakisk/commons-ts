import { deepClone } from "../src";

describe("deepClone", () => {
  it("should create a deep copy of a simple object", () => {
    const original = { a: 1, b: 2 };
    const clone = deepClone(original);

    expect(clone).toEqual(original);
    expect(clone).not.toBe(original); // Ensure it's a different reference
  });

  it("should create a deep copy of a nested object", () => {
    const original = { a: 1, b: { c: 2, d: 3 } };
    const clone = deepClone(original);

    expect(clone).toEqual(original);
    expect(clone.b).not.toBe(original.b);
  });

  it("should handle arrays within the object", () => {
    const original = { a: 1, b: [2, 3, 4] };
    const clone = deepClone(original);

    expect(clone).toEqual(original);
    expect(clone.b).not.toBe(original.b);
  });

  it("should handle null and undefined values", () => {
    const original = { a: null, b: undefined };
    const clone = deepClone(original);

    expect(clone).toEqual(original);
  });

  it("should handle objects with dates (Note: Dates will be converted to strings)", () => {
    const original = { a: new Date("2023-01-01") };
    const clone = deepClone(original);

    expect(clone).toEqual({ a: "2023-01-01T00:00:00.000Z" });
  });

  it("should not clone functions (functions will be lost)", () => {
    const original = {
      a: 1,
      b: () => 2,
    };
    const clone = deepClone(original);

    expect(clone).toEqual({ a: 1 });
  });
});
