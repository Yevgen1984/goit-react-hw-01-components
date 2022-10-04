// import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

// import styles from './Data.module.css';

export const FriendList = ({ friends }) => (
  <ul className="friends">
    {friends.map(friend => (
      <FriendListItem {...friend} />
    ))}
  </ul>
);
