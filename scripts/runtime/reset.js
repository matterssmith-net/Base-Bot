import { updateRuntimeState, DEFAULT_STATE } from "../../src/core/runtime/index.js";

console.log("\n[RUNTIME RESET]\n");

updateRuntimeState(
  DEFAULT_STATE
);

console.log(
  "Runtime restored:"
);

console.log(
  JSON.stringify(
    DEFAULT_STATE,
    null,
    2
  )
);

console.log(
  "\nDone."
);