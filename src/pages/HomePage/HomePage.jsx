import css from "../HomePage/HomePage.module.css";
import spaceship from "../../assets/images/spaceship.png";
import cube from "../../assets/images/rubik_cube.png";
import imagePlanet from "../../assets/images/planets.png";
import imageIce from "../../assets/images/unnamed.png";

export default function HomePage() {
  return (
    <div className={css.container}>
      <h2 className={css.heading}>Путівник по кх для космотуристів</h2>
        <div className={css.guideContainer}>
          <p className={css.guideIntro}>
          В цьому гайді я спробую пояснити айсберг, яким є збірка на кількість ходів - почати можна дуже просто, але як би довго ти не копав, завжди є щось нове.</p>
          <p className={css.guideIntro}>Я опишу поетапно збірку фрідріхом, відносно просто збирати саб40</p>
          <p className={css.guideIntro}>Збірку блокбілдингом зі вставками - відносно просто збирати за 29-30</p>
          <p className={css.guideIntro}>Та Збірку др+хтр - метод яким збирають світові топи за 21-22 рухи, надаючи коментарі та ресурси</p>
        </div>
        <p className={css.guideIntroOther}>Головне не забувайте, що практикувати вивчене не менш важливо ніж вивчати нові техніки<br/><span className={css.spanTwo}>Саме техніки, бо алгоритмів як ви їх знаєте в кх достатньо мало, і все тримається на техніках та їх розумінні</span>.</p>
      <img className={css.imageIce} src={imageIce} alt="imageIce" />
      <img className={css.imagePlanet} src={imagePlanet} alt="imagePlanet" />
      <img className={css.imageSpace} src={spaceship} alt="spaceship" />
      <div className={css.imageCubeWrapper}>
        <img className={css.imageCube} src={cube} alt="rubik's cube" />
        <div className={css.shadow}></div>
      </div>
    </div>

  );
}
