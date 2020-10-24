import React from 'react';
import SignOut from './SignOut';
import SignIn from './SignIn';
import HomePageIcon from './HomePageIcon';
import styles from '../styles/topBar.module.css';
import {useSelector} from 'react-redux';

function TopBar(){
  const userInfo = useSelector(state => state.userInfo.userInfo);

  return(
  (Object.keys(userInfo).length === 0 && userInfo.constructor === Object) ? (
    <div className={styles.topBar}>
      <div className={styles.homePageIconContainer}><HomePageIcon/></div>
      <div className={styles.buttonContainer}><SignIn/></div>
    </div>
  ) : (
    <div className={styles.topBar}>
      <div className={styles.homePageIconContainer}><HomePageIcon/></div>
      <img className={styles.profileImage} src={userInfo.photoURL} alt="avatar"/>
      <div className={styles.displayName}> {userInfo && userInfo.displayName}</div>
      <div className={styles.buttonContainer}><SignOut/></div>
    </div>
     )
  )
}

export default TopBar;
