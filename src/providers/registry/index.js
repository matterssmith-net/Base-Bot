export class ProviderRegistry {
  constructor() {
    this.providers = new Map();
  }

  register(name, provider) {
    if (!name) {
      throw new Error("Provider name is required.");
    }

    if (!provider) {
      throw new Error(`Provider "${name}" is invalid.`);
    }

    if (this.providers.has(name)) {
      throw new Error(`Provider "${name}" is already registered.`);
    }

    this.providers.set(
      name,
      provider
    );

    return this;
  }

  unregister(name) {
    return this.providers.delete(name);
  }

  get(name) {
    const provider =
      this.providers.get(name);

    if (!provider) {
      throw new Error(`Provider "${name}" is not registered.`);
    }

    return provider;
  }

  has(name) {
    return this.providers.has(name);
  }

  list() {
    return [
      ...this.providers.keys()
    ];
  }

  clear() {
    this.providers.clear();
  }
}