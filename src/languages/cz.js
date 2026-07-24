// Czech

export const cz = {
  system: {
    started: "Systém spuštěn",
    ready: "Systém připraven",

    bootstrap: {
      start: "Bootstrap spuštěn",
      ready: "Bootstrap dokončen"
    },

    services: {
      init: "Inicializace služeb...",
      ready: "Služby připraveny"
    },


    runtime: {
      locale: {
        current: "Jazyk. Aktuální stav",
        prompt: "Zadejte možnost (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) nebo stiskněte ENTER.",
      },

      mode: {
        current: "Režim. Aktuální stav",
        prompt: "Zadejte možnost (dev) nebo stiskněte ENTER.",
      },

      debug: {
        current: "Ladění. Aktuální stav",
        prompt: "Zadejte možnost (true, false) nebo stiskněte ENTER.",
      },

      provider: {
        current: "Poskytovatel. Aktuální stav",
        prompt: "Zadejte možnost (baileys) nebo stiskněte ENTER.",
      },

      changed: "Změněno na {ops}.",
      invalid: "Možnost '{ops}' není k dispozici.",
      timeout: "Čekání {seconds} sekund...",
      timeoutReached: "Čas vypršel. Bude použita aktuální možnost.",
      emptyInput: "Bude použita aktuální možnost."
    },

    clean: {
      start: "Čištění projektu...",
      done: "Čištění dokončeno"
    }
  },

  errors: {
    notFound: "Nenalezeno",
    invalid: "Neplatný požadavek",
    configNotFound: "Konfigurace nebyla nalezena",
    serviceNotFound: "Služba nebyla nalezena: {name}"
  },

  bot: {
    welcome: "Vítejte",
    goodbye: "Relace ukončena"
  }
};