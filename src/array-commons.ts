/**
 * Finds the minimum value in an array based on a comparison function.
 *
 * This function uses the provided comparison function to determine the minimum value
 * in the array. It works with any type `T` as long as a valid comparison function is provided.
 *
 * @template T - The type of elements in the array.
 *
 * @param {T[]} arr - The array of elements to search through.
 * @param {(a: T, b: T) => number} compareFn - A comparison function that defines the sort order.
 *   - It should return a negative number if `a` is less than `b`.
 *   - It should return a positive number if `a` is greater than `b`.
 *   - It should return zero if `a` and `b` are considered equal.
 *
 * @returns {T | undefined} The minimum value in the array based on the comparison function,
 *   or `undefined` if the array is empty.
 *
 * @example
 * // Example with numbers
 * const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
 * const minNumber = findMin(numbers, (a, b) => a - b);
 * console.log(minNumber); // Output: 1
 *
 * @example
 * // Example with strings
 * const strings = ["banana", "apple", "cherry", "date"];
 * const minString = findMin(strings, (a, b) => a.localeCompare(b));
 * console.log(minString); // Output: "apple"
 *
 * @example
 * // Example with custom objects
 * interface Person {
 *   name: string;
 *   age: number;
 * }
 *
 * const people: Person[] = [
 *   { name: "Alice", age: 30 },
 *   { name: "Bob", age: 25 },
 *   { name: "Charlie", age: 35 }
 * ];
 * const youngest = findMin(people, (a, b) => a.age - b.age);
 * console.log(youngest); // Output: { name: "Bob", age: 25 }
 */
export function findMin<T>(arr: T[], compareFn: (a: T, b: T) => number): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce((min, current) => (compareFn(current, min) < 0 ? current : min), arr[0]);
}

/**
 * Finds the maximum value in an array based on a comparison function.
 *
 * This function uses the provided comparison function to determine the maximum value
 * in the array. It works with any type `T` as long as a valid comparison function is provided.
 *
 * @template T - The type of elements in the array.
 *
 * @param {T[]} arr - The array of elements to search through.
 * @param {(a: T, b: T) => number} compareFn - A comparison function that defines the sort order.
 *   - It should return a negative number if `a` is less than `b`.
 *   - It should return a positive number if `a` is greater than `b`.
 *   - It should return zero if `a` and `b` are considered equal.
 *
 * @returns {T | undefined} The maximum value in the array based on the comparison function,
 *   or `undefined` if the array is empty.
 *
 * @example
 * // Example with numbers
 * const numbers = [3, 1, 4, 1, 5, 9, 2, 6];
 * const maxNumber = findMax(numbers, (a, b) => a - b);
 * console.log(maxNumber); // Output: 9
 *
 * @example
 * // Example with strings
 * const strings = ["banana", "apple", "cherry", "date"];
 * const maxString = findMax(strings, (a, b) => a.localeCompare(b));
 * console.log(maxString); // Output: "date"
 *
 * @example
 * // Example with custom objects
 * interface Person {
 *   name: string;
 *   age: number;
 * }
 *
 * const people: Person[] = [
 *   { name: "Alice", age: 30 },
 *   { name: "Bob", age: 25 },
 *   { name: "Charlie", age: 35 }
 * ];
 * const oldest = findMax(people, (a, b) => a.age - b.age);
 * console.log(oldest); // Output: { name: "Charlie", age: 35 }
 */
export function findMax<T>(arr: T[], compareFn: (a: T, b: T) => number): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce((max, current) => (compareFn(current, max) > 0 ? current : max), arr[0]);
}

/**
 * Returns an array with only unique values.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} arr - The input array containing elements of any type.
 * @returns {T[]} - A new array containing only the unique elements from the input array.
 *
 * @example
 * // Example usage:
 * const numbers = [1, 2, 2, 3, 4, 4, 5];
 * const uniqueNumbers = unique(numbers);
 * console.log(uniqueNumbers); // Output: [1, 2, 3, 4, 5]
 *
 * const strings = ["a", "b", "a", "c"];
 * const uniqueStrings = unique(strings);
 * console.log(uniqueStrings); // Output: ["a", "b", "c"]
 */
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
