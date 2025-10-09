import css from "../Block/Block.module.css"
import YouTubeVideo from "../YouTubeVideo/YouTubeVideo"
import timer from "../../assets/images/time.png";
import clsx from "clsx";

export default function Block() {
    return (
        <>
        <div className={css.guideSection}>
            <h2 className={css.sectionTitle}>Blockbuilding</h2>
            <p className={css.sectionDescription}>Перше і напевно найпростіше покращення яке можна додати до збірки фрідріхом - використання блоків.<br />Замість того щоб збирати хрест, а потім пари, ви будете збирати “квадрат” 2*2*1, потім додавати його до ребра і отримувати блок 2*2*2 (блок як в x-cross без зібраних 2 елементів хреста), потім додаючи до нього ще один квадрат 2*2*3(блок як в xх-cross без зібраних 1 елементу хреста), і останній квадрат до F2L-1, після чого збірку можна закінчити як зазвичай.</p>
            <h3 className={css.textList}>Ресурси:</h3>
            {/* <ul className={css.list}>
                <li>
                    <p>Блокбілдинг</p>
                </li>
                <li>
                    <p>Тренування</p>
                </li>
                <li>
                    <p>“Біблія” кх, великий текстовий туторіал, що також буде корисним для всього в цій главі</p>
                </li>
                <li>
                    <p>Великий туторіал, який буде корисним для всіх тем до в главі про блокбілдинг</p>
                </li>   
            </ul>
            <ul className={css.resourcesList}>
                <li className={css.itemVideo}>
                <YouTubeVideo videoId={"EVxOn0QVVoE"} color={"purple"} />
                </li>
                <li className={css.itemLink}>
                    <a className={clsx(css.linkButton,css.buttonPrimary)} href="https://cubegrass.appspot.com/block_trainer/" target="_blank" rel="noopener noreferrer">
                        <img className={css.image} src={timer} alt="timer" />
                    </a>
                    <a className={clsx(css.linkButton,css.buttonSecondary)} href="https://fmcsolves.cubing.net/fmc_tutorial_ENG.pdf" target="_blank" rel="noopener noreferrer">
                    “Біблія” кх
                    </a>
                </li>
                <li className={css.itemVideo}>
                <YouTubeVideo videoId={"YCuDT4Bfg4s"} color={"orange"}/>
                </li>
            </ul> */}
          </div>
        </>
    )
}