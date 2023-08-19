import Profile from './Profile/Profile.jsx';
import user from './user.json';
import Statistics from './Statistics/Statistics.jsx';
import data from './data.json';
import FriendList from './FriendList/FriendList.jsx';
import friends from './friends.json';
import transactions from './transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
