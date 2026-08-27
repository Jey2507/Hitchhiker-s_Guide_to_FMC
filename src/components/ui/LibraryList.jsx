import { Link } from "react-router-dom";
import styles from "./LibraryList.module.css";

// Flat list of library items within one kind section (see
// src/utils/libraryIndex.js). Each item links out to the resource itself,
// plus small pills back to every guide section that references it.
export function LibraryList({ items = [] }) {
  if (!items.length) return null;
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.url} className={styles.item}>
          <a href={item.url} target="_blank" rel="noreferrer" className={styles.link}>
            <span className={styles.label}>{item.label}</span>
            <span className={`${styles.kind} ${styles[item.kind]}`}>{item.kindLabel}</span>
          </a>
          <div className={styles.mentions}>
            {item.mentions.map((m) => (
              <Link key={`${m.pagePath}#${m.sectionId}`} to={`${m.pagePath}#${m.sectionId}`} className={styles.mention}>
                {m.sectionLabel === m.pageLabel ? m.pageLabel : `${m.pageLabel} › ${m.sectionLabel}`}
              </Link>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
