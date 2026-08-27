import clsx from "clsx";
import { renderInline } from "../../utils/inlineMarkup.jsx";
import styles from "./Note.module.css";

const TONE_LABEL = {
  info: "Довідка",
  tip: "Порада",
  guide: "Наостанок",
  warn: "Важливо",
};

export function Note({ tone = "info", title, c }) {
  return (
    <aside className={clsx(styles.note, styles[tone])}>
      <span className={styles.tag}>{title ? title : TONE_LABEL[tone]}</span>
      <p className={styles.text}>{renderInline(c)}</p>
    </aside>
  );
}
