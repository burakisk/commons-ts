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
 * Formats a UTC timestamp according to the given pattern.
 *
 * @param millis - The timestamp in milliseconds since the Unix epoch.
 * @param pattern - The format pattern string. Tokens in the pattern will be replaced with actual date/time values.
 *
 * Available tokens:
 * - `YYYY` for the 4-digit year
 * - `MM` for the 2-digit month (01-12)
 * - `DD` for the 2-digit day of the month (01-31)
 * - `HH` for the 2-digit hour (00-23)
 * - `mm` for the 2-digit minute (00-59)
 * - `ss` for the 2-digit second (00-59)
 * - `SSS` for the 3-digit millisecond (000-999)
 *
 * @returns A string representing the formatted date/time, or undefined if the pattern contains unsupported tokens.
 */
function formatUTC(millis: number, pattern: string): string | undefined {
  const date = new Date(millis);

  const tokens: { [key: string]: string } = {
    YYYY: date.getUTCFullYear().toString(),
    MM: ("0" + (date.getUTCMonth() + 1)).slice(-2),
    DD: ("0" + date.getUTCDate()).slice(-2),
    HH: ("0" + date.getUTCHours()).slice(-2),
    mm: ("0" + date.getUTCMinutes()).slice(-2),
    ss: ("0" + date.getUTCSeconds()).slice(-2),
    SSS: ("00" + date.getUTCMilliseconds()).slice(-3),
  };

  return pattern.replace(/YYYY|MM|DD|HH|mm|ss|SSS/g, (matched) => tokens[matched] || matched);
}

export { addDays, addHours, addMilliseconds, isSameDay, formatUTC };
