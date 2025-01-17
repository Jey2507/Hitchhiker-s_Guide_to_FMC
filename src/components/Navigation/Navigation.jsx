import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css"
import logo from "../../assets/images/rubik.png"

const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

export default function Navigation() { 
    return (
        <div className={css.navBox}>
            <img className={css.logo} src={logo} alt="cube" />
        <nav className={css.navbar}>
            <NavLink to="/" className={getNavLinkClass}>Головна</NavLink>
            <NavLink to="/movies" className={getNavLinkClass}>Теорія</NavLink>
        </nav>
        </div>
    )
}