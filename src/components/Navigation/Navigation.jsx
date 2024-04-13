import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const addNavLinkActiveClass = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Navigation = () => {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink className={addNavLinkActiveClass} to="/">
          Home
        </NavLink>
        <NavLink className={addNavLinkActiveClass} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </header>
  );
};

export default Navigation;
