// Italian

export const it = {
  system: {
    started: "Sistema avviato",
    ready: "Sistema pronto",

    bootstrap: {
      start: "Bootstrap avviato",
      ready: "Bootstrap completato"
    },

    services: {
      init: "Inizializzazione dei servizi...",
      ready: "Servizi pronti"
    },
    
    runtime: {
      locale: {
        current: "Lingua. Stato attuale",
        prompt: "Inserisci un'opzione (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) oppure premi ENTER.",
      },

      mode: {
        current: "Modalità. Stato attuale",
        prompt: "Inserisci un'opzione (dev) oppure premi ENTER.",
      },

      debug: {
        current: "Debug. Stato attuale",
        prompt: "Inserisci un'opzione (true, false) oppure premi ENTER.",
      },

      provider: {
        current: "Provider. Stato attuale",
        prompt: "Inserisci un'opzione (baileys) oppure premi ENTER.",
      },

      changed: "Modificato in {ops}.",
      invalid: "L'opzione '{ops}' non è disponibile.",
      timeout: "Attesa di {seconds} secondi...",
      timeoutReached: "Tempo scaduto. Verrà utilizzata l'opzione corrente.",
      emptyInput: "Verrà utilizzata l'opzione corrente."
    },

    clean: {
      start: "Pulizia del progetto...",
      done: "Pulizia completata"
    }
  },

  errors: {
    notFound: "Non trovato",
    invalid: "Richiesta non valida",
    configNotFound: "Configurazione non trovata",
    serviceNotFound: "Servizio non trovato: {name}"
  },

  bot: {
    welcome: "Benvenuto",
    goodbye: "Sessione terminata"
  }
};