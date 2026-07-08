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
      current: "Langue actuelle ",
      prompt: "Entrez un code de langue (br, cn, cz, de, en, es, fr, gr, \n" +
      "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) ou appuyez sur ENTRÉE ",
      timeout: "Attente {seconds} secondes... ",
      timeoutReached: "Temps écoulé langue actuelle conservée ",
      changed: "Langue changée en {locale} ",
      invalid: "La langue '{locale}' n'est pas disponible "
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