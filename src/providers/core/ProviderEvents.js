export const ProviderEvents = Object.freeze({
  // Provider
  READY: "provider.ready",
  CONNECT: "provider.connect",
  DISCONNECT: "provider.disconnect",
  ERROR: "provider.error",

  // Messages
  MESSAGE_CREATE: "message.create",
  MESSAGE_UPDATE: "message.update",
  MESSAGE_DELETE: "message.delete",

  // Chats
  CHAT_CREATE: "chat.create",
  CHAT_UPDATE: "chat.update",

  // Groups
  GROUP_CREATE: "group.create",
  GROUP_UPDATE: "group.update",
  GROUP_DELETE: "group.delete",

  // Contacts
  CONTACT_CREATE: "contact.create",
  CONTACT_UPDATE: "contact.update",

  // Presence
  PRESENCE_UPDATE: "presence.update",

  // Calls
  CALL_CREATE: "call.create",
  CALL_UPDATE: "call.update",

  // Auth
  AUTH_UPDATE: "auth.update",

  // QR
  QR_UPDATE: "qr.update",

  // Sync
  SYNC_START: "sync.start",
  SYNC_FINISH: "sync.finish"
});