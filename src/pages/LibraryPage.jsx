import { useMemo, useState } from "react";
import { PageHeader } from "../components/ui/PageHeader.jsx";
import { Section } from "../components/ui/Section.jsx";
import { CommunityLinks } from "../components/ui/CommunityLinks.jsx";
import { ContestList } from "../components/ui/ContestList.jsx";
import { LibraryList } from "../components/ui/LibraryList.jsx";
import { getLibraryItems, KIND_SECTIONS } from "../utils/libraryIndex.js";
import styles from "./LibraryPage.module.css";

function matches(item, q) {
  const haystack = [
    item.label,
    item.kindLabel,
    ...item.mentions.flatMap((m) => [m.pageLabel, m.sectionLabel, m.groupTitle]),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

// Every external link referenced anywhere in the guide (videos, sheets,
// docs, PDFs, tools, forum threads), pulled out of each page's
// `resourceGroups` and regrouped by kind instead of by topic — a single
// "library" view. See src/utils/libraryIndex.js for the aggregation.
export default function LibraryPage() {
  const [query, setQuery] = useState("");
  const allItems = getLibraryItems();

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q ? allItems.filter((item) => matches(item, q)) : allItems;
    return KIND_SECTIONS.map(({ kind, title }) => ({
      kind,
      title,
      items: filtered.filter((item) => item.kind === kind),
    }));
  }, [query, allItems]);

  const nothingFound = query.trim() && groups.every((g) => g.items.length === 0);

  return (
    <>
      <PageHeader
        eyebrow="Бібліотека"
        title="Бібліотека матеріалів"
        tagline={`Усі ${allItems.length} посилань гайду — відео, таблиці, документи й сайти — в одному місці.`}
      />

      <div className={styles.search}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Шукати за назвою, темою чи розділом…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {nothingFound && <p className={styles.empty}>Нічого не знайдено за запитом «{query.trim()}».</p>}

      {groups.map(
        ({ kind, title, items }) =>
          items.length > 0 && (
            <Section key={kind} id={kind} title={title}>
              <LibraryList items={items} />
            </Section>
          )
      )}

      <Section id="community" title="Спільнота й контести">
        <span className={styles.subLabel}>Спільноти</span>
        <CommunityLinks />
        <span className={styles.subLabel}>Контести й практика</span>
        <ContestList />
      </Section>
    </>
  );
}
