import React from 'react';
import SignOut from './SignOut';
import HomePageIcon from './HomePageIcon';
import styles from '../styles/topBar.module.css';
import {connect} from 'react-redux';

function TopBar(props){

  return(
    <div className={styles.topBar}>
      <div className={styles.homePageIconContainer}><HomePageIcon/></div>
      <img className={styles.profileImage} src={props.userInfo.photoURL}/>
      <div className={styles.displayName}> {props.userInfo ? props.userInfo.displayName : null}</div>
      <div className={styles.buttonContainer}><SignOut/></div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    userInfo: state.userInfoReducer.userInfo
  };
}

export default connect(mapStateToProps, null)(TopBar)
