import { program } from "commander";

program.option(
  "-d, --day <number>",
  "Prints the solution for a given day.",
  (number) => parseInt(number)
);

program.parse(process.argv);

if (isNaN(program.day)) {
  console.log("--day parameter must be a number.");
}

if (program.day !== undefined) {
  require(`./day-${program.day}`);
}

if (program.args.length === 0) {
  console.log(program.help());
}
