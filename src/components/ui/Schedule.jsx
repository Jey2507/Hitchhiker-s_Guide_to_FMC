import styles from "./Schedule.module.css";

export function Schedule({ title, items = [] }) {
  return (
    <div className={styles.wrap}>
      {title && <span className={styles.title}>{title}</span>}
      <ol className={styles.timeline}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            <span className={styles.when}>{item.when}</span>
            <span className={styles.what}>{item.what}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
