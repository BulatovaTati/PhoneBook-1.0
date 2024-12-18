import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import s from './GoBack.module.css';

const BackLink = ({ to, children }) => (
  <Link to={to} className={s.goBack}>
    <HiArrowLeft size="24" />
    {children}
  </Link>
);

export default BackLink;
