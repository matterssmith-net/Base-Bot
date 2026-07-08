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
      current: "Aktuellt språk ",
      prompt: "Ange språkkod (br, cn, cz, de, en, es, fr, gr, \n" +
      "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) eller tryck ENTER ",
      timeout: "Väntar {seconds} sekunder... ",
      timeoutReached: "Tiden har gått använder aktuellt språk ",
      changed: "Språk ändrat till {locale} ",
      invalid: "Språket '{locale}' är inte tillgängligt "
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