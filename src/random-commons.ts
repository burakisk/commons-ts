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

export { nextBoolean, nextInt, nextFloat };
