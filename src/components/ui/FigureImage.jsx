import { useEffect, useRef, useState } from "react";
import styles from "./FigureImage.module.css";

const CLOSE_MS = 180;

export function FigureImage({ src, alt, caption }) {
  const [mounted, setMounted] = useState(false);
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef(null);

  const openLightbox = () => {
    clearTimeout(closeTimer.current);
    setClosing(false);
    setMounted(true);
  };

  const closeLightbox = () => {
    setClosing(true);
    closeTimer.current = setTimeout(() => {
      setMounted(false);
      setClosing(false);
    }, CLOSE_MS);
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    if (!mounted) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [mounted]);

  return (
    <figure className={styles.figure}>
      <button
        type="button"
        className={styles.trigger}
        onClick={openLightbox}
        aria-label="Збільшити зображення"
      >
        <img src={src} alt={alt} loading="lazy" />
      </button>
      {caption && <figcaption>{caption}</figcaption>}

      {mounted && (
        <div
          className={`${styles.overlay} ${closing ? styles.closing : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className={styles.close}
            onClick={closeLightbox}
            aria-label="Закрити"
          >
            ✕
          </button>
          <div
            className={`${styles.box} ${closing ? styles.closing : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={src} alt={alt} className={styles.overlayImg} />
          </div>
        </div>
      )}
    </figure>
  );
}
