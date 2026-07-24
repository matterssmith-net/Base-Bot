// Español

export const es = {
  system: {
    started: "Sistema iniciado",
    ready: "Sistema listo",

    bootstrap: {
      start: "Bootstrap iniciado",
      ready: "Bootstrap completado"
    },
    
    services: {
      init: "Inicializando servicios...",
      ready: "Servicios listos"
    },

    runtime: {
      locale: {
        current: "Idioma. Estado actual",
        prompt: "Escribe una opción (br, cn, cz, de, en, es, fr, gr, \n" +
        "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) o presiona ENTER.",
      },

      mode: {
        current: "Modo. Estado actual",
        prompt: "Escribe una opción (dev) o presiona ENTER.",
      },

      debug: {
        current: "Depuración. Estado actual",
        prompt: "Escribe una opción (true, false) o presiona ENTER.",
      },

      provider: {
        current: "Proveedor. Estado actual",
        prompt: "Escribe una opción (baileys) o presiona ENTER.",
      },

      changed: "Se ha cambiado a {ops}.",
      invalid: "La opción '{ops}' no está disponible.",
      timeout: "Esperando {seconds} segundos...",
      timeoutReached: "Tiempo agotado. Se usará la opción actual.",
      emptyInput: "Se usará la opción actual."
    },

    clean: {
      start: "Limpiando proyecto...",
      done: "Limpieza completa"
    }
  },

  errors: {
    notFound: "No encontrado",
    invalid: "Solicitud inválida",
    configNotFound: "Configuración no encontrada",
    serviceNotFound: "Servicio no encontrado: {name}"
  },

  bot: {
    welcome: "Bienvenido",
    goodbye: "Sesión finalizada"
  }
};