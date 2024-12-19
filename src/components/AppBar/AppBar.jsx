import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './AppBar.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.navLink, isActive && s.active);
};

const AppBar = () => (
  <>
    <header className={s.header}>
      <div className="container">
        <nav>
          <NavLink to="/" end className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="movies" className={buildLinkClass}>
            Movie
          </NavLink>
        </nav>
      </div>
    </header>
  </>
);

export default AppBar;
