import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ children }) => {
  return <p className={s.noContact}>{children}</p>;
};

Notification.propTypes = {
  children: PropTypes.string,
};

export default Notification;
