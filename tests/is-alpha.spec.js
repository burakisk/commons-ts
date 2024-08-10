"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("isAlpha", () => {
    test("should be true when value includes only letter", () => {
        expect((0, src_1.isAlpha)("b")).toEqual(true);
    });
    test("should be false when value includes any chars except from letter", () => {
        expect((0, src_1.isAlpha)(" b ")).toEqual(false);
    });
    test("should be false when value is empty", () => {
        expect((0, src_1.isAlpha)("  ")).toEqual(false);
    });
});
