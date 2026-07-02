import { bootstrap } from "../core/bootstrap/index.js";
import { Container } from "../core/container/index.js";
import { Config } from "../core/config/index.js";
import { Logger } from "../core/logger/index.js";
import { Services } from "../core/services/index.js";
import { Language } from "../languages/index.js";
import { getRuntimeState } from "../core/runtime/index.js";

export async function startCLI() {
  const container = new Container();
  const { locale } = getRuntimeState();

  // core registrations
  container.register("config", () => new Config());
  container.register("lang", () => new Language(locale));
  container.register("logger", (c) => new Logger(c.get("config"), c.get("lang")));
  container.register("services", (c) => new Services(c));

  await container.get("lang").init();
  
  const logger = container.get("logger");
  const lang = container.get("lang");

  logger.info(lang.t("system.started"));

  await bootstrap(container);

  const services = container.get("services");
  await services.initialize();

  logger.info(lang.t("system.ready"));
}

startCLI().catch((err) => {
  console.error("Error:", err);
});