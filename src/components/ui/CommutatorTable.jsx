import { Alg } from "./Alg.jsx";
import styles from "./CommutatorTable.module.css";

export function CommutatorTable({ rows = [] }) {
  return (
    <div className={styles.grid}>
      {rows.map((row) => (
        <div className={styles.row} key={row.alg}>
          <Alg>{row.alg}</Alg>
          <span className={styles.arrow}>→</span>
          <span className={styles.result}>{row.result}</span>
        </div>
      ))}
    </div>
  );
}
