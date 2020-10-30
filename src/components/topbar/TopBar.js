import React from 'react';
import SignOut from 'components/topbar/LogOut';
import SignIn from 'components/topbar/RedirectToLogin';
import HomePageIcon from 'components/topbar/HomePageIcon';
import UserProfileButton from 'components/topbar/UserProfileButton';
import styles from 'styles/topBar.module.css';
import {useSelector} from 'react-redux';

function TopBar(){
  const userInfo = useSelector(state => state.userInfo.userInfo);

  return(
  (Object.keys(userInfo).length === 0 && userInfo.constructor === Object) ? (
    <div className={styles.container}>
      <div className={styles.homePageIconContainer}><HomePageIcon/></div>
      <div className={styles.signInOutButtonContainer}><SignIn/></div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.homePageIconContainer}><HomePageIcon/></div>
      <div className={styles.userProfileButtonContainer}><UserProfileButton/></div>
      <div className={styles.signInOutButtonContainer}><SignOut/></div>
    </div>
     )
  )
}

export default TopBar;
