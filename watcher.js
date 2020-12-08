const TscWatchClient = require("tsc-watch/client");
const { spawn } = require("child_process");

const watch = new TscWatchClient();

watch.on("success", () => {
  const tester = spawn("yarn", ["jest"], {
    cwd: process.cwd(),
    stdio: "inherit",
  });

  tester.on("exit", (status) => {
    if (status === 0) {
      console.log("\n\n========= DAY 2 SOLUTION =========\n\n");
      const forward = process.argv.slice(2);
      spawn("node", ["./build/index.js", ...forward], {
        cwd: process.cwd(),
        stdio: "inherit",
      });
    }
  });
});

watch.start();
