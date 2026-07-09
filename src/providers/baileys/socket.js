import makeWASocket, {
  Browsers,
  fetchLatestBaileysVersion
} from "baileys";

import pino from "pino";


export async function createSocket(auth) {
  const { version } =
    await fetchLatestBaileysVersion();

  return makeWASocket({
    version,

    browser: Browsers.macOS(
      "Base-Bot"
    ),

    auth: auth.state,

    logger: pino({
      level: "silent"
    })
  });
}