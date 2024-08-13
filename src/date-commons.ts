/**
 * Adds a specified number of days to a given date.
 *
 * @param {Date} date - The original date to which days will be added.
 * @param {number} days - The number of days to add (can be negative to subtract days).
 * @returns {Date} - A new date with the specified number of days added.
 */
function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

/**
 * Adds a specified number of hours to a given date.
 *
 * @param {Date} date - The original date to which hours will be added.
 * @param {number} hours - The number of hours to add (can be negative to subtract hours).
 * @returns {Date} - A new date with the specified number of hours added.
 */
function addHours(date: Date, hours: number): Date {
  const result = new Date(date);
  result.setHours(result.getHours() + hours);
  return result;
}

/**
 * Adds a specified number of milliseconds to a given date.
 *
 * @param {Date} date - The original date to which milliseconds will be added.
 * @param {number} milliseconds - The number of milliseconds to add (can be negative to subtract milliseconds).
 * @returns {Date} - A new date with the specified number of milliseconds added.
 */
function addMilliseconds(date: Date, milliseconds: number): Date {
  const result = new Date(date);
  result.setTime(result.getTime() + milliseconds);
  return result;
}

/**
 * Checks if two dates are on the same day (ignoring time).
 *
 * @param {Date} date1 - The first date to compare.
 * @param {Date} date2 - The second date to compare.
 * @returns {boolean} - True if the two dates are on the same day, false otherwise.
 */
function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export { addDays, addHours, addMilliseconds, isSameDay };
