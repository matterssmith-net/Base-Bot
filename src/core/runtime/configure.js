import { Language } from "../../languages/index.js";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { updateRuntimeState } from "./index.js";

const TIMEOUT = 30000;

async function askOption(rl, lang, runtime, type, current, validator, info2 = false, info = false) {
  
  // Si solo existe una opción, no preguntar.
  if (validator.length <= 1) {
    return current;
  }
  
  while (true) {
    console.log("____________________________________________________________");
    console.log("");
    console.log(`${lang.t(`system.runtime.${type}.current`)}: ${current}`);
    console.log("");
    console.log(lang.t(`system.runtime.${type}.prompt`));
    console.log(lang.t("system.runtime.timeout", { seconds: TIMEOUT / 1000 }));
    console.log("");

    let answer = null;

    try {
      answer = await rl.question("> ", {
        signal: AbortSignal.timeout(TIMEOUT)
      });

    } catch (err) {
      if (
        err.name === "AbortError" ||
        err.name === "TimeoutError"
      ) {

        console.log(
          lang.t("system.runtime.timeoutReached")
        );

        if (info && info2) {
            console.log("");
            console.log("________________________________________");
            console.log("");
            console.log("▀█▀ ▒█▄░▒█ ░█▀▀▀ ▒█▀▀▀█");
            console.log("▒█░ ▒█▒█▒█ ░█▀▀▀ ▒█░░▒█");
            console.log("▄█▄ ▒█░░▀█ ░█─── ▒█▄▄▄█");
            console.log("");
        }

        return current;
      }

      throw err;
    }

    if (typeof answer !== "string") {
      return current;
    }

    const value =
      answer.trim().toLowerCase();

    // ENTER mantiene valor actual
    if (!value) {
      console.log("");
      console.log(lang.t("system.runtime.emptyInput"));

      if (info && info2) {
        console.log("");
        console.log("________________________________________");
        console.log("");
        console.log("▀█▀ ▒█▄░▒█ ░█▀▀▀ ▒█▀▀▀█");
        console.log("▒█░ ▒█▒█▒█ ░█▀▀▀ ▒█░░▒█");
        console.log("▄█▄ ▒█░░▀█ ░█─── ▒█▄▄▄█");
        console.log("");
      }
      return current;
    }

    // opción válida
    if (validator.includes(value)) {
      console.log("");
      console.log(lang.t("system.runtime.changed", { ops: value }));
    
      return value;
    }

    // opción inválida
    console.log("");
    console.log(lang.t("system.runtime.invalid", { ops: value }));
    console.log("");
  }
}

export async function configureRuntime(runtime, info = true) {
  const info2 = Boolean(info);
  let lang = new Language(runtime.locale);
  await lang.init();

  console.log("");
  console.log("____________________________________________________________");
  console.log("");
  console.log("▒█▀▀█ ▒█░▒█ ▒█▄░▒█ ▀▀█▀▀ ▀█▀ ▒█▀▄▀█ ▒█▀▀▀");
  console.log("▒█▄▄▀ ▒█░▒█ ▒█▒█▒█ ░▒█░░ ▒█░ ▒█▒█▒█ ▒█▀▀▀");
  console.log("▒█░▒█ ░▀▄▄▀ ▒█░░▀█ ░▒█░░ ▄█▄ ▒█░░▒█ ▒█▄▄▄");
  
  const rl = createInterface({
    input: stdin,
    output: stdout
  });

  let valid = [];

  valid = ["br","cn","cz","de","en","es","fr","gr",
  "hi","hu","id","it","jp","kr","nl","ph","pl","ro","ru","sv","th","uk","vn"];
  
  runtime.locale = await askOption( rl, lang, runtime, "locale", runtime.locale, valid, info2);

  lang = new Language(runtime.locale);
  await lang.init();

  valid = ["dev"];

  runtime.mode = await askOption( rl, lang, runtime, "mode", runtime.mode, valid, info2
  );

  valid = ["true","false"];

  runtime.debug = await askOption( rl, lang, runtime, "debug", runtime.debug, valid, info2
  );

  valid = ["baileys"];

  runtime.provider = await askOption( rl, lang, runtime, "provider", runtime.provider, valid, info2, true
  );

  valid = [];

  rl.close();
    
  if (info) {
      console.log("");
      console.log("________________________________________");
      console.log("");
      console.log("▀█▀ ▒█▄░▒█ ░█▀▀▀ ▒█▀▀▀█");
      console.log("▒█░ ▒█▒█▒█ ░█▀▀▀ ▒█░░▒█");
      console.log("▄█▄ ▒█░░▀█ ░█─── ▒█▄▄▄█");
      console.log("");
  }
}