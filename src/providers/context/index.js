export class ProviderContext {
  constructor(options = {}) {

    this.provider = null;

    this.container = options.container ?? null;

    this.logger = options.logger ?? null;

    this.config = options.config ?? null;

    this.runtime = options.runtime ?? null;

    this.services = options.services ?? null;
  }

  set(provider) {
    this.provider = provider;
  }

  get() {
    return this.provider;
  }

  getSocket() {
    return (
      this.provider?.getSocket?.() ??
      null
    );
  }

  getAuth() {
    return (
      this.provider?.getAuth?.() ??
      null
    );
  }

  getStatus() {
    return (
      this.provider?.getStatus?.() ??
      null
    );
  }

  getName() {
    return (
      this.provider?.name ??
      null
    );
  }

  getLogger() {
    return this.logger;
  }

  getConfig() {
    return this.config;
  }

  getRuntime() {
    return this.runtime;
  }

  getServices() {
    return this.services;
  }

  clear() {
    this.provider = null;
  }
}