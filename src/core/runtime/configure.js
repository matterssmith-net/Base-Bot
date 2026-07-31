import { Language } from "../../languages/index.js";
import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";
import { updateRuntimeState } from "./index.js";

const TIMEOUT = 30000;

async function askOption(rl, lang, runtime, type, current, validator, info2 = false, info = false) {
  
  // Si no existe valor actual, usar el primero disponible.
  if (
    (current === undefined || current === null || current === "") &&
    validator.length > 0
  ) {
    current = validator[0];
  }
  
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

    // convertir automáticamente a boolean si aplica
    let parsedValue = value;

    if (validator.some(v => typeof v === "boolean")) {
      const lower = value.toLowerCase();

      if (lower === "true") {
        parsedValue = true;
      } else if (lower === "false") {
        parsedValue = false;
      }
    }

    // opción válida
    if (validator.includes(parsedValue)) {
      console.log("");
      console.log(lang.t("system.runtime.changed", { ops: value }));
    
      return parsedValue;
    }

    // opción inválida
    console.log("");
    console.log(lang.t("system.runtime.invalid", { ops: value }));
    console.log("");

    // Si por alguna razón seguimos sin un valor actual,
    // volver a asignar el primero y repetir la pregunta.
    if (
      (current === undefined || current === null || current === "") &&
      validator.length > 0
    ) {
      current = validator[0];
    }
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
//_____________________________________________________________________________________

  valid = ["br","cn","cz","de","en","es","fr","gr",
  "hi","hu","id","it","jp","kr","nl","ph","pl","ro","ru","sv","th","uk","vn"];
  
  runtime.locale = await askOption( rl, lang, runtime, "locale", runtime.locale, valid, info2);

  await updateRuntimeState(runtime);

  lang = new Language(runtime.locale);
  await lang.init();
//_____________________________________________________________________________________

  valid = ["dev","prod"];

  runtime.mode = await askOption( rl, lang, runtime, "mode", runtime.mode, valid, info2);

  await updateRuntimeState(runtime);
//_____________________________________________________________________________________

  valid = [true,false];

  runtime.debug = await askOption( rl, lang, runtime, "debug", runtime.debug, valid, info2);

  await updateRuntimeState(runtime);
//_____________________________________________________________________________________

  valid = ["bot","api"];

  runtime.module = await askOption( rl, lang, runtime, "module", runtime.module, valid, info2);

  await updateRuntimeState(runtime);
//_____________________________________________________________________________________
  switch (runtime.module) {
    case "bot":
      runtime.bot ??= {};

      valid = ["whatsapp","telegram"];

      runtime.bot.platform = await askOption( rl, lang, runtime.bot, "bot.platform", runtime.bot.platform, valid, info2);

      await updateRuntimeState(runtime);
//_____________________________________________________________________________________

      valid = ["javascript","typescript"];

      runtime.bot.language = await askOption( rl, lang, runtime.bot, "bot.language", runtime.bot.language, valid, info2);

      await updateRuntimeState(runtime);
//_____________________________________________________________________________________

      switch (runtime.bot.platform) {

        case "whatsapp":
          valid = ["baileys","whiskeysockets"];
          break;

        default:
          valid = [];
          break;
      }

      runtime.bot.provider = await askOption( rl, lang, runtime.bot, "bot.provider", runtime.bot.provider, valid, info2);

      await updateRuntimeState(runtime);
      break;
//_____________________________________________________________________________________

    default:
      delete runtime.bot;

      await updateRuntimeState(runtime);
      break;
  }
//_____________________________________________________________________________________

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