export function packageName(): string {
  return "commons-ts";
}

/**
 * Checks if the specified value is empty. A value is considered empty if meets any of the following criteria:
 * - Is an empty string
 * - Is ```undefined``` || ```null```
 * @param str The value to check
 * @returns true/false
 */
export function isNullOrEmpty(str: string | null | undefined): boolean {
  return str === null || str === undefined || str.trim() === "";
}

/**
 * Reverse given string.
 * @param str The value to reverse
 * @returns string
 */
export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

/**
 * Checks if the specified value contains only letter.
 * @param str The value to check
 * @returns true/false
 */
export function isAlpha(str: string): boolean {
  return /^[A-Za-z]+$/.test(str);
}

/**
 * Checks if the specified value contains only number.
 * @param str The value to check
 * @returns true/false
 */
export function isNumeric(str: string): boolean {
  return /^[0-9]+$/.test(str);
}

/**
 * Checks if the specified value contains only whitespace.
 * @param str The value to check
 * @returns true/false
 */
export function isWhitespace(str: string): boolean {
  return /^\s*$/.test(str);
}

/**
 * Shift given string to left by given rotation if given rotation is valid.
 * @param str The value to check
 * @param n The rotation count
 * @returns string
 */
export function rotateStringLeft(str: string, n: number): string {
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
export function rotateStringRight(str: string, n: number): string {
  if (str.length === 0) {
    return str;
  }

  if (n < 0) {
    throw new Error("Invalid input: n must be a possitive number");
  }

  n = n % str.length; // Normalize rotation to be within the string length

  return str.slice(-n) + str.slice(0, -n);
}
