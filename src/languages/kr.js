// Korean

export const kr = {
  system: {
    started: "시스템이 시작되었습니다",
    ready: "시스템이 준비되었습니다",

    bootstrap: {
      start: "부트스트랩이 시작되었습니다",
      ready: "부트스트랩 완료"
    },

    services: {
      init: "서비스를 초기화하는 중...",
      ready: "서비스 준비 완료"
    },

    runtime: {
      locale: {
        current: "언어. 현재 상태",
        prompt: "옵션을 입력하세요 (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) 또는 ENTER를 누르세요.",
      },

      mode: {
        current: "모드. 현재 상태",
        prompt: "옵션 (dev)을 입력하거나 ENTER를 누르세요.",
      },

      debug: {
        current: "디버그. 현재 상태",
        prompt: "옵션 (true, false)을 입력하거나 ENTER를 누르세요.",
      },

      provider: {
        current: "공급자. 현재 상태",
        prompt: "옵션 (baileys)을 입력하거나 ENTER를 누르세요.",
      },

      changed: "{ops}(으)로 변경되었습니다.",
      invalid: "옵션 '{ops}'을(를) 사용할 수 없습니다.",
      timeout: "{seconds}초 대기 중...",
      timeoutReached: "시간이 초과되었습니다. 현재 옵션을 사용합니다.",
      emptyInput: "현재 옵션을 사용합니다."
    },

    clean: {
      start: "프로젝트를 정리하는 중...",
      done: "정리 완료"
    }
  },

  errors: {
    notFound: "찾을 수 없습니다",
    invalid: "잘못된 요청입니다",
    configNotFound: "구성을 찾을 수 없습니다",
    serviceNotFound: "서비스를 찾을 수 없습니다: {name}"
  },

  bot: {
    welcome: "환영합니다",
    goodbye: "세션이 종료되었습니다"
  }
};