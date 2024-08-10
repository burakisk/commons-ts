"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("isWhitespace", () => {
    test("should be true when value includes only letter", () => {
        expect((0, src_1.isWhitespace)("   ")).toEqual(true);
    });
    test("should be true when value includes any chars except from letter", () => {
        expect((0, src_1.isWhitespace)(" b ")).toEqual(false);
    });
});
