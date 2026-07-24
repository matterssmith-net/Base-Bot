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
      locale: {
        current: "Nyelv. Aktuális állapot",
        prompt: "Adjon meg egy lehetőséget (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn), vagy nyomja meg az ENTER billentyűt.",
      },

      mode: {
        current: "Mód. Aktuális állapot",
        prompt: "Adjon meg egy lehetőséget (dev), vagy nyomja meg az ENTER billentyűt.",
      },

      debug: {
        current: "Hibakeresés. Aktuális állapot",
        prompt: "Adjon meg egy lehetőséget (true, false), vagy nyomja meg az ENTER billentyűt.",
      },

      provider: {
        current: "Szolgáltató. Aktuális állapot",
        prompt: "Adjon meg egy lehetőséget (baileys), vagy nyomja meg az ENTER billentyűt.",
      },

      changed: "Módosítva erre: {ops}.",
      invalid: "A(z) '{ops}' lehetőség nem érhető el.",
      timeout: "Várakozás {seconds} másodpercig...",
      timeoutReached: "Időtúllépés. Az aktuális lehetőség lesz használva.",
      emptyInput: "Az aktuális lehetőség lesz használva."
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