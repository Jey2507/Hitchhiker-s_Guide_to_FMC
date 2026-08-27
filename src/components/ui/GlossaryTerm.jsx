import { useState } from "react";
import styles from "./GlossaryTerm.module.css";

// Wraps a glossary term mention inline: dotted underline, and a definition
// popup on hover/focus (desktop) or tap (touch — click toggles it, since
// touch devices don't have hover). Used by src/utils/inlineMarkup.jsx.
export function GlossaryTerm({ term, def, children }) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className={styles.term}
      tabIndex={0}
      role="button"
      aria-expanded={open}
      onClick={(e) => {
        e.stopPropagation();
        setOpen((v) => !v);
      }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape") setOpen(false);
      }}
    >
      {children}
      {open && (
        <span className={styles.tooltip} role="tooltip">
          <strong>{term}</strong> — {def}
        </span>
      )}
    </span>
  );
}
