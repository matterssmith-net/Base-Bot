import { getRuntimeState } from "../../src/core/runtime/index.js";


console.log("\n======================");
console.log("[RUNTIME DOCTOR]");
console.log("======================\n");


const errors = [];

try {
  const runtime = getRuntimeState();

  console.log("[STATE] runtime.state.json OK");

  console.log("\nCurrent state:");
  console.log(
    JSON.stringify(runtime, null, 2)
  );

  if (!runtime.locale) {
    errors.push("Missing locale");
  }

  if (!runtime.mode) {
    errors.push("Missing mode");
  }

  if (typeof runtime.debug !== "boolean") {
    errors.push("Invalid debug value");
  }

} catch (error) {
  console.log(
    "[FAIL] Runtime unavailable"
  );

  errors.push(
    error.message
  );
}

console.log("\n======================");

if (errors.length) {

  console.log(
    "STATUS: FAILED"
  );

  console.log(
    "\nProblems:"
  );

  for (const error of errors) {
    console.log(
      "-",
      error
    );
  }

  process.exit(1);

}

console.log(
  "STATUS: HEALTHY"
);

console.log(
  "======================\n"
);