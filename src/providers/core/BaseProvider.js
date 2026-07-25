import { ProviderDispatcher } from "./ProviderDispatcher.js";
import { ProviderStatus } from "./ProviderStatus.js";

export class BaseProvider {
  constructor(name, context = null) {
    this.name = name;

    this.context = context;

    this.status = ProviderStatus.STOPPED;

    this.dispatcher = new ProviderDispatcher();
  }

  setStatus(status) {
    this.status = status;
  }

  getStatus() {
    return this.status;
  }

  getName() {
    return this.name;
  }

  getContext() {
    return this.context;
  }

  async initialize() {
    throw new Error("initialize() must be implemented");
  }

  async connect() {
    throw new Error("connect() must be implemented");
  }

  async disconnect() {
    throw new Error("disconnect() must be implemented");
  }

  async destroy() {
    this.dispatcher.clear();

    this.context?.clear?.();

    this.status = ProviderStatus.STOPPED;
  }
}