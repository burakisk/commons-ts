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

export { validateEmail };
