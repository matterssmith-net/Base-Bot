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
      current: "Aktualny język ",
      prompt: "Wpisz kod języka (br, cn, cz, de, en, es, fr, gr, \n" +
      "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) lub naciśnij ENTER ",
      timeout: "Oczekiwanie {seconds} sekund... ",
      timeoutReached: "Przekroczono czas używana jest aktualna wersja języka ",
      changed: "Język zmieniony na {locale} ",
      invalid: "Język '{locale}' jest niedostępny "
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