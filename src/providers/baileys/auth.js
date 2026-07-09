import {
  useMultiFileAuthState
} from "./client.js";

export async function getAuthState(path = "./bot_sessions") {
  const { state, saveCreds } =
    await useMultiFileAuthState(path);

  return {
    state,
    saveCreds
  };
}