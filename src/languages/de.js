// German

export const de = {
  system: {
    started: "System gestartet",
    ready: "System bereit",

    bootstrap: {
      start: "Bootstrap gestartet",
      ready: "Bootstrap abgeschlossen"
    },

    services: {
      init: "Dienste werden initialisiert...",
      ready: "Dienste bereit"
    },

    runtime: {
      locale: {
        current: "Sprache. Aktueller Status",
        prompt: "Geben Sie eine Option ein (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) oder drücken Sie ENTER.",
      },

      mode: {
        current: "Modus. Aktueller Status",
        prompt: "Geben Sie eine Option (dev) ein oder drücken Sie ENTER.",
      },

      debug: {
        current: "Debug. Aktueller Status",
        prompt: "Geben Sie eine Option (true, false) ein oder drücken Sie ENTER.",
      },

      provider: {
        current: "Provider. Aktueller Status",
        prompt: "Geben Sie eine Option (baileys) ein oder drücken Sie ENTER.",
      },

      changed: "Geändert zu {ops}.",
      invalid: "Die Option '{ops}' ist nicht verfügbar.",
      timeout: "Warte {seconds} Sekunden...",
      timeoutReached: "Zeit abgelaufen. Die aktuelle Option wird verwendet.",
      emptyInput: "Die aktuelle Option wird verwendet."
    },

    clean: {
      start: "Projekt wird bereinigt...",
      done: "Bereinigung abgeschlossen"
    }
  },

  errors: {
    notFound: "Nicht gefunden",
    invalid: "Ungültige Anfrage",
    configNotFound: "Konfiguration nicht gefunden",
    serviceNotFound: "Dienst nicht gefunden: {name}"
  },

  bot: {
    welcome: "Willkommen",
    goodbye: "Sitzung beendet"
  }
};