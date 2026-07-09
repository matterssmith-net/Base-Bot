export class Logger {
  constructor(config) {
    this.env = config?.env || "development";
  }

  info(message, meta = {}) {
    this._log("INFO", message, meta);
  }

  warn(message, meta = {}) {
    this._log("WARN", message, meta);
  }

  error(message, meta = {}) {
    this._log("ERROR", message, meta);
  }

  debug(message, meta = {}) {
    if (this.env !== "production") {
      this._log("DEBUG", message, meta);
    }
  }

  _log(level, message, meta = {}) {
    const timestamp = new Date()
      .toISOString()
      .replace("T", " ")
      .replace("Z", "");

    let output =
      `[${timestamp}] [${level}] ${message}`;

    if (Object.keys(meta).length > 0) {
      output += ` ${JSON.stringify(meta)}`;
    }

    console.log(output);
  }
}