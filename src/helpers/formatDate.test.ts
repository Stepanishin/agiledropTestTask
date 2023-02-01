import { formatDate } from "./formatDate";

describe("formatDate", () => {
  it("returns formatted date string", () => {
    const dateStr = "2022-01-01";
    const expected = "Jan 01, 2022";

    expect(formatDate(dateStr)).toBe(expected);
  });

  it("returns formatted date string with leading zero for single digit day", () => {
    const dateStr = "2022-01-05";
    const expected = "Jan 05, 2022";

    expect(formatDate(dateStr)).toBe(expected);
  });
});