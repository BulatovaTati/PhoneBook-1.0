import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../../redux/auth/operations';
import { selectUser } from '../../../redux/auth/selectors';
import Button from '@mui/material/Button';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div className={s.userContainer}>
      <p className={s.userName}>Welcome, {name}</p>
      <Button type="submit" onClick={() => dispatch(logOut())} fullWidth variant="contained">
        Log out
      </Button>
    </div>
  );
};

export default UserMenu;
