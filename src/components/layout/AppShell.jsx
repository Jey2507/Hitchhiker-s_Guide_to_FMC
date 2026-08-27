import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import clsx from "clsx";
import { Sidebar } from "./Sidebar.jsx";
import { Topbar } from "./Topbar.jsx";
import { Footer } from "./Footer.jsx";
import { useScrollToHash } from "../../hooks/useScrollToHash.js";
import { useDocumentMeta } from "../../hooks/useDocumentMeta.js";
import styles from "./AppShell.module.css";

export function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  useScrollToHash();
  useDocumentMeta();

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <div className={styles.shell}>
      <Topbar onMenuToggle={() => setMenuOpen((v) => !v)} menuOpen={menuOpen} />
      <div className={styles.body}>
        <div className={clsx(styles.sidebarWrap, menuOpen && styles.sidebarOpen)}>
          <Sidebar onNavigate={() => setMenuOpen(false)} />
        </div>
        {menuOpen && (
          <button
            type="button"
            className={styles.backdrop}
            aria-label="Закрити меню"
            onClick={() => setMenuOpen(false)}
          />
        )}
        <main className={styles.main}>
          <div className={styles.content}>
            <Outlet />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}
