import { Alg } from "./Alg.jsx";
import styles from "./Steps.module.css";

export function Steps({ items = [] }) {
  return (
    <ol className={styles.steps}>
      {items.map((step, i) => (
        <li className={styles.step} key={i}>
          <span className={styles.index}>{i + 1}</span>
          <div className={styles.content}>
            <span className={styles.label}>{step.label}</span>
            <Alg>{step.formula}</Alg>
            {step.note && <span className={styles.note}>{step.note}</span>}
          </div>
        </li>
      ))}
    </ol>
  );
}
