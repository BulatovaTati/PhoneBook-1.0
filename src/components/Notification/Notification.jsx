import PropTypes from 'prop-types';
import { text } from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={text}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
