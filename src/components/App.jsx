import { UserCard } from './Profile/UserCard';
import user from './Profile/user.json';
import { StatisticDate } from './Statistics/Data.jsx';
import data from './Statistics/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from './FriendList/friends.json';


export const App = () => {
  return (
    <>
      <UserCard firstUser={user} />;
      <StatisticDate title="Upload stats" stats={data} />
      <FriendList friends={friends}/>; 
    </>
  );
};
