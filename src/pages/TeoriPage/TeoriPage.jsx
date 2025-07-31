import css from '../TeoriPage/TeoriPage.module.css';
import telegram from "../../assets/images/telegram.png";
import discord from "../../assets/images/discord.png";
import facebook from "../../assets/images/facebook.png";
import Swiper from "../../components/Swiper/Swiper.jsx";
// import Begin from '../../components/Begin/Begin.jsx';

export default function TeoriPage() {
    return (
        <div>
          <div className={css.container}>
          <h2 className={css.heading}>Інфа по кх</h2>
            <div className={css.socialBox}>
              <h3 className={css.title}>Одразу зазначу корисні групи, де можна отримати відповіді на питання:</h3>
                <ul className={css.list}>
                  <li className={css.link}>
                    <a href="https://t.me/fmcgeeks" target='blank'>
                      <img className={css.image} src={telegram} alt="telegram" />
                      <p className={css.descr}> Tелеграм чат по кх</p>
                    </a>
                  </li>
                  <li className={css.link}>
                    <a href="https://discord.gg/cpF5ReAMJQ" target='blank'>
                      <img className={css.image} src={discord} alt="discord" />
                      <p className={css.descr}>Діскорд сервер по кх</p>
                    </a>
                  </li>
                  <li className={css.link}>
                    <a href="https://www.facebook.com/groups/1422080808012720/?ref=share" target='blank'>
                    <img className={css.image} src={facebook} alt="facebook" />
                    <p className={css.descr}>Група в фейсбук по кх </p>
                    </a>        
                  </li>
                </ul>
            </div>
            <Swiper />
            {/* <Begin /> */}
          </div>
        </div>
    );
}