import React from 'react';
import {useHistory} from 'react-router-dom';
import styles from '../styles/topBar.module.css';
import {useSelector} from 'react-redux';

function UserProfileButton(){
  let history = useHistory();
  const userInfo = useSelector(state => state.userInfo.userInfo);

  function handleClick(){
    history.push('/userProfile');
  }

  return(
    <button className={styles.userProfileButton} onClick={handleClick}>
      <img className={styles.profileImage} src={userInfo.photoURL} alt="avatar"/>
      <div className={styles.displayName}> {userInfo && userInfo.displayName} </div>
    </button>
  )
}

export default UserProfileButton;
