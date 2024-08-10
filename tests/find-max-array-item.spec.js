"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const test_commons_1 = require("./test-commons");
describe("findMax", () => {
    test("should return undefined for an empty array", () => {
        expect((0, src_1.findMax)([], (a, b) => a - b)).toBeUndefined();
    });
    test("should return max item in given integer array", () => {
        expect((0, src_1.findMax)([3, 1, 4, 1, 5, 9, 2, 6], (a, b) => a - b)).toBe(9);
    });
    test("should return max item in given float array", () => {
        expect((0, src_1.findMax)([1.5, 2.3, 0.9, 1.8], (a, b) => a - b)).toBe(2.3);
    });
    test("should return max item in given double array", () => {
        expect((0, src_1.findMax)([1.23456789, 0.12345678, 2.3456789], (a, b) => a - b)).toBe(2.3456789);
    });
    test("should return max item in given double array", () => {
        expect((0, src_1.findMax)(["banana", "apple", "cherry", "date"], (a, b) => a.localeCompare(b))).toBe("date");
    });
    test("should return person who has max age in given person array", () => {
        const expected = { age: 35, name: "Charlie" };
        expect((0, src_1.findMax)(test_commons_1.people, (a, b) => a.age - b.age)).toEqual(expected);
    });
});
