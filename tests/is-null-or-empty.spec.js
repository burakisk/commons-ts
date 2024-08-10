"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("isNullOrEmpty", () => {
    test("should be true when value is null", () => {
        expect((0, src_1.isNullOrEmpty)(null)).toEqual(true);
    });
    test("should be true when value is undefined", () => {
        expect((0, src_1.isNullOrEmpty)(undefined)).toEqual(true);
    });
    test("should be true when value is empty string", () => {
        expect((0, src_1.isNullOrEmpty)("")).toEqual(true);
    });
    test("should be true when value includes only whitespace", () => {
        expect((0, src_1.isNullOrEmpty)("  ")).toEqual(true);
    });
    test("should be true when value is undefined", () => {
        expect((0, src_1.isNullOrEmpty)(undefined)).toEqual(true);
    });
    test("should be true when value is null", () => {
        expect((0, src_1.isNullOrEmpty)(null)).toEqual(true);
    });
});
