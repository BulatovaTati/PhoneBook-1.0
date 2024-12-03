import PropTypes from 'prop-types';
import { friendsAvatar, friendsName, isOnline, isOffline } from './FriendListItem.module.css';

function FriendListItem({ friend: { avatar, name, isOnline: isTrue } }) {
  return (
    <>
      <img className={friendsAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={friendsName}>{name}</p>
      <p className={isTrue ? isOnline : isOffline}>{isTrue ? 'Online' : 'Offline'}</p>
    </>
  );
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};

export default FriendListItem;
