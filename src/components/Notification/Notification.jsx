import PropTypes from 'prop-types';

const Notification = ({ children }) => {
  return <p>{children}</p>;
};

Notification.propTypes = {
  children: PropTypes.string,
};

export default Notification;
