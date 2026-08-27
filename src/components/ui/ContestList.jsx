import { CONTESTS } from "../../content/communities.js";
import styles from "./ContestList.module.css";

export function ContestList() {
  return (
    <ul className={styles.list}>
      {CONTESTS.map((contest) => (
        <li key={contest.url}>
          <a href={contest.url} target="_blank" rel="noreferrer" className={styles.item}>
            <span className={styles.label}>{contest.label}</span>
            <span className={styles.note}>{contest.note}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
