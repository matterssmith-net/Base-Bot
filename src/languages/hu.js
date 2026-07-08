// Hungarian

export const hu = {
  system: {
    started: "Rendszer elindítva",
    ready: "Rendszer kész",

    bootstrap: {
      start: "Bootstrap elindult",
      ready: "Bootstrap befejeződött"
    },

    services: {
      init: "Szolgáltatások inicializálása...",
      ready: "Szolgáltatások készen állnak"
    },

    runtime: {
      current: "Aktuális nyelv ",
      prompt: "Írj be egy nyelvkódot (br, cn, cz, de, en, es, fr, gr, \n" +
      "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) vagy nyomj ENTER-t ",
      timeout: "{seconds} másodperc várakozás... ",
      timeoutReached: "Időtúllépés aktuális nyelv használata ",
      changed: "Nyelv módosítva erre: {locale} ",
      invalid: "A(z) '{locale}' nyelv nem elérhető "
    },

    clean: {
      start: "Projekt tisztítása...",
      done: "Tisztítás befejezve"
    }
  },

  errors: {
    notFound: "Nem található",
    invalid: "Érvénytelen kérés",
    configNotFound: "Konfiguráció nem található",
    serviceNotFound: "Szolgáltatás nem található: {name}"
  },

  bot: {
    welcome: "Üdvözlünk",
    goodbye: "Munkamenet befejezve"
  }
};