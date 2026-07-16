import { getRuntimeState } from "../src/core/runtime/index.js";
import { Language } from "../src/languages/index.js";
import { Config } from "../src/core/config/index.js";
import { Container } from "../src/core/container/index.js";
import { EXIT_FAILURE } from "../src/core/constants.js";

export async function runWatchdog() {
  console.log("");
  console.log("____________________________________________________________");
  console.log("");
  console.log("▒█░░▒█ ░█▀▀█ ▀▀█▀▀ ▒█▀▀█ ▒█░▒█ ▒█▀▀▄ ▒█▀▀▀█ ▒█▀▀█");
  console.log("▒█▒█▒█ ▒█▄▄█ ░▒█░░ ▒█░░░ ▒█▀▀█ ▒█░▒█ ▒█░░▒█ ▒█░▄▄");
  console.log("▒█▄▀▄█ ▒█░▒█ ░▒█░░ ▒█▄▄█ ▒█░▒█ ▒█▄▄▀ ▒█▄▄▄█ ▒█▄▄█");
  console.log("");

  const criticalErrors = [];

  // ---------------- CORE ----------------
  try {
    getRuntimeState();
    console.log("      [CORE] OK runtime.state.json");
  } catch {
    console.log("      [CORE] FAIL runtime.state.json");
    criticalErrors.push("runtime");
  }

  // ---------------- LANGUAGE ----------------
  try {
    const lang = new Language("runtime.locale");
    await lang.init();

    const ok = lang.t("system.started");

    if (!ok) throw new Error();

    console.log("      [LANG] OK i18n");
  } catch {
    console.log("      [LANG] FAIL i18n");
    criticalErrors.push("lang");
  }

  // ---------------- CONFIG (NO CRITICAL) ----------------
  try {
    new Config();
    console.log("      [CONFIG] OK");
  } catch {
    console.log("      [CONFIG] WARN config");
  }

  // ---------------- CONTAINER ----------------
  try {
    const container = new Container();
    container.register("test", () => "ok");

    if (container.get("test") !== "ok") throw new Error();

    console.log("      [CONTAINER] OK DI");
  } catch {
    console.log("      [CONTAINER] FAIL DI");
    criticalErrors.push("container");
  }

  // ---------------- DECISION ----------------
  console.log("");

  if (criticalErrors.length > 0) {
    console.log("      [DECISION] SYSTEM BLOCKED");
    console.log("      [DECISION] Critical failures:", criticalErrors);

    process.exit(EXIT_FAILURE);
  }

  console.log("      [DECISION] SYSTEM ALLOWED TO START");
}