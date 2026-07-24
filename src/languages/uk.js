// Ukrainian

export const uk = {
  system: {
    started: "Система запущена",
    ready: "Система готова",

    bootstrap: {
      start: "Bootstrap запущено",
      ready: "Bootstrap завершено"
    },

    services: {
      init: "Ініціалізація сервісів...",
      ready: "Сервіси готові"
    },

    runtime: {
      locale: {
        current: "Мова. Поточний стан",
        prompt: "Введіть варіант (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) або натисніть ENTER.",
      },

      mode: {
        current: "Pежим. Поточний стан",
        prompt: "Введіть варіант (dev) або натисніть ENTER.",
      },

      debug: {
        current: "Налагодження. Поточний стан",
        prompt: "Введіть варіант (true, false) або натисніть ENTER.",
      },

      provider: {
        current: "Провайдер. Поточний стан",
        prompt: "Введіть варіант (baileys) або натисніть ENTER.",
      },

      changed: "Змінено на {ops}.",
      invalid: "Варіант '{ops}' недоступний.",
      timeout: "Очікування {seconds} секунд...",
      timeoutReached: "Час очікування минув. Буде використано поточний варіант.",
      emptyInput: "Буде використано поточний варіант."
    },

    clean: {
      start: "Очищення проекту...",
      done: "Очищення завершено"
    }
  },

  errors: {
    notFound: "Не знайдено",
    invalid: "Неправильний запит",
    configNotFound: "Конфігурацію не знайдено",
    serviceNotFound: "Сервіс не знайдено: {name}"
  },

  bot: {
    welcome: "Ласкаво просимо",
    goodbye: "Сесію завершено"
  }
};