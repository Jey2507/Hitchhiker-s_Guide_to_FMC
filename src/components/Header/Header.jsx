import css from "../Header/Header.module.css";

export default function Header() {
 
  return (
    <header className={css.header}>
      <h1 className={css.heading}>Путівник по кх<br/> для космотуристів</h1>
    </header>
  );
}
