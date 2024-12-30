import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import s from '../../Auth/AuthNav/AuthNav.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink to="/" className={s.NavLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={s.NavLink}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
