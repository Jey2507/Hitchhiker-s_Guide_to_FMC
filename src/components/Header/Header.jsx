import { useState } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "../Header/Header.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const getLinkClass = ({ isActive }) =>
    clsx(css.link, { [css.activeLink]: isActive });

  return (
    <header className={css.header}>
      <button className={css.burger} onClick={toggleMenu}>
        <span className={css.burgerLine}></span>
        <span className={css.burgerLine}></span>
        <span className={css.burgerLine}></span>
      </button>

      <nav className={clsx(css.nav, { [css.open]: isMenuOpen })}>
        <NavLink to="/" onClick={closeMenu} className={getLinkClass}>
          Home
        </NavLink>
        <NavLink to="/info" onClick={closeMenu} className={getLinkClass}>
          Info
        </NavLink>
        <NavLink to="/block" onClick={closeMenu} className={getLinkClass}>
          Block
        </NavLink>
        <NavLink to="/domino" onClick={closeMenu} className={getLinkClass}>
          Domino
        </NavLink>
      </nav>
    </header>
  );
}
