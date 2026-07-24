// Thai

export const th = {
  system: {
    started: "ระบบเริ่มทำงานแล้ว",
    ready: "ระบบพร้อมใช้งาน",

    bootstrap: {
      start: "เริ่มต้น Bootstrap แล้ว",
      ready: "Bootstrap เสร็จสิ้น"
    },

    services: {
      init: "กำลังเริ่มต้นบริการ...",
      ready: "บริการพร้อมใช้งาน"
    },

    runtime: {
      locale: {
        current: "ภาษา. สถานะปัจจุบัน",
        prompt: "ป้อนตัวเลือก (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) หรือกด ENTER.",
      },

      mode: {
        current: "โหมด. สถานะปัจจุบัน",
        prompt: "ป้อนตัวเลือก (dev) eller หรือกด ENTER.",
      },

      debug: {
        current: "การแก้ไขข้อผิดพลาด. สถานะปัจจุบัน",
        prompt: "ป้อนตัวเลือก (true, false) หรือกด ENTER.",
      },

      provider: {
        current: "ผู้ให้บริการ. สถานะปัจจุบัน",
        prompt: "ป้อนตัวเลือก (baileys) หรือกด ENTER.",
      },

      changed: "เปลี่ยนเป็น {ops}",
      invalid: "ตัวเลือก '{ops}' ไม่พร้อมใช้งาน",
      timeout: "กำลังรอ {seconds} วินาที...",
      timeoutReached: "หมดเวลา จะใช้ตัวเลือกปัจจุบัน",
      emptyInput: "จะใช้ตัวเลือกปัจจุบัน"
    },

    clean: {
      start: "กำลังทำความสะอาดโครงการ...",
      done: "การทำความสะอาดเสร็จสมบูรณ์"
    }
  },

  errors: {
    notFound: "ไม่พบ",
    invalid: "คำขอไม่ถูกต้อง",
    configNotFound: "ไม่พบการกำหนดค่า",
    serviceNotFound: "ไม่พบบริการ: {name}"
  },

  bot: {
    welcome: "ยินดีต้อนรับ",
    goodbye: "สิ้นสุดเซสชัน"
  }
};