import { BaseProvider, ProviderStatus, ProviderEvents } from "../core/index.js";
import { getAuthState } from "./auth.js";
import { createSocket } from "./socket.js";
import { registerEvents } from "./events.js";

export class BaileysProvider extends BaseProvider {
  constructor(context) {
    super("baileys", context);

    this.auth = null;
    this.socket = null;
  }

  async initialize() {
    this.setStatus(ProviderStatus.STARTING);

    this.auth = await getAuthState();

    await this.dispatcher.dispatch(
      ProviderEvents.CONNECT,
      {
        provider: this.name
      }
    );
  }

  async connect() {
    this.setStatus(
      ProviderStatus.CONNECTING
    );

    this.socket =
      await createSocket(
        this.auth
      );

    registerEvents(this);
  }

  async disconnect() {
    if (this.socket) {
      this.socket.end?.();

      this.socket = null;
    }

    this.setStatus(ProviderStatus.DISCONNECTED);

    await this.dispatcher.dispatch(
      ProviderEvents.DISCONNECT,
      {
        provider: this.name
      }
    );
  }

  async destroy() {

    await this.disconnect();


    this.auth = null;


    this.setStatus(ProviderStatus.STOPPED);

    await super.destroy();
  }

  async requestPairingCode(phoneNumber) {

    if (!this.socket) {
      throw new Error(
        "Socket not connected."
      );
    }


    if (!phoneNumber) {
      throw new Error(
        "Phone number is required."
      );
    }


    const code =
      await this.socket.requestPairingCode(
        phoneNumber
      );


    await this.dispatcher.dispatch(
      ProviderEvents.PAIRING_CODE,
      {
        code,
        provider: this.name
      }
    );


    return code;
  }

  getSocket() {
    return this.socket;
  }

  getAuth() {
    return this.auth;
  }
}