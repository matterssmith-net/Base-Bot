import { rmSync } from "fs";
import { getRuntimeState } from "../src/core/runtime/index.js";
import { Language } from "../src/languages/index.js";

const { locale } = getRuntimeState();

const lang = new Language(locale);
await lang.init();

console.log(lang.t("system.clean.start"));

rmSync("../node_modules", { recursive: true, force: true });
rmSync("../package-lock.json", { force: true });

console.log(lang.t("system.clean.done"));