import { COMMUNITIES } from "../../content/communities.js";
import { SOCIAL_ICONS } from "../ui/SocialIcons.jsx";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <p className={styles.note}>
          Питання, приклади збірок і живе обговорення — у спільнотах кх. Заходьте, там завжди раді новим космотуристам.
        </p>
        <div className={styles.links}>
          {COMMUNITIES.map((c) => {
            const Icon = SOCIAL_ICONS[c.platform];
            return (
              <a
                key={c.url}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
                style={{ background: c.color }}
                aria-label={c.platform}
              >
                <Icon className={styles.icon} />
              </a>
            );
          })}
        </div>
      </div>
      <p className={styles.credit}>
        Путівник по FMC для космотуристів · зроблено для української спільноти спідкубінгу
      </p>
    </footer>
  );
}
