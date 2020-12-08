import {
  countValidPasswords,
  getRows,
  getRuleAndPassword,
  newJobPasses,
  oldJobPasses,
} from "./solution";

const input = `
  1-3 a: abcde
  1-3 b: cdefg
  2-9 c: ccccccccc
`;

describe("day 2", () => {
  describe("text parsing", () => {
    test("that we can split the rows", () => {
      expect(getRows(input).length).toEqual(3);
    });

    test("that we get each row", () => {
      expect(getRows(input)).toEqual([
        "1-3 a: abcde",
        "1-3 b: cdefg",
        "2-9 c: ccccccccc",
      ]);
    });

    test("that a rule is returned", () => {
      const { rule } = getRuleAndPassword("1-3 a: abcde");

      expect(rule).toEqual({
        lower: 1,
        upper: 3,
        letter: "a",
      });
    });

    test("that a password is returned", () => {
      const { password } = getRuleAndPassword("1-3 a: abcde");

      expect(password).toEqual("abcde");
    });

    describe("old job matching", () => {
      test("passing password", () => {
        expect(
          oldJobPasses({
            password: "abcde",
            rule: { lower: 1, upper: 3, letter: "a" },
          })
        ).toBe(true);
      });

      test("failing password", () => {
        expect(
          oldJobPasses({
            password: "cdefg",
            rule: { lower: 1, upper: 3, letter: "b" },
          })
        ).toBe(false);
      });
    });

    describe("new job matching", () => {
      test("passing password", () => {
        expect(
          newJobPasses({
            password: "abcde",
            rule: { lower: 1, upper: 3, letter: "a" },
          })
        ).toBe(true);
      });

      test("failing password", () => {
        expect(
          newJobPasses({
            password: "cdefg",
            rule: { lower: 1, upper: 3, letter: "b" },
          })
        ).toBe(false);
      });
    });

    test("count valid passwords with old method", () => {
      expect(countValidPasswords({ input, matcher: oldJobPasses })).toBe(2);
    });

    test("count valid passwords with new method", () => {
      expect(countValidPasswords({ input, matcher: newJobPasses })).toBe(1);
    });

    // test("count valid passwords with new method", () => {
    //   expect(countValidPasswords({ input, matcher: oldJobPasses })).toBe(2);
    // });
  });
});
