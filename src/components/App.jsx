import Profile from './profile/Profile';
import userData from './profile/userData.json';

import FriendList from './friends/FriendList/friendsList';
import friends from './friends/friends.json';

import TransactionHistory from './transactions/transactionHistory';
import transactions from './transactions/transactions.json';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
export default App;
