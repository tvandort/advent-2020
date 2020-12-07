const TscWatchClient = require("tsc-watch/client");
const { spawn } = require("child_process");

const watch = new TscWatchClient();

watch.on("success", () => {
  spawn("yarn", ["jest"], {
    cwd: process.cwd(),
    stdio: "inherit",
  });
});

watch.start();
