"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("getFileExtension", () => {
    test.each([
        { filename: "example.txt", expected: "txt" },
        { filename: "archive.tar.gz", expected: "gz" },
        { filename: "backup.2024-08-07.7z", expected: "7z" },
    ])("should return $expected for $filename", ({ filename, expected }) => {
        expect((0, src_1.getFileExtension)(filename)).toBe(expected);
    });
    test.each([
        { filename: "README", expected: null },
        { filename: ".gitignore", expected: null },
        { filename: "", expected: null },
        { filename: "noextension", expected: null },
    ])("should return null given invalid file name", ({ filename, expected }) => {
        expect((0, src_1.getFileExtension)(filename)).toBe(expected);
    });
    test.each([
        { filename: "file.", expected: "" },
        { filename: "filename.", expected: "" },
    ])("should return empty given file name without extension", ({ filename, expected }) => {
        expect((0, src_1.getFileExtension)(filename)).toBe(expected);
    });
});
