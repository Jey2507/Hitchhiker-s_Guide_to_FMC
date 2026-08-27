// Parses and counts an FMC solution written in standard WCA notation, with
// NISS groups in parentheses — e.g. "R U R2 (F' L F) // 6". Pure function,
// no DOM/React — used by src/components/ui/MoveCounter.jsx.
//
// Counting rules (WCA FMC regulations):
//  - Face turns (U D F B L R) and slice turns (M E S) count as 1 move each,
//    with a 2 (double) or ' (counter-clockwise) suffix.
//  - Rotations (x y z, same suffixes) don't count — they just reorient your
//    grip, so they're tracked but excluded from the total.
//  - Parentheses mark a NISS group: moves applied to the inverse scramble.
//    Both the normal part and every NISS group count toward the total.
//  - Wide moves (lowercase u/d/f/b/l/r or Rw-style) aren't valid FMC
//    notation — flagged as an error rather than silently accepted.
const MOVE_RE = /^[UDFBLRMES](2|')?$/;
const ROTATION_RE = /^[xyz](2|')?$/;
const WIDE_RE = /^[udflrb](2|')?$|^[UDFBLR]w(2|')?$/;

const AMOUNTS = { "": 1, 2: 2, "'": 3 };
const AMOUNT_LABELS = { 1: "", 2: "2", 3: "'", 0: "" };

// Comment token, e.g. "//6+2" or "// 6" — ignored for counting, everything
// from the first "//" to the end of that line is treated as a comment.
function stripComments(line) {
  const idx = line.indexOf("//");
  return idx === -1 ? line : line.slice(0, idx);
}

export function analyzeSolution(input) {
  const tokens = [];
  const errors = [];
  const warnings = [];

  const cleaned = input
    .split("\n")
    .map(stripComments)
    .join(" ")
    .replace(/[()]/g, (m) => ` ${m} `);
  const raw = cleaned.trim().split(/\s+/).filter(Boolean);

  let depth = 0;
  let prevMove = null; // { face, amount, tokenRef } — last move at the current depth/context

  for (const word of raw) {
    if (word === "(") {
      if (depth >= 1) errors.push(`Вкладені дужки не підтримуються: "${word}"`);
      depth += 1;
      prevMove = null;
      continue;
    }
    if (word === ")") {
      if (depth === 0) errors.push("Зайва закриваюча дужка ')' без відповідної '('");
      depth = Math.max(0, depth - 1);
      prevMove = null;
      continue;
    }

    const niss = depth > 0;

    if (MOVE_RE.test(word)) {
      const face = word[0];
      const amount = AMOUNTS[word.slice(1)] ?? 1;
      const token = { raw: word, type: "move", face, amount, niss };
      tokens.push(token);

      if (prevMove && prevMove.face === face && prevMove.niss === niss) {
        const merged = (prevMove.amount + amount) % 4;
        const mergedLabel = merged === 0 ? "скорочується" : `${face}${AMOUNT_LABELS[merged]}`;
        warnings.push(`"${prevMove.raw} ${word}" ${merged === 0 ? "скорочуються" : `можна записати як "${mergedLabel}"`}`);
      }
      prevMove = token;
      continue;
    }

    if (ROTATION_RE.test(word)) {
      tokens.push({ raw: word, type: "rotation", niss });
      prevMove = null;
      continue;
    }

    if (WIDE_RE.test(word)) {
      tokens.push({ raw: word, type: "invalid", niss });
      errors.push(`"${word}" схоже на wide-хід — у записі кх використовують тільки U D F B L R, M E S та x y z`);
      prevMove = null;
      continue;
    }

    tokens.push({ raw: word, type: "invalid", niss });
    errors.push(`Нерозпізнаний хід: "${word}"`);
    prevMove = null;
  }

  if (depth > 0) errors.push("Не закрита дужка NISS — бракує ')'");

  const normalMoves = tokens.filter((t) => t.type === "move" && !t.niss).length;
  const nissMoves = tokens.filter((t) => t.type === "move" && t.niss).length;
  const rotations = tokens.filter((t) => t.type === "rotation").length;
  const invalid = tokens.filter((t) => t.type === "invalid").length;

  return {
    tokens,
    total: normalMoves + nissMoves,
    normalMoves,
    nissMoves,
    rotations,
    invalid,
    errors,
    warnings,
  };
}
