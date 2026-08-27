import { GLOSSARY_TERMS } from "../content/glossary.js";

// Builds one alternation regex that matches any glossary term as a whole
// word/phrase (longest first, so "Double Slice Reduction" wins over a
// shorter term that happened to be its prefix). Boundaries (\b) are only
// added on the side that actually starts/ends on a word character — terms
// like "//x+y" start with punctuation, so a leading \b would never match.
function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function boundaryPattern(term) {
  const escaped = escapeRegExp(term);
  const left = /^\w/.test(term) ? "\\b" : "";
  const right = /\w$/.test(term) ? "\\b" : "";
  return `${left}${escaped}${right}`;
}

const TERMS_BY_TEXT = new Map(GLOSSARY_TERMS.map((entry) => [entry.term, entry]));

export const GLOSSARY_MATCH_RE = new RegExp(
  GLOSSARY_TERMS.map((entry) => entry.term)
    .sort((a, b) => b.length - a.length)
    .map(boundaryPattern)
    .join("|"),
  "g"
);

export function lookupGlossaryTerm(text) {
  return TERMS_BY_TEXT.get(text);
}
