import { threeSum, twoSum } from "./solution";

describe("day 1", () => {
  test("two sum output 514579", () => {
    const expectedAnswer = 514579;
    const exampleInput = [1721, 979, 366, 299, 675, 1456];

    expect(twoSum({ numbers: exampleInput, target: 2020 })).toEqual(
      expectedAnswer
    );
  });

  test("thee sum output 241861950", () => {
    const expectedAnswer = 241861950;
    const exampleInput = [1721, 979, 366, 299, 675, 1456];

    expect(threeSum({ numbers: exampleInput, target: 2020 })).toEqual(
      expectedAnswer
    );
  });
});
