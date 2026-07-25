import { ProviderEvents } from "../providers/core/index.js";

export class AuthManager {
  constructor() {
    this.qr = null;

    this.pairingCode = null;

    this.mode = "qr";

    this.listeners = new Map();
  }

  attach(provider) {
    provider.dispatcher.on(ProviderEvents.QR_UPDATE, ({ qr }) => {
        this.qr = qr;

        this.emit("qr", qr);
      }
    );

    provider.dispatcher.on(ProviderEvents.PAIRING_CODE, ({ code }) => {
        this.pairingCode = code;

        this.emit("pairing", code);
      }
    );
  }

  setMode(mode) {
    if ( mode !== "qr" && mode !== "pairing" ) {
      throw new Error("Invalid auth mode");
    }

    this.mode = mode;
  }

  getMode() {
    return this.mode;
  }

  getQR() {
    return this.qr;
  }

  getPairingCode() {
    return this.pairingCode;
  }

  on(event, callback) {
    this.listeners.set(event, callback);
  }

  emit(event, data) {
    const callback = this.listeners.get(event);

    callback?.(data);
  }
}