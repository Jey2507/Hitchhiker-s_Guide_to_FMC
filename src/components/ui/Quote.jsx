import styles from "./Quote.module.css";

export function Quote({ lines = [] }) {
  return (
    <blockquote className={styles.quote}>
      {lines.map((line, i) =>
        line === "" ? <div key={i} className={styles.gap} /> : <p key={i}>{line}</p>
      )}
    </blockquote>
  );
}
