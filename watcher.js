const TscWatchClient = require("tsc-watch/client");
const { spawn } = require("child_process");

const watch = new TscWatchClient();

watch.on("success", () => {
  const tester = spawn("yarn", ["test"], {
    cwd: process.cwd(),
    stdio: "inherit",
  });
  tester.on("exit", () => {
    watch.kill();
  });
});

watch.start();
