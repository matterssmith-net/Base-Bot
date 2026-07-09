export class ProviderRegistry {
  constructor() {
    this.providers = new Map();
  }

  register(name, provider) {
    if (this.providers.has(name)) {
      throw new Error(`Provider "${name}" is already registered.`);
    }

    this.providers.set(name, provider);
  }

  unregister(name) {
    this.providers.delete(name);
  }

  get(name) {
    if (!this.providers.has(name)) {
      throw new Error(`Provider "${name}" is not registered.`);
    }

    return this.providers.get(name);
  }

  has(name) {
    return this.providers.has(name);
  }

  list() {
    return [...this.providers.keys()];
  }

  clear() {
    this.providers.clear();
  }
}