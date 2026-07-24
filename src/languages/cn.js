// Chinese

export const cn = {
  system: {
    started: "系统已启动",
    ready: "系统已就绪",

    bootstrap: {
      start: "引导程序已启动",
      ready: "引导完成"
    },

    services: {
      init: "正在初始化服务...",
      ready: "服务已就绪"
    },


    runtime: {
      locale: {
        current: "语言。当前状态",
        prompt: "请输入一个选项 (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) 或按 ENTER。",
      },

      mode: {
        current: "模式。当前状态",
        prompt: "请输入一个选项 (dev) 或按 ENTER。",
      },

      debug: {
        current: "调试。当前状态",
        prompt: "请输入一个选项 (true, false) 或按 ENTER。",
      },

      provider: {
        current: "提供程序。当前状态",
        prompt: "请输入一个选项 (baileys) 或按 ENTER。",
      },

      changed: "已更改为 {ops}。",
      invalid: "选项 '{ops}' 不可用。",
      timeout: "等待 {seconds} 秒...",
      timeoutReached: "等待超时。将使用当前选项。",
      emptyInput: "将使用当前选项。"
    },

    clean: {
      start: "正在清理项目...",
      done: "清理完成"
    }
  },

  errors: {
    notFound: "未找到",
    invalid: "无效请求",
    configNotFound: "未找到配置",
    serviceNotFound: "未找到服务：{name}"
  },

  bot: {
    welcome: "欢迎",
    goodbye: "会话已结束"
  }
};