import { ProviderEvents } from "../../core/index.js";

export async function handleMessagesUpsert(provider, event) {
  const { messages = [], type } = event;

  if (!messages.length) {
    return;
  }

  for (const message of messages) {
    const ctx = createMessageContext(provider, message, type);

    if (!ctx) {
      continue;
    }

    await provider.dispatcher.dispatch(
      ProviderEvents.MESSAGE_CREATE,
      ctx
    );
  }
}

function createMessageContext(provider, message, type) {
  if (!message?.key) {
    return null;
  }

  return {
    id: message.key.id,

    chat: message.key.remoteJid,

    sender:
      message.key.participant ??
      message.key.remoteJid,

    fromMe: message.key.fromMe,

    type,

    body: getMessageBody(message),

    timestamp: Number(
      message.messageTimestamp ?? Date.now()
    ),

    pushName: message.pushName ?? null,

    message,

    provider
  };
}

function getMessageBody(message) {
  const msg = message.message ?? {};

  return (
    msg.conversation ??
    msg.extendedTextMessage?.text ??
    msg.imageMessage?.caption ??
    msg.videoMessage?.caption ??
    msg.documentMessage?.caption ??
    msg.buttonsResponseMessage?.selectedButtonId ??
    msg.listResponseMessage?.singleSelectReply?.selectedRowId ??
    msg.templateButtonReplyMessage?.selectedId ??
    ""
  );
}