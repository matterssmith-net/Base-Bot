import { getRuntimeState, updateRuntimeState } from "../src/core/runtime/index.js";
import { configureRuntime } from "../src/core/runtime/configure.js";

const runtime = getRuntimeState();

await configureRuntime(runtime, false);
updateRuntimeState(runtime);