import input from "./input";
import { threeSum, twoSum } from "./solution";

console.log("Part 1: ", twoSum({ numbers: input, target: 2020 }));
console.log("Part 2: ", threeSum({ numbers: input, target: 2020 }));
