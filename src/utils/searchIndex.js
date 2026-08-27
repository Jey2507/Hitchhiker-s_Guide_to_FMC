import { NAV } from "../content/navigation.js";
import { HOME } from "../content/home.js";
import { BLOCKBUILDING } from "../content/blockbuilding.js";
import { DOMINO } from "../content/domino.js";
import { BONUS } from "../content/bonus.js";
import { TOOLS } from "../content/tools.js";

// Maps each page's route to its array of content sections. HOME is an
// object keyed by section name instead of an array (see src/content/home.js),
// everything else already matches the {id, title, blocks}[] shape Section
// expects — so it's the only one that needs Object.values().
const PAGE_SECTIONS = {
  "/": Object.values(HOME),
  "/blockbuilding": BLOCKBUILDING,
  "/domino": DOMINO,
  "/bonus": BONUS,
  "/tools": TOOLS,
};

// Pulls plain, searchable text out of a block regardless of its type —
// strips the **bold**/`code`/[link](url) markup down to bare words instead
// of trying to render it.
function stripMarkup(text) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1").replace(/`(.+?)`/g, "$1").replace(/\[(.+?)\]\(.+?\)/g, "$1");
}

function blockText(block) {
  switch (block.t) {
    case "p":
      return stripMarkup(block.c);
    case "list":
      return block.items.map(stripMarkup).join(" ");
    case "note":
      return stripMarkup(block.c ?? "");
    case "quote":
      return block.lines.join(" ");
    case "steps":
      return block.items.map((s) => `${s.label} ${s.formula ?? ""} ${s.note ?? ""}`).join(" ");
    case "glossary":
      return block.items.map((i) => `${i.term} ${i.def}`).join(" ");
    case "schedule":
      return block.items.map((i) => `${i.when ?? ""} ${i.what ?? ""}`).join(" ");
    default:
      return "";
  }
}

function excerptAround(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text.slice(0, 120);
  const start = Math.max(0, idx - 40);
  const end = Math.min(text.length, idx + query.length + 60);
  return `${start > 0 ? "…" : ""}${text.slice(start, end)}${end < text.length ? "…" : ""}`;
}

// Flat index built once at module load: one entry per NAV-listed section
// (including nested `children`), carrying the joined text of every block in
// the matching content section so search can substring-match against it.
function buildIndex() {
  const entries = [];

  for (const page of NAV) {
    const sections = PAGE_SECTIONS[page.path] ?? [];
    const byId = new Map(sections.map((s) => [s.id, s]));

    const collect = (navSection, parentLabel) => {
      const content = byId.get(navSection.id);
      const text = content?.blocks?.map(blockText).filter(Boolean).join(" ") ?? "";
      entries.push({
        pagePath: page.path,
        pageLabel: page.label,
        sectionId: navSection.id,
        sectionLabel: navSection.label,
        parentLabel,
        text,
        searchable: `${page.label} ${navSection.label} ${text}`.toLowerCase(),
      });
      navSection.children?.forEach((child) => collect(child, navSection.label));
    };

    page.sections.forEach((section) => collect(section, null));
  }

  return entries;
}

let indexCache = null;
function getIndex() {
  if (!indexCache) indexCache = buildIndex();
  return indexCache;
}

const MAX_RESULTS = 12;

// Simple, dependency-free substring search: every word in the query must
// appear somewhere in the section's text (title, label or body). Good
// enough for a guide of this size — no need for a fuzzy-search library.
export function searchSite(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const words = q.split(/\s+/);
  const results = [];

  for (const entry of getIndex()) {
    if (!words.every((w) => entry.searchable.includes(w))) continue;

    const inLabel = entry.sectionLabel.toLowerCase().includes(q);
    const excerpt = inLabel ? null : excerptAround(entry.text, words[0]);
    results.push({ ...entry, excerpt, score: inLabel ? 0 : 1 });
  }

  results.sort((a, b) => a.score - b.score);
  return results.slice(0, MAX_RESULTS);
}
