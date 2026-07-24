// Russian

export const ru = {
  system: {
    started: "Система запущена",
    ready: "Система готова",

    bootstrap: {
      start: "Bootstrap запущен",
      ready: "Bootstrap завершён"
    },

    services: {
      init: "Инициализация сервисов...",
      ready: "Сервисы готовы"
    },

    runtime: {
      locale: {
        current: "Язык. Текущее состояние",
        prompt: "Введите вариант (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) или нажмите ENTER.",
      },

      mode: {
        current: "Pежим. Текущее состояние",
        prompt: "Введите вариант (dev) или нажмите ENTER.",
      },

      debug: {
        current: "Отладка. Текущее состояние",
        prompt: "Введите вариант (true, false) или нажмите ENTER.",
      },

      provider: {
        current: "Провайдер. Текущее состояние",
        prompt: "Введите вариант (baileys) или нажмите ENTER.",
      },

      changed: "Изменено на {ops}.",
      invalid: "Вариант '{ops}' недоступен.",
      timeout: "Ожидание {seconds} секунд...",
      timeoutReached: "Время ожидания истекло. Будет использован текущий вариант.",
      emptyInput: "Будет использован текущий вариант."
    },

    clean: {
      start: "Очистка проекта...",
      done: "Очистка завершена"
    }
  },

  errors: {
    notFound: "Не найдено",
    invalid: "Недопустимый запрос",
    configNotFound: "Конфигурация не найдена",
    serviceNotFound: "Сервис не найден: {name}"
  },

  bot: {
    welcome: "Добро пожаловать",
    goodbye: "Сеанс завершён"
  }
};