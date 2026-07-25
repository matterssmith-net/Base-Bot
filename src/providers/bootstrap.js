import { ProviderRegistry } from "./registry/index.js";
import { registerProviders } from "./register.js";

export function createProviderRegistry() {
  const registry = new ProviderRegistry();

  registerProviders(registry);

  return registry;
}