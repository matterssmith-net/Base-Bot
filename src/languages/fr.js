// French

export const fr = {
  system: {
    started: "Système démarré",
    ready: "Système prêt",

    bootstrap: {
      start: "Bootstrap démarré",
      ready: "Bootstrap terminé"
    },

    services: {
      init: "Initialisation des services...",
      ready: "Services prêts"
    },


    runtime: {
      locale: {
        current: "Langue. État actuel",
        prompt: "Saisissez une option (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) ou appuyez sur ENTER.",
      },

      mode: {
        current: "Mode. État actuel",
        prompt: "Saisissez une option (dev) ou appuyez sur ENTER.",
      },

      debug: {
        current: "Débogage. État actuel",
        prompt: "Saisissez une option (true, false) ou appuyez sur ENTER.",
      },

      provider: {
        current: "Fournisseur. État actuel",
        prompt: "Saisissez une option (baileys) ou appuyez sur ENTER.",
      },

      changed: "Modifié en {ops}.",
      invalid: "L'option '{ops}' n'est pas disponible.",
      timeout: "Attente de {seconds} secondes...",
      timeoutReached: "Temps écoulé. L'option actuelle sera utilisée.",
      emptyInput: "L'option actuelle sera utilisée."
    },

    clean: {
      start: "Nettoyage du projet...",
      done: "Nettoyage terminé"
    }
  },

  errors: {
    notFound: "Introuvable",
    invalid: "Requête invalide",
    configNotFound: "Configuration introuvable",
    serviceNotFound: "Service introuvable : {name}"
  },

  bot: {
    welcome: "Bienvenue",
    goodbye: "Session terminée"
  }
};