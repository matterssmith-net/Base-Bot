export class ProviderContext {
  constructor() {
    this.provider = null;
  }

  set(provider) {
    this.provider = provider;
  }

  get() {
    return this.provider;
  }

  getSocket() {
    return this.provider?.getSocket() ?? null;
  }

  getAuth() {
    return this.provider?.getAuth() ?? null;
  }

  getStatus() {
    return this.provider?.getStatus() ?? null;
  }

  getName() {
    return this.provider?.name ?? null;
  }

  clear() {
    this.provider = null;
  }
}