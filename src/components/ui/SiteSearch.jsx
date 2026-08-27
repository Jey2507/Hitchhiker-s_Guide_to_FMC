import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { searchSite } from "../../utils/searchIndex.js";
import styles from "./SiteSearch.module.css";

// Search trigger + modal for the whole guide. Mounted once inside Sidebar
// (which stays mounted on mobile too — see AppShell), so this is the single
// place the global Ctrl/Cmd+K shortcut is registered.
export function SiteSearch({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const results = useMemo(() => searchSite(query), [query]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      // Wait a frame so the input is actually in the DOM before focusing.
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    const onKeyDown = (e) => {
      const isShortcut = (e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k";
      if (isShortcut) {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function go(result) {
    navigate(`${result.pagePath}#${result.sectionId}`);
    setOpen(false);
    onNavigate?.();
  }

  function onInputKeyDown(e) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[activeIndex]) {
      e.preventDefault();
      go(results[activeIndex]);
    }
  }

  return (
    <>
      <button type="button" className={styles.trigger} onClick={() => setOpen(true)}>
        <svg viewBox="0 0 20 20" className={styles.triggerIcon} aria-hidden="true">
          <circle cx="9" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <line x1="13.4" y1="13.4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className={styles.triggerText}>Пошук по гайду</span>
      </button>

      {open &&
        createPortal(
          <div className={styles.overlay} onClick={() => setOpen(false)}>
            <div className={styles.dialog} role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
              <input
                ref={inputRef}
                type="text"
                className={styles.input}
                placeholder="Шукати EO, NISS, DR, HTR…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onInputKeyDown}
              />
              <ul className={styles.results}>
                {query.trim() && results.length === 0 && <li className={styles.empty}>Нічого не знайдено</li>}
                {results.map((r, i) => (
                  <li key={`${r.pagePath}#${r.sectionId}`}>
                    <button
                      type="button"
                      className={i === activeIndex ? styles.resultActive : styles.result}
                      onMouseEnter={() => setActiveIndex(i)}
                      onClick={() => go(r)}
                    >
                      <span className={styles.resultPath}>
                        {r.pageLabel}
                        {r.parentLabel ? ` / ${r.parentLabel}` : ""} / {r.sectionLabel}
                      </span>
                      {r.excerpt && <span className={styles.resultExcerpt}>{r.excerpt}</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
