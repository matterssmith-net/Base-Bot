const locales = {
  en: () => import("./en.js"),
  es: () => import("./es.js"),
  br: () => import("./br.js"),
  cn: () => import("./cn.js"),
  cz: () => import("./cz.js"),
  de: () => import("./de.js"),
  fr: () => import("./fr.js"),
  gr: () => import("./gr.js"),
  hi: () => import("./hi.js"),
  hu: () => import("./hu.js"),
  id: () => import("./id.js"),
  it: () => import("./it.js"),
  jp: () => import("./jp.js"),
  kr: () => import("./kr.js"),
  nl: () => import("./nl.js"),
  ph: () => import("./ph.js"),
  pl: () => import("./pl.js"),
  ro: () => import("./ro.js"),
  ru: () => import("./ru.js"),
  sv: () => import("./sv.js"),
  th: () => import("./th.js"),
  uk: () => import("./uk.js"),
  vn: () => import("./vn.js")
};

export class Language {
  constructor(locale = "en") {
    this.locale = locale || "en";
    this.dict = {};
  }

  async init() {
    await Promise.all(
      Object.keys(locales).map(async (lng) => {
        try {
          const mod = await locales[lng]();
          this.dict[lng] = mod[lng] || mod.default;
        } catch {
          this.dict[lng] = null;
        }
      })
    );
  }

  t(path, params = {}) {
  const keys = path.split(".");
  let value = this.dict[this.locale] || this.dict.en;

  for (const key of keys) {
    value = value?.[key];
  }

  if (typeof value !== "string") {
    return path;
  }

  return value.replace(/\{(\w+)\}/g, (_, key) =>
    params[key] ?? `{${key}}`
  );
}
}