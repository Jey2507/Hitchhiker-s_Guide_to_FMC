import { COMMUNITIES } from "../../content/communities.js";
import { SOCIAL_ICONS } from "./SocialIcons.jsx";
import styles from "./CommunityLinks.module.css";

export function CommunityLinks() {
  return (
    <div className={styles.grid}>
      {COMMUNITIES.map((community) => {
        const Icon = SOCIAL_ICONS[community.platform];
        return (
          <a
            key={community.url}
            href={community.url}
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <span className={styles.iconChip} style={{ background: community.color }}>
              <Icon className={styles.icon} />
            </span>
            <div>
              <span className={styles.platform}>{community.platform}</span>
              <h4 className={styles.label}>{community.label}</h4>
              <p className={styles.desc}>{community.description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
