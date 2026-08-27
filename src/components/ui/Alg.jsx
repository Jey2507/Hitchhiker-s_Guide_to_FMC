import styles from "./Alg.module.css";

// Renders a cube-notation move sequence as small monospace "key" chips,
// e.g. "R U R' U'" -> [R] [U] [R'] [U'].
export function Alg({ children }) {
  const tokens = String(children).trim().split(/\s+/);
  return (
    <span className={styles.alg}>
      {tokens.map((token, i) => (
        <span className={styles.move} key={i}>
          {token}
        </span>
      ))}
    </span>
  );
}
