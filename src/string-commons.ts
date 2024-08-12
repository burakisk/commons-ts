function packageName(): string {
  return "commons-ts";
}

/**
 * Checks if the specified value is empty. A value is considered empty if meets any of the following criteria:
 * - Is an empty string
 * - Is ```undefined``` || ```null```
 * @param str The value to check
 * @returns true/false
 */
function isNullOrEmpty(str: string | null | undefined): boolean {
  return str === null || str === undefined || str.trim() === "";
}

/**
 * Compares two values for equality, with an option to ignore case.
 * Treats numbers and their string representations as equal.
 * Handles edge cases such as null, undefined, and non-string inputs.
 *
 * @param {any} input1 - The first input to compare.
 * @param {any} input2 - The second input to compare.
 * @param {boolean} [ignoreCase=false] - Whether to ignore case when comparing strings.
 * @returns {boolean} - Returns true if inputs are equal according to the criteria, otherwise false.
 */
function areValuesEqual(input1: any, input2: any, ignoreCase: boolean = false): boolean {
  if (input1 == null || input2 == null) {
    return false;
  }

  let str1 = String(input1);
  let str2 = String(input2);

  if (ignoreCase) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  }

  return str1 === str2;
}

/**
 * Reverse given string.
 * @param str The value to reverse
 * @returns string
 */
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

/**
 * Checks if the specified value contains only letter.
 * @param str The value to check
 * @returns true/false
 */
function isAlpha(str: string): boolean {
  return /^[A-Za-z]+$/.test(str);
}

/**
 * Checks if the specified value contains only number.
 * @param str The value to check
 * @returns true/false
 */
function isNumeric(str: string): boolean {
  return /^[0-9]+$/.test(str);
}

/**
 * Checks if the specified value contains only whitespace.
 * @param str The value to check
 * @returns true/false
 */
function isWhitespace(str: string): boolean {
  return /^\s*$/.test(str);
}

/**
 * Shift given string to left by given rotation if given rotation is valid.
 * @param str The value to check
 * @param n The rotation count
 * @returns string
 */
function rotateStringLeft(str: string, n: number): string {
  if (str.length === 0) {
    return str;
  }

  if (n < 0) {
    throw new Error("Invalid input: n must be a possitive number");
  }

  n = n % str.length; // Normalize rotation to be within the string length

  return str.slice(n) + str.slice(0, n);
}

/**
 * Shift given string to right by given rotation if given rotation is valid.
 * @param str The value to check
 * @param n The rotation count
 * @returns string
 */
function rotateStringRight(str: string, n: number): string {
  if (str.length === 0) {
    return str;
  }

  if (n < 0) {
    throw new Error("Invalid input: n must be a possitive number");
  }

  n = n % str.length; // Normalize rotation to be within the string length

  return str.slice(-n) + str.slice(0, -n);
}

export {
  packageName,
  isNullOrEmpty,
  areValuesEqual,
  reverseString,
  isAlpha,
  isNumeric,
  isWhitespace,
  rotateStringLeft,
  rotateStringRight,
};
