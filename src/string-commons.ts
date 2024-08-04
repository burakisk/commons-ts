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

export function rotateStringLeft(s: string, n: number): string {
  if (s.length === 0) {
    return s;
  }

  if (n < 0) {
    throw new Error("Invalid input: n must be a possitive number");
  }

  n = n % s.length; // Normalize rotation to be within the string length

  return s.slice(n) + s.slice(0, n);
}

export function rotateStringRight(s: string, n: number): string {
  if (s.length === 0) {
    return s;
  }

  if (n < 0) {
    throw new Error("Invalid input: n must be a possitive number");
  }

  n = n % s.length; // Normalize rotation to be within the string length

  return s.slice(-n) + s.slice(0, -n);
}
