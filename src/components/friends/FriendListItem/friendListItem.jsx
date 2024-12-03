import PropTypes from 'prop-types';
import {
  friendsItem,
  friendsAvatar,
  friendsName,
  isOnline,
  isOffline,
} from './friendListItem.module.css';

function FriendListItem({ avatar, name, isOnline: isTrue }) {
  return (
    <li className={friendsItem}>
      <img className={friendsAvatar} src={avatar} alt="Avatar" width="48" />
      <p className={friendsName}>{name}</p>
      {isTrue ? <p className={isOnline}>Online</p> : <p className={isOffline}>Offline</p>}
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
