import Loader from '../Loader/Loader';
import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import s from './SharedLayout.module.css';

const SharedLayout = () => (
  <>
    <header className={s.header}>
      <div className="container">
        <nav>
          <NavLink to="/" end className={s.navLink}>
            Home
          </NavLink>
          <NavLink to="movies" className={s.navLink}>
            Movie
          </NavLink>
        </nav>
      </div>
    </header>
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </>
);

export default SharedLayout;
