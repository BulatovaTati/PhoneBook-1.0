import PropTypes from 'prop-types';
import { container, friendsList } from './friendsList.module.css';
import FriendListItem from '../FriendListItem/friendListItem';

function FriendList({ friends }) {
  return (
    <div className={container}>
      <ul className={friendsList}>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
        ))}
      </ul>
    </div>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
