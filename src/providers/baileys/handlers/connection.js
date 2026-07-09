import { DisconnectReason } from "baileys";
import { ProviderEvents, ProviderStatus } from "../../core/index.js";

export async function handleConnectionUpdate(provider, update) {
  if (!provider) {
    throw new Error(
      "Provider no disponible en connection handler"
    );
  }

  const {
    connection,
    lastDisconnect,
    qr
  } = update;


  if (connection === "connecting") {
    provider.setStatus(
      ProviderStatus.CONNECTING
    );

    console.log(
      "[BAILEYS] Connecting to WhatsApp..."
    );
  }


  if (qr) {
    console.log(
      "[BAILEYS] QR generated. Scan required."
    );

    await provider.dispatcher.dispatch(
      ProviderEvents.QR_UPDATE,
      {
        qr,
        provider: provider.name
      }
    );
  }


  if (connection === "open") {
    provider.setStatus(
      ProviderStatus.CONNECTED
    );

    console.log(
      "[BAILEYS] WhatsApp connected."
    );

    await provider.dispatcher.dispatch(
      ProviderEvents.READY,
      {
        provider: provider.name
      }
    );

    return;
  }


  if (connection === "close") {
    provider.setStatus(
      ProviderStatus.DISCONNECTED
    );

    const statusCode =
      lastDisconnect
        ?.error
        ?.output
        ?.statusCode;


    const reason =
      DisconnectReason[statusCode] ??
      statusCode ??
      "unknown";


    console.log(
      "[BAILEYS] Connection closed:",
      reason
    );


    await provider.dispatcher.dispatch(
      ProviderEvents.DISCONNECT,
      {
        provider: provider.name,
        reason,
        statusCode
      }
    );
  }
}