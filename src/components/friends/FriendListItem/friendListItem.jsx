import PropTypes from 'prop-types';
import { friendsAvatar, friendsName, isOnline, isOffline } from './friendListItem.module.css';

function FriendListItem({ friend: { avatar, name, isOnline: isTrue } }) {
  return (
    <>
      <img className={friendsAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={friendsName}>{name}</p>
      {isTrue ? <p className={isOnline}>Online</p> : <p className={isOffline}>Offline</p>}
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
