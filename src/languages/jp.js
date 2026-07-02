// Japanese

export const jp = {
  system: {
    started: "システムが起動しました",
    ready: "システムの準備が完了しました",

    bootstrap: {
      start: "ブートストラップを開始しました",
      done: "ブートストラップ完了"
    },

    services: {
      init: "サービスを初期化しています...",
      ready: "サービスの準備が完了しました"
    },

    runtime: {
      current: "現在の言語 ",
      prompt: "言語コードを入力してください（br, cn, cz, de, en, es, fr, gr, hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn）またはENTERを押してください ",
      timeout: "{seconds}秒待機中... ",
      timeoutReached: "タイムアウト 現在の言語を使用します ",
      changed: "言語が{locale}に変更されました ",
      invalid: "言語 '{locale}' は利用できません "
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