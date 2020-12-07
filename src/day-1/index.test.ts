import { expenseReport } from "./solution";

describe("day 1", () => {
  test("output equals 514579", () => {
    const expectedAnswer = 514579;
    const exampleInput = [1721, 979, 366, 299, 675, 1456];

    expect(expenseReport(exampleInput)).toEqual(expectedAnswer);
  });
});
