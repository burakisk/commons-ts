export function packageName(): string {
  return "commons-ts";
}

export function isNullOrEmpty(str: string | null | undefined): boolean {
  return str === null || str === undefined || str.trim() === "";
}

export function reverseString(str: string): string {
  return str.split("").reverse().join("");
}

export function isAlpha(str: string): boolean {
  return /^[A-Za-z]+$/.test(str);
}

export function isNumeric(str: string): boolean {
  return /^[0-9]+$/.test(str);
}

export function isWhitespace(str: string): boolean {
  return /^\s*$/.test(str);
}
