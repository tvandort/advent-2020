const expenseReport = (report: number[]) => {
  const set: { [key: number]: number } = {};
  for (let number of report) {
    const key = 2020 - number;

    set[key] = number;
  }

  for (let number of report) {
    const value = set[number];
    if (value) {
      return value * number;
    }
  }

  return 0;
};

export { expenseReport };
