import { defaultString } from "../src";

describe("defaultString", () => {
  test("should return the default value for null input", () => {
    expect(defaultString(null, "Default Value")).toBe("Default Value");
  });

  test("should return the default value for undefined input", () => {
    expect(defaultString(undefined, "Default Value")).toBe("Default Value");
  });

  test("should return the input string if it is not null or undefined", () => {
    expect(defaultString("Hello World", "Default Value")).toBe("Hello World");
  });

  test("should return the input string if it is an empty string", () => {
    expect(defaultString("", "Default Value")).toBe("");
  });

  test("should handle case where default value is empty", () => {
    expect(defaultString(null, "")).toBe("");
    expect(defaultString(undefined, "")).toBe("");
    expect(defaultString("non-empty", "")).toBe("non-empty");
  });
});
