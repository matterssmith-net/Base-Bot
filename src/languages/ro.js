// Romanian

export const ro = {
  system: {
    started: "Sistem pornit",
    ready: "Sistem pregătit",

    bootstrap: {
      start: "Bootstrap pornit",
      ready: "Bootstrap finalizat"
    },

    services: {
      init: "Se inițializează serviciile...",
      ready: "Servicii pregătite"
    },

    runtime: {
      locale: {
        current: "Limbă. Stare actuală",
        prompt: "Introduceți o opțiune (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) sau apăsați ENTER.",
      },

      mode: {
        current: "Mod. Stare actuală",
        prompt: "Introduceți o opțiune (dev) sau apăsați ENTER.",
      },

      debug: {
        current: "Depanare. Stare actuală",
        prompt: "Introduceți o opțiune (true, false) sau apăsați ENTER.",
      },

      provider: {
        current: "Furnizor. Stare actuală",
        prompt: "Introduceți o opțiune (baileys) sau apăsați ENTER.",
      },

      changed: "Schimbat la {ops}.",
      invalid: "Opțiunea '{ops}' nu este disponibilă.",
      timeout: "Se așteaptă {seconds} secunde...",
      timeoutReached: "Timp expirat. Va fi folosită opțiunea curentă.",
      emptyInput: "Va fi folosită opțiunea curentă."
    },

    clean: {
      start: "Se curăță proiectul...",
      done: "Curățarea finalizată"
    }
  },

  errors: {
    notFound: "Nu a fost găsit",
    invalid: "Cerere invalidă",
    configNotFound: "Configurația nu a fost găsită",
    serviceNotFound: "Serviciu negăsit: {name}"
  },

  bot: {
    welcome: "Bun venit",
    goodbye: "Sesiune încheiată"
  }
};