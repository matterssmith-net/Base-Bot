// English

export const en = {
  system: {
    started: "System started",
    ready: "System ready",

    auth: {
      title: "How would you like to link WhatsApp?",
      description: "Choose an authentication method.",
      optionPairing: "Pairing code",
      optionQR: "QR code",
      select: "Select an option:",
      invalidOption: "Invalid option.",
      enterPhone: "Enter phone number:",
      generatingCode: "Generating pairing code...",
      code: "Pairing code:",
      openBrowser: "Open the following address:",
      waiting: "Waiting for authentication...",
      success: "Authentication successful.",
      failed: "Authentication failed."
    },

    bootstrap: {
      start: "Bootstrap started",
      ready: "Bootstrap complete"
    },

    services: {
      init: "Initializing services...",
      ready: "Services ready"
    },

    runtime: {
      locale: {
        current: "Language. Current status",
        prompt: "Type an option (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) or press ENTER.",
      },

      mode: {
        current: "Mode. Current status",
        prompt: "Type an option (dev) or press ENTER.",
      },

      debug: {
        current: "Debug. Current status",
        prompt: "Type an option (true, false) or press ENTER.",
      },

      module: {
        current: "Module. Current status",
        prompt: "Type an option (bot) or press ENTER.",
      },

      bot: {
        platform: {
          current: "Platform. Current status",
          prompt: "Type an option (whatsapp) or press ENTER.",
        },

        language: {
          current: "Language. Current status",
          prompt: "Type an option (javascript) or press ENTER.",
        },

        provider: {
          current: "Provider. Current status",
          prompt: "Type an option (baileys) or press ENTER.",
        }
      },

      changed: "Changed to {ops}.",
      invalid: "Option '{ops}' is not available.",
      timeout: "Waiting {seconds} seconds...",
      timeoutReached: "Timeout reached. The current option will be used.",
      emptyInput: "The current option will be used."
    },

    clean: {
      start: "Cleaning project...",
      done: "Clean complete"
    }
  },

  errors: {
    notFound: "Not found",
    invalid: "Invalid request",
    configNotFound: "Config not found",
    serviceNotFound: "Service not found: {name}"
  },

  bot: {
    welcome: "Welcome",
    goodbye: "Session ended"
  }
};