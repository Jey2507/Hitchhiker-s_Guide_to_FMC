import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.wrap}>
      <span className={styles.code}>404</span>
      <h1>Ця грань кубика загубилась у космосі</h1>
      <p>Такої сторінки немає. Можливо, вона за межами 80 ходів.</p>
      <Link to="/" className={styles.link}>
        ← Повернутись на початок
      </Link>
    </div>
  );
}
