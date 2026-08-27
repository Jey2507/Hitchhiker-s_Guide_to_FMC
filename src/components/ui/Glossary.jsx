import styles from "./Glossary.module.css";

export function Glossary({ items = [] }) {
  return (
    <dl className={styles.list}>
      {items.map((item) => (
        <div className={styles.entry} key={item.term}>
          <dt className={styles.term}>{item.term}</dt>
          <dd className={styles.def}>{item.def}</dd>
        </div>
      ))}
    </dl>
  );
}
