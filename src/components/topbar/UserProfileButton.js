import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from 'styles/topBar.module.css';
import { useSelector } from 'react-redux';

function UserProfileButton(){
  let history = useHistory();
  const user = useSelector(state => state.user);

  function handleClick(){
    history.push('/userProfile');
  }

  return(
    <button className={styles.userProfileButton} onClick={handleClick}>
      <img className={styles.profileImage} src={user.photoURL} alt="avatar"/>
      <div className={styles.displayName}> {user && user.displayName} </div>
    </button>
  );
}

export default UserProfileButton;
