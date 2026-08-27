import { getResourceKind } from "../../utils/resourceKind.js";
import styles from "./ResourceList.module.css";

export function ResourceList({ groups = [] }) {
  if (!groups.length) return null;
  return (
    <div className={styles.wrap}>
      {groups.map((group) => (
        <div key={group.title} className={styles.group}>
          <span className={styles.groupTitle}>{group.title}</span>
          <ul className={styles.list}>
            {group.items.map((item) => {
              const { kind, label } = getResourceKind(item.url);
              return (
                <li key={item.url}>
                  <a
                    className={styles.item}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className={styles.itemLabel}>{item.label}</span>
                    <span className={`${styles.kind} ${styles[kind]}`}>{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
