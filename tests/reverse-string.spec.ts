import { reverseString } from "../src";

describe("reverseString", () => {
  test("should reverse given string", () => {
    expect(reverseString("commons-ts")).toEqual("st-snommoc");
  });

  test("should input equals to output when given string is palindrome", () => {
    expect(reverseString("radar")).toEqual("radar");
  });

  test("should input not equals to output ", () => {
    expect(reverseString("commons-ts")).not.toEqual("commons-ts");
  });
});
