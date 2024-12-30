import clsx from 'clsx';
import s from '../../Auth/AuthNav/AuthNav.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.navLink, isActive && s.active);
};

export default buildLinkClass;
