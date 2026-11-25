import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "3am again. The light's on, the milk's gone off, and the leftovers have unionized. Go back to bed. I'll guard the cheese.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
if (LINE.length === 0 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`line is ${LINE.length} chars, must be 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
  : join(dirname(fileURLToPath(import.meta.url)), "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
