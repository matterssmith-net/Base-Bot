import { ProviderManager } from "../providers/manager/index.js";
import { registerDefaultProviders } from "../providers/index.js";
import { bootstrap } from "../core/bootstrap/index.js";
import { Container } from "../core/container/index.js";
import { Config } from "../core/config/index.js";
import { Logger } from "../core/logger/index.js";
import { Services } from "../core/services/index.js";
import { Language } from "../languages/index.js";
import { getRuntimeState, updateRuntimeState } from "../core/runtime/index.js";
import { promptLocale } from "../cli/prompt.js";
import { runWatchdog } from "../../scripts/watchdog.js";

export async function startCLI() {
  const container = new Container();

  // 1. cargar runtime completo
  const runtime = getRuntimeState();

  // 2. permitir cambio interactivo
  await promptLocale(runtime);

  // 3. persistir cambios
  updateRuntimeState(runtime);

  // 4. usar locale final
  const locale = runtime.locale;

  // core registrations
  container.register("config", () => new Config());
  container.register("lang", () => new Language(locale));
  container.register("logger", (c) => new Logger(c.get("config"), c.get("lang")));
  container.register("services", (c) => new Services(c));

  container.register("provider", () => {
    const manager = new ProviderManager();
    registerDefaultProviders(manager);
    return manager;
  });

  await container.get("lang").init();
  
  const logger = container.get("logger");
  const lang = container.get("lang");

  logger.info(lang.t("system.started"));

  await bootstrap(container);

  const services = container.get("services");
  await services.initialize();

  const provider = container.get("provider");
  await provider.initialize(runtime.provider);
  await provider.connect();

  logger.info(lang.t("system.ready"));
  
  console.log("");
  console.log("========================================");
  console.log("            Base-Bot Baileys");
  console.log("========================================");
  console.log("");

  // console.log("");
  // console.log("========================================");
  // console.log("               Base-Bot");
  // console.log("========================================");
  // console.log("");
}

await runWatchdog();

startCLI().catch((err) => {
  console.error("Error:", err);
});