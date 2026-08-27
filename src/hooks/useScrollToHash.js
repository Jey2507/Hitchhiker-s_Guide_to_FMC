import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the element matching the URL hash whenever the route changes,
// with a small delay so the new page has actually painted, and offsets for
// the sticky mobile topbar.
export function useScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
      return;
    }
    const id = hash.replace("#", "");
    const scroll = () => {
      const el = document.getElementById(id);
      if (!el) return false;
      const top = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top, behavior: "smooth" });
      return true;
    };
    if (!scroll()) {
      const timer = setTimeout(scroll, 60);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);
}
