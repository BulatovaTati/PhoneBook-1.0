import PropTypes from 'prop-types';
import { container, friendsList, friendsItem } from './friendsList.module.css';
import FriendListItem from '../FriendListItem/friendListItem';

function FriendList({ friends }) {
  return (
    <div className={container}>
      <ul className={friendsList}>
        {friends.map(friend => (
          <li className={friendsItem} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
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
