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
function convertStringToNumber(str: string, defaultValue: number = 0): number {
  const num = parseInt(str, 10);
  return isNaN(num) ? defaultValue : num;
}

export { compare, convertStringToNumber };
