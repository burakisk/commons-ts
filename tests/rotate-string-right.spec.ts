import { rotateStringRight } from "../src";

describe("rotateStringRight", () => {
  test("should rotate string to the right by positive positions", () => {
    expect(rotateStringRight("abcdef", 2)).toBe("efabcd");
  });

  test("should handle rotation by zero positions", () => {
    expect(rotateStringRight("abcdef", 0)).toBe("abcdef");
  });

  test("should handle rotation by a number greater than the length of the string", () => {
    expect(rotateStringRight("abcdef", 8)).toBe("efabcd"); // 8 % 6 = 2
  });

  test("should handle rotation of an empty string", () => {
    expect(rotateStringRight("", 5)).toBe("");
  });

  test("should handle rotation of a single-character string", () => {
    expect(rotateStringRight("a", 3)).toBe("a");
  });

  test("should handle rotation of a string with multiple characters but zero shift", () => {
    expect(rotateStringRight("abcd", 4)).toBe("abcd"); // 4 % 4 = 0
  });

  test("should throw an error if the rotation count is a neggative number", () => {
    expect(() => rotateStringRight("abcdef", -2)).toThrow(
      "Invalid input: n must be a possitive number"
    );
  });
});
