import { test } from "uvu";
import * as assert from "uvu/assert";
import nanoSymbols from "./index.js";

for (const [key, value] of Object.entries(nanoSymbols)) {
  console.log(value, key);
}

console.log();

test("returns log symbols", () => {
  assert.ok(
    nanoSymbols.success.includes("✔") || nanoSymbols.success.includes("√")
  );
});

test.run();
