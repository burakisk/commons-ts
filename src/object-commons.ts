/**
 * Creates a deep copy of the given object.
 *
 * @template T - The type of the object to be cloned.
 * @param {T} obj - The object to deep clone.
 * @returns {T} - A deep clone of the input object.
 *
 * @example
 * // Example usage:
 * const original = { a: 1, b: { c: 2 } };
 * const cloned = deepClone(original);
 * console.log(cloned); // Output: { a: 1, b: { c: 2 } }
 *
 * // Modifying the clone won't affect the original
 * cloned.b.c = 3;
 * console.log(original.b.c); // Output: 2
 */
function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export { deepClone };
