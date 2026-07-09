import {
  BaseProvider,
  ProviderStatus,
  ProviderEvents
} from "../core/index.js";

import { getAuthState } from "./auth.js";
import { createSocket } from "./socket.js";
import { registerEvents } from "./events.js";

export class BaileysProvider extends BaseProvider {
  constructor() {
    super("baileys");

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

    this.socket = await createSocket(this.auth);

    registerEvents(this);

    this.setStatus(ProviderStatus.CONNECTED);

    await this.dispatcher.dispatch(
      ProviderEvents.READY,
      {
        provider: this.name
      }
    );
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
  }

  getSocket() {
    return this.socket;
  }

  getAuth() {
    return this.auth;
  }
}