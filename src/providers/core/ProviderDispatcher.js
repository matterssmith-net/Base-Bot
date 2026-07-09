export class ProviderDispatcher {
  constructor() {
    this.listeners = new Map();
  }

  on(event, listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }

    this.listeners.get(event).add(listener);

    return this;
  }

  once(event, listener) {
    const wrapper = async (payload) => {
      this.off(event, wrapper);
      await listener(payload);
    };

    return this.on(event, wrapper);
  }

  off(event, listener) {
    const listeners = this.listeners.get(event);

    if (!listeners) {
      return this;
    }

    listeners.delete(listener);

    if (listeners.size === 0) {
      this.listeners.delete(event);
    }

    return this;
  }

  async dispatch(event, payload) {
    const listeners = this.listeners.get(event);

    if (!listeners || listeners.size === 0) {
      return;
    }

    for (const listener of listeners) {
      await listener(payload);
    }
  }

  has(event) {
    return this.listeners.has(event);
  }

  clear(event) {
    if (event) {
      this.listeners.delete(event);
      return;
    }

    this.listeners.clear();
  }

  listenerCount(event) {
    return this.listeners.get(event)?.size ?? 0;
  }

  events() {
    return [...this.listeners.keys()];
  }
}