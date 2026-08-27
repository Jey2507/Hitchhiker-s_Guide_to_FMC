import clsx from "clsx";
import { Link } from "react-router-dom";
import { ICEBERG } from "../../content/iceberg.js";
import styles from "./Iceberg.module.css";

// A colour scale from bright sky at the surface down to the site's own near
// black background at the very bottom, so the last tier visually dissolves
// into the page instead of ending with a hard edge.
const TIER_BG = [
  "#cdeaf6",
  "#a2d7ea",
  "#78bfdd",
  "#4a98c2",
  "#2f74a0",
  "#1e567c",
  "#123c5c",
  "#0a2740",
  "#06070f",
];
const TIER_FG = ["#08131a", "#08131a", "#08131a", "#f5faff", "#f5faff", "#f5faff", "#e7ecf8", "#dfe3f4", "#dfe3f4"];

export function Iceberg() {
  return (
    <div className={styles.iceberg}>
      {ICEBERG.map((tier, i) => (
        <div
          key={i}
          className={styles.tier}
          style={{ background: TIER_BG[i], color: TIER_FG[i] }}
        >
          {tier.title && <span className={styles.tierLabel}>{tier.title}</span>}
          <div className={styles.items}>
            {tier.items.map((item) =>
              item.to ? (
                <Link key={item.label} to={item.to} className={styles.item}>
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.label}
                  className={clsx(styles.item, styles.locked, item.joke && styles.joke)}
                >
                  {item.label}
                </span>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
