import { ProviderRegistry } from "../registry/index.js";

export class ProviderManager {
  constructor() {
    this.registry = new ProviderRegistry();
    this.provider = null;
  }

  register(name, provider) {
    this.registry.register(name, provider);
  }

  async initialize(name) {
    const Provider = this.registry.get(name);

    this.provider = new Provider();

    await this.provider.initialize?.();
  }

  async connect() {
    if (!this.provider) {
      throw new Error("No provider initialized.");
    }

    await this.provider.connect?.();
  }

  async disconnect() {
    if (!this.provider) {
      return;
    }

    await this.provider.disconnect?.();
  }

  async destroy() {
    if (!this.provider) {
      return;
    }

    await this.provider.destroy?.();

    this.provider = null;
  }

  getProvider() {
    return this.provider;
  }

  getStatus() {
    return this.provider?.getStatus() ?? null;
  }
}