// Español

export const es = {
  system: {
    started: "Sistema iniciado",
    ready: "Sistema listo",

    auth: {
      title: "¿Cómo desea vincular WhatsApp?",
      description: "Seleccione un método de autenticación.",
      optionPairing: "Código por número",
      optionQR: "Código QR",
      select: "Seleccione una opción:",
      invalidOption: "Opción inválida.",
      enterPhone: "Ingrese el número telefónico:",
      generatingCode: "Generando código de vinculación...",
      code: "Código de vinculación:",
      openBrowser: "Abra la siguiente dirección:",
      waiting: "Esperando autenticación...",
      success: "Autenticación completada.",
      failed: "La autenticación ha fallado."
    },

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