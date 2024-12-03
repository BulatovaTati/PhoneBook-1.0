import Profile from './profile/Profile';
import userData from './profile/userData.json';
console.log('userData: ', userData);

function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
    </>
  );
}
export default App;
