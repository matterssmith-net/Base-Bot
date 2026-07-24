// Polish

export const pl = {
  system: {
    started: "System uruchomiony",
    ready: "System gotowy",

    bootstrap: {
      start: "Bootstrap uruchomiony",
      ready: "Bootstrap zakończony"
    },

    services: {
      init: "Inicjalizacja usług...",
      ready: "Usługi gotowe"
    },

    runtime: {
      locale: {
        current: "Język. Aktualny stan",
        prompt: "Wpisz opcję (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) lub naciśnij ENTER.",
      },

      mode: {
        current: "Tryb. Aktualny stan",
        prompt: "Wpisz opcję (dev) lub naciśnij ENTER.",
      },

      debug: {
        current: "Debugowanie. Aktualny stan",
        prompt: "Wpisz opcję (true, false) lub naciśnij ENTER.",
      },

      provider: {
        current: "Dostawca. Aktualny stan",
        prompt: "Wpisz opcję (baileys) lub naciśnij ENTER.",
      },

      changed: "Zmieniono na {ops}.",
      invalid: "Opcja '{ops}' jest niedostępna.",
      timeout: "Oczekiwanie {seconds} sekund...",
      timeoutReached: "Przekroczono czas. Zostanie użyta aktualna opcja.",
      emptyInput: "Zostanie użyta aktualna opcja."
    },

    clean: {
      start: "Czyszczenie projektu...",
      done: "Czyszczenie zakończone"
    }
  },

  errors: {
    notFound: "Nie znaleziono",
    invalid: "Nieprawidłowe żądanie",
    configNotFound: "Nie znaleziono konfiguracji",
    serviceNotFound: "Nie znaleziono usługi: {name}"
  },

  bot: {
    welcome: "Witamy",
    goodbye: "Sesja zakończona"
  }
};