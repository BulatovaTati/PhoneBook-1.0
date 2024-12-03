import PropTypes from 'prop-types';
import {
  container,
  descriptionContainer,
  userAvatar,
  userName,
  userTag,
  userLocation,
  statsList,
  statsItem,
  statsQuantity,
} from './Profile.module.css';

function Profile({
  username,
  tag,
  location,
  avatar = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats,
}) {
  return (
    <div className={container}>
      <div className={descriptionContainer}>
        <img className={userAvatar} src={avatar} alt={username + ' ' + 'avatar'} />
        <p className={userName}>{username}</p>
        <p className={userTag}>@{tag}</p>
        <p className={userLocation}>{location}</p>
      </div>
      <ul className={statsList}>
        <li className={statsItem}>
          <span>Followers</span>
          <span className={statsQuantity}>{stats.followers}</span>
        </li>
        <li className={statsItem}>
          <span>Views</span>
          <span className={statsQuantity}>{stats.views}</span>
        </li>
        <li className={statsItem}>
          <span>Likes</span>
          <span className={statsQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
