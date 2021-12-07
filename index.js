import pc from "picocolors";

/**
 * Detects whether the terminal supports Unicode.
 *
 * Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (https://sindresorhus.com)
 *
 * Copied as-is from `is-unicode-supported`:
 * https://github.com/sindresorhus/is-unicode-supported/blob/f0c2c97ee97160b56d9143c24ac8ac18aef10b7d/index.js
 *
 * @returns `true`, if current terminal supports Unicode characters
 */
function isUnicodeSupported() {
  if (process.platform !== "win32") {
    return process.env.TERM !== "linux"; // Linux console (kernel)
  }

  return (
    Boolean(process.env.CI) ||
    Boolean(process.env.WT_SESSION) || // Windows Terminal
    process.env.ConEmuTask === "{cmd::Cmder}" || // ConEmu and cmder
    process.env.TERM_PROGRAM === "vscode" ||
    process.env.TERM === "xterm-256color" ||
    process.env.TERM === "alacritty"
  );
}

const main = {
  info: pc.blue("ℹ"),
  success: pc.green("✔"),
  warning: pc.yellow("⚠"),
  error: pc.red("✖"),
};

const fallback = {
  info: pc.blue("i"),
  success: pc.green("√"),
  warning: pc.yellow("‼"),
  error: pc.red("×"),
};

const nanoSymbols = isUnicodeSupported() ? main : fallback;

export default nanoSymbols;
