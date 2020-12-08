import input from "./input";

import { countValidPasswords, newJobPasses, oldJobPasses } from "./solution";

console.log("Part 1: ", countValidPasswords({ input, matcher: oldJobPasses }));
console.log("Part 2: ", countValidPasswords({ input, matcher: newJobPasses }));
