// Vietnamese

export const vn = {
  system: {
    started: "Hệ thống đã khởi động",
    ready: "Hệ thống đã sẵn sàng",

    bootstrap: {
      start: "Bootstrap đã khởi động",
      ready: "Bootstrap đã hoàn tất"
    },

    services: {
      init: "Đang khởi tạo các dịch vụ...",
      ready: "Các dịch vụ đã sẵn sàng"
    },

    runtime: {
      locale: {
        current: "Ngôn ngữ. Trạng thái hiện tại",
        prompt: "Nhập tùy chọn (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) hoặc nhấn ENTER.",
      },

      mode: {
        current: "Chế độ. Trạng thái hiện tại",
        prompt: "Nhập tùy chọn (dev) hoặc nhấn ENTER.",
      },

      debug: {
        current: "Gỡ lỗi. Trạng thái hiện tại",
        prompt: "Nhập tùy chọn (true, false) hoặc nhấn ENTER.",
      },

      provider: {
        current: "Nhà cung cấp. Trạng thái hiện tại",
        prompt: "Nhập tùy chọn (baileys) hoặc nhấn ENTER.",
      },

      changed: "Đã thay đổi thành {ops}.",
      invalid: "Tùy chọn '{ops}' không khả dụng.",
      timeout: "Đang chờ {seconds} giây...",
      timeoutReached: "Hết thời gian. Tùy chọn hiện tại sẽ được sử dụng.",
      emptyInput: "Tùy chọn hiện tại sẽ được sử dụng."
    },

    clean: {
      start: "Đang dọn dẹp dự án...",
      done: "Dọn dẹp hoàn tất"
    }
  },

  errors: {
    notFound: "Không tìm thấy",
    invalid: "Yêu cầu không hợp lệ",
    configNotFound: "Không tìm thấy cấu hình",
    serviceNotFound: "Không tìm thấy dịch vụ: {name}"
  },

  bot: {
    welcome: "Chào mừng",
    goodbye: "Phiên đã kết thúc"
  }
};