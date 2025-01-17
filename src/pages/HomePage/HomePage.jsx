import css from "../HomePage/HomePage.module.css";
import spaceship from "../../assets/images/spaceship.png";
import cube from "../../assets/images/rubik_cube.png";
import imagePlanet from "../../assets/images/planets.png";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h2 className={css.heading}>Путівник по кх<br />Для космотуристів</h2>
      <div className={css.guideContainer}>
      
        <p className={css.guideIntro}>
        В цьому гайді я спробую пояснити айсберг, яким є збірка на кількість ходів - почати можна дуже просто, але як би довго ти не копав, завжди є щось нове.<br/><br/>
        Я опишу поетапно збірку фрідріхом<br/><span className={css.spanOne}>Відносно просто збирати саб40</span><br/><br/>Збірку блокбілдингом зі вставками <br/><span className={css.spanOne}>Відносно просто збирати за 29-30</span><br/><br/>Та Збірку др+хтр<br/><span className={css.spanOne}>Метод яким збирають світові топи за 21-22 рухи</span>, надаючи коментарі та ресурси.<br/><br/> Головне не забувайте, що практикувати вивчене не менш важливо ніж вивчати нові техніки<br/><span className={css.spanTwo}>Саме техніки, бо алгоритмів як ви їх знаєте в кх достатньо мало, і все тримається на техніках та їх розумінні</span>.
        </p>
      </div>
      <img className={css.imagePlanet} src={imagePlanet} alt="imagePlanet" />
      <img className={css.imageSpace} src={spaceship} alt="spaceship" />
      <div className={css.imageCubeWrapper}>
        <img className={css.imageCube} src={cube} alt="rubik's cube" />
        <div className={css.shadow}></div>
      </div>
    </div>

  );
}
