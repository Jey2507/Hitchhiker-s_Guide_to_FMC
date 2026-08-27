import { CONTESTS } from "../../content/communities.js";
import { CONTEST_ICONS } from "./ContestIcons.jsx";
import styles from "./ContestList.module.css";

export function ContestList() {
  return (
    <ul className={styles.list}>
      {CONTESTS.map((contest) => {
        const Icon = CONTEST_ICONS[contest.icon];
        return (
          <li key={contest.url}>
            <a href={contest.url} target="_blank" rel="noreferrer" className={styles.item}>
              <span className={styles.iconChip} style={{ background: contest.color }}>
                <Icon className={styles.icon} />
              </span>
              <span className={styles.text}>
                <span className={styles.label}>{contest.label}</span>
                <span className={styles.note}>{contest.note}</span>
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
