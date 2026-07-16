import { existsSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const RUNTIME_FILE = join(__dirname, "../../../runtime.state.json");

const DEFAULT_STATE = {
  locale: "en",
  mode: "dev",
  debug: true,
  provider: "baileys"
};

export function getRuntimeState() {
  try {
    if (!existsSync(RUNTIME_FILE)) {
      writeFileSync(
        RUNTIME_FILE,
        JSON.stringify(DEFAULT_STATE, null, 2),
        "utf8"
      );
      return DEFAULT_STATE;
    }

    const state = JSON.parse(readFileSync(RUNTIME_FILE, "utf8"));

    const runtime = {
      ...DEFAULT_STATE,
      ...state
    };

    console.log("RUNTIME_FILE:", RUNTIME_FILE);
    console.log("state:", state);
    console.log("runtime:", runtime);

const raw = readFileSync(RUNTIME_FILE, "utf8");

console.log("RAW:");
console.log(raw);

const state = JSON.parse(raw);

console.log("STATE:", state);

    return JSON.parse(readFileSync(RUNTIME_FILE, "utf8"));
  } catch (err) {
    console.error(err);
    
    writeFileSync(
      RUNTIME_FILE,
      JSON.stringify(DEFAULT_STATE, null, 2),
      "utf8"
    );
    return DEFAULT_STATE;
  }
}

export function updateRuntimeState(data = {}) {
  try {
    const state = {
      ...DEFAULT_STATE,
      ...data
    };

    writeFileSync(
      RUNTIME_FILE,
      JSON.stringify(state, null, 2),
      "utf8"
    );

    return state;
  } catch (err) {
    throw new Error(`Error: ${err.message}`);
  }
}