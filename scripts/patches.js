import fs from "fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getRuntimeState, updateRuntimeState } from "../src/core/runtime/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const runtime = getRuntimeState();
updateRuntimeState(runtime);

const files = [
    path.join(__dirname, "../node_modules/libsignal/src/session_record.js")
];

for (const file of files) {

    if (!fs.existsSync(file)) {
        console.log(`❌ No existe: ${file}`);
        continue;
    }

    let code = fs.readFileSync(file, "utf8");

    // -----------------------------
    // libsignal
    // -----------------------------
    if (file.includes("libsignal")) {

        code = code.replace(
            'console.info("Closing session:", session);',
            '// console.info("Closing session:", session);'
        );

        code = code.replace(
            'console.info("Opening session:", session);',
            '// console.info("Opening session:", session);'
        );

        code = code.replace(
            'console.info("Removing old closed session:", oldestSession);',
            '// console.info("Removing old closed session:", oldestSession);'
        );

        code = code.replace(
            'console.info("Migrating session to:", migrations[i].version);',
            '// console.info("Migrating session to:", migrations[i].version);'
        );
    }

    fs.writeFileSync(file, code);

    console.log(`✔ Parche aplicado: ${file}`);
}

console.log("✔ Todos los parches aplicados.");