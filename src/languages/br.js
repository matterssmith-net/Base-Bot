// Brazilian Portuguese

export const br = {
  system: {
    started: "Sistema iniciado",
    ready: "Sistema pronto",

    bootstrap: {
      start: "Bootstrap iniciado",
      ready: "Bootstrap concluído"
    },

    services: {
      init: "Inicializando serviços...",
      ready: "Serviços prontos"
    },

    
    runtime: {
      locale: {
        current: "Idioma. Estado atual",
        prompt: "Digite uma opção (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) ou pressione ENTER.",
      },

      mode: {
        current: "Modo. Estado atual",
        prompt: "Digite uma opção (dev) ou pressione ENTER.",
      },

      debug: {
        current: "Depuração. Estado atual",
        prompt: "Digite uma opção (true, false) ou pressione ENTER.",
      },

      provider: {
        current: "Provedor. Estado atual",
        prompt: "Digite uma opção (baileys) ou pressione ENTER.",
      },

      changed: "Alterado para {ops}.",
      invalid: "A opção '{ops}' não está disponível.",
      timeout: "Aguardando {seconds} segundos...",
      timeoutReached: "Tempo esgotado. A opção atual será utilizada.",
      emptyInput: "A opção atual será usada."
    },

    clean: {
      start: "Limpando o projeto...",
      done: "Limpeza concluída"
    }
  },

  errors: {
    notFound: "Não encontrado",
    invalid: "Solicitação inválida",
    configNotFound: "Configuração não encontrada",
    serviceNotFound: "Serviço não encontrado: {name}"
  },

  bot: {
    welcome: "Bem-vindo",
    goodbye: "Sessão encerrada"
  }
};