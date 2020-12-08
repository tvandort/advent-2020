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

export { countValidPasswords, getRows, getRuleAndPassword, passes };
