import { todayIsHoliday } from "lib";
import holidays from "../holidays";

describe("Test todayIsHoliday", () => {
  test("Test first & last value", () => {
    expect(todayIsHoliday("3-1")).toBe(0);
    expect(todayIsHoliday("10-9")).toBe(5);
  });
  test("Test true & false case", () => {
    expect(todayIsHoliday("6-6")).toBe(1);
    expect(todayIsHoliday("6-7")).toBe(0);
  });
});
