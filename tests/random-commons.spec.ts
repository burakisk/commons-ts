import { nextBoolean, nextInt, nextFloat } from "../src";

describe("nextBoolean", () => {
  test("should be a boolean value", () => {
    const value = nextBoolean();
    expect(typeof value).toBe("boolean");
  });

  test("should not be an integer value", () => {
    const value = nextBoolean();
    expect(typeof value).not.toBe("number");
  });
});

describe("nextInt", () => {
  test("should be a integer value", () => {
    const value = nextInt();
    expect(typeof value).toBe("number");
  });

  test("should not be a boolean value", () => {
    const value = nextInt();
    expect(typeof value).not.toBe("boolean");
  });

  test("should return random int between min and max", () => {
    expect(nextInt(0, 50)).toBeLessThanOrEqual(50);
    expect(nextInt(0, 50)).toBeGreaterThanOrEqual(0);
  });

  test("should return random int greater than or equal 50", () => {
    expect(nextInt(50)).toBeGreaterThanOrEqual(50);
  });
});

describe("nextFloat", () => {
  test("should be a floating-point number within default range", () => {
    const value = nextFloat();

    expect(typeof value).toBe("number");
    expect(value % 1).not.toBe(0); // Non-zero remainder indicates a float

    expect(value).toBeGreaterThanOrEqual(0);
    expect(value).toBeLessThanOrEqual(1);
  });

  test("should be a floating-point number", () => {
    const min = 1;
    const max = 10;
    const value = nextFloat(min, max);

    expect(typeof value).toBe("number");
    expect(value % 1).not.toBe(0);

    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThanOrEqual(max);
  });
});
