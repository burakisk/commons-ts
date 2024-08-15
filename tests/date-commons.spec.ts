import { addDays, addHours, addMilliseconds, isSameDay, formatUTC } from "../src";

describe("addDays", () => {
  test("should add days correctly within the same month", () => {
    const date = new Date("2024-08-13");
    const result = addDays(date, 5);
    expect(result).toEqual(new Date("2024-08-18"));
  });

  test("should subtract days correctly within the same month", () => {
    const date = new Date("2024-08-13");
    const result = addDays(date, -10);
    expect(result).toEqual(new Date("2024-08-03"));
  });

  test("should handle adding days across months", () => {
    const date = new Date("2024-08-28");
    const result = addDays(date, 5);
    expect(result).toEqual(new Date("2024-09-02"));
  });

  test("should handle adding days across years", () => {
    const date = new Date("2024-12-30");
    const result = addDays(date, 5);
    expect(result).toEqual(new Date("2025-01-04"));
  });

  test("should handle subtracting days across months", () => {
    const date = new Date("2024-08-03");
    const result = addDays(date, -5);
    expect(result).toEqual(new Date("2024-07-29"));
  });

  test("should handle subtracting days across years", () => {
    const date = new Date("2024-01-03");
    const result = addDays(date, -5);
    expect(result).toEqual(new Date("2023-12-29"));
  });
});

describe("addHours", () => {
  test("should add hours correctly within the same day", () => {
    const date = new Date("2024-08-13T10:00:00");
    const result = addHours(date, 5);
    expect(result).toEqual(new Date("2024-08-13T15:00:00"));
  });

  test("should subtract hours correctly within the same day", () => {
    const date = new Date("2024-08-13T10:00:00");
    const result = addHours(date, -3);
    expect(result).toEqual(new Date("2024-08-13T07:00:00"));
  });

  test("should handle adding hours across days", () => {
    const date = new Date("2024-08-13T22:00:00");
    const result = addHours(date, 5);
    expect(result).toEqual(new Date("2024-08-14T03:00:00"));
  });

  test("should handle adding hours across months", () => {
    const date = new Date("2024-08-31T22:00:00");
    const result = addHours(date, 5);
    expect(result).toEqual(new Date("2024-09-01T03:00:00"));
  });

  test("should handle adding hours across years", () => {
    const date = new Date("2024-12-31T22:00:00");
    const result = addHours(date, 5);
    expect(result).toEqual(new Date("2025-01-01T03:00:00"));
  });

  test("should handle subtracting hours across days", () => {
    const date = new Date("2024-08-01T02:00:00");
    const result = addHours(date, -5);
    expect(result).toEqual(new Date("2024-07-31T21:00:00"));
  });
});

describe("addMilliseconds", () => {
  test("should add milliseconds correctly within the same second", () => {
    const date = new Date("2024-08-13T10:00:00.000Z");
    const result = addMilliseconds(date, 500);
    expect(result).toEqual(new Date("2024-08-13T10:00:00.500Z"));
  });

  test("should subtract milliseconds correctly within the same second", () => {
    const date = new Date("2024-08-13T10:00:00.000Z");
    const result = addMilliseconds(date, -500);
    expect(result).toEqual(new Date("2024-08-13T09:59:59.500Z"));
  });

  test("should handle adding milliseconds across seconds", () => {
    const date = new Date("2024-08-13T10:00:00.900Z");
    const result = addMilliseconds(date, 200);
    expect(result).toEqual(new Date("2024-08-13T10:00:01.100Z"));
  });

  test("should handle subtracting milliseconds across seconds", () => {
    const date = new Date("2024-08-13T10:00:00.100Z");
    const result = addMilliseconds(date, -200);
    expect(result).toEqual(new Date("2024-08-13T09:59:59.900Z"));
  });

  test("should handle adding milliseconds across minutes", () => {
    const date = new Date("2024-08-13T10:00:59.900Z");
    const result = addMilliseconds(date, 200);
    expect(result).toEqual(new Date("2024-08-13T10:01:00.100Z"));
  });

  test("should handle subtracting milliseconds across minutes", () => {
    const date = new Date("2024-08-13T10:01:00.100Z");
    const result = addMilliseconds(date, -200);
    expect(result).toEqual(new Date("2024-08-13T10:00:59.900Z"));
  });

  test("should handle adding milliseconds across hours", () => {
    const date = new Date("2024-08-13T09:59:59.900Z");
    const result = addMilliseconds(date, 2000);
    expect(result).toEqual(new Date("2024-08-13T10:00:01.900Z"));
  });

  test("should handle subtracting milliseconds across hours", () => {
    const date = new Date("2024-08-13T10:00:01.900Z");
    const result = addMilliseconds(date, -2000);
    expect(result).toEqual(new Date("2024-08-13T09:59:59.900Z"));
  });
});

describe("isSameDay", () => {
  test("should return true for the same day with different times", () => {
    const date1 = new Date("2024-08-13T10:00:00");
    const date2 = new Date("2024-08-13T22:00:00");
    expect(isSameDay(date1, date2)).toBe(true);
  });

  test("should return false for different days", () => {
    const date1 = new Date("2024-08-13T10:00:00");
    const date2 = new Date("2024-08-14T10:00:00");
    expect(isSameDay(date1, date2)).toBe(false);
  });

  test("should return false for the same day but different months", () => {
    const date1 = new Date("2024-08-13T10:00:00");
    const date2 = new Date("2024-09-13T10:00:00");
    expect(isSameDay(date1, date2)).toBe(false);
  });

  test("should return false for the same day and month but different years", () => {
    const date1 = new Date("2023-08-13T10:00:00");
    const date2 = new Date("2024-08-13T10:00:00");
    expect(isSameDay(date1, date2)).toBe(false);
  });

  test("should return true for the same day in different time zones", () => {
    const date1 = new Date("2024-08-13T23:00:00Z"); // UTC time
    const date2 = new Date("2024-08-13T18:00:00-05:00"); // 5 hours behind UTC
    expect(isSameDay(date1, date2)).toBe(true);
  });

  test("should return false for dates close to each other but on different days", () => {
    const date1 = new Date("2024-08-13T23:59:59");
    const date2 = new Date("2024-08-14T00:00:01");
    expect(isSameDay(date1, date2)).toBe(false);
  });
});

describe("formatUTC", () => {
  it("should format a date with all components", () => {
    const millis = new Date(Date.UTC(2024, 7, 15, 14, 35, 22, 123)).getTime();
    const pattern = "YYYY-MM-DD HH:mm:ss.SSS";
    expect(formatUTC(millis, pattern)).toBe("2024-08-15 14:35:22.123");
  });

  it("should handle a pattern with just the date", () => {
    const millis = new Date(Date.UTC(2024, 7, 15)).getTime();
    const pattern = "YYYY-MM-DD";
    expect(formatUTC(millis, pattern)).toBe("2024-08-15");
  });

  it("should handle a pattern with just the time", () => {
    const millis = new Date(Date.UTC(2024, 7, 15, 14, 35, 22)).getTime();
    const pattern = "HH:mm:ss";
    expect(formatUTC(millis, pattern)).toBe("14:35:22");
  });

  it("should handle a pattern with milliseconds", () => {
    const millis = new Date(Date.UTC(2024, 7, 15, 14, 35, 22, 45)).getTime();
    const pattern = "HH:mm:ss.SSS";
    expect(formatUTC(millis, pattern)).toBe("14:35:22.045");
  });
});
