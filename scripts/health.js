import { getRuntimeState } from "../src/core/runtime/index.js";
import { Language } from "../src/languages/index.js";
import { Config } from "../src/core/config/index.js";
import { Container } from "../src/core/container/index.js";


console.log("\n========================================"); 
console.log("            [HEALTH CHECK]");
console.log("========================================\n"); 

const status = {
  core: {},
  lang: {},
  config: {},
  container: {},
  overall: "UNKNOWN"
};

// -------------------- RUNTIME --------------------
try {
  const runtime = getRuntimeState();

  status.core.runtime = true;

  console.log("[CORE]");
  console.log("  [OK] runtime.state.json");
} catch {
  status.core.runtime = false;
  console.log("[CORE]");
  console.log("  [FAIL] runtime.state.json");
}

// -------------------- LANGUAGE --------------------
try {
  const lang = new Language("en");
  await lang.init();

  const test = lang.t("system.started");

  status.lang.loaded = !!test;

  console.log("\n[LANG]");
  console.log("  [OK] language system");

  if (test === "system.started") {
    console.log("  [WARN] missing translations detected");
  }
} catch {
  status.lang.loaded = false;

  console.log("\n[LANG]");
  console.log("  [FAIL] language system");
}

// -------------------- CONFIG --------------------
try {
  const config = new Config();

  status.config.loaded = !!config;

  console.log("\n[CONFIG]");
  console.log("  [OK] config system");
} catch {
  status.config.loaded = false;

  console.log("\n[CONFIG]");
  console.log("  [FAIL] config system");
}

// -------------------- CONTAINER --------------------
try {
  const container = new Container();

  container.register("test", () => "ok");

  const value = container.get("test");

  if (value === "ok") {
    status.container.ok = true;

    console.log("\n[CONTAINER]");
    console.log("  [OK] dependency injection");
  } else {
    throw new Error();
  }
} catch {
  status.container.ok = false;

  console.log("\n[CONTAINER]");
  console.log("  [FAIL] dependency injection");
}

// -------------------- SUMMARY --------------------
const allGood =
  status.core.runtime &&
  status.lang.loaded &&
  status.config.loaded &&
  status.container.ok;

status.overall = allGood ? "✅ HEALTHY" : "❌ DEGRADED";

console.log("\n========================================");
console.log("            [SUMMARY]");
console.log("           " + status.overall);
console.log("========================================\n");

console.log(
  allGood
    ? "✅ SYSTEM HEALTHY"
    : "❌ SYSTEM DEGRADED"
);