import { ProviderContext } from "../context/index.js";

export class ProviderManager {
  constructor(registry, context = {}) {
    if (!registry) {
      throw new Error("ProviderRegistry is required.");
    }

    this.registry = registry;

    this.context = context instanceof ProviderContext ? context : new ProviderContext(context);

    this.provider = null;
  }

  async initialize(name) {
    const Provider =
      this.registry.get(name);

    this.provider = typeof Provider === "function" ? new Provider(this.context) : Provider;

    this.context.set(this.provider);

    if (this.provider.initialize) {
      await this.provider.initialize();
    }

    return this.provider;
  }

  async connect() {
    if (!this.provider) {
      throw new Error("No provider initialized.");
    }

    if (this.provider.connect) {
      await this.provider.connect();
    }
  }

  async disconnect() {
    if (!this.provider) {
      return;
    }

    if (this.provider.disconnect) {
      await this.provider.disconnect();
    }
  }

  async destroy() {
    if (!this.provider) {
      return;
    }

    if (this.provider.destroy) {
      await this.provider.destroy();
    }

    this.context.clear();

    this.provider = null;
  }

  getProvider() {
    return this.provider;
  }

  getStatus() {
    return (this.provider?.getStatus?.() ?? null);
  }

  isReady() {
    return (
      this.getStatus() === "connected"
    );
  }
}