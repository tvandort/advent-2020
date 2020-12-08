import { program } from "commander";

program.option(
  "-d, --day <number>",
  "Prints the solution for a given day.",
  (number) => parseInt(number)
);

program.parse(process.argv);

if (program.day !== undefined && isNaN(program.day)) {
  console.log("--day parameter must be a number.");
}

if (program.day !== undefined) {
  require(`./day-${program.day}`);
}
