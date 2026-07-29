import { spawn } from "node:child_process";

while (true) {
  await new Promise((resolve) => {
    const child = spawn(process.execPath, ["./install-javascript.js"], {
      stdio: "inherit",
    });

    child.on("exit", () => resolve());
  });
}