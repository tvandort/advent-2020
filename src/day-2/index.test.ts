const input = `
  1-3 a: abcde
  1-3 b: cdefg
  2-9 c: ccccccccc
`;

const splitToRows = (input: string) => input.split(/\n/);
const notEmpty = (input: string) => input.trim().length !== 0;
const trim = (input: string) => input.trim();
const getRows = (input: string) =>
  splitToRows(input).filter(notEmpty).map(trim);

const toInt = (number: string) => parseInt(number);

const getRuleAndPassword = (input: string) => {
  const [rulePart, passwordPart] = input.split(":");
  const password = passwordPart.trim();

  const [rangePart, letter] = rulePart.split(" ");
  const [lower, upper] = rangePart.split("-").map(toInt);

  return {
    rule: {
      lower,
      upper,
      letter,
    },
    password,
  };
};

interface Rule {
  lower: number;
  upper: number;
  letter: string;
}

const passes = ({
  password,
  rule,
}: {
  rule: Rule;
  password: string;
}): boolean => {
  const instancesOfLetter = password
    .split("")
    .filter((letter) => letter === rule.letter).length;

  return instancesOfLetter <= rule.upper && instancesOfLetter >= rule.lower;
};

const countValidPasswords = (input: string) =>
  getRows(input).map(getRuleAndPassword).map(passes).filter(Boolean).length;

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

    test("passing password", () => {
      expect(
        passes({ password: "abcde", rule: { lower: 1, upper: 3, letter: "a" } })
      ).toBe(true);
    });

    test("failing password", () => {
      expect(
        passes({ password: "cdefg", rule: { lower: 1, upper: 3, letter: "b" } })
      ).toBe(false);
    });

    test("count valid passwords", () => {
      expect(countValidPasswords(input)).toBe(2);
    });
  });
});
