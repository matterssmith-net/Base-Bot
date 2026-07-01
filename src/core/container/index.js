export class Container {
  constructor() {
    this.services = new Map();
  }

  register(name, factory) {
    this.services.set(name, factory);
  }

  get(name) {
    const factory = this.services.get(name);
    
    if (!factory) {
      const lang = this.services.get("lang");
      throw new Error(lang.t("errors.serviceNotFound", { name }));
    }

    // lazy init
    if (typeof factory === "function") {
      const instance = factory(this);
      this.services.set(name, instance);
      return instance;
    }

    return factory;
  }
}