export function packageName(): string {
  return "commons-ts"
}

export function isNullOrEmpty(str: string | null | undefined): boolean {
    return str === null || str === undefined || str.trim() === '';
}

export function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

