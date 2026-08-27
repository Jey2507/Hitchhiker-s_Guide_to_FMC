import { Prose } from "./Prose.jsx";
import { ResourceList } from "./ResourceList.jsx";
import styles from "./Section.module.css";

// A single chapter/sub-chapter on a page: an anchored heading, prose blocks,
// an optional resource list, and room for bespoke children (tables,
// interactive widgets) that don't fit the generic block schema.
export function Section({ id, kicker, title, blocks, resourceGroups, children }) {
  return (
    <section id={id} className={styles.section}>
      {kicker && <span className={styles.kicker}>{kicker}</span>}
      {title && <h2 className={styles.title}>{title}</h2>}
      {blocks && <Prose blocks={blocks} />}
      {children}
      {resourceGroups && <ResourceList groups={resourceGroups} />}
    </section>
  );
}
