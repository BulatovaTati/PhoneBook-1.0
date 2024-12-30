import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register" className={s.NavLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={s.NavLink}>
        Log In
      </NavLink>
    </div>
  );
};
export default AuthNav;
