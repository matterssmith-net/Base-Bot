export async function bootstrap(container) {
  // 1. cargar config
  const config = container.get("config");

  // 2. iniciar logger
  const logger = container.get("logger");
  const lang = container.get("lang");
  logger.info(lang.t("system.bootstrap.start"));

  // 3. validar entorno
  if (!config) {
    throw new Error(lang.t("errors.configNotFound"));
  }

  // 4. preparar servicios base
  const services = container.get("services");
  await services.initialize?.();

  logger.info(lang.t("system.bootstrap.ready"));
}