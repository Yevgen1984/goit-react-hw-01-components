import {UserCard} from './Profile/UserCard';
import user from './Profile/user.json';
// import {StatisticDate} from './Statistics/data';

export const App = () => {
  return (
    <> 
    
    <UserCard firstUser = {user}/>; 
    {/* <StatisticDate statisticDate = {data}/>   */}

       </>
  );
};

