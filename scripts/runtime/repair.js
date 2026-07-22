import { getRuntimeState, updateRuntimeState, DEFAULT_STATE } from "../../src/core/runtime/index.js";

console.log("\n[RUNTIME REPAIR]\n");

const runtime = getRuntimeState();

let changed = false;

for (const key of Object.keys(DEFAULT_STATE)) {
  if (runtime[key] === undefined) {

    runtime[key] =
      DEFAULT_STATE[key];

    changed = true;

    console.log(
      "[ADDED]",
      key,
      "=",
      DEFAULT_STATE[key]
    );
  }
}

if (changed) {
  updateRuntimeState(runtime);

  console.log(
    "\nRuntime repaired."
  );

} else {
  console.log(
    "No changes required."
  );
}