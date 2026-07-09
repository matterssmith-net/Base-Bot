import { Language } from "../languages/index.js";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

const TIMEOUT = 30_000;

export async function promptLocale(runtime) {
  const lang = new Language(runtime.locale);
  await lang.init();

  console.log("");
  console.log("========================================");
  console.log("            Base-Bot Runtime");
  console.log("========================================");  
  console.log("");
  console.log(`${lang.t("system.runtime.current")}: ${runtime.locale}`);
  console.log("");
  console.log(lang.t("system.runtime.prompt"));
  console.log(lang.t("system.runtime.timeout", { seconds: TIMEOUT / 1000 }));
  console.log("");

  const rl = createInterface({
    input: stdin,
    output: stdout
  });

  let answer = null;

  try {
    answer = await rl.question("> ", {
      signal: AbortSignal.timeout(TIMEOUT)
    });
  } catch (err) {
    if (err.name === "AbortError" || err.name === "TimeoutError") {
      console.log(lang.t("system.runtime.timeoutReached"));
      console.log("");
    } else {
      throw err;
    }
  } finally {
    rl.close();
  }

  if (typeof answer !== "string") {
    return;
  }

  const locale = answer.trim().toLowerCase();

  if (!locale) {
    console.log("");
    console.log("========================================");
    console.log("            Base-Bot Info");
    console.log("========================================");
    console.log("");

    return;
  }

  try {
    const test = new Language(locale);
    await test.init();

    if (!test.dict?.[locale]) {
      throw new Error();
    }

    runtime.locale = locale;

    console.log("");
    console.log(test.t("system.runtime.changed", {
      locale
    }));
  } catch {
    console.log("");
    console.log(lang.t("system.runtime.invalid", {
      locale
    }));
  }
  
  console.log("");
  console.log("========================================");
  console.log("            Base-Bot Info");
  console.log("========================================");
  console.log("");
}