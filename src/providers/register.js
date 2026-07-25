import { ProviderRegistry } from "./registry/index.js";
import { BaileysProvider } from "./baileys/index.js";


export function registerProviders(registry) {

  registry.register("baileys", BaileysProvider);

  // Próximamente...
  // registry.register("official", OfficialProvider);
  // registry.register("whiskeysockets", WhiskeySocketsProvider);
  // registry.register("experimental", ExperimentalProvider);
  // registry.register("custom", CustomProvider);

  return registry;
}