import { test } from "uvu";
import * as assert from "uvu/assert";
import stripAnsi from "strip-ansi";
import logSymbols from "./index.js";

for (const [key, value] of Object.entries(logSymbols)) {
	console.log(value, key);
}

console.log("");

test("returns log symbols", () => {
	process.env.TERM = "xterm-256color";
	assert.ok(
		stripAnsi(logSymbols.success) === "✔" ||
			stripAnsi(logSymbols.success) === "√"
	);
});

test.run();
