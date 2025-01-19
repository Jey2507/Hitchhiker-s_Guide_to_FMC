import Block from "../../components/Block/Block";
import css from "../BlockPage/BlockPage.module.css";

export default function BlockPage() {
  

  return (
    <div className={css.container}>
      <h2 className={css.heading}>Блокбілдинг</h2>
      <div className={css.guideContainer}>
        <Block />
      </div>
    </div>
  );
}
