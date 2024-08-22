/**
 * Compares two integers and returns:
 * - 0 if they are equal
 * - -1 if the first integer is less than the second
 * - 1 if the first integer is greater than the second
 *
 * @param {number} x - The first integer to compare.
 * @param {number} y - The second integer to compare.
 * @returns {number} Comparison result: 0, -1, or 1.
 */
function compare(x: number, y: number): number {
  if (x === y) {
    return 0;
  } else if (x < y) {
    return -1;
  } else {
    return 1;
  }
}

/**
 * Converts a string to an integer. Returns a default value if the conversion is not possible.
 *
 * @param {string} str - The string to convert.
 * @param {number} defaultValue - The default value to return if the string cannot be converted.
 * @returns {number} The converted integer or the default value.
 */
function toInt(str: string, defaultValue: number = 0): number {
  const num = parseInt(str, 10);
  return isNaN(num) ? defaultValue : num;
}

/**
 * Converts a string to an float. Returns a default value if the conversion is not possible.
 *
 * @param {string} str - The string to convert.
 * @param {number} defaultValue - The default value to return if the string cannot be converted.
 * @returns {number} The converted float or the default value.
 */
function toFloat(str: string, defaultValue: number = 0.0): number {
  const num = parseFloat(str);
  return isNaN(num) ? defaultValue : num;
}

/**
 * Checks if a number is even.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} - Returns `true` if the number is even, otherwise `false`.
 *
 * @example
 * // Example usage:
 * console.log(isEven(4)); // Output: true
 * console.log(isEven(7)); // Output: false
 */
function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * Checks if a number is odd.
 *
 * @param {number} num - The number to check.
 * @returns {boolean} - Returns `true` if the number is odd, otherwise `false`.
 *
 * @example
 * // Example usage:
 * console.log(isOdd(4)); // Output: false
 * console.log(isOdd(7)); // Output: true
 */
function isOdd(num: number): boolean {
  return num % 2 !== 0;
}

export { compare, toInt, toFloat, isEven, isOdd };
