import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem'; // Importuj komponent FriendListItem
import styles from './FriendList.module.css'; // Importuj klasy CSS

const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(({ id, ...props }) => (
        <FriendListItem key={id} {...props} />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // ... inne propsy dla FriendListItem
    })
  ).isRequired,
};

export default FriendList;
