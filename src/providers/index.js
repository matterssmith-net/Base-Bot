import { BaileysProvider } from "./baileys/index.js";

export function registerDefaultProviders(manager) {
  manager.register("baileys", BaileysProvider);

  // Próximamente...
  // manager.register("official", OfficialProvider);
  // manager.register("whiskeysockets", WhiskeySocketsProvider);
  // manager.register("experimental", ExperimentalProvider);
  // manager.register("custom", CustomProvider);
}