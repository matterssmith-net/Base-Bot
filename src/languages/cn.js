// Chinese

export const cn = {
  system: {
    started: "系统已启动",
    ready: "系统已就绪",
    bootstrap: "引导程序已启动",

    services: {
      init: "正在初始化服务...",
      ready: "服务已就绪"
    },


    runtime: {
      current: "当前语言",
      prompt: "输入语言代码（en、es...）或按 ENTER",
      timeout: "等待 {seconds} 秒...",
      timeoutReached: "等待超时。使用当前语言",
      changed: "语言已切换为 {locale}",
      invalid: "语言“{locale}”不可用"
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