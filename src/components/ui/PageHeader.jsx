import styles from "./PageHeader.module.css";

export function PageHeader({ eyebrow, title, tagline }) {
  return (
    <header className={styles.header}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h1 className={styles.title}>{title}</h1>
      {tagline && <p className={styles.tagline}>{tagline}</p>}
    </header>
  );
}
