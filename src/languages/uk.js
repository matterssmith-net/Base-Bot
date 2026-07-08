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
      current: "Поточна мова ",
      prompt: "Введіть код мови (br, cn, cz, de, en, es, fr, gr, \n" +
      "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) або натисніть ENTER ",
      timeout: "Очікування {seconds} секунд... ",
      timeoutReached: "Час вийшов використовується поточна мова ",
      changed: "Мову змінено на {locale} ",
      invalid: "Мова '{locale}' недоступна "
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