import styles from "./GuideLink.module.css";

export function GuideLink({ title, description, url }) {
  return (
    <a className={styles.card} href={url} target="_blank" rel="noreferrer">
      <div className={styles.body}>
        <span className={styles.eyebrow}>Мій гайд</span>
        <h4 className={styles.title}>{title}</h4>
        {description && <p className={styles.desc}>{description}</p>}
      </div>
      <span className={styles.cta} aria-hidden="true">
        Відкрити →
      </span>
    </a>
  );
}
