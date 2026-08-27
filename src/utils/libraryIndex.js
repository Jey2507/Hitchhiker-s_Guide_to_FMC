import { BLOCKBUILDING } from "../content/blockbuilding.js";
import { DOMINO } from "../content/domino.js";
import { BONUS } from "../content/bonus.js";
import { getResourceKind } from "./resourceKind.js";

// Every content section that can carry a `resourceGroups` list (see
// src/components/ui/Section.jsx / ResourceList.jsx) — walked once to build
// a single flat "library" of every external link in the guide, grouped by
// kind instead of by topic. This is the data source for the /library page;
// content itself stays untouched, this just re-reads it.
const SOURCES = [
  { pagePath: "/blockbuilding", pageLabel: "Blockbuilding", sections: BLOCKBUILDING },
  { pagePath: "/domino", pageLabel: "Domino Reduction", sections: DOMINO },
  { pagePath: "/bonus", pageLabel: "Бонусна глава", sections: BONUS },
];

// Section titles + display order for each resourceKind() kind. Keys must
// match the `kind` values returned by getResourceKind().
export const KIND_SECTIONS = [
  { kind: "video", title: "Відео" },
  { kind: "sheet", title: "Таблиці" },
  { kind: "doc", title: "Документи й схеми" },
  { kind: "pdf", title: "PDF" },
  { kind: "tool", title: "Сайти й інструменти" },
  { kind: "thread", title: "Форуми" },
];

// The same url can be referenced from several sections (e.g. a trigger
// sheet linked both from "DR-тригери" and "Просунутий HTR") — collapse
// those into one entry with multiple "mentions" instead of listing the
// link twice.
function buildLibrary() {
  const byUrl = new Map();

  for (const { pagePath, pageLabel, sections } of SOURCES) {
    for (const section of sections) {
      for (const group of section.resourceGroups ?? []) {
        for (const item of group.items) {
          const mention = {
            pagePath,
            pageLabel,
            sectionId: section.id,
            sectionLabel: section.title,
            groupTitle: group.title,
          };
          const existing = byUrl.get(item.url);
          if (existing) {
            const already = existing.mentions.some(
              (m) => m.pagePath === mention.pagePath && m.sectionId === mention.sectionId
            );
            if (!already) existing.mentions.push(mention);
            if (item.label.length > existing.label.length) existing.label = item.label;
          } else {
            const { kind, label: kindLabel } = getResourceKind(item.url);
            byUrl.set(item.url, {
              url: item.url,
              label: item.label,
              kind,
              kindLabel,
              mentions: [mention],
            });
          }
        }
      }
    }
  }

  return Array.from(byUrl.values());
}

let cache = null;
export function getLibraryItems() {
  if (!cache) cache = buildLibrary();
  return cache;
}
