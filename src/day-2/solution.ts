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

interface Password {
  rule: Rule;
  password: string;
}

const oldJobPasses = ({ password, rule }: Password): boolean => {
  const instancesOfLetter = password
    .split("")
    .filter((letter) => letter === rule.letter).length;

  return instancesOfLetter <= rule.upper && instancesOfLetter >= rule.lower;
};

const newJobPasses = ({
  password,
  rule: { lower, upper, letter },
}: Password): boolean => {
  const firstPresent = password[lower - 1] === letter;
  const lastPresent = password[upper - 1] === letter;
  return (firstPresent || lastPresent) && !(firstPresent && lastPresent);
};

const countValidPasswords = ({
  input,
  matcher,
}: {
  input: string;
  matcher: (password: Password) => boolean;
}) =>
  getRows(input).map(getRuleAndPassword).map(matcher).filter(Boolean).length;

export {
  countValidPasswords,
  getRows,
  getRuleAndPassword,
  oldJobPasses,
  newJobPasses,
};
