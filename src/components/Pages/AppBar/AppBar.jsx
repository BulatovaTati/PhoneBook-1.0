import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../../Auth/UserMenu/UserMenu';
import AuthNav from '../../Auth/AuthNav/AuthNav';
import s from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <div className="container">
        <nav className={s.navList}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
