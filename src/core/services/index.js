export class Services {
  constructor(container) {
    this.container = container;
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;

    const logger = this.container.get("logger");
    const lang = this.container.get("lang");
    logger.info(lang.t("system.services.init"));

    // aquí se conectan servicios futuros
    // this.container.get("database")
    // this.container.get("cache")
    // this.container.get("whatsapp")

    this.initialized = true;

    logger.info(lang.t("system.services.ready"));
  }
}