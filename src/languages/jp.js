// Japanese

export const jp = {
  system: {
    started: "システムが起動しました",
    ready: "システムの準備が完了しました",
    bootstrap: "ブートストラップを開始しました",

    services: {
      init: "サービスを初期化しています...",
      ready: "サービスの準備が完了しました"
    },

    runtime: {
      current: "現在の言語 ",
      prompt: "言語コードを入力してください（en, es...）またはENTERを押してください ",
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