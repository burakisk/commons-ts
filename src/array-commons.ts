export function findMin<T>(arr: T[], compareFn: (a: T, b: T) => number): T | undefined {
  if (arr.length === 0) {
    return undefined;
  }

  return arr.reduce((min, current) => (compareFn(current, min) < 0 ? current : min), arr[0]);
}
