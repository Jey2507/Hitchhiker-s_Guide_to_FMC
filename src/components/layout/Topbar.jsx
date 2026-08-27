import { Link } from "react-router-dom";
import rubikCube from "../../assets/images/rubik_cube.png";
import styles from "./Topbar.module.css";

export function Topbar({ onMenuToggle, menuOpen }) {
  return (
    <header className={styles.topbar}>
      <Link to="/" className={styles.brand}>
        <img src={rubikCube} alt="" className={styles.icon} />
        <span>Путівник по FMC</span>
      </Link>
      <button
        type="button"
        className={styles.menuButton}
        aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
        aria-expanded={menuOpen}
        data-open={menuOpen || undefined}
        onClick={onMenuToggle}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>
    </header>
  );
}
