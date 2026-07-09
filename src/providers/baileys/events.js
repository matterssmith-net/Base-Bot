import { handleConnectionUpdate } from "./handlers/connection.js";
import { handleMessagesUpsert } from "./handlers/messages.js";

export function registerEvents(provider) {
  if (!provider?.socket) {
    throw new Error(
      "Baileys socket no inicializado"
    );
  }

  const { socket, auth } = provider;

  // Credenciales
  if (auth?.saveCreds) {
    socket.ev.on(
      "creds.update",
      auth.saveCreds
    );
  }

  // Conexión
  socket.ev.on(
    "connection.update",
    (update) =>
      handleConnectionUpdate(provider, update)
  );

  // Mensajes nuevos
  socket.ev.on(
    "messages.upsert",
    (event) =>
      handleMessagesUpsert(provider, event)
  );
}