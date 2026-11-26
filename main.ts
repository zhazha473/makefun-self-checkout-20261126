import { mkdirSync, writeFileSync } from "node:fs";

// One funny line in the voice of a smug, judgmental self-checkout machine.
// First person, quoted log entry, concrete basket (twelve yoghurts, nothing
// else) plus a specific petty accusation. Deterministic: a constant string.
const LINE =
  "Twelve yoghurts. Nothing else. I have logged this purchase as 'a cry for help' and sent your receipt to the store nutritionist, who laughed first and asked for your name.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
