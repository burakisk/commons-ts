import { unique } from "../src";

describe("unique", () => {
  it("should return an array with only unique numbers", () => {
    const numbers = [1, 2, 2, 3, 4, 4, 5];
    const result = unique(numbers);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return an array with only unique strings", () => {
    const strings = ["a", "b", "a", "c", "b"];
    const result = unique(strings);
    expect(result).toEqual(["a", "b", "c"]);
  });

  it("should work with mixed types", () => {
    const mixed = [1, "1", 2, "2", 2, "2"];
    const result = unique(mixed);
    expect(result).toEqual([1, "1", 2, "2"]);
  });

  it("should handle an empty array", () => {
    const empty: any[] = [];
    const result = unique(empty);
    expect(result).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const single = [42];
    const result = unique(single);
    expect(result).toEqual([42]);
  });

  it("should handle an array with all unique elements", () => {
    const allUnique = [1, 2, 3, 4, 5];
    const result = unique(allUnique);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});
