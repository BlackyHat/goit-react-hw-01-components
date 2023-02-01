import { Profile } from './Profile/Profile';
import { Section } from './Section/Section';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import friends from './friends.json';
import user from './user.json';
import data from './data.json';
import transactions from './transactions.json';
import { updateArray } from './Utils/filterData';

const newData = updateArray(data);

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Section title="Upload stats" stats={newData}></Section>
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};
