// Japanese

export const jp = {
  system: {
    started: "システムが起動しました",
    ready: "システムの準備が完了しました",

    bootstrap: {
      start: "ブートストラップを開始しました",
      ready: "ブートストラップ完了"
    },

    services: {
      init: "サービスを初期化しています...",
      ready: "サービスの準備が完了しました"
    },

    runtime: {
      locale: {
        current: "言語。現在の状態",
        prompt: "オプションを入力してください (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) または ENTER を押してください。",
      },

      mode: {
        current: "モード。現在の状態",
        prompt: "オプション (dev) を入力するか、ENTER を押してください。",
      },

      debug: {
        current: "デバッグ。現在の状態",
        prompt: "オプション (true, false) を入力するか、ENTER を押してください。",
      },

      provider: {
        current: "プロバイダー。現在の状態",
        prompt: "オプション (baileys) を入力するか、ENTER を押してください。",
      },

      changed: "{ops} に変更されました。",
      invalid: "オプション '{ops}' は利用できません。",
      timeout: "{seconds} 秒待機中...",
      timeoutReached: "時間切れです。現在のオプションを使用します。",
      emptyInput: "現在のオプションを使用します。"
    },

    clean: {
      start: "プロジェクトをクリーンアップしています...",
      done: "クリーンアップが完了しました"
    }
  },

  errors: {
    notFound: "見つかりません",
    invalid: "無効なリクエストです",
    configNotFound: "設定が見つかりません",
    serviceNotFound: "サービスが見つかりません: {name}"
  },

  bot: {
    welcome: "ようこそ",
    goodbye: "セッションが終了しました"
  }
};