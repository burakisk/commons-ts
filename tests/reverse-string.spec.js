"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("reverseString", () => {
    test("should reverse given string", () => {
        expect((0, src_1.reverseString)("commons-ts")).toEqual("st-snommoc");
    });
    test("should input equals to output when given string is palindrome", () => {
        expect((0, src_1.reverseString)("radar")).toEqual("radar");
    });
    test("should input not equals to output ", () => {
        expect((0, src_1.reverseString)("commons-ts")).not.toEqual("commons-ts");
    });
});
