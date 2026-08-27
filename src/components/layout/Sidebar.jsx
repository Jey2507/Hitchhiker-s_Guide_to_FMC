import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { NAV } from "../../content/navigation.js";
import { useActiveSection } from "../../hooks/useActiveSection.js";
import rubikCube from "../../assets/images/rubik_cube.png";
import styles from "./Sidebar.module.css";

export function Sidebar({ onNavigate }) {
  const location = useLocation();
  const activePage = NAV.find((page) => page.path === location.pathname) ?? NAV[0];
  const sectionIds = activePage.sections.map((s) => s.id);
  const activeSectionId = useActiveSection(sectionIds);

  return (
    <nav className={styles.sidebar} aria-label="Навігація по гайду">
      <Link to="/" className={styles.brand} onClick={onNavigate}>
        <img src={rubikCube} alt="" className={styles.brandIcon} />
        <span className={styles.brandText}>
          Путівник по FMC
          <small>для космотуристів</small>
        </span>
      </Link>

      <ul className={styles.pages}>
        {NAV.map((page) => {
          const isActivePage = page.path === activePage.path;
          return (
            <li key={page.path}>
              <Link
                to={page.path}
                onClick={onNavigate}
                className={clsx(styles.pageLink, isActivePage && styles.pageLinkActive)}
              >
                {page.label}
              </Link>
              {isActivePage && (
                <ul className={styles.sections}>
                  {page.sections.map((section) => (
                    <li key={section.id}>
                      <Link
                        to={`${page.path}#${section.id}`}
                        onClick={onNavigate}
                        className={clsx(
                          styles.sectionLink,
                          activeSectionId === section.id && styles.sectionLinkActive
                        )}
                      >
                        {section.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
