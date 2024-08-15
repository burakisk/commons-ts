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

/**
 * Formats a UTC timestamp in milliseconds according to a given pattern.
 * @param millis - The timestamp in milliseconds.
 * @param pattern - The format pattern (e.g., "yyyy-MM-dd HH:mm:ss").
 * @returns The formatted date string or undefined if inputs are invalid.
 */
function formatUTC(millis: number, pattern: string): string | undefined {
  if (typeof millis !== "number" || isNaN(millis) || millis < 0) {
    return undefined;
  }

  if (typeof pattern !== "string" || pattern.trim() === "") {
    return undefined;
  }

  const date = new Date(millis);

  const pad = (num: number, len: number) => String(num).padStart(len, "0");

  const formatMap: { [key: string]: () => string } = {
    yyyy: () => date.getUTCFullYear().toString(),
    MM: () => pad(date.getUTCMonth() + 1, 2),
    dd: () => pad(date.getUTCDate(), 2),
    HH: () => pad(date.getUTCHours(), 2),
    mm: () => pad(date.getUTCMinutes(), 2),
    ss: () => pad(date.getUTCSeconds(), 2),
    SSS: () => pad(date.getUTCMilliseconds(), 3),
  };

  const validPattern = /^(yyyy|MM|dd|HH|mm|ss|SSS|[^yMdHmsS \-:\/.,])+$/;
  if (!validPattern.test(pattern)) {
    return undefined;
  }

  return pattern.replace(/yyyy|MM|dd|HH|mm|ss|SSS/g, (match) => formatMap[match]());
}

export { addDays, addHours, addMilliseconds, isSameDay, formatUTC };
