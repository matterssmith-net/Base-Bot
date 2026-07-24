// Dutch

export const nl = {
  system: {
    started: "Systeem gestart",
    ready: "Systeem gereed",

    bootstrap: {
      start: "Bootstrap gestart",
      ready: "Bootstrap voltooid"
    },

    services: {
      init: "Services worden geïnitialiseerd...",
      ready: "Services gereed"
    },

    runtime: {
      locale: {
        current: "Taal. Huidige status",
        prompt: "Voer een optie in (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) of druk op ENTER.",
      },

      mode: {
        current: "Modus. Huidige status",
        prompt: "Voer een optie (dev) in of druk op ENTER.",
      },

      debug: {
        current: "Debug. Huidige status",
        prompt: "Voer een optie (true, false) in of druk op ENTER.",
      },

      provider: {
        current: "Provider. Huidige status",
        prompt: "Voer een optie (baileys) in of druk op ENTER.",
      },

      changed: "Gewijzigd naar {ops}.",
      invalid: "Optie '{ops}' is niet beschikbaar.",
      timeout: "{seconds} seconden wachten...",
      timeoutReached: "Time-out. De huidige optie wordt gebruikt.",
      emptyInput: "De huidige optie wordt gebruikt."
    },

    clean: {
      start: "Project wordt opgeschoond...",
      done: "Opschoning voltooid"
    }
  },

  errors: {
    notFound: "Niet gevonden",
    invalid: "Ongeldig verzoek",
    configNotFound: "Configuratie niet gevonden",
    serviceNotFound: "Service niet gevonden: {name}"
  },

  bot: {
    welcome: "Welkom",
    goodbye: "Sessie beëindigd"
  }
};