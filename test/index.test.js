import { test } from "uvu";
import * as assert from "uvu/assert";
import stripAnsi from "strip-ansi";
import nanoSymbols from "../index.js";

for (const [key, value] of Object.entries(nanoSymbols)) {
	console.log(value, key);
}

console.log("");

test("returns log symbols", () => {
	process.env.TERM = "xterm-256color";
	assert.ok(
		stripAnsi(nanoSymbols.success) === "✔" ||
			stripAnsi(nanoSymbols.success) === "√"
	);
});

test.run();
