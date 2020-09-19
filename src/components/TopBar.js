import React from 'react';
import SignOut from './SignOut';
import HomePageIcon from './HomePageIcon';
import styles from '../styles/topBar.module.css';
import {useSelector} from 'react-redux';

function TopBar(props){
  const userInfo = useSelector(state => state.userInfo.userInfo);

  return(
    <div className={styles.topBar}>
      <div className={styles.homePageIconContainer}><HomePageIcon/></div>
      <img className={styles.profileImage} src={userInfo.photoURL}/>
      <div className={styles.displayName}> {userInfo && userInfo.displayName}</div>
      <div className={styles.buttonContainer}><SignOut/></div>
    </div>
  )
}

export default TopBar;
