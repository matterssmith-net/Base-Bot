export class Config {
  constructor() {
    this.env = process.env.NODE_ENV || "development";
  }

  get(key, fallback = null) {
    const value = process.env[key];
    return value !== undefined ? value : fallback;
  }

  isDev() {
    return this.env === "development";
  }

  isProd() {
    return this.env === "production";
  }
}