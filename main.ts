import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(dir, "entry.txt"), "utf8");
// The gate requires 1-200 non-whitespace characters; refuse a blank entry.
if (text.trim().length === 0) {
  throw new Error("entry.txt is empty or only whitespace");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(dir, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text);
