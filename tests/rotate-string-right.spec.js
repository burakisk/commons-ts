"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("rotateStringRight", () => {
    test("should rotate string to the right by positive positions", () => {
        expect((0, src_1.rotateStringRight)("abcdef", 2)).toBe("efabcd");
    });
    test("should handle rotation by zero positions", () => {
        expect((0, src_1.rotateStringRight)("abcdef", 0)).toBe("abcdef");
    });
    test("should handle rotation by a number greater than the length of the string", () => {
        expect((0, src_1.rotateStringRight)("abcdef", 8)).toBe("efabcd"); // 8 % 6 = 2
    });
    test("should handle rotation of an empty string", () => {
        expect((0, src_1.rotateStringRight)("", 5)).toBe("");
    });
    test("should handle rotation of a single-character string", () => {
        expect((0, src_1.rotateStringRight)("a", 3)).toBe("a");
    });
    test("should handle rotation of a string with multiple characters but zero shift", () => {
        expect((0, src_1.rotateStringRight)("abcd", 4)).toBe("abcd"); // 4 % 4 = 0
    });
    test("should throw an error if the rotation count is a neggative number", () => {
        expect(() => (0, src_1.rotateStringRight)("abcdef", -2)).toThrow("Invalid input: n must be a possitive number");
    });
});
