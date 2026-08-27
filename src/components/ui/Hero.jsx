import { Link } from "react-router-dom";
import stars from "../../assets/images/stars.jpg";
import planets from "../../assets/images/planets.png";
import spaceship from "../../assets/images/spaceship.png";
import authorPhoto from "../../assets/images/author-yuriy.png";
import styles from "./Hero.module.css";

const AUTHOR_WCA_URL = "https://www.worldcubeassociation.org/persons/2018RIAB01";

export function Hero() {
  return (
    <div className={styles.hero} style={{ backgroundImage: `url(${stars})` }}>
      <img src={planets} alt="" className={styles.planets} aria-hidden="true" />
      <img src={spaceship} alt="" className={styles.spaceship} aria-hidden="true" />
      <a
        href={AUTHOR_WCA_URL}
        target="_blank"
        rel="noreferrer"
        className={styles.author}
      >
        <span className={styles.authorName}>від Юрія Рябова</span>
        <img src={authorPhoto} alt="" className={styles.authorPhoto} aria-hidden="true" />
      </a>

      <span className={styles.eyebrow}>The Hitchhiker&rsquo;s Guide to FMC</span>
      <h1 className={styles.title}>Путівник по FMC для космотуристів</h1>
      <p className={styles.lede}>
        Детальний туторіал зі збірки кубика Рубіка на кількість ходів: від першого CFOP-соло до
        DR + HTR, яким збирають світові топи за 21–22 рухи. Спокійніше, зараз все поясню, тут не багато :)
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
