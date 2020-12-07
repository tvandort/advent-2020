const twoSum = ({ numbers, target }: { numbers: number[]; target: number }) => {
  const set: { [key: number]: number } = {};
  for (let number of numbers) {
    const key = target - number;

    set[key] = number;
  }

  for (let number of numbers) {
    const value = set[number];
    if (value) {
      return value * number;
    }
  }

  return undefined;
};

const threeSum = ({
  numbers,
  target,
}: {
  numbers: number[];
  target: number;
}) => {
  for (let outer = 0; outer < numbers.length; outer++) {
    const outerNumber = numbers[outer];
    const partialSum = target - outerNumber;

    const set: { [key: number]: number } = {};
    for (let inner = outer + 1; inner < numbers.length; inner++) {
      const innerNumber = numbers[inner];
      const key = partialSum - innerNumber;
      if (set[key] !== undefined) {
        return outerNumber * innerNumber * key;
      }
      set[innerNumber] = key;
    }
  }

  return undefined;
};

export { twoSum, threeSum };
