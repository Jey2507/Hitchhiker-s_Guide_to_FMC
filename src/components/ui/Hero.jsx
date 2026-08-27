import { Link } from "react-router-dom";
import stars from "../../assets/images/stars.jpg";
import planets from "../../assets/images/planets.png";
import spaceship from "../../assets/images/spaceship.png";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${stars})` }}>
      <img src={planets} alt="" className={styles.planets} aria-hidden="true" />
      <img src={spaceship} alt="" className={styles.spaceship} aria-hidden="true" />

      <span className={styles.eyebrow}>The Hitchhiker&rsquo;s Guide to FMC</span>
      <h1 className={styles.title}>Путівник по FMC для космотуристів</h1>
      <p className={styles.lede}>
        Детальний туторіал зі збірки кубика Рубіка на кількість ходів: від першого CFOP-соло до
        DR + HTR, яким збирають світові топи за 21–22 рухи. Не панікуйте — і візьміть рушник.
      </p>
      <div className={styles.actions}>
        <Link to="/blockbuilding" className={styles.primary}>
          Почати з блокбілдингу
        </Link>
        <Link to="/domino" className={styles.secondary}>
          Одразу до Domino Reduction
        </Link>
      </div>
    </div>
  );
}
