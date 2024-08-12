/**
 * Returns a random boolean value (true or false).
 *
 * @returns {boolean} A random boolean value.
 */
function nextBoolean(): boolean {
  return Math.random() >= 0.5;
}

/**
 * Generates a random integer between min and max (inclusive).
 * Defaults to min = 0 and max = Number.MAX_SAFE_INTEGER.
 *
 * @param {number} [min=0] - The minimum value of the random integer (inclusive).
 * @param {number} [max=Number.MAX_SAFE_INTEGER] - The maximum value of the random integer (inclusive).
 * @returns {number} A random integer between min and max.
 */
function nextInt(min: number = 0, max: number = Number.MAX_SAFE_INTEGER): number {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generates a random floating-point number between min and max (inclusive).
 * Defaults to min = 0 and max = 1.
 *
 * @param {number} [min=0] - The minimum value of the random float (inclusive).
 * @param {number} [max=1] - The maximum value of the random float (inclusive).
 * @returns {number} A random floating-point number between min and max.
 */
function nextFloat(min: number = 0, max: number = 1): number {
  return Math.random() * (max - min) + min;
}

/**
 * Generates a random string of the specified length.
 *
 * @param {number} length - The length of the random string.
 * @param {string} charset - The characters to use for the string. Defaults to alphanumeric characters.
 * @returns {string} A random string of the specified length.
 */
function nextString(
  length: number = 10,
  charset: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
): string {
  let result = "";
  const charactersLength = charset.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += charset[randomIndex];
  }
  return result;
}

export { nextBoolean, nextInt, nextFloat, nextString };
