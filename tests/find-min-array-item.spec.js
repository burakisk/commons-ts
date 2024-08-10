"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
const test_commons_1 = require("./test-commons");
describe("findMin", () => {
    test("should return undefined for an empty array", () => {
        expect((0, src_1.findMin)([], (a, b) => a - b)).toBeUndefined();
    });
    test("should return min item in given integer array", () => {
        expect((0, src_1.findMin)([3, 1, 4, 1, 5, 9, 2, 6], (a, b) => a - b)).toBe(1);
    });
    test("should return min item in given float array", () => {
        expect((0, src_1.findMin)([1.5, 2.3, 0.9, 1.8], (a, b) => a - b)).toBe(0.9);
    });
    test("should return min item in given double array", () => {
        expect((0, src_1.findMin)([1.23456789, 0.12345678, 2.3456789], (a, b) => a - b)).toBe(0.12345678);
    });
    test("should return min item in given double array", () => {
        expect((0, src_1.findMin)(["banana", "apple", "cherry", "date"], (a, b) => a.localeCompare(b))).toBe("apple");
    });
    test("should return person who has min age in given person array", () => {
        const expected = { age: 25, name: "Bob" };
        expect((0, src_1.findMin)(test_commons_1.people, (a, b) => a.age - b.age)).toEqual(expected);
    });
});
