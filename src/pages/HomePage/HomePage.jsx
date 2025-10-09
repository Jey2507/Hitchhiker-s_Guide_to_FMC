import css from "../HomePage/HomePage.module.css";
import cube from "../../assets/images/rubik_cube.png";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className={css.container}>
        <div className={css.guideContainer}>
          <p className={css.guideIntro}>
          В цьому гайді я спробую пояснити айсберг, яким є збірка на кількість ходів - почати можна дуже просто, але як би довго ти не копав, завжди є щось нове.<br/><br/>
          - Я опишу поетапно збірку фрідріхом, відносно просто збирати саб40<br/><br/>
          - Збірку блокбілдингом зі вставками - відносно просто збирати за 29-30<br/><br/>
          - Та Збірку др+хтр - метод яким збирають світові топи за 21-22 рухи, надаючи коментарі та ресурси</p>
        </div>
        <p className={css.guideIntroOther}>Головне не забувайте, що практикувати вивчене не менш важливо ніж вивчати нові техніки<br/><span className={css.spanTwo}>Саме техніки, бо алгоритмів як ви їх знаєте в кх достатньо мало, і все тримається на техніках та їх розумінні</span>.</p>
        <NavLink to="/info" className={css.buttonNext}>next</NavLink>
      <div className={css.imageCubeWrapper}>
        <img className={css.imageCube} src={cube} alt="rubik's cube" />
        <div className={css.shadow}></div>
      </div>
    </div>

  );
}
