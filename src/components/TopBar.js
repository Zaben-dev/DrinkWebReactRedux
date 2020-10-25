import React from 'react';
import SignOut from './SignOut';
import SignIn from './SignIn';
import HomePageIcon from './HomePageIcon';
import UserProfileButton from './UserProfileButton';
import styles from '../styles/topBar.module.css';
import {useSelector} from 'react-redux';

function TopBar(){
  const userInfo = useSelector(state => state.userInfo.userInfo);

  return(
  (Object.keys(userInfo).length === 0 && userInfo.constructor === Object) ? (
    <div className={styles.topBar}>
      <div className={styles.homePageIconContainer}><HomePageIcon/></div>
      <div className={styles.signInOutButtonContainer}><SignIn/></div>
    </div>
  ) : (
    <div className={styles.topBar}>
      <div className={styles.homePageIconContainer}><HomePageIcon/></div>
      <div className={styles.userProfileButtonContainer}><UserProfileButton/></div>
      <div className={styles.signInOutButtonContainer}><SignOut/></div>
    </div>
     )
  )
}

export default TopBar;
