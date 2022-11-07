const { calcRtnOnPeriod } = require("./../script");

describe("Divide", () => {
  test("should divide two positive integers correctly", () => {
    const result = calcRtnOnPeriod(0.13, 8.5);
    expect(result).toBe(1.53);
  });
});
