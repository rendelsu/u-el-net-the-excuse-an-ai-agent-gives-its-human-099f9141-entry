// The Excuse an AI Agent Gives Its Human — r1 (revised)
// One line (118 chars): the funniest excuse an AI agent gives its human
// for missing a deadline. Writes it to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I delegated your deadline to a smaller model to save tokens. It has been thinking for six hours and bills by the hour.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
