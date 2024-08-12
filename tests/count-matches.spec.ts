import { countMatches } from "../src";

describe("countMatches", () => {
  test("should count occurrences of a substring case-sensitively by default", () => {
    expect(countMatches("Hello World, hello universe", "hello")).toBe(1);
    expect(countMatches("abcABCabc", "abc")).toBe(2);
    expect(countMatches("aaaaaa", "aa")).toBe(3);
  });

  test("should count occurrences of a substring ignoring case when specified", () => {
    expect(countMatches("Hello World, hello universe", "hello", true)).toBe(2);
    expect(countMatches("abcABCabc", "abc", true)).toBe(3);
    expect(countMatches("aaaaaa", "AA", true)).toBe(3);
  });

  test("should return 0 if the substring is not found", () => {
    expect(countMatches("abcdef", "xyz")).toBe(0);
  });

  test("should return 0 if the larger string is empty", () => {
    expect(countMatches("", "abc")).toBe(0);
  });

  test("should return 0 if the substring is empty", () => {
    expect(countMatches("abc", "")).toBe(0);
  });

  test("should handle null or undefined inputs gracefully", () => {
    expect(() => countMatches(null as any, "abc")).toThrow();
    expect(() => countMatches("abc", null as any)).toThrow();
    expect(() => countMatches(undefined as any, "abc")).toThrow();
    expect(() => countMatches("abc", undefined as any)).toThrow();
  });
});
