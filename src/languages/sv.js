// Swedish

export const sv = {
  system: {
    started: "Systemet startat",
    ready: "Systemet klart",

    bootstrap: {
      start: "Bootstrap startat",
      ready: "Bootstrap klart"
    },

    services: {
      init: "Initierar tjänster...",
      ready: "Tjänster klara"
    },

    runtime: {
      locale: {
        current: "Språk. Aktuell status",
        prompt: "Skriv ett alternativ (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) eller tryck på ENTER.",
      },

      mode: {
        current: "Läge. Aktuell status",
        prompt: "Skriv ett alternativ (dev) eller tryck på ENTER.",
      },

      debug: {
        current: "Felsökning. Aktuell status",
        prompt: "Skriv ett alternativ (true, false) eller tryck på ENTER.",
      },

      provider: {
        current: "Leverantör. Aktuell status",
        prompt: "Skriv ett alternativ (baileys) eller tryck på ENTER.",
      },

      changed: "Ändrad till {ops}.",
      invalid: "Alternativet '{ops}' är inte tillgängligt.",
      timeout: "Väntar {seconds} sekunder...",
      timeoutReached: "Tiden gick ut. Det aktuella alternativet används.",
      emptyInput: "Det aktuella alternativet används."
    },

    clean: {
      start: "Rensar projekt...",
      done: "Rensning klar"
    }
  },

  errors: {
    notFound: "Hittades inte",
    invalid: "Ogiltig begäran",
    configNotFound: "Konfiguration hittades inte",
    serviceNotFound: "Tjänst hittades inte: {name}"
  },

  bot: {
    welcome: "Välkommen",
    goodbye: "Session avslutad"
  }
};