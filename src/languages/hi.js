// Hindi

export const hi = {
  system: {
    started: "सिस्टम प्रारंभ हो गया",
    ready: "सिस्टम तैयार है",

    bootstrap: {
      start: "बूटस्ट्रैप शुरू हुआ",
      ready: "बूटस्ट्रैप पूरा हुआ"
    },

    services: {
      init: "सेवाएँ प्रारंभ की जा रही हैं...",
      ready: "सेवाएँ तैयार हैं"
    },

    runtime: {
      locale: {
        current: "भाषा। वर्तमान स्थिति",
        prompt: "एक विकल्प दर्ज करें (br, cn, cz, de, en, es, fr, gr, \n" +
          "hi, hu, id, it, jp, kr, nl, ph, pl, ro, ru, sv, th, uk, vn) या ENTER दबाएँ।",
      },

      mode: {
        current: "मोड। वर्तमान स्थिति",
        prompt: "एक विकल्प (dev) दर्ज करें या ENTER दबाएँ।",
      },

      debug: {
        current: "डीबग। वर्तमान स्थिति",
        prompt: "एक विकल्प (true, false) दर्ज करें या ENTER दबाएँ।",
      },

      provider: {
        current: "प्रदाता। वर्तमान स्थिति",
        prompt: "एक विकल्प (baileys) दर्ज करें या ENTER दबाएँ।",
      },

      changed: "{ops} में बदल दिया गया।",
      invalid: "विकल्प '{ops}' उपलब्ध नहीं है।",
      timeout: "{seconds} सेकंड प्रतीक्षा की जा रही है...",
      timeoutReached: "समय समाप्त। वर्तमान विकल्प का उपयोग किया जाएगा।",
      emptyInput: "वर्तमान विकल्प का उपयोग किया जाएगा।"
    },

    clean: {
      start: "परियोजना को साफ़ किया जा रहा है...",
      done: "सफाई पूरी हुई"
    }
  },

  errors: {
    notFound: "नहीं मिला",
    invalid: "अमान्य अनुरोध",
    configNotFound: "कॉन्फ़िगरेशन नहीं मिला",
    serviceNotFound: "सेवा नहीं मिली: {name}"
  },

  bot: {
    welcome: "स्वागत है",
    goodbye: "सत्र समाप्त हुआ"
  }
};