/**
 * Validates an email address based on a regular expression.
 *
 * This function checks if the input string matches a typical email pattern.
 * It verifies that the email contains a local part (e.g., "username"),
 * an "@" symbol, a domain (e.g., "google"), and a valid top-level domain
 * (e.g., ".com").
 *
 * @param {string} email - The email address to be validated.
 * @returns {boolean} - Returns `true` if the email is valid, otherwise `false`.
 *
 * @example
 * validateEmail("username@google.com"); // true
 * validateEmail("invalid-email"); // false
 */
function validateEmail(email: string): boolean {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}

/**
 * Validates a phone number based on a flexible regex that supports international formats.
 *
 * The function checks if the input string matches a phone number format that allows:
 * - Optional country code with `+` and up to 3 digits (e.g., "+1" or "+90")
 * - Area code with or without parentheses (e.g., "(123)" or "123")
 * - Flexible separators like spaces, hyphens, and dots (e.g., "123-456-7890" or "123 456 7890")
 * - Phone numbers with either 3 or 4 digits in the first segment followed by 4 digits in the last segment.
 *
 * @param {string} phoneNumber - The phone number to be validated.
 * @returns {boolean} - Returns `true` if the phone number is valid, otherwise `false`.
 */
function validatePhoneNumber(phoneNumber: string): boolean {
  const allCountryRegex = /^(\+\d{1,3}( )?)?((\(\d{1,3}\))|\d{1,3})[- .]?\d{3,4}[- .]?\d{4}$/;
  return allCountryRegex.test(phoneNumber);
}

/**
 * Validates a URL based on a comprehensive regular expression.
 *
 * This function checks if the input string matches a typical URL pattern.
 * It supports:
 * - HTTP/HTTPS protocols (e.g., "http://google.com", "https://google.com")
 * - Optional "www" subdomain (e.g., "www.google.com", "google.com")
 * - Optional paths, query strings, and fragments (e.g., "google.com/path?query=value#fragment")
 *
 * @param {string} url - The URL to be validated.
 * @returns {boolean} - Returns `true` if the URL is valid, otherwise `false`.
 *
 * @example
 * validateUrl("https://www.google.com"); // true
 * validateUrl("http://google.com?query=value"); // true
 * validateUrl("https://google.com#fragment"); // true
 * validateUrl("invalid-url"); // false
 */
function validateUrl(url: string): boolean {
  const urlRegex = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?(\?[^\s#]*)?(#[^\s]*)?$/;
  return urlRegex.test(url);
}

export { validateEmail, validatePhoneNumber, validateUrl };
